import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaUmbrellaBeach,
  FaSkiing,
  FaCampground,
  FaMountain,
  FaCity,
  FaShip,
} from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { GiDesert, GiCastle, GiPalmTree, GiFarmTractor } from "react-icons/gi";
import home from "../../assets/home.gif";

const Hero = () => {
  const [startDate, setStartDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setStartDate(selectedDate);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Explore the World
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Find your next destination and adventure
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white/50 rounded-lg p-4 shadow-lg flex flex-wrap gap-4 items-center justify-center w-full max-w-4xl">
          {/* Search Input */}
          <div className="relative flex-grow w-full sm:w-auto">
            <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search destinations, hotels"
              className="w-full p-3 pl-10 rounded-md border focus:outline-none text-gray-700"
            />
          </div>

          {/* Check-in Date */}
          <input
            type="date"
            className="w-full sm:w-auto p-3 rounded-md border focus:outline-none text-gray-700"
            value={startDate}
            onChange={handleDateChange}
            min={today}
          />

          {/* Check-out Date */}
          <input
            type="date"
            className="w-full sm:w-auto p-3 rounded-md border focus:outline-none text-gray-700"
            value={startDate}
            onChange={handleDateChange}
            min={today}
          />

          {/* Room Selector */}
          <div className="relative w-full sm:w-auto">
            <select
              name="room"
              id="Room"
              className="w-full p-3 rounded-md border focus:outline-none text-gray-700"
            >
              <option value="Single">Single</option>
              <option value="couple">Couple</option>
              <option value="group">Group</option>
              <option value="Family">Family</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2">
            <FaSearch />
            Search
          </button>
        </div>

        {/* Categories Section */}
        <div className="mt-10 grid grid-cols-5 sm:grid-cols-3 md:grid-cols-10 gap-6 text-center">
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

      <EnquiryModal />
    </div>
  );
};

const CategoryItem = ({ icon, label }) => (
  <div className="flex flex-col items-center text-white hover:text-blue-500 transition duration-300">
    <div className="p-4 rounded-full text-3xl mb-2">{icon}</div>
    <span className="text-sm sm:text-base">{label}</span>
  </div>
);

const EnquiryModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("enquiryDismissed");
    const isSubmitted = localStorage.getItem("enquirySubmitted");

    if (!isDismissed && !isSubmitted) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShowModal(false);
    localStorage.setItem("enquiryDismissed", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    localStorage.setItem("enquirySubmitted", "true");
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 sm:w-80">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
