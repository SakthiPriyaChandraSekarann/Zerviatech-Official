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
          "Today’s digital-first marketplace demands more than just a basic online store—businesses need intelligent eCommerce solutions that deliver seamless shopping experiences, stronger customer engagement, and scalable growth opportunities.",

          "At Zervia Tech Solutions, we develop modern eCommerce platforms that transform traditional selling into powerful digital commerce experiences, combining performance, design, and business-focused functionality.",

          "Imagine an online store where every product showcase feels immersive, every checkout process is frictionless, and every feature is built to maximize conversions while simplifying business management behind the scenes.",

          "Our eCommerce solutions include advanced features such as flexible discount management, custom-designed themes, real-time order tracking, SEO optimization, Android & iOS mobile applications, secure payment integration, and detailed analytics dashboards that help businesses manage operations with confidence and efficiency.",

          "The result is more than just an online website—it’s a complete digital selling ecosystem. Businesses gain faster order management, improved customer satisfaction, better sales insights, and a scalable platform capable of supporting long-term growth in competitive online markets.",

          "At Zervia Tech Solutions, we believe eCommerce platforms should do more than display products—they should create impactful digital experiences that strengthen brands, increase customer loyalty, and accelerate business success through innovation, usability, and scalable technology solutions.",
        ]
        .map((text, i) => (
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