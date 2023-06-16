import React from 'react'

export default function Craft({ craft }) {
  return (
    <div className='product-list'>
      {craft.map((product) => (
        <div className='product-card' key={product.id}>
            <img className="product-img" src={product.image} alt={product.title} />
          <h3 className='product-title'>{product.title}</h3>
          <p className='product-price'>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  )
}
