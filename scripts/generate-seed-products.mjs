import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(rootDir, "src/data/produtos.js");
const outputPath = resolve(rootDir, "seed-products.json");

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const source = await readFile(sourcePath, "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context, { filename: sourcePath });

const products = context.window.catalogProductsData || [];
const seedProducts = products.map((product, index) => ({
  legacy_id: product.id,
  name: product.nome,
  slug: slugify(product.nome || product.id),
  description: product.descricao || null,
  category: product.categoria || null,
  filter: product.filtro || null,
  subcategory: product.subcategoria || null,
  application: product.aplicacao || null,
  keywords: product.palavrasChave || [],
  image_url: product.imagem || null,
  image_path: product.imagem ? product.imagem.replace(/^\//, "") : null,
  is_published: true,
  sort_order: Number(product.numero || index + 1),
}));

await writeFile(outputPath, `${JSON.stringify(seedProducts, null, 2)}\n`);
console.log(`Gerado ${outputPath} com ${seedProducts.length} produtos.`);
