// import React, { createContext, useState } from 'react';

// export const shopContext = createContext(null);

// export const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prev) => prev.filter(item => item.id !== productId));
//   };

//   const contextValue = { cartItems, addToCart, removeFromCart };

//   return (
//     <shopContext.Provider value={contextValue}>
//       {props.children}
//     </shopContext.Provider>
//   );
// };

import React, { createContext, useState } from 'react';

export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const itemInCart = prev.find((item) => item.id === product.id);
      if (itemInCart) {
        // If the item is already in the cart, increase its quantity by 1
        const updatedCart = prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === productId
          ? item.quantity > 1 
            ? { ...item, quantity: item.quantity - 1 } 
            : null 
          : item
      );
      return updatedCart.filter((item) => item !== null);
    });
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
