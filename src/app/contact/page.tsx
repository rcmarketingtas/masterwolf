"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Clock, MapPin, ChevronDown, ChevronUp, Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3–7 business days. Express shipping is 1–2 business days. Orders placed before 2pm AEST Monday–Friday are dispatched same day.",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes! All orders over $100 qualify for free standard shipping to anywhere in Australia.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of purchase for unused, unopened items in original packaging. Contact us first to arrange a return.",
  },
  {
    q: "Are your products suitable for all paint types?",
    a: "Most of our products are suitable for all modern clear-coat finishes. Always check the product specifications. Our team is happy to advise on the right products for your needs.",
  },
  {
    q: "Do you offer wholesale or bulk pricing?",
    a: "Yes, we offer competitive wholesale pricing for businesses and professional detailers. Contact us with your requirements for a custom quote.",
  },
];

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const inputClass =
    "w-full bg-[#1f1f1f] border border-[#2a2a2a] rounded px-3 py-2.5 text-white placeholder-[#4a4a4a] text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors";
  const labelClass =
    "block text-[#4a4a4a] text-xs tracking-wide uppercase mb-1.5 font-medium";

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-16">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-[#1f1f1f] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#4a4a4a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Get In Touch
            </p>
            <h1
              className="text-6xl sm:text-7xl font-black text-white heading-font leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              CONTACT US
            </h1>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {formSent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a] text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-600/30 flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h2
                    className="text-3xl font-black text-white heading-font mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    MESSAGE SENT!
                  </h2>
                  <p className="text-[#4a4a4a] text-sm">
                    Thanks for reaching out. We&apos;ll get back to you within 1
                    business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="p-6 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]"
                >
                  <h2
                    className="text-2xl font-black text-white heading-font mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    SEND US A MESSAGE
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Name</label>
                      <input
                        className={inputClass}
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input
                        className={inputClass}
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone (optional)</label>
                      <input
                        className={inputClass}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+61 400 000 000"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Subject</label>
                      <select
                        className={inputClass}
                        required
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                      >
                        <option value="" className="bg-[#1f1f1f]">
                          Select subject
                        </option>
                        <option value="order" className="bg-[#1f1f1f]">
                          Order Enquiry
                        </option>
                        <option value="product" className="bg-[#1f1f1f]">
                          Product Question
                        </option>
                        <option value="wholesale" className="bg-[#1f1f1f]">
                          Wholesale / Trade
                        </option>
                        <option value="return" className="bg-[#1f1f1f]">
                          Return / Refund
                        </option>
                        <option value="other" className="bg-[#1f1f1f]">
                          Other
                        </option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className={labelClass}>Message</label>
                      <textarea
                        className={`${inputClass} min-h-32 resize-none`}
                        required
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="How can we help you?"
                        rows={5}
                      />
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    className="mt-5 w-full py-3 bg-white text-[#0f0f0f] font-bold text-sm tracking-widest uppercase rounded hover:bg-[#e0e0e0] transition-colors"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* FAQ */}
            <div className="mt-10">
              <h2
                className="text-3xl font-black text-white heading-font mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="flex flex-col gap-2">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-[#1f1f1f] border border-[#2a2a2a] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="text-white font-medium text-sm">
                        {faq.q}
                      </span>
                      {openFaq === i ? (
                        <ChevronUp
                          size={14}
                          className="text-[#4a4a4a] shrink-0"
                        />
                      ) : (
                        <ChevronDown
                          size={14}
                          className="text-[#4a4a4a] shrink-0"
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 text-[#4a4a4a] text-sm leading-relaxed border-t border-[#2a2a2a] pt-3">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedSection>
              <div className="p-6 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a] mb-5">
                <h3
                  className="text-lg font-black text-white heading-font mb-5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  CONTACT INFO
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@masterwolf.com.au",
                      href: "mailto:info@masterwolf.com.au",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "1300 MASTERWOLF",
                      href: "tel:1300627837965",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Melbourne, Victoria, Australia",
                      href: undefined,
                    },
                    {
                      icon: Clock,
                      label: "Business Hours",
                      value: "Mon–Fri: 8am–5pm AEST",
                      href: undefined,
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded bg-[#0f0f0f] border border-[#2a2a2a] flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-[#c0c0c0]" />
                      </div>
                      <div>
                        <p className="text-[#4a4a4a] text-[10px] uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-white text-sm hover:text-[#c0c0c0] transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg bg-[#1f1f1f] border border-[#2a2a2a] overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={24} className="text-[#2a2a2a] mx-auto mb-2" />
                  <p className="text-[#2a2a2a] text-xs">
                    Melbourne, Victoria
                    <br />
                    Australia
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
