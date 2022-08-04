import { useRouter } from 'next/router';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import AdminLayout from '../../../components/Layout/admin'
import useProducts from '../../../hook/useProducts';
import { TProduct } from '../../../models/products';
import style from '../../../styles/prodcutAddmin.module.css'

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
        router.push("/admin/products");
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
                            {...register("name" , {required: true})}
                        />
                    </div>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Image
                        </label>
                        <input
                            className="" type="text"
                            {...register("img", {required: true})}
                        />
                    </div>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Price
                        </label>
                        <input
                            className="" type="text"
                            {...register("price" , {required: true})}
                        />
                    </div>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Size
                        </label>
                        <input
                            className="" type="text"
                            {...register("size" , {required: true})}
                        />
                    </div>
                    <div className={style.list__inp__add}>
                        <label className="">
                            Description
                        </label>
                        <input
                            className="" type="text"
                            {...register("description" , {required: true})}
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