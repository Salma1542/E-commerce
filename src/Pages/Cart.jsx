import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../Components/CartItem'; 
import { Link, useNavigate } from 'react-router-dom';
import Checkout from './Checkout';

export default function CartPage() {
  const { cartItems, subtotal } = useCart();
const navigate=useNavigate()
  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5 py-5">
        <i className="fas fa-shopping-cart fa-5x text-muted mb-4"></i>
        <h3>Your cart is currently empty</h3>
        <Link to="/shop" className="btn btn-success mt-3">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-success">Shopping Cart</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="table-responsive shadow-sm bg-white p-3 rounded border">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4 bg-light">
            <h4 className="fw-bold mb-4">Order Summary</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>Total Products:</span>
              <span className="fw-bold">{subtotal} EGP</span>
            </div>
            <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
              <span>Shipping:</span>
              <span className="text-success fw-bold">Free</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span className="fs-5 fw-bold">Total Price:</span>
              <span className="fs-5 fw-bold text-success">{subtotal} EGP</span>
            </div>
            <button className="btn btn-success btn-lg w-100 rounded-pill shadow-sm" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
            <Link to="/shop" className="btn btn-link w-100 mt-2 text-decoration-none text-muted">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}