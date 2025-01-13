import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach, FaPhoneAlt } from "react-icons/fa";

import beach1 from "../../assets/honey1.png";
import beach2 from "../../assets/honey2.png";
import beach3 from "../../assets/honey3.png";
import beach4 from "../../assets/honey4.png";
import beach5 from "../../assets/honey5.jpeg";

// Card Data
const cards = [
  {
    id: 1,
    title: "Santorini Escape",
    originalPrice: 120000, 
    discountPrice: 110000,
    rating: "4.9",
    duration: "6 Days 5 Nights",
    description: "Private sunset cruise, luxury accommodations, scenic views",
    image: beach1,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
  },
  {
    id: 2,
    title: "Parisian Romance",
    originalPrice: 130000,
    discountPrice: 120000,
    rating: "4.9",
    duration: "5 Days 4 Nights",
    description: "Romantic city tours, Eiffel Tower views, luxury dining",
    image: beach2,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 3 },
  },
  {
    id: 3,
    title: "Swiss Alps Retreat",
    originalPrice: 125000,
    discountPrice: 115000,
    rating: "4.8",
    duration: "5 Days 4 Nights",
    description: "Snow adventures, scenic mountain views, luxury stays",
    image: beach3,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 5 },
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    originalPrice: 95000,
    discountPrice: 88500,
    rating: "4.7",
    duration: "4 Days 3 Nights",
    description: "Scenic backwater cruises, traditional houseboats, cultural tours",
    image: beach5,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
  },
  {
    id: 5,
    title: "Andaman Adventure",
    originalPrice: 110000,
    discountPrice: 100000,
    rating: "4.8",
    duration: "7 Days 6 Nights",
    description: "Beach exploration, snorkeling, crystal clear waters",
    image: beach4,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 5 },
  },
];

const Honeymoon = () => {
  const swiperRef = useRef(null);

  const handleCardClick = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
      setTimeout(() => {
        swiperRef.current.autoplay.start();
      }, 5000);
    }
  };

  const handleCallClick = () => {
    window.location.href = "tel:+9566794685";
  };

  const handleRequestCallbackClick = () => {
    const message = "Customer is waiting for your response";
    window.open(`https://wa.me/9566794685?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore Popular Honeymoon Packages</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="rounded-xl"
      >
        {cards.map((card) => {
          const savings = card.originalPrice - card.discountPrice;
          const savingsPercentage = ((savings / card.originalPrice) * 100).toFixed(1);

          return (
            <SwiperSlide key={card.id}>
              <div
                className="max-w-sm mx-auto rounded-md overflow-hidden shadow-2xl hover:shadow-lg cursor-pointer"
                onClick={handleCardClick}
              >
                <div className="relative">
                  <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                    {card.rating} ★
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{card.duration}</p>
                  <p className="text-gray-600 text-xs mb-4">{card.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <FaPlane className="text-blue-500 mr-2" /> {card.features.flights} Flights
                    </div>
                    <div className="flex items-center">
                      <FaHotel className="text-blue-500 mr-2" /> {card.features.hotels} Hotels
                    </div>
                    <div className="flex items-center">
                      <FaCar className="text-blue-500 mr-2" /> {card.features.transfers} Transfers
                    </div>
                    <div className="flex items-center">
                      <FaUmbrellaBeach className="text-blue-500 mr-2" /> {card.features.activities} Activities
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-gray-500 line-through">
                      ₹{card.originalPrice.toLocaleString()}
                    </span>
                    <br />
                    <div className="flex gap-1">
                      <span className="font-bold text-lg text-blue-500">
                        ₹{card.discountPrice.toLocaleString()}
                      </span>
                      <p className="text-green-500 text-sm font-medium">
                        Save ₹{savings.toLocaleString()} ({savingsPercentage}%)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <button
                      onClick={handleCallClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                      <FaPhoneAlt className="mr-2" />
               
                    </button>
                    <button
                      onClick={handleRequestCallbackClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                      Request Call Back
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Honeymoon;
