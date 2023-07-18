import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import bikesData from './data/bikesDatabase.json';
import './RentABike.css';

function RentACar() {
  const mountainBikes = bikesData.mountainBikes;
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleSearch = () => {
    // Handle the search functionality here, e.g., filter based on fromDate and toDate
    console.log('Search clicked.');
    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);
  };

  return (
    <section className="rent-a-bike-section">
      <div className="container">
        <h2>Rent a Bike</h2>
        <div className="date-fields">
          <div className="date-field">
            <label>From Date:</label>
            <DatePicker
              selected={fromDate}
              onChange={handleFromDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select From Date"
            />
          </div>
          <div className="date-field">
            <label>To Date:</label>
            <DatePicker
              selected={toDate}
              onChange={handleToDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select To Date"
            />
          </div>
          <button className="btn" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {/* List view of bikes */}
      <div className="bike-list">
        <div className="container">
          <div className="bike-cards">
            {bikesData.mountainBikes.map((bike) => (
              <div key={bike.id} className="bike-card">
                <strong>{bike.brand} - {bike.model}</strong>
                <br />
                Tire Size: {bike.tireSize}
                <br />
                Frame Size: {bike.frameSize}
                <br />
                Price: ${bike.price}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RentACar;