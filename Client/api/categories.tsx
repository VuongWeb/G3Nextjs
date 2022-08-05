import { TCategories } from "../models/categories";
import { TProduct } from "../models/products";
import instance from "./config";

export const add = (Category: any) => {
    return instance.post("/Categories", Category);
};

export const getItem = (_id: TCategories) => {
    return instance.get(`/categories/${_id}`)
}

export const updateItem = (Category: TProduct) => {
    return instance.patch(`/categories/${Category._id}`, Category)
}

export const removeItem = (_id: TProduct) => {
    return instance.delete(`/categories/${_id}`)
}