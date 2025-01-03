import React from "react";
import national from "../../assets/national.mp4";
import honeymoon from "../../assets/honeymooncouple.mp4";
import international from "../../assets/international.mp4";
import educational from "../../assets/educationalTour.mp4";
import group from "../../assets/grouptour.mp4";

const popularCategories = [
  {
    id: 1,
    title: "Educational Tour",
    media: educational,
    isVideo: true,
  },
  {
    id: 2,
    title: "Honeymoon Packages",
    media: honeymoon,
    isVideo: true,
  },
  {
    id: 3,
    title: "International Tour Packages",
    media: international,
    isVideo: true,
  },
  {
    id: 4,
    title: "National Tour Packages",
    media: national,
    isVideo: true,
  },
  {
    id: 5,
    title: "Group Tour Packages",
    media: group,
    isVideo: true,
  },
];

const Popular = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Tour Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Media (Image or Video) */}
            <div className="w-full h-60 bg-gray-200">
              {category.isVideo ? (
                <video
                  src={category.media}
                  autoPlay
                  loop
                  muted
                  className="w-full h-60 object-fit"
                />
              ) : (
                <img
                  src={category.media}
                  alt={category.title}
                  className="w-full h-full object-fit"
                />
              )}
            </div>
            {/* Title and Description */}
            <div className="text-center p-4">
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">
                Discover the best experience for {category.title}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
