// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);
//   const pathname = usePathname();

//   // Desktop link style
//   const getLinkStyle = (path) => {
//     const isActive = pathname === path;
//     return `font-medium text-lg transition-colors duration-200 ${
//       isActive ? "text-[#632e87]" : "text-black hover:text-[#632e87]"
//     }`;
//   };

//   // Mobile link style
//   const getMobileLinkStyle = (path) => {
//     const isActive = pathname === path;
//     return `block py-2 ${
//       isActive
//         ? "text-[#632e87] font-bold"
//         : "text-gray-600 hover:text-[#632e87]"
//     }`;
//   };

//   return (
//     <nav className="w-full bg-white px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Logo */}
//         <Link href="/" onClick={() => setIsOpen(false)}>
//           <Image src="/logonew.png" alt="logo" width={160} height={40} />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="/" className={getLinkStyle("/")}>
//             Home
//           </Link>

//           <Link href="/About" className={getLinkStyle("/About")}>
//             About Us
//           </Link>

//           {/* Services Dropdown */}
//           <div className="relative group">
//             <button
//               className={`flex items-center gap-1 font-medium text-lg ${
//                 pathname.startsWith("/service")
//                   ? "text-[#632e87]"
//                   : "text-black hover:text-[#632e87]"
//               }`}
//             >
//               Services
//             </button>

//             <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
//               <Link href="/service/webdigital" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#632e87]">
//                 Web Development
//               </Link>
//               <Link href="/service/mobileapplicaion" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#632e87]">
//                 App Development
//               </Link>
//               <Link href="/service/uiux" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#632e87]">
//                 UI/UX Design
//               </Link>
//               <Link href="/service/cloudinfra" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#632e87]">
//                 Cloud & Infrastructure
//               </Link>
//               <Link href="/service/digitalmarketing" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#632e87]">
//                 Digital Marketing
//               </Link>
//               <Link href="/service/dataanalytics" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#632e87]">
//                 Data & Analytics
//               </Link>
//             </div>
//           </div>

//           <Link href="/Academy" className={getLinkStyle("/Academy")}>
//             Academy
//           </Link>


//           <Link href="/Contact" className={getLinkStyle("/Contact")}>
//             Contact Us
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-2xl text-gray-600"
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-50 pt-4">
          
//           <Link href="/" className={getMobileLinkStyle("/")} onClick={() => setIsOpen(false)}>
//             Home
//           </Link>

//           <Link href="/About" className={getMobileLinkStyle("/About")} onClick={() => setIsOpen(false)}>
//             About
//           </Link>

//           {/* Mobile Services Dropdown */}
//           <div>
//             <button
//               onClick={() => setServiceOpen(!serviceOpen)}
//               className={`w-full text-left py-2 flex justify-between items-center transition ${
//                 pathname.startsWith("/service")
//                   ? "text-[#632e87]"
//                   : "text-gray-600"
//               }`}
//             >
//               Services
//               <span
//                 className={`transition-transform duration-300 ${
//                   serviceOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>

//             {/* Animated Dropdown */}
//             <div
//               className={`ml-4 overflow-hidden transition-all duration-300 ${
//                 serviceOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="space-y-2 border-l-2 border-gray-100 pl-4">
                
//                 <Link href="/service/webdigital" className={getMobileLinkStyle("/service/webdigital")} onClick={() => { setIsOpen(false); setServiceOpen(false); }}>
//                   Web Development
//                 </Link>

//                 <Link href="/service/mobileapplicaion" className={getMobileLinkStyle("/service/mobileapplicaion")} onClick={() => { setIsOpen(false); setServiceOpen(false); }}>
//                   App Development
//                 </Link>

//                 <Link href="/service/uiux" className={getMobileLinkStyle("/service/uiux")} onClick={() => { setIsOpen(false); setServiceOpen(false); }}>
//                   UI/UX Design
//                 </Link>

//                 <Link href="/service/cloudinfra" className={getMobileLinkStyle("/service/cloudinfra")} onClick={() => { setIsOpen(false); setServiceOpen(false); }}>
//                   Cloud & Infra
//                 </Link>

//                 <Link href="/service/digitalmarketing" className={getMobileLinkStyle("/service/digitalmarketing")} onClick={() => { setIsOpen(false); setServiceOpen(false); }}>
//                   Digital Marketing
//                 </Link>

//                 <Link href="/service/dataanalytics" className={getMobileLinkStyle("/service/dataanalytics")} onClick={() => { setIsOpen(false); setServiceOpen(false); }}>
//                   Data Analytics
//                 </Link>

//               </div>
//             </div>
//           </div>

//           <Link href="/Academy" className={getMobileLinkStyle("/Academy")} onClick={() => setIsOpen(false)}>
//             Academy
//           </Link>


//           <Link href="/Contact" className={getMobileLinkStyle("/Contact")} onClick={() => setIsOpen(false)}>
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;


"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const pathname = usePathname();

  const getLinkStyle = (path) => {
    const isActive = pathname === path;
    return `font-medium text-lg transition-colors duration-200 ${
      isActive ? "text-[#632e87]" : "text-black hover:text-[#632e87]"
    }`;
  };

  const getMobileLinkStyle = (path) => {
    const isActive = pathname === path;
    return `block py-2 ${
      isActive
        ? "text-[#632e87] font-bold"
        : "text-gray-600 hover:text-[#632e87]"
    }`;
  };

  return (
    <nav className="w-full bg-white px-4 sm:px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="/logonew.png"
            alt="logo"
            width={160}
            height={40}
            className="w-[120px] sm:w-[140px] lg:w-[160px]"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-8">
          
          <Link href="/" className={getLinkStyle("/")}>
            Home
          </Link>

          <Link href="/About" className={getLinkStyle("/About")}>
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium text-lg ${
                pathname.startsWith("/service")
                  ? "text-[#632e87]"
                  : "text-black hover:text-[#632e87]"
              }`}
            >
              Services
              {/* <span>▼</span> */}
            </button>

            <div
              className={`absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-lg border border-gray-200 transition-all duration-200 ${
                serviceOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link href="/service/webdigital" className="block px-4 py-2 hover:bg-gray-50">
                Web Development
              </Link>
              <Link href="/service/mobileapplicaion" className="block px-4 py-2 hover:bg-gray-50">
                App Development
              </Link>
              <Link href="/service/uiux" className="block px-4 py-2 hover:bg-gray-50">
                UI/UX Design
              </Link>
              <Link href="/service/cloudinfra" className="block px-4 py-2 hover:bg-gray-50">
                Cloud & Infrastructure
              </Link>
              <Link href="/service/digitalmarketing" className="block px-4 py-2 hover:bg-gray-50">
                Digital Marketing
              </Link>
              <Link href="/service/dataanalytics" className="block px-4 py-2 hover:bg-gray-50">
                Data & Analytics
              </Link>
            </div>
          </div>

          <Link href="/Academy" className={getLinkStyle("/Academy")}>
            Academy
          </Link>

          <Link href="/Contact" className={getLinkStyle("/Contact")}>
            Contact Us
          </Link>
        </div>

        {/* MOBILE + TABLET HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-gray-700"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE + TABLET MENU */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-6 space-y-3 border-t pt-4">
          
          <Link href="/" className={getMobileLinkStyle("/")} onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link href="/About" className={getMobileLinkStyle("/About")} onClick={() => setIsOpen(false)}>
            About
          </Link>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full text-left py-2 flex justify-between items-center text-gray-600"
            >
              Services
              <span>{serviceOpen ? "▲" : "▼"}</span>
            </button>

            {serviceOpen && (
              <div className="ml-4 mt-2 space-y-3 border-l-2 border-gray-200 pl-4">
                
                <Link href="/service/webdigital" className="block text-gray-700 hover:text-[#632e87]">
                  Web Development
                </Link>

                <Link href="/service/mobileapplicaion" className="block text-gray-700 hover:text-[#632e87]">
                  App Development
                </Link>

                <Link href="/service/uiux" className="block text-gray-700 hover:text-[#632e87]">
                  UI/UX Design
                </Link>

                <Link href="/service/cloudinfra" className="block text-gray-700 hover:text-[#632e87]">
                  Cloud & Infrastructure
                </Link>

                <Link href="/service/digitalmarketing" className="block text-gray-700 hover:text-[#632e87]">
                  Digital Marketing
                </Link>

                <Link href="/service/dataanalytics" className="block text-gray-700 hover:text-[#632e87]">
                  Data & Analytics
                </Link>

              </div>
            )}
          </div>

          <Link href="/Academy" className={getMobileLinkStyle("/Academy")} onClick={() => setIsOpen(false)}>
            Academy
          </Link>

          <Link href="/Contact" className={getMobileLinkStyle("/Contact")} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;