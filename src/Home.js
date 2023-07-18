import React from 'react';
import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <div className="container">
        <h1>Welcome to NWA<br/>Rent-A-Bike</h1>
        <p>Explore our wide range of vehicles and book your rental today!</p>
        <button className="btn">Book Now</button>
      </div>
    </section>
  );
}

export default Home;
