import React, { useState, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Modal from "react-modal";
import beach1 from "../../assets/beach1.png";
import beach2 from "../../assets/beach2.png";
import beach3 from "../../assets/beach3.png";
import beach4 from "../../assets/beach4.png";
import beach5 from "../../assets/beach5.jpeg";
import honey1 from "../../assets/honey1.png";
import honey2 from "../../assets/honey2.png";
import honey3 from "../../assets/honey3.png";
import honey4 from "../../assets/honey4.png";
import honey5 from "../../assets/honey5.jpeg";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    place: "Miami Beach, FL",
    text: "Amazing product! Highly recommended for those who seek quality.",
    rating: 5,
    images: [beach1, beach2, beach3],
    fullDescription: "John has been using the product for over a year now, and the experience has been nothing short of remarkable. With top-notch quality and exceptional customer support, John recommends this to everyone. The product's usability and durability have been consistent, and it has become an integral part of John's routine. He particularly appreciates the excellent packaging and timely delivery, making the whole purchase experience effortless."
  },
  {
    id: 3,
    name: "Alice Brown",
    place: "Honey Creek, TX",
    text: "Seamless experience! I'm loving it!",
    rating: 5,
    images: [honey2, honey3, honey4],
    fullDescription: "Alice found the whole process easy and efficient, from ordering to receiving the product. The smooth experience and amazing functionality make this product a great choice. Alice highlights how intuitive the setup process was, with clear instructions that made everything so straightforward. She also mentioned how responsive customer service was, answering all her queries promptly and ensuring a flawless experience."
  },
  {
    id: 5,
    name: "Emily White",
    place: "Santa Monica, CA",
    text: "The best service! I couldn't ask for anything better.",
    rating: 5,
    images: [beach3, honey3, honey4],
    fullDescription: "Emily is extremely satisfied with the service, stating that the team goes above and beyond. She mentions the quick response time and personalized service she received. Beyond that, Emily felt supported throughout the entire journey, from troubleshooting to product setup. She also praised the attention to detail and how the service was tailored to her needs, making her feel valued as a customer."
  },
  {
    id: 6,
    name: "Chris Blue",
    place: "Lake Tahoe, NV",
    text: "Truly outstanding! Worth every penny.",
    rating: 5,
    images: [beach4, honey1, honey2],
    fullDescription: "Chris was amazed by how much value this product offers at its price point. From design to functionality, everything exceeded his expectations. The product not only delivered exceptional performance but also boasted a sleek, modern design. Chris is particularly impressed with how versatile it is, making it suitable for various scenarios. The affordability, combined with the high-end features, makes this a must-have in his opinion."
  },
  {
    id: 8,
    name: "Andrew Black",
    place: "New York, NY",
    text: "Best in class! Top-tier experience.",
    rating: 4,
    images: [beach1, honey2, honey3],
    fullDescription: "Andrew has used many similar products, but none come close to the seamless integration and high quality this one offers. He recommends it for anyone looking for premium features. The ease of use, combined with the product’s reliability, sets it apart from others in the market. The only reason for the 4-star rating is that he would have liked more customization options, but overall, it’s an outstanding product."
  },
  {
    id: 9,
    name: "Sarah Green",
    place: "San Francisco, CA",
    text: "Impressive quality and great value for money!",
    rating: 5,
    images: [honey5, beach2, honey4],
    fullDescription: "Sarah was particularly impressed by the product’s durability and design. The attention to detail and the overall performance have made her a loyal customer. She was also happy with how easy it was to incorporate the product into her daily routine, making it an essential tool. Sarah recommends this product to anyone who values long-lasting, high-performance items. The experience from purchase to usage was smooth and satisfying."
  },
  {
    id: 10,
    name: "Michael Red",
    place: "Los Angeles, CA",
    text: "Totally worth it! I can’t stop recommending it.",
    rating: 5,
    images: [beach5, honey1, honey3],
    fullDescription: "Michael’s experience was nothing short of excellent. The customer support was timely, and the product lived up to his high expectations. He continues to recommend it to friends and family. Michael highlights the product's performance and how it has made his life easier. He also appreciated the detailed documentation and the fact that the brand kept in touch with him post-purchase to ensure everything was working smoothly."
  },
  {
    id: 11,
    name: "Sophia Gold",
    place: "Austin, TX",
    text: "A game-changer! It transformed my daily routine.",
    rating: 5,
    images: [beach4, honey5, honey2],
    fullDescription: "Sophia loves the impact this product has had on her life. From the ease of use to the consistent performance, it has become an essential part of her daily routine. She feels more organized and efficient since incorporating the product into her life. Sophia also appreciates the intuitive design that requires minimal effort to learn, making it easy to use even for someone with little technical expertise."
  },
  {
    id: 12,
    name: "Liam White",
    place: "Chicago, IL",
    text: "An excellent investment. I'm thoroughly impressed.",
    rating: 4,
    images: [beach3, honey4, honey1],
    fullDescription: "Liam has seen great results after purchasing the product. He particularly values the reliable customer service and the quality-to-price ratio. The product performs exceptionally well, with few minor areas for improvement. Liam notes that the product has a professional feel, offering features usually found in more expensive alternatives, and it has helped him streamline his workflow. He hopes future updates will bring even more features."
  }
];

Modal.setAppElement("#root");

const TestimonialsWithGallery = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (review, index) => {
    setSelectedReview(review);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + selectedReview.images.length) % selectedReview.images.length);
  };

  const showNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % selectedReview.images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        showPrevious();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="p-6">
      {/* Grid of Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonialsData.map((review) => (
          <div
            key={review.id}
            className="rounded-lg bg-white shadow-lg cursor-pointer hover:scale-105 transition-transform transform-gpu hover:shadow-xl"
            onClick={() => openModal(review, 0)}
          >
            <img
              src={review.images[0]}
              alt={review.name}
              className="w-full h-48 object-cover rounded-t-lg transition-all"
            />
            <div className="p-4">
              <h6 className="text-black-900 font-bold text-xl">{review.name}</h6>
              <p className="text-gray-500 text-sm">{review.text}</p>
              <span className="text-yellow-500 font-bold">{review.rating} ⭐</span>
              <button
                onClick={() => openModal(review, 0)}
                className="mt-2 text-blue-500 hover:underline text-sm"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Testimonial */}
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  className="fixed inset-0 bg-white p-10 sm:p-12 overflow-hidden w-full sm:w-[85%] h-[92%] mx-auto flex flex-col justify-center items-center mt-8 border-4 border-gray-300 rounded-lg shadow-lg"
  contentLabel="Review Details"
>

        {selectedReview && (
          <>
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6 w-full border-b border-gray-300 pb-4">
              <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-black-900">{selectedReview.name}</h2>
                <span className="text-yellow-500 font-bold text-xl">{selectedReview.rating} ⭐</span>
                <span className="text-gray-600 text-lg">{selectedReview.place}</span>
              </div>
              <button onClick={closeModal} className="text-red-500 font-bold hover:text-red-700">
                <FiX size={28} />
              </button>
            </div>

            {/* Modal Main Content */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full">
              {/* Left Column - Description */}
              <div className="flex-1 text-gray-700 mb-4 sm:mb-0 space-y-4">
                <p className="text-lg leading-relaxed">{selectedReview.fullDescription}</p>
              </div>

              {/* Right Column - Main Image */}
              <div className="flex-1 relative w-full h-64 sm:h-96 bg-white-100 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out">
                <img
                  src={selectedReview.images[selectedIndex]}
                  alt={`Image ${selectedIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
                >
                  <FiX size={28} />
                </button>
              </div>
            </div>

            {/* Thumbnail Images (Centered) */}
            <div className="flex justify-center gap-6 mt-6">
              {selectedReview.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden transform transition-all duration-300 ${
                    selectedIndex === index ? "ring-2 ring-blue-500" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </button>
              ))}
            </div>

         
          </>
        )}
      </Modal>
    </div>
  );
};

export default TestimonialsWithGallery;
