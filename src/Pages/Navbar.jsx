import React from 'react'

const Navbar = () => {
  return (
    <nav className="text-white flex justify-end gap-10 p-4 bg-gray-800">
      <a href="/" className="hover:text-gray-400">Home</a>
      <a href="/StayHome" className="hover:text-gray-400">Stays</a>
      <a href="#" className="hover:text-gray-400">Flights</a>
      <a href="#" className="hover:text-gray-400">Packages</a>
      <a href="/Contact" className="hover:text-gray-400">Contact</a>
      <a href="SignIn" className="hover:text-gray-400">Sign in</a>
    </nav>
  )
}

export default Navbar
