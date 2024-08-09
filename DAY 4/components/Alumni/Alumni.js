// src/pages/Alumni.js

import React from 'react';
import './Alumni.css'; // Import the CSS file for the Alumni page

// Import images
import nishanthPhoto from '/Users/nishanthpugazh/clg-website/myapp/src/Nishanth.jpeg';
import rahulPhoto from '/Users/nishanthpugazh/clg-website/myapp/src/IMG_0495.jpeg';
import karthickPhoto from '/Users/nishanthpugazh/clg-website/myapp/src/Karthick.jpeg';
import newAlumni1Photo from '/Users/nishanthpugazh/clg-website/myapp/src/IMG_1368.jpeg';
import newAlumni2Photo from '/Users/nishanthpugazh/clg-website/myapp/src/Nags.jpeg';
import newAlumni3Photo from '/Users/nishanthpugazh/clg-website/myapp/src/Maadu.jpeg';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const alumniData = [
  { 
    name: "Nishanth", 
    placement: "30 LPA", 
    photo: nishanthPhoto, 
    encouragingMessage: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."
  },
  { 
    name: "Rahul", 
    placement: "3 LPA", 
    photo: rahulPhoto, 
    encouragingMessage: "The future belongs to those who believe in the beauty of their dreams."
  },
  { 
    name: "Karthick", 
    placement: "10 LPA", 
    photo: karthickPhoto, 
    encouragingMessage: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
  },
  { 
    name: "Inba Stark", 
    placement: "15 LPA", 
    photo: karthickPhoto, 
    encouragingMessage: "Dream big and dare to fail. Every great achievement was once considered impossible."
  },
  { 
    name: "Snake Father", 
    placement: "12 LPA", 
    photo: newAlumni2Photo, 
    encouragingMessage: "Your education is a dress rehearsal for a life that is yours to lead."
  },
  { 
    name: "Maadu", 
    placement: "80 KPA", 
    photo: newAlumni3Photo, 
    encouragingMessage: "Maaaaaaaaaaaaaaaa um Maaaaaaaaaa"
  }
];

const Alumni = () => {
  return (
    <div>
      <Header/>
    
    <div className="alumni-container">
      <div className="alumni-content">
        <h1>Our Successful Alumni</h1>
        <div className="alumni-grid">
          {alumniData.map((alumnus, index) => (
            <div key={index} className="alumni-card">
              <div className="alumni-card-header">
                <img src={alumnus.photo} alt={alumnus.name} className="alumni-photo" />
                <h3>{alumnus.name}</h3>
              </div>
              <p>Placed for: {alumnus.placement}</p>
              <p className="alumni-message">{alumnus.encouragingMessage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Alumni;