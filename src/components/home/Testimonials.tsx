"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    id: "1",
    author: "Mick Thompson",
    company: "Mick's Detailing",
    text: "Outstanding quality products that consistently deliver professional results. Our team relies on Masterwolf for every job — from basic maintenance details to full paint corrections. The foam pads especially are a cut above anything else we've tried.",
    rating: 5,
    date: "March 2024",
  },
  {
    id: "2",
    author: "Sarah Chen",
    company: "Toyota Dealership Network",
    text: "Reliable detailing equipment and excellent customer service. We've been ordering Masterwolf products for our service centres for over two years. Consistently fast delivery, and the team is always available when we need product advice.",
    rating: 5,
    date: "February 2024",
  },
  {
    id: "3",
    author: "James Buckby",
    company: "Buckby Motors",
    text: "Professional-grade tools we can depend on every day. The dual action polisher is an absolute workhorse, and the microfibre cloths are the best we've used. Wouldn't go anywhere else for our detailing supplies.",
    rating: 5,
    date: "January 2024",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-[#4a4a4a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Customer Reviews
          </p>
          <h2
            className="text-5xl sm:text-6xl font-black tracking-tight text-white heading-font"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            WHAT OUR CUSTOMERS SAY
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-10 rounded-xl bg-[#1f1f1f] border border-[#2a2a2a] relative"
              >
                <Quote
                  size={40}
                  className="text-[#2a2a2a] absolute top-8 right-8"
                />
                <StarRating
                  rating={testimonials[active].rating}
                  size="md"
                  showCount={false}
                  className="mb-6"
                />
                <p className="text-[#c0c0c0] text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0">
                    <span className="text-[#c0c0c0] text-sm font-bold">
                      {testimonials[active].author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonials[active].author}
                    </p>
                    <p className="text-[#4a4a4a] text-xs">
                      {testimonials[active].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-6 h-2 bg-[#c0c0c0]"
                    : "w-2 h-2 bg-[#2a2a2a] hover:bg-[#4a4a4a]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
