// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="w-full bg-white px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div className="flex-shrink-0">
//           <Link href="/" className="block">
//             <Image
//               src="/logonew.png" // place your logo in public/logo.png
//               alt="Zervia Tech"
//               width={140}
//               height={40}
//               className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto object-contain"
//               priority
//             />
//           </Link>
//         </div>
//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link
//             href="/"
//             className="text-[#34A853] font-medium border-b-2 border-[#34A853] pb-1"
//           >
//             Home
//           </Link>
//           <Link
//             href="/About"
//             className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/service"
//             className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
//           >
//             Services
//           </Link>
//           {/* <Link
//             href="/product"
//             className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
//           >
//             Product
//           </Link> */}
//           <Link
//             href="/Academy"
//             className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
//           >
//             Academy
//           </Link>
//           <Link
//             href="/Contact"
//             className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
//           >
//             Contact Us
//           </Link>
//         </div>
//         {/* Desktop Call to Action Button */}
//         <div className="hidden md:block">
//           <Link
//             href="/get-started"
//             className="bg-[#2D3663] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1e2545] transition-all shadow-sm"
//           >
//             Get Started
//           </Link>
//         </div>
//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMenu}
//             className="text-[#2D3663] focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`${isOpen ? "block" : "hidden"} md:hidden bg-white mt-4 pb-4 space-y-4`}
//       >
//         <Link
//           href="/"
//           className="block text-[#34A853] font-medium"
//           onClick={() => setIsOpen(false)}
//         >
//           Home
//         </Link>
//         <Link
//           href="/About"
//           className="block text-gray-500 font-medium"
//           onClick={() => setIsOpen(false)}
//         >
//           About Us
//         </Link>
//         <Link
//           href="/services"
//           className="block text-gray-500 font-medium"
//           onClick={() => setIsOpen(false)}
//         >
//           Services
//         </Link>
//         <Link
//           href="/product"
//           className="block text-gray-500 font-medium"
//           onClick={() => setIsOpen(false)}
//         >
//           Product
//         </Link>
//         <Link
//           href="/Academy"
//           className="block text-gray-500 font-medium"
//           onClick={() => setIsOpen(false)}
//         >
//           Academy
//         </Link>
//         <Link
//           href="/Contact"
//           className="block text-gray-500 font-medium"
//           onClick={() => setIsOpen(false)}
//         >
//           Contact Us
//         </Link>
//         <div className="pt-2">
//           <Link
//             href="/get-started"
//             className="block text-center bg-[#2D3663] text-white px-6 py-2.5 rounded-lg font-semibold"
//             onClick={() => setIsOpen(false)}
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to detect current route

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src="/logonew.png"
            alt="Zervia Tech"
            width={140}
            height={40}
            className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">

          <Link
            href="/"
            className="text-[#34A853] font-medium border-b-2 border-[#34A853] pb-1"
          >
            Home
          </Link>

          <Link
            href="/About"
            className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
          >
            About Us
          </Link>

          {/* ✅ Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-500 hover:text-[#2D3663] font-medium">
              Services
            </button>

            <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

              <Link
                href="/service/uiux"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                UI/UX & Product Design
              </Link>

              <Link
                href="/service/webdigital"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Web & Digital Platform Development
              </Link>

              <Link
                href="/service/mobileapplicaion"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Mobile Application Development
              </Link>

              <Link
                href="/service/cloudinfra"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Cloud & Infrastructure Solutions
              </Link>

              <Link
                href="/service/dataanalytics"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Data & Analytics Solutions
              </Link>

              <Link
                href="/service/digitalmarketing"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Digital Marketing & Growth
              </Link>
              

            </div>
          </div>

          <Link
            href="/Academy"
            className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
          >
            Academy
          </Link>

          <Link
            href="/Contact"
            className="text-gray-500 hover:text-[#2D3663] transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="bg-[#2D3663] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1e2545] transition-all shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#2D3663]"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-4 pb-4 space-y-4 px-2">

          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link href="/About" onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          {/* ✅ Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full text-left font-medium"
            >
              Services
            </button>

            {serviceOpen && (
              <div className="ml-4 mt-2 space-y-2">

                <Link
                  href="/service/uiux"
                  onClick={() => setIsOpen(false)}
                >
                  UI/UX & Product Design
                </Link>

                <Link
                  href="/service/webdigital"
                  onClick={() => setIsOpen(false)}
                >
                  Web & Digital Platform Development
                </Link>

                <Link
                  href="/service/mobileapplicaion"
                  onClick={() => setIsOpen(false)}
                >
                  Mobile Application Development
                </Link>

                <Link
                  href="/service/cloudinfra"
                  onClick={() => setIsOpen(false)}
                >
                  Cloud & Infrastructure Solutions
                </Link>

                <Link
                  href="/service/dataanalytics"
                  onClick={() => setIsOpen(false)}
                >
                  Data & Analytics Solutions
                </Link>

                <Link
                  href="/service/digitalmarketing"
                  onClick={() => setIsOpen(false)}
                >
                  Digital Marketing & Growth
                </Link>

              </div>
            )}
          </div>

          <Link href="/Academy" onClick={() => setIsOpen(false)}>
            Academy
          </Link>

          <Link href="/Contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>

          <div className="pt-2">
            <Link
              href="/get-started"
              className="block text-center bg-[#2D3663] text-white px-6 py-2.5 rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;