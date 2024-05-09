import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Products({ isLoggedIn }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const postData = (product) => {
    fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }
      console.log("Product added to cart");
      // Add the product to the cart state
      setCart([...cart, product]);
    })
    .catch(error => console.error('Error adding product to cart:', error));
  };

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      postData(product);
    } else {
      console.log("Please sign up or log in");
    }
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product, index) => (
          <li key={index}>
            <Link to='/cart'>
              {product.title} - {product.price} 
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous Page</button>
      <button onClick={goToNextPage} disabled={currentPage === Math.ceil(products.length / itemsPerPage)}>Next Page</button>
      <Link to='/cart'><button>View Cart</button></Link>
    </div>
  );
}
