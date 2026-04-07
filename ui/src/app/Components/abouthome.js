// 
"use client";

import Image from "next/image";

export default function Abouthome() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative flex justify-center md:justify-start">
          
          {/* Wrapper for stacking on mobile */}
          <div className="flex sm:flex-row flex-col items-center">
            
            {/* Image 1 */}
            <div className="relative w-[180px] sm:w-[200px] md:w-[220px] h-[240px] sm:h-[260px] md:h-[280px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/bannerimages.jpeg"
                alt="Team"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-[180px] sm:w-[200px] md:w-[220px] h-[240px] sm:h-[260px] md:h-[280px] rounded-xl overflow-hidden shadow-lg sm:ml-6 mt-6 sm:mt-10">
              <Image
                src="/about2image.jpg"
                alt="Innovation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-[-20px] sm:bottom-[-20px] left-1/2 md:left-[60px] transform -translate-x-1/2 md:translate-x-0 bg-gray-100 rounded-xl shadow-md px-5 py-3 w-[180px] sm:w-[200px] md:w-[220px] text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              10+
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Years of Architectural Innovation in Software
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Engineering Excellence <br />
            through Trust and <br />
            Innovation
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
            At Zervia Tech, we don't just build software; we architect
            sustainable digital ecosystems. Our approach combines technical
            rigor with visionary design to solve the most complex business
            challenges.
          </p>

          {/* Feature 1 */}
          <div className="mt-6 flex items-start gap-4 justify-center md:justify-start">
            <div className="bg-green-100 p-2 rounded-lg">
              <Image
                src="/icons/reliability.png"
                alt="Reliability"
                width={20}
                height={20}
              />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">
                Unmatched Reliability
              </h4>
              <p className="text-sm text-gray-600">
                Systems designed for 99.9% uptime and extreme scalability.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mt-4 flex items-start gap-4 justify-center md:justify-start">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Image
                src="/icons/innovation.png"
                alt="Innovation"
                width={20}
                height={20}
              />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">
                Iterative Innovation
              </h4>
              <p className="text-sm text-gray-600">
                Leveraging AI and modern stacks to keep you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}