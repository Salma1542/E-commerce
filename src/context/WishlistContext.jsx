import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishListProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToWishList = (p) => {
        setWishlistItems((prev) => {
            const isExist = prev.find(item => item.id === p.id);
            if (!isExist) {
                
                return [...prev, p];
            } else {
                return prev;
            }
        });
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishList }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);