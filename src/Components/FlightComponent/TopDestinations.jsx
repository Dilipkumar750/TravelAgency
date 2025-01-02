import React, { useState } from "react";
import { FaPlane, FaHotel } from "react-icons/fa";
import darjeeling from "../../assets/darjeeling.jpeg";
import goa from "../../assets/goa.jpeg";
import bali2 from "../../assets/bali2.jpeg";
import dubai from "../../assets/dubai.jpeg";
import kodaikanal from "../../assets/kodaikanal.jpeg";
import singapore from "../../assets/singapore.jpeg";
import ooty from "../../assets/ooty.jpeg";
import kashmir from "../../assets/kashmir.jpeg";
import { useNavigate } from "react-router-dom";

const packagesData = [
    {
        id: 1,
        title: "Darjeeling",
        image: darjeeling,
        duration: "5 days",
        description: "Experience the beauty of the Queen of Hills",
        price: "\u20B975,000",
        category: "India",
        features: { flights: "Included", hotels: "4 star" },
    },
    {
        id: 2,
        title: "Goa",
        image: goa,
        duration: "4 days",
        description: "Beach paradise with vibrant nightlife",
        price: "\u20B960,000",
        category: "India",
        features: { flights: "Included", hotels: "3 star" },
    },
    {
        id: 3,
        title: "Bali",
        image: bali2,
        duration: "7 days",
        description: "Tropical escape with serene beaches",
        price: "\u20B91,20,000",
        category: "International",
        features: { flights: "Included", hotels: "5 star" },
    },
    {
        id: 4,
        title: "Dubai",
        image: dubai,
        duration: "6 days",
        description: "Luxurious city with iconic landmarks",
        price: "\u20B91,50,000",
        category: "International",
        features: { flights: "Included", hotels: "4 star" },
    },
    {
        id: 5,
        title: "Kodaikanal",
        image: kodaikanal,
        duration: "3 days",
        description: "Misty mountains and peaceful lakes",
        price: "\u20B945,000",
        category: "India",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 6,
        title: "Singapore",
        image: singapore,
        duration: "5 days",
        description: "A modern city with cultural delights",
        price: "\u20B91,80,000",
        category: "International",
        features: { flights: "Included", hotels: "5 star" },
    },
    {
        id: 7,
        title: "Ooty",
        image: ooty,
        duration: "4 days",
        description: "A charming hill station in Tamil Nadu",
        price: "\u20B960,000",
        category: "India",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 8,
        title: "Kashmir",
        image: kashmir,
        duration: "8 days",
        description: "Paradise on Earth with stunning landscapes",
        price: "\u20B91,10,000",
        category: "India",
        features: { flights: "Included", hotels: "4 star" },
    },
];

const TopDest = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [region, setRegion] = useState("All");
    const [budget, setBudget] = useState([]);
    const [days, setDays] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const budgetOptions = [
        { label: "Below \u20B950K", range: [0, 50000] },
        { label: "\u20B950K - \u20B975K", range: [50000, 75000] },
        { label: "\u20B975K - \u20B91L", range: [75000, 100000] },
        { label: "\u20B91L - \u20B91.5L", range: [100000, 150000] },
        { label: "\u20B91.5L - \u20B92L", range: [150000, 200000] },
        { label: "Above \u20B92L", range: [200000, Infinity] },
    ];

    const daysOptions = [
        { label: "3-5 days", range: [3, 5] },
        { label: "4-8 days", range: [4, 8] },
        { label: "9-12 days", range: [9, 12] },
        { label: "13-16 days", range: [13, 16] },
        { label: "Above 16 days", range: [17, Infinity] },
    ];

    const ratingsOptions = ["5 star", "4 star", "3 star"];

    const handleCheckboxChange = (filter, setFilter, value) => {
        setFilter((prev) => {
            if (prev.some((item) => JSON.stringify(item) === JSON.stringify(value))) {
                return prev.filter((item) => JSON.stringify(item) !== JSON.stringify(value));
            } else {
                return [...prev, value];
            }
        });
        setCurrentPage(1);
    };

    const filteredPackages = packagesData.filter((pkg) => {
        const titleMatch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = category === "All" || pkg.category === category;
        const budgetMatch =
            budget.length === 0 ||
            budget.some((range) => {
                const [min, max] = range;
                const price = parseFloat(pkg.price.replace(/[^\d]/g, ""));
                return price >= min && price <= max;
            });

        const daysMatch =
            days.length === 0 ||
            days.some((range) => {
                const [min, max] = range;
                const durationDays = parseInt(pkg.duration.split(" ")[0]);
                return durationDays >= min && durationDays <= max;
            });

        const ratingsMatch = ratings.length === 0 || ratings.includes(pkg.features.hotels);

        return titleMatch && categoryMatch && budgetMatch && daysMatch && ratingsMatch;
    });

    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
    const paginatedPackages = filteredPackages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
   
        const navigate = useNavigate();

        const handlePageChange = (page) => setCurrentPage(page);

        return (
            <div>
                {/* Search Bar */}
                <div className="flex justify-center mt-20">
                    <input
                        type="text"
                        placeholder="Search by place name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-3/4 sm:w-1/2 md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col p- md:flex-row">
                    {/* Filters Section */}
                    <div
                        className="w-full sticky md:w-1/4 bg-gray-100 p-4"
                    >
                        <h2 className="text-lg font-semibold mb-4">Filters</h2>
                        {/* Category Filter */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">Category</h3>
                            {["All", "India", "International"].map((btn) => (
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

                        {/* Budget Filter */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">Budget</h3>
                            {budgetOptions.map((option) => (
                                <div key={option.label} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        checked={budget.some((b) => JSON.stringify(b) === JSON.stringify(option.range))}
                                        onChange={() => handleCheckboxChange(budget, setBudget, option.range)}
                                        className="mr-2"
                                    />
                                    <label>{option.label}</label>
                                </div>
                            ))}
                        </div>

                        {/* No of Days Filter */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">No of Days</h3>
                            {daysOptions.map((option) => (
                                <div key={option.label} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        checked={days.some((d) => JSON.stringify(d) === JSON.stringify(option.range))}
                                        onChange={() => handleCheckboxChange(days, setDays, option.range)}
                                        className="mr-2"
                                    />
                                    <label>{option.label}</label>
                                </div>
                            ))}
                        </div>

                        {/* Hotel Ratings Filter */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">Hotel Ratings</h3>
                            {ratingsOptions.map((rating) => (
                                <div key={rating} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        checked={ratings.includes(rating)}
                                        onChange={() => handleCheckboxChange(ratings, setRatings, rating)}
                                        className="mr-2"
                                    />
                                    <label>{rating}</label>
                                </div>
                            ))}
                        </div>
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
                                            <button
                                                className="w-1/2 bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition"
                                                onClick={() => navigate(`/ViewDetails/${card.id}`)}
                                            >
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
