"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logonew.png" alt="logo" width={140} height={40} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">

          <Link href="/" className="text-[#34A853] font-medium">
            Home
          </Link>

          <Link href="/About" className="text-gray-500">
            About Us
          </Link>

          {/* ✅ Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-500 hover:text-[#2D3663] font-medium">
              Services
            </button>

            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <Link href="/services/web" className="block px-4 py-2 hover:bg-gray-100">
                Web Development
              </Link>
              <Link href="/services/app" className="block px-4 py-2 hover:bg-gray-100">
                App Development
              </Link>
              <Link href="/services/uiux" className="block px-4 py-2 hover:bg-gray-100">
                UI/UX Design
              </Link>
              <Link href="/services/marketing" className="block px-4 py-2 hover:bg-gray-100">
                Digital Marketing
              </Link>
            </div>
          </div>

          <Link href="/Academy" className="text-gray-500">
            Academy
          </Link>

          <Link href="/Contact" className="text-gray-500">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3">

          <Link href="/">Home</Link>
          <Link href="/About">About</Link>

          {/* ✅ Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full text-left"
            >
              Services
            </button>

            {serviceOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/services/web">Web Development</Link>
                <Link href="/services/app">App Development</Link>
                <Link href="/services/uiux">UI/UX Design</Link>
                <Link href="/services/marketing">Digital Marketing</Link>
              </div>
            )}
          </div>

          <Link href="/Academy">Academy</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;