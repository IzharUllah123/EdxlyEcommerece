"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialCarousel() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true) // Only approved reviews
        .order('created_at', { ascending: false });
      if (data) setReviews(data);
    };
    fetchReviews();
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (reviews.length === 0) return null;

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header Text */}
        <div className="text-left mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4">
            Customer Voices: Hear what they&apos;re saying
          </p>
          <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
            Customer <span className="underline decoration-blue-600 underline-offset-8">Testimonials</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-slate-50 rounded-[3rem] p-10 md:p-20 border border-slate-100 shadow-xl shadow-blue-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="flex text-yellow-400 gap-1">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-medium text-slate-700 italic leading-relaxed">
                &quot;{reviews[currentIndex].content}&quot;
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <User size={24} />
                </div>
                <div className="text-left">
                  <p className="font-black italic uppercase tracking-tighter text-slate-900">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                    {reviews[currentIndex].platform || "Verified Client"}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-8">
            <button 
              onClick={prevReview}
              className="bg-white p-4 rounded-full shadow-lg border border-slate-100 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-8">
            <button 
              onClick={nextReview}
              className="bg-white p-4 rounded-full shadow-lg border border-slate-100 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}