"use client";

import Image from "next/image";

export default function Products() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e234a]">
            Signature Products
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Ready-to-deploy enterprise solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Large Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#1e234a] rounded-[2rem] p-6 md:p-10 min-h-[320px] md:min-h-[400px] flex flex-col justify-between relative overflow-hidden">
            
            <div className="relative z-10">
              <span className="bg-[#2d3363] text-[10px] text-white px-3 py-1 rounded-full uppercase font-bold tracking-widest">
                Most Popular
              </span>

              <h3 className="text-2xl md:text-4xl font-bold text-white mt-4 md:mt-6">
                Matrimony Website
              </h3>

              <p className="text-gray-400 mt-3 md:mt-4 max-w-xs text-sm md:text-base">
                A full-stack matchmaking platform with advanced filtering and security.
              </p>
            </div>

            <button className="bg-white text-[#1e234a] font-semibold py-2.5 px-6 rounded-xl w-fit mt-6 hover:scale-105 transition">
              View Demo
            </button>

            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-52 h-52 md:w-64 md:h-64 bg-white opacity-[0.05] rounded-full" />
          </div>

          {/* Right Side */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* 2. Green Card */}
            <div className="sm:col-span-2 bg-[#1b9a5b] rounded-[1.5rem] p-5 md:p-6 flex justify-between items-center text-white">
              
              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  Order Management
                </h3>
                <p className="opacity-80 text-xs md:text-sm">
                  Streamline logistics and inventory.
                </p>
              </div>

              {/* IMAGE ICON */}
              <div className="bg-[#24b16a] p-3 md:p-4 rounded-xl">
                <Image
                  src="/icons/package.png"
                  alt="package"
                  width={28}
                  height={28}
                />
              </div>
            </div>

            {/* 3. Card */}
            <div className="bg-[#f3f4f6] rounded-[1.5rem] p-6 flex flex-col justify-between aspect-square">
              
              <div>
                <Image
                  src="/icons/package.png"
                  alt="mobile"
                  width={28}
                  height={28}
                />
              </div>

              <h3 className="font-bold text-[#1e234a] text-base md:text-lg">
                Temple Mobile App
              </h3>
            </div>

            {/* 4. Card */}
            <div className="bg-[#f3f4f6] rounded-[1.5rem] p-6 flex flex-col justify-between aspect-square">
              
              <div>
                <Image
                  src="/icons/package.png"
                  alt="layers"
                  width={28}
                  height={28}
                />
              </div>

              <h3 className="font-bold text-[#1e234a] text-base md:text-lg">
                B2B System
              </h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}