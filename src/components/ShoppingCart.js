import React from 'react';
import 'material-icons';
import Badge from '@mui/material/Badge';


const ShoppingCartIcon = () => {
  return (
    <Badge className='shopping-cart-badge' badgeContent={4} color="primary"><i className="material-icons">shopping_cart</i></Badge>
  );
};

export default ShoppingCartIcon;