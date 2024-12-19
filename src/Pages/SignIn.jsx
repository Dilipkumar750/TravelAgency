import React, { useState } from 'react';
import { Link } from 'react-router';
import sign from '../assets/signin bg.gif'
import sigincon from '../assets/con signin.avif'


const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
    <div   className="h-screen w-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${sigincon})` }}>

    <div className="flex justify-center items-center  text-3xl text-red-400 mr-6">
        SignUp
      </div>
      <div className="flex flex-col justify-center">
        <form className="border-2 border-gray-400 p-2 rounded-lg w-96 ml-96 mt-12 mb-11"
            
                // className="h-screen w-screen bg-cover bg-center relative"
                style={{ backgroundImage: `url(${sign})` }}
              >
          {/* Email Field */}
          <div className="flex flex-col items-center mt-8">
            <label className="mb-2 text-xl text-white">Email *</label>
            <div className="border-2 border-red-400 w-80 p-2 rounded-lg">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-2"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col items-center mt-8">
            <label className="mb-2 text-xl text-white">Password *</label>
            <div className="border-2 border-red-400 w-80 relative p-2 rounded-lg">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="1^U, 2^N, 1^S"
                required
                pattern="^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$"
                className="w-full p-2"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {passwordVisible ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <div className='flex gap-x-3 justify-center'>

          <div className="flex justify-center mt-5 text-xl text-white">
            <button
              type="submit"
              className="border-2 border-red-400 px-4 py-2 mb-8 p-2 rounded-lg"
            >
              Signin
            </button>
          </div>
        <div className="flex justify-center mt-5 text-xl text-white">

          <Link
            to="/signup"
            className="border-2 border-red-400 px-4 py-2 mb-8 p-2 rounded-lg"
            >
            Signup
          </Link>
            </div>
          </div>
          
              </form>
      </div>
    </div>
    </>
  );
};

export default SignIn;
