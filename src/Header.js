import React from 'react';
import "./Header.css";
import logo from './logo.png';
import { Link } from 'react-router-dom';

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
              {/* <a href="#">Rent a Bike</a> */}
              <Link to="/rent-a-bike">Rent a Bike</Link>
            </li>
            <li>
              {/* <a href="#">Check Reservation</a> */}
              <Link to="/check-reservation">Check Reservation</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
