import React from "react";
import { Link, useLocation } from "react-router-dom"; // Use useLocation from react-router-dom
import { FaTachometerAlt, FaChartBar, FaPlug, FaBell, FaHandshake } from "react-icons/fa";

const MobileNav = () => {
  const location = useLocation(); 

  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Analytics", icon: <FaChartBar />, path: "/analytics" },
    { name: "Connect", icon: <FaPlug />, path: "/connect" },
    { name: "Activity", icon: <FaBell />, path: "/activity" },
    { name: "Dealroom", icon: <FaHandshake />, path: "/dealroom" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-600 z-10">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center justify-center py-3 flex-1 ${
              location.pathname === item.path ? "text-white" : "text-gray-400"
            }`}
          >
            <span className="text-lg mb-1">{item.icon}</span>
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
