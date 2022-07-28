import React from 'react'
import style from '../styles/register.module.css'

type Props = {}

const Register = (props: Props) => {
  return (
    <div className={style.container}>
      <form className={style.form_signup}>
        <div className="mb-4">
          <input className={style.input_form} type="text" placeholder="Name" />
        </div>
        <div className="mb-4">
          <input className={style.input_form} type="text" placeholder="Email" />
        </div>
        <div className="mb-4">
          <input className={style.input_form} type="password" placeholder="Password" />
        </div>
        <div className="mb-6">
          <input className={style.input_img} type="text" placeholder="Image?" />
        </div>
        <div className={style.form__btn}>
          <button className={style.btn_create} type="button">
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register