import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { getItem } from '../../../api/news';
import AdminLayout from '../../../components/Layout/admin';

import useNews from '../../../hook/useNews';
type PropsNews = {
    _id?: string,
    title: String,
    img: String,
    description: String
}

const EditNews = () => {
    const router = useRouter();
    const { _id } = router.query;
    const { update } = useNews();

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }

    } = useForm<PropsNews>();
    
    useEffect(() => {
        (async() => {
          const neww = await getItem(_id)
          reset(neww)
        })()
      },[])


    const onSubmit:SubmitHandler<PropsNews> = async (neww) => {
        const data = await update(neww)
        
    }

    return (
        <div className="w-[600px] mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className=" px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Title
              </label>
              <input {...register("title", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Image
              </label>
              <input {...register("img", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Description
              </label>
              <input {...register("description", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Add News
              </button>
            </div>
          </form>
        </div>
      )
}

EditNews.Layout = AdminLayout

export default EditNews