import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState('');

    // Handle email subscription form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (/\S+@\S+\.\S+/.test(email)) {
            alert(`Subscription Successful for ${email}`);
            setEmail('');
        } else {
            alert('Please enter a valid email address.');
        }
    };

    const travelLocations = [
        "Maldives", "Paris", "Bali", "New York", "Rome", "Tokyo", "Dubai", "Sydney",
        "Cape Town", "Santorini", "London", "Bangkok", "Istanbul", "Los Angeles",
        "Singapore", "Hawaii", "Machu Picchu", "Kyoto", "Amsterdam", "Las Vegas",
        "Prague", "Phuket", "Cairo", "Zurich", "Venice", "Hong Kong", "Barcelona",
        "Rio de Janeiro", "Seoul", "Edinburgh"
    ];

    return (
        <footer className="bg-gray-900 text-white py-10 mt-20">
            <div className="container mx-auto flex flex-wrap justify-between mb-10">
                {/* About Us */}
                <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                    <h3 className="text-yellow-400 text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-sm leading-6">
                        Explore the world with us! We are a travel agency dedicated to making your dream vacations a reality.
                        From exotic destinations to hidden gems, we've got you covered.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                    <h3 className="text-yellow-400 text-lg font-semibold mb-4">Quick Links</h3>
                    <ul>
                        {['Home', 'Destinations', 'Packages', 'Honeymoon', 'Contact Us'].map((item, index) => (
                            <li className="mb-2" key={index}>
                                <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-yellow-400 text-sm">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Popular Packages */}
                <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                    <h3 className="text-yellow-400 text-lg font-semibold mb-4">Popular Packages</h3>
                    <ul>
                        {[
                            { name: 'Beach Getaway', price: '$499', nights: 3 },
                            { name: 'Adventure Trek', price: '$799', nights: 5 },
                            { name: 'Romantic Escape', price: '$399', nights: 2 },
                            { name: 'City Explorer', price: '$599', nights: 4 },
                        ].map((pkg, index) => (
                            <li className="mb-2" key={index}>
                                <Link to={`/packages/${pkg.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-yellow-400 text-sm">
                                    {pkg.name}
                                </Link>
                                <p className="text-xs text-gray-400">{pkg.nights} nights starting at {pkg.price}</p>
                            </li>
                        ))}
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
                        {travelLocations.map((location, index) => (
                            <Link
                                to={`/packages/${location.toLowerCase().replace(/\s+/g, '-')}`}
                                key={index}
                                className="text-center text-sm text-gray-300 hover:text-yellow-400 cursor-pointer"
                            >
                                {location} Packages
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                <p className="text-sm">&copy; {year} Travel Agency. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
