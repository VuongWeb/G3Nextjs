import React from 'react'
import style from './header.module.css'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className={style.header}>
        <div className={style.header__page}>
            <div className={style.box__header}>
                <div className="">
                    <a href=""><img className={style.logo__page} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png" alt="" /></a>
                </div>
                <div >
                    <ul className={style.menu__left}>


                        <li className='/products'><a href="">Products</a></li>
                        <li className='/about'><a href="">About</a></li>
                        <li className='/contact'><a href="">Contact</a></li>
                        <li className='/news'><a href="">News</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <ul className={style.menu__right}>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">icon</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header