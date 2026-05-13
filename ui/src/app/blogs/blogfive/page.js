"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogDetail() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Top Bar */}
      <motion.div
        className="flex justify-between items-center text-sm text-gray-500 border-b pb-3 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="uppercase tracking-wide text-green-600 font-semibold">
          In Brief
        </span>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-full mb-3 relative h-[260px] md:h-[320px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/uxblog.png"
          alt="UI/UX"
          fill
          className="rounded-lg object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-2xl md:text-3xl font-semibold mb-4 leading-snug"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
         Custom Software Solutions for Lift Manufacturing Companies
      </motion.h1>

      {/* Content */}
      <motion.div
        className="text-gray-700 space-y-4 leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {[
          "Today’s fast-growing business landscape demands more than traditional processes—companies need smart digital solutions that streamline operations, boost efficiency, and support scalable growth.",
"At Zervia Tech Solutions, we craft powerful custom web applications designed to transform complex workflows into seamless digital experiences, where every feature works with precision and purpose.",
"Imagine a centralized business platform that eliminates scattered spreadsheets, manual tracking, and operational delays—replacing them with real-time visibility, automation, and intelligent process management.",
"For a leading lift manufacturing company, we engineered a complete workflow management system featuring Lead & Enquiry Tracking, Customer & Site Management, Installation Monitoring, AMC & Service Management, Automated Alerts, and advanced Analytics Dashboards that simplified every stage of operations.",
"The result was more than just software—it was a digital transformation. Automated reminders prevented missed maintenance schedules, real-time reports accelerated decision-making, and streamlined workflows improved customer satisfaction while reducing manual errors and operational bottlenecks.",
"At Zervia Tech Solutions, we believe modern web applications should do more than exist online—they should empower businesses with speed, clarity, automation, and scalable performance. Through user-focused design, intelligent development, and industry-specific solutions, we create digital systems that don’t just support business growth—they drive it forward."
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}