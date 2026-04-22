"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Abouthome() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* LEFT: Image Stack */}
        <motion.div variants={fadeUp} className="relative w-full aspect-[4/3] lg:aspect-square">
          {/* Main Image */}
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/bannerimages.jpeg"
              alt="Team"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Secondary Image */}
          <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/about2image.jpg"
              alt="Innovation"
              fill
              className="object-cover"
            />
          </div>

          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute bottom-[10%] left-[5%] bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 z-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">10+</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">
              Years of Experience
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT: Content */}
        <div className="flex flex-col gap-6">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Powering Digital Growth <br className="hidden sm:block" /> 
              <span className="text-[#632e87]">Through Innovation</span> 🚀
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At Zervia, we build more than applications — we create systems that drive 
            results, efficiency, and growth. We combine robust architecture with 
            next-gen technology to future-proof your business.
          </motion.p>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <div className="bg-green-100 w-fit p-3 rounded-xl">
                <Image src="/Reliable.png" alt="Reliability" width={24} height={24} />
              </div>
              <h4 className="font-bold text-gray-900">Reliable Solutions</h4>
              <p className="text-sm text-gray-600">Performance, security, and seamless scalability.</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-purple-100 w-fit p-3 rounded-xl">
                <Image src="/Smart.png" alt="Innovation" width={24} height={24} />
              </div>
              <h4 className="font-bold text-gray-900">Smart Innovation</h4>
              <p className="text-sm text-gray-600">Leveraging modern tech to keep you ahead.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}