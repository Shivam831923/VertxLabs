import React from "react";


const Card = ({ children, className }) => {
 return (
 <div className={`border border-white-300 rounded-lg bg-[#000000] ${className}`}>
 {children}
 </div>
 );
};

export default Card;