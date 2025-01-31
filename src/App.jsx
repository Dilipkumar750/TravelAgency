import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import image from "./assets/enquiry.png";
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Home from './Components/HomeComponent/Home';
import StayHome from './Components/StayComponent/StayHome';
import Contact from './Components/ContactComponent/Contact';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import FlightHome from './Components/FlightComponent/FlightHome';
import PackagesHome from './Components/PackagesComponent/PackagesHome';
import About from './Components/AboutComponent/About';
import Testimonials from './Components/AboutComponent/Testimonials';
import Awards from './Components/AboutComponent/Awards';
import History from './Components/AboutComponent/History';
import TermsAndConditions from './Components/AboutComponent/TermsAndConditions';
import PrivacyPolicy from './Components/AboutComponent/PrivacyPolicy';
import Swal from "sweetalert2";
import HoneymoonHome from './Components/HoneymoonComponent/HoneymoonHome';
import TopHeader from './Pages/topHeader';
import ViewDetails from './Components/ViewDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HoneymoonViewdetails from './Components/HoneymoonViewdetails';
import PilgrimageHome from './Components/Pilgrimage/PilgrimageHome';
import PilgrimageViewdetails from './Components/PilgrimageViewdetails';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Change this to `true` if the user is logged in.
  const [minDate, setMinDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    if (endDate && new Date(e.target.value) > new Date(endDate)) {
      setEndDate(e.target.value); // Reset end date if it's before the new start date
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  useEffect(() => {
    AOS.init(1000);
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StayHome" element={<StayHome />} />
        <Route path="/Destinations" element={<FlightHome />} />
        <Route path="/PackagesHome" element={<PackagesHome />} />
        <Route path="/HoneymoonHome" element={<HoneymoonHome />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/history" element={<History />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ViewDetails" element={<ViewDetails />} />
        <Route path="/HoneymoonViewdetails" element={<HoneymoonViewdetails />} />
        <Route path="/PilgrimageViewdetails" element={<PilgrimageViewdetails />} />
        <Route path="/PilgrimageHome" element={<PilgrimageHome />} />
      </Routes>

      <Footer />

      {/* Sticky Bottom Section */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-1/2 bg-black/70 text-center py-1 shadow-lg rounded-lg flex items-center justify-between gap-2 z-50 p-4 sm:p-4">
        <p className="text-sm m-0 text-white">Want to personalize your own experience?</p>
        <button
          className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handleOpenModal}
        >
          Start Planning
        </button>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 sm:p-20">
          <div className="relative bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full max-w-4xl transform transition-transform scale-100">
            <div className="w-full sm:w-1/2">
              <img
                src={image}
                alt="Travel Destination"
                className="w-full h-full object-fit rounded-r-xl"
              />
            </div>
            {/* Left Side - Form */}
            <div className="w-full sm:w-1/2 p-8">
              {/* Close Icon */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={handleCloseModal}
              >
                &times;
              </button>

              {/* Header Section */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Plan Your Dream Vacation</h2>
                <p className="text-center text-gray-500 text-sm">
                  Fill in the details below to create your personalized travel plan!
                </p>
              </div>

              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  id="phone"
                  type="text"
                  className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>

              {/* Number of Persons */}
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

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:from-blue-600 hover:to-green-500 shadow-lg transform hover:scale-105 transition-transform"
                  onClick={() => {
                    const name = document.getElementById("name").value;
                    const email = document.getElementById("email")?.value || "Not provided";
                    const phone = document.getElementById("phone").value;
                    const persons = document.getElementById("persons").value;

                    if (!name || !phone || !persons) {
                      Swal.fire("Error", "Please fill all the fields!", "error");
                      return;
                    }

                    const message = `Hi, I would like to plan a trip with the following details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Number of Persons: ${persons}`;
                    const whatsappURL = `https://wa.me/9566794685?text=${encodeURIComponent(message)}`;
                    window.open(whatsappURL, "_blank");
                  }}
                >
                  Submit Enquiry
                </button>
              </div>
            </div>

            {/* Right Side - Image */}


          </div>
        </div>

      )}
    </BrowserRouter>
  );
}

export default App;
