import axios from 'axios'
import useSWR from 'swr'
import { add, getAll } from '../api/products'
import { TProduct } from '../models/products'


const useProducts = () => {
    const fetcher = (args:any) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR('http://localhost:8000/products',fetcher)

    const create = async (product: TProduct) => {
        const products = await add(product);
        mutate([...data, products])
    };

    // const getProducts = async () => {
    //     const products = await getAll();
    //     mutate([...data, products])
    // };



    return {
        create,
        data,
        error
    }
}

export default useProducts;