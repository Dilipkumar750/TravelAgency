import React, { useState } from "react";
import { FaPlane, FaHotel, FaBars, FaTimes } from "react-icons/fa";
import darjeeling from "../../assets/darjeeling.jpeg";
import goa from "../../assets/goa.jpeg";
import bali2 from "../../assets/bali2.jpeg";
import dubai from "../../assets/dubai.jpeg";
import kodaikanal from "../../assets/kodaikanal.jpeg";
import singapore from "../../assets/singapore.jpeg";
import ooty from "../../assets/ooty.jpeg";
import kashmir from "../../assets/kashmir.jpeg";

const packagesData = [
    { id: 1, title: "Darjeeling, India", category: "India", duration: "3 Nights, 4 Days", image: darjeeling, description: "Explore tea gardens.", price: "\u20B915,000", features: { flights: "No", hotels: "Yes", transfers: "Yes", activities: "Optional" } },
    { id: 2, title: "Goa, India", category: "India", duration: "3 Nights, 4 Days", image: goa, description: "Sunny beaches and nightlife.", price: "\u20B920,000", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "Beach" } },
    { id: 3, title: "Bali, Indonesia", category: "International", duration: "5 Nights, 6 Days", image: bali2, description: "Tropical paradise.", price: "$1,200", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "Island Tour" } },
    { id: 4, title: "Dubai, UAE", category: "International", duration: "4 Nights, 5 Days", image: dubai, description: "Luxury shopping.", price: "$1,500", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "Desert Safari" } },
    { id: 5, title: "Kodaikanal, India", category: "India", duration: "2 Nights, 3 Days", image: kodaikanal, description: "Hills and lakes.", price: "\u20B918,000", features: { flights: "No", hotels: "Yes", transfers: "Yes", activities: "Lake Tour" } },
    { id: 6, title: "Singapore", category: "International", duration: "4 Nights, 5 Days", image: singapore, description: "Modern city.", price: "$1,300", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "City Tour" } },
    { id: 7, title: "Ooty, India", category: "India", duration: "3 Nights, 4 Days", image: ooty, description: "Nilgiri hills.", price: "\u20B916,500", features: { flights: "No", hotels: "Yes", transfers: "Yes", activities: "Hill Tour" } },
    { id: 8, title: "Kashmir, India", category: "India", duration: "3 Nights, 4 Days", image: kashmir, description: "Snowy beauty.", price: "\u20B922,000", features: { flights: "Yes", hotels: "Yes", transfers: "Yes", activities: "Snow" } },
];

const TopDest = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [region, setRegion] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredPackages = packagesData.filter((pkg) => {
        const titleMatch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = category === "All" || pkg.category === category;
        const regionMatch =
            region === "All" ||
            (region === "Asia" && pkg.title.includes("Bali")) ||
            (region === "Europe" && pkg.title.includes("Europe")) ||
            (region === "USA" && pkg.title.includes("USA")) ||
            (region === "Australia" && pkg.title.includes("Australia"));
        return titleMatch && categoryMatch && regionMatch;
    });

    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
    const paginatedPackages = filteredPackages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* Search Bar */}
            <div className="flex justify-center mt-4">
                <input
                    type="text"
                    placeholder="Search by place name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-3/4 sm:w-1/2 md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Filters Section */}
                <div className="w-full md:w-1/4 bg-gray-100 p-4">
                    <h2 className="text-lg font-semibold mb-4">Filters</h2>
                    <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">Category</h3>
                        {['All', 'India', 'International'].map((btn) => (
                            <button
                                key={btn}
                                onClick={() => {
                                    setCategory(btn);
                                    setRegion("All");
                                    setCurrentPage(1);
                                }}
                                className={`block w-full text-left px-4 py-2 mb-2 rounded-md ${category === btn
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>

                    {category === "International" && (
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">Region</h3>
                            {['All', 'Asia', 'Europe', 'USA', 'Australia'].map((btn) => (
                                <button
                                    key={btn}
                                    onClick={() => {
                                        setRegion(btn);
                                        setCurrentPage(1);
                                    }}
                                    className={`block w-full text-left px-4 py-2 mb-2 rounded-md ${region === btn
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {btn}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Main Section */}
                <div className="w-full md:w-3/4 p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {paginatedPackages.map((card) => (
                            <div
                                key={card.id}
                                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                            >
                                <img
                                    className="w-full h-40 object-cover"
                                    src={card.image}
                                    alt={card.title}
                                />
                                <div className="p-3 bg-white">
                                    <h3 className="text-base font-medium mb-1">{card.title}</h3>
                                    <p className="text-red-500 text-sm font-semibold">{card.duration}</p>
                                    <p className="text-gray-600 text-xs mb-3">{card.description}</p>
                                    <div className="flex justify-between text-gray-600 text-xs mb-3">
                                        <div className="flex items-center">
                                            <FaPlane className="text-blue-500 mr-1" />
                                            {card.features.flights} Flights
                                        </div>
                                        <div className="flex items-center">
                                            <FaHotel className="text-blue-500 mr-1" />
                                            {card.features.hotels} Hotel
                                        </div>
                                    </div>
                                    <div className="text-blue-500 text-sm font-bold mb-3">{card.price}</div>
                                    <div className="flex justify-between space-x-2">
                                        <button className="w-1/2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition">
                                            Book Now
                                        </button>
                                        <button className="w-1/2 bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 rounded ${currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDest;
