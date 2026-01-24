"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, Briefcase, User, Mail, Send } from "lucide-react"; // Icons for mobile

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", icon: <Home size={18} /> },
    { name: "Work", href: "#work", icon: <Briefcase size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed bottom-4 sm:top-4 inset-x-0 z-[100] flex justify-center px-4 h-14">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-2 p-1.5 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-lg"
            : "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border-black/5 dark:border-white/10"
        }`}
      >
        {/* LOGO - Always Visible */}
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-inner">
          AA
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center px-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="p-2.5 md:px-4 md:py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white transition-all relative group"
            >
              {/* Icon shows on Mobile, Text shows on Desktop */}
              <span className="md:hidden">{link.icon}</span>
              <span className="hidden md:block">{link.name}</span>

              {/* Hover Indicator */}
              <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
            </a>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <button className="flex items-center justify-center w-9 h-9 md:w-auto md:px-5 md:py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-md">
          <span className="hidden md:block text-xs font-bold">Let's Talk</span>
          <Send size={16} className="md:hidden" />
        </button>
      </motion.div>
    </nav>
  );
}
