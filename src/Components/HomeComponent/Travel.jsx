import React from 'react';
import image from "../../assets/image.png";

const Travel = () => {
  return (
    <div
      className="h-[500px] w-full md:w-3/4 lg:w-2/3 mx-auto bg-cover bg-center rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold mb-2">
          Plan Your Trip with Travel Experts
        </h1>
        <h3 className="text-white text-2xl max-w-lg text-center px-4">
          Our professional advisors can craft your perfect itinerary
        </h3>
      </div>
    </div>
  );
};

export default Travel;
