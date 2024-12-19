import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Honeymoon Package Images
import honey1 from "../../assets/honey1.png";
import honey2 from "../../assets/honey2.png";
import beach1 from "../../assets/beach1.png";
import beach2 from "../../assets/beach2.png";
import beach3 from "../../assets/beach3.png";
import beach4 from "../../assets/beach4.png";
import beach5 from "../../assets/beach5.jpeg";

const honeymoonPackages = [
  { id: 1, image: honey1, name: "Romantic Escapes", details: "Cherished moments in paradise" },
  { id: 2, image: honey2, name: "Couples' Retreat", details: "Luxurious private getaways" },
  { id: 3, image: beach1, name: "Beachfront Bliss", details: "Sun, sand, and serenity" },
  { id: 4, image: beach2, name: "Tropical Paradise", details: "Exotic island experiences" },
  { id: 5, image: beach3, name: "Secluded Havens", details: "Romantic privacy redefined" },
  { id: 6, image: beach4, name: "Sunset Dreams", details: "Unforgettable sunset views" },
  { id: 7, image: beach5, name: "Ocean Adventures", details: "Couple-friendly water sports" },
  { id: 8, image: honey1, name: "Intimate Getaways", details: "Create everlasting memories" }
];

const HoneymoonGuide = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-8 mb-8">
        Explore Our Honeymoon Packages
      </h1>

      {/* Swiper Carousel */}
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
            1024: { slidesPerView: 4 }
          }}
          className="rounded-2xl"
        >
          {honeymoonPackages.map((packageItem) => (
            <SwiperSlide key={packageItem.id}>
              <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src={packageItem.image}
                  alt={packageItem.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-10 text-white bg-black bg-opacity-50 p-2 rounded-lg">
                  <h3 className="font-bold text-lg">{packageItem.name}</h3>
                  <p className="text-sm">{packageItem.details}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HoneymoonGuide;
