"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

/* ------------------ Animation Variants ------------------ */
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // ✅ instead of "easeOut"
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageFloat: Variants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // ✅ fixed
    },
  },
};


/* ------------------ Component ------------------ */
export default function AboutAndArticles() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* ---------------- About Section ---------------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <motion.div
            variants={fadeUp}
            className="space-y-8 order-2 lg:order-1"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-4xl font-black italic tracking-tighter uppercase leading-none"
            >
              About {"  "}
              <span className="text-blue-600 underline decoration-blue-100 underline-offset-[15px]">
                Infynex
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-sm leading-relaxed max-w-xl"
            >
              We are an approved vendor for all major ecommerce platforms, and
              that is a testament to our expertise! We have vast knowledge of
              different shopping carts and advanced ecommerce platforms like
              <strong> Shopify</strong>, <strong>BigCommerce</strong>,{" "}
              <strong>Volusion</strong>, <strong>Magento</strong>,{" "}
              <strong>WooCommerce</strong>, and more. We find intelligent
              solutions for complex business requirements and excel at cart
              migration.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1e4eb8] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs mt-4 shadow-xl shadow-blue-100"
                >
                  About Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageFloat}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -rotate-2" />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Infynix Pros Team"
                className="w-full h-full object-cover"
              />

              {/* Logo Overlay */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic text-xs">
                    I
                  </div>
                  <span className="font-black italic text-xs tracking-tighter uppercase">
                    Infynix Pros
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ---------------- Articles Section ---------------- */}
        <div className="pt-20 border-t border-slate-100">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-4xl font-black italic tracking-tighter uppercase leading-none"
            >
              Latest{" "}
              <span className="text-blue-600 underline decoration-blue-100 underline-offset-[15px]">
                Articles
              </span>
            </motion.h2>

            <motion.div variants={fadeUp}>
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1e4eb8] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg shadow-blue-50"
                >
                  Explore Articles
                  <ArrowRight size={14} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Blog Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-slate-100 rounded-[2rem] mb-6 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-blue-600/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <BookOpen size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    E-commerce Tips
                  </span>
                </div>

                <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                  How to Scale Your{" "}
                  {item === 1
                    ? "Shopify"
                    : item === 2
                    ? "Amazon"
                    : "BigCommerce"}{" "}
                  Store in 2025
                </h4>

                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  Discover the latest strategies and tools used by industry
                  leaders to drive massive growth...
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
