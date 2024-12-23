import React, { useState } from "react";
import bgImage from "../../assets/bgimage.png";
import rightImage from "../../assets/bg.png";

const TravelApp = () => {
  const [inputType, setInputType] = useState("mobile");
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputType === "mobile") {
      alert(`Mobile Number: ${inputValue}`);
    } else if (inputType === "email") {
      alert(`Email: ${inputValue}`);
    }
  };

  return (
    <div
    className="h-screen w-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
  
      <div className="h-full w-full flex items-center justify-center">
        {/* Main content area */}
        <div className="h-auto w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-4xl bg-black bg-opacity-50 rounded-2xl mx-4 p-6 flex flex-col justify-center items-start">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
            Your All-In-One Travel App
          </h1>

          <p className="text-white text-sm sm:text-lg text-center mb-6 max-w-lg">
            Book flights, hotels, trains, and rental cars anywhere in the world in just seconds.
            Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins.
          </p>

          {/* Buttons to toggle input type */}
          <div className="flex space-x-4 mb-6 justify-center">
            <button
              onClick={() => setInputType("mobile")}
              className={`px-6 py-2 rounded-lg ${inputType === "mobile" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Mobile
            </button>
            <button
              onClick={() => setInputType("email")}
              className={`px-6 py-2 rounded-lg ${inputType === "email" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Email
            </button>
          </div>

          {/* Input Field */}
          <input
            type={inputType === "mobile" ? "tel" : "email"}
            placeholder={inputType === "mobile" ? "Enter Mobile Number" : "Enter Email Address"}
            className="rounded-lg bg-white text-gray-600 py-2 px-4 w-full mt-4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="mt-4 bg-indigo-600 text-white rounded-lg py-2 w-full"
          >
            Search
          </button>

          {/* App Download Buttons */}
         
        </div>

        {/* Right Side Image */}
        {/* <div className="hidden md:block md:w-1/2 lg:w-1/3 xl:w-1/4">
          <img src={rightImage} alt="Travel Image" className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 object-cover mx-auto" />
        </div> */}
      </div>
    </div>
  );
};

export default TravelApp;
