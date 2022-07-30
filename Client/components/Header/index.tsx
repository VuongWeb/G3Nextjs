import Link from 'next/link'
import React from 'react'
import style from './header.module.css'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className={style.header}>
        <div className={style.header__page}>
            <div className={style.box__header}>
                <div className="">
                    <Link href="/"><img className={style.logo__page} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png" alt="" /></Link>
                </div>
                <div >
                    <ul className={style.menu__left}>
                        <li className='/products'><Link  href="/products">Products</Link></li>
                        <li className='/about'><Link  href="/about">About</Link></li>
                        <li className='/contact'><Link  href="/contact">Contact</Link></li>
                        <li className='/news'><Link  href="/news">News</Link></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <ul className={style.menu__right}>
                    <li><Link  href="/login">Login</Link></li>
                    <li><Link  href="/register">icon</Link></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header