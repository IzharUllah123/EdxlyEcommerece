"use client";
import React from "react";
import { ArrowRight, BrainCircuit, Search, BarChart } from "lucide-react";

export default function AISEOPage() {
  return (
    <main className="min-h-screen bg-white pt-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">AI SEO</h1>
          <p className="text-xl text-slate-800 font-medium mb-6">
            Your online store no longer needs to guess what Google cares about; you will be ahead of it.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            With AI SEO, we don't just optimize your store for today's search algorithms. We train your site to adapt to tomorrow. By ruling large language models, natural-language understanding, and predictive analytics, your brand becomes the answer people receive when they ask their next question to AI.
          </p>
          <button className="bg-[#1e4eb8] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all">
            Get a Free Quote
          </button>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" 
            alt="AI SEO Concept" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
        </div>
      </div>
    </main>
  );
}