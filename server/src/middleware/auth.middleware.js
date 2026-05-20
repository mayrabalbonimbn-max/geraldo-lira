import jwt from "jsonwebtoken";

export function requireAdmin(request, response, next) {
  const header = request.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";

  if (!token) {
    return response.status(401).json({ error: "Token ausente." });
  }

  try {
    request.admin = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (_error) {
    return response.status(401).json({ error: "Token invalido ou expirado." });
  }
}
