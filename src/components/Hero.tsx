"use client";

import React, { useState } from "react";
import { Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ConsultationModal from "./ConsultationModal";

const partners = [
  { name: "WORDPRESS", img: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" },
  { name: "opencart", img: "https://cdn.worldvectorlogo.com/logos/opencart.svg" },
  { name: "BIGCOMMERCE", img: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg" },
  { name: "shopify", img: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
];



export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Ensure the section is relative and has a z-index container */}
      <section className="relative w-full pt-32 pb-16 px-6 md:px-12 overflow-hidden min-h-[90vh] flex flex-col justify-center">

        {/* Content Container is at z-10 */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-8">
              <span className="text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                Ecommerce Agency
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] mb-8 italic tracking-tighter uppercase">
              Ecommerce <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Supercharged</span> by AI
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-12 font-medium">
              Uniting world-class design and AI intelligence to deliver faster, smarter, 
              and more profitable ecommerce ecosystems.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1e4eb8] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-blue-100"
              >
                Get a Free Consultation <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* 3D Main Image */}
           

            {/* Background 3D Code Card */}
            <motion.div 
              animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-2/3 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl hidden md:block z-0"
            >
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400" alt="Code Development" className="w-full h-auto" />
            </motion.div>
          </motion.div>
        </div>

        {/* --- CONTINUOUS LOGO MARQUEE --- */}
        <div className="w-full mt-32 border-t border-slate-200 pt-12 overflow-hidden relative z-10">
          <div className="flex w-max items-center animate-infinite-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center gap-6 px-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group"
              >
                <img src={partner.img} alt={partner.name} className="h-8 w-auto object-contain" />
                <span className="font-black text-slate-900 text-xl uppercase italic tracking-tighter">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
