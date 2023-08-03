import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { shopContext } from "../context/shop-context";

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(shopContext);
  

  return (
    <div>
        <Header />
            <div className='cartPage-list'>
                <h1 className='cartPageTitle'>Cart</h1>
                    <ul className='cart-list'>
                        {cartItems.map(item => (
                        <li key={item.id}>
                            <div className='product-card'>
                                <img className="product-img" src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p className='product-price'>Price: ${item.price}</p>
                                <button className='btn' onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
                            </div>
                        </li>
                        ))}
                    </ul>
            </div>
        <Footer />
    </div>
  );
}

