import axios from 'axios'
import useSWR from 'swr'
import { add, removeItem, updateItem } from '../api/categories'
import { TCategories } from '../models/categories'



const useCategories= () => {

    let listCate = useSWR('http://localhost:8000/api/categories').data;
    let { data, error, mutate } = useSWR('/categories')


    const create = async (Category: TCategories) => {
        const categories = await add(Category);
        mutate(categories)
       
    };

    const update = async(Category :any) => {
        await updateItem(Category)
        const newCategories = listCate?.categories?.map((item:any) => item._id  === data._id  ? Category:item)
        mutate(newCategories)
    }

    const remove = async (_id:any) => {
        await removeItem(_id);
        const newCategories = listCate?.categories?.filter((item:any) => item._id !== _id);
        mutate(newCategories);
    };
    return {
        create,
        data,
        listCate,
        error,
        remove,
        update
    
    }
}

export default useCategories;