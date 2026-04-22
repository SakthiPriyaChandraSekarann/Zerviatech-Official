"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "9486305577"; // replace
  const message = "Hello, I’m interested in your services. Could you please share more details?";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="
        fixed 
        bottom-3 right-3 
        sm:bottom-5 sm:right-5 
        md:bottom-6 md:right-6 
        lg:bottom-8 lg:right-8
        z-50 cursor-pointer group
      "
    >
      {/* Tooltip */}
      <span
        className="
          hidden sm:block
          absolute 
          right-full mr-2 
          bottom-1/2 translate-y-1/2
          bg-black text-white 
          text-[10px] sm:text-xs md:text-sm
          px-2 py-1 sm:px-3 sm:py-1.5 
          rounded-md
          opacity-0 group-hover:opacity-100 
          transition duration-300 ease-in-out
          whitespace-nowrap
        "
      >
        Chat with us
      </span>

      {/* Button */}
      <div
        className="
          bg-green-500 hover:bg-green-600 
          active:scale-95
          text-white 
          p-3 sm:p-4 md:p-5 lg:p-6
          rounded-full 
          shadow-lg 
          transition-all duration-300 
          transform hover:scale-110
        "
      >
        <FaWhatsapp
          className="text-lg sm:text-2xl md:text-[28px] lg:text-[32px]"
        />
      </div>
    </div>
  );
}