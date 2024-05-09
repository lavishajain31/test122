import React from 'react';

export default function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart && cart.length > 0 ? (
          cart.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}
            </li>
          ))
        ) : (
          <li>Cart is empty</li>
        )}
      </ul>
    </div>
  );
}
