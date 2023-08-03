import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { shopContext } from '../context/shop-context';


export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(shopContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  };

  if (!product) {
    return <p className='loading'>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div className='product-card'>
          <img className="product-img" src={product.image} alt={product.title} />
          <h3 className='product-title'>{product.title}</h3>
          <h4 className='product-description'>{product.description}</h4>
          <h4 className='product-price'>Price: ${product.price}</h4>
          <Link to="/cart"><button className='btn' onClick={() => addToCart(product)}>Add To Cart</button></Link>
      </div>
        <Footer />
    </div>
  );
}
