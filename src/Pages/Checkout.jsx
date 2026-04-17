import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { subtotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.address) {
      setIsOrdered(true); 
      clearCart(); 
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="container my-5 shadow-sm p-4 rounded bg-white" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Checkout</h2>
      
      <div className="alert alert-info text-center fw-bold fs-4">
        Order Total: {subtotal} EGP
      </div>

      {!isOrdered ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-muted small">Full Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted small">Email Address</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted small">Shipping Address</label>
            <textarea 
              className="form-control" 
              rows="3" 
              placeholder="enter your address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100 btn-lg mt-3">
            PLACE ORDER
          </button>
        </form>
      ) : (
        <div className="text-center py-5 anim-fade-in">
          <div className="display-1 text-success mb-3">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 className="text-success fw-bold">Order Placed Successfully!</h3>
          <p className="text-muted">Thank you for shopping with us.</p>
          <Link to="/shop" className="btn btn-outline-success mt-3">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}