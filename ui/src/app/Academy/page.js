"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AcademyHero = () => {
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
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 overflow-hidden">
      
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-6 sm:space-y-8 max-w-4xl px-2 sm:px-4"
        >
          <motion.h1 
            variants={fadeInUp}
            // className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 leading-[1.1]"
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
            // className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mx-auto max-w-xl sm:max-w-2xl"
            className="text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl leading-relaxed mx-auto"
          >
            Zervia Tech Academy is more than learning — it’s transformation.
            Gain in-demand skills through real-world projects, guided by
            industry experts.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link
              href="/Contact"
              className="bg-[#632e87] text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-[#4d2269] transition shadow-md text-center text-sm sm:text-base"
            >
              Enroll Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ASYMMETRIC SECTION */}
      <div className="w-full py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#632e87] tracking-tighter"> */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-2 leading-snug md:leading-tight font-black text-[#632e87]">
              Learn. Build. Evolve.
            </h2>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-[#632e87] rounded-full"
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 sm:gap-10"
          >
            
            {/* ROW 1 */}
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* UI/UX DESIGN */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="flex-grow lg:w-2/3 bg-gray-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 sm:gap-8 items-center border border-gray-100 transition-all hover:bg-white hover:shadow-2xl group cursor-pointer"
              >
                <div className="space-y-4 sm:space-y-6 flex-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    UX/UI Design
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                    Learn to design intuitive user experiences and stunning
                    interfaces using modern tools enhanced with AI-driven
                    workflows.
                  </p>
                </div>

                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-white rounded-full shadow-xl flex items-center justify-center text-3xl sm:text-4xl"
                >
                  🎨
                </motion.div>
              </motion.div>

              {/* FULL STACK */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="lg:w-1/3 bg-indigo-900 text-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-xl group cursor-pointer relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    Full Stack Development
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base md:text-lg">
                    Master modern web development with the power of AI.
                  </p>
                </div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-4xl sm:text-5xl self-end"
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
                className="bg-white border-2 border-purple-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 hover:border-purple-200 transition-colors group cursor-pointer"
              >
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-2">
                    Data Analytics
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                    Smarter decisions using Excel, SQL, and Power BI.
                  </p>

                  <div className="relative w-full h-2 sm:h-3 bg-purple-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-[#632e87] rounded-full"
                    />
                  </div>
                </div>

                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  className="text-3xl sm:text-4xl w-14 h-14 sm:w-16 sm:h-16 bg-purple-50 rounded-2xl flex items-center justify-center"
                >
                  📊
                </motion.div>
              </motion.div>

              {/* DIGITAL MARKETING */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-[#632e87] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-10 flex items-center justify-between group cursor-pointer overflow-hidden relative"
              >
                <div className="absolute -right-10 -bottom-10 w-32 sm:w-40 h-32 sm:h-40 bg-white/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Digital Marketing
                  </h3>
                  <p className="text-purple-100/60 text-xs sm:text-sm">
                    Master SEO, social media, and automation.
                  </p>
                </div>

                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-xl sm:text-2xl"
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
        className="bg-gray-50 py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 border-t border-gray-100 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 tracking-tighter text-gray-900">
            Your Future in Tech Starts <br /> Here!
          </h2>

          <Link
            href="/Contact"
            className="bg-[#632e87] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-bold hover:bg-[#4d2269] transition-all shadow-lg text-center inline-block text-sm sm:text-base"
          >
            Schedule Consultation
          </Link>
        </div>
      </motion.footer>
    </section>
  );
};

export default AcademyHero;