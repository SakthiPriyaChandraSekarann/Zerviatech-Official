// "use client";

// import Image from "next/image";

// export default function BlogDetail() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       {/* Top Bar */}
//       <div className="flex justify-between items-center text-sm text-gray-500 border-b pb-3 mb-6">
//         <span className="uppercase tracking-wide text-green-600 font-semibold">
//           In Brief
//         </span>
//       </div>

//       {/* Image */}

//       <div className="w-full mb-3 relative h-[260px] md:h-[320px]">
//         <Image
//           src="/dummyimg.jpg"
//           alt="Cloud Technology"
//           fill
//           className="rounded-lg object-cover"
//         />
//       </div>

//       {/* Title */}
//       <h1 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
//        Artificial Intelligence Powered Cloud Technology Redefining Innovation Efficiency and Smart Digital Transformation Across Global Industries
//       </h1>

//       {/* Content */}
//       <div className="text-gray-700 space-y-4 leading-relaxed">
//         <p>
//          The convergence of artificial intelligence and cloud technology is reshaping how
//           organizations innovate, compete, and deliver value in a digitally driven world.
//         </p>

//         <p>
//            Modern cloud platforms are no longer just storage or computing solutions;
//            they have evolved into intelligent ecosystems capable of learning, adapting,
//            and optimizing operations in real time. 
//         </p>

//         <p>
//            By integrating AI-driven tools, businesses can automate complex workflows, enhance predictive analytics,
//            and uncover meaningful insights from massive datasets with remarkable speed and accuracy. 
//         </p>

//         <p>
//            This synergy enables companies to personalize customer experiences, 
//            streamline decision-making processes, and improve operational efficiency across departments.
//         </p>

//         <p>
//           Additionally, AI-powered cloud environments support advanced capabilities such as natural language processing, computer vision,
//           and intelligent automation, making cutting-edge technology more accessible to enterprises of all sizes
//         </p>

//         <p>
//           Security is also strengthened through AI-based threat detection and response systems, ensuring proactive risk management.
//           Ultimately, the fusion of AI and cloud technology empowers organizations to accelerate innovation, reduce costs,
//           and build resilient, future-ready infrastructures in an increasingly competitive global market landscape.
//         </p>
//       </div>
//     </div>
//   );
// }



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
          and intelligent automation, making cutting-edge technology more accessible to enterprises of all sizes`,

          `Security is also strengthened through AI-based threat detection and response systems, ensuring proactive risk management.
          Ultimately, the fusion of AI and cloud technology empowers organizations to accelerate innovation, reduce costs,
          and build resilient, future-ready infrastructures in an increasingly competitive global market landscape.`,
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