import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = (link) => {
    console.log(`Navigating to ${link}`);
    setIsDropdownOpen(false); // Close the dropdown after selecting an item
  };

  return (
    <nav className="text-white flex justify-end gap-10 p-4 bg-gray-800 relative">
      {/* Home */}
      <a href="/" className="hover:text-gray-400">
        Home
      </a>

      {/* About Us with Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <span className="cursor-pointer hover:text-gray-400" onClick={() => setIsDropdownOpen(true)}>
          About Us
        </span>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-8 right-0 bg-white text-black rounded-lg shadow-lg w-48 py-2 z-50">
            <a
              href="/about"
              onClick={() => handleDropdownClick('/about')}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              About Us
            </a>
            <a
              href="/testimonials"
              onClick={() => handleDropdownClick('/testimonials')}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Testimonials
            </a>
            <a
              href="/awards"
              onClick={() => handleDropdownClick('/awards')}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Awards
            </a>
            <a
              href="/history"
              onClick={() => handleDropdownClick('/history')}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              History
            </a>
          </div>
        )}
      </div>

      {/* Other Navigation Links */}
      <a href="/StayHome" className="hover:text-gray-400">
        Stays
      </a>
      <a href="/FlightHome" className="hover:text-gray-400">
        Flights
      </a>
      <a href="/PackagesHome" className="hover:text-gray-400">
        Packages
      </a>
      <a href="/Contact" className="hover:text-gray-400">
        Contact
      </a>
      <a href="/SignIn" className="hover:text-gray-400">
        Sign In
      </a>
    </nav>
  );
};

export default Navbar;
