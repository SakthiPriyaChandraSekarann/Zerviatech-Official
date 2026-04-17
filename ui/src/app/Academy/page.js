// "use client";

// import Image from "next/image";
// import ContactPage from "../Contact/page";
// import Link from "next/link";

// const AcademyHero = () => {
//   return (
//     <section className="w-full bg-white px-4 py-20 md:px-12 lg:px-20">
//       {/* ANIMATION STYLES */}
//       <style jsx>{`
//         @keyframes showup {
//           0% {
//             opacity: 0;
//           }
//           20% {
//             opacity: 1;
//           }
//           80% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//           }
//         }

//         @keyframes slidein {
//           0% {
//             margin-left: -800px;
//           }
//           20% {
//             margin-left: -800px;
//           }
//           35% {
//             margin-left: 0px;
//           }
//           100% {
//             margin-left: 0px;
//           }
//         }

//         @keyframes reveal {
//           0% {
//             opacity: 0;
//             width: 0px;
//           }
//           20% {
//             opacity: 1;
//             width: 0px;
//           }
//           30% {
//             width: 100%;
//           }
//           80% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//             width: 100%;
//           }
//         }

//         .animate-showup {
//           animation: showup 7s infinite;
//         }

//         .reveal-container {
//           display: inline-block;
//           vertical-align: top;
//           overflow: hidden;
//           white-space: nowrap;
//           width: 0;
//           animation: reveal 7s infinite;
//         }

//         .reveal-content {
//           display: inline-block;
//           animation: slidein 7s infinite;
//         }
//       `}</style>

//       {/* HERO SECTION */}
//       <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
//         <div className="space-y-8 max-w-4xl">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
//             <div className="animate-showup">Build Skills</div>
//             <div className="reveal-container">
//               <span className="reveal-content text-[#632e87]">
//                 That Get You Hired 🚀
//               </span>
//             </div>
//           </h1>

//           <p className="text-gray-600 text-base md:text-lg leading-relaxed mx-auto max-w-2xl">
//             Zervia Tech Academy is more than learning — it’s transformation.
//             Gain in-demand skills through real-world projects, guided by
//             industry experts.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/Contact"
//               className="bg-[#632e87] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#4d2269] transition shadow-md text-center"
//             >
//               Enroll Now
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* ASYMMETRIC MINIMALIST SECTION */}
//       <div className="w-full py-24">
//         <div className="max-w-7xl mx-auto px-4 md:px-12">
//           <div className="mb-16">
//             <h2 className="text-4xl md:text-5xl font-black text-[#632e87] tracking-tighter">
//               Learn. Build. Evolve.
//             </h2>
//             <div className="h-1 w-20 bg-[#632e87] mt-4 rounded-full"></div>
//           </div>

//           {/* <div className="flex flex-col gap-10">
//             <div className="flex flex-col lg:flex-row gap-6">
//               <div className="flex-grow lg:w-2/3 bg-gray-50 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row gap-8 items-center border border-gray-100 transition-all hover:bg-white hover:shadow-2xl group">
//                 <div className="space-y-6 flex-1">
//                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
//                     UX/UI Design{" "}
//                   </h3>
//                   <p className="text-gray-500 text-lg">
//                     Learn to design intuitive user experiences and stunning
//                     interfaces using modern tools enhanced with AI-driven
//                     workflows and automation.
//                   </p>
//                 </div>
//                 <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform duration-500">
//                   🎨
//                 </div>
//               </div>

//               <div className="lg:w-1/3 bg-indigo-900 text-white rounded-[3rem] p-10 flex flex-col justify-between shadow-xl">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-4">
//                     Full Stack Development
//                   </h3>
//                   <p className="text-white text-lg">
//                     Master modern web development with the power of AI. Build
//                     scalable applications while learning how to integrate
//                     intelligent features into real-world projects.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white border-2 border-purple-50 rounded-[3rem] p-10 flex items-center gap-8 hover:border-purple-200 transition-colors">
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-purple-900 mb-2">
//                     Data Analytics
//                   </h3>
//                   <p className="text-gray-500 text-sm mb-6">
//                     Learn how to collect, analyze, and visualize data to make
//                     smarter business decisions. Master tools like Excel, SQL,
//                     and Power BI with real-world datasets.
//                   </p>
//                   <div className="relative w-full h-3 bg-purple-50 rounded-full overflow-hidden">
//                     <div className="absolute top-0 left-0 h-full w-3/5 bg-[#632e87] rounded-full"></div>
//                   </div>
//                 </div>
              
//               </div>

//               <div className="bg-[#632e87] rounded-[3rem] p-10 flex items-center justify-between group cursor-pointer overflow-hidden relative">
//                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-white mb-2">
//                     Digital Marketing
//                   </h3>
//                   <p className="text-purple-100/60 text-sm">
//                     Learn modern marketing strategies powered by AI. Master SEO,
//                     social media, ads, and automation to drive real business
//                     growth.
//                   </p>
//                 </div>
//                 <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
//                   🚀
//                 </div>
//               </div>
//             </div>
//           </div> */}

//           <div className="flex flex-col gap-10">
//             {/* ROW 1: Large Left, Small Right */}
//             <div className="flex flex-col lg:flex-row gap-6">
//               {/* UI/UX DESIGN */}
//               <div className="flex-grow lg:w-2/3 bg-gray-50 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row gap-8 items-center border border-gray-100 transition-all hover:bg-white hover:shadow-2xl group">
//                 <div className="space-y-6 flex-1">
//                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
//                     UX/UI Design
//                   </h3>
//                   <p className="text-gray-500 text-lg">
//                     Learn to design intuitive user experiences and stunning
//                     interfaces using modern tools enhanced with AI-driven
//                     workflows and automation.
//                   </p>
//                 </div>
//                 <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform duration-500">
//                   🎨
//                 </div>
//               </div>

//               {/* FULL STACK DEVELOPMENT */}
//               <div className="lg:w-1/3 bg-indigo-900 text-white rounded-[3rem] p-10 flex flex-col justify-between shadow-xl group hover:shadow-2xl transition-all relative overflow-hidden">
//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-bold mb-4">
//                     Full Stack Development
//                   </h3>
//                   <p className="text-white/80 text-lg">
//                     Master modern web development with the power of AI. Build
//                     scalable applications.
//                   </p>
//                 </div>
//                 <div className="text-5xl self-end group-hover:-translate-y-2 transition-transform duration-500">
//                   💻
//                 </div>
//               </div>
//             </div>

//             {/* ROW 2: Balanced Horizontal */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* DATA ANALYTICS */}
//               <div className="bg-white border-2 border-purple-50 rounded-[3rem] p-10 flex items-center gap-8 hover:border-purple-200 transition-colors group">
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-purple-900 mb-2">
//                     Data Analytics
//                   </h3>
//                   <p className="text-gray-500 text-sm mb-6">
//                     Learn how to collect, analyze, and visualize data to make
//                     smarter decisions using Excel, SQL, and Power BI.
//                   </p>
//                   <div className="relative w-full h-3 bg-purple-50 rounded-full overflow-hidden">
//                     <div className="absolute top-0 left-0 h-full w-3/5 bg-[#632e87] rounded-full"></div>
//                   </div>
//                 </div>
//                 <div className="text-4xl w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                   📊
//                 </div>
//               </div>

//               {/* DIGITAL MARKETING */}
//               <div className="bg-[#632e87] rounded-[3rem] p-10 flex items-center justify-between group cursor-pointer overflow-hidden relative">
//                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-white mb-2">
//                     Digital Marketing
//                   </h3>
//                   <p className="text-purple-100/60 text-sm">
//                     Master SEO, social media, ads, and automation to drive real
//                     business growth.
//                   </p>
//                 </div>
//                 <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
//                   🚀
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FOOTER SECTION */}
//       <footer className="bg-gray-50 py-32 px-8 border-t border-gray-100 relative overflow-hidden text-center">
//         <div className="max-w-4xl mx-auto relative z-10">
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter text-gray-900">
//             Your Future in Tech Starts <br /> Here!
//           </h2>
//           <p className="text-gray-600 mb-12 text-lg">
//             No more just learning — start building, creating, and growing with
//             hands-on experience.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-6">
//             <Link
//               href="/Contact"
//               className="bg-[#632e87] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#4d2269] transition-all shadow-lg shadow-emerald-500/20 text-center inline-block"
//             >
//               Schedule Consultation
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default AcademyHero;



"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AcademyHero = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="w-full bg-white px-4 py-20 md:px-12 lg:px-20 overflow-hidden">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8 max-w-4xl"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900"
          >
            <div className="text-gray-900">Build Skills</div>
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="block text-[#632e87]"
            >
              That Get You Hired 🚀
            </motion.span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-base md:text-lg leading-relaxed mx-auto max-w-2xl"
          >
            Zervia Tech Academy is more than learning — it’s transformation.
            Gain in-demand skills through real-world projects, guided by
            industry experts.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Contact"
              className="bg-[#632e87] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#4d2269] transition shadow-md text-center"
            >
              Enroll Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ASYMMETRIC SECTION */}
      <div className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#632e87] tracking-tighter">
              Learn. Build. Evolve.
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-[#632e87] mt-4 rounded-full"
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10"
          >
            {/* ROW 1 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* UI/UX DESIGN */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="flex-grow lg:w-2/3 bg-gray-50 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row gap-8 items-center border border-gray-100 transition-all hover:bg-white hover:shadow-2xl group cursor-pointer"
              >
                <div className="space-y-6 flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">UX/UI Design</h3>
                  <p className="text-gray-500 text-lg">
                    Learn to design intuitive user experiences and stunning
                    interfaces using modern tools enhanced with AI-driven
                    workflows.
                  </p>
                </div>
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl"
                >
                  🎨
                </motion.div>
              </motion.div>

              {/* FULL STACK */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="lg:w-1/3 bg-indigo-900 text-white rounded-[3rem] p-10 flex flex-col justify-between shadow-xl group cursor-pointer relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
                  <p className="text-white/80 text-lg">Master modern web development with the power of AI.</p>
                </div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-5xl self-end"
                >
                  💻
                </motion.div>
              </motion.div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* DATA ANALYTICS */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-purple-50 rounded-[3rem] p-10 flex items-center gap-8 hover:border-purple-200 transition-colors group cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">Data Analytics</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Smarter decisions using Excel, SQL, and Power BI.
                  </p>
                  <div className="relative w-full h-3 bg-purple-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-[#632e87] rounded-full"
                    />
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.1 }} className="text-4xl w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
                  📊
                </motion.div>
              </motion.div>

              {/* DIGITAL MARKETING */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-[#632e87] rounded-[3rem] p-10 flex items-center justify-between group cursor-pointer overflow-hidden relative"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Digital Marketing</h3>
                  <p className="text-purple-100/60 text-sm">Master SEO, social media, and automation.</p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl"
                >
                  🚀
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-50 py-32 px-8 border-t border-gray-100 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter text-gray-900">
            Your Future in Tech Starts <br /> Here!
          </h2>
          <Link
            href="/Contact"
            className="bg-[#632e87] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#4d2269] transition-all shadow-lg text-center inline-block"
          >
            Schedule Consultation
          </Link>
        </div>
      </motion.footer>
    </section>
  );
};

export default AcademyHero;