"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const logos = [
  "/bSnaps.svg",
  "/jMahal.svg",
  "/mentheeelogo.svg",
  "/Aalam.svg",
  "/sridevidental.svg",
  "/indianbliss.svg",
  "/sharingbooth.svg",
  "/thinatharani.svg",
  "/vishvavivaha.svg",
  "/zentravel.svg",
];

const allLogos = [...logos, ...logos];

export default function LogoCarousel() {
  const trackRef = useRef(null);

  return (
    <div className="w-full bg-white py-16 overflow-hidden mt-25">
      <div className="max-w-7xl mx-auto px-2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-black font-extrabold mb-10 text-md uppercase tracking-widest"
        >
          Trusted by leading companies
        </motion.p>

        <div className="relative">
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-center gap-12 w-max animate-marquee"
            >
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 min-w-[220px] h-[200px] flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt={`client-${index % logos.length}`}
                    width={260}
                    height={260}
                    className="object-contain scale-[2.2] hover:scale-[2.4] transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}




