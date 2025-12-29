import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Website",
  description: "A modern e-commerce website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main className="relative min-h-screen bg-slate-50 overflow-hidden">
          <BackgroundParticles />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
