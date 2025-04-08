import React from "react";

const ProfileImage = ({ imageUrl, isOnline }) => {
 return (

  <div className="flex justify-center items-center w-15 h-15 border-b border-gray-600 ">
  <div className="relative w-10 h-10">
   
   <img
    src={imageUrl}
    alt="Profile"
    className="w-full h-full object-cover rounded-full border-2 border-white shadow"
   />

 
   <span
    className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 border-white ${
     isOnline ? "bg-green-500" : "bg-red-500"
    }`}
   />
  </div>
  </div>
 );
};

export default ProfileImage;