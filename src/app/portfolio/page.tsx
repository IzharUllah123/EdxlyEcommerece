"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Updated Data: 'logo' is now active
const projects = [
  {
    title: "High-Performance E-commerce Store",
    client: "Ttelgo",
    // Make sure to add your actual logo file path here if you have one
     logo: "/LogoUpdated.png", 
    category: "Shopify",
    link: "https://ttelgo.com",
    description: "A comprehensive Shopify development project for Ttelgo. We built a scalable, mobile-first e-commerce experience focused on speed and conversion. The new design features intuitive navigation, a streamlined checkout process, and a modern aesthetic that perfectly aligns with the brand identity.",
    image: "/ttelgo.png",
    tags: ["Development", "Shopify", "UI/UX"]
  },
 {
    title: "Modern Digital Experience",
    client: "Spark",
    // logo: "/spark-logo.png", // Uncomment and add your logo path here
    category: "Web Development",
    link: "https://spark-ten-chi.vercel.app/",
    description: "A complete digital transformation for Spark. We built a dynamic, responsive website focused on user engagement and brand storytelling. The platform features high-performance animations, an optimized SEO structure, and a streamlined navigation system that significantly improved user retention and site speed.",
    image: "/Spark.png", // Make sure to name your screenshot 'spark.png' and put it in the public folder
    tags: ["React", "Performance", "UI/UX"]
  },
  {
    title: "Premium Tech Marketplace",
    client: "TechFlow",
    logo: "https://via.placeholder.com/150x40/ffffff/000000?text=TechFlow",
    category: "Amazon",
    description: "A complete overhaul of the Amazon brand presence, including A+ content design, store optimization, and a strategic PPC campaign that increased ROI by 150% within the first quarter.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80",
    tags: ["A+ Content", "PPC", "Ranking"]
  },
  {
    title: "Luxury Watch Brand",
    client: "Chronos",
    logo: "https://via.placeholder.com/150x40/ffffff/000000?text=Chronos",
    category: "Shopify",
    description: "Designed a custom Shopify Liquid theme that emphasizes luxury and heritage. Implemented advanced filtering, high-resolution image galleries, and a seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80",
    tags: ["Liquid", "Marketing", "Branding"]
  }
];



export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* --- HEADER SECTION --- */}
      <div className="w-full bg-[#05111a] py-20 md:py-28 mb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
           <span className="text-blue-600">Our</span>  Portfolio
          </h1>
          <p className="text-sm md:text-base font-bold text-white tracking-widest uppercase mb-2">
            Explore our recent case studies and the results we have delivered for our clients.
          </p>
          
        </div>
      </div>

      {/* --- PROJECTS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col gap-24 md:gap-32">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Image Section */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-xl transition-transform duration-500 hover:scale-[1.02]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover shadow-2xl rounded-xl"
                  />
                  <div className="absolute -z-10 inset-0 bg-blue-50 transform translate-x-4 translate-y-4 rounded-xl" />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                
                {/* --- LOGO LOGIC HERE --- */}
                {project.logo ? (
                  <img 
                    src={project.logo} 
                    alt={`${project.client} Logo`} 
                    className="h-12 w-auto mb-6 object-contain opacity-90" 
                  />
                ) : (
                  // Fallback to text if no logo exists
                  <h3 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
                    {project.client}
                  </h3>
                )}
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                   {project.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded">
                       {tag}
                     </span>
                   ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  className="group flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors"
                >
                  Visit Website 
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}