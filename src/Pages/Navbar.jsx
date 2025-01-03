import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-black px-48 bg-white/90 flex justify-between items-center p-4 sticky top-0 z-50 font-blacker_pro_display_condensed, sans-serif;">
      <img src={logo} alt="Logo" className="w-40" />

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden" onClick={toggleMobileMenu}>
        <button className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bg-transparent text-black lg:hidden flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="hover:text-gray-800">Home</Link>
          <div className="relative">
            <span
              className="cursor-pointer hover:text-gray-800"
              onClick={handleDropdownClick}
            >
              About Us
            </span>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-48 py-2 z-50">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">
                  About Us
                </Link>
                <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-200">
                  Testimonials
                </Link>
                <Link to="/awards" className="block px-4 py-2 hover:bg-gray-200">
                  Awards
                </Link>
                <Link to="/history" className="block px-4 py-2 hover:bg-gray-200">
                  History
                </Link>
                <Link to="/TermsAndConditions" className="block px-4 py-2 hover:bg-gray-200">
                  Terms & Conditions
                </Link>
                <Link to="/PrivacyPolicy" className="block px-4 py-2 hover:bg-gray-200">
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>
          <Link to="/StayHome" className="hover:text-gray-800">Stays</Link>
          <Link to="/Destinations" className="hover:text-gray-800">Destinations</Link>
          <Link to="/PackagesHome" className="hover:text-gray-800">Packages</Link>
          <Link to="/HoneymoonHome" className="hover:text-gray-800">Honey Moon</Link>
          <Link to="/Contact" className="hover:text-gray-800">Contact</Link>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10">
        <Link to="/" className="hover:text-gray-800 font-bold">Home</Link>

        {/* About Us with Dropdown */}
        <div className="relative">
          <span
            className="cursor-pointer hover:text-gray-800 font-bold"
            onClick={handleDropdownClick}
          >
            About Us
          </span>
          {isDropdownOpen && (
            <div className="absolute top-8 right-0 bg-white text-black rounded-lg shadow-lg w-48 py-2 z-50">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">
                About Us
              </Link>
              <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-200">
                Testimonials
              </Link>
              <Link to="/awards" className="block px-4 py-2 hover:bg-gray-200">
                Awards
              </Link>
              {/* <Link to="/history" className="block px-4 py-2 hover:bg-gray-200">
                History
              </Link> */}
              <Link to="/TermsAndConditions" className="block px-4 py-2 hover:bg-gray-200">
                Terms & Conditions
              </Link>
              <Link to="/PrivacyPolicy" className="block px-4 py-2 hover:bg-gray-200">
                Privacy Policy
              </Link>
            </div>
          )}
        </div>

        <Link to="/StayHome" className="hover:text-gray-800 font-bold">Stays</Link>
        <Link to="/Destinations" className="hover:text-gray-800 font-bold">Destinations</Link>
        <Link to="/PackagesHome" className="hover:text-gray-800 font-bold">Packages</Link>
        <Link to="/HoneymoonHome" className="hover:text-gray-800 font-bold">Honey Moon</Link>
        <Link to="/Contact" className="hover:text-gray-800 font-bold">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
