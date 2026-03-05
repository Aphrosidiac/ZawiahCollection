"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/bags";

export default function WhatsAppFloat() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Zawiah! I'd like to browse your preloved bag collection."
  )}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      className="whatsapp-float"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-0 overflow-hidden rounded-full shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Label (expands on hover) */}
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileHover={{ width: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#25D366] text-white text-[10px] tracking-widest uppercase font-semibold whitespace-nowrap pl-5 pr-0 py-4 overflow-hidden"
        >
          Chat with Zawiah
        </motion.span>

        {/* Icon */}
        <div className="w-14 h-14 bg-[#25D366] flex items-center justify-center flex-shrink-0 rounded-full">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </a>
    </motion.div>
  );
}
