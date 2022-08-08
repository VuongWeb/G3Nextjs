/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import AdminLayout from '../../../components/Layout/admin'

import { TProduct } from '../../../models/products';
import style from '../../../styles/categoriesAdmin.module.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import useCategories from '../../../hook/useCategory';


type PropsCategories = {
    name: String,
}

const addCategories = () => {
    const router = useRouter();
    const { _id } = router.query;
    const { create } = useCategories(_id);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PropsCategories>();

    
    const onSubmit: SubmitHandler<PropsCategories> = async (Category) => {
        await create(Category);
        toast.success("create successful Category")
        setTimeout(() => {
            router.push("/admin/categories");
        }, 1000)

    };

    return (
        <div className="">
            <section className={style.main__categories}>
                <form className={style.form__add__categories} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Name
                        </label>
                        <input
                            className="" type="text"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className={style.btn__add__categories__admin}>
                        <button type="submit" className="" >
                            Add Categories
                        </button>
                    </div>
                </form>

            </section>

        </div>




    )
}

addCategories.Layout = AdminLayout;
export default addCategories