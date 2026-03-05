"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisyah R.",
    location: "Kuala Lumpur",
    text: "Bought my first LV from Zawiah and I couldn't be happier. The bag was exactly as described — pristine condition. She was so helpful and patient throughout!",
    bag: "Louis Vuitton Neverfull",
  },
  {
    name: "Farah M.",
    location: "Shah Alam",
    text: "Zawiah's pieces are always so well-curated. I've bought 3 bags from her already. The process is super easy — WhatsApp, a few questions, and done!",
    bag: "Gucci Soho Disco",
  },
  {
    name: "Nadia K.",
    location: "Penang",
    text: "Finally got my Chanel through Zawiah. The authentication was spot on and the price was fair. Will definitely come back for more!",
    bag: "Chanel Classic Flap",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#2C1810]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#B8935A] mb-4 font-medium"
          >
            Happy Buyers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl text-white font-medium"
          >
            What They Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white/5 border border-white/10 p-8 hover:border-[#B8935A]/40 transition-colors duration-500"
            >
              <Quote className="w-6 h-6 text-[#B8935A] mb-6 opacity-60" />
              <p className="text-white/75 text-sm leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-playfair text-white font-medium">{t.name}</p>
                <p className="text-[10px] tracking-widest uppercase text-[#B8935A]/70 mt-1">
                  {t.location} · {t.bag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
