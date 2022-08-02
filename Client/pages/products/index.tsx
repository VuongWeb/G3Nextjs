import a from 'next/link'
import React from 'react'
import useProducts from '../../hook/useProducts'
import { TProduct } from '../../models/products'
import style from '../../styles/Products.module.css'


type Props = {}

const ProductsPage = (props: Props) => {

  // const { data, getProducts, error } = useProducts();
  // console.log(data)
  // if (!data) return <div>Loading ...</div>
  // if (error) return <div>Faild to load</div>

  return (
    <div>
      <div className={style.container}>
        <div className={style.describe}>
          <div className={style.products__menu}>
            <ul className={style.products__categories}>
              <li className={style.products__cate}><a href="#">Category</a></li>
              <li className={style.products__cate}><a href="#">Category</a></li>
              <li className={style.products__cate}><a href="#">Category</a></li>
            </ul>
          </div>
          <hr className={style.ruler} />
          <div className="products__size">
            <h6 className={style.products__title}>Footwear Size</h6>
            <button className={style.btn__size}>36</button>
            <button className={style.btn__size}>37</button>
            <button className={style.btn__size}>38</button>
            <button className={style.btn__size}>39</button>
            <button className={style.btn__size}>40</button>
            <button className={style.btn__size}>41</button>
            <button className={style.btn__size}>42</button>
            <button className={style.btn__size}>43</button>
          </div>
          <div className={style.products__color}>
            <h6 className={style.products__title}>Color</h6>
            <form className={style.products__color__input}>
              <div className={style.input__color}>
                <input type="radio" name="radio" className={style.red} id="red" /><label htmlFor="red">Red</label>
              </div>
              <div className={style.input__color}>
                <input type="radio" name="radio" className={style.yellow} id="yellow" /><label htmlFor="yellow">Yellow</label>
              </div>
              <div className={style.input__color}>
                <input type="radio" name="radio" className={style.blue} id="blue" /><label htmlFor="blue">Blue</label>
              </div>
              <div className={style.input__color}>
                <input type="radio" name="radio" className={style.violet} id="violet" /><label htmlFor="violet">Violet</label>
              </div>
              <div className={style.input__color}>
                <input type="radio" name="radio" className={style.green} id="green" /><label htmlFor="green">Green</label>
              </div>
              <div className={style.input__color}>
                <input type="radio" name="radio" className={style.black} id="black" /><label htmlFor="black">Black</label>
              </div>
            </form>
          </div>
        </div>
        <div className={style.listProducts}>
          <div className={style.products__row}>
            {/* {data.map((item: TProduct) => (
              <div className="product" key={item?._id}>
                <a href=''>
                  <div className={style.imgProduct}>
                    <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853114/z3ljreulo9k8dtvoib9f.jpg" />
                  </div>
                  <div className="infoProduct">
                    <h3 className={style.product__name}>550 UNC White University Blue</h3>
                    <h6 className={style.product__cate}>Main shose</h6>
                    <h6 className={style.product__color}>2 color</h6>
                    <h6 className={style.product__price}>$99.99</h6>
                  </div>
                </a>
              </div>
            ))} */}

            <div className="product">
              <a href=''>
                <div className={style.imgProduct}>
                  <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853114/z3ljreulo9k8dtvoib9f.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className={style.product__name}>550 UNC White University Blue</h3>
                  <h6 className={style.product__cate}>Main shose</h6>
                  <h6 className={style.product__color}>2 color</h6>
                  <h6 className={style.product__price}>$99.99</h6>
                </div>
              </a>
            </div>
            <div className="product">
              <a href=''>
                <div className={style.imgProduct}>
                  <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853292/ywmyhofgaeiegwfwl8ev.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className={style.product__name}>550 UNC White University Blue</h3>
                  <h6 className={style.product__cate}>Main shose</h6>
                  <h6 className={style.product__color}>2 color</h6>
                  <h6 className={style.product__price}>$99.99</h6>
                </div>
              </a>
            </div>
            <div className="product">
              <a href=''>
                <div className={style.imgProduct}>
                  <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853300/xq1n2j3oboepdsx3hah1.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className={style.product__name}>550 UNC White University Blue</h3>
                  <h6 className={style.product__cate}>Main shose</h6>
                  <h6 className={style.product__color}>2 color</h6>
                  <h6 className={style.product__price}>$99.99</h6>
                </div>
              </a>
            </div>
            <div className="product">
              <a href=''>
                <div className={style.imgProduct}>
                  <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853306/rkcfhv7vtj0dgcpjvwi9.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className={style.product__name}>550 UNC White University Blue</h3>
                  <h6 className={style.product__cate}>Main shose</h6>
                  <h6 className={style.product__color}>2 color</h6>
                  <h6 className={style.product__price}>$99.99</h6>
                </div>
              </a>
            </div>
            <div className="product">
              <a href=''>
                <div className={style.imgProduct}>
                  <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853313/kspx2hoev2emm1wuotso.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className={style.product__name}>550 UNC White University Blue</h3>
                  <h6 className={style.product__cate}>Main shose</h6>
                  <h6 className={style.product__color}>2 color</h6>
                  <h6 className={style.product__price}>$99.99</h6>
                </div>
              </a>
            </div>
            <div className="product">
              <a href=''>
                <div className={style.imgProduct}>
                  <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853380/esrv97g5ycmmbafvllmu.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className={style.product__name}>550 UNC White University Blue</h3>
                  <h6 className={style.product__cate}>Main shose</h6>
                  <h6 className={style.product__color}>2 color</h6>
                  <h6 className={style.product__price}>$99.99</h6>
                </div>
              </a>
            </div>
            <div className="product">
              <a href=''>
                <div className={style.imgProduct}>
                  <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853322/gqi7m0n3akftm9zqb0lg.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className={style.product__name}>550 UNC White University Blue</h3>
                  <h6 className={style.product__cate}>Main shose</h6>
                  <h6 className={style.product__color}>2 color</h6>
                  <h6 className={style.product__price}>$99.99</h6>
                </div>
              </a>
            </div>
            <div className="product">
              <a href=''>
                <div className={style.imgProduct}>
                  <img src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1658853327/ierycpwtf503bqrdczf6.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className={style.product__name}>550 UNC White University Blue</h3>
                  <h6 className={style.product__cate}>Main shose</h6>
                  <h6 className={style.product__color}>2 color</h6>
                  <h6 className={style.product__price}>$99.99</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.btn}>
        <button className={style.btn__text}>See more</button>
      </div>
    </div>
  )
}

export default ProductsPage