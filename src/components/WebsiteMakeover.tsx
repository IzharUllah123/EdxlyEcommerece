"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

// Dummy image paths - replace with your actual portfolio screenshots
const leftColumnImages = [
  "/portfolio/p1.jpg",
  "/portfolio/p2.jpg",
  "/portfolio/p3.jpg",
  "/portfolio/p1.jpg", // Repeat for seamless loop
];

const rightColumnImages = [
  "/portfolio/p4.jpg",
  "/portfolio/p5.jpg",
  "/portfolio/p6.jpg",
  "/portfolio/p4.jpg",
  "/portfolio/p6.jpg", // Repeat for seamless loop
];

export default function WebsiteMakeover() {
  return (
    <section className="bg-[#05111a] py-24 px-6 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-blue-400">
            <CheckCircle size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest italic">Visual Evolution</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
            Our Recent <br /> 
            <span className="underline decoration-blue-500 underline-offset-[12px]">Design Projects</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            Our recent design projects reflect a harmonious blend of creativity and functionality, 
            where every line and curve is meticulously crafted to evolve emotion and enhance experiences.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
             <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all">
               Our Portfolio
             </button>
             <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
               Get Free Consultation <ArrowRight size={14} />
             </button>
          </div>
        </div>

        {/* Right Side: Continuous Moving Images */}
        <div className="relative h-[600px] grid grid-cols-2 gap-4 overflow-hidden rounded-[3rem]">
          {/* Column 1: Moving Down */}
          <motion.div 
            className="flex flex-col gap-4"
            animate={{ y: [0, -1000] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...leftColumnImages, ...leftColumnImages].map((img, i) => (
              <div key={i} className="aspect-[3/4] w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/5">
                <img src={img} alt="Project" className="w-full h-full object-cover opacity-80" />
              </div>
            ))}
          </motion.div>

          {/* Column 2: Moving Up */}
          <motion.div 
            className="flex flex-col gap-4"
            animate={{ y: [-1000, 0] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...rightColumnImages, ...rightColumnImages].map((img, i) => (
              <div key={i} className="aspect-[3/4] w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/5">
                <img src={img} alt="Project" className="w-full h-full object-cover opacity-80" />
              </div>
            ))}
          </motion.div>

          {/* Vignette Overlays for Depth */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05111a] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05111a] to-transparent z-10" />
        </div>

      </div>
    </section>
  );
}