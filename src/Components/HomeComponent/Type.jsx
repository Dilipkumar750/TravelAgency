import React from 'react';
import resort from "../../assets/resorts.jpg";
import city from "../../assets/apartments.jpg";
import beachfront from "../../assets/hotel.avif";
import villa from "../../assets/villa.jpg";

const Type = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 mb-10">
      {/* Header Section */}
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            Top Staying Areas
          </a>
        </div>
        <a href="#" className="text-gray-600 hover:text-indigo-600">
          See All
        </a>
      </div>

      {/* Staying Areas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        
        {/* Card 1: Luxury Resorts */}
        <div className="rounded-2xl overflow-hidden shadow-lg relative h-64 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            className="w-full h-full object-cover"
            src={resort}
            alt="Luxury Resorts"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-2xl font-bold">Luxury Resorts</h3>
            <p>Indulge in a stay with world-class facilities and stunning views.</p>
          </div>
        </div>

        {/* Card 2: City Hotels */}
        <div className="rounded-2xl overflow-hidden shadow-lg relative h-64 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            className="w-full h-full object-cover"
            src={city}
            alt="City Hotels"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-2xl font-bold">City Hotels</h3>
            <p>Stay right in the heart of the city with all modern amenities.</p>
          </div>
        </div>

        {/* Card 3: Beachfront Apartments */}
        <div className="rounded-2xl overflow-hidden shadow-lg relative h-64 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            className="w-full h-full object-cover"
            src={beachfront}
            alt="Beachfront Apartments"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-2xl font-bold">Beachfront Apartments</h3>
            <p>Enjoy stunning views with direct access to the beach.</p>
          </div>
        </div>

        {/* Card 4: Private Villas */}
        <div className="rounded-2xl overflow-hidden shadow-lg relative h-64 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            className="w-full h-full object-cover"
            src={villa}
            alt="Private Villas"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-2xl font-bold">Private Villas</h3>
            <p>Experience comfort and luxury in a spacious private villa.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Type;
