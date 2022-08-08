import { TCategories } from "../models/categories";
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

export const getItem = (_id: TCategories) => {
    return instance.get(`/categories/${_id}`)
}

export const updateItem = (Category: TCategories) => {
    return instance.patch(`/categories/${Category._id}`, Category)
}

export const removeItem = (_id: TCategories) => {
    return instance.delete(`/categories/${_id}`)
}