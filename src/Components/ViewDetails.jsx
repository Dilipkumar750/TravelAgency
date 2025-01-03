import React, { useState, useEffect } from 'react';
import bali from '../assets/bali2.jpeg';
import famous from '../assets/fbali1.jpeg';
import famous1 from '../assets/fbali2.jpeg';
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
import { FaPlane } from "react-icons/fa";
import hotel from "../assets/hotel.jpg";

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
  const hotelOptions = [
    {
      hotelName: 'Hotel Grand',
      address: '123 Main Street, City Center, XYZ',
      category: '3 Star',
      prices: ['₹12,500', '₹11,750', '₹11,650', '₹11,300']
    },
    {
      hotelName: 'The Royal Inn',
      address: '456 Luxury Lane, Uptown, ABC',
      category: '4 Star',
      prices: ['₹13,450', '₹15,200', '₹14,450', '₹12,750']
    },
    {
      hotelName: 'Hotel Elite',
      address: '789 Elite Road, Downtown, DEF',
      category: '5 Star',
      prices: ['₹14,400', '₹12,700', '₹14,000', '₹14,000']
    },
  ];


  const inclusions = [
    '2 Night Accommodation in Malaysia',
    'Breakfast at Hotel',
    'Genting Day Trip with One way cable car',
    'KL Half day city tour',
    'Airport Arrival and Departure on PVT Transfers',
    'All tour transfers on SIC Basis',
  ];

  const additionalDetails = [
    { label: 'Visa', value: 'Included' },
    { label: 'Meals', value: 'Breakfast at Hotel' },
    { label: 'Trip Type', value: 'Couples/Honeymoon' },
    { label: 'Duration', value: '7D/6N' },
    { label: 'Accommodation', value: '3 Star / 4 Star / 5 Star' },
    { label: 'Cities Covered', value: 'Kuala Lumpur, Genting' },
    { label: 'Arrival/Departure', value: 'On Arrival (Free of Cost)' },
  ];

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

      {/* Hotel Details */}
      <div className="mt-10 max-w-3/4 mx-auto">
        <h2 className="text-2xl font-bold mb-6">Hotel Details & Inclusions</h2>

        {/* Hotel Categories */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold">Hotel Options</h3>

          <div className='flex gap-10 w-full'>
            <table className="table-auto w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Hotel Name</th>
                  <th className="py-2 px-4 text-left">Hotel Address</th>
                  <th className="py-2 px-4 text-left">2 PAX</th>
                  <th className="py-2 px-4 text-left">4 PAX</th>
                  <th className="py-2 px-4 text-left">6 PAX</th>
                  <th className="py-2 px-4 text-left">8 PAX</th>
                </tr>
              </thead>
              <tbody>
                {hotelOptions.map((option, index) => (
                  <tr key={index}>
                    <td className="border py-2 px-4">{option.category}</td>
                    <td className="border py-2 px-4">{option.hotelName}</td>
                    <td className="border py-2 px-4">{option.address}</td>
                    {option.prices.map((price, priceIndex) => (
                      <td key={priceIndex} className="border py-2 px-4">{price}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>


            <div className='w-1/2'>
              <img src={hotel} alt="Hotel" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <p className="text-center text-sm mt-3 font-semibold">*THE ABOVE MENTIONED IS <span className="text-red-600">PER PERSON PRICE</span>*</p>
        </div>

        <section className="w-full p-4 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">Our Famous Bali Spot</h2>
          <div className="flex justify-center gap-4">
            <img
              src={famous}
              alt="Famous Bali Spot 1"
              className="w-full md:w-1/2 h-auto rounded shadow-lg"
            />
            <img
              src={famous1}
              alt="Famous Bali Spot 2"
              className="w-full md:w-1/2 h-auto rounded shadow-lg"
            />
          </div>
        </section>
        {/* Inclusions */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold">Inclusions</h3>
          <ul className="list-disc ml-5">
            {inclusions.map((inclusion, index) => (
              <li key={index}>{inclusion}</li>
            ))}
          </ul>
        </div>

        {/* Additional Information */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold">Additional Details</h3>
          <table className="table-auto w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Detail</th>
                <th className="py-2 px-4 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {additionalDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="border py-2 px-4"><strong>{detail.label}</strong></td>
                  <td className="border py-2 px-4">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-56 object-cover" src={card.image} alt={card.title} />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-md">{card.description}</p>
                  <p className="mt-3 text-sm">
                    <strong>Price: {card.price}</strong> | <span className="text-yellow-400">Rating: {card.rating}</span> |{' '}
                    <span className="text-blue-500">{card.duration}</span>
                  </p>
                  <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ViewDetails;
