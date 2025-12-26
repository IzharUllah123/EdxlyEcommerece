"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutAndArticles() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* --- About Section --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
              About <br /> 
              <span className="underline decoration-blue-600 underline-offset-8">Web Ecommerce Pros</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
              We are an approved vendor for all major ecommerce platforms, and that is a testament to our expertise! 
              We have vast knowledge of different shopping carts and advanced ecommerce platforms like **Shopify**, 
              **BigCommerce**, **Volusion**, **Magento**, **WooCommerce**, and more. We find intelligent solutions 
              for complex business requirements. We excel at cart migration as well.
            </p>
            <Link href="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-[#1e4eb8] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs mt-4 shadow-xl shadow-blue-100"
              >
                About Us
              </motion.button>
            </Link>
          </div>

          {/* About Image with Styled Border */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -rotate-2"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Web Ecommerce Pros Team" 
                className="w-full h-full object-cover"
              />
              {/* Logo Overlay as seen in reference */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-slate-100">
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic text-xs">W</div>
                    <span className="font-black italic text-xs tracking-tighter uppercase">Web Ecommerce Pros</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Latest Articles Section --- */}
        <div className="pt-20 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
                Latest <span className="underline decoration-blue-600 underline-offset-8">Articles</span>
              </h2>
            </div>
            <Link href="/blog">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-[#1e4eb8] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg shadow-blue-50"
              >
                Explore Articles
                <ArrowRight size={14} />
              </motion.button>
            </Link>
          </div>

          {/* Simple Blog Post Preview Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-slate-100 rounded-[2rem] mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300"></div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <BookOpen size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">E-commerce Tips</span>
                </div>
                <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                  How to Scale Your {item === 1 ? 'Shopify' : item === 2 ? 'Amazon' : 'BigCommerce'} Store in 2025
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  Discover the latest strategies and tools used by industry leaders to drive massive growth...
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}