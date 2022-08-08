import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/news";

const routerNew = Router();

routerNew.get("/news",list)
routerNew.get("/news/:id",get)
routerNew.post("/news",create)
routerNew.put("/news/:id",update)
routerNew.delete("/news/:id",remove)

export default routerNew