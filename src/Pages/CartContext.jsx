import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((i) => i.name === item.name);
      if (exists) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity } : i
        );
      }
      return [...prevItems, { ...item, quantity }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
