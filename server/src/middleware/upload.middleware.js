import multer from "multer";

const allowedTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

export const uploadProductImage = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
  fileFilter(_request, file, callback) {
    if (!allowedTypes.has(file.mimetype)) {
      callback(new Error("Envie uma imagem JPG, PNG, WEBP ou GIF."));
      return;
    }

    callback(null, true);
  },
});
