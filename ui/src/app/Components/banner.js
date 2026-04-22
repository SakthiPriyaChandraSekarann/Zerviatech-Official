"use client";

export default function Banner() {
  return (
    <section className="banner w-full mt-14 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16">
      
      {/* HEADER */}
      <h1 className="reveal-text w-full text-[clamp(2.2rem,7vw,8rem)] font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight break-words">
        Delivering
        <br />
        <span className="accent"> Digital Excellence </span>
        <br />
        Globally
      </h1>

      {/* SUBTEXT */}
      <p className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-gray-600 para leading-relaxed">
        Empowering enterprises with bespoke digital architecture,
        high-performance applications, and data-driven intelligence. We design
        and build scalable, secure, and future-ready solutions tailored to your
        business needs.
      </p>

      <style jsx>{`
        /* 🔥 WRAPPER BLOOM (controls both together) */
        .banner {
          animation: bloom 1.2s ease forwards;
          transform-origin: center;
          opacity: 0;
        }

        /* fade in base */
        .banner {
          animation: fadeIn 0.6s ease forwards, bloom 1.2s ease 0s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 🌸 single shared bloom */
        @keyframes bloom {
          0% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }

        /* TEXT EFFECT (no bloom here anymore) */
        .reveal-text {
          color: transparent;
          background-image: linear-gradient(
            to right,
            #111827 0%,
            #111827 50%,
            rgba(17, 24, 39, 0.2) 50%
          );
          background-size: 200% 100%;
          background-position: 100% 0;
          -webkit-background-clip: text;
          background-clip: text;

          animation: fill 4.5s linear forwards;
        }

        .accent {
          color: transparent;
          background-image: linear-gradient(
            to right,
            #632e87 0%,
            #632e87 50%,
            rgba(99, 46, 135, 0.2) 50%
          );

          background-size: 200% 100%;
          background-position: 100% 0;
          -webkit-background-clip: text;
          background-clip: text;

          animation: fill 4.5s linear forwards;
        }

        @keyframes fill {
          from {
            background-position: 100% 0;
          }
          to {
            background-position: 0 0;
          }
        }
      `}</style>
    </section>
  );
}