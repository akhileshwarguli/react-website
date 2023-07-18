import React from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const handleBookNow = () => {
    // Redirect to the Rent-a-Bike page
    navigate('/rent-a-bike');
  };

  return (
    <section className="home-section">
      <div className="container">
        <h1>Welcome to NWA<br/>Rent-A-Bike</h1>
        <p>Explore our wide range of vehicles and book your rental today!</p>
        <button className="btn" onClick={handleBookNow}>Book Now</button>
      </div>
    </section>
  );
}

export default Home;
