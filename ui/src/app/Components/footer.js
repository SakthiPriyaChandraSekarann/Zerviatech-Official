// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// // ✅ FontAwesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedinIn,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.15 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     solutions: [
//       { name: "UI/UX & Product Design", href: "/service/uiux" },
//       { name: "Web & Digital Platform", href: "/service/webdigital" },
//       { name: "Mobile App Development", href: "/service/mobileapplicaion" },
//       { name: "Cloud & Infrastructure", href: "/service/cloudinfra" },
//       { name: "Data & Analytics", href: "/service/dataanalytics" },
//       { name: "Digital Marketing", href: "/service/digitalmarketing" },
//     ],
//     support: [
//       { name: "Terms Of Service", href: "/termsofservice" },
//       { name: "Privacy Policy", href: "/privacy-policy" },
//       { name: "GDPR Compliance", href: "/gdprcompliance" },
//       { name: "Cookie Policy", href: "/cookiepolicy" },
//     ],
//   };

//   return (
//     <footer className="bg-[#1e2029] text-gray-400 py-20 px-4 sm:px-6 lg:px-16 ">
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto"
//       >
//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          
//           {/* Brand */}
//           <motion.div
//             variants={fadeUp}
//             className="flex flex-col items-center sm:items-start text-center sm:text-left"
//           >
//             <div className="relative w-[160px] h-[50px]">
//               <Image
//                 src="/logooo.png"
//                 alt="Zervia Logo"
//                 fill
//                 className="object-contain opacity-80 hover:opacity-100 transition duration-300"
//                 priority
//               />
//             </div>

//             <p className="text-[15px] leading-7 mt-4 max-w-[300px]">
//               Innovative tech solutions for modern businesses. From UI/UX to Enterprise Systems.
//             </p>
//           </motion.div>

//           {/* Solutions */}
//           <motion.div variants={fadeUp}>
//             <div className="ml-10">
//             <h3 className="text-white text-[14px] font-bold uppercase tracking-[0.2em] mb-6">
//               Solutions
//             </h3>

//             <ul className="grid grid-cols-1 gap-y-3">
//               {footerLinks.solutions.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-[14px] hover:text-white transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             </div>
//           </motion.div>

//           {/* Support */}
//           <motion.div variants={fadeUp}>
//              <div className="ml-10">
//             <h3 className="text-white text-[14px] font-bold uppercase tracking-[0.2em] mb-6">
//               Support
//             </h3>

//             <ul className="space-y-3">
//               {footerLinks.support.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-[14px] hover:text-white transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             </div>
//           </motion.div>

//           {/* Social Media */}
//           <motion.div variants={fadeUp}>
//             <h3 className="text-white text-[14px] font-bold uppercase tracking-[0.2em] mb-6">
//               Social Media
//             </h3>

//             <div className="flex gap-3">
//               <a
//                 href="https://www.facebook.com/share/1A9agKPn2Z/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 hover:bg-blue-100 transition"
//               >
//                 <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-sm" />
//               </a>

//               <a
//                 href="https://www.instagram.com/zerviatechsolutions/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 hover:bg-pink-100 transition"
//               >
//                 <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-sm" />
//               </a>

//               <a
//                 href="https://www.linkedin.com/company/zervia-tech-solutions/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 hover:bg-blue-100 transition"
//               >
//                 <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700 text-sm" />
//               </a>

//               <a
//                 href="https://x.com/Zerviaacademy"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-100 transition"
//               >
//                 <FontAwesomeIcon icon={faTwitter} className="text-sky-500 text-sm" />
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom */}
//         <motion.div
//           variants={fadeUp}
//           className="text-center text-[13px] text-gray-500 pt-8 border-t border-gray-700/50"
//         >
//           © {currentYear} Zervia Tech Solutions. All rights reserved.
//         </motion.div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;



"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ✅ FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: "UI/UX & Product Design", href: "/service/uiux" },
      { name: "Web & Digital Platform", href: "/service/webdigital" },
      { name: "Mobile App Development", href: "/service/mobileapplicaion" },
      { name: "Cloud & Infrastructure", href: "/service/cloudinfra" },
      { name: "Data & Analytics", href: "/service/dataanalytics" },
      { name: "Digital Marketing", href: "/service/digitalmarketing" },
    ],
    support: [
      { name: "Terms Of Service", href: "/termsofservice" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "GDPR Compliance", href: "/gdprcompliance" },
      { name: "Cookie Policy", href: "/cookiepolicy" },
    ],
  };

  return (
    <footer className="bg-[#1e2029] text-gray-400 py-16 sm:py-20 px-4 sm:px-6 lg:px-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="relative w-[140px] sm:w-[160px] h-[45px] sm:h-[50px]">
              <Image
                src="/logooo.png"
                alt="Zervia Logo"
                fill
                className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                priority
              />
            </div>

            <p className="text-[14px] sm:text-[15px] leading-7 mt-4 max-w-[300px]">
              Innovative tech solutions for modern businesses. From UI/UX to Enterprise Systems.
            </p>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={fadeUp}
            className="text-center sm:text-left"
          >
            <h3 className="text-white text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] mb-6">
              Solutions
            </h3>

            <ul className="grid grid-cols-1 gap-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] sm:text-[14px] hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            variants={fadeUp}
            className="text-center sm:text-left"
          >
            <h3 className="text-white text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] mb-6">
              Support
            </h3>

            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] sm:text-[14px] hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={fadeUp}
            className="text-center sm:text-left"
          >
            <h3 className="text-white text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] mb-6">
              Social Media
            </h3>

            <div className="flex justify-center sm:justify-start gap-3">
              <a
                href="https://www.facebook.com/share/1A9agKPn2Z/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 hover:bg-blue-100 transition"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-sm" />
              </a>

              <a
                href="https://www.instagram.com/zerviatechsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 hover:bg-pink-100 transition"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-sm" />
              </a>

              <a
                href="https://www.linkedin.com/company/zervia-tech-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 hover:bg-blue-100 transition"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700 text-sm" />
              </a>

              <a
                href="https://x.com/Zerviaacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-100 transition"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-sky-500 text-sm" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          className="text-center text-[12px] sm:text-[13px] text-gray-500 pt-6 sm:pt-8 border-t border-gray-700/50"
        >
          © {currentYear} Zervia Tech Solutions. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;