import useSWR from 'swr'
import { add, removeItem } from '../api/products'
import { TProduct } from '../models/products'


const useProducts = () => {
    let { data, error, mutate } = useSWR('http://localhost:8000/api/products')

    const create = async (product: TProduct) => {
        const products = await add(product);
        mutate([...data, products])
    };

    // const getProducts = async (product : TProduct) => {
    //     const products = await getAll();
    //     mutate([...data, products])
    // };

    const remove = async (_id:any) => {
        await removeItem(_id);
        const newProducts = data.filter((item:any) => item._id !== _id);
        mutate(newProducts);
    };
    return {
        create,
        data,
        error,
        remove
        // getProducts
    }
}

export default useProducts;