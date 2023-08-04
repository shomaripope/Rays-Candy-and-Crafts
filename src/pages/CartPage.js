// import React, { useContext } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { shopContext } from "../context/shop-context";

// export default function CartPage() {
//   const { cartItems, removeFromCart } = useContext(shopContext);
  

//   return (
//     <div>
//         <Header />
//             <div className='cartPage-list'>
//                 <h1 className='cartPageTitle'>Cart</h1>
//                     <ul className='cart-list'>
//                         {cartItems.map(item => (
//                         <li key={item.id}>
//                             <div className='product-card'>
//                                 <img className="product-img" src={item.image} alt={item.title} />
//                                 <h3>{item.title}</h3>
//                                 <p className='product-price'>Price: ${item.price}</p>
//                                 <button className='btn' onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
//                             </div>
//                         </li>
//                         ))}
//                     </ul>
//             </div>
//         <Footer />
//     </div>
//   );
// }


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
                <p className='product-price'>Price: ${item.price}</p>
                <div className='quantity'>
                    <h6>Quantity</h6>
                  <button className='btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                  <span className='item-quantity'>{item.quantity}</span>
                  <button className='btn' onClick={() => addToCart(item)}>Add</button>
                </div>
                <div>
                <h6>Subtotal</h6>
                <p className='product-subtotal'>Subtotal: {calculateSubtotal(item)}</p>
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
