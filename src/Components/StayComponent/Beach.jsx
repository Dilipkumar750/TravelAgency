import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach, FaPhoneAlt } from "react-icons/fa";

import beach1 from "../../assets/beach1.png";
import beach2 from "../../assets/beach2.png";
import beach3 from "../../assets/beach3.png";
import beach4 from "../../assets/beach4.png";
import beach5 from "../../assets/beach5.jpeg";

// Card Data
const cards = [
  {
    id: 1,
    title: "Swiss Alps",
    originalPrice: 95000,
    discountedPrice: 88952,
    rating: "4.7",
    duration: "3 Days 4 Nights",
    description: "Tour combo with return airport transfer, City Tour",
    image: beach1,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
  },
  {
    id: 2,
    title: "Maldives Escape",
    originalPrice: 120000,
    discountedPrice: 112000,
    rating: "4.9",
    duration: "5 Days 6 Nights",
    description: "Luxury resort, snorkeling experience board meals",
    image: beach2,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 3 },
  },
  {
    id: 3,
    title: "Bora Bora Retreat",
    originalPrice: 140000,
    discountedPrice: 130000,
    rating: "5.0",
    duration: "4 Days 5 Nights",
    description: "All-inclusive water villa, spa access, private tours",
    image: beach3,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
  },
  {
    id: 4,
    title: "Santorini Bliss",
    originalPrice: 80000,
    discountedPrice: 75000,
    rating: "4.8",
    duration: "3 Days 4 Nights",
    description: "Private sunset cruise, wine tasting, luxury stay",
    image: beach4,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
  },
  {
    id: 5,
    title: "Hawaii Adventure",
    originalPrice: 100000,
    discountedPrice: 95000,
    rating: "4.6",
    duration: "6 Days 7 Nights",
    description: "Surfing lessons, volcano tours, beach stay",
    image: beach5,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
  },
];

const Beach = () => {
  const swiperRef = useRef(null);
  const handleCallClick = () => {
    // Initiate the phone call to the number
    window.location.href = "tel:+9566794685";
  };

  const handleRequestCallbackClick = () => {
    // Send WhatsApp message saying "Customer is waiting for your response"
    const message = "Customer is waiting for your response";
    window.open(`https://wa.me/9566794685?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCardClick = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
      setTimeout(() => {
        swiperRef.current.autoplay.start();
      }, 5000);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Popular Beach Packages</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
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
          const savings = card.originalPrice - card.discountedPrice;
          const savingsPercentage = ((savings / card.originalPrice) * 100).toFixed(1);

          return (
            <SwiperSlide key={card.id}>
              <div
                className="max-w-sm mx-auto rounded-md overflow-hidden shadow-2xl hover:shadow-lg cursor-pointer "
                onClick={handleCardClick}
              >
                {/* Card Image */}
                <div className="relative">
                  <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                    {card.rating} ★
                  </div>
                </div>
                {/* Card Content */}
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{card.duration}</p>
                  <p className="text-gray-600 text-xs mb-4">{card.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <FaPlane className="text-blue-500 mr-2" /> {card.features.flights} Flights
                    </div>
                    <div className="flex items-center">
                      <FaHotel className="text-blue-500 mr-2" /> {card.features.hotels} Hotel
                    </div>
                    <div className="flex items-center">
                      <FaCar className="text-blue-500 mr-2" /> {card.features.transfers} Transfers
                    </div>
                    <div className="flex items-center">
                      <FaUmbrellaBeach className="text-blue-500 mr-2" /> {card.features.activities} Activities
                    </div>
                  </div>

                  {/* Price and Savings */}
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 line-through">
                      ₹{card.originalPrice.toLocaleString()}
                    </span>
                    <br />
                    <div className="flex gap-">
                      <span className="font-bold text-lg text-blue-500">
                        ₹{card.discountedPrice.toLocaleString()}
                      </span>
                      <p className="text-green-500 text-sm font-medium">
                        Save ₹{savings.toLocaleString()} ({savingsPercentage}%)
                      </p>
                    </div>
                  </div>

                  {/* Enquiry Button */}
                  <div className="flex gap-5 bottom-0">
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

export default Beach;
