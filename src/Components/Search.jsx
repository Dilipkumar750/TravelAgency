import React, { useState } from "react";
import bgImage from "../assets/bgimage.png";
import rightImage from "../assets/bg.png";

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
      className="h-screen w-screen bg-cover bg-center p-60"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-full w-full flex items-center justify-center">
        {/* Main content area */}
        <div className="h-auto w-1/3 max-w-4xl rounded-2xl mx-4 p-6 flex flex-col justify-center items-start">
          <h1 className="text-white text-5xl font-bold mb-4 text-center">
            Your All-In-One Travel App
          </h1>

          <p className="text-white text-lg text-center mb-6 max-w-lg">
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
            className="rounded-lg bg-gray-800 text-white py-2 px-4 w-full mt-4"
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
          <div className="mt-6 flex space-x-4 justify-center">
            <a href="https://play.google.com" target="_blank">
              <img src="https://www.gstatic.com/android/oneplay/icon.png" alt="Google Play" className="h-12 w-auto" />
            </a>
            <a href="https://www.apple.com/app-store" target="_blank">
              <img src="https://link.apple.com/app-store.png" alt="App Store" className="h-12 w-auto" />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={rightImage} alt="Travel Image" className="h-90 w-90 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TravelApp;
