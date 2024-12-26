import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Instagram from '../Instagram';
import Footer from '../Footer';

const Basket = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    totalItems,
    cardItems,
    emptyCart
  } = useCart();

  const calculateItemTotal = (item) => {
    return item.quantity * item.price;
  };

  const calculateCartTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += calculateItemTotal(item);
    });
    return total;
  };

  const handleOrder = () => {
    alert('Your order has been received');
    emptyCart();
  };

  if (isEmpty) return <p className='empty-wishlist'>Your cart is empty</p>;

  return (
    <>
    <Header/>
    <div className='container-card my-4'>
      <h1>Cart ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <div className='update'>
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: {calculateCartTotal().toFixed(2)} $</p>
      <Link to="/shop">
        <button onClick={handleOrder}>Order</button>
      </Link>
      <UpIcon />
    </div>
    <Instagram/>
    <Footer/>
    </>
  );
};

export default Basket;