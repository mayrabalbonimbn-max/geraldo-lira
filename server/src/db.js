import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL nao configurado. Configure server/.env antes de iniciar o backend.");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query(text, params = []) {
  return pool.query(text, params);
}

export async function closePool() {
  await pool.end();
}
