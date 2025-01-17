import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer5.jpg";
import offer4 from "../../assets/offer6.jpg";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

// Offer Card Component
const OfferCard = ({ image, title, description, detail, rating, linkText }) => {
  return (
    <div className="rounded-xl shadow-2xl overflow-hidden bg-white flex flex-col md:flex-row mb-6 transform transition-all hover:scale-105 hover:shadow-xl h-[260px] border-2">
      <div className="relative">
        <img
          className="h-48 w-full object-cover md:w-48 md:h-full"
          src={image}
          alt={title}
        />
        {/* Rating Badge with Red Background and Star Icon */}
        <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full flex items-center shadow-lg">
          <FaStar className="text-yellow-300 mr-1" />  {/* Star Icon */}
          <span className="font-bold">{rating}.0</span> {/* Numeric Rating */}
        </div>
      </div>


      <div className="p-4 flex flex-col justify-between flex-1 bg-white">
        <div className="uppercase tracking-wide text-indigo-500 font-bold text-lg">
          {title}
        </div>
        <p className="mt-2 text-gray-600 text-sm flex-1">
          {description}
        </p>
        <p className="mt-2 text-gray-500 text-xs">{detail}</p>
        <Link
          to="/Contact"
          className="mt-4 text-white py-2 rounded-lg text-center bg-indigo-700 transition hover:bg-indigo-800"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};


// Offers Component with Swiper Slider
const Offers = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-5">
      <h2 className="text-3xl font-extrabold mb-16 text-center text-black">
        🌟 Exclusive Offers 🌟
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <OfferCard
            image={offer1}
            title="Domestic Flights"
            description="Make quick and affordable trips across cities with our exclusive domestic flight deals."
            detail="Save up to 30% on early bookings."
            rating={4}
            linkText="Book Now"
          />
        </SwiperSlide>

        <SwiperSlide>
          <OfferCard
            image={offer2}
            title="Hotels"
            description="Plan your perfect getaway with exclusive discounts at top international destinations."
            detail="Includes free breakfast at select hotels."
            rating={5}
            linkText="Book Now"
          />
        </SwiperSlide>

        <SwiperSlide>
          <OfferCard
            image={offer3}
            title="Weekend Packages"
            description="Explore weekend getaway deals with exclusive offers across popular destinations."
            detail="Limited-time offers for group bookings."
            rating={3}
            linkText="Book Now"
          />
        </SwiperSlide>

        <SwiperSlide>
          <OfferCard
            image={offer4}
            title="Explore Kashmir"
            description="Experience the breathtaking beauty of Kashmir with exclusive travel offers."
            detail="Stay in houseboats at discounted rates."
            rating={4}
            linkText="Book Now"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Offers;
