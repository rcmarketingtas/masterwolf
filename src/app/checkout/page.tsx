"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Lock, CreditCard, Truck, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, generateOrderNumber } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  shippingMethod: "standard" | "express";
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardName: string;
}

const STEPS = [
  { id: 1, label: "Details", icon: User },
  { id: 2, label: "Shipping", icon: Truck },
  { id: 3, label: "Payment", icon: CreditCard },
  { id: 4, label: "Confirm", icon: Check },
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>(1);
  const [orderNumber] = useState(generateOrderNumber());
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    shippingMethod: "standard",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  const shipping = form.shippingMethod === "express" ? 19.95 : subtotal >= 100 ? 0 : 9.95;
  const total = subtotal + shipping;

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleNext = () => {
    if (step < 4) {
      if (step === 3) {
        clearCart();
      }
      setStep((s) => (s + 1) as Step);
    }
  };

  const inputClass =
    "w-full bg-[#1f1f1f] border border-[#2a2a2a] rounded px-3 py-2.5 text-white placeholder-[#4a4a4a] text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors";
  const labelClass = "block text-[#4a4a4a] text-xs tracking-wide uppercase mb-1.5 font-medium";

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Step indicator */}
        <div className="flex items-center justify-between mb-10 max-w-xl">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step > s.id
                      ? "bg-white text-[#0f0f0f]"
                      : step === s.id
                      ? "bg-[#2a2a2a] text-white border border-[#c0c0c0]"
                      : "bg-[#1f1f1f] text-[#4a4a4a] border border-[#2a2a2a]"
                  }`}
                >
                  {step > s.id ? <Check size={14} /> : <s.icon size={14} />}
                </div>
                <span
                  className={`text-[10px] tracking-wide uppercase ${
                    step >= s.id ? "text-[#c0c0c0]" : "text-[#4a4a4a]"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-px w-12 sm:w-16 mx-2 mb-5 transition-colors ${
                    step > s.id ? "bg-[#c0c0c0]" : "bg-[#2a2a2a]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]"
                >
                  <h2
                    className="text-2xl font-black text-white heading-font mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    CUSTOMER DETAILS
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name</label>
                      <input
                        className={inputClass}
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input
                        className={inputClass}
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        placeholder="Smith"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className={labelClass}>Email Address</label>
                      <input
                        className={inputClass}
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className={labelClass}>Phone Number</label>
                      <input
                        className={inputClass}
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+61 400 000 000"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]"
                >
                  <h2
                    className="text-2xl font-black text-white heading-font mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    SHIPPING ADDRESS
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className={labelClass}>Street Address</label>
                      <input
                        className={inputClass}
                        value={form.address}
                        onChange={(e) => update("address", e.target.value)}
                        placeholder="123 Smith Street"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Suburb</label>
                      <input
                        className={inputClass}
                        value={form.suburb}
                        onChange={(e) => update("suburb", e.target.value)}
                        placeholder="Melbourne"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>State</label>
                      <select
                        className={inputClass}
                        value={form.state}
                        onChange={(e) => update("state", e.target.value)}
                      >
                        <option value="" className="bg-[#1f1f1f]">
                          Select state
                        </option>
                        {["VIC", "NSW", "QLD", "SA", "WA", "TAS", "NT", "ACT"].map(
                          (s) => (
                            <option key={s} value={s} className="bg-[#1f1f1f]">
                              {s}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Postcode</label>
                      <input
                        className={inputClass}
                        value={form.postcode}
                        onChange={(e) => update("postcode", e.target.value)}
                        placeholder="3000"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  {/* Shipping method */}
                  <div className="mt-6">
                    <label className={labelClass}>Shipping Method</label>
                    <div className="flex flex-col gap-2 mt-2">
                      {[
                        {
                          id: "standard",
                          label: "Standard Shipping",
                          desc: "3–7 business days",
                          price: subtotal >= 100 ? "FREE" : "$9.95",
                        },
                        {
                          id: "express",
                          label: "Express Shipping",
                          desc: "1–2 business days",
                          price: "$19.95",
                        },
                      ].map((method) => (
                        <label
                          key={method.id}
                          className={`flex items-center justify-between p-3.5 rounded border cursor-pointer transition-colors ${
                            form.shippingMethod === method.id
                              ? "border-[#c0c0c0] bg-[#2a2a2a]"
                              : "border-[#2a2a2a] hover:border-[#4a4a4a]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="shipping"
                              value={method.id}
                              checked={form.shippingMethod === method.id}
                              onChange={(e) =>
                                update(
                                  "shippingMethod",
                                  e.target.value as "standard" | "express"
                                )
                              }
                              className="accent-white"
                            />
                            <div>
                              <p className="text-white text-sm font-medium">
                                {method.label}
                              </p>
                              <p className="text-[#4a4a4a] text-xs">
                                {method.desc}
                              </p>
                            </div>
                          </div>
                          <span className="text-[#c0c0c0] text-sm font-semibold">
                            {method.price}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]"
                >
                  <h2
                    className="text-2xl font-black text-white heading-font mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    PAYMENT DETAILS
                  </h2>
                  <p className="text-[#4a4a4a] text-xs mb-6 flex items-center gap-1.5">
                    <Lock size={10} /> Secure, 256-bit SSL encrypted payment
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className={labelClass}>Card Number</label>
                      <input
                        className={inputClass}
                        value={form.cardNumber}
                        onChange={(e) => update("cardNumber", e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                    <div className="col-span-2">
                      <label className={labelClass}>Name on Card</label>
                      <input
                        className={inputClass}
                        value={form.cardName}
                        onChange={(e) => update("cardName", e.target.value)}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Expiry Date</label>
                      <input
                        className={inputClass}
                        value={form.expiry}
                        onChange={(e) => update("expiry", e.target.value)}
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>CVV</label>
                      <input
                        className={inputClass}
                        value={form.cvv}
                        onChange={(e) => update("cvv", e.target.value)}
                        placeholder="123"
                        maxLength={4}
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-[#0f0f0f] rounded border border-[#2a2a2a] flex items-start gap-2">
                    <Lock size={12} className="text-[#4a4a4a] mt-0.5 shrink-0" />
                    <p className="text-[#4a4a4a] text-xs leading-relaxed">
                      This is a demo checkout. No real payment is processed. In
                      production, integrate with Stripe or a payment gateway of
                      your choice.
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a] text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-600/30 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check size={28} className="text-emerald-400" />
                  </motion.div>
                  <h2
                    className="text-4xl font-black text-white heading-font mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    ORDER CONFIRMED!
                  </h2>
                  <p className="text-[#4a4a4a] mb-1">
                    Thank you, {form.firstName || "valued customer"}!
                  </p>
                  <p className="text-[#c0c0c0] font-semibold mb-6">
                    Order #{orderNumber}
                  </p>
                  <p className="text-[#4a4a4a] text-sm max-w-sm mx-auto mb-8">
                    We&apos;ve received your order and will send a confirmation
                    email to {form.email || "your email address"}. Your order
                    will be dispatched within 1 business day.
                  </p>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0f0f0f] font-bold text-sm tracking-widest uppercase rounded hover:bg-[#e0e0e0] transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {step < 4 && (
              <div className="flex justify-between mt-5">
                {step > 1 ? (
                  <button
                    onClick={() => setStep((s) => (s - 1) as Step)}
                    className="px-5 py-2.5 bg-[#1f1f1f] border border-[#2a2a2a] text-white text-sm rounded hover:border-[#4a4a4a] transition-colors"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}
                <motion.button
                  onClick={handleNext}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-2.5 bg-white text-[#0f0f0f] font-bold text-sm rounded hover:bg-[#e0e0e0] transition-colors"
                >
                  {step === 3 ? "Place Order" : "Continue"}
                  <ChevronRight size={14} />
                </motion.button>
              </div>
            )}
          </div>

          {/* Order summary sidebar */}
          {step < 4 && (
            <div className="lg:col-span-1">
              <div className="sticky top-20 p-5 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
                <h3
                  className="text-lg font-black text-white heading-font mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  ORDER SUMMARY
                </h3>
                <div className="flex flex-col gap-2 mb-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-[#4a4a4a] line-clamp-1 flex-1 mr-2">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span className="text-[#c0c0c0] shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#2a2a2a] pt-3 flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#4a4a4a]">Subtotal</span>
                    <span className="text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#4a4a4a]">Shipping</span>
                    <span className="text-white">
                      {shipping === 0 ? (
                        <span className="text-emerald-400">FREE</span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold mt-1 pt-2 border-t border-[#2a2a2a]">
                    <span className="text-white text-sm">Total</span>
                    <span className="text-white">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
