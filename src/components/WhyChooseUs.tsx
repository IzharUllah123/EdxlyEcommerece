"use client";

import React from "react";
import { Cpu, Users, Eye, Headphones, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Full Service Agency",
    desc: "Get ecommerce design, development, maintenance and marketing solutions all under one roof. One point of contact for all of your needs.",
    icon: Cpu,
  },
  {
    title: "Account Manager",
    desc: "You'll experience fast, easy and clear communication from your dedicated project account manager based in the United States.",
    icon: Users,
  },
  {
    title: "Transparency",
    desc: "You're in complete control of your ecommerce projects with full access to monitor the status of your projects at any time.",
    icon: Eye,
  },
  {
    title: "Support",
    desc: "With around the clock support your work gets done faster and more efficiently. Day or night, someone at Edxly is here for you.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Reinventing AI Graphic */}
        <div className="relative bg-slate-50 rounded-[3rem] p-12 md:p-20 flex flex-col items-center justify-center border border-slate-100 shadow-inner">
           <div className="text-center mb-12">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 leading-tight">
                Reinventing Ecommerce
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">
                Every Pixel, Line, and Strategy
              </p>
           </div>
           
           <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 border-[12px] border-blue-600 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 border-2 border-dashed border-slate-300 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <span className="text-[120px] font-black italic text-blue-600 tracking-tighter leading-none select-none">
                AI
              </span>
           </div>
        </div>

        {/* Right Side: Content & Benefits */}
        <div className="space-y-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 italic">
              20+ Years of Unparalleled E-commerce Expertise
            </p>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-8 leading-none">
              Why <span className="underline decoration-blue-600 underline-offset-[12px]">Web Ecommerce Pros?</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
              Web Ecommerce Pros offers a seamless, end-to-end solution for your online business needs. 
              Our extensive experience in ecommerce and marketing enables us to stay ahead of industry trends.
            </p>
          </div>

          {/* 2x2 Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((item, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-3 mb-4">
                   <item.icon size={20} className="text-blue-600" />
                   <h4 className="text-xl font-black italic uppercase tracking-tighter text-slate-900">
                     {item.title}
                   </h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* --- The New Start Button --- */}
          <div className="pt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1e4eb8] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl shadow-blue-100 transition-colors hover:bg-blue-800"
            >
              Start Your Project
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}