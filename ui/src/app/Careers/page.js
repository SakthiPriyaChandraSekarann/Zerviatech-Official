"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { Upload, User, Mail, Phone, MapPin, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    experience: "",
    qualification: "",
    job: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/api/career/apply", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (result.success) {
        alert("Application submitted successfully!");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  // Animation Variants for a "Premium" feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-x-hidden">
      {/* Hero Section with Parallax-style entrance */}
      <motion.div 
        initial={{ height: "40vh", opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="py-32 px-6 text-center"
      >
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[#632e87]"
        >
          Join Our Creative Team
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-2xl mx-auto text-lg md:text-xl font-light text-[#632e87]"
        >
          We’re looking for talented individuals to help us build the future. 
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 -mt-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: Info (Sticky & Staggered) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-10">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-[#632e87]">Why Join Us?</motion.h3>
              <div className="space-y-6">
                {[
                  { t: "Learn & Evolve", d: "Innovate every single day with modern tech." },
                  { t: "Work-Life Balance", d: "Flexible schedules that actually work for you." },
                  { t: "Growth Path", d: "Clear career trajectory and performance rewards." }
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4">
                    <div className="bg-indigo-50 p-2 rounded-lg h-fit">
                      <CheckCircle2 className="text-[#632e87]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form (Slide & Scale) */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#632e87]" />
              
              <h2 className="text-3xl font-bold mb-10 text-slate-800">
                Apply Now
              </h2>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
              >
                {[
                  { name: "name", label: "Full Name", icon: <User size={18}/>, type: "text" },
                  { name: "email", label: "Email Address", icon: <Mail size={18}/>, type: "email" },
                  { name: "phone", label: "Phone Number", icon: <Phone size={18}/>, type: "text" },
                  { name: "location", label: "Current Location", icon: <MapPin size={18}/>, type: "text" },
                ].map((field) => (
                  <motion.div variants={itemVariants} key={field.name} className="group">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block ml-1">{field.label}</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#632e87] transition-colors">
                        {field.icon}
                      </span>
                      <input
                        type={field.type}
                        name={field.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-[#632e87] outline-none transition-all"
                        placeholder={`Enter ${field.label}`}
                        required
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block ml-1">Qualification</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#632e87]"><GraduationCap size={18}/></span>
                    <select
                      name="qualification"
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-[#632e87] outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select Level</option>
                      <option>B.E / B.Tech</option>
                      <option>M.E / M.Tech</option>
                      <option>MCA / M.Sc</option>
                      <option>BCA / B.Sc</option>
                      <option>Others</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block ml-1">Role</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#632e87]"><Briefcase size={18}/></span>
                    <select
                      name="job"
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-[#632e87] outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select Position</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Full Stack Developer</option>
                      <option>UI/UX Designer</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="md:col-span-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block ml-1">Resume</label>
                  <motion.label 
                    whileHover={{ borderColor: "#632e87", backgroundColor: "#fdfaff" }}
                    whileTap={{ scale: 0.995 }}
                    className="border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center flex flex-col items-center justify-center gap-3 transition-all cursor-pointer bg-slate-50 group"
                  >
                    <input
                      type="file"
                      name="file"
                      onChange={handleChange}
                      className="hidden"
                      required
                    />
                    <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                        <Upload className="text-[#632e87]" size={28} />
                    </div>
                    <span className="text-slate-600 font-semibold text-lg">
                      {formData.file ? formData.file.name : "Drop your CV here"}
                    </span>
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">Max 5MB • PDF Only</span>
                  </motion.label>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.01, 
                    boxShadow: "0 20px 25px -5px rgba(99, 46, 135, 0.2)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#632e87] text-white font-bold py-5 px-2 rounded-2xl shadow-xl transition-all text-lg tracking-wide uppercase"
                >
                  Submit Application
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


