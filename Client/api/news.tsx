import { TNews } from "../models/news";
import instance from "./config";


export const add = (neww: any) =>{
    return instance.post("/news", neww)
}


export const getItem = (_id: TNews) => {
    return instance.get(`/news/${_id}`)
}

export const updateItem = (neww: TNews) => {
    return instance.patch(`/news/${neww._id}`, neww)
}

export const removeItem = (_id: TNews) => {
    return instance.delete(`/news/${_id}`)
}