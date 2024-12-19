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
    const selectedDate = event.target.value; // Gets the selected date
    setStartDate(selectedDate);
    // Log or use the date as needed
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <div className="absolute top-8 left-8 z-20">
          <h1 className="text-5xl font-bold mb-6">Explore the World</h1>
          <p className="text-lg mb-10">Find your next destination and adventure</p>
        </div>

        <div className="bg-white/50 rounded-lg p-4 shadow-lg flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl">
          <div className="relative w-full text-gray-500">
            <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search destinations, hotels"
              className="w-full p-3 pl-10 rounded-md border focus:outline-none"
            />
          </div>
          <input
            type="date"
            placeholder="Check-in"
            className="w-full p-3 rounded-md border focus:outline-none text-gray-400"
            value={startDate}
            onChange={handleDateChange}
            min={today}
          />
          <input
            type="date"
            placeholder="Check-out"
            className="w-full p-3 rounded-md border focus:outline-none text-gray-400"
            value={startDate}
            onChange={handleDateChange}
            min={today}
          />
          <div className="relative w-full text-black">
            <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <select
              name="room"
              id="Room"
              className="w-full p-3 rounded-md border focus:outline-none text-gray-400 ml-3"
            >
              <option value="Single">Single</option>
              <option value="couple">Couple</option>
              <option value="group">Group</option>
              <option value="Family">Family</option>
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2">
            <FaSearch />
            Search
          </button>
        </div>

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

      <EnquiryModal />
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

const EnquiryModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the form has been dismissed or submitted before
    const isDismissed = localStorage.getItem("enquiryDismissed");
    const isSubmitted = localStorage.getItem("enquirySubmitted");

    // Only set the timer if the form has not been dismissed or submitted
    if (!isDismissed && !isSubmitted) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3000); // 30 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, []);

  const handleDismiss = () => {
    setShowModal(false);
    localStorage.setItem("enquiryDismissed", "true"); // Mark as dismissed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    localStorage.setItem("enquirySubmitted", "true"); // Mark as submitted
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
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
