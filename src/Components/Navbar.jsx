import React from "react";
import "./Navbar.css"; 
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo-1.svg'
import { useWishlist } from '../context/WishlistContext'; 
export default function Navbar({ setSearch }) {
  const { wishlistItems } = useWishlist(); 
  return (
    <nav className="main-nav bg-white border-bottom shadow-sm w-100">
      <div className="container py-3">
        <div className="row align-items-center">
          
          <div className="col-lg-3 col-md-3">
            <div 
              className="navbar-brand cursor-pointer" 
              style={{ cursor: 'pointer' }}
            >
            <img src={logo} alt=""  className="logo" />
            </div>
          </div>

          <div className="col-lg-6 col-md-5">
            <div className="search-wrapper position-relative">
              <input 
                type="text" 
                className="form-control rounded-pill px-4" 
                placeholder="Search our store" 
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button className="btn btn-dark rounded-circle position-absolute end-0 top-0 mt-1 me-1 search-btn ">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 d-flex align-items-center justify-content-end gap-3">
            <div className="account-info d-flex align-items-center gap-2">
              <i className="far fa-user fs-4 text-muted"></i>
              <div className="text-start d-none d-lg-block">
                <p className="m-0 small fw-bold">ACCOUNT</p>
                <span className="text-muted small">Register | Login</span>
              </div>
            </div>
            
            <div className="position-relative cursor-pointer">
              <i className="far fa-heart fs-4"></i>
              {wishlistItems.length > 0 && (
        <span className="badge rounded-circle bg-warning position-absolute top-0 start-100 translate-middle">
          {wishlistItems.length}
        </span>
      )}
            </div>
            
            <div className="position-relative ms-2 cursor-pointer">
              <i className="fas fa-shopping-bag fs-4"></i>
              <span className="badge rounded-circle bg-warning position-absolute top-0 start-100 translate-middle">0</span>
            </div>
          </div>

        </div>
      </div>

      <div className="border-top py-2 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            
           <ul className="nav nav-links gap-4">
  <li className="nav-item">
    <NavLink to={'/'}  end className={({ isActive }) => 
        isActive ? "nav-link-btn active text-decoration-none" : "nav-link-btn text-decoration-none"
      }
    >
      Home
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink to={'shop'}  className="nav-link-btn text-decoration-none">
      Shop
    </NavLink>
  </li>
</ul>

            <div className="hotline d-none d-md-flex align-items-center gap-2">
              <i className="fas fa-headset fs-3 text-success"></i>
              <div className="text-start">
                <p className="m-0 small fw-bold">Hotline:</p>
                <p className="m-0 small text-muted">0123 456 789</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}