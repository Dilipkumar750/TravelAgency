import React, { useState, useEffect } from 'react';
import bali from '../assets/bali2.jpeg';
import beach1 from '../assets/beach1.png';
import beach2 from '../assets/beach2.png';
import beach3 from '../assets/beach3.png';
import beach4 from '../assets/beach4.png';
import beach5 from '../assets/beach5.jpeg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach } from "react-icons/fa";

const ViewDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Bali Beach Escape',
      price: '₹45,000',
      rating: '4.8',
      duration: '5 Days 4 Nights',
      description: 'A peaceful retreat in Bali with a luxurious beach resort, private beach access, and a tropical experience.',
      image: bali,
      features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
    },
    {
      id: 2,
      title: 'Ubud Cultural Journey',
      price: '₹60,000',
      rating: '4.9',
      duration: '6 Days 5 Nights',
      description: 'Explore the cultural heart of Bali with temple visits, traditional dance performances, and local crafts.',
      image: bali,
      features: { flights: 2, hotels: 1, transfers: 2, activities: 3 },
    },
    {
      id: 3,
      title: 'Bali Adventure Tour',
      price: '₹55,000',
      rating: '4.7',
      duration: '4 Days 3 Nights',
      description: 'A thrilling adventure with waterfall hikes, water sports, and an unforgettable experience in Bali’s nature.',
      image: bali,
      features: { flights: 2, hotels: 1, transfers: 2, activities: 5 },
    },
    {
      id: 4,
      title: 'Bali Adventure Tour',
      price: '₹55,000',
      rating: '4.7',
      duration: '4 Days 3 Nights',
      description: 'A thrilling adventure with waterfall hikes, water sports, and an unforgettable experience in Bali’s nature.',
      image: bali,
      features: { flights: 2, hotels: 1, transfers: 2, activities: 5 },
    },
  ];

  const galleryImages = [beach1, beach2, beach3, beach4, beach5]; // Gallery images

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNextImage = (direction) => {
    const currentIndex = galleryImages.indexOf(currentImage);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = galleryImages.length - 1;
    if (nextIndex >= galleryImages.length) nextIndex = 0;
    setCurrentImage(galleryImages[nextIndex]);
  };

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleNextImage('prev');
      } else if (e.key === 'ArrowRight') {
        handleNextImage('next');
      }
    };

    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    // Cleanup event listener when modal is closed
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, currentImage]);

  return (
    <div className="p-10">
      {/* Destination Banner */}
      <div className="max-w-3/4 mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full">
          <img className="w-full h-96 object-cover rounded-md" src={bali} alt="Bali Beach" />
        </div>
        <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">Explore Bali</h1>
          <p className="text-md font-medium">
            Bali, an Indonesian paradise, is known for its stunning beaches, lush landscapes, and vibrant culture. The island offers a perfect mix of serene retreats and thrilling adventures. From the golden sands of Kuta Beach to the tranquil rice terraces of Ubud, Bali's beauty is unparalleled. Visitors can explore sacred temples like Tanah Lot and Uluwatu, and experience traditional Balinese dance and art. Bali is also a haven for water sports, including surfing, diving, and snorkeling. The island's rich culinary scene blends local flavors with international influences. Bali's nightlife offers vibrant beach clubs, bars, and cultural performances. For nature lovers, Bali provides scenic hikes, including the climb to Mount Batur at sunrise. It’s also home to luxurious resorts offering world-class amenities. Whether you seek relaxation or adventure, Bali has something for everyone.
          </p>
          <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 mt-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            <FaPlane className="mr-3 text-xl" /> {/* Airplane icon */}
            <span className="font-semibold text-lg">Book Now</span>
          </button>
        </div>
      </div>

      {/* Other Bali Packages */}
      <p className="text-lg font-semibold mt-5 text-center">Explore Similar Bali Packages:</p>
      <div className="max-w-screen-xl mx-auto p-5 mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="rounded-xl"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="max-w-sm mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
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

                  {/* Price and Book Button */}
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-blue-500">{card.price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gallery Section */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 text-center flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            Gallery of Bali
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div className="bg-white rounded-md shadow-md overflow-hidden cursor-pointer" key={index} onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Bali Beach ${index + 1}`} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Viewing */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-3/4">
            <div className="relative">
              <button onClick={handleCloseModal} className="absolute top-2 right-2 text-black text-2xl font-bold">
                &times;
              </button>
              <div className="p-6">
                <img src={currentImage} alt="Current View" className="w-full h-96 object-cover rounded-md" />
              </div>
              <div className="p-6 flex justify-between items-center">
                <button onClick={() => handleNextImage('prev')} className="text-lg font-bold text-blue-500">Previous</button>
                <button onClick={() => handleNextImage('next')} className="text-lg font-bold text-blue-500">Next</button>
              </div>
              <div className="flex p-6 items-center rounded-md">
                {galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 object-cover cursor-pointer rounded-lg border-2 border-transparent hover:border-blue-500"
                    onClick={() => setCurrentImage(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
