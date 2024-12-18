import React, { useState } from "react";
import defenceImage from "../../assets/defence.jpg";
import familyImage from "../../assets/family.jpg";
import seniorImage from "../../assets/senior.jpg";
import studentImage from "../../assets/student.jpg";
import umnrImage from "../../assets/umnr.jpg";

const TravelDeal = () => {
  const [selectedDeal, setSelectedDeal] = useState(null);

  // Updated Travel Deals Content
  const travelDeals = [
    {
      id: "defence",
      title: "Defence Personnel Offer",
      description:
        "Exclusive discounts for defence personnel and their families. Book now and enjoy savings on your next trip.",
      image: defenceImage,
    },
    {
      id: "family",
      title: "Family Special Offer",
      description:
        "Travel with your loved ones and avail special fares for family trips. Affordable and memorable journeys await!",
      image: familyImage,
    },
    {
      id: "senior-citizen",
      title: "Senior Citizen Deal",
      description:
        "Seniors enjoy a 6% discount on base fares. Make your travels comfortable and cost-effective.",
      image: seniorImage,
    },
    {
      id: "students",
      title: "Student Saver Deal",
      description:
        "Students get tailored fares for easy and budget-friendly travel. Study, learn, and explore effortlessly!",
      image: studentImage,
    },
    {
      id: "umnr",
      title: "Unaccompanied Minor Service",
      description:
        "Book safe and reliable unaccompanied minor services for children aged 5-12. Travel with peace of mind.",
      image: umnrImage,
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-white to-gray-100 p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800">Exclusive Travel Deals</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Discover amazing travel deals and special offers designed just for you!
        </p>
      </div>

      {/* Travel Deals Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {travelDeals.map((deal) => (
          <div
            key={deal.id}
            className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedDeal(deal)}
            style={{ maxWidth: "250px", margin: "auto" }} // Smaller card size
          >
            {/* Background Image */}
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-40 object-cover filter brightness-75"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <h2 className="text-2xl font-bold text-white">{deal.title}</h2>
              <p className="text-gray-200 mt-2">{deal.description.slice(0, 60)}...</p>
            </div>

            {/* Apply Button */}
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Selected Deal Details */}
      {selectedDeal && (
        <div className="mt-5 w-1/2 mx-auto bg-white p-4 rounded-xl shadow-lg ">
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src={selectedDeal.image}
              alt={selectedDeal.title}
              className="w-60 h-40 object-cover rounded-lg shadow-md"
            />
            <div className="lg:ml-8 mt-4 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedDeal.title}
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {selectedDeal.description}
              </p>
              <button className="mt-6 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelDeal;
