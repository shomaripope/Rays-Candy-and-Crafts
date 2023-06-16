import React from 'react'

export default function Candy({ candy }) {
  return (
    <div className='product-list'>
      {candy.map((product) => (
        <div className='product-card' key={product.id}>
            <img className="product-img" src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className='product-price'>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  )
}
