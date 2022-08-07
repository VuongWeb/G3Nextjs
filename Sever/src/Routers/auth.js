import { Router } from "express";
import { Signin, Signup } from "../controllers/auth";


const routeAuth = Router();

routeAuth.post("/signup", Signup);
routeAuth.post("/signin", Signin);


export default routeAuth;