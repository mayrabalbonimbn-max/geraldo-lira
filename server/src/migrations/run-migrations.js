import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { closePool, pool, query } from "../db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function ensureMigrationTable() {
  await query(`
    create table if not exists schema_migrations (
      filename text primary key,
      executed_at timestamp not null default now()
    )
  `);
}

async function hasMigration(filename) {
  const result = await query("select 1 from schema_migrations where filename = $1", [filename]);
  return result.rowCount > 0;
}

async function run() {
  await ensureMigrationTable();

  const files = (await readdir(__dirname))
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of files) {
    if (await hasMigration(file)) {
      console.log(`Ignorando ${file}, ja executada.`);
      continue;
    }

    const sql = await readFile(path.join(__dirname, file), "utf8");
    const client = await pool.connect();
    try {
      await client.query("begin");
      await client.query(sql);
      await client.query("insert into schema_migrations (filename) values ($1)", [file]);
      await client.query("commit");
      console.log(`Migration executada: ${file}`);
    } catch (error) {
      await client.query("rollback");
      throw error;
    } finally {
      client.release();
    }
  }
}

run()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(closePool);
