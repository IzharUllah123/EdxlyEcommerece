"use client";
import React from "react";
import { ShieldCheck, HardDrive, FileText, AlertCircle } from "lucide-react";

export default function SellerCentralManagement() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl font-black mb-8 leading-tight">Seller Central <span className="text-blue-500">Management</span></h1>
            <p className="text-xl text-slate-400 mb-12">End-to-end account support and policy compliance management to keep your business running smoothly.</p>
            <div className="grid grid-cols-2 gap-6">
               <div className="flex items-center gap-2"><ShieldCheck className="text-green-400" /> Compliance</div>
               <div className="flex items-center gap-2"><FileText className="text-blue-400" /> Case Logs</div>
            </div>
          </div>
          <div className="absolute top-10 -right-20 opacity-10"><HardDrive size={400} /></div>
        </div>
      </div>
    </main>
  );
}