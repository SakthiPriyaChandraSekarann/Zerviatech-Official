"use client";
// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Let&apos;s build the{" "}
              <span className="text-green-500">future</span> together.
            </h1>

            <p className="text-gray-500 mt-4 max-w-md mx-auto md:mx-0 text-sm sm:text-base lg:text-lg">
              Have a project in mind or want to say hi? We’re here to turn your
              digital ideas into architectural masterpieces. Reach out today.
            </p>

            <div className="mt-6 space-y-2 text-xs sm:text-sm lg:text-base">
              <p>📞 +91 9486305577</p>
              <p>contactus@zerviatech.com</p>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative pt-8">
            <div className="bg-gray-800 rounded-2xl h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[340px] flex items-center justify-center shadow-lg ">
              <p className="text-white opacity-50 text-sm">Image Placeholder</p>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">99%</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-10 lg:mt-14">
          {/* LEFT - FORM */}
          <div className="lg:col-span-2 bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-md">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 text-[#1e2a5a]">
              Send us a message
            </h2>

            <form className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e2a5a]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e2a5a]"
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e2a5a]"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e2a5a]"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#1e2a5a] text-white py-3 rounded-lg text-sm sm:text-base lg:text-lg font-medium hover:bg-[#16204a] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5">
            {/* Studio Card */}
            <div className="bg-[#1e2a5a] text-white p-5 sm:p-6 rounded-2xl shadow-md">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3">
                Visit Our Studio
              </h3>
              <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                27643, Jupiter St, 6th Street,
                <br />
                Indira Nagar 1st Cross, KTC Nagar,
                <br />
                Tamil Nadu - 627011
              </p>

              <button className="mt-4 text-green-400 text-sm sm:text-base hover:underline">
                Get Directions →
              </button>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 lg:h-56">
              <iframe
                src="https://maps.google.com/maps?q=Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Social */}
            <div className="bg-[#eaeaf5] p-5 sm:p-6 rounded-2xl">
              <p className="text-sm sm:text-base mb-3 text-gray-600">
                Social Networks
              </p>

              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:scale-105 hover:bg-blue-100 transition"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-blue-600 text-sm"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:scale-105 hover:bg-pink-100 transition"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-pink-500 text-sm"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:scale-105 hover:bg-blue-200 transition"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-blue-700 text-sm"
                  />
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow hover:scale-105 hover:bg-sky-100 transition"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-sky-500 text-sm"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 lg:mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold">
              Frequently asked queries
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Response Time?", "Pricing Models?", "Project Onboarding?"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow hover:shadow-md transition"
                >
                  <p className="font-medium text-sm sm:text-base lg:text-lg">
                    {item}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-2">
                    We usually respond within 24 hours with details.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
