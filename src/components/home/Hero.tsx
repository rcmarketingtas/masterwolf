"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-[#0f0f0f]/75" />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(192,192,192,0.06),transparent)]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#c0c0c0 1px, transparent 1px), linear-gradient(90deg, #c0c0c0 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
      </div>

      {/* Decorative brushed metal accents */}
      <div className="absolute top-1/4 left-0 w-px h-64 bg-gradient-to-b from-transparent via-[#c0c0c0]/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-px h-48 bg-gradient-to-b from-transparent via-[#c0c0c0]/20 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2a2a2a] bg-[#1f1f1f]/50 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c0c0c0] animate-pulse" />
          <span className="text-[#c0c0c0] text-xs tracking-[0.2em] uppercase font-medium">
            Australia&apos;s Professional Detailing Supplier
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.9] mb-6 heading-font"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-white block">PROFESSIONAL</span>
          <span className="text-white block">DETAILING</span>
          <span className="shimmer-text block">EQUIPMENT</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#c0c0c0] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Built for perfection. Engineered for professionals. Premium automotive
          detailing supplies delivered fast across Australia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/shop">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f0f0f] font-bold text-sm tracking-widest uppercase rounded hover:bg-[#e0e0e0] transition-colors cursor-pointer"
            >
              Shop Now
            </motion.span>
          </Link>
          <Link href="/shop">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[#c0c0c0] font-bold text-sm tracking-widest uppercase rounded border border-[#4a4a4a] hover:border-[#c0c0c0] hover:text-white transition-all cursor-pointer"
            >
              Browse Products
            </motion.span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-8 justify-center mt-16 pt-12 border-t border-[#1f1f1f]"
        >
          {[
            { value: "12+", label: "Years Experience" },
            { value: "50K+", label: "Products Sold" },
            { value: "2000+", label: "Pro Clients" },
            { value: "AU-Wide", label: "Fast Shipping" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-black text-white heading-font"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              <div className="text-[#4a4a4a] text-xs tracking-wider uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#4a4a4a] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[#4a4a4a]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
