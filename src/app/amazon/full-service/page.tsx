"use client";

import React from "react";
import { ShieldCheck, Globe, Zap, ArrowRight } from "lucide-react";

export default function AmazonFullService() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Full Service Amazon Agency</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">From product launch to global scaling, we handle the complexity so you can focus on your brand.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">What's Included?</h2>
            <ul className="space-y-6">
              {['Account Health Monitoring', 'FBA Inventory Management', 'Brand Registry Support', 'Case Log Resolution'].map(item => (
                <li key={item} className="flex items-center gap-4 text-slate-400">
                  <ShieldCheck className="text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-600 rounded-[3rem] p-12 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-6">Ready for 10x Growth?</h2>
            <p className="text-blue-100 mb-10">Our full-service partners see an average revenue increase of 140% in the first 6 months.</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs self-start">Consult Our Experts</button>
          </div>
        </div>
      </div>
    </main>
  );
}