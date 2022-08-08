import { TCate } from "../models/category";
import instance from "./config"

export const getAll = () => {
    return instance.get('/categories');
}

export const read = (id: any) => {
    return instance.get(`/categories/${id}`)
}

export const add = (Category: any) => {
    return instance.post("/Categories", Category);
};

export const getItem = (_id: TCate) => {
    return instance.get(`/categories/${_id}`)
}

export const updateItem = (Category: TCate) => {
    return instance.patch(`/categories/${Category._id}`, Category)
}

export const removeItem = (_id: TCate) => {
    return instance.delete(`/categories/${_id}`)
}