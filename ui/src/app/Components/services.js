"use client";

import Image from "next/image";

const services = [
  {
    title: "UI/UX & Product Design",
    desc: "We design simple, clear digital experiences that help people navigate effortlessly, engage confidently, and achieve their goals through intuitive, user-friendly, and visually appealing solutions.",
    icon: "/uiux.png",
  },
  {
    title: "Web & Digital Platform Development",
    desc: "We build reliable websites and platforms that support your daily business work, improve efficiency, enhance productivity, streamline operations, strengthen online presence, and drive consistent growth.",
    icon: "/webdevelopment.png",
  },
  {
    title: "Mobile Application Development",
    desc: "We create mobile apps that help you reach customers, improve engagement, streamline operations, enhance user experience, boost productivity, and grow your business with smart digital solutions.",
    icon: "/Mobile.svg",
  },
  {
    title: "Cloud & Infrastructure Solutions",
    desc: "We manage secure cloud systems so your business runs without worry, ensuring data protection, reliable performance, seamless access, strong security, and uninterrupted operations every day.",
    icon: "/Cloud.svg",
  },
  {
    title: "Data & Analytics Solutions",
    desc: "We manage secure cloud systems so your business runs without worry, ensuring data protection, reliable performance, seamless access, strong security, and uninterrupted operations every day.",
    icon: "/Data & Analytics.svg",
  },
  {
    title: "Digital Marketing & Growth",
    desc: "We manage secure cloud systems so your business runs without worry, ensuring data protection, reliable performance, seamless access, strong security, and uninterrupted operations every day.",
    icon: "/Digital mar.svg",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#fafafa] py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900">
            Our Core Services
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized expertise tailored for high-growth enterprises and digital disruptors.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              
              {/* TOP */}
              <div>
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={22}
                    height={22}
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* VIEW MORE */}
              <div className="mt-4">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-600 transition">
                  View More
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}