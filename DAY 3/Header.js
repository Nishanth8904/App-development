import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login (for demonstration, just toggles the state)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://seeklogo.com/images/N/nrk-logo-FFB5710CB5-seeklogo.com.png" alt="NRK College Logo" className="logo" />
        <span className="nav-links"><Link to="/">NRK College of Engineering and Technology</Link></span>
      </div>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/fees">Fees</Link></li>
        <li><Link to="/alumni">Alumni</Link></li>
        {!isLoggedIn && (
          <li>
            <Link to="/login">
              <button className="login-button" onClick={handleLogin}>Login</button>
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button className="login-button" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
