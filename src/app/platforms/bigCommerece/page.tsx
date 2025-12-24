"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Zap, Shield, BarChart3, Globe, Layers } from "lucide-react";

// --- STEP 1: CUSTOMIZE THIS DATA FOR EACH PAGE ---
const platformInfo = {
  name: "BigCommerce", // Change to Magento, Amazon, etc.
  tagline: "Open SaaS Performance",
  description: "Leverage the scalability of BigCommerce to build fast, secure, and modern headless commerce stores.",
  stats: [
    { label: "Average Growth", value: "45%" },
    { label: "Load Speed", value: "1.2s" },
    { label: "Mobile Conversion", value: "+22%" }
  ],
  features: [
    { title: "Custom Theme Design", desc: "Unique, brand-first designs built specifically for your target audience.", icon: Zap },
    { title: "App & API Integration", desc: "Connecting your store to ERPs, CRMs, and custom fulfillment logic.", icon: Layers },
    { title: "Platform Migration", desc: "Moving your data safely with zero downtime and SEO preservation.", icon: Globe },
    { title: "Growth Marketing", desc: "Data-driven strategies to keep your customer acquisition costs low.", icon: BarChart3 }
  ]
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              {platformInfo.tagline}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Enterprise <span className="text-blue-600">{platformInfo.name}</span> Development & Strategy
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              {platformInfo.description}
            </p>
            <button className="bg-[#1e4eb8] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
              Start Your Project <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformInfo.stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Why Edxly for {platformInfo.name}?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">We combine technical excellence with e-commerce psychology to build stores that actually sell.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platformInfo.features.map((feature) => (
            <div key={feature.title} className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-slate-900 text-white text-center px-6 mx-6 rounded-[2.5rem] mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Ready to supercharge your {platformInfo.name} store?</h2>
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-50 transition-colors">
          Get A Free Consultation
        </button>
      </section>
    </main>
  );
}