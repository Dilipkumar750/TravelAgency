import React from "react";
import national from "../../assets/national.jpeg";
import honeymoon from "../../assets/honeymoon.jpeg";
import international from "../../assets/international.jpeg";
import educational from "../../assets/educational.jpeg";
import group from "../../assets/group.jpeg";

const popularCategories = [
  {
    id: 1,
    title: "Educational Tour",
    image: educational,
  },
  {
    id: 2,
    title: "Honeymoon Packages",
    image: honeymoon,
  },
  {
    id: 3,
    title: "International Tour Packages",
    image: international,
  },
  {
    id: 4,
    title: "National Tour Packages",
    image: national,
  },
  {
    id: 5,
    title: "Group Tour Packages",
    image: group,
  },
];

const Popular = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Tour Categories</h2>

      <div className="grid grid-cols-3 gap-6">
        {popularCategories.map((category, index) => (
          <div
            key={category.id}
            className={`rounded-2xl overflow-hidden shadow-lg relative ${
              index === 2 ? "row-span-2 col-span-1" : "h-64"
            }`}
          >
            {/* Image with Gradient Effect */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-64 object-fit"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="text-2xl font-bold">{category.title}</h3>
              <p className="mt-1 text-sm">
                Discover the best experience for {category.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
