import Link from 'next/link'
import React from 'react'
import style from '../../styles/Products.module.css'


type Props = {}

const ProductsPage = (props: Props) => {
  return (
    <main>
      <div className={style.container}>
        <div className="describe m-8">
          <div className="products__menu mt-12">
            <ul className="products__categories ">
              <li className="products__cate mb-4 text-[12px]"><a href="#">Category</a></li>
              <li className="products__cate mb-4 text-[12px]"><a href="#">Category</a></li>
              <li className="products__cate mb-4 text-[12px]"><a href="#">Category</a></li>
            </ul>
          </div>
          <hr className="my-8 border-[1px] bg-[#000] border-[#000]" />
          <div className="products__size">
            <h6 className="products__title font-bold text-[12px]">Footwear Size</h6>
            <button className="btn__size px-[5px] py-[4px] rounded-[4px] border-2 border-[#000] mr-[13px] my-[13px]">36</button>
            <button className="btn__size px-[5px] py-[4px] rounded-[4px] border-2 border-[#000] mr-[13px] my-[13px]">37</button>
            <button className="btn__size px-[5px] py-[4px] rounded-[4px] border-2 border-[#000] mr-[13px] my-[13px]">38</button>
            <button className="btn__size px-[5px] py-[4px] rounded-[4px] border-2 border-[#000] mr-[13px] my-[13px]">39</button>
            <button className="btn__size px-[5px] py-[4px] rounded-[4px] border-2 border-[#000] mr-[13px] my-[13px]">40</button>
            <button className="btn__size px-[5px] py-[4px] rounded-[4px] border-2 border-[#000] mr-[13px] my-[13px]">41</button>
            <button className="btn__size px-[5px] py-[4px] rounded-[4px] border-2 border-[#000] mr-[13px] my-[13px]">42</button>
            <button className="btn__size px-[5px] py-[4px] rounded-[4px] border-2 border-[#000] mr-[13px] my-[13px]">43</button>
          </div>
          <div className="products__color mt-[20px]">
            <h6 className="products__title font-bold text-[12px]">Color</h6>
            <form className="products__color__input grid grid-cols-2">
              <div className="input__color py-2">
                <input type="radio" name="radio" className="mr-[4px] bg-red-600 accent-red-600 border-0" id="red" /><label htmlFor="red">Red</label>
              </div>
              <div className="input__color py-2">
                <input type="radio" name="radio" className="mr-[4px] bg-red-600 accent-yellow-600 border-0" id="yellow" /><label htmlFor="yellow">Yellow</label>
              </div>
              <div className="input__color py-2">
                <input type="radio" name="radio" className="mr-[4px] bg-red-600 accent-blue-600 border-0" id="blue" /><label htmlFor="blue">Blue</label>
              </div>
              <div className="input__color py-2">
                <input type="radio" name="radio" className="mr-[4px] bg-red-600 accent-violet-600 border-0" id="violet" /><label htmlFor="violet">Violet</label>
              </div>
              <div className="input__color py-2">
                <input type="radio" name="radio" className="mr-[4px] bg-red-600 accent-green-600 border-0" id="green" /><label htmlFor="green">Green</label>
              </div>
              <div className="input__color py-2">
                <input type="radio" name="radio" className="mr-[4px] bg-red-600 accent-black border-0" id="black" /><label htmlFor="black">Black</label>
              </div>
            </form>
          </div>
        </div>
        <div className="listProducts m-8">
          <div className="products__row grid grid-cols-4 gap-[30px]">
            <div className="product">
              <Link to={}>
                <div className="imgProduct w-[215px] h-[225px] ">
                  <img src="./img/pro1.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className="text-[15px] py-4 font-normal">550 UNC White University Blue</h3>
                  <h6 className="font-normal pb-3 text-[#424949]">Main shose</h6>
                  <h6 className="font-normal pb-3 text-[#424949]">2 color</h6>
                  <h6 className="text-red-600 text-[16px] font-normal">$99.99</h6>
                </div>
              </Link>
            </div>
            <div className="product">
              <Link to={}>
                <div className="imgProduct w-[215px] h-[225px]">
                  <img src="./img/pro1.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className="text-[15px] py-4 font-normal">550 UNC White University Blue</h3>
                  <h6 className="font-normal pb-3 text-[#424949]">Main shose</h6>
                  <h6 className="font-normal pb-3 text-[#424949]">2 color</h6>
                  <h6 className="text-red-600 text-[16px] font-normal">$99.99</h6>
                </div>
              </Link>
            </div>
            <div className="product">
              <Link to={}>
                <div className="imgProduct w-[215px] h-[225px]">
                  <img src="./img/pro1.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className="text-[15px] py-4 font-normal">550 UNC White University Blue</h3>
                  <h6 className="font-normal pb-3 text-[#424949]">Main shose</h6>
                  <h6 className="font-normal pb-3 text-[#424949]">2 color</h6>
                  <h6 className="text-red-600 text-[16px] font-normal">$99.99</h6>
                </div>
              </Link>
            </div>
            <div className="product">
              <Link to={}>
                <div className="imgProduct w-[215px] h-[225px]">
                  <img src="./img/pro1.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className="text-[15px] py-4 font-normal">550 UNC White University Blue</h3>
                  <h6 className="font-normal pb-3 text-[#424949]">Main shose</h6>
                  <h6 className="font-normal pb-3 text-[#424949]">2 color</h6>
                  <h6 className="text-red-600 text-[16px] font-normal">$99.99</h6>
                </div>
              </Link>
            </div>
            <div className="product">
              <Link>
                <div className="imgProduct w-[215px] h-[225px]">
                  <img src="./img/pro1.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className="text-[15px] py-4 font-normal">550 UNC White University Blue</h3>
                  <h6 className="font-normal pb-3 text-[#424949]">Main shose</h6>
                  <h6 className="font-normal pb-3 text-[#424949]">2 color</h6>
                  <h6 className="text-red-600 text-[16px] font-normal">$99.99</h6>
                </div>
              </Link>
            </div>
            <div className="product">
              <Link>
                <div className="imgProduct w-[215px] h-[225px]">
                  <img src="./img/pro1.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className="text-[15px] py-4 font-normal">550 UNC White University Blue</h3>
                  <h6 className="font-normal pb-3 text-[#424949]">Main shose</h6>
                  <h6 className="font-normal pb-3 text-[#424949]">2 color</h6>
                  <h6 className="text-red-600 text-[16px] font-normal">$99.99</h6>
                </div>
              </Link>
            </div>
            <div className="product">
              <Link to={}>
                <div className="imgProduct w-[215px] h-[225px]">
                  <img src="./img/pro1.jpg" />
                </div>
                <div className="infoProduct">
                  <h3 className="text-[15px] py-4 font-normal">550 UNC White University Blue</h3>
                  <h6 className="font-normal pb-3 text-[#424949]">Main shose</h6>
                  <h6 className="font-normal pb-3 text-[#424949]">2 color</h6>
                  <h6 className="text-red-600 text-[16px] font-normal">$99.99</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="btn text-center my-12">
        <button className="bg-[#212F3C] py-3 w-[215px] text-[#fff] text-[15px]">See more</button>
      </div>
    </main>

  )
}

export default ProductsPage