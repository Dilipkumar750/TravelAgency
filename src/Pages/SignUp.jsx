import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for routing
import consignup from '../assets/travel_23-2148034068.avif'


import sign from '../assets/signup bg.gif'

const SignUp = () => {
  return (
    <div     
     className="h-full w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${consignup})` }}
     >
      <div className="flex justify-center items-center  text-3xl text-red-400 mr-6">
        SignUp
      </div>
      <form className="border-2 border-gray-400 rounded-lg w-96 ml-96 mt-6 mb-12"  
      
         style={{ backgroundImage: `url(${sign})`, width:'500px'}}>
        <div className="flex flex-col items-center mt-4">
          {/* First Name */}
          <div className="w-80 mt-4">
            <label className="text-xl mb-2 block text-gray-600">First Name*</label>
            <input
              className="border-2 border-red-400 w-full p-2 rounded-lg"
              type="text"
              placeholder="Enter First Name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="w-80 mt-4">
            <label className="text-xl mb-2 block text-gray-600">Last Name*</label>
            <input
              className="border-2 border-red-400 w-full p-2 rounded-lg"
              type="text"
              placeholder="Enter Last Name"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="w-80 mt-4">
            <label className="text-xl mb-2 block text-gray-600">Phone Number*</label>
            <div className="flex items-center">
              <input
                className="border-2 border-red-400 w-full p-2 rounded-lg"
                defaultValue="+91"
                type="text"
                placeholder="Enter Phone Number"
                required
              />
              <button className="ml-2 border-2 border-red-400 px-3 py-2 rounded-lg text-yellow-600">
                Send OTP
              </button>
            </div>
          </div>

          {/* Password */}
          <div className="w-80 mt-4">
            <label className="text-xl mb-2 block text-gray-600">Password*</label>
            <input
              className="border-2 border-red-400 w-full p-2 rounded-lg"
              type="password"
              pattern="^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$"
              placeholder="1^U, 2^N, 1^S"
              required
            />
          </div>

          {/* Re-enter Password */}
          <div className="w-80 mt-4">
            <label className="text-xl mb-2 block text-gray-600">Re-enter Password*</label>
            <input
              className="border-2 border-red-400 w-full p-2 rounded-lg"
              type="password"
              pattern="^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$"
              placeholder="1^U, 2^N, 1^S"
              required
            />
          </div>

          {/* Sign In Link */}
          <div className="flex justify-center mt-6 text-xl gap-5">
          <div className='border-2 text-red-400 rounded-lg p-2'>
            <button className=' text-xl'>
                SignUp
            </button>
            </div>
            <Link
              to="/SignIn"
              className="border-2 border-gray-400 px-4 py-2 rounded-lg text-red-400 hover:bg-gray-900"
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
