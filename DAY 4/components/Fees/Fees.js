import React from 'react';
import './Fees.css'; // Ensure correct path to CSS

function Fees() {
  return (
    <div className="page-background1">
      <div className="container">
        <h2>Fees Payment</h2>
        <form>
          <div className="form-group">
            <label htmlFor="student-id">Student ID</label>
            <input type="text" id="student-id" name="student-id" required />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" name="amount" required />
          </div>
          <div className="form-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select id="payment-method" name="payment-method" required>
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Fees;
