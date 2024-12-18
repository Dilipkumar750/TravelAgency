import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StayHome" element={<StayHome />} />
        <Route path="/FlightHome" element={<FlightHome />} />
        <Route path="/PackagesHome" element={<PackagesHome />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/history" element={<History />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
