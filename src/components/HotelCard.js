import React from "react";
import "./HotelCard.css";

const HotelCard = ({ hotelName, capacity, imageUrl, onRentClick }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-image-container">
        <img src={imageUrl} alt={hotelName} className="hotel-image" />
      </div>
      <div className="hotel-info-container">
        <h2 className="hotel-name">{hotelName}</h2>
        <p className="capacity">{capacity} people</p>
        <button className="rent-button" onClick={onRentClick}>
          Rent
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
