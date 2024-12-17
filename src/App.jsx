import React, { useState } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {

  return (
<>
<BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
       <Footer/>
</BrowserRouter>
</>
  )
}

export default App
