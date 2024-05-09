// // Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//    <div>        
//         <Link to="/cart">Cart</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Sign Up</Link>
          
    
     
//      </div>
//   );
// }
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn, username }) {
  return (
    <div>
      <Link to="/cart">Cart</Link>
     
      {isLoggedIn ? (
        <React.Fragment>
          {/* Show username if logged in */}
          <span>{username}</span>
          <Link to="/logout">Logout</Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </React.Fragment>
      )}
    </div>
  );
}

