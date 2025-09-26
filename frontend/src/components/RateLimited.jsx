import React from "react";
import { useNavigate } from "react-router";

const RateLimited = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800">
      {/* Card */}
      <div className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-10 text-center border border-gray-200">
        {/* Icon */}
        <div className="text-red-500 text-6xl mb-4">⚠️</div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold tracking-wide mb-2">
          Rate Limit Exceeded
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-6">
          Too many requests have been made in a short time.  
          Please wait before trying again.
        </p>

        
      </div>

      
    </div>
  );
};

export default RateLimited;
