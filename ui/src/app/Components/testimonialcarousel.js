"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr.Renganathan",
    company: "Menthe Technologies",
    review:
      "Their team delivered exceptional digital marketing support, improved our online visibility, generated quality leads, strengthened brand credibility, and helped our business achieve steady growth with measurable, consistent results.",
  },
  {
    name: "Mr.Shankar",
    company: "Sharingbooth",
    review:
      "Zervia Tech Solutions developed our app with creativity and clarity, delivering smooth performance, intuitive design, timely completion, and a truly professional digital experience. Highly recommended.",
  },
  {
    name: "Dr. Venkatesh ",
    company: "Sridevi Dental Care ",
    review:
      "Their digital strategies transformed our clinic’s online presence, increased patient trust, improved engagement, and brought consistent appointment inquiries with measurable growth.",
  },
  {
    name: "Dr. Kavya",
    company: "Indianbliss Giftzz",
    review:
      "Creative digital marketing strategies transformed our return-gift brand, increasing visibility, strengthening customer engagement, driving consistent orders, and delivering professional, dependable results. Highly recommended.",
  },
  {
    name: "Mr. Balaji ",
    company: "J Mahal",
    review:
      "They exceeded expectations by delivering seamless digital solutions with creativity, professionalism, timely execution, reliable support, and measurable results that strengthened our brand presence.",
  },
  {
    name: "Mr. Ramalingam",
    company: "Dhinadharani",
    review:
      "They built our e-newspaper platform seamlessly, ensuring strong performance, smooth accessibility, timely delivery, technical excellence, and complete professionalism throughout the entire development process.",
  },
  {
    name: "Mr. Ravi",
    company: "Aalam Photography",
    review:
      "Their creative digital approach elevated our photography brand, expanded our audience reach, improved client engagement, generated quality inquiries, and delivered consistent, measurable business growth.",
  },
];

export default function TestimonialCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 px-3 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 sm:mb-10 md:mb-12"
        >
          Testimonials
        </motion.h2>

        {/* CAROUSEL */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-4 sm:gap-6 md:gap-8 ${
              isHovered ? "pause-animation" : "animate-scroll"
            }`}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotate: 0.5,
                }}
                className="
                  w-[85%] 
                  sm:w-[300px] 
                  md:w-[320px] 
                  lg:w-[340px] 
                  xl:w-[360px]
                  flex-shrink-0 
                  bg-[#f5f5f2] 
                  rounded-2xl 
                  p-4 sm:p-5 md:p-6 
                  shadow-sm
                "
              >
                {/* NAME */}
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                  {item.name}
                </h4>

                {/* COMPANY */}
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  {item.company}
                </p>

                {/* PARA */}
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.review}
                </p>

                {/* STARS */}
                <div className="flex gap-1 mt-3 sm:mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.span
                      key={star}
                      whileHover={{ scale: 1.3 }}
                      className="text-yellow-400 text-sm sm:text-base md:text-lg cursor-pointer"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}