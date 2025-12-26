"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="bg-[#05111a] py-24 px-6 text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white leading-none">
          Let&apos;s get <span className="text-blue-500">started</span>
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Get started on your ecommerce journey with a free consultation. 
          Reach out now to discuss your goals and how we can help.
        </p>

        {/* Contact Information */}
        <div className="flex flex-col items-center gap-6 pt-4">
          <Link 
            href="tel:888-711-2347" 
            className="text-white text-2xl md:text-3xl font-black italic tracking-tighter hover:text-blue-500 transition-colors flex items-center gap-3 underline underline-offset-8 decoration-blue-500"
          >
            <Phone size={24} className="text-blue-500" />
            888-711-2347
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
        </div>
      </div>
    </section>
  );
}