"use client";

import { motion } from "framer-motion";

const brands = [
  "Mick's Detailing",
  "Toyota",
  "Buckby Motors",
  "ProShine Co.",
  "AutoCraft",
  "DetailPro",
  "CarCare Elite",
  "PerfectFinish",
];

const allBrands = [...brands, ...brands];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-[#1f1f1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-[#4a4a4a] text-xs tracking-[0.3em] uppercase font-medium">
            Trusted By Industry Professionals
          </p>
        </div>
      </div>

      {/* Scrolling carousel */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 items-center whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {allBrands.map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex items-center gap-3 shrink-0 px-2"
              >
                <div className="w-8 h-8 rounded bg-[#1f1f1f] border border-[#2a2a2a] flex items-center justify-center">
                  <span className="text-[#4a4a4a] text-[10px] font-bold">
                    {brand[0]}
                  </span>
                </div>
                <span
                  className="text-[#4a4a4a] font-semibold text-sm tracking-wide heading-font"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {brand.toUpperCase()}
                </span>
                <span className="text-[#2a2a2a] text-lg mx-2">·</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
