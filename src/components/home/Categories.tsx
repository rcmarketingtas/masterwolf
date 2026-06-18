"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

const categoryCards = [
  {
    slug: "foam-pads",
    name: "Foam Pads",
    description: "Professional cutting, polishing & finishing pads for every stage of paint correction.",
    gradient: "from-[#1a1a2e] via-[#2a2a3e] to-[#1f1f2f]",
    accentColor: "from-orange-900/20 to-orange-800/5",
    icon: "○",
    image: "/images/category-foam-pads.jpg",
  },
  {
    slug: "polishers",
    name: "Polishers & Buffers",
    description: "Rotary and dual-action polishers engineered for professional-grade paint correction.",
    gradient: "from-[#1a1a1a] via-[#2a2a2a] to-[#1f1f1f]",
    accentColor: "from-zinc-700/30 to-zinc-800/5",
    icon: "◎",
    image: "/images/category-polishers.jpg",
  },
  {
    slug: "microfibre",
    name: "Microfibre Cloths",
    description: "Ultra-soft, scratch-free microfibre cloths for every step of the detailing process.",
    gradient: "from-[#0f1f1f] via-[#1a2f2f] to-[#0f1a1a]",
    accentColor: "from-teal-900/20 to-teal-800/5",
    icon: "≋",
    image: "/images/category-microfibre.jpg",
  },
  {
    slug: "clay-mitts",
    name: "Clay Mitts",
    description: "Next-generation clay mitts for fast, thorough paint decontamination.",
    gradient: "from-[#1f1a0f] via-[#2f2a1a] to-[#1a150a]",
    accentColor: "from-amber-900/20 to-amber-800/5",
    icon: "⬡",
    image: "/images/category-clay-mitts.jpg",
  },
  {
    slug: "chemicals",
    name: "Chemicals & Sprays",
    description: "Professional-strength chemicals, iron removers, and spray detailers.",
    gradient: "from-[#1a0f1f] via-[#2a1f2f] to-[#150a1a]",
    accentColor: "from-violet-900/20 to-violet-800/5",
    icon: "⬢",
    image: "/images/category-chemicals.jpg",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-[#4a4a4a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Product Categories
          </p>
          <h2
            className="text-5xl sm:text-6xl font-black tracking-tight text-white heading-font"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SHOP BY CATEGORY
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categoryCards.map((cat, i) => (
            <motion.div key={cat.slug} variants={staggerItem}>
              <Link href={`/shop?category=${cat.slug}`}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${cat.gradient} border border-[#2a2a2a] hover:border-[#c0c0c0]/40 transition-all duration-300 group cursor-pointer h-56 sm:h-64`}
                >
                  {/* Category background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundImage: `url('${cat.image}')` }}
                  />
                  {/* Accent glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${cat.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  {/* Silver border glow */}
                  <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-1 ring-[#c0c0c0]/20 transition-all duration-300" />

                  <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <div className="text-3xl text-[#4a4a4a] group-hover:text-[#c0c0c0] transition-colors">
                      {cat.icon}
                    </div>

                    <div>
                      <h3
                        className="text-white font-black text-lg leading-tight mb-2 heading-font"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {cat.name.toUpperCase()}
                      </h3>
                      <p className="text-[#4a4a4a] text-xs leading-relaxed mb-3 line-clamp-2 group-hover:text-[#c0c0c0]/70 transition-colors">
                        {cat.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[#c0c0c0] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Shop Category <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
