"use client";

import React from "react";
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
  {
    title: "Development",
    desc: "Custom solutions for your ecommerce website. Our developers specialize in advanced store features and mobile app development.",
    icon: Code,
    link: "Custom Web Development"
  },
  {
    title: "SEO",
    desc: "We use proven ecommerce SEO strategies to improve your rankings for your website, brand, and individual product pages.",
    icon: Search,
    link: "Ecommerce SEO"
  },
  {
    title: "PPC",
    desc: "Certified partners building successful pay-per-click campaigns for businesses of all sizes to track and improve results.",
    icon: Megaphone,
    link: "Ecommerce PPC"
  },
  {
    title: "Social Media",
    desc: "We take the headaches out of running social accounts. We post, respond, and engage with your customers personally.",
    icon: Share2,
  },
  {
    title: "Maintenance",
    desc: "Your website needs consistent care to stay secure and smooth. We handle checks, updates, and backups so you don't have to.",
    icon: Settings,
  },
  {
    title: "Amazon",
    desc: "Selling on Amazon requires more than just great products. We optimize your listings and ads to reach more customers globally.",
    icon: ShoppingCart,
  }
];

export default function ServiceGrid() {
  return (
    <section className="bg-[#05111a] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Platform Logos Placeholder */}
        <div className="flex flex-wrap justify-center gap-12 opacity-50 mb-24 grayscale hover:grayscale-0 transition-all">
          {['Shopify', 'BigCommerce', 'WooCommerce', 'Magento', 'OpenCart'].map((logo) => (
            <span key={logo} className="text-xl font-bold tracking-tighter italic">{logo}</span>
          ))}
        </div>

        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 border-l-2 border-white/10 pl-8">
          <div className="flex-1">
             <div className="flex items-center gap-2 text-blue-400 mb-4">
                <CheckCircle size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest italic">Customized Solutions for every stage</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
               Explore <br /> <span className="underline decoration-blue-500 underline-offset-[12px]">Our Services</span>
             </h2>
          </div>
          <div className="flex-1 flex items-end">
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Unlock the full potential of your ecommerce venture with our comprehensive suite of services at Edxly. 
              From captivating design that converts visitors into customers to industry-specific expertise in SEO, 
              advertising, and social media.
            </p>
          </div>
        </div>

        {/* Main 3 Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {mainServices.map((item, i) => (
            <div key={i} className="group">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <item.icon size={36} />
              </div>
              <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tighter italic">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Service Grid */}
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-20 border-t border-white/10 pt-20">
          {subServices.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6">
                <item.icon size={24} />
              </div>
              <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tighter italic">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {item.desc}
              </p>
              {item.link && (
                <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-blue-500 transition-colors">
                  {item.link} <span className="text-lg">↗</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}