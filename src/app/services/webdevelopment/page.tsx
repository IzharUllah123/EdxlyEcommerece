"use client";
import React from "react";
import { Code, Rocket, Shield, Layout } from "lucide-react";

export default function WebDevelopment() {
  const features = [
    { title: "Next.js 14 Speed", desc: "Ultra-fast loading times with Server Components.", icon: Rocket },
    { title: "Responsive Design", desc: "Perfect viewing experience on mobile, tablet, and desktop.", icon: Layout },
    { title: "Secure Code", desc: "Enterprise-grade security protocols for your data.", icon: Shield },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="px-6 py-16 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-black mb-6">Web Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          We build high-performance, scalable web applications tailored to your business goals.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 border rounded-2xl hover:shadow-lg transition-shadow">
              <f.icon className="mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}