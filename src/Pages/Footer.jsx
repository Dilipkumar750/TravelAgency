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
        <>
            <footer className="bg-gray-900 text-white py-10 mt-20">
                <div className="container mx-auto flex flex-wrap justify-between mb-10">
                    {/* About Us */}
                    <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                        <h3 className="text-yellow-400 text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm leading-6">
                            Explore the world with us! We are a travel agency dedicated to making your dream vacations a reality. From exotic destinations to hidden gems, we've got you covered.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                        <h3 className="text-yellow-400 text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-yellow-400 text-sm">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/destinations" className="hover:text-yellow-400 text-sm">Destinations</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/packages" className="hover:text-yellow-400 text-sm">Packages</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="hover:text-yellow-400 text-sm">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Packages */}
                    <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                        <h3 className="text-yellow-400 text-lg font-semibold mb-4">Popular Packages</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/packages/beach-getaway" className="hover:text-yellow-400 text-sm">Beach Getaway</Link>
                                <p className="text-xs text-gray-400">3 nights starting at $499</p>
                            </li>
                            <li className="mb-2">
                                <Link to="/packages/adventure-trek" className="hover:text-yellow-400 text-sm">Adventure Trek</Link>
                                <p className="text-xs text-gray-400">5 nights starting at $799</p>
                            </li>
                            <li className="mb-2">
                                <Link to="/packages/romantic-escape" className="hover:text-yellow-400 text-sm">Romantic Escape</Link>
                                <p className="text-xs text-gray-400">2 nights starting at $399</p>
                            </li>
                            <li className="mb-2">
                                <Link to="/packages/city-explorer" className="hover:text-yellow-400 text-sm">City Explorer</Link>
                                <p className="text-xs text-gray-400">4 nights starting at $599</p>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full sm:w-1/4">
                        <h3 className="text-yellow-400 text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm mb-2">Email: info@travelagency.com</p>
                        <p className="text-sm mb-2">Phone: +1 123 456 7890</p>
                        <p className="text-sm">Address: 123 Travel St, Wanderlust City</p>
                    </div>
                </div>

                {/* Packages Section */}
                <div className="bg-gray-800 py-8">
                    <div className="container mx-auto">
                        <h3 className="text-yellow-400 text-lg font-semibold mb-6 text-center">Packages</h3>
                        <h4 className="text-white text-base font-semibold mb-4 text-center">Top Travel Locations</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                            {[
                                "Maldives",
                                "Paris",
                                "Bali",
                                "New York",
                                "Rome",
                                "Tokyo",
                                "Dubai",
                                "Sydney",
                                "Cape Town",
                                "Santorini",
                                "London",
                                "Bangkok",
                                "Istanbul",
                                "Los Angeles",
                                "Singapore",
                                "Hawaii",
                                "Machu Picchu",
                                "Kyoto",
                                "Amsterdam",
                                "Las Vegas",
                                "Prague",
                                "Phuket",
                                "Cairo",
                                "Zurich",
                                "Venice",
                                "Hong Kong",
                                "Barcelona",
                                "Rio de Janeiro",
                                "Seoul",
                                "Edinburgh",
                            ].map((location, index) => (
                                <Link
                                    to={`/packages/${location.toLowerCase().replace(/\s+/g, '-')}`}
                                    key={index}
                                    className="text-center text-sm text-gray-300 hover:text-yellow-400 cursor-pointer"
                                >
                                    {location} packages
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-sm">&copy; {year} Travel Agency. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
