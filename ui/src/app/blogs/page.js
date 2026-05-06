"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    path: "blogone",
    title:
      "Software Developer Career Guide: Skills, Tools, Growth Opportunities, and Future Scope in the Tech Industry",
    category: "TECH",
    image: "/developerblog.jpg",
  },
  {
    path: "blogtwo",
    title:
      "Ignite User Hearts: Fusion of Strategic UI/UX & Graphic Design Thinking Conquers Digital Realms Today",
    category: "TECH",
    image: "/uxblog.png",
  },
  {
    path: "blogthree",
    title:
      "Artificial Intelligence Powered Cloud Technology Redefining Innovation Efficiency and Smart Digital Transformation Across Global Industries",
    category: "TECH",
    image: "/cloudblog.png",
  },
  {
    path: "blogfour",
    title:
      "Transforming Brand Visibility Through Strategic Digital Marketing, Advanced Analytics, and Immersive Customer Experience Design",
    category: "TECH",
    image: "/digitalblog.png",
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function BlogsPage() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      {/* <div className="mb-10  -ml-17 ">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#552e82]">
          Latest News
        </h1>
      </div> */}

      <div className="mb-6 ml-0 sm:mb-10 sm:-ml-6 md:ml-3 lg:ml-5 xl:-ml-17 text-center sm:text-left">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#552e82] leading-tight">
          Latest News
        </h1>
      </div>

      {/* Blog List */}
      <motion.div variants={container} initial="hidden" animate="show">
        {blogs.map((blog) => (
          <motion.div key={blog.path} variants={item}>
            <Link href={`/blogs/${blog.path}`} className="block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col sm:flex-row gap-6 py-6 border-b hover:bg-gray-50 transition cursor-pointer"
              >
                {/* Image */}
                <div className="w-full sm:w-[220px] h-[180px] sm:h-[140px] relative flex-shrink-0 overflow-hidden rounded">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p className="text-green-600 text-xs sm:text-sm font-semibold uppercase mb-1">
                    {blog.category}
                  </p>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 hover:underline leading-snug">
                    {blog.title}
                  </h2>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
