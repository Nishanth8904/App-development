import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admission.css'; // Ensure this path is correct based on your project structure
import Header from '../Home/Header';
import Footer from '../Home/Footer';

function Admission() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and data handling logic here
    navigate('/Fees'); // Route to the payment page
  };

  return (
    <div className="admission-page">
      <Header />
      <div className="page-background2">
        <div className="container">
          <h2>Admission Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name:</label>
              <input type="text" id="father-name" name="father-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="father-number">Father's Number:</label>
              <input type="number" id="father-number" name="father-number" required />
            </div>
            <div className="form-group">
              <label htmlFor="mother-name">Mother's Name:</label>
              <input type="text" id="mother-name" name="mother-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea id="address" name="address" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="achievements">Achievements:</label>
              <textarea id="achievements" name="achievements"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="10th-percent">10th Mark Percent:</label>
              <input type="number" id="10th-percent" name="10th-percent" step="0.1" required />
            </div>
            <div className="form-group">
              <label htmlFor="12th-percent">12th Mark Percent:</label>
              <input type="number" id="12th-percent" name="12th-percent" step="0.1" required />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <select id="course" name="course" required>
                <option value="">Select Course</option>
                <option value="course1">Computer Science</option>
                <option value="course2">IT</option>
                <option value="course3">ECE</option>
                <option value="course4">EEE</option>
                <option value="course5">Mechanical</option>
              </select>
            </div>
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admission;
