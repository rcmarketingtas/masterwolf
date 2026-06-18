"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  const shipping = subtotal >= 100 ? 0 : 9.95;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] pt-16 flex items-center justify-center">
        <div className="text-center px-4">
          <ShoppingBag size={64} className="text-[#2a2a2a] mx-auto mb-6" />
          <h1
            className="text-5xl font-black text-white heading-font mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            YOUR CART IS EMPTY
          </h1>
          <p className="text-[#4a4a4a] mb-8">
            Looks like you haven&apos;t added any products yet.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0f0f0f] font-bold text-sm tracking-widest uppercase rounded hover:bg-[#e0e0e0] transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1
            className="text-5xl sm:text-6xl font-black text-white heading-font"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            YOUR CART
          </h1>
          <p className="text-[#4a4a4a] text-sm mt-1">
            {items.length} item{items.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-4 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]"
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-20 rounded bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center shrink-0">
                      <span className="text-[#3a3a3a] text-2xl">⬡</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-white font-semibold text-sm hover:text-[#c0c0c0] transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-[#4a4a4a] text-xs mt-0.5">
                        {item.product.sku}
                      </p>
                      <p className="text-[#c0c0c0] font-semibold text-sm mt-1">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-[#4a4a4a] hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 size={14} />
                      </button>

                      <div className="flex flex-col items-end gap-2">
                        <p className="text-white font-bold text-sm">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <div className="flex items-center gap-1 border border-[#2a2a2a] rounded overflow-hidden">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-[#c0c0c0] hover:bg-[#2a2a2a] transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="w-8 text-center text-white text-xs">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-[#c0c0c0] hover:bg-[#2a2a2a] transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-6">
              <Link
                href="/shop"
                className="flex items-center gap-2 text-[#4a4a4a] hover:text-white text-sm transition-colors"
              >
                <ArrowLeft size={14} />
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-[#4a4a4a] hover:text-red-400 text-xs transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 p-6 bg-[#1f1f1f] rounded-lg border border-[#2a2a2a]">
              <h2
                className="text-xl font-black text-white heading-font mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ORDER SUMMARY
              </h2>

              <div className="flex flex-col gap-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-[#4a4a4a]">Subtotal</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4a4a4a]">Shipping</span>
                  <span className="text-white">
                    {shipping === 0 ? (
                      <span className="text-emerald-400">FREE</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-[#4a4a4a] text-xs">
                    Add {formatPrice(100 - subtotal)} more for free shipping
                  </p>
                )}
              </div>

              <div className="flex justify-between font-bold border-t border-[#2a2a2a] pt-4 mb-5">
                <span className="text-white">Total</span>
                <span className="text-white text-xl">{formatPrice(total)}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full block text-center bg-white text-[#0f0f0f] font-bold py-3.5 rounded text-sm hover:bg-[#e0e0e0] transition-colors tracking-wide uppercase"
              >
                Proceed to Checkout
              </Link>

              <div className="mt-4 text-center text-[#4a4a4a] text-xs">
                Secure checkout · SSL encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
