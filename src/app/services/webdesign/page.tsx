"use client";
import React from "react";
import { Palette, MousePointerClick, Layers, Eye } from "lucide-react";

export default function WebDesign() {
  const designProcess = [
    { step: "01", title: "Wireframing", desc: "Mapping out the user journey and structure." },
    { step: "02", title: "UI Design", desc: "Creating high-fidelity visuals and branding." },
    { step: "03", title: "Prototyping", desc: "Interactive mockups to test the feel of the site." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="px-6 py-16 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
          <Palette size={32} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          Design that <span className="text-pink-600">Converts.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-12">
          We blend artistic creativity with user-psychology to build interfaces that are as functional as they are beautiful.
        </p>

        {/* Design Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full mt-8">
          {designProcess.map((item) => (
            <div key={item.step} className="group p-8 border rounded-3xl hover:bg-black hover:text-white transition-all duration-300 text-left">
              <span className="text-4xl font-bold opacity-20 group-hover:opacity-100 transition-opacity">
                {item.step}
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">User-First UX Strategy</h2>
            <div className="flex gap-4">
              <div className="flex-shrink-0"><Eye className="text-pink-600" /></div>
              <p className="text-gray-600 font-medium">Visual Hierarchy that guides users toward your CTA.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0"><MousePointerClick className="text-pink-600" /></div>
              <p className="text-gray-600 font-medium">Intuitive navigation to reduce bounce rates.</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="h-40 bg-pink-200 rounded-2xl animate-pulse"></div>
            <div className="h-40 bg-gray-200 rounded-2xl mt-8"></div>
          </div>
        </div>
      </section>
    </div>
  );
}