import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const staticCopies = [
  ["produtos", "produtos"],
  ["assets/iconify-icon.js", "assets/iconify-icon.js"],
  ["src/data/produtos.js", "src/data/produtos.js"],
];

function copyStaticFallbackAssets() {
  return {
    name: "copy-static-fallback-assets",
    async writeBundle() {
      await Promise.all(staticCopies.map(async ([from, to]) => {
        const destination = resolve("dist", to);
        await mkdir(resolve(destination, ".."), { recursive: true });
        await cp(resolve(from), destination, { recursive: true });
      }));
    },
  };
}

export default defineConfig({
  plugins: [copyStaticFallbackAssets()],
  server: {
    proxy: {
      "/api": "http://localhost:4002",
      "/uploads": "http://localhost:4002",
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve("index.html"),
        admin: resolve("admin.html"),
      },
    },
  },
});
