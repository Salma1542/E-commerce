import React from "react";
import { useEffect, useState } from "react";
import collectionBanner from "../../assets/images/collection-banner.jpg";
import breadCrump from "../../assets/images/breadcrumb.jpg";
import ProductCard from "../../Components/ProductCard";
export default function Products({search}) {
    const [products,setProduct]=useState([])
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState(200);
    useEffect(()=>{
        fetch('/Data/Products.json').then(res=>res.json()).then(data=>setProduct(data))
    },[])
    const filterProducts=products.filter(p=>{
     const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
     const priceMatch = p.price <= maxPrice;
     const searchMatch = p.name.toLowerCase().includes((search || "").toLowerCase());
     return categoryMatch && priceMatch&&searchMatch;
    })
  return (
    <>
      <div className="top-banner">
        <img src={breadCrump} className="img-fluid" />
        <div className="breadcrumb-content">
          <p>Home/Shop</p>
        </div>
      </div>
      <div className="container " style={{marginTop:'100px'}}>
        <div className="row">
          <aside className="col-lg-3 col-md-4 mb-4">
  <div className="sidebar-wrapper p-4  bg-white ">
    
    <div className="sidebar-section mb-5">
      <h5 className="sidebar-title fw-bold mb-4">Categories</h5>
      <ul className="list-unstyled category-list">
        {['All', "Vegetables", "Fruits", "Meats", "Bread & Bakery"].map((cat, index) => (
          <li key={index} className="mb-3">
            <div className="form-check custom-checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                value={cat}
                id={`check-${index}`}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(selectedCategory === cat ? "All" : cat)}
              />
              <label className="form-check-label w-100" htmlFor={`check-${index}`}>
                {cat}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="sidebar-section">
      <h5 className="sidebar-title fw-bold mb-4">Price Range</h5>
      <div className="price-range-wrapper">
        <input 
          type="range" 
          className="form-range custom-range" 
          min="0" 
          max="200" 
          step="1"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="price-badge bg-light px-3 py-1 rounded-2 border">0 EGP</div>
          <div className="price-badge selected-price px-3 py-1 rounded-2 text-white shadow-sm">
            {maxPrice} EGP
          </div>
        </div>
      </div>
    </div>

  </div>
</aside>
          <main className="col-lg-9 col-md-8 ">
           <div className="banner">
            <img
              src={collectionBanner}
              alt="Fresh organic vegetables and fruits"
              className="img-fluid w-100 h-100" 
              style={{ objectFit: 'cover' }} 
            />
          </div>
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mx-0 ">             {
               filterProducts.map(p=>{
               return <ProductCard key={p.id} items={p}/>

              })
             }
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
