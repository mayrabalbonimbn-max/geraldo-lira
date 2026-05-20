import { mkdir, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { query } from "../db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storageDir = path.resolve(__dirname, "../../storage/catalog-products");

function publicUrl(pathname) {
  const baseUrl = String(process.env.PUBLIC_BASE_URL || "").replace(/\/+$/, "");
  return baseUrl ? `${baseUrl}${pathname}` : pathname;
}

const productSelect = `
  id,
  legacy_id,
  name,
  slug,
  description,
  category,
  "filter",
  image_url,
  image_path,
  is_published,
  sort_order,
  created_at,
  updated_at
`;

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function uniqueSlug(name, currentId = null) {
  const baseSlug = slugify(name) || "produto";
  let slug = baseSlug;
  let suffix = 2;

  while (true) {
    const params = currentId ? [slug, currentId] : [slug];
    const sql = currentId
      ? "select 1 from products where slug = $1 and id <> $2"
      : "select 1 from products where slug = $1";
    const result = await query(sql, params);

    if (result.rowCount === 0) return slug;
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
}

function productPayload(body) {
  return {
    name: String(body.name || "").trim(),
    description: String(body.description || "").trim() || null,
    category: String(body.category || "").trim() || null,
    filter: String(body.filter || "").trim() || null,
    image_url: body.image_url || null,
    image_path: body.image_path || null,
    is_published: typeof body.is_published === "boolean" ? body.is_published : body.is_published === "true",
    sort_order: Number.isFinite(Number(body.sort_order)) ? Number(body.sort_order) : 0,
  };
}

function assertProductName(payload) {
  if (!payload.name) {
    const error = new Error("Nome do produto e obrigatorio.");
    error.status = 400;
    throw error;
  }
}

async function removeImageFile(imagePath) {
  if (!imagePath || !imagePath.startsWith("catalog-products/")) return;

  const filename = path.basename(imagePath);
  await unlink(path.join(storageDir, filename)).catch(() => {});
}

export async function listPublishedProducts(_request, response, next) {
  try {
    const result = await query(`
      select ${productSelect}
      from products
      where is_published = true
      order by sort_order asc, created_at asc
    `);
    response.json(result.rows);
  } catch (error) {
    next(error);
  }
}

export async function getPublishedProduct(request, response, next) {
  try {
    const result = await query(`
      select ${productSelect}
      from products
      where slug = $1 and is_published = true
      limit 1
    `, [request.params.slug]);

    if (!result.rows[0]) {
      return response.status(404).json({ error: "Produto nao encontrado." });
    }

    response.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}

export async function listAdminProducts(_request, response, next) {
  try {
    const result = await query(`
      select ${productSelect}
      from products
      order by sort_order asc, created_at asc
    `);
    response.json(result.rows);
  } catch (error) {
    next(error);
  }
}

export async function createProduct(request, response, next) {
  try {
    const payload = productPayload(request.body);
    assertProductName(payload);
    const slug = await uniqueSlug(payload.name);

    const result = await query(`
      insert into products
        (name, slug, description, category, "filter", image_url, image_path, is_published, sort_order)
      values
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      returning ${productSelect}
    `, [
      payload.name,
      slug,
      payload.description,
      payload.category,
      payload.filter,
      payload.image_url,
      payload.image_path,
      payload.is_published,
      payload.sort_order,
    ]);

    response.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}

export async function updateProduct(request, response, next) {
  try {
    const payload = productPayload(request.body);
    assertProductName(payload);
    const slug = await uniqueSlug(payload.name, request.params.id);

    const result = await query(`
      update products
      set
        name = $1,
        slug = $2,
        description = $3,
        category = $4,
        "filter" = $5,
        is_published = $6,
        sort_order = $7
      where id = $8
      returning ${productSelect}
    `, [
      payload.name,
      slug,
      payload.description,
      payload.category,
      payload.filter,
      payload.is_published,
      payload.sort_order,
      request.params.id,
    ]);

    if (!result.rows[0]) {
      return response.status(404).json({ error: "Produto nao encontrado." });
    }

    response.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}

export async function softDeleteProduct(request, response, next) {
  try {
    const result = await query(`
      update products
      set is_published = false
      where id = $1
      returning ${productSelect}
    `, [request.params.id]);

    if (!result.rows[0]) {
      return response.status(404).json({ error: "Produto nao encontrado." });
    }

    response.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}

export async function setProductPublishState(request, response, next) {
  try {
    const isPublished = Boolean(request.body.is_published);
    const result = await query(`
      update products
      set is_published = $1
      where id = $2
      returning ${productSelect}
    `, [isPublished, request.params.id]);

    if (!result.rows[0]) {
      return response.status(404).json({ error: "Produto nao encontrado." });
    }

    response.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}

export async function uploadProductImage(request, response, next) {
  try {
    if (!request.file) {
      return response.status(400).json({ error: "Envie uma imagem." });
    }

    const productResult = await query("select id, image_path from products where id = $1", [request.params.id]);
    const product = productResult.rows[0];

    if (!product) {
      return response.status(404).json({ error: "Produto nao encontrado." });
    }

    await mkdir(storageDir, { recursive: true });

    const filename = `${Date.now()}-${slugify(request.file.originalname.replace(/\.[^.]+$/, "")) || "produto"}.webp`;
    const imagePath = `catalog-products/${filename}`;
    const imageUrl = publicUrl(`/uploads/catalog-products/${filename}`);
    const destination = path.join(storageDir, filename);

    await sharp(request.file.buffer)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(destination);

    const result = await query(`
      update products
      set image_url = $1, image_path = $2
      where id = $3
      returning ${productSelect}
    `, [imageUrl, imagePath, request.params.id]);

    await removeImageFile(product.image_path);

    response.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}

export async function deleteProductImage(request, response, next) {
  try {
    const currentResult = await query("select image_path from products where id = $1", [request.params.id]);
    const previousImagePath = currentResult.rows[0]?.image_path;

    const productResult = await query(`
      update products
      set image_url = null, image_path = null
      where id = $1
      returning ${productSelect}
    `, [request.params.id]);

    const product = productResult.rows[0];
    if (!product) {
      return response.status(404).json({ error: "Produto nao encontrado." });
    }

    await removeImageFile(previousImagePath);

    response.json(product);
  } catch (error) {
    next(error);
  }
}
