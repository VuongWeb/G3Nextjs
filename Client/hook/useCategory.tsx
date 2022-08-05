import axios from 'axios'
import useSWR from 'swr'
import { add, removeItem, updateItem } from '../api/products'
import { TCategories } from '../models/categories'



const useCategories= () => {

    
    let { data, error, mutate } = useSWR('/categories')


    // add prodcut
    const create = async (Category: TCategories) => {
        const categories = await add(Category);
        mutate(categories)
       
    };


    // update product

    const update = async(Category :any) => {
        await updateItem(Category)
        const newCategories = data.map((item:any) => item._id  === data._id  ? Category:item)
        mutate(newCategories)
    }


    // delete product
    const remove = async (_id:any) => {
        await removeItem(_id);
        const newCategories = data.filter((item:any) => item._id !== _id);
        mutate(newCategories);
    };
    return {
        create,
        data,
        error,
        remove,
        update
    
    }
}

export default useCategories;