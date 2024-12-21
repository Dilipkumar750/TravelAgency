import React, { useState } from "react";
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
    text: "Amazing product!",
    images: [beach1, beach2, beach3]
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Excellent service!",
    images: [beach4, beach5, honey1]
  },
  {
    id: 3,
    name: "Alice Brown",
    text: "Seamless experience!",
    images: [honey2, honey3, honey4]
  },
  {
    id: 4,
    name: "John Doe",
    text: "Amazing product!",
    images: [beach1, beach2, beach3]
  },
  {
    id: 5,
    name: "Jane Smith",
    text: "Excellent service!",
    images: [beach4, beach5, honey1]
  },
  {
    id: 6,
    name: "Alice Brown",
    text: "Seamless experience!",
    images: [honey2, honey3, honey4]
  }
];

Modal.setAppElement("#root");

const Testimonials = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const openModal = (review) => {
    setSelectedReview(review);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-wrap">
      {/* Left Side: Testimonial Grid */}
      <div className="w-full grid sm:grid-cols-3 gap-10 sm:w-1/2 lg:w-1/3 xl:w-full p-4">
        {testimonialsData.map((review) => (
          <div
            key={review.id}
            className="rounded-lg bg-white shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(review)}
          >
            <img
              src={review.images[0]}
              alt={review.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h6 className="text-gray-900 font-bold mt-2">{review.name}</h6>
              <p className="text-gray-500 mt-1">{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side: Modal Content */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 bg-white p-4 sm:p-8 overflow-y-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto"
        contentLabel="Review Details"
      >
        {selectedReview && (
          <>
            <button
              onClick={closeModal}
              className="text-red-500 font-bold mb-4"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedReview.name}</h2>
            <p className="mb-4 text-gray-600">{selectedReview.text}</p>

            <div className="flex gap-4 mt-4 overflow-x-auto">
              {selectedReview.images.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Reviewer ${index}`}
                  className="h-32 w-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Testimonials;
