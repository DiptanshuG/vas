import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 gradient-custom text-white p-10 flex flex-col items-center justify-center hidden md:flex py-8 px-32 space-y-6">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-6">AI Age Well Being</h1>
          <p className="text-lg text-[15px] font-normal mb-4">
            Parachute Design is a top web design agency hand-crafting beautiful
            website design and branding since 2003. ParacParachute Design is a
            top web design agency hand-crafting beautiful website design and
            branding since 2003.hute Design is a top web design agency
            hand-crafting beautiful website design and branding since
            2003.Parachute Design is a top web design agency hand-crafting
            beautiful website design and branding since 2003.Parachute Design is
            a top web design agency hand-crafting beautiful website design and
            branding since 2003.Parachute Design is a top web design agency
            hand-crafting beautiful website design and branding since
            2003.Parachute Design is a top web design agency hand-crafting
            beautiful website design and branding since 2003.
          </p>
          <p className="text-lg text-[15px] font-normal mb-6">
            Parachute Design is a top web design agency hand-crafting beautiful
            website design and branding since 2003. ParacParachute Design is a
            top web design agency hand-crafting beautiful website design and
            branding since 2003.hute
          </p>
        </div>
        <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg self-start">
          Know More
        </button>
      </div>

      <div className="md:w-1/2 p-10 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold mb-6 gradient-text">
          Welcome to Login’s Client Portal
        </div>

        <h2 className="text-black text-2xl mb-6">Login</h2>
        <label className="text-Grey-500 font-plus-jakarta-sans font-medium text-sm mb-1 uppercase">
          Phone Number
        </label>
        <div className="relative flex items-center mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-Grey-500">
            Country Code
          </div>
          <input
            type="text"
            className="block w-full py-2 pl-14 pr-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your phone number"
          />
        </div>
        <label className="text-Grey-500 font-plus-jakarta-sans font-medium text-sm mb-1">
          Password
        </label>
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <FaLock className="h-5 w-5 text-gray-500" />
          </span>
          <input
            type="password"
            className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <a
            href="#"
            className="text-orange-600 hover:text-orange-500 text-sm font-medium"
          >
            Forgot your password?
          </a>
          <button className="text-orange-600 hover:text-orange-500 text-sm font-medium">
            Login with OTP
          </button>
        </div>
        <button className="w-full text-black text-white p-2 rounded-md hover:bg-orange-500 mb-4">
          Login
        </button>
        <div className="text-sm">
          <p className="text-black">Don't have an account?</p>
          <button className="font-medium gradient-text hover:gradient-text-500 ml-1">
            Register now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
