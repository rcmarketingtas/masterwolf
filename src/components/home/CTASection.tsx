"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0f0f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(192,192,192,0.06),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#c0c0c0 1px, transparent 1px), linear-gradient(90deg, #c0c0c0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-[#4a4a4a] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Ready to upgrade?
          </p>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white heading-font mb-6 leading-[0.95]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            TAKE YOUR DETAILING RESULTS
            <span className="shimmer-text block">TO THE NEXT LEVEL</span>
          </h2>
          <p className="text-[#4a4a4a] text-base max-w-xl mx-auto mb-10">
            Join thousands of professional detailers across Australia who trust
            Masterwolf for premium results every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f0f0f] font-bold text-sm tracking-widest uppercase rounded hover:bg-[#e0e0e0] transition-colors cursor-pointer"
              >
                Shop Now
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[#c0c0c0] font-bold text-sm tracking-widest uppercase rounded border border-[#4a4a4a] hover:border-[#c0c0c0] hover:text-white transition-all cursor-pointer"
              >
                Contact Us
              </motion.span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
