"use client";
import React from "react";
import Link from "next/link";
import {
  Youtube,
  PhoneIcon,
  Instagram,
  Command,
  ArrowUpRight,
  Radio,
  ShieldCheck,
} from "lucide-react";

// --- INLINE LOGO COMPONENT ---
const Logo = () => (
  <div className=" flex items-center gap-2 font-black text-xl tracking-tighter text-white">
    <div className="w-8 h-8 bg-amber-500 flex items-center justify-center text-black">
      E
    </div>
    <span>EIAB</span>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative col-span-12 w-full bg-[#050505] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden font-sans selection:bg-amber-500 selection:text-black border-t border-white/10">
     
      {/* --- VERTICAL GUIDE LINES --- */}
      <div className="absolute inset-0 z-0 pointer-events-none px-6 md:px-12 lg:px-24">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-1px bg-white/5"></div>
        <div className="absolute right-6 md:right-12 lg:right-24 top-0 h-full w-1px bg-white/5"></div>
      </div>

      {/* --- GIANT WATERMARK --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[20vw] font-black text-white/[0.02] pointer-events-none whitespace-nowrap select-none leading-none">
        EXPLORE
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 pb-16 border-b border-white/10">
          {/* --- BRAND / MISSION --- */}
          <div className="md:col-span-5 space-y-8">
            <Logo />

            <p className="text-neutral-400 text-sm leading-relaxed max-w-md border-l border-white/10 pl-4">
              EIAB.com is a premium platform dedicated to helping adventurers
              discover vibrant cultures and breathtaking landscapes through
              curated motorcycle journeys.
            </p>

            <div className="flex items-center gap-3 text-amber-500/80 font-mono text-[10px] uppercase tracking-widest bg-amber-950/20 w-fit px-3 py-1 border border-amber-500/20">
              <ShieldCheck className="w-3 h-3" />
              <span>Registered Entity: United Kingdom</span>
            </div>
          </div>

          {/* --- NAVIGATION / COMMS --- */}
          <div className="md:col-span-7 flex flex-col md:flex-row gap-12 justify-between items-start">
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <Command className="w-3 h-3" />
                System Directory
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Expeditions", href: "/adventures" },
                  { name: "Mission Logs", href: "/adventure-stories" },
                  { name: "Squadron", href: "/team" },
                  { name: "Contact HQ", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-neutral-300 hover:text-amber-500 transition-colors"
                    >
                      <span className="w-1 h-1 bg-neutral-600 group-hover:bg-amber-500 transition-colors rounded-sm"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Module */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <Radio className="w-3 h-3" />
                Comms Uplink
              </h3>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="group relative px-6 py-3 bg-[#0a0a0a] border border-white/20 hover:border-amber-500 hover:bg-amber-500/10 text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 w-fit"
                >
                  <span className="flex items-center gap-3">
                    <PhoneIcon className="w-3 h-3 text-amber-500" />
                    Initiate Contact
                  </span>
                  {/* Corner Markers */}
                  <div className="absolute top-0 left-0 w-1 h-1 bg-white group-hover:bg-amber-500 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-white group-hover:bg-amber-500 transition-colors"></div>
                </Link>

                <div className="flex gap-3">
                  {[
                    {
                      icon: Youtube,
                      href: "https://www.youtube.com/@Exploreindiaandbeyond",
                    },
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/exploreindiaandbeyond/",
                    },
                  ].map(({ icon: Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/10 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER BOTTOM / STATUS --- */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          <p>
            © {new Date().getFullYear()} Explore India and Beyond. All rights
            reserved.
          </p>

          <div className="flex gap-8">
            <Link
              href="#"
              className="hover:text-amber-500 transition-colors flex items-center gap-1"
            >
              Sitemap <ArrowUpRight className="w-2 h-2" />
            </Link>
            <Link
              href="#"
              className="hover:text-amber-500 transition-colors flex items-center gap-1"
            >
              Accessibility <ArrowUpRight className="w-2 h-2" />
            </Link>
            <Link
              href="#"
              className="hover:text-amber-500 transition-colors flex items-center gap-1"
            >
              Privacy Protocol <ArrowUpRight className="w-2 h-2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
