"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-gray-100 py-12 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="inline-block bg-green-200 text-green-800 text-xs sm:text-sm px-3 py-1 rounded-full mb-4">
            FUTURE-READY TECHNOLOGY
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Delivering <br />
            <span className="text-green-600">Digital </span> Excellence <br />
            Globally
          </h1>

          <p className="mt-4 text-gray-600 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
            Empowering enterprises with bespoke digital architecture,
            high-performance applications, and data-driven intelligence to scale
            in the digital era.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="bg-gray-200 px-5 py-2 rounded-lg w-full sm:w-auto">
              Get Started →
            </button>

            <button className="bg-gray-200 px-5 py-2 rounded-lg w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square 
            transform md:rotate-[-5deg] hover:rotate-0 
            transition duration-500 ease-in-out"
          >
            <Image
              src="/banner (2).jpeg"
              alt="Banner"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}