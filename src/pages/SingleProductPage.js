import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
        </div>
        <Footer />
    </div>
  );
}
