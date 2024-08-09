// src/components/admin/AdminDashboard.js
import React from 'react';
import PieChart from './PieChart';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-content">
        <div className="chart-section">
          <PieChart />
        </div>
        <div className="info-section">
          <div className="info-card">
            <h3>Total Courses</h3>
            <p>120</p>
          </div>
          <div className="info-card">
            <h3>Active Students</h3>
            <p>1500</p>
          </div>
          <div className="info-card">
            <h3>New Enrollments</h3>
            <p>45</p>
          </div>
          <div className="info-card">
            <h3>Upcoming Events</h3>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
