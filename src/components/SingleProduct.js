import { React, useEffect, useState } from 'react';

export default function SingleProduct() {
    // const [product, setProduct] = useState([])

    // useEffect(() => {
    //     fetchProduct();
    // }, []);

    // const fetchProduct = () => {
    //     fetch('https://fakestoreapi.com/products?limit=1')
    //         .then(res=>res.json())
    //         .then(data=>setProduct(data))
    //         .catch(err => console.log(err))
    // }
  return (
    <div className='product-list'>
      {/* {product.map((product) => (
        <div className='product-card' key={product.id}>
            <img className="product-img" src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <h5>{product.description}</h5>
          <p className='product-price'>Price: ${product.price}</p>
        </div>
      ))} */}
    </div>
  )
}
