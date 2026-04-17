// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Logo */}
//         <Link href="/">
//           <Image src="/logonew.png" alt="logo" width={160} height={40} />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">

//           <Link href="/" className="text-[#632e87] font-medium text-lg">
//             Home
//           </Link>

//           <Link href="/About" className="text-gray-500 font-medium text-lg">
//             About Us
//           </Link>

//           {/* ✅ Services Dropdown */}
//           <div className="relative group">
//             <button className="text-gray-500 hover:text-[#632e87] font-medium text-lg">
//               Services
//             </button>

//             <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
//               <Link href="/services/web" className="block px-4 py-2 hover:bg-gray-100">
//                 Web Development
//               </Link>
//               <Link href="/services/app" className="block px-4 py-2 hover:bg-gray-100">
//                 App Development
//               </Link>
//               <Link href="/services/uiux" className="block px-4 py-2 hover:bg-gray-100">
//                 UI/UX Design
//               </Link>
//               <Link href="/services/marketing" className="block px-4 py-2 hover:bg-gray-100">
//                 Digital Marketing
//               </Link>
//             </div>
//           </div>

//           <Link href="/Academy" className="text-gray-500 font-medium text-lg">
//             Academy
//           </Link>

//           <Link href="/Contact" className="text-gray-500 font-medium text-lg">
//             Contact Us
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-3">

//           <Link href="/">Home</Link>
//           <Link href="/About">About</Link>

//           {/* ✅ Mobile Services Dropdown */}
//           <div>
//             <button
//               onClick={() => setServiceOpen(!serviceOpen)}
//               className="w-full text-left"
//             >
//               Services
//             </button>

//             {serviceOpen && (
//               <div className="ml-4 mt-2 space-y-2">
//                 <Link href="/services/web">Web Development</Link>
//                 <Link href="/services/app">App Development</Link>
//                 <Link href="/services/uiux">UI/UX Design</Link>
//                 <Link href="/services/marketing">Digital Marketing</Link>
//               </div>
//             )}
//           </div>

//           <Link href="/Academy">Academy</Link>
//           <Link href="/Contact">Contact</Link>
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
import { usePathname } from "next/navigation"; // Hook to detect current route

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Helper function to apply active/hover styles
  const getLinkStyle = (path) => {
    const isActive = pathname === path;
    return `font-medium text-lg transition-colors duration-200 ${
      isActive ? "text-[#632e87]" : "text-gray-500 hover:text-[#632e87]"
    }`;
  };

  // Helper for mobile links
  const getMobileLinkStyle = (path) => {
    const isActive = pathname === path;
    return `block py-2 ${isActive ? "text-[#632e87] font-bold" : "text-gray-600 hover:text-[#632e87]"}`;
  };

  return (
    <nav className="w-full bg-white px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logonew.png" alt="logo" width={160} height={40} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={getLinkStyle("/")}>
            Home
          </Link>

          <Link href="/About" className={getLinkStyle("/About")}>
            About Us
          </Link>

          {/* ✅ Services Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 ${pathname.startsWith('/services') ? "text-[#632e87]" : "text-gray-500 hover:text-[#632e87]"} font-medium text-lg`}>
              Services
            </button>

            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/web" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#632e87]">
                Web Development
              </Link>
              <Link href="/services/app" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#632e87]">
                App Development
              </Link>
              <Link href="/services/uiux" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#632e87]">
                UI/UX Design
              </Link>
              <Link href="/services/marketing" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#632e87]">
                Digital Marketing
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

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-gray-600">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-50 pt-4">
          <Link href="/" className={getMobileLinkStyle("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" className={getMobileLinkStyle("/About")} onClick={() => setIsOpen(false)}>About</Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className={`w-full text-left py-2 flex justify-between items-center ${pathname.startsWith('/services') ? "text-[#632e87]" : "text-gray-600"}`}
            >
              Services <span>{serviceOpen ? "−" : "+"}</span>
            </button>

            {serviceOpen && (
              <div className="ml-4 space-y-2 border-l-2 border-gray-100 pl-4">
                <Link href="/services/web" className={getMobileLinkStyle("/services/web")} onClick={() => setIsOpen(false)}>Web Development</Link>
                <Link href="/services/app" className={getMobileLinkStyle("/services/app")} onClick={() => setIsOpen(false)}>App Development</Link>
                <Link href="/services/uiux" className={getMobileLinkStyle("/services/uiux")} onClick={() => setIsOpen(false)}>UI/UX Design</Link>
                <Link href="/services/marketing" className={getMobileLinkStyle("/services/marketing")} onClick={() => setIsOpen(false)}>Digital Marketing</Link>
              </div>
            )}
          </div>

          <Link href="/Academy" className={getMobileLinkStyle("/Academy")} onClick={() => setIsOpen(false)}>Academy</Link>
          <Link href="/Contact" className={getMobileLinkStyle("/Contact")} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;