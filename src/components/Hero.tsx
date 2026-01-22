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
      <section className="relative w-full pt-32 pb-16 px-6 md:px-12 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-white">
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          
          {/* Left Content - Motion remains as you requested */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-8">
              <span className="text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                Global Ecommerce Agency
              </span>
            </div>

            <h1 className="text-4xl md:text-4xl font-black text-slate-900 leading-[0.9] mb-8 italic tracking-tighter uppercase">
              Ecommerce <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Accelerated </span> by Intelligence
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
    className="relative overflow-hidden bg-blue-600 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-blue-100 group"
  >
    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
    <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-3">
      Get a Free Consultation <ArrowRight size={18} />
    </span>
  </motion.button>
</div>
          </motion.div>

          {/* Right Visuals - Static Image Change Only */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Fixed Image Container: No motion, proportional size */}
            <div className="relative w-full max-w-[550px] aspect-[16/10] rounded-2xl overflow-hidden border-8 border-white shadow-2xl bg-slate-50">
              <img 
                src="Hero.png" 
                alt="Digital Solutions Visual" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Subtle background element to prevent "emptiness" without moving */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50" />
          </div>
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