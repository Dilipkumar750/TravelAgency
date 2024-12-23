import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownClick = (link) => {
    console.log(`Navigating to ${link}`);
    setIsDropdownOpen(false); // Close the dropdown after clicking
    window.location.href = link; // Navigate to the selected link
  };

  const handleAboutClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown on click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-white flex justify-between items-center p-4 bg-gray-800 relative">
      {/* Logo or Branding */}
      <div className="text-2xl font-bold">Logo</div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden" onClick={toggleMobileMenu}>
        <button className="text-white">
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
        <div className="absolute top-0 left-0 right-0 bg-gray-800 text-white lg:hidden flex flex-col items-center py-4 space-y-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <div className="relative">
            <span
              className="cursor-pointer hover:text-gray-400"
              onClick={handleAboutClick}
            >
              About Us
            </span>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-48 py-2 z-50">
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
                <a
                  href="/TermsAndConditions"
                  onClick={() => handleDropdownClick('/TermsAndConditions')}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/PrivacyPolicy"
                  onClick={() => handleDropdownClick('/PrivacyPolicy')}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Privacy Policy
                </a>
              </div>
            )}
          </div>
          <a href="/StayHome" className="hover:text-gray-400">Stays</a>
          <a href="/Destinations" className="hover:text-gray-400">Destinations</a>
          <a href="/PackagesHome" className="hover:text-gray-400">Packages</a>
          <a href="/HoneymoonHome" className="hover:text-gray-400">Honey Moon</a>
          <a href="/Contact" className="hover:text-gray-400">Contact</a>
          <a href="/SignIn" className="hover:text-gray-400">Sign In</a>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10">
        {/* Home */}
        <a href="/" className="hover:text-gray-400">Home</a>

        {/* About Us with Dropdown */}
        <div className="relative">
          <span
            className="cursor-pointer hover:text-gray-400"
            onClick={handleAboutClick}
          >
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
              <a
                href="/TermsAndConditions"
                onClick={() => handleDropdownClick('/TermsAndConditions')}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Terms & Conditions
              </a>
              <a
                href="/PrivacyPolicy"
                onClick={() => handleDropdownClick('/PrivacyPolicy')}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Privacy Policy
              </a>
            </div>
          )}
        </div>

        {/* Other Navigation Links */}
        <a href="/StayHome" className="hover:text-gray-400">Stays</a>
        <a href="/Destinations" className="hover:text-gray-400">Destinations</a>
        <a href="/PackagesHome" className="hover:text-gray-400">Packages</a>
        <a href="/HoneymoonHome" className="hover:text-gray-400">Honey Moon</a>
        <a href="/Contact" className="hover:text-gray-400">Contact</a>
        <a href="/SignIn" className="hover:text-gray-400">Sign In</a>
      </div>
    </nav>
  );
};

export default Navbar;
