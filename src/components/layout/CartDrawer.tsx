"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#0f0f0f] border-l border-[#1f1f1f] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f1f1f]">
              <div>
                <h2
                  className="text-xl font-black tracking-wider heading-font text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  YOUR CART
                </h2>
                <p className="text-[#4a4a4a] text-xs mt-0.5">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-[#4a4a4a] hover:text-white transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-[#2a2a2a]" />
                  <div>
                    <p className="text-white font-semibold mb-1">
                      Your cart is empty
                    </p>
                    <p className="text-[#4a4a4a] text-sm">
                      Add some products to get started
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="mt-2 px-6 py-2.5 bg-white text-[#0f0f0f] text-sm font-semibold rounded hover:bg-[#e0e0e0] transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex gap-3 pb-4 border-b border-[#1f1f1f]"
                      >
                        {/* Image */}
                        <div className="w-16 h-16 rounded bg-[#1f1f1f] shrink-0 overflow-hidden relative">
                          <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center">
                            <span className="text-[#4a4a4a] text-xs font-bold">
                              IMG
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium leading-tight line-clamp-2">
                            {item.product.name}
                          </p>
                          <p className="text-[#c0c0c0] text-sm font-semibold mt-1">
                            {formatPrice(item.product.price)}
                          </p>

                          {/* Quantity */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-6 h-6 rounded border border-[#2a2a2a] flex items-center justify-center text-[#c0c0c0] hover:border-[#c0c0c0] transition-colors"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="text-white text-sm w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="w-6 h-6 rounded border border-[#2a2a2a] flex items-center justify-center text-[#c0c0c0] hover:border-[#c0c0c0] transition-colors"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>

                        {/* Remove */}
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="p-1 text-[#4a4a4a] hover:text-red-400 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                          <p className="text-white text-sm font-semibold">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#1f1f1f] bg-[#0a0a0a]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#4a4a4a] text-sm">Subtotal</span>
                  <span className="text-white font-bold text-lg">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-[#4a4a4a] text-xs mb-4">
                  Shipping calculated at checkout. Free shipping on orders over
                  $100.
                </p>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full block text-center bg-white text-[#0f0f0f] font-bold py-3.5 rounded text-sm hover:bg-[#e0e0e0] transition-colors tracking-wide"
                >
                  PROCEED TO CHECKOUT
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="w-full block text-center text-[#4a4a4a] hover:text-white text-sm py-2 mt-2 transition-colors"
                >
                  View Cart
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
