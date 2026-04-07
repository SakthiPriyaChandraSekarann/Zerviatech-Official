"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
];

export default function LogoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Auto scroll
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <p className="text-center text-gray-500 mb-6 text-sm uppercase tracking-wide">
          Trusted by leading companies
        </p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[120px] h-[60px] relative opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={logo}
                  alt={`client-${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}