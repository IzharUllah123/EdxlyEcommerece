"use client";

import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ModalProps) {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your EmailJS credentials
    emailjs.sendForm(
      'service_5xvcyph', 
      'template_zgvssfr', 
      form.current!, 
      'UU8Gh9nUGLJwGgZcN'
    )
    .then(() => {
        alert("Message sent successfully!");
        setLoading(false);
        onClose();
    }, (error) => {
        console.log(error.text);
        setLoading(false);
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl relative">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black z-10">
          <X size={28} />
        </button>

        {/* Left Side: Image */}
        <div className="hidden md:block w-2/5 relative min-h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" 
            alt="Consultant" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-8 md:p-12">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Request For</p>
            <h2 className="text-3xl font-black text-slate-900">FREE CONSULTATION</h2>
            <p className="text-gray-500 text-sm mt-2">One of our experts will get in touch with you shortly</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" required className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              <input type="email" name="email" placeholder="Email" required className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              <input type="tel" name="phone" placeholder="Phone" className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              <input type="text" name="company" placeholder="Company" className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
            
           
            <textarea name="message" placeholder="Message" rows={4} className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>

            <div className="flex justify-center mt-6">
              <button 
                type="submit" 
                disabled={loading}
                className="bg-[#1e4eb8] text-white px-12 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
              >
                {loading ? "Sending..." : "SEND"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}