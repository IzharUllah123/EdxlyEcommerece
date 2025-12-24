"use client";
import React from "react";
import { Cloud, ShieldCheck, Server, Globe, Cpu, Zap } from "lucide-react";

export default function CloudHosting() {
  const specs = [
    { icon: <ShieldCheck />, label: "DDoS Protection", value: "Enterprise Grade" },
    { icon: <Server />, label: "Uptime", value: "99.99% SLA" },
    { icon: <Globe />, label: "CDN", value: "Global Edge Network" },
    { icon: <Zap />, label: "Speed", value: "NVMe SSD Storage" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-white">
      {/* Header Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Cloud size={14} /> Infrastructure
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Reliable <span className="text-blue-500">Cloud</span> Solutions.
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mb-12">
          Scale your application globally with our high-performance managed hosting environments optimized for Next.js and AI workloads.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="text-blue-500 mb-3">{spec.icon}</div>
              <div className="text-sm text-gray-500">{spec.label}</div>
              <div className="text-lg font-bold">{spec.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-7xl mx-auto border border-white/10 rounded-[40px] p-8 md:p-16 bg-white/5 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Managed Auto-Scaling</h2>
              <p className="text-gray-400 mb-6">
                Never worry about traffic spikes again. Our infrastructure automatically allocates resources based on real-time demand, ensuring your app stays fast and online.
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all">
                View Server Specs
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>
              <div className="relative border border-white/20 rounded-2xl p-6 bg-black/40">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <code className="text-blue-300 text-sm">
                  $ edxly deploy --prod <br/>
                  <span className="text-green-400">✔</span> Analyzing build...<br/>
                  <span className="text-green-400">✔</span> Uploading to Global Edge...<br/>
                  <span className="text-green-400">✔</span> Deployed to 24 regions.
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}