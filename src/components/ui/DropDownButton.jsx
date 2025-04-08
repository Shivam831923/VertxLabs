import React from "react";
import { ChevronDown, ChevronRight, Plus } from "lucide-react"

const DropDownButton = ({showVisitorDropdown, setShowVisitorDropdown }) => {
 return (
 <div className="relative ">
 <button
 className="flex items-center justify-between gap-2 px-4 py-2 bg-[#000000] w-[140px] h-[24px] rounded-[20px] border border-[1px]"
 onClick={() => setShowVisitorDropdown(!showVisitorDropdown)}
 >
 <span className="font-manrope font-semibold text-[12px] leading-[100%] tracking-[-0.04em]">Visitors</span>
 <ChevronDown className="w-4 h-4" />
 </button>
 {showVisitorDropdown && (
 <div className="absolute z-10 mt-1 w-[120px] bg-black border border-gray-700 rounded-md shadow-lg">
 <div className="py-1">
 <button
 className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900 "
 onClick={() => setShowVisitorDropdown(false)}
 >
 Visitors
 </button>
 <button
 className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900"
 onClick={() => setShowVisitorDropdown(false)}
 >
 Connections
 </button>
 <button
 className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900"
 onClick={() => setShowVisitorDropdown(false)}
 >
 Interactions
 </button>
 <button
 className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900"
 onClick={() => setShowVisitorDropdown(false)}
 >
 Impressions
 </button>
 </div>
 </div>
 )}
 </div> 

 );
};

export default DropDownButton;









