import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaStar,
  FaPassport,
  FaUserClock,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import home from "../../assets/herov5.mp4";

const honeymoonhero = () => {
  const [startDate, setStartDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setStartDate(selectedDate);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="h-[450px] w-full relative z-10">
      {/* Background Video */}
      <video
        src={home}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Explore the World
          </h1>
          <p className="text-4xl font-lovers text-[#63c5b0]">
            Find your next destination and adventure
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white/50 rounded-full p-2 shadow-lg flex flex-wrap gap-4 items-center justify-center w-full max-w-3xl">
          <div className="relative flex-grow w-full sm:w-auto">
            <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#63c5b0]" />
            <input
              type="text"
              placeholder="Search destinations, hotels"
              className="w-full p-3 pl-10 rounded-full border outline-[#63c5b0] text-[#63c5b0]"
            />
          </div>
          <button className="bg-[#52ddbf] hover:bg-[#92bab1] text-black px-6 py-3 rounded-full flex items-center gap-2">
            <FaSearch />
            Search
          </button>
        </div>
      </div>

      {/* Trust Media Section */}
      <div className="bg-black px-24 py-4 flex items-center justify-around flex-wrap text-white">
        <div className="flex items-center gap-4">
          <FaStar className="text-2xl text-[#00ffc8]" />
          <span className="text-sm font-semibold">4.6 Rated</span>
        </div>
        <div className="flex  items-center gap-4">
          <FaMapMarkedAlt className="text-2xl text-[#00ffc8]" />
          <span className="text-sm font-semibold">100% Customised Trips</span>
        </div>
        <div className="flex items-center gap-4">
          <FaPassport className="text-2xl text-[#00ffc8]" />
          <span className="text-sm font-semibold">95% Visa Success Rate</span>
        </div>
        <div className="flex items-center gap-4">
          <FaUserClock className="text-2xl text-[#00ffc8]" />
          <span className="text-sm font-semibold">24x7 Concierge</span>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal />
    </div>
  );
};

const EnquiryModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const isDismissed = localStorage.getItem("enquiryDismissed");
      const isSubmitted = localStorage.getItem("enquirySubmitted");

      if (!isDismissed && !isSubmitted) {
        const timer = setTimeout(() => {
          setShowModal(true);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleDismiss = () => {
    setShowModal(false);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("enquiryDismissed", "true");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("enquirySubmitted", "true");
    }
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

export default honeymoonhero;