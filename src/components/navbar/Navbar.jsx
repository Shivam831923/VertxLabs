import React from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

  const  Navbar = () => {
    const location = useLocation();
    const currentPage = location.pathname.split("/")[1] || "Profile";
    return (
      <nav className="w-full h-[60px] bg-black flex items-center justify-between px-4 border-b border-gray-600">

        <div className="md:hidden flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
              <path d="M12 2L2 12h5v10h10V12h5L12 2z" />
            </svg>
          </div>
        </div>


        <div className="hidden md:flex items-center space-x-6 text-white">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
              <path d="M12 2L2 12h5v10h10V12h5L12 2z" />
            </svg>
          </div>
          <span className="font-manrope font-semibold text-[18px] leading-none tracking-[-0.04em]">Vertxlabs, Inc</span>
          <div className="h-[60px] w-[1px] bg-gray-600 ml-6"></div>
          <span className="font-manrope font-semibold text-[16px] leading-none tracking-[-0.04em]">{currentPage === 'profile'? 'Profile' : 'Analytics'}</span>
        </div>


        <div className="md:hidden">
          <button className="text-white text-xl">
            <FaBars />
          </button>
        </div>

  
        <div className="hidden md:flex items-center space-x-6 text-white">
          <div className="h-[60px] w-[1px] bg-gray-600"></div>
        <span className="font-manrope font-semibold text-[16px] leading-none tracking-normal">Activity</span>
        
          <div className="h-[60px] w-[1px] bg-gray-600"></div>
        <span className="font-manrope font-semibold text-[16px] leading-none tracking-normal">Log Out</span>
        </div>
      </nav>
    );
  }

export default Navbar;

