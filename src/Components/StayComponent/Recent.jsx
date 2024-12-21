import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach } from "react-icons/fa";

import beach1 from "../../assets/beach1.png";
import beach2 from "../../assets/beach2.png";

// Card Data
const cards = [
  {
    id: 1,
    title: "Swiss Alps",
    price: "₹88,952",
    rating: "4.7",
    duration: "3 Days 4 Nights",
    description: "Tour combo with return airport transfer, City Tour, Curious Corner",
    image: beach1,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
  },
  {
    id: 2,
    title: "Maldives Escape",
    price: "₹1,12,000",
    rating: "4.9",
    duration: "5 Days 6 Nights",
    description: "Luxury resort, snorkeling experience, full board meals",
    image: beach2,
    features: { flights: 2, hotels: 1, transfers: 2, activities: 3 },
  },
];

const Recent = () => {
  const swiperRef = useRef(null);

  const handleCardClick = (swiper) => {
    swiper.autoplay.stop();
    setTimeout(() => swiper.autoplay.start(), 5000);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Recently Viewed</h2>

      <div className="flex flex-col sm:flex-row max-w-screen-lg mx-auto p-5 gap-6">
        {/* Swiper Section occupying 50% of the screen */}
        <div className="w-full sm:w-1/2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
                  <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
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
                        <FaHotel className="text-blue-500 mr-2" /> {card.features.hotels} Hotels
                      </div>
                      <div className="flex items-center">
                        <FaCar className="text-blue-500 mr-2" /> {card.features.transfers} Transfers
                      </div>
                      <div className="flex items-center">
                        <FaUmbrellaBeach className="text-blue-500 mr-2" /> {card.features.activities} Activities
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Contact/Booking Page Section occupying 50% */}
        <div className="w-full sm:w-1/2 bg-gray-200 p-6 flex items-center justify-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

            {/* Contact Information */}
            <p>📞 Call us at +91 123-456-7890</p>
            <p>📧 Email: contact@beachpackages.com</p>

            {/* Booking Form */}
            <form className="mt-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded w-full p-2 mt-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded w-full p-2 mt-2"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border rounded w-full p-2 mt-2"
              />
              <button
                type="submit"
                className="bg-blue-500 mt-4 w-full rounded text-white py-2 font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
