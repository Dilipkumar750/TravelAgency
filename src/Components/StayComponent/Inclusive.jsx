import React, { useState } from "react";
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach, FaPhoneAlt } from "react-icons/fa";

import beach1 from "../../assets/beach1.png";
import beach2 from "../../assets/beach2.png";
import beach3 from "../../assets/beach3.png";
import beach4 from "../../assets/beach4.png";
import beach5 from "../../assets/beach5.jpeg";
import beach6 from "../../assets/beach6.png";
import beach7 from "../../assets/beach7.png";
import beach8 from "../../assets/beach8.png";

const cards = [
    {
        id: 1,
        title: "Swiss Alps",
        originalPrice: "₹1,00,000",
        discountedPrice: "₹88,952",
        rating: "4.7",
        duration: "3 Days 4 Nights",
        description: "Tour combo with return airport transfer, City Tour, Curious Corner",
        image: beach1,
        features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
    },
    {
        id: 2,
        title: "Maldives Escape",
        originalPrice: "₹1,25,000",
        discountedPrice: "₹1,12,000",
        rating: "4.9",
        duration: "5 Days 6 Nights",
        description: "Luxury resort, snorkeling experience, full board meals",
        image: beach2,
        features: { flights: 2, hotels: 1, transfers: 2, activities: 3 },
    },
    {
        id: 3,
        title: "Bora Bora Retreat",
        originalPrice: "₹1,50,000",
        discountedPrice: "₹1,30,000",
        rating: "5.0",
        duration: "4 Days 5 Nights",
        description: "All-inclusive water villa, spa access, private tours",
        image: beach3,
        features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
    },
    {
        id: 4,
        title: "Santorini Bliss",
        originalPrice: "₹90,000",
        discountedPrice: "₹75,000",
        rating: "4.8",
        duration: "3 Days 4 Nights",
        description: "Private sunset cruise, wine tasting, luxury stay",
        image: beach4,
        features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
    },
    {
        id: 5,
        title: "Hawaii Adventure",
        originalPrice: "₹1,10,000",
        discountedPrice: "₹95,000",
        rating: "4.6",
        duration: "6 Days 7 Nights",
        description: "Surfing lessons, volcano tours, beach stay",
        image: beach5,
        features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
    },
    {
        id: 6,
        title: "Goa Getaway",
        originalPrice: "₹70,000",
        discountedPrice: "₹60,000",
        rating: "4.5",
        duration: "4 Days 5 Nights",
        description: "Beach stay, water sports, nightlife tours",
        image: beach6,
        features: { flights: 2, hotels: 1, transfers: 2, activities: 3 },
    },
    {
        id: 7,
        title: "Koh Samui Retreat",
        originalPrice: "₹1,20,000",
        discountedPrice: "₹1,05,000",
        rating: "4.9",
        duration: "5 Days 6 Nights",
        description: "Private tours, luxury stay, scenic beaches",
        image: beach7,
        features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
    },
    {
        id: 8,
        title: "Phuket Escape",
        originalPrice: "₹1,00,000",
        discountedPrice: "₹90,000",
        rating: "4.8",
        duration: "5 Days 6 Nights",
        description: "Island hopping, snorkeling, luxury beachfront stay",
        image: beach8,
        features: { flights: 2, hotels: 1, transfers: 2, activities: 4 },
    }
];

const Inclusive = () => {
    const [showAll, setShowAll] = useState(false);
    const handleRequestCallbackClick = () => {
        // Send WhatsApp message saying "Customer is waiting for your response"
        const message = "Customer is waiting for your response";
        window.open(`https://wa.me/9566794685?text=${encodeURIComponent(message)}`, "_blank");
    };
    const toggleShowMore = () => {
        setShowAll(!showAll);
    };

    const displayedCards = showAll ? cards : cards.slice(0, 4);

    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <h2 className="text-3xl font-bold mb-6 text-center">Popular Beach Packages</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayedCards.map((card) => (
                    <div
                        key={card.id}
                        className="rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
                    >
                        <img
                            className="w-full h-48 object-cover"
                            src={card.image}
                            alt={card.title}
                        />
                        <div className="p-4 bg-white">
                            <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-sm">{card.duration}</p>
                            <p className="text-gray-600 text-xs mb-4">{card.description}</p>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-2 mb-4 text-gray-600 text-sm">
                                <div className="flex items-center">
                                    <FaPlane className="text-blue-500 mr-2" />
                                    {card.features.flights} Flights
                                </div>
                                <div className="flex items-center">
                                    <FaHotel className="text-blue-500 mr-2" />
                                    {card.features.hotels} Hotel
                                </div>
                                <div className="flex items-center">
                                    <FaCar className="text-blue-500 mr-2" />
                                    {card.features.transfers} Transfers
                                </div>
                                <div className="flex items-center">
                                    <FaUmbrellaBeach className="text-blue-500 mr-2" />
                                    {card.features.activities} Activities
                                </div>
                            </div>

                            <div className="font-bold text-lg text-blue-500">
                                <span className="line-through text-xs text-gray-500 mr-2">{card.originalPrice}</span>
                                {card.discountedPrice}
                            </div>

                            <div className="flex gap-5 bottom-0">
                                <div className="bottom-0">
                                    <button
                                        onClick={handleRequestCallbackClick}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
                                    >
                                        Request Call Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More / Show Less Button */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={toggleShowMore}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

export default Inclusive;
