import React, { useState, useEffect } from "react";
import "./AvailableRoomsView.css";

const AvailableRoomsView = ({ data }) => {
  return (
    <div className="room-capacity-container">
      <h2 className="room-capacity-header">Available Rooms View</h2>
      <table className="room-capacity-table">
        <thead>
          <tr>
            <th>City</th>
            <th>Available Rooms</th>
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

export default AvailableRoomsView;
