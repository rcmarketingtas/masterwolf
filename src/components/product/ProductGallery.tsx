"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] relative border border-[#2a2a2a]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl text-[#3a3a3a] mb-4">⬡</div>
            <span
              className="text-[#4a4a4a] text-sm tracking-widest font-bold heading-font"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              MASTERWOLF
            </span>
            <p className="text-[#2a2a2a] text-xs mt-2 max-w-32 mx-auto leading-tight">
              {productName}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              whileTap={{ scale: 0.95 }}
              className={`w-16 h-16 rounded bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border transition-colors ${
                i === activeIndex
                  ? "border-[#c0c0c0]"
                  : "border-[#2a2a2a] hover:border-[#4a4a4a]"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[#4a4a4a] text-[10px]">{i + 1}</span>
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
