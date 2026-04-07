// import React from 'react';
// import Link from 'next/link';
// import { Camera, Briefcase } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     solutions: [
//       { name: 'UI/UX Design', href: '#' },
//       { name: 'Website Development', href: '#' },
//       { name: 'Business Applications', href: '#' },
//       { name: 'Digital Marketing', href: '#' },
//     ],
//     products: [
//       { name: 'Matrimony Website', href: '#' },
//       { name: 'Order Management System', href: '#' },
//       { name: 'Temple Mobile App', href: '#' },
//       { name: 'B2B Management System', href: '#' },
//     ],
//     support: [
//       { name: 'Help Center', href: '#' },
//       { name: 'Privacy Policy', href: '#' },
//       { name: 'Terms of Service', href: '#' },
//       { name: 'Contact Support', href: '#' },
//     ],
//   };

//   return (
//     <footer className="bg-[#1e2029] text-gray-400 py-16 px-6 md:px-12 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
//           {/* Brand Section */}
//           <div className="space-y-6">
//             <h2 className="text-white text-2xl font-semibold tracking-tight">Zervia Tech</h2>
//             <p className="text-[14px] leading-relaxed max-w-[240px] text-gray-400">
//               Innovative tech solutions for modern businesses. 
//               From UI/UX to Enterprise Systems.
//             </p>
//             <div className="flex items-center space-x-5 pt-2">
//               <Link href="#" className="hover:text-white transition-all duration-300">
//                 <Camera size={20} strokeWidth={1.5} />
//               </Link>
//               <Link href="#" className="hover:text-white transition-all duration-300">
//                 <Briefcase size={20} strokeWidth={1.5} />
//               </Link>
//             </div>
//           </div>

//           {/* Solutions Column */}
//           <div className="flex flex-col">
//             <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-7">Solutions</h3>
//             <ul className="space-y-4">
//               {footerLinks.solutions.map((link) => (
//                 <li key={link.name}>
//                   <Link href={link.href} className="text-[14px] hover:text-white transition-colors duration-200">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products Column */}
//           <div className="flex flex-col">
//             <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-7">Products</h3>
//             <ul className="space-y-4">
//               {footerLinks.products.map((link) => (
//                 <li key={link.name}>
//                   <Link href={link.href} className="text-[14px] hover:text-white transition-colors duration-200">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support Column */}
//           <div className="flex flex-col">
//             <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-7">Support</h3>
//             <ul className="space-y-4">
//               {footerLinks.support.map((link) => (
//                 <li key={link.name}>
//                   <Link href={link.href} className="text-[14px] hover:text-white transition-colors duration-200">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500">
//           <p>© {currentYear} Zervia Tech Solutions. All rights reserved.</p>
          
//           <div className="flex items-center mt-6 md:mt-0 opacity-80">
//             <span className="relative flex h-2 w-2 mr-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//             </span>
//             <p className="tracking-wide">
//               System Status: <span className="text-gray-300 ml-1">Operational</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import Link from 'next/link';
import { Camera, Briefcase } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'UI/UX Design', href: '#' },
      { name: 'Website Development', href: '#' },
      { name: 'Business Applications', href: '#' },
      { name: 'Digital Marketing', href: '#' },
    ],
    products: [
      { name: 'Matrimony Website', href: '#' },
      { name: 'Order Management System', href: '#' },
      { name: 'Temple Mobile App', href: '#' },
      { name: 'B2B Management System', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Contact Support', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#1e2029] text-gray-400 py-12 md:py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: 1 col on mobile, 2 cols on tablet (sm), 4 cols on desktop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          
          {/* Brand Section - Centered on mobile, left-aligned on tablet+ */}
          <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-white text-2xl font-semibold tracking-tight">Zervia Tech</h2>
            <p className="text-[14px] leading-relaxed max-w-[240px] text-gray-400">
              Innovative tech solutions for modern businesses. 
              From UI/UX to Enterprise Systems.
            </p>
            <div className="flex items-center space-x-5 pt-2">
              <Link href="#" className="hover:text-white transition-all duration-300">
                <Camera size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="hover:text-white transition-all duration-300">
                <Briefcase size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-5 md:mb-7">Solutions</h3>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-5 md:mb-7">Products</h3>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-5 md:mb-7">Support</h3>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Stacks on mobile, side-by-side on tablet+ */}
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center text-[12px] text-gray-500 gap-4 md:gap-0">
          <p className="text-center md:text-left text-[11px] md:text-[12px]">
            © {currentYear} Zervia Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;