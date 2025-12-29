"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Search, PenTool, ArrowLeftRight, CheckCircle, 
  Code, Megaphone, Share2, Settings, ShoppingCart 
} from "lucide-react";

const mainServices = [
  {
    title: "AI-SEO / GEO",
    desc: "AI search platforms are becoming the new way to discover products. We optimize your brand for generational and generative search.",
    icon: Search,
  },
  {
    title: "Design",
    desc: "What makes any design an exceptional design is its uniqueness and originality. Grab your customer's attention with a custom theme.",
    icon: PenTool,
  },
  {
    title: "Migration",
    desc: "If you have decided to migrate over to a better platform for your website, you are at the right place with years of experience.",
    icon: ArrowLeftRight,
  },
];

const subServices = [
  { title: "Development", desc: "Custom solutions for your ecommerce website. Our developers specialize in advanced store features and mobile app development.", icon: Code, link: "Custom Web Development" },
  { title: "SEO", desc: "We use proven ecommerce SEO strategies to improve your rankings for your website, brand, and individual product pages.", icon: Search, link: "Ecommerce SEO" },
  { title: "PPC", desc: "Certified partners building successful pay-per-click campaigns for businesses of all sizes to track and improve results.", icon: Megaphone, link: "Ecommerce PPC" },
  { title: "Social Media", desc: "We take the headaches out of running social accounts. We post, respond, and engage with your customers personally.", icon: Share2 },
  { title: "Maintenance", desc: "Your website needs consistent care to stay secure and smooth. We handle checks, updates, and backups so you don't have to.", icon: Settings },
  { title: "Amazon", desc: "Selling on Amazon requires more than just great products. We optimize your listings and ads to reach more customers globally.", icon: ShoppingCart }
];

// Persistent Background Orbs & Particles matching Hero component
const BackgroundAtmosphere = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"
    />
    <motion.div
      animate={{ x: [0, -50, 0], y: [0, 80, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-600/10 blur-[100px] rounded-full"
    />
    {/* Top-shaped particles */}
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-blue-400/20"
        style={{
          width: Math.random() * 20 + 10,
          height: Math.random() * 20 + 10,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ y: [0, -100, 0], opacity: [0.1, 0.4, 0.1], rotate: [0, 360] }}
        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
      />
    ))}
  </div>
);

export default function ServiceGrid() {
  return (
    <section className="relative bg-[#05111a] py-24 px-6 text-white overflow-hidden min-h-screen">
      <BackgroundAtmosphere />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Drops from Up to Down when in view */}
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-8 mb-20 border-l-2 border-blue-600 pl-8"
        >
          <div className="flex-1">
             <div className="flex items-center gap-2 text-blue-400 mb-4">
                <CheckCircle size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest italic">Customized Solutions</span>
             </div>
             <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
               Explore <br /> <span className="underline decoration-blue-500 underline-offset-[12px]">Our Services</span>
             </h2>
          </div>
          <div className="flex-1 flex items-end">
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
              Unlock the full potential of your ecommerce venture with our comprehensive suite of services. 
              From captivating design to industry-specific AI expertise.
            </p>
          </div>
        </motion.div>

        {/* Main Highlight Cards - Staggered Drop Down */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24">
          {mainServices.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black italic uppercase mb-4 tracking-tighter">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Service Grid - Staggered Drop Down */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-20 border-t border-white/10 pt-20">
          {subServices.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="flex flex-col group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-blue-600 transition-all">
                <item.icon size={24} />
              </div>
              <h4 className="text-xl md:text-2xl font-black italic uppercase mb-4 tracking-tighter">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {item.desc}
              </p>
              {item.link && (
                <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-blue-500 hover:text-white transition-colors">
                  {item.link} <span className="text-lg">↗</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}