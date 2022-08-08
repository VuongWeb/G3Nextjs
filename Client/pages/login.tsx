import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signin } from '../api/user'
import style from '../styles/login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormUser = {
    name: string,
    email: string,
    password: string,
    role:number
}
const Login = () => {

    const route = useRouter()

    const {register, handleSubmit, formState:{errors}} = useForm<FormUser>()

    const onSubmit:SubmitHandler<FormUser> = async (data) => {
        const user = await signin(data)
        if(data){
                localStorage.setItem('User', JSON.stringify(user));
                setTimeout(() => {
                        route.push('/')
                        toast.success("Logged in successfully") 
                }, 2000);
        }
     

    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form_login}>
                <div className="mb-4">
                    <input 
                    {...register("email" , {required:true})}
                    className={style.input__email} id="username" type="text" placeholder="Email" />
                </div>
                <div>
                {errors.email && errors.email.type === "required" && (
                        <span style={{ color: 'red' }}>
                            this is faild is required
                        </span>
                    )}
                </div>
                <div className="mb-6">
                    <input 
                    {...register("password" , {required : true})}
                    className={style.input__pass} id="password" type="password" placeholder="Password?" />
                </div>
                <div>
                {errors.password && errors.password.type === "required" && (
                        <span style={{ color: 'red' }}>
                            this is faild is required
                        </span>
                    )}
                </div>
                <div className={style.form_btn}>
                    <button className={style.btn__login} type="submit">
                        Login
                    </button>
                    <a className={style.forgotpass} href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <div className={style.ruler}>
                <p className={style.p__text}>Be the first to know about new arrivals</p>
                <button className={style.btn__signup}>Singup</button>
            </div>
        </div>

    )
}

export default Login