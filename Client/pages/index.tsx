import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useProducts from '../hook/useProducts'
import { TProduct } from '../models/products'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const { data, error } = useProducts()
    // console.log(data);
    if (!data) <h2 className='text-center p-12 text-2xl text-[32px]'>Loading ...</h2>
    if (error) <h2 className='text-center p-12 text-2xl text-[32px]'>Faild to load</h2>
    return (
        <div >
            <section className={styles.banner__home}>
                <a href=""> <img src="https://www.premieroutlet.hu/fileadmin/user_upload/PO_NB_banner_2390x598.jpg" alt="" /></a>
            </section>
            <section className={styles.sellers}>
                <h2>
                    Best sellers
                </h2>
                <div className={styles.list__product__sellers}>
                <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1659248966/tqjmrmremmwqjb02ndgf.jpg" alt="" /></a>
                        <h4>
                            550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853380/esrv97g5ycmmbafvllmu.jpg" alt="" /></a>
                        <h4>
                            550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853306/rkcfhv7vtj0dgcpjvwi9.jpg" alt="" /></a>
                        <h4>
                            550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div> 

                    {/* <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://i.pinimg.com/564x/13/a3/ac/13a3acea9d3e1d49d436248f96cb12ac.jpg" alt="" /></a>
                        <h4>
                        550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://i.pinimg.com/564x/13/a3/ac/13a3acea9d3e1d49d436248f96cb12ac.jpg" alt="" /></a>
                        <h4>
                        550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div> */}
                </div>
            </section>
            <section className={styles.post__home}>
                <div className={styles.list__post}>
                    <div className={styles.item__post}>
                        <a href="">
                            <img src="https://i.pinimg.com/564x/d1/94/4d/d1944d416d3055a74dd6b3b0bfc1773f.jpg" alt="" />
                        </a>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur sint ab odio nam quidem aliquam sapiente dicta. Iure nesciunt optio maxime quia alias corrupti quam, distinctio inventore error suscipit nulla.
                        </p>
                        <button className={styles.btn__post__home}>
                            see more
                        </button>
                    </div>
                    <div className={styles.item__post}>
                        <a href="">
                            <img src="https://i.pinimg.com/564x/10/0b/88/100b887c340dcce48695b18f9fad8456.jpg" alt="" />
                        </a>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur sint ab odio nam quidem aliquam sapiente dicta. Iure nesciunt optio maxime quia alias corrupti quam, distinctio inventore error suscipit nulla.
                        </p>
                        <button className={styles.btn__post__home}>
                            see more
                        </button>
                    </div>
                </div>
            </section>
            <section className={styles.recommended__home}>
                <h2>
                    Recommended for you
                </h2>
                <div className={styles.list__product__sellers}>
                    {data?.map((item: TProduct) => (
                        <div className={styles.item__sellers} key={item._id?.toString()}>
                            <a href={`/products/${item._id}`}><img className={styles.img__item__sellers} src={item.img.toString()} alt="" />
                                <h4>{item.name}</h4>
                                <p>{item.price.toString()}đ</p>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
