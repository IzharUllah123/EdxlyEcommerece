"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion"; // Add Variants to your import

export default function FinalCTA() {
  // Explicitly typing as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="bg-slate-900 py-24 px-6 text-center border-t border-white/5 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view; once: true prevents it re-triggering
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Main Heading */}
       <motion.h2
  variants={itemVariants}
  className="text-3xl md:text-4xl font-black italic tracking-normal uppercase text-white leading-none"
>
  <span className="text-blue-500">Start</span>
  <span className="ml-3">Your Digital Journey Today</span>
</motion.h2>


        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
        >
          Begin your digital transformation with a free consultation.
Share your goals and discover how we build smart, scalable solutions.
        </motion.p>

        {/* Contact Information */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center gap-6 pt-4"
        >
          <Link 
            href="tel:888-711-2347" 
            className="text-white text-2xl md:text-3xl font-black italic tracking-tighter hover:text-blue-500 transition-colors flex items-center gap-3 underline underline-offset-8 decoration-blue-500"
          >
            <Phone size={24} className="text-blue-500" />
            315-288-0008
          </Link>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-black/20"
              >
                Contact Us
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}