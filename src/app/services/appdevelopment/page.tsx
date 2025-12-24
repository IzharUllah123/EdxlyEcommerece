"use client";
import React from "react";
import { Smartphone, Zap, Infinity, Layers } from "lucide-react";

export default function AppDevelopment() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-black mb-6">Mobile App Development</h1>
            <p className="text-lg text-gray-600 mb-8">
              From iOS to Android, we create intuitive mobile experiences that keep users coming back.
            </p>
            <ul className="space-y-4">
              {['Native iOS & Android', 'React Native Apps', 'Flutter Development'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium">
                  <Zap size={20} className="text-yellow-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-gray-100 h-80 rounded-3xl flex items-center justify-center">
            <Smartphone size={100} className="text-gray-300" />
          </div>
        </div>
      </section>
    </div>
  );
}