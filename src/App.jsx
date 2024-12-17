import React, { useState } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import StayHome from './Components/StayComponent/StayHome';
import Contact from './Components/ContactComponent/Contact';
import SignIn from './Pages/SignIn';

function App() {

  return (
<>
<BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StayHome" element={<StayHome />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
       </Routes>
       <Footer/>
</BrowserRouter>
</>
  )
}

export default App
