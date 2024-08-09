import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home/Home';
import About from './components/About/About';
import Admission from './components/Admission/Admission';
import Courses from './components/Courses/Courses';
import Fees from './components/Fees/Fees';
import AdminLogin from './components/admin/AdminLogin';
import StudentLogin from './components/Auth/StudentLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import Alumni from './components/Alumni/Alumni';
// import Alumni from './components/Alumni/Alumni';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/admin-login" element={<AdminLogin/>} />
          <Route path="/student-login" element={<StudentLogin/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/alumni" element={<Alumni />} />
          
          {/* <R  oute path="/alumni" element={<Alumni />} /> */}
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;