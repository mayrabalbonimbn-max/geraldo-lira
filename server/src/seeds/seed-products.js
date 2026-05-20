import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { closePool, query } from "../db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.resolve(__dirname, "../../../seed-products.json");

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function uniqueSlug(baseValue, legacyId) {
  const baseSlug = slugify(baseValue || legacyId) || "produto";
  let slug = baseSlug;
  let suffix = 2;

  while (true) {
    const result = await query(
      "select 1 from products where slug = $1 and legacy_id is distinct from $2",
      [slug, legacyId],
    );

    if (result.rowCount === 0) return slug;
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
}

async function upsertCategory(name, sortOrder) {
  if (!name) return;

  await query(`
    insert into categories (name, slug, sort_order, is_active)
    values ($1, $2, $3, true)
    on conflict (slug)
    do update set name = excluded.name, sort_order = least(categories.sort_order, excluded.sort_order)
  `, [name, slugify(name), sortOrder]);
}

async function run() {
  const products = JSON.parse(await readFile(seedPath, "utf8"));

  for (const [index, product] of products.entries()) {
    const legacyId = product.legacy_id || product.id || product.slug;
    const sortOrder = Number(product.sort_order || index + 1);
    const slug = await uniqueSlug(product.slug || product.name, legacyId);

    await upsertCategory(product.category, sortOrder);

    await query(`
      insert into products
        (legacy_id, name, slug, description, category, "filter", image_url, image_path, is_published, sort_order)
      values
        ($1, $2, $3, $4, $5, $6, $7, $8, true, $9)
      on conflict (legacy_id)
      do update set
        name = excluded.name,
        slug = excluded.slug,
        description = excluded.description,
        category = excluded.category,
        "filter" = excluded."filter",
        image_url = excluded.image_url,
        image_path = excluded.image_path,
        sort_order = excluded.sort_order
    `, [
      legacyId,
      product.name,
      slug,
      product.description || null,
      product.category || null,
      product.filter || null,
      product.image_url || null,
      product.image_path || null,
      sortOrder,
    ]);
  }

  console.log(`Seed de produtos concluido: ${products.length} produtos.`);
}

run()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(closePool);
