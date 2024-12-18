import React from 'react';
import flight1 from '../../assets/flight1.jpg';
import flight2 from '../../assets/flight2.jpg';
import flight3 from '../../assets/flight3.jpg';
import flight4 from '../../assets/flight4.jpg';
import flight5 from '../../assets/flight5.jpg';
import flight6 from '../../assets/flight6.jpg';

const FlightDiscoveries = () => {
  return (
    <section className="bg-white ">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-black mb-4">Discover New Adventures</h1>
        <p className="text-lg text-gray-600">Explore, discover, and find inspiration through these exciting journeys.</p>
      </div>

      <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-4 lg:grid-cols-4">
          <div className="relative">
            <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
              <img src={flight1} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Flight over Mountains" />
            </a>
            <div className="relative mt-5">
              <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">September 10th 2023</p>
              <a href="#" className="block mb-3 hover:underline">
                <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-700">
                  Scenic Flight over the Mountains
                </h2>
              </a>
              <p className="mb-4 text-gray-700">Experience the breathtaking views as you soar above the majestic mountains in a scenic flight.</p>
              <a href="#_" className="font-medium underline text-purple-600">Read More</a>
            </div>
          </div>

          <div className="relative">
            <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
              <img src={flight2} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Beach Flight" />
            </a>
            <div className="relative mt-5">
              <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">September 15th 2023</p>
              <a href="#" className="block mb-3 hover:underline">
                <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-700">
                  Flight to the Beautiful Beaches
                </h2>
              </a>
              <p className="mb-4 text-gray-700">Take a flight to the pristine beaches and enjoy the sun, sand, and sea from a unique perspective.</p>
              <a href="#_" className="font-medium underline text-purple-600">Read More</a>
            </div>
          </div>

          <div className="relative">
            <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
              <img src={flight3} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Desert Flight" />
            </a>
            <div className="relative mt-5">
              <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">October 5th 2023</p>
              <a href="#" className="block mb-3 hover:underline">
                <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-700">
                  Desert Flight Adventure
                </h2>
              </a>
              <p className="mb-4 text-gray-700">Fly over the vast deserts and experience the thrill of adventure from above.</p>
              <a href="#_" className="font-medium underline text-purple-600">Read More</a>
            </div>
          </div>

          <div className="relative">
            <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
              <img src={flight4} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="City Flight" />
            </a>
            <div className="relative mt-5">
              <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">November 12th 2023</p>
              <a href="#" className="block mb-3 hover:underline">
                <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-700">
                  City Sightseeing Flight
                </h2>
              </a>
              <p className="mb-4 text-gray-700">Discover the urban landscapes from the sky and enjoy stunning city views from above.</p>
              <a href="#_" className="font-medium underline text-purple-600">Read More</a>
            </div>
          </div>

          <div className="relative">
            <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
              <img src={flight5} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Island Flight" />
            </a>
            <div className="relative mt-5">
              <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">December 1st 2023</p>
              <a href="#" className="block mb-3 hover:underline">
                <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-700">
                  Flight to the Tropical Islands
                </h2>
              </a>
              <p className="mb-4 text-gray-700">Experience the beauty of tropical islands from above with a flight adventure.</p>
              <a href="#_" className="font-medium underline text-purple-600">Read More</a>
            </div>
          </div>

          <div className="relative">
            <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
              <img src={flight6} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Mountain Flight" />
            </a>
            <div className="relative mt-5">
              <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">December 15th 2023</p>
              <a href="#" className="block mb-3 hover:underline">
                <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-700">
                  Flight Over the Rocky Mountains
                </h2>
              </a>
              <p className="mb-4 text-gray-700">Take a flight over the Rocky Mountains and enjoy the spectacular scenery from above.</p>
              <a href="#_" className="font-medium underline text-purple-600">Read More</a>
            </div>
          </div>

          <div className="relative">
            <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
              <img src={flight1} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Flight over Mountains" />
            </a>
            <div className="relative mt-5">
              <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">September 10th 2023</p>
              <a href="#" className="block mb-3 hover:underline">
                <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-700">
                  Scenic Flight over the Mountains
                </h2>
              </a>
              <p className="mb-4 text-gray-700">Experience the breathtaking views as you soar above the majestic mountains in a scenic flight.</p>
              <a href="#_" className="font-medium underline text-purple-600">Read More</a>
            </div>
          </div>

          <div className="relative">
            <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
              <img src={flight4} className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="City Flight" />
            </a>
            <div className="relative mt-5">
              <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">November 12th 2023</p>
              <a href="#" className="block mb-3 hover:underline">
                <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-700">
                  City Sightseeing Flight
                </h2>
              </a>
              <p className="mb-4 text-gray-700">Discover the urban landscapes from the sky and enjoy stunning city views from above.</p>
              <a href="#_" className="font-medium underline text-purple-600">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightDiscoveries;
