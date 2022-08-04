import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';
import style from '../../styles/productDetail.module.css';


type Props = {}


const ProductsDetail = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `products/${id}` : null)

  if(!data) <div>Loading ...</div>
  if(!error) <div>Null</div>
  return (
    <div className={style.container}>
      <div className={style.product}>
        <div className={style.products__img}>
          <img className={style.imgproducts} src={data?.img} alt="" />
        </div>
        <div className={style.infoProduct}>
          <h2 className={style.product__name}>{data.name}</h2>
          <h6 className={style.product__price}>${data.price}</h6>
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
          <p className={style.description}>{data.desc}</p>
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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await getAll();
//   const paths = data.map((product: any) => (
//     { params: { id: product._id } }
//   ))
//   return {
//     paths,
//     fallback: false
//   }
// }

// //server
// export const getStaticProps: GetServerSideProps<ProductProps> = async (context: GetStaticPropsContext) => {
//   // console.log(context.params?.id);

//   const product = await get(context.params?.id);
//   return {
//     props: {
//       product
//     },
//     revalidate: 60
//   }
// }



export default ProductsDetail