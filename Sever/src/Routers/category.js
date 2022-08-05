import { Router } from "express";
import { read,listcate ,addcate, remove} from "../controllers/categoryProducts";

const router = Router();

router.get('/categories/:id',read)
router.get('/categories',listcate)
router.post('/categories',addcate)
router.delete("/categories/:id",remove)

export default router