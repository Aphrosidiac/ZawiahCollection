"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/bags";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #2C1810 0px,
            #2C1810 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.5em] uppercase text-[#B8935A] mb-6 font-medium"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-4xl md:text-6xl text-[#2C1810] font-medium mb-6 leading-tight"
        >
          Ready to Find Your{" "}
          <em className="italic text-[#B8935A]">Perfect Bag?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#5C3D2E]/70 text-base leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Message Zawiah on WhatsApp to enquire about any piece, ask for more
          photos, or simply have a chat. She&apos;ll get back to you promptly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Zawiah! I'd like to browse your collection."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#1ebe5d] transition-colors duration-300 min-w-[240px] justify-center shadow-lg shadow-[#25D366]/25"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Zawiah
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#2C1810]/30 text-[#2C1810] text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#2C1810] hover:text-white transition-all duration-300 min-w-[240px] justify-center"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-[10px] tracking-widest uppercase text-[#5C3D2E]/40"
        >
          Usually responds within 2 hours
        </motion.p>
      </div>
    </section>
  );
}
