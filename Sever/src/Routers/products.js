import { Router } from "express";
import { get } from "mongoose";
import { create, list, remove, update } from "../controllers/products";

const router = Router();

router.get("/products",list)
router.get("/products/:id",get)
router.post("/products",create)
router.put("/products/edit/:id",update)
router.delete("/products/:id",remove)

export default router