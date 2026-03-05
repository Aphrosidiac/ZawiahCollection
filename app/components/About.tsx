"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F8F3EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden max-w-md">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
                alt="About Zawiah"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#B8935A]/30 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#B8935A]/20 -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#B8935A] mb-6 font-medium">
              About Zawiah
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2C1810] font-medium mb-8 leading-tight">
              Every Bag Has a{" "}
              <em className="italic text-[#B8935A]">Story</em>
            </h2>

            <div className="space-y-5 text-[#5C3D2E]/80 text-sm leading-relaxed">
              <p>
                Hi, I'm Zawiah — a handbag enthusiast with a passion for finding
                beautiful, pre-loved pieces and giving them a second life. What started
                as a personal love for designer bags became a curated collection I'm
                excited to share.
              </p>
              <p>
                Every bag in my collection has been personally sourced, authenticated,
                and condition-checked. I only sell pieces I would proudly carry myself.
                No middlemen, no guesswork — just honest preloved luxury.
              </p>
              <p>
                My mission is simple: make luxury accessible without compromising on
                quality or authenticity. Whether you're a first-time buyer or a seasoned
                collector, I'm here to help you find your perfect match.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-10">
              <div>
                <p className="font-playfair text-3xl font-semibold text-[#2C1810]">100+</p>
                <p className="text-[10px] tracking-widest uppercase text-[#5C3D2E]/60 mt-1">Bags Sold</p>
              </div>
              <div className="w-px h-12 bg-[#B8935A]/30" />
              <div>
                <p className="font-playfair text-3xl font-semibold text-[#2C1810]">100%</p>
                <p className="text-[10px] tracking-widest uppercase text-[#5C3D2E]/60 mt-1">Authenticated</p>
              </div>
              <div className="w-px h-12 bg-[#B8935A]/30" />
              <div>
                <p className="font-playfair text-3xl font-semibold text-[#2C1810]">5★</p>
                <p className="text-[10px] tracking-widest uppercase text-[#5C3D2E]/60 mt-1">Happy Buyers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
