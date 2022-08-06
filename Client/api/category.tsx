import instance from "./config"

export const getAll = () => {
    return instance.get('/category');
}

export const read = (id: any) => {
    return instance.get(`/category/${id}`)
}