import React from 'react';
import "./Header.css";
import logo from './logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="NWA Rent-A-Bike" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Rent a Bike</a>
            </li>
            <li>
              <a href="#">Check Reservation</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
