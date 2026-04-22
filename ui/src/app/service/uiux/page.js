"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#f6f6f8] min-h-screen text-gray-800 overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="bg-[#f5f6f8] py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
          
          <motion.div
            className="w-full max-w-2xl px-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
         
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              UI/UX & Product Design
            </h1>

            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 max-w-lg mx-auto">
              We design intuitive, user-focused digital experiences that not
              only look great but also perform seamlessly. Our approach blends
              creativity, research, and strategy to deliver products that engage
              users and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/Contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#632e87] text-white px-5 py-3 rounded-lg hover:opacity-90 transition text-sm sm:text-base">
                  Request Assessment →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CORE CAPABILITIES */}
      <div className="bg-[#f5f6f8] py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <motion.h2
           className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 leading-snug md:leading-tight"      
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Core Capabilities
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Designing experiences that are intuitive, scalable, and
            user-focused.
          </motion.p>

          {/* ✅ FIXED GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto lg:auto-rows-[220px]">
            
            {/* Large Card */}
            <motion.div
              className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <div>
                <img src="/research.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-xl font-semibold text-[#1c2541] mb-2">
                  User Research & Insights
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We understand your users before we design. Through research,
                  personas, and behavior analysis, we create experiences that
                  truly connect.
                </p>
              </div>

              <img
                src="/researchimg.jpg"
                className="rounded-lg w-full h-32 sm:h-52 object-cover mt-4"
              />
            </motion.div>

            {/* UI Design */}
            <motion.div
              className="bg-white p-5 sm:p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img src="/UIDesign.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-xl font-semibold text-[#1c2541] mb-2">
                UI Design Systems
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Consistency meets creativity. We build scalable design systems
                that ensure visual consistency across all platforms.
              </p>
            </motion.div>

            {/* Wireframe */}
            <motion.div
              className="lg:row-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <img src="/wireframe.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-xl font-semibold text-[#1c2541] mb-2">
                  Wireframing & Prototyping
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  From ideas to interactive flows. We design structured
                  wireframes and clickable prototypes to validate concepts
                  before development.
                </p>

                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>✅ User journey mapping</li>
                  <li>✅ Low & high-fidelity wireframes</li>
                  <li>✅ Interactive prototypes</li>
                </ul>
              </div>

              <img
                src="/wireframeimg.jpg"
                className="rounded-lg w-full h-28 sm:h-32 object-cover mt-4"
              />
            </motion.div>

            {/* UX */}
            <motion.div
              className="sm:col-span-2 lg:col-span-2 bg-[#632e87] text-white p-5 sm:p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <img src="/UX Optimization.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />

              <h3 className="text-base sm:text-xl font-semibold mb-2">
                UX Optimization & Testing
              </h3>

              <p className="text-sm sm:text-base text-gray-200">
                Design is never final — it evolves. We continuously test,
                analyze, and improve user experiences for better engagement and
                performance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

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