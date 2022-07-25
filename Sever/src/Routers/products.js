import { Router } from "express";
import { create, list, remove, update } from "../controllers/products";

const router = Router();

router.get("/products",list)
router.get("/products/:id",list)
router.post("/products",create)
router.put("/products/:id",update)
router.delete("/products/:id",remove)

export default router