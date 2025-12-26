"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Monitor, Smartphone, Search, Code, Globe, Zap, BrainCircuit, Sparkles, Star } from "lucide-react";

const services = [
  { name: "Web Development", href: "/services/webdevelopment", icon: Code, desc: "Custom high-performance websites." },
  { name: "App Development", href: "/services/appdevelopment", icon: Smartphone, desc: "iOS and Android mobile solutions." },
  { name: "SEO Optimization", href: "/services/seo", icon: Search, desc: "Boost your search engine rankings." },
  { name: "Web Design", href: "/services/webdesign", icon: Monitor, desc: "Modern UI/UX focused designs." },
  { name: "AI Solutions", href: "/services/aisolution", icon: Zap, desc: "Smart automation and LLM integration." },
  { name: "Cloud Hosting", href: "/services/cloud", icon: Globe, desc: "Secure and scalable infrastructure." },
];

const platforms = [
  { name: "Shopify", href: "/platforms/shopify", desc: "Expertise ensures a standout, sales-driven Shopify store." },
  { name: "BigCommerce", href: "/platforms/bigcommerce", desc: "Maximize growth with our BigCommerce mastery." },
  { name: "Volusion", href: "/platforms/volusion", desc: "Unlock sales potential with our Volusion proficiency." },
  { name: "Shift4Shop", href: "/platforms/shift4shop", desc: "Thrive online with our adept Shift4Shop solutions." },
  { name: "Magento", href: "/platforms/magento", desc: "Thrive online with our adept Magento solutions." },
  { name: "WooCommerce", href: "/platforms/woocommerce", desc: "Thrive online with our adept WooCommerce solutions." },
  { name: "OpenCart", href: "/platforms/opencart", desc: "Thrive online with our adept OpenCart solutions." },
  { name: "Amazon", href: "/platforms/amazon", desc: "Navigate Amazon with our proven sales expertise." },
];

const aiServices = [
  { name: "AI SEO", href: "/ai/ai-seo", desc: "Optimized Site Visibility", icon: BrainCircuit },
  { name: "Ecommerce AI Optimization", href: "/ai/ecommerce-ai", desc: "AI-Driven Ecommerce Growth", icon: Sparkles },
];

const amazonServices = [
  { name: "Full Service Agency", desc: "Comprehensive Amazon Solutions", href: "/amazon/full-service" },
  { name: "Dedicated VA", desc: "Skilled Virtual Assistance", href: "/amazon/va" },
  { name: "Amazon SEO", desc: "Boost Rankings & Visibility", href: "/amazon/seo" },
  { name: "Dedicated Advertising Expert", desc: "Specialized Ad Management", href: "/amazon/advertising" },
  { name: "Amazon Ads", desc: "Maximize Ad Performance", href: "/amazon/ads" },
  { name: "Amazon Seller Central Management", desc: "End-to-End Account Support", href: "/amazon/seller-central" },
  { name: "Buy with Prime", desc: "Seamless Integration & Setup", href: "/amazon/buy-with-prime" },
  { name: "Amazon Vendor Central Management", desc: "Vendor Success & Growth", href: "/amazon/vendor-central" },
];

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Reviews", href: "/reviews", isReview: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-white/90 backdrop-blur-md py-3" : "bg-white py-4"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-black">
          Edxly
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 hover:text-black transition-colors py-2">
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'services' ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full -left-20 w-[500px] bg-white border rounded-xl shadow-xl transition-all duration-200 p-4 grid grid-cols-2 gap-2 ${activeDropdown === 'services' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              {services.map((service) => (
                <Link key={service.name} href={service.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                  <div className="bg-gray-100 p-2 rounded-md group-hover/item:bg-black group-hover/item:text-white transition-colors">
                    <service.icon size={18} />
                  </div>
                  <div>
                    <div className="text-black font-semibold">{service.name}</div>
                    <div className="text-xs text-gray-500 line-clamp-1">{service.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Platforms Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('platforms')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 hover:text-black transition-colors py-2">
              Platforms <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'platforms' ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full -left-40 w-[600px] bg-white border rounded-xl shadow-xl transition-all duration-200 p-8 grid grid-cols-2 gap-x-12 gap-y-6 ${activeDropdown === 'platforms' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              {platforms.map((platform) => (
                <Link key={platform.name} href={platform.href} className="group/item">
                  <div className="text-black font-bold text-sm mb-1 group-hover/item:text-blue-600 transition-colors">{platform.name}</div>
                  <div className="text-[11px] leading-relaxed text-gray-500">{platform.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('ai')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 hover:text-black transition-colors py-2">
              AI <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'ai' ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full -left-20 w-[450px] bg-white border rounded-xl shadow-xl transition-all duration-200 p-6 grid grid-cols-1 gap-4 ${activeDropdown === 'ai' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              {aiServices.map((ai) => (
                <Link key={ai.name} href={ai.href} className="group/item flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-all">
                  <div className="bg-blue-50 p-2 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ai.icon size={20} />
                  </div>
                  <div>
                    <div className="text-black font-bold text-sm mb-0.5">{ai.name}</div>
                    <div className="text-[11px] text-gray-500">{ai.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Amazon Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('amazon')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 hover:text-black transition-colors py-2">
              Amazon <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'amazon' ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full -left-40 w-[650px] bg-white border rounded-xl shadow-xl transition-all duration-200 p-8 grid grid-cols-2 gap-x-12 gap-y-6 ${activeDropdown === 'amazon' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              {amazonServices.map((amazon) => (
                <Link key={amazon.name} href={amazon.href} className="group/item">
                  <div className="text-black font-bold text-[13px] mb-0.5 group-hover/item:text-blue-600 transition-colors">
                    {amazon.name}
                  </div>
                  <div className="text-[11px] text-gray-500 leading-tight">
                    {amazon.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-black transition-colors flex items-center gap-1"
            >
              {link.isReview && <Star size={14} className="text-yellow-500 fill-yellow-500" />}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:block text-sm text-gray-600 font-medium border-r pr-4">Talk to an Expert</span>
          <button className="hidden md:block bg-[#1e4eb8] text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-blue-800 transition-all active:scale-95 shadow-md shadow-blue-100">
            Get Started
          </button>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[65px] z-40 bg-white transition-transform duration-300 md:hidden overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col p-6 space-y-4">
          {/* Mobile Dropdowns (Services, Platforms, AI, Amazon omitted for brevity but remain the same) */}
          <button onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')} className="flex items-center justify-between w-full text-lg font-semibold py-2 border-b">
            Services <ChevronDown size={20} className={activeDropdown === 'services' ? "rotate-180" : ""} />
          </button>
          {activeDropdown === 'services' && (
            <div className="grid grid-cols-1 gap-4 py-2 pl-4">
              {services.map((s) => (
                <Link key={s.name} href={s.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-gray-600 text-sm">
                  <s.icon size={18} /> {s.name}
                </Link>
              ))}
            </div>
          )}

          {/* Platforms Mobile */}
          <button onClick={() => setActiveDropdown(activeDropdown === 'platforms' ? null : 'platforms')} className="flex items-center justify-between w-full text-lg font-semibold py-2 border-b">
            Platforms <ChevronDown size={20} className={activeDropdown === 'platforms' ? "rotate-180" : ""} />
          </button>
          {activeDropdown === 'platforms' && (
            <div className="grid grid-cols-1 gap-4 py-2 pl-4">
              {platforms.map((p) => (
                <Link key={p.name} href={p.href} onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">{p.name}</Link>
              ))}
            </div>
          )}

          {/* AI Mobile */}
          <button onClick={() => setActiveDropdown(activeDropdown === 'ai' ? null : 'ai')} className="flex items-center justify-between w-full text-lg font-semibold py-2 border-b">
            AI <ChevronDown size={20} className={activeDropdown === 'ai' ? "rotate-180" : ""} />
          </button>
          {activeDropdown === 'ai' && (
            <div className="grid grid-cols-1 gap-4 py-2 pl-4">
              {aiServices.map((ai) => (
                <Link key={ai.name} href={ai.href} onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">{ai.name}</Link>
              ))}
            </div>
          )}

          {/* Amazon Mobile */}
          <button onClick={() => setActiveDropdown(activeDropdown === 'amazon' ? null : 'amazon')} className="flex items-center justify-between w-full text-lg font-semibold py-2 border-b">
            Amazon <ChevronDown size={20} className={activeDropdown === 'amazon' ? "rotate-180" : ""} />
          </button>
          {activeDropdown === 'amazon' && (
            <div className="grid grid-cols-1 gap-4 py-2 pl-4">
              {amazonServices.map((a) => (
                <Link key={a.name} href={a.href} onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">{a.name}</Link>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-semibold py-2 border-b flex items-center gap-2"
            >
              {link.isReview && <Star size={18} className="text-yellow-500 fill-yellow-500" />}
              {link.name}
            </Link>
          ))}
          
          <div className="pt-6">
            <button className="w-full bg-[#1e4eb8] text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-blue-100">Get Started</button>
          </div>
        </nav>
      </div>
    </header>
  );
}