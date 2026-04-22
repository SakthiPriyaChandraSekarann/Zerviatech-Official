"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX & Product Design",
    desc: "We design simple, clear digital experiences that help people navigate effortlessly and engage confidently.",
    icon: "/uiux.png",
    link: "/service/uiux",
  },
  {
    title: "Web & Digital Platform Development",
    desc: "We build reliable websites and platforms that improve efficiency and drive consistent growth.",
    icon: "/webdevelopment.png",
    link: "/service/webdigital",
  },
  {
    title: "Mobile Application Development",
    desc: "We create mobile apps that improve engagement and help grow your business.",
    icon: "/Mobile.svg",
    link: "/service/mobileapplicaion",
  },
  {
    title: "Cloud & Infrastructure Solutions",
    desc: "We manage secure cloud systems ensuring reliability and uninterrupted operations.",
    icon: "/Cloud.svg",
    link: "/service/cloudinfra",
  },
  {
    title: "Data & Analytics Solutions",
    desc: "We turn your data into actionable insights for smarter decisions.",
    icon: "/Data & Analytics.svg",
    link: "/service/dataanalytics",
  },
  {
    title: "Digital Marketing & Growth",
    desc: "We help you reach the right audience and grow your digital presence.",
    icon: "/Digital mar.svg",
    link: "/service/digitalmarketing",
  },
];

// Duplicate for infinite scroll
const scrollingServices = [...services, ...services];

export default function Services() {
  return (
    <section className="w-full bg-[#fafafa] py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* 🔹 LEFT SIDE */}
        <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Our <span className="text-[#632e87]">Core</span> Services
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            Specialized expertise tailored for high-growth enterprises and digital disruptors.
          </p>
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="lg:w-2/3 h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden relative">

          {/* ✨ Gradient Fade */}
          <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-[#fafafa] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none" />

          {/* 🔄 Auto Scroll */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-50%" }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
          >
            {scrollingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition duration-300 aspect-[13/10] sm:aspect-[13/9] flex flex-col justify-between p-4 sm:p-5"
              >
                
                {/* TOP CONTENT */}
                <div>
                  {/* ICON */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-3 sm:mb-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={20}
                      height={20}
                      className="sm:w-[22px] sm:h-[22px]"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                {/* LINK */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-[#632e87] hover:text-green-600 transition"
                >
                  View More →
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}