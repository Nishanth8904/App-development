// src/components/Auth/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

import './Auth.css'; // Ensure this path is correct based on your project structure

function Login() {
  return (
    <>
      <Header />
      <div className="auth-container">
        <div className="auth-form">
          <h2>Login</h2>
          <div className="login-options">
            <p>Select your login type:</p>
            <div className="login-buttons">
              <Link to="/admin-login">
                <button className="login-button">Admin Login</button>
              </Link>
              <Link to="/student-login">
                <button className="login-button">Student Login</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;