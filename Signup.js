// Signup.js
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate


  
 
  const postData = () => {
  let obj = {
    username,
    password
  };

  fetch("http://localhost:3000/user", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }) 
  .then(response => {
    if (response.ok) {
      // If signup is successful, navigate to the login page
      navigate('/login');
    } else {
      throw new Error('Failed to sign up');
    }
  })
  .catch(error => console.error('Error signing up:', error));

};

  


  const handleSubmit = (e) => {
    e.preventDefault()
    postData()
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>

    </div>
  );
}
