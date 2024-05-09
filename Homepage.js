// Home.js
import React from 'react';
import Navbar from './Navbar';
import Products from './Products';

export default function Homepage({ isLoggedIn, username }) {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div>
        <h1>hellooo </h1>
      </div>
      <div>
        <Products/>
      </div>
    </div>
  );
}
