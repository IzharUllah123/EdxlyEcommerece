"use client";
import React from "react";
import { Target, TrendingUp, PieChart, MousePointerClick } from "lucide-react";

export default function DedicatedAdExpert() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 font-sans italic tracking-tighter">Dedicated <span className="text-blue-600">Ad Expert</span></h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-16">Specialized Advertising management designed to maximize your ROAS and dominate the Amazon PPC landscape.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "ACoS Reduction", icon: TrendingUp, d: "Aggressive bid management to cut wasted spend." },
            { title: "Market Share", icon: Target, d: "Capturing competitor traffic through strategic placement." },
            { title: "Data Audits", icon: PieChart, d: "Deep dive reporting to find hidden revenue opportunities." }
          ].map((card) => (
            <div key={card.title} className="p-10 border border-slate-100 rounded-[2.5rem] hover:shadow-2xl transition-all">
              <card.icon className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-500 text-sm">{card.d}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}