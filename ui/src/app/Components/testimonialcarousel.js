"use client";

import Image from "next/image";
import { useState } from "react";
// import "./globals.css";

const testimonials = [
  {
    name: "Arun Kumar",
    company: "CEO, TechCorp",
    review:
      "Exceptional service and high-quality solutions. Our business scaled faster than expected.",
  },
  {
    name: "Priya Sharma",
    company: "Founder, StartupX",
    review:
      "Professional team with deep technical expertise. Highly recommended.",
  },
  {
    name: "Rahul Das",
    company: "Manager, FinEdge",
    review:
      "Reliable and scalable solutions. They truly understand business needs.",
  },
  {
    name: "Sanjay Patel",
    company: "Director, BuildPro",
    review:
      "Top-notch development and support. Great experience overall.",
  },
  {
    name: "Meena Iyer",
    company: "COO, SoftLink",
    review:
      "Their UI/UX and performance optimization are outstanding.",
  },
  {
    name: "Vikram Singh",
    company: "CTO, Nexa",
    review:
      "Highly skilled team delivering enterprise-grade solutions.",
  },
  {
    name: "Karthik R",
    company: "Founder, DevHub",
    review:
      "Smooth process and excellent communication throughout the project.",
  },
  {
    name: "Anjali Verma",
    company: "Marketing Head, BrandCo",
    review:
      "Helped us improve engagement and conversions significantly.",
  },
  {
    name: "Deepak Nair",
    company: "Lead, CloudNet",
    review:
      "Robust cloud solutions with great scalability and uptime.",
  },
  {
    name: "Sneha Kapoor",
    company: "HR, TalentPro",
    review:
      "Very professional and easy to work with. Delivered on time.",
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