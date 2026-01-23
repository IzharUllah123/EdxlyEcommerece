"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

// --- ANIMATION VARIANTS ---

// 1. Horizontal Slide (For "About Us" section)
const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// 2. Vertical Drop (For "Why Choose Us" section)
const dropFromTop: Variants = {
  hidden: { opacity: 0, y: -100 }, // Starts 100px UP
  visible: { 
    opacity: 1, 
    y: 0, // Lands at natural position
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function AboutUs() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      
      {/* Background Particles (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
           <ParticleBackground />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-32"> 
        
        {/* =========================================
            SECTION 1: ABOUT US (Slides from Sides)
           ========================================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromLeft}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600 rounded-full"></span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Infinix Int. is driven by a powerful mission: to redefine the future of
              business globally. We deliver scalable, end-to-end business
              solutions across ecommerce design and development, maintenance
              and migration, SEO, PPC management, and social media strategy.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Our expertise also spans website development, branding, digital marketing, 
              ecommerce solutions, brand launching and opening corporate festive
              events, content writing, lead generation, talent acquisition, media,
              and production.
            </p>

            <button className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white px-10 py-4 rounded-md text-sm font-bold uppercase tracking-wider shadow-xl shadow-red-900/20 hover:shadow-red-900/40 transition-all active:scale-95 group">
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                Talk to Our Expert <ArrowRight size={18} />
              </span>
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromRight}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="About Team" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>

        </div>

        {/* =========================================
            SECTION 2: WHY CHOOSE US (Drops from Top)
           ========================================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={dropFromTop} // CHANGED: Now drops from top
            className="relative order-2 lg:order-1" 
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-white">
              <img 
                src="https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-6909.jpg" 
                alt="Why Choose Us Illustration" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={dropFromTop} // CHANGED: Now drops from top
            className="order-1 lg:order-2"
          >
             <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-100 rounded-full">
              Best Company
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Why <span className="text-red-600">Choose</span> Infinix Int
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Infinix stands out as a trusted partner because we deliver complete,
              scalable business solutions that seamlessly combine strategy,
              creativity, and technology. We build websites, work across social
              media, and help launch new brands and reinvigorate others.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              It's not just what we create that really matters, but rather the impact it has on
              our client's business. We translate creative ideas and concepts into
              impactful communication. More than a service provider, Infinix is a
              long-term growth partner.
            </p>

            <button className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white px-10 py-4 rounded-md text-sm font-bold uppercase tracking-wider shadow-xl shadow-red-900/20 hover:shadow-red-900/40 transition-all active:scale-95 group">
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                Schedule A Meeting <Calendar size={18} />
              </span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}