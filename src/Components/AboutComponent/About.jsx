import React from 'react';
import hill from '../../assets/fall.jpg';
import Aboutimg from '../../assets/about image1.jpg';
import friends from '../../assets/happy friends.webp';
import summer from '../../assets/summer.avif';
import vision from '../../assets/vIndonasia.jpg';
import mission from '../../assets/mission.jpeg';
import Quotesimg from '../../assets/quotesimg.jpg';
import bluebg from '../../assets/blue-bg.jpg';
import { FaUserAlt, FaSuitcase, FaGlobeAmericas, FaPhoneAlt, FaUserTie, FaUserShield } from "react-icons/fa";
import sample from "../../assets/sample.webp"



import { Link } from "react-router-dom"
const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      image: sample,
      icon: <FaUserTie />,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Managing Director",
      image: sample,
      icon: <FaUserTie />,
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Customer Support",
      image: sample,
      icon: <FaPhoneAlt />,
    },
    {
      id: 4,
      name: "Emily Brown",
      role: "Customer Support",
      image: sample,
      icon: <FaPhoneAlt />,
    },
    {
      id: 5,
      name: "Michael Davis",
      role: "Tour Guide",
      image: sample,
      icon: <FaGlobeAmericas />,
    },
    {
      id: 6,
      name: "Sarah Johnson",
      role: "Consultant",
      image: sample,
      icon: <FaSuitcase />,
    },
    {
      id: 7,
      name: "David Wilson",
      role: "Manager",
      image: sample,
      icon: <FaUserShield />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${hill})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className='bg-black/50 p-8 rounded-xl'>
          <h1 className="text-5xl font-bold leading-tight">
            Crafting Unforgettable Journeys
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl">
            Explore breathtaking destinations with personalized experiences. Let Tentwood Trips turn your travel dreams into reality.
          </p>
          <Link to="/contact">
            <button className="mt-6 px-8 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
              Start Your Adventure
            </button>
          </Link>
        </div>
      </div>

      {/* About Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Discover the World with Tentwood Trips
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed">
            At Tentwood Trips, we create personalized travel experiences for every type of traveler. Whether you seek peaceful luxury retreats or thrilling adventures, each journey is designed with care and precision.
            We believe travel is about making unforgettable memories and meaningful connections. Our expert team crafts itineraries that reflect your unique interests for a seamless and exciting trip.
            Discover stunning destinations, from hidden gems to famous landmarks, all with thoughtfully planned travel. Relax on pristine beaches, explore rugged landscapes, or dive into vibrant cultures—we make it happen.
            Beyond planning, we focus on authentic experiences, sustainable tourism, and connecting with local communities. With Tentwood Trips, every journey becomes a story worth sharing.
          </p>
          <Link to="/contact">
            <button className='mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition'>
              Book Your Trip
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={Aboutimg} alt="About" className="rounded-xl shadow-lg object-cover h-48 w-full" />
          <img src={friends} alt="Friends" className="rounded-xl shadow-lg object-cover h-48 w-full" />
          <img src={summer} alt="Summer" className="rounded-xl shadow-lg object-cover h-48 w-full" />
          <img src={Quotesimg} alt="Quotes" className="rounded-xl shadow-lg object-cover h-48 w-full" />
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div style={{
        backgroundImage: `url(${bluebg})`,
        backgroundSize: 'cover'
      }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 p`t-10 pb-10">
          <div className="text-center rounded-fully ">
            <img src={vision} alt="Mission" className="p-7 " />
          </div>
          <div>
            <div className="text-center p-3 mt-7 bg-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mt-6">Our Vision</h3>
              <p className="text-gray-600 mt-4 px-4">
                To become the most trusted travel partner, inspiring explorers to discover the world’s wonders and create lasting memories.
              </p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mt-6">Our Mission</h3>
              <p className="text-gray-600 mt-4 px-4">
                To deliver seamless, enriching, and sustainable travel experiences that connect people with diverse cultures and destinations.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Team Section */}
      <section id="our-team" className="py-32 rounded-lg">
        <div className="ml-28 mr-28 mx-auto rounded-lg transition-all duration-300 ease-in-out">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-md p-6 text-center rounded-lg mb-4 border-4 border-solid border-blue-900 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 rounded-full mb-4 border-4 border-solid border-blue-500 mx-auto block transition-all duration-300 ease-in-out hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2">
                  <span className='text-blue-400'>Name: </span> {member.name}
                </h3>
                <p className="text-gray-700">
                  <span className='text-blue-400 font-semibold'>Designation: </span> {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
