import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isHoneymoonOpen, setIsHoneymoonOpen] = useState(false);
  const [selectedHoneymoonTab, setSelectedHoneymoonTab] = useState("india");

  const handleHoneymoonMouseEnter = () => {
    setIsHoneymoonOpen(true);
  };

  const handleHoneymoonMouseLeave = () => {
    setIsHoneymoonOpen(false);
  };

  const handleHoneymoonTabClick = (tab) => {
    setSelectedHoneymoonTab(tab);
  };

  const indianDestinations = [
    "Goa", "Coorg", "Dalhousie", "Darjeeling", "Kodaikanal", "Agra", "Munnar","Sikkim","Udaipur","Pondicherry",
  ];

  const internationalDestinations = [
    "Maldives", "Bali", "Mauritius", "Phuket", "Switzerland", "Seychelles",
    "Langkawi", "Paris", "Italy", "Krabi",
  ];

  return (
    <nav className="text-black px-48 bg-white/90 flex justify-between items-center p-4 sticky top-0 z-50 font-blacker_pro_display_condensed, sans-serif;">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-40" />

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10">
        <a href="/" className="hover:text-gray-800 font-bold">Home</a>
        <a href="/about" className="hover:text-gray-800 font-bold">About Us</a>
        <a href="/StayHome" className="hover:text-gray-800 font-bold">Stays</a>
        <a href="/Destinations" className="hover:text-gray-800 font-bold">Destinations</a>
        <a href="/PackagesHome" className="hover:text-gray-800 font-bold">Packages</a>

        {/* Honeymoon Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleHoneymoonMouseEnter}
          onMouseLeave={handleHoneymoonMouseLeave}
        >
          <span className="cursor-pointer hover:text-gray-800 font-bold">
            Honeymoon
          </span>
          {isHoneymoonOpen && (
            <div className="absolute top-8 right-0 bg-slate-50 text-black rounded-lg shadow-lg w-80 py-4 z-50">
              {/* Tabs */}
              <div className="flex border-b text-blue-500 font-medium">
                <button
                  className={`w-1/2 p-2 ${
                    selectedHoneymoonTab === "india"
                      ? "bg-gray-200 rounded-3xl"
                      : "hover:bg-gray-200 rounded-3xl"
                  }`}
                  onClick={() => handleHoneymoonTabClick("india")}
                >
                  India
                </button>
                <button
                  className={`w-1/2 p-2 ${
                    selectedHoneymoonTab === "international"
                      ? "bg-gray-200 rounded-3xl"
                      : "hover:bg-gray-200 rounded-3xl"
                  }`}
                  onClick={() => handleHoneymoonTabClick("international")}
                >
                  International
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Indian Destinations */}
                {selectedHoneymoonTab === "india" && (
                  <div className="w-full">
                    <h4 className="font-bold mb-2">Indian Destinations</h4>
                    <ul className="list-disc pl-5 grid grid-cols-2 gap-x-4 space-y-">
                      {indianDestinations.map((destination, index) => (
                        <li key={index}>
                          <a
                            href={`/${destination.toLowerCase().replace(" ", "-")}`}
                            className="hover:text-blue-500 text-sm "
                          >
                            {destination}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* International Destinations */}
                {selectedHoneymoonTab === "international" && (
                  <div className="w-full">
                    <h4 className="font-bold mb-2">International Destinations</h4>
                    <ul className="list-disc pl-5 grid grid-cols-2 gap-x-4 space-y-">
                      {internationalDestinations.map((destination, index) => (
                        <li key={index}>
                          <a
                            href={`/${destination.toLowerCase().replace(" ", "-")}`}
                            className="hover:text-blue-500 text-sm "
                          >
                            {destination}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <a href="/Contact" className="hover:text-gray-800 font-bold">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
