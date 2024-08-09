import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import './Auth.css'; // Ensure this path is correct based on your project structure

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8080/users?email=${email}&password=${password}`)
      .then(res => {
        if (res.data.length > 0) {
          toast.success('Logged In');
          navigate('/');
        } else {
          toast.error('Login Failed');
        }
      })
      .catch(err => {
        toast.error('An error occurred');
        console.log(err);
      });
  };

  return (
    <>
      <Header/>
      <div className="auth-container">
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
        <ToastContainer />
      </div>
      <Footer/>
    </>
  );
}

export default Login;