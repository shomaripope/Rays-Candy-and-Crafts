import React, { useContext } from 'react';
import 'material-icons';
import { shopContext } from '../context/shop-context';

const ShoppingCartIcon = () => {
  const { cartItems } = useContext(shopContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='cart-icon-container'>
      <i className="bi bi-cart cart-icon"></i>
      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
    </div>
  );
};

export default ShoppingCartIcon;
