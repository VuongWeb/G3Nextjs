import React from 'react'
import style from '../../styles/productDetail.module.css';
// import { GetStaticPaths, GetStaticPaths } from 'next'
import axios from 'axios';

type Props = {}

const ProductsDetail = (props: Props) => {
  return (
    <div className={style.container}>
      <div className={style.product}>
        <div className={style.products__img}>
          <img className={style.imgproducts} src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1659248966/tqjmrmremmwqjb02ndgf.jpg" alt="" />
          <img className={style.imgproducts} src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1659248970/qnlr5trx0kxsktedhlev.jpg" alt="" />
          <img className={style.imgproducts} src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1659248976/nmghdmoiukntodqmajfv.jpg" alt="" />
          <img className={style.imgproducts} src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1659248981/wpmadkoffy21h8i9wdmk.jpg" alt="" />
        </div>
        <div className={style.infoProduct}>
          <h2 className={style.product__name}>550 UNC White University Blue</h2>
          <h6 className={style.product__price}>$99.99</h6>
          <h6 className={style.title__product}>Color :</h6> <div className={style.circle}></div>
          <h6 className={style.title__product}>Select size</h6>
          <div className={style.product__size}>
            <button className={style.btn__size}>36</button>
            <button className={style.btn__size}>37</button>
            <button className={style.btn__size}>38</button>
            <button className={style.btn__size}>39</button>
            <button className={style.btn__size}>40</button>
            <button className={style.btn__size}>41</button>
            <button className={style.btn__size}>42</button>
            <button className={style.btn__size}>43</button>
          </div>
          <button className={style.btn__by}>By Now</button>
          <p className={style.description}>Re-introducing a basketball legend.
            The return of the 550 pays tribute to the 1989
            original that defined a hoops generation. Originally worn
            by pro ballers in the ’80s and ’90s, the new 550 is simple,
            clean and true to its legacy.</p>
        </div>
      </div>
      <div className={style.Relatedproducts}>
        <h2 className={style.relatetitle}>Related products</h2>
        <div className={style.Related}>
          <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853327/ierycpwtf503bqrdczf6.jpg" alt="" className={style.relate__img} />
          <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853322/gqi7m0n3akftm9zqb0lg.jpg" alt="" className={style.relate__img} />
          <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853306/rkcfhv7vtj0dgcpjvwi9.jpg" alt="" className={style.relate__img} />
          <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853300/xq1n2j3oboepdsx3hah1.jpg" alt="" className={style.relate__img} />
        </div>
      </div>
    </div>
  )
}

// export const GetStaticPaths :GetStaticPaths = async () =>{
//   const data = await axios.get(`http://localhost:8000/products`)
  
// }

export default ProductsDetail