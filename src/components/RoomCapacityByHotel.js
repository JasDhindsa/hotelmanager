import React, { useState, useEffect } from "react";
import "./RoomCapacityByHotel.css";

const RoomCapacityByHotel = ({ data }) => {
  return (
    <div className="room-capacity-container">
      <h2 className="room-capacity-header">Room Capacity by Hotel</h2>
      <table className="room-capacity-table">
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Total Capacity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.HotelName}>
              <td>{row.HotelName}</td>
              <td>{row.TotalCapacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomCapacityByHotel;
