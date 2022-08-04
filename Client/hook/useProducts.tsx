import axios from 'axios'
import useSWR from 'swr'
import { create } from '../api/products'
import { TProduct } from '../models/products'


const useProducts = () => {
    const fetcher = (args:any) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR('http://localhost:8000/products',fetcher)

    const add = async (item: TProduct) => {
        const products = await create(item);
        mutate ([...data, products]);
    };

    return {
        add,
        data,
        error
    }
}

export default useProducts;