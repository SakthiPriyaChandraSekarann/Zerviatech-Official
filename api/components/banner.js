"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="inline-block bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full mb-4">
            FUTURE-READY TECHNOLOGY
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Innovative Software <br />
            <span className="text-green-600">Solutions</span> for <br />
            Modern Businesses
          </h1>

          <p className="mt-4 text-gray-600 max-w-lg">
            Empowering enterprises with bespoke digital architecture,
            high-performance applications, and data-driven intelligence to scale
            in the digital era.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-gray-200  px-6 py-3 rounded-lg">
              Get Started →
            </button>

            <button className="bg-gray-200 px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative w-[320px] md:w-[420px] h-[350px] md:h-[450px] 
                          transform rotate-[-5deg] hover:rotate-0 
                          transition duration-500 ease-in-out"
          >
            {/*             
            <Image
              src="/about page.jpeg"
              alt="Banner"
              
              className="object-cover"
            /> */}
            <Image
              src="/academy2.png"
              alt="Banner"
              width={700}
              height={450}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
