// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="bg-[#f6f6f8] min-h-screen text-gray-800">
//       {/* HERO SECTION */}
//       <div className="bg-[#f5f6f8] py-10 sm:py-14 md:py-16 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
//           <motion.div
//             className="w-full max-w-2xl px-2"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 font-medium tracking-wide">
//               SERVICE SPOTLIGHT
//             </p>

//             <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#632e87] leading-snug sm:leading-tight mb-4 sm:mb-6">
//               Cloud & Infrastructure <br />
//               Solutions
//             </h1>

//             <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 max-w-lg mx-auto">
//               We design and manage scalable cloud infrastructures that ensure
//               high availability, security, and performance. Our approach
//               optimizes resources, streamlines operations, and supports your
//               business with reliable, future-ready systems.
//             </p>

//             <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
//               <Link href="/Contact">
//                 <button className="w-full sm:w-auto bg-[#632e87] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:opacity-90 transition">
//                   Request Assessment →
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* CORE CAPABILITIES */}
//       <div className="bg-[#f5f6f8] py-10 sm:py-14 md:py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           >
//             Core Capabilities – Cloud Infrastructure
//           </motion.h2>

//           <motion.p
//             className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10 max-w-xl"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           >
//             Building secure, scalable, and high-performance cloud environments
//             for modern digital products.
//           </motion.p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 auto-rows-auto md:auto-rows-[220px]">
            
//             {/* Cloud Architecture */}
//             <motion.div
//               className="sm:col-span-2 md:col-span-2 md:row-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm flex flex-col justify-between"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//             >
//               <div>
//                 <img src="/Cloud Architecture.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
//                 <h3 className="text-base sm:text-lg font-semibold text-[#1c2541] mb-2">
//                   Cloud Architecture Design
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   We design robust cloud infrastructures tailored to your
//                   business needs. Scalable, resilient, and optimized for
//                   performance from day one.
//                 </p>
//               </div>

//               <img
//                 src="/cloud architecture img.jpg"
//                 className="rounded-lg w-full h-40 sm:h-52 md:h-60 object-cover mt-4"
//               />
//             </motion.div>

//             {/* Security */}
//             <motion.div
//               className="bg-white p-5 sm:p-6 rounded-xl shadow-sm"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//             >
//               <img src="/Security.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
//               <h3 className="text-base sm:text-lg font-semibold text-[#1c2541] mb-2">
//                 Security & Monitoring
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Your data, fully protected. We implement advanced security
//                 practices, real-time monitoring, and proactive issue detection.
//               </p>

//               <div className="flex items-center gap-2 mt-4">
//                 <span className="w-5 h-5 sm:w-6 sm:h-6 bg-indigo-500 rounded-full"></span>
//                 <span className="w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full"></span>
//                 <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></span>
//               </div>
//             </motion.div>

//             {/* DevOps */}
//             <motion.div
//               className="md:row-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm flex flex-col justify-between"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//             >
//               <div>
//                 <img src="/deployment.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
//                 <h3 className="text-base sm:text-lg font-semibold text-[#1c2541] mb-2">
//                   Deployment & DevOps
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-3 sm:mb-4">
//                   From code to cloud — seamlessly. We implement CI/CD pipelines,
//                   automate deployments, and ensure faster, reliable releases.
//                 </p>

//                 <ul className="space-y-1 sm:space-y-2 text-sm text-gray-700">
//                   <li>✅ Continuous Integration & Delivery</li>
//                   <li>✅ Automated Workflows</li>
//                   <li>✅ Version Control & Monitoring</li>
//                 </ul>
//               </div>

//               <img
//                 src="/deploymentimg.jpg"
//                 className="rounded-lg w-full h-36 sm:h-40 object-cover mt-4"
//               />
//             </motion.div>

//             {/* Scalability */}
//             <motion.div
//               className="sm:col-span-2 md:col-span-2 bg-[#0b3d2e] text-white p-5 sm:p-6 rounded-xl"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//             >
//               <img src="/scalability.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />

//               <h3 className="text-base sm:text-lg font-semibold mb-2">
//                 Scalability & Load Management
//               </h3>

//               <p className="text-sm text-gray-200">
//                 Handle growth without limits. We architect systems that scale
//                 dynamically based on traffic and demand.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* APPROACH SECTION */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
//         {/* Image */}
//         <motion.div
//           className="relative w-full h-[240px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//         >
//           <img
//             src="/bannerimages.jpeg"
//             alt="insight"
//             className="w-full h-full object-cover grayscale"
//           />
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//         >
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1c2541] mb-6 sm:mb-8">
//             The Approach to Cloud & Infrastructure Solutions
//           </h2>

//           <div className="space-y-6 sm:space-y-8">
//             {[
//               {
//                 num: "01",
//                 title: "Assessment & Planning",
//                 desc: "We analyze your existing infrastructure, identify gaps, and define a cloud strategy that aligns with your business goals and scalability needs.",
//               },
//               {
//                 num: "02",
//                 title: "Architecture & Implementation",
//                 desc: "We design and deploy secure, scalable cloud environments with optimized resource management and high-performance infrastructure.",
//               },
//               {
//                 num: "03",
//                 title: "Monitoring & Optimization",
//                 desc: "We continuously monitor, manage, and optimize your infrastructure to ensure reliability, security, and peak performance.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="flex gap-3 sm:gap-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <span className="text-gray-400 font-semibold text-sm sm:text-base">
//                   {item.num}
//                 </span>
//                 <div>
//                   <h4 className="font-semibold text-[#1c2541] text-sm sm:text-base">
//                     {item.title}
//                   </h4>
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f6f6f8] min-h-screen text-gray-800">
      {/* HERO SECTION */}
      <div className="bg-[#f5f6f8] py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
          <motion.div
            className="w-full max-w-2xl px-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
        

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-snug sm:leading-tight mb-4 sm:mb-6">
              Cloud & Infrastructure <br />
              Solutions
            </h1>

            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 max-w-lg mx-auto">
              We design and manage scalable cloud infrastructures that ensure
              high availability, security, and performance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/Contact">
                <button className="w-full sm:w-auto bg-[#632e87] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:opacity-90 transition">
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
            Building secure, scalable, and high-performance cloud environments.
          </motion.p>

          {/* ✅ FIXED GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-auto lg:auto-rows-[220px]">
            
            {/* Cloud Architecture */}
            <motion.div
              className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <div>
                <img src="/Cloud Architecture.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1c2541] mb-2">
                  Cloud Architecture Design
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Scalable, resilient, and optimized infrastructure from day one.
                </p>
              </div>

              <img
                src="/cloud architecture img.jpg"
                className="rounded-lg w-full h-40 sm:h-52 object-cover mt-4"
              />
            </motion.div>

            {/* Security */}
            <motion.div
              className="bg-white p-5 sm:p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img src="/Security.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-[#1c2541] mb-2">
                Security & Monitoring
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Advanced protection and real-time monitoring.
              </p>

              <div className="flex items-center gap-2 mt-4">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-indigo-500 rounded-full"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full"></span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></span>
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div
              className="lg:row-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <img src="/deployment.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-[#1c2541] mb-2">
                  Deployment & DevOps
                </h3>

                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                  <li>✅ CI/CD Pipelines</li>
                  <li>✅ Automation</li>
                  <li>✅ Monitoring</li>
                </ul>
              </div>

              <img
                src="/deploymentimg.jpg"
                className="rounded-lg w-full h-36 sm:h-40 object-cover mt-4"
              />
            </motion.div>

            {/* Scalability */}
            <motion.div
              className="sm:col-span-2 lg:col-span-2 bg-[#0b3d2e] text-white p-5 sm:p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <img src="/scalability.png" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />

              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Scalability & Load Management
              </h3>

              <p className="text-sm sm:text-base text-gray-200">
                Systems that scale dynamically with demand.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* APPROACH SECTION */}
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