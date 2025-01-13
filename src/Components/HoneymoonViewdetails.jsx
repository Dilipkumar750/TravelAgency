import React from 'react';
import maldivesHero from '../assets/maldivesHero.jpeg';
import resortImage from '../assets/resortImage.jpeg';
import spaImage from '../assets/spaImage.jpeg';
import snorkelingImage from '../assets/snorkelingImage.jpg';
import sunsetCruise from '../assets/sunsetCruise.jpeg';
import jetSki from '../assets/jetSki.jpeg';
import privateDinner from '../assets/privateDinner.jpeg';
import localFoodImage from '../assets/localFoodImage.jpg';
import nearbyIslandImage from '../assets/nearbyIslandImage.jpeg';
import { FaPlane, FaHotel, FaSpa, FaUmbrellaBeach, FaConciergeBell, FaWater, FaMapMarkerAlt } from 'react-icons/fa';

const HoneymoonViewdetails = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      {/* Hero Section */}
      <div className="flex gap-5">
        <div className="relative">
          <img src={maldivesHero} alt="Maldives Honeymoon" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
        </div>

        {/* Package Details */}
        <div>
          <h2 className="text-4xl font-semibold mb-6 text-center text-blue-700">Experience Luxury in Paradise Maldives</h2>
          <p className="text-gray-700 mb-10 text-start max-w-xl mx-auto text-lg">
            Escape to the breathtaking Maldives for an unforgettable honeymoon experience. Stay in luxurious private overwater villas with stunning ocean views, offering the perfect blend of privacy and comfort. Indulge in romantic candlelit dinners on the beach under the stars, while the sound of the waves adds to the enchantment. Enjoy thrilling water adventures, such as snorkeling and diving, in crystal-clear turquoise waters. With personalized services designed to cater to your every need, relax on pristine white sandy beaches or explore secluded islands and picturesque lagoons. Rejuvenate with world-class spa treatments by the ocean, making this the perfect destination for a truly unforgettable honeymoon.
          </p>
        </div>
      </div>

      <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto mt-10 text-lg">
        Escape to the breathtaking Maldives with our exclusive honeymoon package. Enjoy private overwater villas, candlelit dinners on the beach, thrilling water adventures, and personalized services. Let the turquoise waters and white sandy beaches make your honeymoon unforgettable.
      </p>

      {/* Unique Offerings */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Exclusive Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Overwater Villa */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={resortImage} alt="Luxury Resort" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Overwater Villa Stay</h3>
              <p className="text-sm text-gray-600">Private villa with stunning ocean views and direct lagoon access. Indulge in luxury with your own secluded paradise, where you can wake up to breathtaking sunrises and unwind to the calming sound of the ocean waves.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $2,500 per night</p>
            </div>
          </div>

          {/* Spa Treatment */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 md:order-first">
            <img src={spaImage} alt="Spa Treatment" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Couples Spa Retreat</h3>
              <p className="text-sm text-gray-600">Relax with rejuvenating spa therapies crafted for couples. Enjoy a peaceful atmosphere designed for total relaxation, where your stress melts away with soothing massages and aromatic treatments tailored just for you both.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $800 per session</p>
            </div>
          </div>

          {/* Snorkeling */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={snorkelingImage} alt="Snorkeling" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Snorkeling Adventure</h3>
              <p className="text-sm text-gray-600">Dive into crystal-clear waters to explore vibrant marine life. Swim alongside colorful coral reefs, exotic fish, and playful sea turtles. This underwater adventure will leave you in awe of the ocean's hidden wonders.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $200 per person</p>
            </div>
          </div>

          {/* Sunset Cruise */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 md:order-first">
            <img src={sunsetCruise} alt="Sunset Cruise" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Romantic Sunset Cruise</h3>
              <p className="text-sm text-gray-600">Sail into the sunset with a private boat just for two. Toast to love and enjoy the peaceful ambiance as the sky transforms with vibrant hues, creating the perfect backdrop for unforgettable memories together.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $500 for 2 people</p>
            </div>
          </div>

          {/* Jet Skiing */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={jetSki} alt="Jet Ski" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Thrilling Jet Ski Rides</h3>
              <p className="text-sm text-gray-600">Feel the rush with high-speed jet ski adventures. Zoom across the water at full throttle, splashing through waves as you embrace the adrenaline-fueled excitement of riding on the open sea.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $150 per ride</p>
            </div>
          </div>

          {/* Private Dinner */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 md:order-first">
            <img src={privateDinner} alt="Private Dinner" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Private Beach Dinner</h3>
              <p className="text-sm text-gray-600">Exclusive candlelit dining experience by the sea. Savor gourmet delicacies while enjoying the soothing sounds of the waves and the romantic glow of your personal dinner setting under the stars.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $350 per couple</p>
            </div>
          </div>
        </div>
      </section>

    
    

      {/* Nearby Locations and Form Section */}
      <section className="mt-16 flex gap-8">
        {/* Nearby Islands Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">Nearby Islands to Explore</h2>
          <div className="grid grid-cols-2 gap-8 flex-wrap justify-center">
            <div className="max-w-xs bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={nearbyIslandImage} alt="Nearby Island" className="w-full h-48 object-fit object-center" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-700">Banana Reef</h3>
                <p className="text-sm text-gray-600">A popular dive site with vibrant marine life and coral reefs.</p>
                <span className="flex items-center justify-start text-gray-500 mt-3">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  <a href="https://amitpachange.com" target="_blank" className="text-blue-500">Learn More</a>
                </span>
              </div>
            </div>
            <div className="max-w-xs bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={nearbyIslandImage} alt="Nearby Island" className="w-full h-48 object-cover object-center" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-700">Maafushi Island</h3>
                <p className="text-sm text-gray-600">Known for its pristine beaches and authentic local culture.</p>
                <span className="flex items-center justify-start text-gray-500 mt-3">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  <a href="https://amitpachange.com" target="_blank" className="text-blue-500">Learn More</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full sm:w-1/3 p-8 relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            onClick={() => {}}
          >
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Plan Your Dream Vacation</h2>
            <p className="text-center text-gray-500 text-sm">
              Fill in the details below to create your personalized travel plan!
            </p>
          </div>

          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              id="phone"
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">How Many Persons</label>
            <input
              id="persons"
              type="number"
              className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              placeholder="Number of persons"
              min="1"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:from-blue-600 hover:to-green-500 shadow-lg transform hover:scale-105 transition-transform"
              onClick={() => {
                const name = document.getElementById("name").value;
                const email = document.getElementById("email")?.value || "Not provided";
                const phone = document.getElementById("phone").value;
                const persons = document.getElementById("persons").value;

                if (!name || !phone || !persons) {
                  Swal.fire("Error", "Please fill all the fields!", "error");
                  return;
                }

                const message = `Hi, I would like to plan a trip with the following details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Number of Persons: ${persons}`;
                const whatsappURL = `https://wa.me/9566794685?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, "_blank");
              }}
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Similar Honeymoon Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Package 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={resortImage} alt="Package 1" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Island Escape</h3>
              <p className="text-sm text-gray-600">Enjoy an exclusive island retreat with luxury accommodations, water sports, and fine dining.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $3,000</p>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={spaImage} alt="Package 2" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Spa Retreat</h3>
              <p className="text-sm text-gray-600">Relax and rejuvenate with exclusive spa treatments, yoga sessions, and couples massages.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $2,500</p>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={snorkelingImage} alt="Package 3" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Underwater Adventure</h3>
              <p className="text-sm text-gray-600">Explore the ocean's wonders with guided snorkeling tours, scuba diving, and more.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $1,800</p>
            </div>
          </div>

          {/* Package 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={sunsetCruise} alt="Package 4" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">Sunset Bliss</h3>
              <p className="text-sm text-gray-600">Experience a private sunset cruise, candlelit dinners, and beach activities in paradise.</p>
              <p className="text-sm text-gray-700 mt-3 font-semibold">Price: $2,000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HoneymoonViewdetails;
