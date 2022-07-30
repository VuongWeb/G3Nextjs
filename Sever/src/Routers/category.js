import { Router } from "express";
import { read,listcate ,addcate} from "../controllers/categoryProducts";

const router = Router();

router.get('/category/:id',read)
router.get('/category',listcate)
router.post('/category',addcate)

export default router