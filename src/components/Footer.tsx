"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05111a] text-white px-4 sm:px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          
          {/* -------- Brand Column -------- */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black italic text-xl">
                I
              </div>
              <span className="text-xl font-black italic uppercase tracking-tighter">
                Infynex
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed text-center sm:text-left">
              Aim to bridge gaps, foster innovation, and drive progress by
              developing digital experiences that are intuitive and inspiring.
            </p>

            {/* Review Badge */}
            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 max-w-xs mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
              <p className="text-[10px] font-bold mb-2">
                Reviews 36 · Excellent
              </p>
              <div className="flex items-center gap-1 text-emerald-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                <span className="text-white text-xs ml-2">4.7</span>
              </div>
              <span className="inline-block bg-emerald-500/10 text-emerald-500 text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest">
                Verified Company
              </span>
            </div>
          </div>

          {/* -------- Services -------- */}
          <FooterList
            title="Our Services"
            items={[
              "Ecommerce Design Agency",
              "Ecommerce Development",
              "Ecommerce Maintenance",
              "Ecommerce Migration",
              "SEO For Ecommerce",
              "PPC Management Company",
            ]}
          />

          {/* -------- Platforms -------- */}
          <FooterList
            title="Platforms"
            items={[
              "Shopify Experts",
              "BigCommerce Partner",
              "Volusion Experts",
              "Magento Website Design",
              "WooCommerce Store Design",
              "OpenCart Store Design",
            ]}
          />

          {/* -------- Locations -------- */}
          <FooterList
            title="Locations"
            items={[
              "UAE",
              "New York",
              "Florida",
              "Texas",
              "Wyoming",
              "Chicago",
              "Minneapolis",
            ]}
          />

          {/* -------- Newsletter + Contact -------- */}
          <div className="space-y-8 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div>
              <h4 className="footer-title">Stay Up To Date</h4>
              <p className="text-slate-400 text-[10px] mb-4">
                Get notified about updates. No spam.
              </p>

              <div className="relative max-w-sm mx-auto sm:mx-0">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-xs text-white focus:ring-2 focus:ring-blue-600 outline-none"
                />
                <button className="absolute right-1.5 top-1.5 bg-blue-600 text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <h4 className="footer-title">Contact</h4>
              <p className="text-slate-400 text-[10px] font-bold">
                Vistabit Technologies LLC
              </p>

              <div className="flex gap-2 text-slate-400 text-[10px]">
                <MapPin size={14} className="text-blue-500 shrink-0" />
                <span>1910 Thomes Avenue, Cheyenne, WY</span>
              </div>

              <div className="flex gap-2 text-slate-400 text-[10px]">
                <Phone size={14} className="text-blue-500 shrink-0" />
                <span> 315-288-0008</span>
              </div>
            </div>
          </div>
        </div>

        {/* ... rest of the file (Socials, Badges, Bottom) stays the same ... */}
        {/* ================= SOCIALS ================= */}
        <div className="border-t border-white/5 pt-8 flex justify-center gap-4 mb-8">
          {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
            <Link
              key={i}
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>

        {/* ================= BADGES ================= */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge label="Google Partner" color="bg-white text-slate-900" />
          <Badge label="Shopify Partner" color="bg-[#95bf47] text-white" />
          <Badge
            label="BigCommerce Certified"
            color="bg-[#003399] text-white"
          />
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/5 pt-6 flex flex-col gap-4 items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center">
          <p>© {currentYear}  Pros</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["About", "Reviews", "Privacy", "Shop", "Blog"].map((item) => (
              <Link key={item} href="#" className="hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= Helpers Updated for Center Alignment ================= */

function FooterList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="text-center sm:text-left">
      <h4 className="footer-title">{title}</h4>
      <ul className="space-y-3 text-slate-400 text-xs font-medium">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="hover:text-blue-500">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Badge({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <div
      className={`${color} px-4 py-2 rounded-lg text-[10px] font-bold`}
    >
      {label}
    </div>
  );
}