"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { bags, BRANDS, CONDITIONS, buildWhatsAppLink, type Bag, type Condition } from "../data/bags";

const conditionColor: Record<Condition, string> = {
  "Like New": "bg-emerald-100 text-emerald-800",
  Excellent: "bg-sky-100 text-sky-800",
  "Very Good": "bg-amber-100 text-amber-800",
  Good: "bg-orange-100 text-orange-800",
};

function BagCard({ bag }: { bag: Bag }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4 }}
      className={`group relative bg-white overflow-hidden card-hover ${bag.sold ? "opacity-70" : ""}`}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={bag.image}
          alt={`${bag.brand} ${bag.model}`}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
            bag.sold ? "grayscale" : ""
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Sold overlay */}
        {bag.sold && (
          <div className="absolute inset-0 bg-[#2C1810]/50 flex items-center justify-center">
            <span className="font-playfair italic text-white text-xl tracking-wide">
              Sold
            </span>
          </div>
        )}

        {/* Condition badge */}
        <div className="absolute top-3 left-3">
          <span className={`condition-badge px-2.5 py-1 rounded-sm ${conditionColor[bag.condition]}`}>
            {bag.condition}
          </span>
        </div>

        {/* WhatsApp quick action */}
        {!bag.sold && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <a
              href={buildWhatsAppLink(bag)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-[11px] tracking-widest uppercase font-semibold py-3 hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire
            </a>
          </motion.div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] font-semibold mb-1">
          {bag.brand}
        </p>
        <h3 className="font-playfair text-lg text-[#2C1810] font-medium leading-snug mb-1">
          {bag.model}
        </h3>
        <p className="text-xs text-[#5C3D2E]/70 mb-4">{bag.color}</p>

        <div className="flex items-center justify-between">
          <span className="font-playfair text-xl font-semibold text-[#2C1810]">
            RM {bag.price.toLocaleString()}
          </span>
          {!bag.sold ? (
            <a
              href={buildWhatsAppLink(bag)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-widest uppercase font-semibold text-[#B8935A] border-b border-[#B8935A]/40 hover:border-[#B8935A] transition-colors pb-0.5"
            >
              Enquire →
            </a>
          ) : (
            <span className="flex items-center gap-1 text-[10px] tracking-widest uppercase font-semibold text-gray-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Sold
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const [activeBrand, setActiveBrand] = useState("All");
  const [activeCondition, setActiveCondition] = useState<string>("All");
  const [showSold, setShowSold] = useState(false);

  const filtered = bags.filter((bag) => {
    const brandMatch = activeBrand === "All" || bag.brand === activeBrand;
    const conditionMatch = activeCondition === "All" || bag.condition === activeCondition;
    const soldMatch = showSold ? true : !bag.sold;
    return brandMatch && conditionMatch && soldMatch;
  });

  return (
    <section id="collections" className="py-24 bg-[#F8F3EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#B8935A] mb-4 font-medium"
          >
            The Collection
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl text-[#2C1810] font-medium"
            >
              All Pieces
            </motion.h2>
            <p className="text-sm text-[#5C3D2E]/70">
              {filtered.length} piece{filtered.length !== 1 ? "s" : ""} available
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          {/* Brand filter */}
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase font-semibold border transition-all duration-200 ${
                  activeBrand === brand
                    ? "bg-[#2C1810] text-white border-[#2C1810]"
                    : "bg-transparent text-[#2C1810] border-[#2C1810]/30 hover:border-[#2C1810]"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Condition filter + show sold toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveCondition("All")}
              className={`px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase font-semibold border transition-all duration-200 ${
                activeCondition === "All"
                  ? "bg-[#B8935A] text-white border-[#B8935A]"
                  : "bg-transparent text-[#5C3D2E] border-[#B8935A]/40 hover:border-[#B8935A]"
              }`}
            >
              All Conditions
            </button>
            {CONDITIONS.map((cond) => (
              <button
                key={cond}
                onClick={() => setActiveCondition(cond)}
                className={`px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase font-semibold border transition-all duration-200 ${
                  activeCondition === cond
                    ? "bg-[#B8935A] text-white border-[#B8935A]"
                    : "bg-transparent text-[#5C3D2E] border-[#B8935A]/40 hover:border-[#B8935A]"
                }`}
              >
                {cond}
              </button>
            ))}

            <label className="ml-auto flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showSold}
                onChange={(e) => setShowSold(e.target.checked)}
                className="accent-[#B8935A] w-4 h-4"
              />
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#5C3D2E]/70">
                Show Sold
              </span>
            </label>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-[#5C3D2E]/50"
            >
              <p className="font-playfair text-xl italic">No pieces match your filters.</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((bag) => (
                <BagCard key={bag.id} bag={bag} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
