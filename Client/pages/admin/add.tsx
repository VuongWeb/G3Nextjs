import React from 'react'
import AdminLayout from '../../components/Layout/admin'
import { SubmitHandler, useForm } from 'react-hook-form'

import { create } from '../../api/products'
import useProducts from '../../hook/useProducts'



type forminput = {}

const AddProducts = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { add, data, error } = useProducts()
  const themsp: SubmitHandler<forminput> = (data: any) => {
    add(data)
  }

  return (
    <div className="w-[600px] mt-10">
      <form onSubmit={handleSubmit(themsp)} className=" px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Name
          </label>
          <input {...register('name')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Image
          </label>
          <input {...register('img')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="file" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Price
          </label>
          <input {...register('price')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Description
          </label>
          <input {...register('description')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
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

AddProducts.Layout = AdminLayout;
export default AddProducts