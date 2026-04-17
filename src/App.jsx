import { useState } from 'react';
import './App.css'; 
import Navbar from "./Components/Navbar"
import Products from "./Pages/Shop/Products"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Details from './Pages/ProductDetails'
import { WishListProvider } from './context/WishlistContext';
function App() {
  const [search, setSearch] = useState('')

  return (
    <WishListProvider>
      <Navbar setSearch={setSearch}/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Products search={search}/>}/>
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </WishListProvider>
  )
}

export default App;