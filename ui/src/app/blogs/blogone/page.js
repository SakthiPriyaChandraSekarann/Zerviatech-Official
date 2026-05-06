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
          src="/developerblog.jpg"
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
        Software Developer Career Guide: Skills, Tools, Growth Opportunities,
        and Future Scope in the Tech Industry
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
          `A software developer plays a crucial role in building the digital world we interact with every day. From mobile apps to large-scale web platforms, developers design, code, test, and maintain software solutions.`,
          `They help improve user experience and business efficiency through well-structured and optimized applications. Their work ensures that digital products run smoothly and reliably.`,
          `Developers commonly use programming languages such as JavaScript, Python, and Java. These technologies help them create scalable and high-performance software solutions.`,
          `In today’s technology-driven environment, the demand for skilled developers is growing rapidly. Companies of all sizes are constantly looking for talented professionals. To succeed, developers need strong analytical thinking, creativity, and problem-solving skills. Continuous learning is also important to keep up with evolving technologies.`,
          `There are multiple career paths like frontend, backend, and full-stack development. Overall, software development offers excellent growth, competitive salaries, and global opportunities.`,
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