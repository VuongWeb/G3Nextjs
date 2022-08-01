import useSWR from 'swr'
import { add } from '../api/products'
import { TProduct } from '../models/products'

const useProducts = () => {
    const { data, error, mutate } = useSWR('/products')

    const create = async (product: TProduct) => {
        const products = await add(product);
        mutate([...data,products])
    };

    return {
        create,
        data,
        error
    }
}

export default useProducts;