import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer5.jpg";
import offer4 from "../../assets/offer6.jpg";

const OfferCard = ({ image, title, description, linkText, linkHref }) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden bg-white flex flex-col md:flex-row mb-6 transform transition-all hover:scale-105 hover:shadow-xl h-[220px]">
      {/* Image */}
      <img
        className="h-48 w-full object-cover md:w-48 md:h-full"
        src={image}
        alt={title}
      />
      <div className="p-4 flex flex-col justify-between flex-1 bg-gray-100">
        <div className="uppercase tracking-wide text-indigo-500 font-bold text-lg">
          {title}
        </div>
        <p className="mt-2 text-gray-600 text-sm flex-1">
          {description}
        </p>
        <a
          href={linkHref}
          className="mt-4 bg-blue-400 text-white py-2 rounded-lg text-center hover:bg-indigo-700 transition"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

const Offers = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-5">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
        🌟 Exclusive Offers 🌟
      </h2>

      {/* Swiper Component to enable swipe effect */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <OfferCard
            image={offer1}
            title="Domestic Flights"
            description="Make quick and affordable trips across cities with our exclusive domestic flight deals."
            linkText="Book Now"
            linkHref="#"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <OfferCard
            image={offer2}
            title="International Hotels"
            description="Plan your perfect getaway with exclusive discounts at top international destinations."
            linkText="Book Now"
            linkHref="#"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <OfferCard
            image={offer3}
            title="Weekend Packages"
            description="Explore weekend getaway deals with exclusive offers across popular destinations."
            linkText="Book Now"
            linkHref="#"
          />
        </SwiperSlide>

        {/* Slide 4 - New Kashmir Image */}
        <SwiperSlide>
          <OfferCard
            image={offer4}
            title="Explore Kashmir"
            description="Experience the breathtaking beauty of Kashmir with exclusive travel offers."
            linkText="Book Now"
            linkHref="#"
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Offers;
