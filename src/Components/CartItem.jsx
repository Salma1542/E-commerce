import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <tr className="align-middle">
      <td>
        <div className="d-flex align-items-center gap-3">
          <img src={item.image_url} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded border" />
          <span className="fw-bold">{item.name}</span>
        </div>
      </td>
      <td className="text-muted">{item.price} EGP</td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <button 
            className="btn btn-sm btn-outline-secondary" 
            onClick={() => updateQuantity(item.id, -1)}
          >
            <i className="fas fa-minus"></i>
          </button>
          <span className="fw-bold px-2">{item.quantity}</span>
          <button 
            className="btn btn-sm btn-outline-secondary" 
            onClick={() => updateQuantity(item.id, 1)}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </td>
      <td className="fw-bold text-success">
        {item.price * item.quantity} EGP
      </td>
      <td>
        <button 
          className="btn btn-sm btn-outline-danger" 
          onClick={() => removeFromCart(item.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
}