import { IUser } from "../models/user";
import instance from "./config";

export const signup = (user : IUser) => {
    return instance.post("/signup", user)
}

export const signin = (user:IUser) => {
    return instance.post("/signin" , user)
}