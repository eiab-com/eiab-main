"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X,  Zap, } from "lucide-react";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", id: "SYS-01" },
    { name: "Adventures", href: "/adventures", id: "EXP-02" },
    { name: "Stories", href: "/adventure-stories", id: "LOG-03" },
    { name: "Team", href: "/team", id: "CREW-04" },
    { name: "Contact", href: "/contact", id: "COM-05" },
  ];

  const pathname = usePathname();

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-50 flex justify-between items-center px-6 md:px-12 transition-colors duration-300 ease-in-out border-b font-sans ${
          isScrolled || isMenuOpen
            ? "bg-black/80 backdrop-blur-md border-white/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center gap-6">
          EIAB
        </div>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group relative flex flex-col items-center"
                >
                  <span
                    className={`text-[11px] font-mono font-medium uppercase tracking-widest transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-amber-500"
                        : "text-neutral-400 group-hover:text-amber-500"
                    }`}
                  >
                    {item.name}
                  </span>
                  <div
                    className={`absolute -bottom-6 w-1 h-1 bg-amber-500 rounded-full transition-all duration-300 ${
                      pathname === item.href
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></div>
                  <span className="absolute -top-4 text-[8px] font-mono text-neutral-600 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {item.id}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-amber-500/20 text-amber-500 text-[10px] font-mono uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all duration-300">
            <Zap className="w-3 h-3 fill-current" />
            <span>Init</span>
          </button>

          <button
            className="md:hidden text-white hover:text-amber-500 transition-colors z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col justify-center overflow-hidden transition-all duration-500 ease-in-out font-sans ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <nav className="relative z-10 w-full px-6">
          <ul className="flex flex-col gap-6">
            <li className="text-[10px] font-mono text-amber-500 uppercase tracking-widest border-b border-white/10 pb-2 mb-2">
              Navigation
            </li>
            {navLinks.map((item, index) => (
              <li
                key={item.name}
                className={`transform transition-all duration-500 ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-baseline gap-4"
                >
                  <span className="text-xs font-mono text-neutral-600 group-hover:text-amber-500 transition-colors">
                    {item.id}
                  </span>
                  <span className="text-4xl font-bold text-white tracking-tight uppercase group-hover:text-amber-500 group-hover:translate-x-2 transition-all duration-300">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
