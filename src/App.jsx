import { useState } from 'react';
import './App.css'; 
import Navbar from "./Components/Navbar"
import Products from "./Pages/Shop/Products"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Details from './Pages/ProductDetails'
import { WishListProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import CartPage from "./Pages/Cart"
import Checkout from './Pages/Checkout'
function App() {
  const [search, setSearch] = useState('')

  return (
    <WishListProvider>
        <CartProvider>
      <Navbar setSearch={setSearch}/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Products search={search}/>}/>
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
</CartProvider>
    </WishListProvider>
  )
}

export default App;