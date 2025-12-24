"use client";

import React from "react";
import { Search, ArrowRight, CheckCircle2, BarChart3, Target } from "lucide-react";

export default function AmazonSEO() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              Amazon Search Mastery
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Amazon <span className="text-blue-600">SEO</span> & Visibility
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Your products deserve the first page. We optimize your listings to dominate the A9 algorithm, ensuring higher rankings and lower acquisition costs.
            </p>
            <button className="bg-[#1e4eb8] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-lg">
              Boost My Rankings
            </button>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" alt="SEO Analytics" className="w-full h-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Keyword Research", icon: Search, desc: "Identifying high-intent terms your customers actually use." },
            { title: "Listing Optimization", icon: Target, desc: "Perfecting titles, bullets, and backend terms for indexing." },
            { title: "Competitor Analysis", icon: BarChart3, desc: "Tracking competitor gaps to steal their market share." }
          ].map((item) => (
            <div key={item.title} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <item.icon className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}