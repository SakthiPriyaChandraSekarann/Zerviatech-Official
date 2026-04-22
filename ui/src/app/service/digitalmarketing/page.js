"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f6f6f8] min-h-screen text-gray-800 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <div className="bg-[#f5f6f8] py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              Digital Marketing & Growth
            </h1>

            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              We craft data-driven marketing strategies that enhance brand
              visibility and drive measurable growth.
            </p>

            <Link href="/Contact">
              <button className="bg-[#632e87] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                Request Assessment →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* CORE CAPABILITIES */}
      <div className="bg-[#f5f6f8] py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
           <motion.h2
           className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 leading-snug md:leading-tight"      
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Core Capabilities
          </motion.h2>

          <p className="text-gray-500 mb-10 max-w-xl text-sm sm:text-base">
            Driving growth through data-driven strategies.
          </p>

          {/* ✅ FIXED GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto lg:auto-rows-[220px]">

            {/* BIG CARD */}
            <motion.div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-white p-6 rounded-xl flex flex-col justify-between">
              <div>
                <img src="/Marketingicon.png" className="w-10 h-10 mb-4" />
                <h3 className="text-base sm:text-xl font-semibold mb-2">
                  Performance Marketing
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Targeted campaigns optimized for ROI.
                </p>
              </div>

              <img
                src="/Marketingimg.jpg"
                className="rounded-lg w-full h-32 sm:h-40 md:h-52 object-cover mt-4"
              />
            </motion.div>

            {/* ANALYTICS */}
            <motion.div className="bg-white p-6 rounded-xl">
              <img src="/performance.png" className="w-10 h-10 mb-4" />
              <h3 className="text-base sm:text-xl font-semibold mb-2">
                Analytics & Growth
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Track and optimize campaigns.
              </p>
            </motion.div>

            {/* SEO */}
            <motion.div className="lg:row-span-2 bg-white p-6 rounded-xl flex flex-col justify-between">
              <div>
                <img src="/Optimization (SEO).png" className="w-10 h-10 mb-4" />
                <h3 className="text-base sm:text-xl font-semibold mb-2">
                  SEO
                </h3>

                <ul className="text-sm sm:text-base space-y-2">
                  <li>✅ On-page</li>
                  <li>✅ Keywords</li>
                  <li>✅ Content</li>
                </ul>
              </div>

              <img
                src="/seoimg.jpg"
                className="rounded-lg w-full h-32 object-cover mt-4"
              />
            </motion.div>

            {/* SOCIAL */}
            <motion.div className="sm:col-span-2 lg:col-span-2 bg-[#632e87] text-white p-6 rounded-xl">
              <img src="/socialmediaicon.png" className="w-10 h-10 mb-4" />

              <h3 className="text-base sm:text-xl font-semibold mb-2">
                Social Media Marketing
              </h3>

              <p className="text-sm sm:text-base text-gray-200">
                Engage your audience with powerful campaigns.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* APPROACH */}
      {/* APPROACH SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <motion.div
          className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="/bannerimages.jpeg"
            alt="insight"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1c2541] mb-6 sm:mb-8">
            The Approach to Building Digital Platforms
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                num: "01",
                title: "Discovery & Planning",
                desc: "We understand your business goals, user needs, and technical requirements to define a clear roadmap for your digital platform.",
              },
              {
                num: "02",
                title: "Architecture & Development",
                desc: "We design and build scalable, secure, and high-performance web platforms using modern technologies and best practices.",
              },
              {
                num: "03",
                title: "Deployment & Optimization",
                desc: "We launch, monitor, and continuously optimize your platform to ensure speed, reliability, and a seamless user experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div>
                  <h4 className="font-semibold text-[#1c2541] text-base sm:text-xl">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}