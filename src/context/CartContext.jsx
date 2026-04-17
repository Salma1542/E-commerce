import React, { createContext, useState, useContext } from 'react';
const CartContext=createContext()
export const CartProvider=({children})=>{
    const [cartItems, setCartItems] = useState([]);
    const addToCart=(p)=>{
setCartItems((prev)=>{
    const isExist=prev.find(item => item.id === p.id)
    if(isExist){
    return    prev.map(item=>item.id===p.id?{...item,quantity:item.quantity+1}:item)
    }
    return [...prev, { ...p, quantity: 1 }];
})
    }
      const updateQuantity = (id, change) => {
    setCartItems(prev =>prev.map(item => item.id === id? { ...item, quantity: item.quantity + change }: item  )
        .filter(item => item.quantity > 0) 
    );

  };
    const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
    const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const clearCart = () => setCartItems([]);
    return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, subtotal,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );

}
export const useCart = () => useContext(CartContext);