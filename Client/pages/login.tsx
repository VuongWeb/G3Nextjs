import React from 'react'
import style from '../styles/login.module.css'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className={style.container}>
      <form className={style.form_login}>
        <div className="mb-4">
          <input className={style.input__email} id="username" type="text" placeholder="Email" />
        </div>
        <div className="mb-6">
          <input className={style.input__pass} id="password" type="password" placeholder="Password?" />
        </div>
        <div className={style.form_btn}>
          <button className={style.btn__login} type="button">
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