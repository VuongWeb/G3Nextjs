import { useRouter } from 'next/router';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import AdminLayout from '../../../components/Layout/admin'
import useProducts from '../../../hook/useProducts';
import { TProduct } from '../../../models/products';
import style from '../../../styles/prodcutAddmin.module.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

type PropsProducts = {
    name: String,
    img: String,
    price: Number,
    size: Number,
    description: String
}

const AddProducts = () => {

    const { create } = useProducts();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PropsProducts>();

    const router = useRouter();

    const onSubmit: SubmitHandler<PropsProducts> = async (product) => {
        await create(product);
        toast.success("create successful products")
        setTimeout(() => {
            router.push("/admin/products");
        }, 1000)

    };

    return (
        <div className="">
            <section className={style.main__product}>
                <form className={style.form__add__product} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Name
                        </label>
                        <input
                            className="" type="text"
                            {...register("name", { required: true , minLength: 5 })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <span style={{color: 'red'}}>
                                this is faild is required
                            </span>
                        )}
                        {errors.name && errors.name.type === "minLength" && (
                            <span style={{color: 'red'}}>
                                Enter at least 5 characters
                            </span>
                        )}
                    </div>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Image
                        </label>
                        <input
                            className="" type="text"
                            {...register("img", { required: true })}
                        />
                         {errors.img && errors.img.type === "required" && (
                            <span style={{color: 'red'}}>
                                this is faild is required
                            </span>
                        )}
                    </div>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Price
                        </label>
                        <input
                            className="" type="text"
                            {...register("price", { required: true , min:1 })}
                        />
                          {errors.price && errors.price.type === "required" && (
                            <span style={{color: 'red'}}>
                                this is faild is required
                            </span>
                        )}
                          {errors.price && errors.price.type === "min" && (
                            <span style={{color: 'red'}}>
                                request not to enter negative price
                            </span>
                        )}
                    </div>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Size
                        </label>
                        <input
                            className="" type="text"
                            {...register("size", { required: true , min: 35})}
                        />
                           {errors.size && errors.size.type === "required" && (
                            <span style={{color: 'red'}}>
                                this is faild is required
                            </span>
                        )}
                          {errors.size && errors.size.type === "min" && (
                            <span style={{color: 'red'}}>
                                request not to enter shoe size over 35
                            </span>
                        )}
                    </div>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Description
                        </label>
                        <input
                            className="" type="text"
                            {...register("description", { required: true })}
                        />
                    </div>
                    <div className={style.btn__add__product__admin}>
                        <button type="submit" className="" >
                            Add Products
                        </button>
                    </div>
                </form>

            </section>

        </div>




    )
}

AddProducts.Layout = AdminLayout;
export default AddProducts