import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { query } from "../db.js";

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    const error = new Error("JWT_SECRET nao configurado.");
    error.status = 500;
    throw error;
  }
  return secret;
}

export async function login(request, response, next) {
  try {
    const email = String(request.body.email || "").trim().toLowerCase();
    const password = String(request.body.password || "");

    if (!email || !password) {
      return response.status(400).json({ error: "Informe email e senha." });
    }

    const result = await query(
      "select id, email, password_hash from admin_users where email = $1",
      [email],
    );

    const user = result.rows[0];
    if (!user) {
      return response.status(401).json({ error: "Credenciais invalidas." });
    }

    const passwordMatches = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatches) {
      return response.status(401).json({ error: "Credenciais invalidas." });
    }

    const token = jwt.sign(
      { sub: user.id, email: user.email, role: "admin" },
      getJwtSecret(),
      { expiresIn: "8h" },
    );

    response.json({
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
}
