import { Router } from "express";
import { singin, singup } from "../controllers/user";

const route = Router();

route.post("/signup", singup);
route.post("/signin", singin);

export default route;