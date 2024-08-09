import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import './AdminLogin.css'; // Ensure this path is correct

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8080/Admins?username=${username}&password=${password}`)
      .then(res => {
        if (res.data.length > 0) {
          toast.success('Logged In');
          navigate('/admin-dashboard');
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
      <div className="admin-login-container">
        <div className="admin-login-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
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
        </div>
        <ToastContainer />
      </div>
      <Footer/>
    </>
  );
};

export default AdminLogin;
