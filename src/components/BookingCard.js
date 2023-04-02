import React from "react";
import "./BookingCard.css";

const BookingCard = ({
  name,
  startDate,
  endDate,
  price,
  capacity,
  imageUrl,
}) => {
  return (
    <div className="booking-card">
      <div className="booking-card-header">
        <img
          src={imageUrl}
          alt="Profile"
          className="booking-card-profile-img"
        />
        <h3 className="booking-card-title">{name}</h3>
      </div>
      <div className="booking-card-body">
        <div className="booking-card-dates">
          <div className="booking-card-start-date">Start Date: {startDate}</div>
          <div className="booking-card-end-date">End Date: {endDate}</div>
        </div>
        <div className="booking-card-price">Price: ${price}</div>
        <div className="booking-card-capacity">Capacity: {capacity} guests</div>
      </div>
    </div>
  );
};

export default BookingCard;
