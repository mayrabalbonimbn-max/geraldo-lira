import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import publicRoutes from "./routes/public.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import uploadRoutes from "./routes/upload.routes.js";

dotenv.config({ quiet: true });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storageDir = path.resolve(__dirname, "../storage/catalog-products");

export const app = express();

const corsOrigin = process.env.CORS_ORIGIN || "*";

app.use(cors({
  origin: corsOrigin === "*" ? true : corsOrigin.split(",").map((origin) => origin.trim()),
  credentials: false,
}));

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/uploads/catalog-products", express.static(storageDir, {
  dotfiles: "deny",
  immutable: true,
  maxAge: "30d",
}));

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.use("/api", publicRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/uploads", uploadRoutes);

app.use((error, _request, response, _next) => {
  const isUploadError = error.name === "MulterError" || error.message?.startsWith("Envie uma imagem");
  const status = error.status || (isUploadError ? 400 : 500);
  if (status >= 500) {
    console.error(error);
  }
  response.status(status).json({
    error: status === 500 ? "Erro interno do servidor." : error.message,
  });
});
