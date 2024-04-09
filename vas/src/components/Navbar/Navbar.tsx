import React from "react";
import { FaAngleDown, FaGlobe } from "react-icons/fa";
import logo from "../../assets/images/Logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white h-16 flex items-center justify-between px-6 w-full">
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" width={120} height={40} />
      </div>

      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <FaGlobe className="text-gray-700 mr-1" />
          <span className="text-gray-700">English</span>
          <FaAngleDown className="text-gray-700 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
