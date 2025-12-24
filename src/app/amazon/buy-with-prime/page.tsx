"use client";
import React from "react";
import { ShoppingCart, Zap, CheckCircle, Smartphone } from "lucide-react";

export default function BuyWithPrime() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full inline-block font-bold text-xs uppercase mb-8">Amazon Trust on Your Site</div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-10">Buy with <span className="text-blue-600">Prime</span> Setup</h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-16">Converting shoppers on your own storefront by leveraging the speed and trust of Amazon Prime shipping and checkout.</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
           {["Fast, Free Delivery", "Seamless Checkout", "Prime Trust Badge", "Simplified Returns"].map(t => (
             <div key={t} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4 font-bold text-slate-800">
               <CheckCircle className="text-blue-600" /> {t}
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}