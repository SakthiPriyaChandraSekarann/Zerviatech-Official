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
  `The convergence of artificial intelligence and cloud technology is reshaping how organizations innovate, compete, and deliver value in a digitally driven world. Modern cloud platforms are no longer just storage or computing solutions; they have evolved into intelligent ecosystems capable of learning, adapting, and optimizing operations in real time.`,

  `By integrating AI-driven tools, businesses can automate complex workflows, enhance predictive analytics, and uncover meaningful insights from massive datasets with remarkable speed and accuracy. This synergy enables companies to personalize customer experiences, streamline decision-making processes, and improve operational efficiency across departments.`,

  `Additionally, AI-powered cloud environments support advanced capabilities such as natural language processing, computer vision, and intelligent automation, making cutting-edge technology more accessible to enterprises of all sizes. Security is also strengthened through AI-based threat detection and response systems, ensuring proactive risk management.`,

  `Ultimately, the fusion of AI and cloud technology empowers organizations to accelerate innovation, reduce costs, and build resilient, future-ready infrastructures in an increasingly competitive global market landscape.`,

  `Beyond operational efficiency, AI-powered cloud technology is also transforming the way businesses collaborate, scale, and respond to rapidly changing market demands. Organizations can now deploy intelligent applications globally with minimal infrastructure investment, enabling faster product development and improved business agility.`,

  `Cloud-based AI solutions support remote work environments, real-time collaboration, and seamless data accessibility, allowing teams across different regions to work more efficiently and make informed decisions instantly. Industries such as healthcare, finance, manufacturing, education, retail, and logistics are increasingly adopting AI-cloud ecosystems to optimize services, predict customer behavior, and enhance overall productivity.`,

  `Furthermore, scalable cloud infrastructures help startups and enterprises alike innovate without the burden of maintaining expensive hardware systems. AI algorithms continuously analyze performance patterns, identify inefficiencies, and recommend improvements that contribute to long-term growth and sustainability.`,

  `As digital transformation accelerates worldwide, the integration of artificial intelligence with cloud computing is becoming a critical foundation for building smarter, more connected, and highly adaptive business environments capable of meeting future technological challenges with confidence and efficiency.`,
]
        .map((text, index) => (
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