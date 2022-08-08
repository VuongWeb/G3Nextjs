import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { getItem } from '../../../api/products';
import AdminLayout from '../../../components/Layout/admin';
import style from '../../../styles/prodcutAddmin.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCate from '../../../hook/useCategory';
import { getItemCate } from '../../../api/category';
type PropsCate = {
    _id?: string,
    name: String,
}

const EditCate = () => {
    const router = useRouter();
    const { _id } = router.query;
    const { update } = useCate(_id);

    const {
        reset,  
        register,
        handleSubmit,
        formState: { errors }

    } = useForm<PropsCate>();

    useEffect(() => {
        (async () => {
            const category = await getItemCate(_id)
            console.log('cate',category);
            
            reset(category?.category)
        })()
    }, [])


    const onSubmit: SubmitHandler<PropsCate> = async (category) => {
        const data = await update(category)
        toast.success("update successful cate")
        setTimeout(() => {
            router.push("/admin/categories");
        }, 500)
    }

    return (
        <div>Editcate

            <section className={style.main__product}>
                <form className={style.form__add__product} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Name
                        </label>
                        <input
                            className="" type="text"
                            {...register("name",  { required: true, minLength: 5 })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <span style={{ color: 'red' }}>
                                this is faild is required
                            </span>
                        )}
                        {errors.name && errors.name.type === "minLength" && (
                            <span style={{ color: 'red' }}>
                                Enter at least 5 characters
                            </span>
                        )}
                        </div>
                    <div className={style.btn__add__product__admin}>
                        <button type="submit" className="" >
                            Update cate
                        </button>
                    </div>
                </form>

            </section>
        </div>
    )
}

EditCate.Layout = AdminLayout

export default EditCate