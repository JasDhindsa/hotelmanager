import React from "react";
import "./RentingCard.css";

const RentingCard = ({
  name,
  startDate,
  endDate,
  price,
  capacity,
  imageUrl,
}) => {
  return (
    <div className="renting-card">
      <div className="renting-card-header">
        <img
          src={imageUrl}
          alt="Profile"
          className="renting-card-profile-img"
        />
        <h3 className="renting-card-title">{name}</h3>
      </div>
      <div className="renting-card-body">
        <div className="renting-card-dates">
          <div className="renting-card-start-date">Start Date: {startDate}</div>
          <div className="renting-card-end-date">End Date: {endDate}</div>
        </div>
        <div className="renting-card-price">Price: ${price}</div>
        <div className="renting-card-capacity">Capacity: {capacity} guests</div>
      </div>
      <button class="renting-card-button">Rent Now</button>
    </div>
  );
};

export default RentingCard;
