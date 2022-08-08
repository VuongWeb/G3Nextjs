import useSWR, { mutate } from "swr";
import { add, removeItem, updateItem } from "../api/news";
import { TNews } from "../models/news";
import axios from "axios";


const useNews = () => {

    let { data , error, mutate } = useSWR('/news')


    // add new
    const create = async (neww: TNews) => {
        const news = await add(neww);
        mutate(news)
        
    };

    //update new
    const update = async(neww :any) => {
        await updateItem(neww)
        const news = data.map((item:any) => item._id  === data._id  ? neww:item)
        mutate(news)
    }


    // delete new
    const remove = async (_id:any) => {
        await removeItem(_id);
        const news = data.filter((item:any) => item._id !== _id);
        mutate(news);
    };
    return {
        create,
        data,
        error,
        remove,
        update
    }
}
export default useNews;