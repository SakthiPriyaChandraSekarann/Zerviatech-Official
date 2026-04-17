"use client";

import { useState, useEffect } from "react";
import { sendContactMessage } from "../apiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FiPhone, FiMail } from "react-icons/fi";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ✅ ENTRY ANIMATIONS (On Page Load)
  useEffect(() => {
    const runAnimation = async () => {
      const animeModule = await import("animejs");
      const anime = animeModule.animate || animeModule.default || animeModule;

      anime({
        targets: ".hero-title",
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 900,
        easing: "easeOutExpo",
      });

      anime({
        targets: ".hero-subtitle",
        translateY: [30, 0],
        opacity: [0, 1],
        delay: 200,
        duration: 900,
        easing: "easeOutExpo",
      });

      anime({
        targets: ".form-fields input, .form-fields textarea, .form-fields button",
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger ? anime.stagger(100) : 100,
        duration: 700,
        easing: "easeOutQuad",
      });

      anime({
        targets: ".faq-card",
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger ? anime.stagger(120) : 120,
        duration: 700,
        easing: "easeOutQuad",
      });
    };

    runAnimation();
  }, []);

  // ✅ SUCCESS FLIGHT ANIMATION (Arc Path Around Box)
  useEffect(() => {
    if (showSuccess) {
      const runSuccessAnim = async () => {
        const animeModule = await import("animejs");
        const anime = animeModule.animate || animeModule.default || animeModule;

        // Reset plane properties before animation
        anime.set(".success-plane", {
          translateX: "-50%", 
          translateY: "-50%",
          left: "0%", 
          top: "100%", // Start Bottom-Left of the message container
          rotate: "-45deg",
          opacity: 0
        });

        // Arc Path Flight around the box to land at Top-Center
        anime({
          targets: ".success-plane",
          left: ["0%", "50%"], // Center horizontally
          top: ["100%", "0%"], // Center vertically (Top of box)
          translateX: ["-50%", "-50%"], // Keep center origin
          translateY: ["-50%", "-140%"], // Land nicely above the box
          rotate: ["-45deg", "0deg"], // Straighten as it lands
          opacity: {
            value: [0, 1],
            duration: 800,
            easing: 'easeOutQuad'
          },
          duration: 2000,
          easing: "easeOutElastic(1, .6)", // Bouncy landing
        });

        // Success message text fade-in
        anime({
          targets: ".success-content-box",
          scale: [0.9, 1],
          opacity: [0, 1],
          delay: 200, // Show box first
          duration: 800,
          easing: "easeOutQuad",
        });
      };
      runSuccessAnim();
    }
  }, [showSuccess]);

  const handleHover = async (el) => {
    const animeModule = await import("animejs");
    const anime = animeModule.animate || animeModule.default || animeModule;
    anime({ targets: el, scale: 1.04, duration: 200, easing: "easeOutQuad" });
  };

  const handleLeave = async (el) => {
    const animeModule = await import("animejs");
    const anime = animeModule.animate || animeModule.default || animeModule;
    anime({ targets: el, scale: 1, duration: 200, easing: "easeOutQuad" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const result = await sendContactMessage(data);

      if (result.success) {
        setShowSuccess(true);
        form.reset();
        // Overlay clears automatically after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      alert("❌ Failed to send message: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* ✅ SUCCESS OVERLAY */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/20 backdrop-blur-xl overflow-hidden p-4">
          
          {/* Container to handle the plane's relative arc path */}
          <div className="relative success-content-box opacity-0 max-w-md w-full">
            
            {/* The Flying Plane (Positioned absolutely relative to the box) */}
            <img
              src="/email.png"
              className="success-plane absolute w-20 h-20 pointer-events-none z-10 opacity-0 transform -translate-x-1/2 -translate-y-1/2"
              alt="Paper Plane"
              style={{ left: '0%', top: '100%' }} // Initial CSS state
            />
            
            {/* The Message Box */}
            <div className="text-center p-8 bg-white/90 rounded-3xl shadow-2xl border border-purple-100 mt-20 relative">
              <h2 className="text-4xl font-bold text-[#632e87] mb-4">Hurrah!</h2>
              <p className="text-xl text-gray-700 font-medium leading-relaxed">
                Your message just landed successfully!<br />
                <span className="text-[#632e87]">We’ll contact you soon.</span>
              </p>
              <button 
                onClick={() => setShowSuccess(false)}
                className="mt-8 px-10 py-3 bg-[#632e87] text-white rounded-full font-bold shadow-lg hover:bg-[#4d2369] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ MAIN CONTENT WRAPPER */}
      <div className={`transition-all duration-700 ${showSuccess ? "blur-md scale-95 opacity-40 pointer-events-none" : "blur-0 scale-100 opacity-100"}`}>
        <div className="bg-[] min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-6 md:py-10">
          <div className="max-w-7xl mx-auto">
            {/* Top Section */}
            <div className="flex justify-center items-center min-h-[60vh] px-4">
              <div className="text-center max-w-2xl">
                <h1 className="hero-title flex flex-wrap justify-center items-baseline gap-x-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center">
                  <span>Let’s turn ideas into</span>
                  <span className="relative inline-flex items-baseline">
                    <div id="flip" className="overflow-hidden leading-tight h-[1em]">
                      <div className="text-[#632e87] animate-flip">
                        <div className="h-[1em] flex items-center justify-center">Digital Excellence!</div>
                        <div className="h-[1em] flex items-center justify-center">Innovation!</div>
                        <div className="h-[1em] flex items-center justify-center">Solutions!</div>
                        <div className="h-[1em] flex items-center justify-center">Reality!</div>
                      </div>
                    </div>
                  </span>
                </h1>
                <p className="hero-subtitle text-gray-500 mt-4 text-sm sm:text-base lg:text-xl">
                  Every big product starts with a simple conversation. Tell us what you’re thinking — we’ll shape it, build it, and bring it to life.
                </p>
                <div className="mt-6 space-y-3 text-xs sm:text-sm lg:text-lg flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <FiPhone className="text-[#632e87] text-xl" />
                    <span className="text-xl">+91 9486305577</span>
                    <FiMail className="text-[#632e87] text-xl" />
                    <span className="text-xl">contactus@zerviatech.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-10 lg:mt-14">
              {/* LEFT - FORM */}
              <div className="lg:col-span-2 bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-md ">
                <h2 className="text-lg sm:text-xl lg:text-4xl font-bold mb-6 text-[#632e87]">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4 form-fields">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="Your Name" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e2a5a]" />
                    <input name="email" type="email" placeholder="Email Address" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e2a5a]" />
                  </div>
                  <input name="phone" type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e2a5a]" />
                  <textarea name="message" rows={5} placeholder="Your Message" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e2a5a]" />
                  <button type="submit" disabled={loading} className="w-full bg-[#632e87] text-white py-3 rounded-lg text-sm sm:text-base lg:text-lg font-medium hover:bg-white hover:text-[#632e87] border-2 border-transparent hover:border-[#632e87] transition duration-300 disabled:opacity-50">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-5">
                <div className="bg-[#632e87] text-white p-5 sm:p-6 rounded-2xl shadow-md">
                  <h3 className="text-base sm:text-lg lg:text-2xl font-medium mb-3">Location</h3>
                  <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                    773A/1, (Upstair)<br />
                    8th Street, Indira Nagar 1st Cross<br />
                    K.T.C. Nagar, Tirunelveli - 627 011<br />
                    Tamil Nadu - 627011
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 lg:h-56">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.7548308071514!2d77.77269657477666!3d8.714815791334537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040dcdff14a163%3A0x35457e93fbc519f4!2sZervia%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1776402249847!5m2!1sen!2sin" className="w-full h-full border-0" loading="lazy" />
                </div>
                <div className="bg-[#632e87] p-5 sm:p-6 rounded-2xl">
                  <p className="text-base sm:text-lg lg:text-2xl mb-3 text-white font-medium">Social Networks</p>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/share/1A9agKPn2Z/" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:scale-105 hover:bg-pink-100 transition">
                      <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-sm" />
                    </a>
                    <a href="https://www.instagram.com/zerviatechsolutions/" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:scale-105 hover:bg-pink-100 transition">
                      <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-sm" />
                    </a>
                    <a href="https://www.linkedin.com/company/zervia-tech-solutions/" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:scale-105 hover:bg-pink-100 transition">
                      <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700 text-sm" />
                    </a>
                    <a href="https://x.com/Zerviaacademy" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:scale-105 hover:bg-pink-100 transition">
                      <FontAwesomeIcon icon={faTwitter} className="text-sky-500 text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 lg:mt-16">
              <h2 className="text-lg sm:text-xl lg:text-4xl font-bold mb-6 text-[#632e87]">FAQ</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { question: "Do you build both web and mobile apps?", answer: "Yes. We design and develop scalable web platforms and mobile applications tailored to your business needs." },
                  { question: "Will my idea be kept confidential?", answer: "100%. Your data and ideas are secure with us." },
                  { question: "Do you work with clients outside India?", answer: "Yes, we collaborate globally." },
                ].map((item, index) => (
                  <div key={index} onMouseEnter={(e) => handleHover(e.currentTarget)} onMouseLeave={(e) => handleLeave(e.currentTarget)} className="faq-card group bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 border-2 border-transparent hover:border-[#632e87]">
                    <div className="w-10 h-1 bg-[#632e87] rounded mb-4"></div>
                    <p className="font-semibold text-gray-800 text-2xl">{item.question}</p>
                    <p className="text-gray-500 mt-3 text-xl">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}