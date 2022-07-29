import { Router } from "express";
import { read,listcate ,addcate} from "../controllers/categoryProducts";

const router = Router();

router.get('/categoryProducts/:id',read)
router.get('/category',listcate)
router.post('/category',addcate)

export default router