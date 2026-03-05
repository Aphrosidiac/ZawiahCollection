"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, type Bag } from "../data/bags";

export default function FeaturedPicks({ bags }: { bags: Bag[] }) {
  const featured = bags.filter((b) => b.featured && !b.sold);
  if (featured.length === 0) return null;

  const [hero, ...rest] = featured;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.5em] uppercase text-[#B8935A] mb-4 font-medium"
          >
            Handpicked
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl text-[#2C1810] font-medium"
          >
            Featured Picks
          </motion.h2>
        </div>

        {/* Hero Featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 group overflow-hidden"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden min-h-[400px]">
            <Image
              src={hero.image}
              alt={`${hero.brand} ${hero.model}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Info */}
          <div className="bg-[#F8F3EC] flex flex-col justify-center p-10 md:p-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8935A] font-semibold mb-3">
              Featured · {hero.brand}
            </p>
            <h3 className="font-playfair text-3xl md:text-4xl text-[#2C1810] font-medium mb-4 leading-snug">
              {hero.model}
            </h3>
            <p className="text-[#5C3D2E]/70 text-sm leading-relaxed mb-2">{hero.color}</p>
            <p className="text-[#5C3D2E]/70 text-sm leading-relaxed mb-8">{hero.description}</p>

            <div className="flex items-center gap-6 mb-10">
              <span className="font-playfair text-3xl font-semibold text-[#2C1810]">
                RM {hero.price.toLocaleString()}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#B8935A] font-semibold border border-[#B8935A]/40 px-3 py-1">
                {hero.condition}
              </span>
            </div>

            <a
              href={buildWhatsAppLink(hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 self-start px-8 py-4 bg-[#2C1810] text-white text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#B8935A] transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire via WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Rest of featured */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((bag, i) => (
              <motion.div
                key={bag.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative bg-[#F8F3EC] overflow-hidden card-hover"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={bag.image}
                    alt={`${bag.brand} ${bag.model}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.a
                    href={buildWhatsAppLink(bag)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-[#25D366] text-white text-[10px] tracking-widest uppercase font-semibold py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire
                  </motion.a>
                </div>

                <div className="p-5">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] font-semibold mb-1">
                    {bag.brand}
                  </p>
                  <h3 className="font-playfair text-xl text-[#2C1810] font-medium mb-1">{bag.model}</h3>
                  <p className="text-xs text-[#5C3D2E]/60 mb-4">{bag.color}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-playfair text-xl font-semibold text-[#2C1810]">
                      RM {bag.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase text-[#B8935A]/80 font-medium">
                      {bag.condition}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
