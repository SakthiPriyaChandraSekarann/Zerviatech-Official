"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/zervialogo.png" // place your logo in public/logo.png
              alt="Zervia Tech"
              width={140}
              height={40}
              className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto object-contain"
              priority
            />
          </Link>
        </div>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-[#34A853] font-medium border-b-2 border-[#34A853] pb-1"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
          >
            Services
          </Link>
          {/* <Link
            href="/product"
            className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
          >
            Product
          </Link> */}
          <Link
            href="/academy"
            className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
          >
            Academy
          </Link>
          <Link
            href="/Contact"
            className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
        {/* Desktop Call to Action Button */}
        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="bg-[#2D3663] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1e2545] transition-all shadow-sm"
          >
            Get Started
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#2D3663] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-white mt-4 pb-4 space-y-4`}
      >
        <Link
          href="/"
          className="block text-[#34A853] font-medium"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/About"
          className="block text-gray-500 font-medium"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/services"
          className="block text-gray-500 font-medium"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/product"
          className="block text-gray-500 font-medium"
          onClick={() => setIsOpen(false)}
        >
          Product
        </Link>
        <Link
          href="/academy"
          className="block text-gray-500 font-medium"
          onClick={() => setIsOpen(false)}
        >
          Academy
        </Link>
        <Link
          href="/Contact"
          className="block text-gray-500 font-medium"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
        <div className="pt-2">
          <Link
            href="/get-started"
            className="block text-center bg-[#2D3663] text-white px-6 py-2.5 rounded-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
