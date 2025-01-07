import React, { useState, useEffect } from "react";
import Flight from "../../../src/assets/conflight.jpg";
import locationcon from "../../../src/assets/locationcon.png";
import call from "../../../src/assets/call1.png";
import email from "../../../src/assets/email.png";
import Swal from "sweetalert2";

const Contact = () => {
  const [minDate, setMinDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Set minimum date for date inputs
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    if (endDate && new Date(e.target.value) > new Date(endDate)) {
      setEndDate(e.target.value);
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email")?.value || "Not provided";
    const phone = document.getElementById("phone").value;
    const startPlace = document.getElementById("startPlace").value;
    const destination = document.getElementById("destination").value;
    const persons = document.getElementById("persons").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // Validation
    if (!name || !phone || !startPlace || !destination || !persons || !startDate || !endDate) {
      Swal.fire("Error", "Please fill all the fields!", "error");
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      Swal.fire("Error", "End Date cannot be earlier than Start Date.", "error");
      return;
    }

    // Prepare WhatsApp message
    const message = `Hi, I would like to plan a trip with the following details:
    - Name: ${name}
    - Email: ${email}
    - Phone: ${phone}
    - Start Place: ${startPlace}
    - Destination: ${destination}
    - Number of Persons: ${persons}
    - Travel Dates: ${startDate} to ${endDate}`;

    // WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/9566794685?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="text-center text-3xl font-bold py-8">Contact</div>

      {/* Image Section */}
      <div>
        <img src={Flight} alt="Flight" className="w-full" />
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        <div className="border border-gray-300 p-10 rounded-lg shadow-md flex flex-col items-center">
          <img src={locationcon} width="30" alt="Location Icon" className="mb-7" />
          <p className="text-2xl font-bold text-blue-600 text-center mb-2">Office Location</p>
          <p className="text-center">Near Indian Bank, JJ Nagar, Kuniyamuthur, Coimbatore, Tamil Nadu 641008</p>
        </div>

        <div className="border border-gray-300 p-10 rounded-lg shadow-md flex flex-col items-center">
          <img src={call} width="30" alt="Call Icon" className="mb-7" />
          <p className="text-2xl font-bold text-blue-600 text-center mb-2">Phone Number</p>
          <p className="text-center">+91 89409 38536</p>
          <p className="text-center">+91 84388 84810</p>
        </div>

        <div className="border border-gray-300 p-10 rounded-lg shadow-md flex flex-col items-center">
          <img src={email} width="50" alt="Email Icon" className="mb-3" />
          <p className="text-2xl font-bold text-blue-600 text-center mb-2">Email</p>
          <p className="text-center">info@tentwoodtrips.com</p>
        </div>
      </div>

      {/* Enquiry Form Section */}

     



      <div className="flex flex-col md:flex-row  p-10 mt-16 ml-24">
      {/* Left Section: Google Map */}
      <div className="w-full md:w-1/2 h-[350px] mt-16  ">
      <div>
        <p className="text-3xl text-center text-blue-600 font-bold mb-16 ">GET IN TOUCH WITH US</p>
      </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.064325052601!2d76.9538638!3d10.9585137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bb9dbb4a0df%3A0x8c9ffbc2c74f096a!2sTentwood%20tours%20and%20travels!5e0!3m2!1sen!2sin!4v1735906596733!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl "
        ></iframe>
      </div>

      {/* Right Section: Enquiry Form */} 
      <div className="bg-white rounded-xl shadow-2xl p-7 w-full max-w-md mx-auto ml-">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Plan Your Dream Vacation</h2>
          <p className="text-center text-gray-500 text-sm">
            Fill in the details below to create your personalized travel plan!
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            id="phone"
            type="tel"
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Start Place</label>
          <input
            id="startPlace"
            type="text"
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
            placeholder="Enter start place"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Destination</label>
          <input
            id="destination"
            type="text"
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
            placeholder="Enter destination"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How Many Persons</label>
          <input
            id="persons"
            type="number"
            className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
            placeholder="Number of persons"
            min="1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Travel Dates</label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              id="startDate"
              type="date"
              className="w-full sm:w-1/2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              min={minDate}
              value={startDate}
              onChange={handleStartDateChange}
            />
            <input
              id="endDate"
              type="date"
              className="w-full sm:w-1/2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              min={startDate}
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:from-blue-600 hover:to-green-500 shadow-lg transform hover:scale-105 transition-transform"
            onClick={handleSubmit}
          >
            Submit Enquiry
          </button>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
};

export default Contact;