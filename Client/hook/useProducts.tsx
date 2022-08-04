import axios from 'axios'
import useSWR from 'swr'
import { add, removeItem } from '../api/products'
import { TProduct } from '../models/products'


const useProducts = () => {

    
    let { data, error, mutate } = useSWR('/products')

    const create = async (product: TProduct) => {
        const products = await add(product);
        mutate(products)
        // mutate là nó setstate lại cho mình , mình k phải setState như react nữa
    };

    // const getProducts = async (product : TProduct) => {
    //     const products = await getAll();
    //     mutate([...data, products])
    // };
   // [...data] là lấy tất cả data và cũ
//    [...data, products] lấy tất cả data cũ và mới 

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