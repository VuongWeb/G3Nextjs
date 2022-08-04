import Link from 'next/link';
import React from 'react'
import AdminLayout from '../../../components/Layout/user';
import useProducts from '../../../hook/useProducts'
import { TProduct } from '../../../models/products';


const ProductsList = () => {
    const { data, error,  remove  } = useProducts();
    console.log(data)
    if (error) return <div>Failed to load </div>
    if (!data) return <div>Loading....</div>
    return (
        <div>
            {data.map((item: any, index: any) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-warning">
                  <Link href={`/products/edit/${item._id}`}>Edit</Link>
                </button>
                <button className="btn btn-danger" onClick={() => remove(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
            products
        </div>
    )
}

ProductsList.Layout = AdminLayout

export default ProductsList