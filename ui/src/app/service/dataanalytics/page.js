// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="bg-[#f6f6f8] min-h-screen text-gray-800">
//       {/* HERO SECTION */}
//       <div className="bg-[#f5f6f8] py-12 sm:py-16 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
//           {/* Left Content (Centered now) */}
//           <motion.div
//             className="w-full max-w-2xl"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-sm text-gray-500 mb-4 font-medium tracking-wide">
//               SERVICE SPOTLIGHT
//             </p>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#632e87] leading-tight mb-6">
//               Data & Analytics <br />
//               Solutions
//             </h1>

//             <p className="text-gray-600 mb-6 max-w-lg mx-auto">
//               We turn raw data into meaningful insights that drive smarter
//               business decisions. Our solutions focus on data integration,
//               analysis, and visualization to deliver clear, actionable, and
//               strategic outcomes.
//             </p>

//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link href="/Contact">
//                 <button className="bg-[#632e87] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
//                   Request Assessment →
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* CORE CAPABILITIES (BENTO GRID) */}
//       <div className="bg-[#f5f6f8] py-12 sm:py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Core Capabilities
//           </motion.h2>

//           <motion.p
//             className="text-gray-500 mb-10 max-w-xl"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             ransforming data into actionable intelligence with scalable,
//             high-performance analytics solutions.
//           </motion.p>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[200px] sm:auto-rows-[220px]">
//             {/* Full Stack */}
//             <motion.div
//               className="sm:col-span-2 md:col-span-2 row-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div>
//                 <img
//                   src="/Data Engineeringicon.png"
//                   className="w-10 h-10 mb-4"
//                 />
//                 <h3 className="text-lg font-semibold text-[#1c2541] mb-2">
//                   Data Engineering
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   We build strong data foundations that collect, process, and
//                   organize large volumes of data efficiently. Designed for
//                   scalability, speed, and reliability.
//                 </p>
//               </div>

//               <img
//                 src="/Engineeringimg.jpg"
//                 // className="rounded-lg w-full h-32 sm:h-40 object-contain"
//                 className="rounded-lg w-full h-32 sm:h-60 object-fill object-center"
//               />
//             </motion.div>

//             {/* Performance */}
//             <motion.div
//               className="bg-white p-6 rounded-xl shadow-sm"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//             >
//               <img
//                 src="/Predictive Analyticsicon.png"
//                 className="w-10 h-10 mb-4"
//               />
//               <h3 className="text-lg font-semibold text-[#1c2541] mb-2">
//                 Predictive Analytics
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Move from insights to foresight. We use advanced models and data
//                 techniques to forecast trends and future outcomes.
//               </p>

//               <div className="flex items-center gap-2 mt-4">
//                 <span className="w-6 h-6 bg-indigo-500 rounded-full"></span>
//                 <span className="w-6 h-6 bg-green-400 rounded-full"></span>
//                 <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
//               </div>
//             </motion.div>

//             {/* Custom Web */}
//             <motion.div
//               className="row-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//             >
//               <div>
//                 <img src="/Analytics & Insightsicon.png" className="w-10 h-10 mb-4" />
//                 <h3 className="text-lg font-semibold text-[#1c2541] mb-2">
//                   Analytics & Insights
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   Turn raw data into meaningful insights. We help you uncover
//                   trends, patterns, and opportunities to drive smarter
//                   decisions.
//                 </p>

//                 <ul className="space-y-2 text-sm text-gray-700">
//                   <li>✅ SData analysis & reporting</li>
//                   <li>✅ Business insights</li>
//                   <li>✅ Decision support systems</li>
//                 </ul>
//               </div>

//               <img
//                 src="/Analytics & Insights.jpg"
//                 className="rounded-lg w-full h-28 sm:h-32 object-cover mt-4"
//               />
//             </motion.div>

//             {/* API */}
//             <motion.div
//               className="sm:col-span-2 md:col-span-2 bg-[#632e87] text-white p-6 rounded-xl"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//             >
//               <img src="/Business icon.png" className="w-10 h-10 mb-4" />

//               <h3 className="text-lg font-semibold mb-2">
//                 Business Intelligence Dashboards
//               </h3>

//               <p className="text-sm text-gray-200">
//                 Visualize data like never before. We design interactive
//                 dashboards that make complex data simple and actionable.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* APPROACH SECTION */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
//         {/* Left Image */}
//         <motion.div
//           className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//         >
//           <img
//             src="/bannerimages.jpeg"
//             alt="insight"
//             className="w-full h-full object-cover grayscale"
//           />

//           {/* <div className="absolute bottom-[-20px] left-4 sm:left-6 bg-white p-4 sm:p-5 rounded-xl shadow-lg w-52 sm:w-60">
//             <p className="text-xl sm:text-2xl font-bold text-[#1c2541]">
//               94%
//             </p>
//             <p className="text-xs text-gray-500">
//               Improvement in platform speed and user experience after deployment.
//             </p>
//           </div> */}
//         </motion.div>

//         {/* Right Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//         >
//           <h2 className="text-2xl sm:text-3xl font-semibold text-[#1c2541] mb-8">
//             The Approach to Data & Analytics Solutions
//           </h2>

//           <div className="space-y-8">
//             {[
//               {
//                 num: "01",
//                 title: "Data Discovery & Collection",
//                 desc: "We gather and analyze data from multiple sources to understand your business landscape and identify meaningful insights.",
//               },
//               {
//                 num: "02",
//                 title: "Data Processing & Analysis",
//                 desc: "We clean, structure, and analyze data using advanced techniques to uncover patterns, trends, and opportunities.",
//               },
//               {
//                 num: "03",
//                 title: "Visualization & Insights",
//                 desc: "We present data through intuitive dashboards and visualizations, enabling clear, actionable, and data-driven decision-making.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="flex gap-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <span className="text-gray-400 font-semibold">{item.num}</span>
//                 <div>
//                   <h4 className="font-semibold text-[#1c2541]">{item.title}</h4>
//                   <p className="text-sm text-gray-500">{item.desc}</p>
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
      <div className="bg-[#f5f6f8] py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          

           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              Data & Analytics <br />
              Solutions
            </h1>

            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              We turn raw data into meaningful insights that drive smarter
              business decisions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/Contact">
                <button className="bg-[#632e87] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                  Request Assessment →
                </button>
              </Link>
            </div>
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

          <motion.p
            className="text-gray-500 mb-10 max-w-xl text-sm sm:text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Transforming data into actionable intelligence.
          </motion.p>

          {/* ✅ FIXED GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto lg:auto-rows-[220px]">

            {/* Data Engineering */}
            <motion.div
              className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <div>
                <img src="/Data Engineeringicon.png" className="w-10 h-10 mb-4" />
                <h3 className="text-base sm:text-xl font-semibold text-[#1c2541] mb-2">
                  Data Engineering
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Build scalable, high-performance data pipelines.
                </p>
              </div>

              <img
                src="/Engineeringimg.jpg"
                className="rounded-lg w-full h-32 sm:h-60 object-fill mt-4"
              />
            </motion.div>

            {/* Predictive */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img src="/Predictive Analyticsicon.png" className="w-10 h-10 mb-4" />
              <h3 className="text-base sm:text-xl font-semibold text-[#1c2541] mb-2">
                Predictive Analytics
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Forecast trends and future outcomes.
              </p>
            </motion.div>

            {/* Analytics */}
            <motion.div
              className="lg:row-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <img src="/Analytics & Insightsicon.png" className="w-10 h-10 mb-4" />
                <h3 className="text-base sm:text-xl font-semibold text-[#1c2541] mb-2">
                  Analytics & Insights
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Turn data into meaningful insights.
                </p>

                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li>✅ Data analysis</li>
                  <li>✅ Business insights</li>
                  <li>✅ Decision support</li>
                </ul>
              </div>

              <img
                src="/Analytics & Insights.jpg"
                className="rounded-lg w-full h-28 sm:h-32 object-cover mt-4"
              />
            </motion.div>

            {/* BI */}
            <motion.div
              className="sm:col-span-2 lg:col-span-2 bg-[#632e87] text-white p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <img src="/Business icon.png" className="w-10 h-10 mb-4" />

              <h3 className="text-base sm:text-xl font-semibold mb-2">
                Business Intelligence Dashboards
              </h3>

              <p className="text-sm sm:text-base text-gray-200">
                Visualize and act on complex data easily.
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