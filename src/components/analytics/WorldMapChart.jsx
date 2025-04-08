import React, {useState, useEffect} from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export function WorldMapChart() {
 const [selectedType, setSelectedType] = useState("Visitors");
 const [scale, setScale] = useState(250);
 const markers = [
 { name: "India", coordinates: [78.9629, 20.5937], color: "#3b82f6" },
 { name: "USA", coordinates: [-95.7129, 37.0902], color: "#f97316" },
 { name: "Canada", coordinates: [-106.3468, 56.1304], color: "#eab308" },
 { name: "UAE", coordinates: [53.8478, 23.4241], color: "#22c55e" },
 { name: "Europe", coordinates: [15.2551, 54.526], color: "#f97316" },
 { name: "East Asia", coordinates: [114.1095, 22.3964], color: "#579560" },
 ]


 useEffect(() => {
 const handleResize = () => {
 if (window.innerWidth < 640) setScale(120); // mobile
 else if (window.innerWidth < 1024) setScale(150); // tablet
 else setScale(250); // desktop
 };

 handleResize(); // Initial
 window.addEventListener("resize", handleResize);
 return () => window.removeEventListener("resize", handleResize);
 }, []);

 return (
 <> 
 <ComposableMap
 projection="geoMercator"
 projectionConfig={{
 scale,
 center: [0, 30],
 }}
 className="w-full h-full bg-black"
 >
 <Geographies geography={geoUrl}>
 {({ geographies }) =>
 geographies.map((geo) => (
 <Geography
 key={geo.rsmKey}
 geography={geo}
 fill="#222"
 stroke="#111"
 strokeWidth={0.5}
 className="outline-none hover:outline-none active:outline-none"
 />
 ))
 }
 </Geographies>

 {markers.map(({ name, coordinates, color }) => (
 <Marker key={name} coordinates={coordinates}>
 <circle r="5" fill={color} stroke="#111" strokeWidth="1" />
 </Marker>
 ))}
 </ComposableMap>

 <div className="hidden md:flex absolute bottom-4 left-4 flex-wrap gap-4 p-4 border-[1px] border-gray-600 rounded-3xl bg-[#000000]">
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full bg-[#4834D4]"></div>
 <span className="text-white">India</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full bg-[#BD5302]"></div>
 <span className="text-white">USA</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full bg-[#E9C16B]"></div>
 <span className="text-white">CANADA</span>
 </div>
 <div className="flex items-center gap-2">
 <div className="w-3 h-3 rounded-full bg-[#579560]"></div>
 <span className="text-white">UAE</span>
 </div>
 </div>


 </>
 )
}




















