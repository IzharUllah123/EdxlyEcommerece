"use client";
import React from "react";
import { Sparkles, BarChart, Rocket, ArrowRight } from "lucide-react";

export default function AmazonAdsManagement() {
  return (
    <main className="min-h-screen pt-32 bg-slate-50">
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-[4rem] shadow-sm border border-slate-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="p-8">
             <h1 className="text-5xl font-black mb-6 italic">Amazon <span className="text-blue-600">Ads</span> Management</h1>
             <p className="text-lg text-slate-600 mb-10">Scaling your brand with Sponsored Products, Sponsored Brands, and Display Ads tailored for your ROI goals.</p>
             <div className="space-y-4">
                {["Video Ad Production", "Brand Store Design", "DSP Management"].map(f => (
                  <div key={f} className="flex items-center gap-3 font-bold text-slate-800"><Sparkles className="text-yellow-400" size={18}/> {f}</div>
                ))}
             </div>
          </div>
          <div className="bg-blue-600 rounded-[3rem] p-16 text-white text-center">
             <Rocket size={60} className="mx-auto mb-6" />
             <h2 className="text-3xl font-bold mb-4">Ready to Scale?</h2>
             <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest">Get Started</button>
          </div>
        </div>
      </section>
    </main>
  );
}