import { MessageCircle, Instagram, Heart } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/bags";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-medium tracking-widest mb-2">ZAWIAH</h3>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#B8935A] mb-6">Collection</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Curated preloved luxury handbags. Authenticated. Loved. Ready for their next chapter.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8935A] mb-6 font-semibold">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { label: "Collections", href: "#collections" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "About Zawiah", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#B8935A] transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8935A] mb-6 font-semibold">
              Connect
            </p>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#25D366] transition-colors duration-200 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:text-[#25D366]" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#E1306C] transition-colors duration-200 group"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm">@zawiahcollection</span>
              </a>
            </div>

            <div className="mt-8 p-4 border border-[#B8935A]/20 bg-[#B8935A]/5">
              <p className="text-[10px] tracking-widest uppercase text-[#B8935A] mb-1 font-medium">
                Shipping
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                Nationwide delivery available. Pickup in Klang Valley by arrangement.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Zawiah&apos;s Collection. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-[#B8935A] fill-current" /> for preloved luxury
          </p>
        </div>
      </div>
    </footer>
  );
}
