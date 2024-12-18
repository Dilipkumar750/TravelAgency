import React, { useState } from "react";
import image1 from "../../assets/beach.jpg";
import image2 from "../../assets/mountain.jpg";
import image3 from "../../assets/city.jpg";
import image4 from "../../assets/cruise.jpg";

const services = [
  {
    id: 1,
    title: "Exotic Beach Getaways",
    description:
      "Relax on pristine beaches with turquoise waters and luxurious resorts.",
    img: image1,
  },
  {
    id: 2,
    title: "Mountain Adventures",
    description:
      "Experience thrilling hikes, beautiful peaks, and the serenity of nature.",
    img: image2,
  },
  {
    id: 3,
    title: "City Tours & Culture",
    description:
      "Explore bustling cities, historical landmarks, and local cuisines.",
    img: image3,
  },
  {
    id: 4,
    title: "Luxury Ocean Cruises",
    description:
      "Sail the seas on world-class cruises with unmatched amenities.",
    img: image4,
  },
  {
    id: 5,
    title: "Safari Adventures",
    description: "Witness wildlife up close in breathtaking safari parks.",
    img: image1,
  },
  {
    id: 6,
    title: "Snowy Escapes",
    description: "Enjoy winter sports and cozy cabins in snowy landscapes.",
    img: image2,
  },
  {
    id: 7,
    title: "Cultural Heritage Tours",
    description: "Discover the art, culture, and history of unique regions.",
    img: image3,
  },
  {
    id: 8,
    title: "Island Hopping",
    description: "Visit multiple islands, each with its own charm and beauty.",
    img: image4,
  },
];

const TopDestinations = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle showing all cards
  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-2">
          Explore Our Top Travel Services
        </h3>
        <p className="text-gray-500">
          Discover handpicked destinations and unforgettable adventures around
          the globe.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {visibleServices.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg flex flex-col items-center p-6"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700 text-center">
              {service.title}
            </h4>
            <p className="text-gray-500 text-sm text-center mt-2">
              {service.description}
            </p>
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline mt-2"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition"
        >
          {showAll ? "Show Less" : "View All Services"}
        </button>
      </div>
    </section>
  );
};

export default TopDestinations;
