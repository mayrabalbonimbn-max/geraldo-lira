import bcrypt from "bcryptjs";
import { closePool, query } from "../db.js";

async function run() {
  const email = String(process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const password = String(process.env.ADMIN_PASSWORD || "");

  if (!email || !password) {
    throw new Error("Configure ADMIN_EMAIL e ADMIN_PASSWORD no server/.env para criar o admin.");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await query(`
    insert into admin_users (email, password_hash)
    values ($1, $2)
    on conflict (email)
    do update set password_hash = excluded.password_hash
  `, [email, passwordHash]);

  console.log(`Admin pronto: ${email}`);
}

run()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(closePool);
