"use client";
import React from "react";
import { Cpu, BrainCircuit, MessageSquare, BarChart3 } from "lucide-react";

export default function AISolutions() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI & Machine Learning
        </h1>
        <p className="text-gray-400 text-xl mb-16">Automate your workflow with custom LLM integrations.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <BrainCircuit className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">Custom Chatbots</h3>
            <p className="text-gray-400">Trained on your business data for perfect customer support.</p>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <BarChart3 className="text-blue-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">Predictive Analytics</h3>
            <p className="text-gray-400">Turn your historical data into future business insights.</p>
          </div>
        </div>
      </section>
    </div>
  );
}