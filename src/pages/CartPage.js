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

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // Example tax, as 10% of the subtotal
    const total = subtotal + tax;
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div>
      <Header />
      <div className='cart-page'>
      <h1 className='cart-page-title'>Cart</h1>

      <div className='cart-page-list'>
        <ul className='cart-item-list'>
          {cartItems.map(item => (
            <li key={item.id}>
              <div className='cart-product-card'>
                <img className="cart-product-img" src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <div className='product-price'>
                <h4 >Price: </h4>
                <h4> ${item.price} </h4>
                </div>

                <div className='quantity'>
                    <h4>Quantity</h4>
                    <div className='item-quantity'>
                  <button className='quantity-btn' onClick={() => removeFromCart(item.id)}>-</button>
                  <div>{item.quantity}</div>
                  <button className='quantity-btn' onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>

                <div className='product-subtotal'>
                <h4>Subtotal: </h4>
                <h4> {calculateSubtotal(item)}</h4>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='cart-calculations'>
        <h5 className='cart-subtotal'>Total: {calculateSubtotal}</h5>
        <h5 className='cart-tax'>Tax: {calculateTotal()}</h5>
        <h5 className='cart-total'>Total: {calculateTotal()}</h5>
        <button>Checkout</button>
      </div>
            

      </div>
      <Footer />
    </div>
  );
}
