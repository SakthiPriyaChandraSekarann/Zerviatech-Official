"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogDetail() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Bar */}
      <motion.div
        className="flex justify-between items-center text-sm text-gray-500 border-b pb-3 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
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
        transition={{ delay: 0.3 }}
      >
        <Image
          src="/digitalblog.png"
          alt="Development"
          fill
          className="rounded-lg object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-2xl md:text-3xl font-semibold mb-4 leading-snug"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Transforming Brand Visibility Through Strategic Digital Marketing, Advanced Analytics,
         and Immersive Customer Experience Design
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
          `In the modern business environment, digital marketing has become the cornerstone of brand growth and customer engagement.`,
          `Companies are no longer competing solely on product quality but on how effectively they communicate value in a crowded digital space.`,
          `Strategic digital marketing combines data-driven insights with creative execution to craft campaigns that are both impactful and measurable. Advanced analytics allow marketers to understand audience behavior, preferences, and intent, enabling more precise targeting and improved conversion rates.`,
          `At the same time, immersive experiences—such as interactive content, personalized messaging, and seamless cross-platform journeys—enhance user engagement and strengthen brand perception.`,
          `A successful approach also requires adaptability, as algorithms, consumer expectations, and technologies continue to evolve rapidly. By aligning marketing strategies with business objectives and leveraging the power of innovation, organizations can create meaningful interactions that not only attract customers
           but also foster trust, loyalty, and sustained long-term success in the digital landscape.`,
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}