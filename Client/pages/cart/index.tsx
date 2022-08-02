import Link from 'next/link'
import React from 'react'
import style from '../../styles/cart.module.css'


type Props = {}

const cartPage = (props: Props) => {
    return (
        <div className={style.main__cart}>
            <div className={style.info__cart}>
                <h2 className={style.title__cart}>
                    MY CART
                </h2>
                <div className={style.list__products__cart}>
                    <div className={style.img__product__cart}>
                        <img src="https://i.pinimg.com/564x/e8/1c/91/e81c91f4ca3ca63e7c6008cdccde60ba.jpg" alt="" />
                    </div>
                    <div className={style.info__product__cart}>
                        <ul className={style.desc__product__cart}>
                            <li className={style.name__product__Cart}>MADE in USA 990v1 </li>
                            <li>Man</li>
                            <li >Color <input className={style.color__producut__cart} type="color" name="" id="" /></li>
                            <li>size : <input className={style.size__producut__cart} type="number" name="" id="" value={40} /></li>
                            <li>Qty: <input className={style.qty__producut__cart} type="number" name="" id="" value={1} /></li>
                        </ul>
                    </div>
                    <div className={style.btn__action__cart}>
                        <button className={style.btn__edit__cart}>edit</button>
                        <button className={style.btn__delelte__cart}>delete</button>
                    </div>
                </div>
            </div>
            <div className={style.checkout__cart}>
                <h4>
                    cart <span>(1)</span>
                </h4>
                <div className={style.checkout__product__cart}>
                    <div className={style.img__product__checkout}>
                        <img src="https://i.pinimg.com/564x/e8/1c/91/e81c91f4ca3ca63e7c6008cdccde60ba.jpg" alt="" />
                    </div>
                    <div className={style.info__checkout__Cart}>
                        <ul className={style.desc__product__cart}>
                            <li className={style.name__product__Cart}>MADE in USA 990v1</li>
                            <li className={style.name__product__Cart}>$74.99</li>
                            <li>Man</li>
                            <li >Color <input className={style.color__producut__cart} type="color" name="" id="" /></li>
                            <li>size : <input className={style.size__producut__cart} type="number" name="" id="" value={40} /></li>
                            <li>Qty: <input className={style.qty__producut__cart} type="number" name="" id="" value={1} /></li>
                        </ul>
                    </div>
                    <div >
                        <button className={style.btn__delelte__cart}>delete</button>

                    </div>

                </div>
                <div className={style.total__cart}>
                    <p>Sub Total: <span> $74.99</span></p>
                    <p>Free UPS Ground Shipping</p>
                    <button className={style.btn__total__cart}>
                        checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default cartPage