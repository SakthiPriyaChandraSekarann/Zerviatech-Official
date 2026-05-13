"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogDetail() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Bar */}
      <motion.div
        className="flex justify-between items-center text-sm text-gray-500 border-b pb-3 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="uppercase tracking-wide text-green-600 font-semibold">
          In Brief
        </span>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-full mb-3 relative h-[260px] md:h-[320px]"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/cloudblog.png"
          alt="Cloud Technology"
          fill
          className="rounded-lg object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-2xl md:text-3xl font-semibold mb-4 leading-snug"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Artificial Intelligence Powered Cloud Technology Redefining Innovation
        Efficiency and Smart Digital Transformation Across Global Industries
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
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          `The convergence of artificial intelligence and cloud technology is reshaping how
          organizations innovate, compete, and deliver value in a digitally driven world.`,

          `Modern cloud platforms are no longer just storage or computing solutions;
          they have evolved into intelligent ecosystems capable of learning, adapting,
          and optimizing operations in real time.`,

          `By integrating AI-driven tools, businesses can automate complex workflows, enhance predictive analytics,
          and uncover meaningful insights from massive datasets with remarkable speed and accuracy.`,

          `This synergy enables companies to personalize customer experiences,
          streamline decision-making processes, and improve operational efficiency across departments.`,

          `Additionally, AI-powered cloud environments support advanced capabilities such as natural language processing, computer vision,
          and intelligent automation, making cutting-edge technology more accessible to enterprises of all sizes.`,

          `Security is also strengthened through AI-based threat detection and response systems, ensuring proactive risk management.
          Ultimately, the fusion of AI and cloud technology empowers organizations to accelerate innovation, reduce costs,
          and build resilient, future-ready infrastructures in an increasingly competitive global market landscape.`,

          `The rapid advancement of artificial intelligence combined with cloud computing is transforming industries by enabling smarter, faster,
          and more scalable digital solutions across global markets.`,

          `Organizations today rely on cloud-based AI systems to improve collaboration, automate repetitive tasks,
          and enhance productivity while reducing the complexity of managing large-scale infrastructures.`,

          `With the power of machine learning and real-time data processing, businesses can identify patterns,
          forecast future trends, and make informed strategic decisions with greater confidence and efficiency.`,

          `AI-driven cloud technologies also support innovation in sectors such as healthcare, education, finance,
          and e-commerce by delivering personalized services and intelligent user experiences.`,

          `Furthermore, scalable cloud environments provide flexibility for companies to expand operations seamlessly
          while maintaining performance, reliability, and accessibility from anywhere in the world.`,

          `In addition, the integration of AI with cloud platforms has significantly improved cybersecurity systems
          by detecting threats, preventing data breaches, and responding to risks in real time.`,

          `Businesses can now store and analyze massive amounts of information securely without investing heavily
          in physical infrastructure.`,

          `Cloud-based AI tools also encourage remote collaboration by allowing teams to work efficiently from
          different locations through smart communication and project management systems.`,

          `Startups and enterprises alike benefit from cost-effective cloud services that reduce operational expenses
          while increasing opportunities for innovation.`,

          `As technology continues to evolve, AI and cloud computing will play a major role in shaping the future
          of digital transformation, enabling organizations to adapt quickly to market changes, customer expectations,
          and emerging global technological trends with greater agility, efficiency, and sustainability.`,
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}