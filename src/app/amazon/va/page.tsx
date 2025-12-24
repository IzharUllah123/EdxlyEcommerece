"use client";
import React from "react";
import { Users, Headset, Box, ClipboardCheck, ArrowRight } from "lucide-react";

export default function AmazonVA() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">Operations Support</div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">Dedicated <span className="text-blue-600">Amazon VA</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">Skilled Virtual Assistance to handle daily operations, customer support, and administrative tasks, allowing you to focus on growth.</p>
            <button className="bg-[#1e4eb8] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-lg">Hire a VA</button>
          </div>
          <div className="bg-slate-100 rounded-[3rem] p-12 flex flex-col gap-6">
             {[{icon: Headset, t: "Customer Support"}, {icon: Box, t: "Inventory Mgmt"}, {icon: ClipboardCheck, t: "Order Processing"}].map((item, i) => (
               <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
                 <item.icon className="text-blue-600" /> <span className="font-bold text-slate-800">{item.t}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </main>
  );
}