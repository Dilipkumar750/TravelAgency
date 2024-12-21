import React, { useState } from "react";
import { FaPlane, FaHotel } from "react-icons/fa";
import darjeeling from "../../assets/darjeeling.jpeg";
import goa from "../../assets/goa.jpeg";
import bali2 from "../../assets/bali2.jpeg";
import dubai from "../../assets/dubai.jpeg";
import kodaikanal from "../../assets/kodaikanal.jpeg";
import singapore from "../../assets/singapore.jpeg";
import ooty from "../../assets/ooty.jpeg";
import kashmir from "../../assets/kashmir.jpeg";

// Packages Data
const packagesData = [
  { id: 1, title: "Darjeeling, India", category: "India", duration: "3 Nights, 4 Days", image: darjeeling, description: "Explore tea gardens.", price: "₹15,000", features: { flights: "No", hotels: "Yes", transfers: "Yes", activities: "Optional" } },
  { id: 2, title: "Goa, India", category: "India", duration: "3 Nights, 4 Days", image: goa, description: "Sunny beaches and nightlife.", price: "₹20,000", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "Beach" } },
  { id: 3, title: "Bali, Indonesia", category: "International", duration: "5 Nights, 6 Days", image: bali2, description: "Tropical paradise.", price: "$1,200", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "Island Tour" } },
  { id: 4, title: "Dubai, UAE", category: "International", duration: "4 Nights, 5 Days", image: dubai, description: "Luxury shopping.", price: "$1,500", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "Desert Safari" } },
  { id: 5, title: "Kodaikanal, India", category: "India", duration: "2 Nights, 3 Days", image: kodaikanal, description: "Hills and lakes.", price: "₹18,000", features: { flights: "No", hotels: "Yes", transfers: "Yes", activities: "Lake Tour" } },
  { id: 6, title: "Singapore", category: "International", duration: "4 Nights, 5 Days", image: singapore, description: "Modern city.", price: "$1,300", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "City Tour" } },
  { id: 7, title: "Ooty, India", category: "India", duration: "3 Nights, 4 Days", image: ooty, description: "Nilgiri hills.", price: "₹16,500", features: { flights: "No", hotels: "Yes", transfers: "Yes", activities: "Hill Tour" } },
  { id: 8, title: "Kashmir, India", category: "India", duration: "3 Nights, 4 Days", image: kashmir, description: "Snowy beauty.", price: "₹22,000", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "Snow" } },
];

const PackageList = () => {
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Filter cards based on category
  const filteredPackages = packagesData.filter((pkg) =>
    category === "All" ? true : pkg.category === category
  );

  const cardsToShow = showAll ? filteredPackages : filteredPackages.slice(0, 4);

  const handleCategoryClick = (btn) => {
    setCategory(btn);
    setShowAll(false); // Reset to default when switching category
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-6 space-x-2 sm:space-x-4">
        {["All", "India", "International"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleCategoryClick(btn)}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm font-semibold transition ${
              category === btn
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cardsToShow.map((card) => (
          <div
            key={card.id}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <img
              className="w-full h-40 sm:h-48 object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="p-3 bg-white">
              <h3 className="text-sm sm:text-base font-medium mb-1">{card.title}</h3>
              <p className="text-red-500 text-xs sm:text-sm font-semibold">
                {card.duration}
              </p>
              <p className="text-gray-600 text-xs mb-3">{card.description}</p>

              <div className="flex justify-between text-gray-600 text-xs sm:text-sm mb-3">
                <div className="flex items-center">
                  <FaPlane className="text-blue-500 mr-1" />
                  {card.features.flights} Flights
                </div>
                <div className="flex items-center">
                  <FaHotel className="text-blue-500 mr-1" />
                  {card.features.hotels} Hotel
                </div>
              </div>

              <div className="text-blue-500 text-xs sm:text-sm font-bold mb-3">
                {card.price}
              </div>

              {/* Buttons */}
              <div className="flex justify-between space-x-2">
                <button className="w-1/2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition">
                  Book Now
                </button>
                <button className="w-1/2 bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Show Less Buttons */}
      {filteredPackages.length > 4 && (
        <div className="flex justify-center mt-6">
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Show More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PackageList;
