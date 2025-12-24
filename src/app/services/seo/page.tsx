"use client";
import React from "react";
import { Search, TrendingUp, MousePointer2, CheckCircle } from "lucide-react";

export default function SEO() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">SEO & Growth</h1>
          <p className="text-xl text-slate-600 mb-10">We don't just build sites; we make sure they get found.</p>
          
          <div className="space-y-6">
            {[
              "Keyword Research & Strategy",
              "Technical SEO Audits",
              "Content Optimization",
              "Backlink Building"
            ].map((text) => (
              <div key={text} className="flex items-center gap-4 bg-white p-4 rounded-xl border shadow-sm">
                <CheckCircle className="text-green-500" />
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}