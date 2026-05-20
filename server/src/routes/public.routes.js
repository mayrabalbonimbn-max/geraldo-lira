import { Router } from "express";
import { getPublishedProduct, listPublishedProducts } from "../controllers/products.controller.js";

const router = Router();

router.get("/products", listPublishedProducts);
router.get("/products/:slug", getPublishedProduct);

export default router;
