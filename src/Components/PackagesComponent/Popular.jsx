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
            className={`rounded-2xl overflow-hidden shadow-lg ${
              index === 2 ? "row-span-2 col-span-1" : "h-64"
            }`}
          >
            {/* Image */}
            <div className="w-full h-full">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-fit"
              />
            </div>
            {/* Title Below the Image */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold">{category.title}</h3>
              <p className="text-sm text-gray-600">
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
