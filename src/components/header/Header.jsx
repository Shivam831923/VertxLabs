import React, { useState } from "react";
import { Link } from "react-router-dom";


function Header({ sections = ["Overview", "Portfolio", "Experience", "Media"] }) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header className="w-full bg-black text-white border-b border-gray-600 overflow-x-auto">
      <div className="flex items-center h-[60px]">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <Link
              href={`#${section.toLowerCase()}`}
              className={`whitespace-nowrap px-4 h-full flex items-center ${
                activeSection === section ? "text-white" : "text-gray-400"
              } hover:text-white`}
              onClick={() => handleClick(section)}
            >
              {section}
            </Link>

            {index < sections.length - 1 && <div className="h-[60px] w-[1px] bg-gray-600"></div>}
          </React.Fragment>
        ))}

        <div className="ml-auto flex items-center">
          <div className="h-[60px] w-[1px] bg-gray-600"></div>
          <Link href="#more" className="px-4 h-full w-[97px] flex items-center">
            More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
