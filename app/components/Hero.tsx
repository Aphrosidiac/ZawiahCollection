"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[#2C1810]/30" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-white/10" style={{ left: "8%" }} />
      <div className="absolute top-0 right-0 w-px h-full bg-white/10" style={{ right: "8%" }} />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] tracking-[0.5em] uppercase text-[#D4AF7A] mb-6 font-medium"
        >
          Curated Preloved Luxury
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-6"
        >
          Find Your{" "}
          <em className="italic text-[#D4AF7A]">Next</em>
          <br />
          Favourite Bag
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Authentic preloved designer handbags, carefully sourced and curated.
          Each piece tells a story — yours starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#collections"
            className="px-10 py-4 bg-[#B8935A] text-white text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#9A7A47] transition-all duration-300 min-w-[200px] text-center"
          >
            Browse Collection
          </a>
          <a
            href="#how-it-works"
            className="px-10 py-4 border border-white/60 text-white text-[11px] tracking-[0.3em] uppercase font-semibold hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[200px] text-center"
          >
            How It Works
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
