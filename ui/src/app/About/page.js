"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* 🔥 Animation Variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-emerald-100 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-8 flex flex-col items-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            Crafting Intelligent <br />
            <span className="text-[#632e87]">Digital Solutions</span> <br />
            for Modern Businesses
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl sm:max-w-2xl"
          >
            We are a results-driven digital solutions company committed to
            delivering innovative, scalable, and reliable services tailored to
            business needs...
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-20 items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-7"
        >
          {/* <span className="text-[#632e87] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 block"> */}
          <span className="text-xl sm:text-2xl font-bold mb-6">
            Our Mission
          </span>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 mt-4 ">
            Empowering <br />
            <span className="text-gray-300">Digital Evolution</span>
          </h3>

          <p className="text-base sm:text-lg leading-relaxed max-w-xl">
            Zervia Tech Solutions empowers businesses with tailored tech
            services, integrating development, applications, and marketing to
            drive results with innovation, professionalism, and long-term client
            value.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-5 pt-8 md:pt-16 border-t md:border-t-0 md:border-l border-gray-200 md:pl-10"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>

          <p className="leading-relaxed text-sm sm:text-base md:text-lg">
            Zervia Tech Solutions delivers innovative digital solutions, driving
            sustainable growth and operational excellence, while transforming
            businesses through technology and client-focused service for
            long-term success.
          </p>
        </motion.div>
      </section>

      {/* Partnerships */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-xs sm:text-sm font-bold tracking-widest text-[#632e87] uppercase mb-3 text-center"
          >
            Partnerships
          </motion.h2>

          <motion.h3
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 tracking-tight"
          >
            Why Zervia?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="md:col-span-7 bg-[#632e87] text-white p-6 sm:p-8 lg:p-12 rounded-3xl flex flex-col justify-start"
            >
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Excellence in Every Build
              </h4>
              <p className="text-md sm:text-lg text-emerald-100">
                We ensure high-quality, scalable, and reliable digital solutions through expert engineering.
              </p>
            </motion.div>

            <div className="md:col-span-5 flex flex-col gap-6">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white border p-6 sm:p-8 rounded-3xl shadow-sm"
              >
                <h4 className="font-bold mb-2 text-md sm:text-lg">
                  Client-Centric Collaboration
                </h4>
                <p className="text-gray-500 text-md sm:text-lg">
                  We work as an extension of your team, ensuring transparency, trust, and shared success.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white border p-6 sm:p-8 rounded-3xl shadow-sm"
              >
                <h4 className="font-bold mb-2 text-md sm:text-lg">
                  Forward-Thinking Innovation
                </h4>
                <p className="text-gray-500 text-md sm:text-lg">
                  Leveraging modern technologies, we craft solutions that keep you ahead of the competition.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-1"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 leading-snug md:leading-tight"
          >
            Our Culture of <br />
            Excellence
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mb-10 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed max-w-lg"
          >
           Behind every line of code is a team committed to precision, innovation, and performance.
            At Zervia, we craft digital experiences that are built to last and designed to lead.
          </motion.p>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {[
              { val: "15+", lab: "Years Industry Experience" },
              { val: "20+", lab: "Project Deliveries" },
              { val: "20+", lab: "Team Strength" },
              { val: "97%", lab: "Client Retention Rate" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="border-l-2 border-[#632e87] pl-4"
              >
                <div className="text-2xl sm:text-3xl font-black mb-1">
                  {stat.val}
                </div>
                <div className="text-[9px] sm:text-[10px] text-[#632e87] font-bold uppercase tracking-wider">
                  {stat.lab}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-1 lg:order-2 grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 h-[300px] sm:h-[400px] lg:h-[500px]"
        >
          <motion.div className="col-span-4 row-span-4 rounded-3xl overflow-hidden border shadow-sm">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0"
            />
          </motion.div>

          <motion.div className="col-span-2 row-span-3 rounded-3xl overflow-hidden border shadow-sm">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0"
            />
          </motion.div>

          <motion.div className="col-span-3 row-span-2 rounded-3xl overflow-hidden border shadow-sm">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0"
            />
          </motion.div>

          <motion.div className="col-span-3 row-span-3 rounded-3xl overflow-hidden border shadow-sm">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-50 py-20 sm:py-24 px-4 sm:px-6 lg:px-8  text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Your Future in Tech Starts <br /> Here!
          </h2>
          
          <Link
            href="/Contact"
            className="bg-[#632e87] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:bg-[#4d2269] transition-all shadow-lg inline-block text-sm sm:text-base"
          >
            Schedule Consultation
          </Link>
        </div>
      </motion.footer>
    </div>
  );
};

export default AboutPage;
