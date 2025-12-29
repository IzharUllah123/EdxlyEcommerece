"use client";

import { motion } from "framer-motion";

export default function BackgroundParticles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,78,184,0.06),transparent_70%)]" />

      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 30 + 15;

        return (
          <motion.div
            key={i}
            className="absolute bg-blue-800/80"
            style={{
              width: size,
              height: size,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 60 - 30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
