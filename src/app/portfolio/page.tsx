"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Updated Data: 'logo' supports image OR text
const projects = [
  {
    title: "Creative Digital Agency Website",
    client: "Seven52 Agency",
    logo: "/seven52_logo.png",
    category: "Web Design",
    link: "https://seven52.agency/",
    description:
      "A bold and highly creative agency website designed to showcase strong visual storytelling and brand identity. The experience focuses on immersive layouts, smooth transitions, and impactful typography that communicates the agency’s strategic and creative capabilities while maintaining excellent performance across devices.",
    image: "/seven52.png",
    tags: ["Branding", "UI/UX", "Creative"]
  },
  {
    title: "Global Creative-as-a-Service Platform",
    client: "Superside",
    logo: "/superside_logo.png",
    category: "Web Platform",
    link: "https://www.superside.com/",
    description:
      "A polished, enterprise-focused website built to communicate Superside’s scalable creative services. The platform emphasizes clarity, trust, and conversion through clean layouts, structured content, and strong messaging, while supporting high traffic and multiple user journeys for global teams.",
    image: "/superside.png",
    tags: ["SaaS", "Marketing", "Enterprise"]
  },
  {
    title: "Online Learning & Skill Development Platform",
    client: "Wonderly",
    logo: "/wonderlyLogo.jpg",
    category: "EdTech",
    link: "https://learnwonderly.com/en",
    description:
      "An educational platform designed to make learning engaging and accessible. The website focuses on clear content hierarchy, intuitive navigation, and a friendly visual style that helps users easily explore courses, understand value propositions, and stay motivated throughout their learning journey.",
    image: "/wonderly.png",
    tags: ["Education", "UX Design", "Content"]
  },
  {
    title: "High-Performance E-commerce Store",
    client: "Ttelgo",
    logo: "/LogoUpdated.png",
    category: "Shopify",
    link: "https://ttelgo.com",
    description:
      "A comprehensive Shopify development project for Ttelgo. We built a scalable, mobile-first e-commerce experience focused on speed and conversion. The new design features intuitive navigation, a streamlined checkout process, and a modern aesthetic that perfectly aligns with the brand identity.",
    image: "/ttelgo.png",
    tags: ["Development", "Shopify", "UI/UX"]
  },
  {
    title: "Modern Digital Experience",
    client: "Spark",
    logo: "SK",
    category: "Web Development",
    link: "https://spark-ten-chi.vercel.app/",
    description:
      "A complete digital transformation for Spark. We built a dynamic, responsive website focused on user engagement and brand storytelling. The platform features high-performance animations, an optimized SEO structure, and a streamlined navigation system that significantly improved user retention and site speed.",
    image: "/Spark.png",
    tags: ["React", "Performance", "UI/UX"]
  },
  {
    title: "Full-Stack Digital Services Platform",
    client: "Infynix",
    logo: "IN",
    category: "Digital Services",
    link: "https://infynix.edxly.com/",
    description:
      "A comprehensive digital services marketplace designed to help businesses of all sizes grow online. The platform offers end-to-end solutions including AI automation, e-commerce development, web and app design, SEO and content marketing, social media management, and brand strategy — all aimed at increasing visibility, engagement, and conversions.",
    image: "infynixLogo.png",
    tags: ["Web Development", "Marketing", "AI", "E-commerce"]
  },
  {
    title: "Comprehensive Logistics & Supply Chain Solutions",
    client: "Kabul Royals Logistics",
    logo: "KR",
    category: "Logistics",
    link: "https://www.kabulroyals.com/",
    description:
      "A leading logistics and supply chain services provider based in Afghanistan, offering end-to-end transportation, warehousing, customs clearance, and distribution solutions. The platform highlights secure warehousing, real-time tracking, global connectivity, and tailored logistics plans that help businesses optimize operations, reduce costs, and ensure timely delivery across domestic and international routes.",
    image: "kabulRoyals.png",
    tags: ["Supply Chain", "Transportation", "Warehousing"]
  },
  {
  title: "Personalized K-12 Online Learning Platform",
  client: "Edxly FutureLearning",
  logo: "EF",
  category: "EdTech",
  link: "https://edxly-futurelearning.vercel.app/",
  description:
    "An intuitive and engaging online learning platform tailored for K-12 students and lifelong learners. Edxly FutureLearning emphasizes personalized learning paths, structured course modules, and intuitive navigation that helps students explore subjects at their own pace, build foundational skills, and prepare for future academic and career success in a digital learning environment.",
  image: "/edxlyfuturelearning.png",
  tags: ["Online Learning", "Education", "Personalized Learning"]
}

];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* --- HEADER SECTION --- */}
     <div className="w-full bg-[#05111a] py-20 md:py-28 mb-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
      <span className="">Our</span>
      <span className="text-blue-600 italic ml-4">Port</span>
      <span className="ml-2">folio</span>
      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block ml-2 mt-2 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
    </h1>
    <p className="text-sm md:text-base font-black text-white/80 tracking-wide uppercase italic mb-2">
      Discover our latest projects and the creative results we’ve crafted for our clients.
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
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
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
                {/* --- LOGO LOGIC --- */}
                {project.logo.startsWith("/") ? (
                  <img
                    src={project.logo}
                    alt={`${project.client} Logo`}
                    className="h-12 w-auto mb-6 object-contain opacity-90"
                  />
                ) : (
                  <div className="mb-6 flex items-center justify-center h-12 w-12 rounded-lg bg-slate-900 text-white font-black text-lg tracking-wider">
                    {project.logo}
                  </div>
                )}

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {project.title}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded"
                    >
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
