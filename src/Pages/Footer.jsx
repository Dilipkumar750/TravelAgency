import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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
            <h2 className="text-2xl font-bold text-gray-900">Get the Latest News!</h2>
            <p className="mt-4 text-gray-500">
              Sign up to stay updated with news and offers.
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
            </form>
          </div>

          {/* Services Links */}
          <div>
            <p className="font-bold mt-6">Services</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {['1-on-1 Coaching', 'Company Review', 'Accounts Review', 'HR Consulting'].map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="hover:text-teal-500 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information Links */}
          <div>
            <p className="font-bold mt-6">Company</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {['About', 'Meet the Team', 'Investor Relations'].map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="hover:text-teal-500 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Integration */}
          <div className="mt-6 flex justify-start gap-6 lg:justify-end">
            {[
              { icon: <FaFacebookF size={36} />, link: 'https://www.facebook.com' },
              { icon: <FaInstagram size={36} />, link: 'https://www.instagram.com' },
              { icon: <FaTwitter size={36} />, link: 'https://www.twitter.com' },
              { icon: <FaYoutube size={36} />, link: 'https://www.youtube.com' }
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
        </div>

        {/* Footer Bottom Section */}
        <p className="mt-6 text-gray-500 text-center">
          © {year} All Rights Reserved | YourCompanyName.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
