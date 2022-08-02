import React from 'react'
import Header from '../../components/Header'
import style from '../../styles/contact.module.css'

type Props = {}

const ContactPage = (props: Props) => {
    return (
        <div className={style.main__contact}>
            <div className={style.info__contact}>
                <h2 className={style.title__contact}>
                    CONTACT US
                </h2>
                <h3 className={style.title__email}>
                    BY EMAIL
                </h3>

                <p>
                    Contact us via email by filling out the form on this page.
                </p>
                <p>You can also visit the Customer Care area to find answers to the most frequently asked questions about  services.</p>

            </div>

            <form action="">
                <div className={style.form__contact}>
                    <div className={style.list__contact}>
                        <div className={style.item__form__contact}>
                            <label htmlFor="">FIRST NAME *</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={style.item__form__contact}>
                            <label htmlFor="">COUNTRY/REGION * </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={style.item__form__contact}>
                            <label htmlFor="">EMAIL ADDRESS *</label>
                            <input type="email" name="" id="" />
                        </div>
                        <div className={style.item__form__contact}>
                            <label htmlFor="">MESSAGE *</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>
                    <div className={style.list__contact}>
                        <div className={style.item__form__contact}>
                            <label htmlFor="">FIRST NAME *</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={style.item__form__contact}>
                            <label htmlFor="">DATE OF BIRTH</label>
                            <input type="DATE" name="" id="" />
                        </div>
                        <div className={style.item__form__contact}>
                            <label htmlFor="">TELEPHONE *</label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className={style.item__form__contact}>

                            <input className={style.inp__file__contact} type="file" name="" id="" />
                            <p>
                                You can attach files up to 4096KB in any of the following formats: doc, xsl, txt, pdf, jpg, jpeg, gif, png
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.rules__contact}>
                    <ul >
                        <li>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</li>
                        <li>Your personal data will be used by Valentino only for purposes related to the service/contact requested.
                            Consult our Privacy Policy for further information and to contact Valentino for privacy concerns and requests.
                        </li>
                        <li>Furthermore, if you also want to remain in contact with Valentino receiving personalized commercial communications, please authorize us to:</li>
                        <li>process your data for purposes of marketing and promotions (notices sent via post, email or SMS on collections or invitations to events, etc.)</li>
                        <li>process your data for purposes of analysis of your habits and preferences (so that Valentino may provide you personalised services)</li>
                    </ul>
                </div>

                <div className={style.box__btn}>
                    <button className={style.btn__contact}>

                        SEND      
                     </button>
                </div>
            </form>
        </div>
    )
}

export default ContactPage