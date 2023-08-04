import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { shopContext } from "../context/shop-context";


export default function CartPage() {
  const { cartItems, addToCart, removeFromCart } = useContext(shopContext);

  const calculateSubtotal = (item) => {
    const subtotal = item.price * item.quantity;
    return subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div>
      <Header />
      <h1 className='cartPageTitle'>Cart</h1>
      <div className='cartPage-list'>
        <ul className='cartItemList'>
          {cartItems.map(item => (
            <li key={item.id}>
              <div className='product-card'>
                <img className="product-img" src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <h4 className='product-price'>Price: ${item.price}</h4>
                <div className='quantity'>
                    <h4>Quantity</h4>
                    <div className='item-quantity'>
                  <button className='quantity-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                  <div>{item.quantity}</div>
                  <button className='quantity-btn' onClick={() => addToCart(item)}>Add</button>
                  </div>
                </div>
                <div>
                {/* <h6>Subtotal</h6> */}
                <h5 className='product-subtotal'>Subtotal: {calculateSubtotal(item)}</h5>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
