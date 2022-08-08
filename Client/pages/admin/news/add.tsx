import { useRouter } from 'next/router';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import AdminLayout from '../../../components/Layout/admin';
import useNews from '../../../hook/useNews';

type PropsNews = {
  title: String,
  img: String,
  description: String
}

const Addnew = () => {
  const { create } = useNews();
  const { register, handleSubmit, formState: { errors }, } = useForm<PropsNews>();
  const router = useRouter();
  const onSubmit: SubmitHandler<PropsNews> = async(neww) => {
  await create(neww);
};
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
          Add Products
        </button>
      </div>
    </form>
  </div>
)
}
Addnew.Layout = AdminLayout;
export default Addnew