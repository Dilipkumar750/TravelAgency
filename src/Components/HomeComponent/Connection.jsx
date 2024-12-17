import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Updated Images
import india from "../../assets/india.jpeg";
import travelTalk from "../../assets/traveltalk.jpeg";
import beach from "../../assets/beach.jpeg";
import mountains from "../../assets/mountain.jpeg";
import cultural from "../../assets/cultural.jpg";
import nomadic from "../../assets/nomadic.jpg";
import sunshine from "../../assets/sunshine.jpg";
import adventure from "../../assets/adventure.jpg";

const contentItems = [
  { id: 1, image: india, name: "Heritage India", travelers: "200,453 travelers" },
  { id: 2, image: travelTalk, name: "Wanderlust Talks", travelers: "175,823 travelers" },
  { id: 3, image: beach, name: "Paradise Beaches", travelers: "162,340 travelers" },
  { id: 4, image: mountains, name: "Majestic Peaks", travelers: "189,760 travelers" },
  { id: 5, image: cultural, name: "Cultural Expeditions", travelers: "148,984 travelers" },
  { id: 6, image: nomadic, name: "Nomadic Stories", travelers: "172,056 travelers" },
  { id: 7, image: sunshine, name: "Sunshine Getaways", travelers: "158,230 travelers" },
  { id: 8, image: adventure, name: "Adventure Trails", travelers: "195,120 travelers" }
];

const Connection = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-8 mb-8">
        Connect with Travelers Worldwide
      </h1>

      {/* Swiper Carousel */}
      <div className="max-w-screen-xl mx-auto p-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay settings
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          className="rounded-2xl"
        >
          {contentItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-10 text-white bg-black bg-opacity-50 p-2 rounded-lg">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm">{item.travelers}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Connection;