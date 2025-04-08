import React from "react";
import { ChevronRight } from "lucide-react";

const countryData = [
 {
 name: "India",
 flag: "https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg",
 percentage: "40%",
 barColor: "bg-[#4834D4]",
 },
 {
 name: "USA",
 flag:
 "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
 percentage: "25%",
 barColor: "bg-[#BD5302]",
 },
 {
 name: "CANADA",
 flag:
 "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
 percentage: "10%",
 barColor: "bg-[#E9C16B]",
 },
 {
 name: "UAE",
 flag:
 "https://cdn.britannica.com/82/5782-050-8A763A9A/Flag-United-Arab-Emirates.jpg",
 percentage: "7%",
 barColor: "bg-[#579560]",
 },
];

export default function Countries() {
 return (
 <div className="space-y-6">
 {countryData.map((country, index) => (
 <div
 key={index}
 className={`flex items-center w-[238px] ${
 index === countryData.length - 1 ? "border-b border-gray-600 mb-2 pb-6" : ""
 }`}
 >
 <div className="w-8 h-6 mr-4 flex-shrink-0 overflow-hidden rounded-sm">
 <img
 src={country.flag}
 alt={`${country.name} Flag`}
 className="w-full h-full object-cover"
 />
 </div>


 <div className="flex-1">
 <div className="flex justify-between mb-1">
 <span className="text-white font-medium">{country.name}</span>
 <span className="text-white font-medium">
 {country.percentage}
 </span>
 </div>
 <div className="w-full bg-gray-800 rounded-full h-2.5">
 <div
 className={`${country.barColor} h-2.5 rounded-full`}
 style={{ width: country.percentage }}
 ></div>
 </div>
 </div>
 </div>
 ))}

 <div className="flex justify-end items-center pt-4 w-[238px]">
 <button className="text-white flex items-center hover:underline">
 View all countries <ChevronRight className="ml-1 h-4 w-4" />
 </button>
 </div>
 </div>
 );
}