"use client";
import React from "react";
import { Building2, BarChart4, Ship, Briefcase, ArrowRight } from "lucide-react";

export default function VendorCentralSuccess() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative border-l-4 border-blue-600 pl-10">
            <h1 className="text-6xl font-black text-slate-900 mb-6">Vendor Central <span className="text-blue-600">Success</span></h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">Expert management for 1P relationships. We optimize your PO workflows, marketing co-ops, and vendor growth strategies.</p>
            <button className="bg-black text-white px-10 py-5 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-all uppercase tracking-widest text-xs">Partner with Us</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[Briefcase, BarChart4, Ship, Building2].map((Icon, i) => (
               <div key={i} className="bg-slate-50 aspect-square rounded-3xl flex items-center justify-center hover:bg-blue-600 group transition-all">
                 <Icon size={40} className="text-blue-600 group-hover:text-white transition-all" />
               </div>
             ))}
          </div>
        </div>
      </div>
    </main>
  );
}