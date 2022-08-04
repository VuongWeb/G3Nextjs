import { TProduct } from "../models/products";
import instance from "./config";

export const add = (product: any) => {
    return instance.post("/products", product);
};


// export const add = (product: TProduct) => {
//     return instance.post("/products", product)
// }

// export const getAll = () => {
//     return instance.get("/products")
// }

// export const get = (product: TProduct) => {
//     return instance.get(`/products/${product._id}`)
// }

// export const update = (product: TProduct) => {
//     return instance.put(`/products/update/${product._id}`, product)
// }

export const removeItem = (_id: TProduct) => {
    return instance.delete(`/products/${_id}`)
}