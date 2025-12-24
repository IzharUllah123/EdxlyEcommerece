"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cpu } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

// Add an array for your logos and their corresponding icons
const partners = [
//  { name: "Magento", img: "https://cdn.worldvectorlogo.com/logos/magento-2.svg" },
  { name: "WORDPRESS", img: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" },
  { name: "opencart", img: "https://cdn.worldvectorlogo.com/logos/opencart.svg" },
 
  { name: "BIGCOMMERCE", img: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg" },
  { name: "shopify", img: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative lg:ml-6 w-full pt-24 pb-16 px-12 md:pt-18 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Ecommerce Agency
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 leading-[1.1] mb-6">
              Ecommerce Supercharged by <span className="text-blue-600">AI</span> for Performance & Growth
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
              Uniting world-class design, advanced development, and data-driven marketing 
              with AI intelligence to deliver faster, smarter, and more profitable ecommerce ecosystems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1e4eb8] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-blue-800 transition-all shadow-lg"
              >
                Get a Free Consultation
              </button>
            </div>
          </div>

          {/* Right Visuals (Keeping your existing logic) */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl rotate-1 group transition-transform hover:rotate-0 duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1522071823992-b48e163bc40e?auto=format&fit=crop&q=80&w=800" 
                 alt="Team working with AI"
                 className="w-full h-auto object-cover"
               />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-xl flex flex-col items-center border border-gray-100">
                  <div className="bg-black p-2 rounded-lg text-white mb-1"><Cpu size={24} /></div>
                  <span className="text-[10px] font-bold text-black">AI</span>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 rounded-xl overflow-hidden border-4 border-white shadow-2xl -rotate-2 hidden md:block">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400" alt="Code Development" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* --- CONTINUOUS LOGO MARQUEE SECTION --- */}
        <div className="w-full mt-24 border-t pt-10 overflow-hidden">
          <div className="flex w-[200%] animate-infinite-scroll">
            {/* We render the list twice to create the infinite loop effect */}
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center gap-4 px-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  className="h-8 w-auto object-contain"
                />
                <span className="font-bold text-slate-900 text-lg whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}