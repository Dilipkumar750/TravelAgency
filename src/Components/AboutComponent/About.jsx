import React from 'react';
import hill from '../../assets/fall.jpg';
import Aboutimg from '../../assets/about image1.jpg';
import friends from '../../assets/happy friends.webp';
import summer from '../../assets/summer.avif';
import vision from '../../assets/vision.jpeg';
import mission from '../../assets/mission.jpeg';
import Quotesimg from '../../assets/quotesimg.jpg';
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
      <div className="bg-gray-100 py-16 p-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div className="text-center">
            <img src={vision} alt="Vision" className="mx-auto rounded-lg w-64 h-64 object-cover shadow-md" />
            <h3 className="text-2xl font-semibold mt-6">Our Vision</h3>
            <p className="text-gray-600 mt-4 px-4">
              To become the most trusted travel partner, inspiring explorers to discover the world’s wonders and create lasting memories.
            </p>
          </div>
          <div className="text-center">
            <img src={mission} alt="Mission" className="mx-auto rounded-lg w-64 h-64 object-cover shadow-md" />
            <h3 className="text-2xl font-semibold mt-6">Our Mission</h3>
            <p className="text-gray-600 mt-4 px-4">
              To deliver seamless, enriching, and sustainable travel experiences that connect people with diverse cultures and destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section id="our-team" className="bg-black py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
                <div className="text-gray-600 text-xl mt-2">{member.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
