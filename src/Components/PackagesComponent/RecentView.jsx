import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach } from "react-icons/fa";
import Swal from "sweetalert2";
import ad from "../../assets/travel.webp"
import beach1 from "../../assets/beach1.png";
import beach2 from "../../assets/beach2.png";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="flex flex-col sm:flex-row items-center gap-10 w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg">
        <div className="w-full sm:w-1/3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
                  <img className="w-full h-60 object-cover" src={card.image} alt={card.title} />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{card.duration}</p>
                    <p className="text-gray-600 text-xs mb-3">{card.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
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

        <div className="w-full sm:w-1/4 h-[480px] flex bg-gray-200 rounded-2xl items-center justify-center">
          <div className="w-full sm:w-3/4">
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Plan Your Dream Vacation</h2>
            {['name', 'phone', 'email', 'persons'].map((field) => (
              <div className="mb-3" key={field}>
                <label className="block text-sm font-medium text-gray-700">
                  {field === 'persons' ? 'How Many Persons' : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  type={field === 'email' ? 'email' : field === 'persons' ? 'number' : 'text'}
                  className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                  placeholder={`Enter your ${field}`}
                  min={field === 'persons' ? '1' : undefined}
                />
              </div>
            ))}
            <button
              className="w-full mb-10 mx-auto bg-gradient-to-r from-blue-700 to-green-600 text-white font-semibold text-lg rounded-lg px-5 py-3 hover:from-blue-600 hover:to-green-500 shadow-lg transform hover:scale-105 transition-transform"
              onClick={() => {
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value || "Not provided";
                const phone = document.getElementById("phone").value;
                const persons = document.getElementById("persons").value;

                if (!name || !phone || !persons) {
                  Swal.fire("Error", "Please fill all the fields!", "error");
                  return;
                }

                const message = `Hi, I would like to plan a trip with the following details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Number of Persons: ${persons}`;
                window.open(`https://wa.me/9566794685?text=${encodeURIComponent(message)}`, "_blank");
              }}
            >
              Submit Enquiry
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-2 text-center text-blue-600">New Offer Package</h1>
          <img src={ad} alt="New Offer" className="w-80 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Recent;
