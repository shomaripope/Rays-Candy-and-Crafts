import React from 'react'
import { Link } from 'react-router-dom';

export default function Craft({ craft }) {
  return (
    <div className='product-list'>
      {craft.map((product) => (
        <Link to={`/product/${product.id}`} style={{ color: '#FF3EC9'}}><div className='product-card' key={product.id}>
            <img className="product-img" src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className='product-price'>Price: ${product.price}</p>
        </div></Link>
      ))}
    </div>
  )
}
