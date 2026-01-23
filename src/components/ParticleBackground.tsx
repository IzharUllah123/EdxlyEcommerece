"use client";

import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // --- CONFIGURATION VARIABLES (Will be set in handleResize) ---
    let particleCount = 60;
    let connectionDistance = 100;
    let moveSpeed = 1.5;
    
    // Exact Red Color from your code
    const particleColor = "rgba(182, 16, 16, 1)"; 
    const lineBaseColor = "182, 16, 16"; 

    // 1. Define Particle Class FIRST
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        // Random velocity centered around 0
        this.vx = (Math.random() - 0.5) * moveSpeed;
        this.vy = (Math.random() - 0.5) * moveSpeed;
        this.size = Math.random() * 2 + 1; // Size between 1px and 3px
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    // 2. Define init function SECOND
    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // 3. Define handleResize LAST (Logic for Mobile vs Desktop)
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const isMobile = window.innerWidth < 768;

      // --- MOBILE OPTIMIZATION ---
      if (isMobile) {
        particleCount = 40;        // Fewer dots so it doesn't look messy
        connectionDistance = 80;   // Shorter lines for small screens
        moveSpeed = 1.2;           // Slightly slower so it's not dizzying
      } else {
        // --- DESKTOP OPTIMIZATION ---
        particleCount = 90;        // More dots for the "Cluster" effect
        connectionDistance = 140;  // Longer lines to bridge gaps
        moveSpeed = 2.0;           // Faster movement for energy
      }

      // Re-initialize particles with new settings
      init();
    };

    // 4. Set up Listeners and Start
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and Draw dots
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            
            // Calculate opacity based on distance (0 to 1)
            const opacity = 1 - distance / connectionDistance;
            
            // Use RGB variables to keep code clean
            ctx.strokeStyle = `rgba(${lineBaseColor}, ${opacity})`;
            ctx.lineWidth = 0.5; // Fine lines for elegance
            
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;