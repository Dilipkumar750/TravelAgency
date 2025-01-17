import React, { useState } from "react";
import { FaPlane, FaHotel } from "react-icons/fa";
import varanasi from "../../assets/pilgrimage/varanasi.jpg"; // Example pilgrimage destination image
import tirupati from "../../assets/pilgrimage/tirupati.jpeg";
import amritsar from "../../assets/pilgrimage/amritsar.jpeg";
import kedarnath from "../../assets/pilgrimage/kedarnath.jpeg";
import rishikesh from "../../assets/pilgrimage/rishikesh.jpeg";
import haridwar from "../../assets/pilgrimage/haridwar.jpeg";
import bodhgaya from "../../assets/pilgrimage/bodhgaya.jpeg";
import shirdi from "../../assets/pilgrimage/shirdi.jpeg";
import medinah from "../../assets/pilgrimage/medinah.jpeg";
import mecca from "../../assets/pilgrimage/mecca.jpeg";
import malaysia from "../../assets/pilgrimage/malaysia.jpeg";
import singapore from "../../assets/pilgrimage/singapore.jpeg";
import madurai from "../../assets/pilgrimage/madurai.jpeg";
import trichy from "../../assets/pilgrimage/trichy.jpeg";
import rameswaram from "../../assets/pilgrimage/rameswaram.jpeg";
import ayodhya from "../../assets/pilgrimage/ayodhya.jpeg";
import jagannath from "../../assets/pilgrimage/jagannath.jpeg";
import { useNavigate } from "react-router-dom";

const packagesData = [
    {
        id: 1,
        title: "Varanasi",
        image: varanasi,
        originalPrice: 15000,
        discountedPrice: 13000,
        duration: "3 days",
        description: "Experience spiritual bliss at the ghats of the Ganges.",
        price: "\u20B913,000",
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "3 star" },
    },
    {
        id: 2,
        title: "Tirupati",
        image: tirupati,
        duration: "2 days",
        description: "Visit the sacred Tirumala temple for divine blessings.",
        originalPrice: 18000,
        discountedPrice: 16000,
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "3 star" },
    },
    {
        id: 3,
        title: "Amritsar",
        image: amritsar,
        duration: "4 days",
        description: "Pay homage at the Golden Temple in Amritsar.",
        originalPrice: 22000,
        discountedPrice: 20000,
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "4 star" },
    },
    {
        id: 4,
        title: "Kedarnath",
        image: kedarnath,
        duration: "6 days",
        description: "Visit the sacred Kedarnath temple amidst the mountains.",
        originalPrice: 25000,
        discountedPrice: 22000,
        category: "Pilgrimage",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 5,
        title: "Rishikesh",
        image: rishikesh,
        duration: "5 days",
        description: "Explore the Yoga capital of the world on the banks of the Ganges.",
        originalPrice: 20000,
        discountedPrice: 18000,
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "3 star" },
    },
    {
        id: 6,
        title: "Haridwar",
        image: haridwar,
        duration: "3 days",
        description: "Experience the holy Ganga Aarti at Haridwar’s ghats.",
        originalPrice: 15000,
        discountedPrice: 13000,
        category: "Pilgrimage",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 7,
        title: "Bodhgaya",
        image: bodhgaya,
        duration: "5 days",
        description: "Visit the place where Lord Buddha attained enlightenment.",
        originalPrice: 22000,
        discountedPrice: 20000,
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "4 star" },
    },
    {
        id: 8,
        title: "Shirdi",
        image: shirdi,
        duration: "4 days",
        description: "Pay your respects at the shrine of Sai Baba in Shirdi.",
        originalPrice: 18000,
        discountedPrice: 16000,
        category: "Pilgrimage",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 9,
        title: "Medinah",
        image: medinah,
        duration: "7 days",
        description: "Visit the revered Masjid al-Nabawi in Medinah.",
        originalPrice: 45000,
        discountedPrice: 40000,
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "5 star" },
    },
    {
        id: 10,
        title: "Mecca",
        image: mecca,
        duration: "7 days",
        description: "Perform Hajj pilgrimage at the Masjid al-Haram in Mecca.",
        originalPrice: 50000,
        discountedPrice: 46000,
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "5 star" },
    },
    {
        id: 11,
        title: "Malaysia",
        image: malaysia,
        duration: "6 days",
        description: "Explore the spiritual sites and temples in Malaysia.",
        originalPrice: 35000,
        discountedPrice: 32000,
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "4 star" },
    },
    {
        id: 12,
        title: "Singapore",
        image: singapore,
        duration: "5 days",
        description: "Visit the cultural temples in Singapore.",
        originalPrice: 30000,
        discountedPrice: 27000,
        category: "Pilgrimage",
        features: { flights: "Included", hotels: "3 star" },
    },
    {
        id: 13,
        title: "Madurai",
        image: madurai,
        duration: "4 days",
        description: "Visit the Meenakshi Amman Temple in Madurai.",
        originalPrice: 23000,
        discountedPrice: 21000,
        category: "Pilgrimage",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 14,
        title: "Trichy",
        image: trichy,
        duration: "3 days",
        description: "Explore the Rock Fort Temple in Trichy.",
        originalPrice: 18000,
        discountedPrice: 16000,
        category: "Pilgrimage",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 15,
        title: "Rameswaram",
        image: rameswaram,
        duration: "4 days",
        description: "Visit the Ramanathaswamy Temple in Rameswaram.",
        originalPrice: 20000,
        discountedPrice: 18000,
        category: "Pilgrimage",
        features: { flights: "Not Included", hotels: "4 star" },
    },
    {
        id: 16,
        title: "Ayodhya",
        image: ayodhya,
        duration: "5 days",
        description: "Visit the birthplace of Lord Ram in Ayodhya.",
        originalPrice: 25000,
        discountedPrice: 23000,
        category: "Pilgrimage",
        features: { flights: "Not Included", hotels: "3 star" },
    },
    {
        id: 17,
        title: "Jagannath Puri",
        image: jagannath,
        duration: "4 days",
        description: "Visit the famous Jagannath Temple in Puri.",
        originalPrice: 20000,
        discountedPrice: 18000,
        category: "Pilgrimage",
        features: { flights: "Not Included", hotels: "4 star" },
    },
];


const PilgrimageList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [budget, setBudget] = useState([]);
    const [days, setDays] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const budgetOptions = [
        { label: "Below \u20B940K", range: [0, 40000] },
        { label: "\u20B940K - \u20B960K", range: [40000, 60000] },
        { label: "\u20B960K - \u20B980K", range: [60000, 80000] },
        { label: "\u20B980K - \u20B9100K", range: [80000, 100000] },
    ];

    const daysOptions = [
        { label: "2-4 days", range: [2, 4] },
        { label: "5-7 days", range: [5, 7] },
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

            <div className="flex flex-col md:flex-row h-[900px] overflow-y-auto">
                {/* Filters Section */}
                <div className="w-full md:w-1/5 bg-white p-6 rounded-lg shadow-lg sticky top-0">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Filters</h2>

                    {/* Category Filter */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-600 mb-3">Category</h3>
                        <div className="space-y-2">
                            {["All", "Pilgrimage"].map((btn) => (
                                <button
                                    key={btn}
                                    onClick={() => {
                                        setCategory(btn);
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
                                    className="w-full h-40 object-fit"
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
                                            onClick={() => navigate(`/PilgrimageViewdetails`)}
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

export default PilgrimageList;
