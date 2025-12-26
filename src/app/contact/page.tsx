"use client";

import React, { useState, useRef } from "react";
import { MessageCircle, Mail, Phone, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Using your existing EmailJS credentials
    emailjs.sendForm(
      'service_5xvcyph', 
      'template_zgvssfr', 
      form.current!, 
      'UU8Gh9nUGLJwGgZcN'
    )
    .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current?.reset();
        setTimeout(() => setSuccess(false), 5000);
    })
    .catch((error) => {
        console.error("Email Error:", error);
        setLoading(false);
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 italic tracking-tighter">
            Let&apos;s <span className="text-blue-600">Connect</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Ready to supercharge your ecommerce growth? Reach out via WhatsApp or our secure form.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              
              <div className="space-y-8">
                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/YOUR_PHONE_NUMBER" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-lg font-bold text-slate-900">Chat with an Expert</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="text-lg font-bold text-slate-900 italic">ixharkhan9@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white">
              <h4 className="text-xl font-bold mb-4">Why choose Edxly?</h4>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Our team responds to all inquiries within 24 hours. Let&apos;s build something great together.
              </p>
              <CheckCircle className="text-blue-200 opacity-20 w-24 h-24 absolute -bottom-4 -right-4" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <form ref={form} onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                  <input type="text" name="name" required className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                  <input type="email" name="email" required className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Subject</label>
                <select name="subject" className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none">
                  <option>E-commerce Development</option>
                  <option>AI SEO Optimization</option>
                  <option>Amazon Marketplace Management</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                <textarea name="message" rows={5} required className="w-full px-6 py-6 rounded-[2rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#1e4eb8] text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? "Sending..." : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {success && (
                <div className="p-4 bg-green-50 text-green-700 rounded-2xl text-center font-bold text-sm animate-pulse">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}