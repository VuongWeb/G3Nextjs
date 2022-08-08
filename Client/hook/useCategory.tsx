import useSWR from "swr";
import { add, removeItem, updateItem } from "../api/category";
import { TCate } from "../models/category";

// const useCategories= () => {

//     let listCate = useSWR('http://localhost:8000/api/categories').data;
//     let { data, error, mutate } = useSWR('/categories')

//     const create = async (Category: TCategories) => {
//         const categories = await add(Category);
//         mutate(categories)

//     };

//     const update = async(Category :any) => {
//         await updateItem(Category)
//         const newCategories = listCate?.categories?.map((item:any) => item._id  === data._id  ? Category:item)
//         mutate(newCategories)
//     }

//     const remove = async (_id:any) => {
//         await removeItem(_id);
//         const newCategories = listCate?.categories?.filter((item:any) => item._id !== _id);
//         mutate(newCategories);
//     };
//     return {
//         create,
//         data,
//         listCate,
//         error,
//         remove,
//         update

//     }
// }

// export default useCategories;
// import { read } from '../api/category';

const useCate = (id: any) => {
  let listCate = useSWR("/categories").data;
  let errorCate = useSWR("/categories").error;
  let cate = useSWR(`/categories/${id}`);

  let { data, error, mutate } = useSWR("/categories");

  // const getcate = async (id: any) => {
  //     const cate = await read(id)
  //     mutate(cate)
  // }
  const create = async (Category: TCate) => {
    const categories = await add(Category);
    mutate(categories);
  };
  const update = async (Category: any) => {
    await updateItem(Category);
    const newCategories = listCate?.categories?.map((item: any) =>
      item._id === data._id ? Category : item
    );
    mutate(newCategories);
  };

  const remove = async (_id: any) => {
    await removeItem(_id);
    const newCategories = listCate?.categories?.filter(
      (item: any) => item._id !== _id
    );
    mutate(newCategories);
  };

  return {
    listCate,
    errorCate,
    cate,
    update,
    create,
    remove,
    error,

    //  getcate
  };
};

export default useCate;
