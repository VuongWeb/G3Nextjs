import React from 'react'
import style from './footer.module.css'
type Props = {}

const FooterClient = (props: Props) => {
    return (
        <footer className={style.footer}>
            <div className={style.list__footer}>
                <div >
                    <ul className={style.item__list}>
                        <li className={style.text__bold}><a href="">Help</a></li>
                        <li><a href="">Contact Us
                        </a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Size Guide
                        </a></li>
                        <li><a href="">Sale Exclusions</a></li>
                    </ul>
                </div>
                <div >
                    <ul className={style.item__list}>
                        <li className={style.text__bold}><a href="">Shop
                        </a></li>
                        <li><a href="">Gift Cards

                        </a></li>
                        <li><a href="">Order Status
                        </a></li>
                        <li><a href="">Shipping Information

                        </a></li>
                        <li><a href="">Returns & Exchanges</a></li>
                    </ul>
                </div>
                <div >
                    <ul className={style.item__list}>
                        <li className={style.text__bold}><a href="">About Us
                        </a></li>
                        <li><a href="">Inside NB

                        </a></li>
                        <li><a href="">Responsible Leadership
                        </a></li>
                        <li><a href="">Careers


                        </a></li>
                        <li><a href="">The TRACK at New Balance
                        </a></li>
                        <li><a href="">Press Box
                        </a></li>
                    </ul>
                </div>
                <div >
                    <ul className={style.item__list}>
                        <li className={style.text__bold}><a href="">For You
                        </a></li>
                        <li><a href="">Student Discount

                        </a></li>
                        <li><a href="">Sign Up to Wear Test
                        </a></li>
                        <li><a href="">Idea Submission

                        </a></li>
                        <li><a href="">Affiliate Program</a></li>
                    </ul>
                </div>
                <div >
                    <div className={style.logo__footer}>
                        <a href="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png" alt="" />
                        </a>
                    </div>
                    <div >
                        <ul className={style.menu__icon__footer}>
                            <li><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1200px-Facebook_icon_%28black%29.svg.png" alt="" /></a></li>
                            <li><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/2048px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png" alt="" /></a></li>
                            <li><a href=""><img src="https://cdn-icons-png.flaticon.com/512/1532/1532475.png" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterClient