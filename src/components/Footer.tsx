"use client";

import React from "react";
import Link from "next/link";
import { 
  Facebook, Twitter, Instagram, Youtube, Linkedin, 
  MapPin, Phone, Star 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05111a] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand & Reviews Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black italic text-xl text-white">W</div>
              <span className="text-xl font-black italic tracking-tighter uppercase text-white">Web Ecommerce Pros</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Aim to bridge gaps, foster innovation, and drive progress by developing digital experiences that are intuitive, inclusive, and inspiring.
            </p>
            {/* Trustpilot-style Review Badge */}
            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 inline-block">
               <p className="text-[10px] font-bold mb-2">Reviews 36 . Excellent</p>
               <div className="flex gap-1 text-emerald-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-white text-xs ml-2">4.7</span>
               </div>
               <div className="bg-emerald-500/10 text-emerald-500 text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest inline-block">
                  Verified Company
               </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-black italic uppercase tracking-tighter mb-8 text-sm text-white">Our Services</h4>
            <ul className="space-y-4 text-slate-400 text-xs font-medium">
              {["Ecommerce Design Agency", "Ecommerce Development", "Ecommerce Maintenance", "Ecommerce Migration", "SEO For Ecommerce", "PPC Management Company"].map((item) => (
                <li key={item}><Link href="#" className="hover:text-blue-500 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Platforms Column */}
          <div>
            <h4 className="font-black italic uppercase tracking-tighter mb-8 text-sm text-white">Platforms</h4>
            <ul className="space-y-4 text-slate-400 text-xs font-medium">
              {["Shopify Experts", "BigCommerce Partner", "Volusion Experts", "Magento Website Design", "WooCommerce Store Design", "OpenCart Store Design"].map((item) => (
                <li key={item}><Link href="#" className="hover:text-blue-500 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-black italic uppercase tracking-tighter mb-8 text-sm text-white">Locations</h4>
            <ul className="space-y-4 text-slate-400 text-xs font-medium">
              {["UAE", "New York", "Florida", "Texas", "Wyoming", "Chicago", "Minneapolis"].map((item) => (
                <li key={item}><Link href="#" className="hover:text-blue-500 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact Column */}
          <div className="space-y-8">
            <div>
              <h4 className="font-black italic uppercase tracking-tighter mb-4 text-sm text-white">Stay Up To Date</h4>
              <p className="text-slate-400 text-[10px] mb-6">Get notified about new updates, products, tips and tutorials. No spam.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-xs text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
                <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-black italic uppercase tracking-tighter text-sm text-white">Contact Us</h4>
              <p className="text-slate-400 text-[10px] font-bold">Vistabit Technologies LLC</p>
              <div className="flex items-start gap-3 text-slate-400 text-[10px]">
                <MapPin size={14} className="text-blue-500 shrink-0" />
                <span>1910 Thomes Avenue Cheyenne, WY 82001</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-[10px]">
                <Phone size={14} className="text-blue-500 shrink-0" />
                <span>888-711-2347</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social & Badges */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <Icon size={18} />
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
             <div className="bg-white px-4 py-2 rounded-lg flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-[10px] font-bold text-white">G</div>
                <span className="text-slate-900 text-[10px] font-bold">Google Partner</span>
             </div>
             <div className="bg-[#95bf47] px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-white text-[10px] font-bold">shopify partner</span>
             </div>
             <div className="bg-[#003399] px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-white text-[10px] font-bold italic">CERTIFIED</span>
                <span className="text-white text-[8px] opacity-70">BigCommerce Partner</span>
             </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
           <p>© {currentYear} Web Ecommerce Pros.</p>
           <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">About Us</Link>
              <Link href="#" className="hover:text-white transition-colors">Reviews</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Shop</Link>
              <Link href="#" className="hover:text-white transition-colors">Blog</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}