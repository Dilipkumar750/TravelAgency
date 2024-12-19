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
import home from '../../assets/honeymoonbg.webp';

const HoneymoonHero = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative object-fit"
      style={{ backgroundImage: `url(${home})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Top-left H1 */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-5xl font-bold text-white">The whole world awaits.</h1>
      </div>

      {/* Search and Categories */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Search Bar */}
        <div className="bg-white/80 rounded-lg p-4 shadow-lg flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl">
          {/* Search Destination */}
          <div className="relative w-full text-gray-500">
            <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search destinations, hotels"
              className="w-full p-3 pl-10 rounded-md border focus:outline-none"
            />
          </div>

          {/* Check-in */}
          <input
            type="date"
            placeholder="Check-in"
            className="w-full p-3 rounded-md border focus:outline-none text-gray-500"
            value={startDate}
            onChange={handleStartDateChange}
            min={today}
          />

          {/* Check-out */}
          <input
            type="date"
            placeholder="Check-out"
            className="w-full p-3 rounded-md border focus:outline-none text-gray-500"
            value={endDate}
            onChange={handleEndDateChange}
            min={startDate || today}
          />

          {/* Room Selection */}
          <div className="relative w-full">
            <select
              name="room"
              id="Room"
              className="w-full p-3 rounded-md border focus:outline-none text-gray-500"
            >
              <option value="Couple">Couple</option>
          
            </select>
          </div>

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
          <CategoryItem icon={<FaShip />} label="Houseboats" />
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

export default HoneymoonHero;
