import React from 'react';
import image from "../../assets/image.png";

const Travel = () => {
  return (
    <div
      className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[600px] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 mx-auto bg-cover bg-center rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center px-4">
          Plan Your Trip with Travel Experts
        </h1>
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl max-w-lg text-center px-4">
          Our professional advisors can craft your perfect itinerary
        </h3>
      </div>
    </div>
  );
};

export default Travel;
