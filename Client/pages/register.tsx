import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signup } from '../api/user'
import { IUser } from '../models/user'
import style from '../styles/register.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormUser = {
    name: string,
    email: string,
    password: string,
    role: number
}


const Register = () => {

    const route = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormUser>()

    const onSubmit: SubmitHandler<FormUser> = async (user) => {
        const { data } = await signup(user);
        console.log(data);
        toast.success("Create Account successful")
        route.push('/login')
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form_signup}>
                <div className="mb-4">
                    <input
                        {...register("name", { required: true, minLength: 5, maxLength: 30 })}
                        className={style.input_form} type="text" placeholder="Name" />
                   
                </div>
                <div>
                {errors.name && errors.name.type === "required" && (
                        <span style={{ color: 'red' }}>
                            this is faild is required
                        </span>
                    )}
                    {errors.name && errors.name.type === "minLength" && (
                        <span style={{ color: 'red' }}>
                            requires more than 5 characters to enter
                        </span>
                    )}
                    {errors.name && errors.name.type === "maxLength" && (
                        <span style={{ color: 'red' }}>
                            Do not enter more than 50 characters
                        </span>
                    )}
                </div>

                <div className="mb-4">

                    <input
                        {...register("email", { required: true })}
                        className={style.input_form} type="text" placeholder="Email" />
                   
                </div>
                <div>
                {errors.email && errors.email.type === "required" && (
                        <span style={{ color: 'red' }}>
                            this is faild is required
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        {...register("password")}
                        className={style.input_form} type="password" placeholder="Password" />
                  
                </div>
                <div>
                {errors.password && errors.password.type === "required" && (
                        <span style={{ color: 'red' }}>
                            this is faild is required
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        {...register("role")}
                        className={style.input_form} type="text" value={2} hidden />
                </div>
                <div className={style.form__btn}>
                    <button className={style.btn_create} type="submit">
                        Create Account
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Register