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
                            <li className='/products'><Link href="/products">Products</Link></li>
                            <li className='/about'><Link href="/about">About</Link></li>
                            <li className='/contact'><Link href="/contact">Contact</Link></li>
                            <li className='/news'><Link href="/news">News</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <ul className={style.menu__right}>
                        <li><Link href="/login"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg></Link></li>
                        <li><Link href="/register"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg></Link></li>
                        <li><Link href="/cart"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header