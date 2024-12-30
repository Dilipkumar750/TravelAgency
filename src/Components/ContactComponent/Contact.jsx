import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import Swiper's autoplay style
import { Navigation, Autoplay } from "swiper/modules"; // Import the Autoplay module
import tajmahal from "../../assets/tajmahal1.jpg";
import china from "../../assets/china2.jpg";
import peru from "../../assets/machupichu.jpg";
import petra from "../../assets/petra7.jpg";
import rome from "../../assets/rome3.jpg";
import christ from "../../assets/christ5.jpeg";
import chichen from "../../assets/chichen6.jpg";

const Contact = () => {
  const [startDate, setStartDate] = useState("");

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const today = new Date().toISOString().split("T")[0];
  const images = [tajmahal, china, peru, petra, rome, christ, chichen];

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Contact Section */}
      <div className="container px-6 py-10 lg:py-20 flex lg:flex-row flex-col">
        {/* Left side - 1/4 width - Swiper */}
        <div className="lg:w-1/4 w-full mb-10 lg:mb-0">
          <Swiper
            direction="vertical"
            slidesPerView={2}  // Adjust number of visible slides
            spaceBetween={20}
            navigation={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="lg:w-[90%] h-screen w-full "
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right side - 3/4 width - Contact Form */}
        <div className="lg:w-3/4 w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-indigo-600 font-bold text-3xl mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8">
              Feel free to reach out for any inquiries or travel plans. Our team is ready to assist you.
            </p>

            <a href="tel:470-601-1911" className="flex items-center mb-6">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="..."
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-gray-700 text-base ml-4">470-601-1911</span>
            </a>

            <a href="mailto:Pagedone1234@gmail.com" className="flex items-center mb-8">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="..."
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-gray-700 text-base ml-4">Pagedone1234@gmail.com</span>
            </a>

            <h2 className="text-indigo-600 font-semibold text-2xl mb-6">Send Us A Message</h2>
            <form>
              <input
                type="text"
                className="w-full mb-4 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Name *"
                required
              />
              <input
                type="email"
                className="w-full mb-4 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Email *"
                required
              />
              <input
                type="tel"
                className="w-full mb-4 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Phone *"
                required
              />
              <input
                type="text"
                className="w-full mb-4 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Travel Start Place *"
                required
              />
              <input
                type="text"
                className="w-full mb-4 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Destination *"
                required
              />
              <div className="flex space-x-4 mb-4">
                <input
                  type="date"
                  className="w-1/2 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Travel Start Date *"
                  required
                  value={startDate}
                  onChange={handleDateChange}
                  min={today}

                />
                <input
                  type="date"
                  className="w-1/2 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Travel End Date *"
                  required
                />
              </div>
              <input
                type="number"
                className="w-full mb-4 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Number of People *"
                required
              />
              <textarea
                className="w-full mb-4 p-4 text-gray-700 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Message"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full p-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Send
              </button>
            </form>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;
