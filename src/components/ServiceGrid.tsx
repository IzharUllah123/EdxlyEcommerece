"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Code, Megaphone, PenTool, Cpu, Search, Users, BarChart, Video, ArrowRight 
} from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const services = [
  {
    title: "Website Development",
    desc: "We provide end to end web development services Put your business online and get more sales & leads.",
    icon: Code,
  },
  {
    title: "Brand Launching & Opening",
    desc: "A brand launch is the process of introducing a brand to the public, focusing on target audience and competition.",
    icon: Megaphone,
  },
  {
    title: "Branding & AI Content",
    desc: "Give your brand a unique style and identity with the help of Pakistan's leading branding agency.",
    icon: PenTool,
  },
  {
    title: "Digital Marketing & Automation",
    desc: "We provide you effective solutions to make you successful in the age of varied digital screens.",
    icon: Cpu,
  },
  {
    title: "SEO Content Writing",
    desc: "Get Highly targeted traffic to your website. We have some of the best SEO Specialists in Pakistan.",
    icon: Search,
  },
  {
    title: "Talent Acq & Media Production",
    desc: "Talent Acquisition is an ongoing strategy to find to Specialist, Leaders or future executives for your company.",
    icon: Users,
  },
  {
    title: "Digital Marketing",
    desc: "Data driven campaigns to save your time and budgets hitting the customers fast and on target.",
    icon: BarChart,
  },
  {
    title: "Product video & Teaser's",
    desc: "We promote your brands/business on a different channel reality show or programs. We have professional teams.",
    icon: Video,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Helper to check if a specific index should be flipped
  const getFlipState = (index: number) => {
    if (hoveredIndex === null) return { isFlipped: false, rotation: 0 };

    // 1. The card being hovered flips RIGHT (180deg)
    if (index === hoveredIndex) {
      return { isFlipped: true, rotation: 180 };
    }

    // 2. The Partner Card flips LEFT (-180deg)
    // Rule: Flip Left neighbor. If no Left (index 0), flip Right neighbor.
    const partnerIndex = hoveredIndex === 0 ? 1 : hoveredIndex - 1;

    if (index === partnerIndex) {
      return { isFlipped: true, rotation: -180 };
    }

    return { isFlipped: false, rotation: 0 };
  };

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
           <ParticleBackground />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Special Solutions that Make Your Life Easier
            </p>
          </motion.div>
        </div>

        {/* 3D Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => {
            const { isFlipped, rotation } = getFlipState(index);

            return (
              <motion.div
                key={index}
                variants={cardVariant}
                className="group relative h-[280px] perspective-1000" // perspective is needed for 3D
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Inner Card Container that Rotates */}
                <motion.div
                  className="w-full h-full relative preserve-3d transition-all duration-700 ease-in-out"
                  animate={{ rotateY: rotation }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {/* === FRONT FACE (White Background) === */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xl border-b-4 border-red-600">
                    
                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                      <service.icon size={32} className="text-red-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    
                    {/* Hint */}
                    <p className="mt-4 text-xs text-gray-400 font-medium flex items-center gap-1">
                      Hover to explore <ArrowRight size={12} />
                    </p>
                  </div>

                  {/* === BACK FACE (White Background, Flipped 180) === */}
                  <div 
                    className="absolute inset-0 backface-hidden bg-red-600 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xl"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    {/* Icon Small */}
                    <service.icon size={24} className="text-white/80 mb-4" />

                    {/* Title Small */}
                    <h4 className="text-lg font-bold text-white mb-3">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-white/90 text-sm leading-relaxed font-medium">
                      {service.desc}
                    </p>
                    
                    {/* Button Style Link */}
                    <div className="mt-6 px-4 py-2 bg-white text-red-600 text-xs font-bold rounded-full uppercase tracking-widest">
                      Learn More
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Tailwind Utility for 3D needed? 
          Note: Ensure you have 'perspective-1000', 'preserve-3d', and 'backface-hidden' 
          utilities working. If not, standard Tailwind might need a plugin or custom CSS.
          I used inline styles for 'preserve-3d' just in case. 
      */}
      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </section>
  );
}