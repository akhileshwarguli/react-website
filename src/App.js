/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RentABike from './RentABike';
import CheckReservation from './CheckReservation';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/rent-a-bike" element={<RentABike/>}/>
          <Route path="/check-reservation" element={<CheckReservation/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
