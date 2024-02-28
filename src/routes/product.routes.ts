import { Router } from "express";

import {
  getProducts,
  addProductHandler,
  updateProductHandler,
  getProductById,
  deleteProductbyId,
} from "../controllers/product.controllers";

export const router = Router();

router.get("/", getProducts);
router.post("/", addProductHandler);
router.patch("/:id", updateProductHandler);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductbyId);
