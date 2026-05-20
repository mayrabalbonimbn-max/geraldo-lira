import { Router } from "express";
import {
  createProduct,
  deleteProductImage,
  listAdminProducts,
  setProductPublishState,
  softDeleteProduct,
  updateProduct,
  uploadProductImage,
} from "../controllers/products.controller.js";
import { requireAdmin } from "../middleware/auth.middleware.js";
import { uploadProductImage as uploadMiddleware } from "../middleware/upload.middleware.js";

const router = Router();

router.use(requireAdmin);

router.get("/products", listAdminProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", softDeleteProduct);
router.patch("/products/:id/publish", setProductPublishState);
router.post("/products/:id/image", uploadMiddleware.single("image"), uploadProductImage);
router.delete("/products/:id/image", deleteProductImage);

export default router;
