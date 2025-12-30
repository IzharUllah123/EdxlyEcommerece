"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const leftColumnImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg", 
];

const rightColumnImages = [
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const BackgroundAtmosphere = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
    {/* Liquid Gradient Orbs */}
    <motion.div
      animate={{ x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-[60%] h-[60%] bg-blue-100/40 blur-[130px] rounded-full"
    />
    <motion.div
      animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-indigo-50/40 blur-[110px] rounded-full"
    />
    
    {/* Floating Diamond Particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-blue-600/80 shadow-[0_0_15px_rgba(30,78,184,0.1)]"
        style={{
          width: Math.random() * 25 + 10,
          height: Math.random() * 25 + 10,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ 
          y: [0, -120, 0], 
          opacity: [0.1, 0.4, 0.1], 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: Math.random() * 12 + 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    ))}
  </div>
);

export default function WebsiteMakeover() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <BackgroundAtmosphere />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <div className="flex items-center gap-2 text-blue-600">
            <CheckCircle size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Visual Evolution</span>
          </div>
          
          <h2 className="text-4xl md:text-4xl font-black italic tracking-tighter uppercase leading-[0.85] text-slate-900">
            Recent <br /> 
            <span className="text-blue-600 underline decoration-blue-100 underline-offset-[15px]">Projects</span>
          </h2>
          
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl font-medium">
            Our recent design projects reflect a harmonious blend of creativity and functionality, 
            crafted to evolve emotion and enhance digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-6">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-[#1e4eb8] text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-100 transition-all"
             >
               Our Portfolio
             </motion.button>
             <motion.button 
               whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 78, 184, 0.05)" }}
               className="border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest transition-all flex items-center gap-2"
             >
               Get Free Consultation <ArrowRight size={16} />
             </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Floating Portfolio Grid (No Container Card) */}
        <motion.div 
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative h-[700px] grid grid-cols-2 gap-6 overflow-hidden"
        >
          {/* Column 1: Moving Down */}
          <motion.div 
            className="flex flex-col gap-6"
            animate={{ y: [0, -1200] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...leftColumnImages, ...leftColumnImages, ...leftColumnImages].map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 0.98, rotateY: 5 }}
                className="aspect-[3/4] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
              >
                <img src={img} alt="Project" className="w-full h-full object-cover transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2: Moving Up */}
          <motion.div 
            className="flex flex-col gap-6 pt-20"
            animate={{ y: [-1200, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...rightColumnImages, ...rightColumnImages, ...rightColumnImages].map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 0.98, rotateY: -5 }}
                className="aspect-[3/4] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
              >
                <img src={img} alt="Project" className="w-full h-full object-cover   transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Depth Overlays to blend with background particles */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
