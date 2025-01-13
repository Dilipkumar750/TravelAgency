import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaStar,
  FaPassport,
  FaUserClock,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import home from "../../assets/herov6.mp4";

const Hero = () => {
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
    const isModalDismissed = localStorage.getItem("enquiryDismissed");
    console.log("Modal dismissed state:", isModalDismissed); // Log to check if modal was dismissed
    if (!isModalDismissed) {
      const timer = setTimeout(() => {
        console.log("Showing modal after 3 seconds"); // Log to confirm timeout triggers
        setShowModal(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    console.log("Modal dismissed"); // Log when dismiss button is clicked
    setShowModal(false);
    localStorage.setItem("enquiryDismissed", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Log on form submission
    setShowModal(false);
    localStorage.setItem("enquiryDismissed", "true");
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 sm:p-20">
          <div className="relative bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={handleDismiss}
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">
              Plan Your Dream Vacation
            </h2>
            <p className="text-center text-gray-500 text-sm mb-4">
              Fill in the details below to create your personalized travel plan!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:from-blue-600 hover:to-green-500 shadow-lg"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
