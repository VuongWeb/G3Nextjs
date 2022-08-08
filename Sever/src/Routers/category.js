import { Router } from "express";
import { read,listcate ,addcate, remove, removeCate, updateCate} from "../controllers/categoryProducts";

const router = Router();

router.get('/categories/:id',read)
router.get('/categories',listcate)
router.post('/categories',addcate)
router.delete("/categories/:id",removeCate)
router.patch("/categories/:id",updateCate)

export default router