import useSWR, { mutate } from 'swr'
import { read } from '../api/category';


const useCate = (id:any) => {
    let listCate = useSWR('/category').data;
    let errorCate = useSWR('/category').error;
    let cate = useSWR(`/category/${id}`)

    // const getcate = async (id: any) => {
    //     const cate = await read(id)
    //     mutate(cate)
    // }

    return {
        listCate,
        errorCate,
        cate
        //  getcate
    }
}

export default useCate;