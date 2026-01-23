"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // 1. Added Variants import
import ConsultationModal from "./ConsultationModal";
import ParticleBackground from "./ParticleBackground";

const changingWords = [
  "Web Development",
  "Video Editing & AI Content",
  "Online Education",
  "Creative Marketing",
  "Graphic Designing",
  "Social Media Management",
  "SEO Optimization",
  "AI & Automation"
];

// --- ANIMATION VARIANTS (Fixed Typing) ---

// 2. Explicitly added ': Variants' type to all objects below
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -600 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 600 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center bg-black overflow-hidden">
        
        {/* --- BACKGROUND --- */}
        <div className="absolute inset-0 z-0 opacity-300">
             <ParticleBackground />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none">
           <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
              <path fill="#ffffff" fillOpacity="1" d="M0,320 L0,100 L400,320 Z"></path>
           </svg>
        </div>

        {/* --- CONTENT --- */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-[-50px]">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* 1. Subtitle - FROM LEFT */}
            <motion.h3 variants={slideFromLeft} className="text-xl md:text-2xl font-medium mb-4">
              <span className="text-red-600">Infynix International</span>
              <span className="text-gray-300">, Think Growth—Think Infynix</span>
            </motion.h3>

            {/* 2. Main Title - FROM RIGHT */}
            <motion.h1 variants={slideFromRight} className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              Best Digital <span className="text-red-600">Services</span> Agency
            </motion.h1>

            {/* 3. Changing Words - FROM LEFT */}
            <motion.div variants={slideFromLeft} className="h-16 mb-6 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-2xl md:text-4xl font-semibold text-gray-200 uppercase tracking-wide"
                >
                  {changingWords[currentWordIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* 4. Description - FROM RIGHT */}
            <motion.p variants={slideFromRight} className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl mx-auto mb-10">
              We deliver scalable, end-to-end business solutions across ecommerce design and development, 
              maintenance and migration, SEO, PPC management, and social media strategy, 
              Brand Launching & Opening Corporate Festive/Events, Talent Acquisition and Media Production 
              —serving diverse industries and locations. A Complete business solutions!!
            </motion.p>

            {/* 5. Buttons - FROM LEFT */}
            <motion.div variants={slideFromLeft} className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-12 py-3 transition-all duration-300 shadow-lg shadow-red-900/30 rounded-md"
              >
                Contact Us
              </button>
              
              <button 
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-12 py-3 transition-all duration-300 shadow-lg shadow-red-900/30 rounded-md"
              >
                About Us
              </button>
            </motion.div>
            
          </motion.div>

        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}