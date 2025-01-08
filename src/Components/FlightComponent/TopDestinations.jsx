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
        originalPrice: 95000,
        discountedPrice: 88952,
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
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "India",
        features: { flights: "Included", hotels: "3 star" },
    },
    {
        id: 3,
        title: "Bali",
        image: bali2,
        duration: "7 days",
        description: "Tropical escape with serene beaches",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "International",
        features: { flights: "Included", hotels: "5 star" },
    },
    {
        id: 4,
        title: "Dubai",
        image: dubai,
        duration: "6 days",
        description: "Luxurious city with iconic landmarks",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "International",
        features: { flights: "Included", hotels: "4 star" },
    },
    {
        id: 5,
        title: "Kodaikanal",
        image: kodaikanal,
        duration: "3 days",
        description: "Misty mountains and peaceful lakes",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "India",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 6,
        title: "Singapore",
        image: singapore,
        duration: "5 days",
        description: "A modern city with cultural delights",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "International",
        features: { flights: "Included", hotels: "5 star" },
    },
    {
        id: 7,
        title: "Ooty",
        image: ooty,
        duration: "4 days",
        description: "A charming hill station in Tamil Nadu",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "India",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 8,
        title: "Kashmir",
        image: kashmir,
        duration: "8 days",
        description: "Paradise on Earth with stunning landscapes",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "India",
        features: { flights: "Included", hotels: "4 star" },
    },
    {
        id: 9,
        title: "Kodaikanal",
        image: kodaikanal,
        duration: "3 days",
        description: "Misty mountains and peaceful lakes",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "India",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 10,
        title: "Singapore",
        image: singapore,
        duration: "5 days",
        description: "A modern city with cultural delights",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "International",
        features: { flights: "Included", hotels: "5 star" },
    },
    {
        id: 11,
        title: "Ooty",
        image: ooty,
        duration: "4 days",
        description: "A charming hill station in Tamil Nadu",
        originalPrice: 95000,
        discountedPrice: 88952,
        category: "India",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 12,
        title: "Kashmir",
        image: kashmir,
        duration: "8 days",
        description: "Paradise on Earth with stunning landscapes",
        originalPrice: 95000,
        discountedPrice: 88952,
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
                return pkg.discountedPrice >= min && pkg.discountedPrice <= max;
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

            <div className="flex flex-col md:flex-row h-screen overflow-y-auto">
                {/* Filters Section */}
                <div className="w-full md:w-1/5 bg-white p-6 rounded-lg shadow-lg sticky top-0">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Filters</h2>

                    {/* Category Filter */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-600 mb-3">Category</h3>
                        <div className="space-y-2">
                            {["All", "India", "International"].map((btn) => (
                                <button
                                    key={btn}
                                    onClick={() => {
                                        setCategory(btn);
                                        setRegion("All");
                                        setCurrentPage(1);
                                    }}
                                    className={`block w-full text-left px-5 py-3 rounded-md border-2 ${category === btn
                                        ? "border-blue-500 bg-blue-100 text-blue-700"
                                        : "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-200"
                                        } transition-all duration-200`}
                                >
                                    {btn}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Budget Filter */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-600 mb-3">Budget</h3>
                        <div className="space-y-2">
                            {budgetOptions.map((option) => (
                                <div key={option.label} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        checked={budget.some((b) => JSON.stringify(b) === JSON.stringify(option.range))}
                                        onChange={() => handleCheckboxChange(budget, setBudget, option.range)}
                                        className="mr-3"
                                    />
                                    <label className="text-sm text-gray-700">{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* No of Days Filter */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-600 mb-3">No of Days</h3>
                        <div className="space-y-2">
                            {daysOptions.map((option) => (
                                <div key={option.label} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        checked={days.some((d) => JSON.stringify(d) === JSON.stringify(option.range))}
                                        onChange={() => handleCheckboxChange(days, setDays, option.range)}
                                        className="mr-3"
                                    />
                                    <label className="text-sm text-gray-700">{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hotel Ratings Filter */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-600 mb-3">Hotel Ratings</h3>
                        <div className="space-y-2">
                            {ratingsOptions.map((rating) => (
                                <div key={rating} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        checked={ratings.includes(rating)}
                                        onChange={() => handleCheckboxChange(ratings, setRatings, rating)}
                                        className="mr-3"
                                    />
                                    <label className="text-sm text-gray-700">{rating}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



                {/* Main Section */}
                <div className="w-full md:w-3/4 p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {paginatedPackages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                            >
                                <img
                                    className="w-full h-40 object-cover"
                                    src={pkg.image}
                                    alt={pkg.title}
                                />
                                <div className="p-3 bg-white">
                                    <h3 className="text-base font-medium mb-1">{pkg.title}</h3>
                                    <p className="text-blue-500 text-sm font-semibold">{pkg.duration}</p>
                                    <p className="text-gray-600 text-xs mb-3">{pkg.description}</p>
                                    <div className="flex justify-between text-gray-600 text-xs mb-3">
                                        <div className="flex items-center">
                                            <FaPlane className="text-blue-500 mr-1" />
                                            {pkg.features.flights} Flights
                                        </div>
                                        <div className="flex items-center">
                                            <FaHotel className="text-blue-500 mr-1" />
                                            {pkg.features.hotels} Hotel
                                        </div>
                                    </div>
                                    <p>
                                        <span className="text-blue-500 line-through">₹{pkg.originalPrice}</span>{" "}
                                        <span className="font-semibold">₹{pkg.discountedPrice}</span>
                                    </p>
                                    <div className="flex justify-between space-x-2">
                                        <button className="w-1/2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition">
                                            Book Now
                                        </button>
                                        <button
                                            className="w-1/2 bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition"
                                            onClick={() => navigate(`/ViewDetails/${pkg.id}`)}
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
