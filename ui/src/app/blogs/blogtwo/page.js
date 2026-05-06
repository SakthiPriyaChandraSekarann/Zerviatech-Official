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
        Ignite User Hearts: Fusion of Strategic UI/UX & Graphic Design Thinking Conquers Digital Realms Today!
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
          "In today's hyper-competitive digital arena, UI/UX and graphic design fuse into a powerhouse duo, crafting immersive brand experiences that captivate and convert.",
          "Imagine interfaces that don't just look stunning—they pulse with purpose, where every pixel whispers intuition and every interaction sparks joy.",
          "Graphic design weaves emotional magic through bold color palettes that evoke trust, typography that commands attention, and imagery that tells unforgettable stories.",
          "Meanwhile, UX masters the art of frictionless journeys, prioritizing usability, inclusivity for diverse global audiences, and lightning-fast navigation that anticipates user needs. Together, they birth products that transcend beauty: meaningful masterpieces blending aesthetics with razor-sharp functionality.",
          "Yet true mastery demands ditching fleeting trends for deep user research, behavioral insights, and narrative-driven strategies. Consistency across touchpoints builds unbreakable trust; clarity eliminates confusion; empathy turns users into loyal advocates.",
          "The magic? Invisible design—seamless enough to vanish, potent enough to linger. It empowers effortless goal-crushing while forging indelible brand bonds that boost engagement sky-high. Harness iterative feedback loops and agile processes to evolve with tech leaps and shifting expectations, delivering globally professional experiences that don't just compete—they dominate.",
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