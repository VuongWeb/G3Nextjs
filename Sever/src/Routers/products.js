import { Router } from "express";
import { get } from "mongoose";
import { create, list, remove, update } from "../controllers/products";

const routerProduct = Router();

routerProduct.get("/products",list)
routerProduct.get("/products/:id",get)
routerProduct.post("/products",create)
routerProduct.put("/products/:id",update)
routerProduct.delete("/products/:id",remove)

export default routerProduct