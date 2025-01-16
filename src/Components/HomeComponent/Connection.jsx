import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bg from "../../assets/flightbg.png";
import india from "../../assets/india.jpeg";
import travelTalk from "../../assets/traveltalk.jpeg";
import beach from "../../assets/beach.jpeg";
import mountains from "../../assets/mountain.jpeg";
import cultural from "../../assets/cultural.jpg";
import nomadic from "../../assets/nomadic.jpg";
import sunshine from "../../assets/sunshine.jpg";
import adventure from "../../assets/adventure.jpg";
import { Link } from "react-router-dom";

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
    <div className="py-16">
      <h1 className="text-center text-4xl font-bold text-black mb-8 drop-shadow-lg">
        Connect with Honeymoon Packages Worldwide
      </h1>

      <div className="max-w-screen-xl mx-auto p-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="rounded-2xl"
        >
          {contentItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to="/honeymoonHome">
                <div className="rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-10 text-white bg-black bg-opacity-50 p-2 rounded-lg">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm">{item.travelers}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Connection;
