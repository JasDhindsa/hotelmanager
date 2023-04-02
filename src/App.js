import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HotelCard from "./components/HotelCard";
import MainNavigation from "./components/EmployeeNavBar";
import BookingCard from "./components/BookingCard";
import RentingCard from "./components/RentingCard";
import RoomCapacityByHotel from "./components/RoomCapacityByHotel";
import AvailableRoomsView from './components/AvailableRoomsView';



const hotels = [
  {
    name: "Hotel A",
    capacity: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    id: 1,
  },
  {
    name: "Hotel B",
    capacity: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    id: 2,
  },
  {
    name: "Hotel C",
    capacity: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    id: 3,
  },
];

const roomsData = [
  {
    id: 1,
    name: "Single Room",
    capacity: 1,
    price: 100,
    imageUrl: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Double Room",
    capacity: 2,
    price: 200,
    imageUrl: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Suite",
    capacity: 4,
    price: 400,
    imageUrl: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const bookingsData = [
  {
    id: 1,
    guestName: "John Doe",
    startDate: "2023-04-10",
    endDate: "2023-04-14",
    price: 231,
    capacity: 2,
    status: "Paid",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    guestName: "Jane Smith",
    startDate: "2023-04-15",
    endDate: "2023-04-20",
    capacity: 1,
    price: 231,
    status: "Paid",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    guestName: "Bob Johnson",
    price: 231,
    startDate: "2023-04-22",
    endDate: "2023-04-25",
    capacity: 4,
    status: "Paid",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const dummyData = [
    {
      HotelName: "Hotel A",
      TotalCapacity: 50,
    },
    {
      HotelName: "Hotel B",
      TotalCapacity: 75,
    },
    {
      HotelName: "Hotel C",
      TotalCapacity: 100,
    },
  ];


const App = () => {



  const handleRentClick = (hotelId) => {
    // Do something when the Rent button is clicked
    console.log(`Renting hotel ${hotelId}`);
  };

  return (
    <div>
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>

      <div className="App">
        <RoomCapacityByHotel data={dummyData} />
      </div>

      <div className="App">
        <AvailableRoomsView data={dummyData} />
      </div>

      {bookingsData.map((booking) => (
        <RentingCard
          key={booking.id}
          name={booking.guestName}
          startDate={booking.startDate}
          endDate={booking.endDate}
          capacity={booking.capacity}
          price={booking.price}
          imageUrl={booking.imageUrl}
        ></RentingCard>
      ))}

      {bookingsData.map((booking) => (
        <BookingCard
          key={booking.id}
          name={booking.guestName}
          startDate={booking.startDate}
          endDate={booking.endDate}
          capacity={booking.capacity}
          price={booking.price}
          imageUrl={booking.imageUrl}
        ></BookingCard>
      ))}

      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotelName={hotel.name}
          capacity={hotel.capacity}
          imageUrl={hotel.imageUrl}
          onRentClick={() => handleRentClick(hotel.id)}
        />
      ))}
    </div>
  );
};

export default App;