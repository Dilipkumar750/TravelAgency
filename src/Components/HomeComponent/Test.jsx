import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";  // Import Link for routing
import hand1 from "../../assets/hand1.jpg";
import hand2 from "../../assets/hand2.jpg";
import hand3 from "../../assets/hand3.jpg";

const testimonials = [
  {
    name: "John Doe",
    text: "This service is amazing. Highly recommend it!",
    image: hand1,
    rating: 5,
  },
  {
    name: "Jane Smith",
    text: "Excellent support and great customer service.",
    image: hand2,
    rating: 4,
  },
  {
    name: "Michael Brown",
    text: "A fantastic experience from start to finish.",
    image: hand3,
    rating: 5,
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`text-yellow-500 ${i <= rating ? "filled" : ""}`}
      />
    );
  }
  return stars;
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <h2 className="text-4xl font-bold text-center mt-10 text-[#003366]">
        Our Clients Say:
      </h2>

      <div className="relative max-w-5xl mx-auto mt-6 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center space-x-6">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="object-cover md:h-[250px] md:w-[250px] h-[150px] w-[150px] rounded-full shadow-lg"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {currentTestimonial.name}
              </h4>
              <div className="flex mt-2">{renderStars(currentTestimonial.rating)}</div>
            </div>
          </div>

          <div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mt-4">
              {currentTestimonial.text}
            </p>

            <div className="absolute w-10 h-10 bg-blue-500 rounded-full top-[-20px] right-[-20px] animate-floating"></div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/testimonials"
            className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition"
          >
            View All
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes floating {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>


      
    </>
  );
};

export default TestimonialCarousel;
