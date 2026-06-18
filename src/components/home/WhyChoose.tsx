"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Truck,
  Award,
  Lock,
  Zap,
  Headphones,
} from "lucide-react";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Shield,
    title: "Professional Grade Equipment",
    description:
      "Every product is tested and validated by professional detailers before it reaches you.",
  },
  {
    icon: Truck,
    title: "Fast Australia-Wide Shipping",
    description:
      "Orders dispatched same-day before 2pm. Free shipping on orders over $100.",
  },
  {
    icon: Award,
    title: "Trusted By Industry Leaders",
    description:
      "Supplying detailing professionals, dealerships and car care businesses nationwide.",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    description:
      "256-bit SSL encrypted checkout. Your payment and personal data are always protected.",
  },
  {
    icon: Zap,
    title: "Fast Dispatch",
    description:
      "Same-day dispatch on all orders placed before 2pm AEST, Monday to Friday.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Our team of detailing experts are available to help you choose the right products.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-[#4a4a4a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
            The Masterwolf Difference
          </p>
          <h2
            className="text-5xl sm:text-6xl font-black tracking-tight text-white heading-font"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            WHY CHOOSE MASTERWOLF
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-lg bg-[#1f1f1f] border border-[#2a2a2a] hover:border-[#c0c0c0]/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] group-hover:border-[#4a4a4a] flex items-center justify-center shrink-0 transition-colors">
                  <feature.icon size={20} className="text-[#c0c0c0]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-[#c0c0c0] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
