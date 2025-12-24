"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eco-Friendly Lifestyle Store",
    category: "Shopify",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80",
    tags: ["UI/UX", "Development", "SEO"]
  },
  {
    title: "Premium Tech Marketplace",
    category: "Amazon",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80",
    tags: ["A+ Content", "PPC", "Ranking"]
  },
  {
    title: "Healthcare SaaS Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    tags: ["React", "Cloud", "AI"]
  },
  {
    title: "Luxury Watch Brand",
    category: "Shopify",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80",
    tags: ["Liquid", "Marketing"]
  },
  {
    title: "Gourmet Food Subscription",
    category: "Amazon",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
    tags: ["FBA", "Brand Registry"]
  },
  {
    title: "Fintech Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80",
    tags: ["Next.js", "Data Viz"]
  }
];

const categories = ["All", "Shopify", "Amazon", "Web Development"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 italic tracking-tighter">
            Our <span className="text-blue-600">Work</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A collection of digital experiences we've crafted for world-class brands.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                filter === cat 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Overlay */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{project.title}</h3>
                  </div>
                  <div className="bg-slate-900 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Link */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}