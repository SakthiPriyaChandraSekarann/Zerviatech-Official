"use client";

import Image from "next/image";

const AcademyHero = () => {
  return (
    <section className="w-full bg-white px-4 py-20 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-100 rounded text-emerald-600 text-[10px] font-bold tracking-[0.2em] uppercase">
            Zervia Academy
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
            The Architectural <br />
            <span className="text-emerald-500">Masterclass</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Zervia Academy isn't just a school; it's an ecosystem. Master
            high-demand tech skills through project-based learning guided by
            industry architects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition shadow-md">
              Enroll Now
            </button>

            <button className="border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              View Curriculum
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow Background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-100 to-blue-50 rounded-2xl blur opacity-30"></div>

          {/* Image Card */}
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-xl">
            <Image
              src="/about2image.jpg"
              alt="Academy"
              fill
              className="object-cover hover:scale-105 transition duration-700"
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 420px"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-md flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">
                Industry Certified
              </p>
              <p className="text-[10px] text-gray-500">
                Verified by Top Tech Firms
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* HEADER */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Engineered Learning Paths
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl text-sm">
              We focus on the intersection of design, engineering, and business
              logic. Our programs are designed to transform beginners into
              senior-ready architects.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* TOP LEFT */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="text-xs text-emerald-500 font-semibold mb-2">
                  MOST POPULAR
                </p>
                <h3 className="text-xl font-bold mb-2">
                  Advanced UI/UX Architecture
                </h3>
                <p className="text-gray-500 text-sm">
                  Learn design systems and high-fidelity prototyping.
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-6">
                1.2k Students Enrolled
              </p>
            </div>

            {/* TOP RIGHT */}
            <div className="bg-indigo-900 text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="text-xs text-emerald-300 mb-2">IN DEMAND</p>
                <h3 className="text-xl font-bold mb-2">Full Stack Systems</h3>
                <p className="text-gray-200 text-sm">
                  Scalable backend & frontend systems.
                </p>
              </div>

              <div className="flex gap-2 mt-6">
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  Node.js
                </span>
              </div>
            </div>

            {/* BOTTOM LEFT */}
            <div className="bg-purple-100 rounded-3xl p-6 shadow-sm min-h-[160px] flex flex-col justify-between">
              <div>
                <h3 className="font-bold mb-2">Data Analytics</h3>
                <p className="text-sm text-gray-600">
                  Turning raw data into insights.
                </p>
              </div>

              <div className="mt-4 h-1 bg-gray-300 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-black"></div>
              </div>
            </div>

            {/* BOTTOM RIGHT */}
            <div className="bg-gray-100 rounded-3xl p-6 shadow-sm flex items-center gap-4 min-h-[160px]">
              <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center">
                🚀
              </div>

              <div>
                <h3 className="font-bold">Digital Marketing & Strategy</h3>
                <p className="text-sm text-gray-600">
                  Growth strategies & campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <footer className="bg-gray-50 py-32 px-8 border-t border-gray-100 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter text-gray-900">Ready to Build Something <br />Extraordinary?</h2>
          <p className="text-gray-600 mb-12 text-lg">Let's discuss how our architectural approach can elevate your business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-emerald-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
              Schedule Consultation
            </button>
            <button className="bg-white border border-gray-200 text-black px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm">
              View Case Studies
            </button>
          </div>
        </div>
      </footer>

   


    </section>
  );
};

export default AcademyHero;
