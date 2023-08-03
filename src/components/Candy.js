import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { shopContext } from '../context/shop-context';

export default function Candy({ candy }) {
  const { addToCart } = useContext(shopContext);

  return (
    <div className='product-list'>
      {candy.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`} style={{ color: '#FF3EC9' }}>
            <div className='product-card'>
              <img className="product-img" src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className='product-price'>Price: ${product.price}</p>
              <Link to="/cart"><button className='btn' onClick={() => addToCart(product)}>Add To Cart</button></Link>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
