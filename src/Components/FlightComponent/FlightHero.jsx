import React, { useState } from 'react';
import {
  FaSearch,
  FaUmbrellaBeach,
  FaSkiing,
  FaCampground,
  FaMountain,
  FaCity,
  FaShip,
} from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import {
  GiDesert,
  GiCastle,
  GiPalmTree,
  GiFarmTractor,
} from 'react-icons/gi';
import home from '../../assets/stayhome.webp';

const FlightHero = () => {
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [airline, setAirline] = useState('');

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleArrivalDateChange = (event) => {
    setArrivalDate(event.target.value);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${home})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Top-left H1 */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-5xl font-bold text-white">Fly Anywhere, Anytime.</h1>
      </div>

      {/* Search and Flight Info */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Search Bar */}
        <div className="bg-white/80 rounded-lg p-4 shadow-lg flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl">
          {/* Search Flight */}
          <div className="relative w-full text-gray-500">
            <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search flights, airlines"
              className="w-full p-3 pl-10 rounded-md border focus:outline-none"
            />
          </div>

          {/* Departure Date */}
          <input
            type="date"
            placeholder="Departure Date"
            className="w-full p-3 rounded-md border focus:outline-none text-gray-500"
            value={departureDate}
            onChange={handleDepartureDateChange}
            min={today}
          />

          {/* Arrival Date */}
          <input
            type="date"
            placeholder="Arrival Date"
            className="w-full p-3 rounded-md border focus:outline-none text-gray-500"
            value={arrivalDate}
            onChange={handleArrivalDateChange}
            min={departureDate || today}
          />

          {/* Flight Number */}
          <input
            type="text"
            placeholder="Flight Number"
            className="w-full p-3 rounded-md border focus:outline-none text-gray-500"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />

          {/* Airline */}
          <input
            type="text"
            placeholder="Airline"
            className="w-full p-3 rounded-md border focus:outline-none text-gray-500"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
          />

          {/* Search Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2">
            <FaSearch />
            Search
          </button>
        </div>

        {/* Categories */}
        <div className="mt-16 flex sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          <CategoryItem icon={<FaUmbrellaBeach />} label="Beaches" />
          <CategoryItem icon={<GiDesert />} label="Deserts" />
          <CategoryItem icon={<FaMountain />} label="Mountains" />
          <CategoryItem icon={<FaCity />} label="Iconic Cities" />
          <CategoryItem icon={<FaShip />} label="Cruises" />
          <CategoryItem icon={<GiFarmTractor />} label="Countryside" />
          <CategoryItem icon={<FaCampground />} label="Camping" />
          <CategoryItem icon={<GiCastle />} label="Castles" />
          <CategoryItem icon={<FaSkiing />} label="Skiing" />
          <CategoryItem icon={<GiPalmTree />} label="Tropical" />
        </div>
      </div>
    </div>
  );
};

// Component for Categories
const CategoryItem = ({ icon, label }) => (
  <div className="flex flex-col items-center text-white hover:text-blue-500 transition duration-300">
    <div className="p-4 rounded-full text-3xl mb-2">{icon}</div>
    <span className="text-lg">{label}</span>
  </div>
);

export default FlightHero;
