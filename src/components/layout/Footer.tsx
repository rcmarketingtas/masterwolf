"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Camera,
  PlayCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const navLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/returns", label: "Returns & Refunds" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: PlayCircle, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <AnimatedSection delay={0}>
            <div className="flex flex-col gap-4">
              <div>
                <div
                  className="text-2xl font-black tracking-widest text-white heading-font"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  MASTERWOLF
                </div>
                <div className="text-[10px] tracking-[0.3em] text-[#4a4a4a] uppercase mt-0.5">
                  Detailing Equipment
                </div>
              </div>
              <p className="text-[#4a4a4a] text-sm leading-relaxed">
                Premium automotive detailing supplies trusted by professionals
                across Australia. Built for perfection.
              </p>
              <div className="flex items-center gap-3 mt-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded border border-[#2a2a2a] flex items-center justify-center text-[#4a4a4a] hover:text-white hover:border-[#c0c0c0] transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Navigation */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
                Navigation
              </h4>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#4a4a4a] hover:text-[#c0c0c0] text-sm transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Policies */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
                Policies
              </h4>
              <ul className="flex flex-col gap-2.5">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#4a4a4a] hover:text-[#c0c0c0] text-sm transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact + Newsletter */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
                Get In Touch
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-[#4a4a4a] text-sm">
                  <Mail size={14} className="mt-0.5 shrink-0 text-[#c0c0c0]" />
                  <a
                    href="mailto:info@masterwolf.com.au"
                    className="hover:text-[#c0c0c0] transition-colors"
                  >
                    info@masterwolf.com.au
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-[#4a4a4a] text-sm">
                  <Phone size={14} className="mt-0.5 shrink-0 text-[#c0c0c0]" />
                  <span>1300 MASTERWOLF</span>
                </li>
                <li className="flex items-start gap-2.5 text-[#4a4a4a] text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#c0c0c0]" />
                  <span>Australia-wide shipping</span>
                </li>
              </ul>

              <div className="mt-2">
                <p className="text-[#4a4a4a] text-xs mb-2">
                  Subscribe for offers & new products
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-[#1f1f1f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-white placeholder-[#4a4a4a] focus:outline-none focus:border-[#c0c0c0] transition-colors"
                  />
                  <button className="px-3 py-2 bg-white text-[#0f0f0f] rounded text-sm font-semibold hover:bg-[#e0e0e0] transition-colors">
                    →
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4a4a4a] text-xs">
            © {new Date().getFullYear()} Masterwolf Pty Ltd. All rights
            reserved. ABN 00 000 000 000
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#4a4a4a] text-xs">
              <span className="bg-[#1f1f1f] border border-[#2a2a2a] rounded px-2 py-0.5">
                VISA
              </span>
              <span className="bg-[#1f1f1f] border border-[#2a2a2a] rounded px-2 py-0.5">
                MC
              </span>
              <span className="bg-[#1f1f1f] border border-[#2a2a2a] rounded px-2 py-0.5">
                AMEX
              </span>
              <span className="bg-[#1f1f1f] border border-[#2a2a2a] rounded px-2 py-0.5">
                PAYPAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
