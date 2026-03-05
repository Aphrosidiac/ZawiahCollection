"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/bags";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F3EC]/95 backdrop-blur-md shadow-sm border-b border-[#D4AF7A]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
          {/* Left nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 hover:text-[#B8935A] ${
                  scrolled ? "text-[#2C1810]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo - Center */}
          <a href="#" className="flex flex-col items-center group">
            <span
              className={`font-playfair text-xl font-semibold tracking-[0.15em] transition-colors duration-300 ${
                scrolled ? "text-[#2C1810]" : "text-white"
              }`}
            >
              ZAWIAH
            </span>
            <span
              className={`text-[9px] tracking-[0.4em] uppercase font-medium transition-colors duration-300 ${
                scrolled ? "text-[#B8935A]" : "text-[#D4AF7A]"
              }`}
            >
              Collection
            </span>
          </a>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 hover:text-[#B8935A] ${
                  scrolled ? "text-[#2C1810]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[#B8935A] text-[#B8935A] text-[11px] tracking-widest uppercase font-semibold hover:bg-[#B8935A] hover:text-white transition-all duration-300 rounded-none"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-[#2C1810]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-[#2C1810]" : "text-white"}`} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#F8F3EC]/98 backdrop-blur-md border-b border-[#D4AF7A]/30 shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-widest uppercase font-medium text-[#2C1810] hover:text-[#B8935A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-8 py-3 bg-[#B8935A] text-white text-[11px] tracking-widest uppercase font-semibold hover:bg-[#9A7A47] transition-colors"
              >
                WhatsApp Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
