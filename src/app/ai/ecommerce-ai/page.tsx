"use client";
import React from "react";
import { Zap, Target, ShoppingCart } from "lucide-react";

export default function EcommerceAIPage() {
  return (
    <main className="min-h-screen bg-slate-900 pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
          Future of Commerce
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-8">
          Ecommerce AI Optimization
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
          Unlock hidden revenue with AI-driven personalization, dynamic pricing, and predictive inventory management tailored for your specific platform.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Predictive Analytics", icon: Target, desc: "Forecast demand with 95% accuracy." },
            { title: "Dynamic Personalization", icon: Zap, desc: "Show every user exactly what they want to buy." },
            { title: "Automated Insights", icon: ShoppingCart, desc: "Real-time auditing of your sales funnel." }
          ].map((card) => (
            <div key={card.title} className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all text-left">
              <card.icon className="text-blue-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}