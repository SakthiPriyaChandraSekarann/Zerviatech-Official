"use client";

import Image from "next/image";
import { useState } from "react";
// import "./globals.css";

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
    <section className="w-full bg-white py-12 px-4 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-10">
          Testimonials
        </h2>

        {/* CAROUSEL */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <div className={`flex gap-6 ${isHovered ? "pause-animation" : "animate-scroll"}`}>

            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[260px] sm:w-[300px] md:w-[320px] flex-shrink-0 bg-[#f5f5f2] rounded-2xl p-5 sm:p-6 
                transition duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                
                {/* NAME */}
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {item.name}
                </h4>

                {/* COMPANY */}
                <p className="text-xs text-gray-500 mb-3">
                  {item.company}
                </p>

                {/* PARA */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.review}
                </p>

                {/* STARS */}
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-base">
                      ★
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}