import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import consignup from '../assets/travel_23-2148034068.avif';
// import sign from '../assets/signup bg.gif';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!rePasswordVisible);
  };

  return (
    <div
      className="h-full w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${consignup})` }}
    >
      <div className="flex justify-center items-center text-3xl font-semibold text-red-400 mr-6 ">
        <p className='hover:bg-yellow-200 mt-4 rounded-lg'>SignUp</p>
      </div>
      <form
        className="border-2 border-gray-400 rounded-lg w-96 ml-96 mt-6 mb"
        style={{ backgroundImage: `url(${sign})`, width: '500px' }}
      >
        <div className="flex flex-col items-center mt-4">
          {/* First Name */}
          <div className="w-80 mt-4">
            <label className="text-xl mb-2 block text-white">First Name*</label>
            <input
              className="border-2 border-red-400 w-full p-2 rounded-lg"
              type="text"
              placeholder="Enter First Name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="w-80 mt-4">
            <label className="text-xl mb-2 block text-white">Last Name*</label>
            <input
              className="border-2 border-red-400 w-full p-2 rounded-lg"
              type="text"
              placeholder="Enter Last Name"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="w-80 mt-4">
            <label className="text-xl mb-2 block text-white">Phone Number*</label>
            <div className="flex items-center">
              <input
                className="border-2 border-red-400 w-full p-2 rounded-lg"
                defaultValue="+91"
                type="text"
                placeholder="Enter Phone Number"
                required
              />
              <button className="ml-2 border-2 border-red-400 px-3 py-2 rounded-lg text-white hover:bg-yellow-400" >
                Send OTP

              </button>
            </div>
          </div>

          {/* Password */}
          <div className="w-80 mt-4 relative">
            <label className="text-xl mb-2 block text-white">Password*</label>
            <input
              className="border-2 border-red-400 w-full p-3  rounded-lg text-sm"
              type={passwordVisible ? 'text' : 'password'}
              pattern="^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$"
              placeholder="1^U, 2^N, 1^S"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 mt-4 text-gray-600"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Re-enter Password */}
          <div className="w-80 mt-4 relative">
            <label className="text-xl mb-2 block text-white">Re-enter Password*</label>
            <input
              className="border-2 border-red-400 w-full p-3 rounded-lg text-sm"
              type={rePasswordVisible ? 'text' : 'password'}
              pattern="^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$"
              placeholder="1^U, 2^N, 1^S"
              required
            />
            <button
              type="button"
              onClick={toggleRePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 mt-4 text-gray-600"
            >
              {rePasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Sign In Link */}
          <div className="flex justify-center mt-6 text-xl gap-5">
            <div className="border-2 text-red-400 rounded-lg p-2 hover:bg-yellow-200">
              <button className="text-xl">SignUp</button>
            </div>
            <Link
              to="/SignIn"
              className="border-2 border-gray-400 px-4 py-2 rounded-lg text-red-400 hover:bg-yellow-200"
            >
              SignIn
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
