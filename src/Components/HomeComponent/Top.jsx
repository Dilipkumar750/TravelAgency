import React from "react";
import bali from "../../assets/bali.jpeg";
import effiel from "../../assets/effiel.jpeg";
import maldives from "../../assets/maldives.jpeg";

const Top = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 mb-10">
      {/* Header Section */}
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            Top Vacation Destinations
          </a>
        </div>
        <a href="#">See All</a>
      </div>

      {/* Vacation Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Destination 1: Bali */}
        <div className="rounded-2xl overflow-hidden shadow-lg relative">
          <img
            className="w-full h-64 object-cover"
            src={bali}
            alt="Bali Beach"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-2xl font-bold">Bali Beach Paradise</h3>
            <p>Relax on the pristine beaches of Bali, surrounded by crystal-clear waters.</p>
          </div>
        </div>

        {/* Destination 2: Eiffel Tower */}
        <div className="rounded-2xl overflow-hidden shadow-lg relative">
          <img
            className="w-full h-64 object-cover"
            src={effiel}
            alt="Eiffel Tower"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-2xl font-bold">Eiffel Tower Tour</h3>
            <p>Explore the iconic Eiffel Tower and enjoy breathtaking city views.</p>
          </div>
        </div>

        {/* Destination 3: Maldives */}
        <div className="rounded-2xl overflow-hidden shadow-lg relative">
          <img
            className="w-full h-64 object-cover"
            src={maldives}
            alt="Maldives Island"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-2xl font-bold">Maldives Tropical Escape</h3>
            <p>Experience paradise with crystal-clear waters and white sandy beaches.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Top;
