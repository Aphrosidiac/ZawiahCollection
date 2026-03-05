"use client";

import { motion } from "framer-motion";
import { Search, Heart, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Browse",
    description:
      "Explore Zawiah's curated collection of authenticated preloved designer bags. Filter by brand, condition, or price.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Shortlist",
    description:
      "Found something you love? Take note of the piece you're interested in — every bag has its own character.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "WhatsApp to Deal",
    description:
      "Click the WhatsApp button on any bag or at the bottom. Zawiah will respond with details, more photos, and pricing.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#2C1810]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#B8935A] mb-4 font-medium"
          >
            Simple Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl text-white font-medium"
          >
            How It Works
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector line (between steps) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+48px)] right-[-50%] h-px bg-[#B8935A]/30" />
              )}

              {/* Icon circle */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full border border-[#B8935A]/40 flex items-center justify-center group-hover:border-[#B8935A] transition-colors duration-500">
                  <step.icon className="w-7 h-7 text-[#B8935A]" />
                </div>
                <span className="absolute -top-3 -right-3 text-[10px] tracking-widest text-[#B8935A]/50 font-semibold">
                  {step.number}
                </span>
              </div>

              <h3 className="font-playfair text-2xl text-white font-medium mb-4">
                {step.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
