import { Router } from "express";
import { create, getitem, list, remove, update } from "../controllers/products";

const routerProduct = Router();

routerProduct.get("/products",list)
routerProduct.get("/products/:id",getitem)
routerProduct.post("/products",create)
routerProduct.patch("/products/:id",update)
routerProduct.delete("/products/:id",remove)

export default routerProduct