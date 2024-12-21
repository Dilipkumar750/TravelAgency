import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');

  // Basic form validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/\S+@\S+\.\S+/.test(email)) {
      alert(`Subscription Successful for ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-100 to-white py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">

          {/* Latest News Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get the Latest Travel Deals!</h2>
            <p className="mt-4 text-gray-500">
              Sign up to stay updated with exclusive travel offers, new destinations, and exciting tours.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-wrap gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded bg-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-teal-500 text-white rounded shadow hover:bg-teal-600 transition"
              >
                Subscribe
              </button>
                <div className="mt-6 flex justify-start gap-6 lg:justify-end">
            {[ 
              { icon: <FaFacebookF size={36} />, link: 'https://www.facebook.com' },
              { icon: <FaInstagram size={36} />, link: 'https://www.instagram.com' },
              { icon: <FaTwitter size={36} />, link: 'https://www.twitter.com' },
              { icon: <FaYoutube size={36} />, link: 'https://www.youtube.com' },
              { icon: <FaTripadvisor size={36} />, link: 'https://www.tripadvisor.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
            </form>
          </div>

          {/* Travel Services Links */}
          <div>
            <p className="font-bold mt-6">Our Services</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {['Vacation Packages', 'Adventure Tours', 'Luxury Travel', 'Cruises', 'Flight Booking', 'Group Travel'].map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="hover:text-teal-500 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destination Sections */}
          <div>
            <p className="font-bold mt-6">Popular Destinations</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {['Europe', 'Asia', 'North America', 'Australia', 'Africa', 'South America'].map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="hover:text-teal-500 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Resources */}
          

          {/* Company Information Links */}
          <div>
            <p className="font-bold mt-6">Company</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {['About Us', 'Meet Our Team', 'Careers', 'Contact Us', 'Press Releases'].map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="hover:text-teal-500 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support Links */}
          <div>
            <p className="font-bold mt-6">Customer Support</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {['FAQs', 'Booking Help', 'Travel Tips', 'Refund Policy', 'Privacy Policy'].map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="hover:text-teal-500 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Integration */}
        
        </div>

        {/* Footer Bottom Section */}
        <p className="mt-6 text-gray-500 text-center">
          © {year} All Rights Reserved | [Your Travel Agency Name]. Designed with <span className="text-red-500">❤️</span> by [Your Company].
        </p>
      </div>
    </footer>
  );
};

export default Footer;
