"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Zap, Shield, Truck, ChevronRight } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const isOnSale =
    product.originalPrice && product.originalPrice > product.price;
  const discount = isOnSale
    ? Math.round(
        ((product.originalPrice! - product.price) / product.originalPrice!) *
          100
      )
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-[#4a4a4a]">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight size={10} />
        <Link href="/shop" className="hover:text-white transition-colors">
          Shop
        </Link>
        <ChevronRight size={10} />
        <span className="text-[#c0c0c0]">{product.name}</span>
      </div>

      {/* Category */}
      <div>
        <span className="text-[#4a4a4a] text-xs tracking-wider uppercase font-medium">
          {product.category.replace("-", " ")}
        </span>
      </div>

      {/* Name */}
      <h1
        className="text-4xl sm:text-5xl font-black tracking-tight text-white heading-font leading-none"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {product.name.toUpperCase()}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <StarRating
          rating={product.rating}
          reviewCount={product.reviewCount}
          size="md"
        />
        <span className="text-[#4a4a4a] text-xs">
          {product.rating.toFixed(1)} out of 5
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-white">
          {formatPrice(product.price)}
        </span>
        {isOnSale && (
          <>
            <span className="text-[#4a4a4a] text-lg line-through">
              {formatPrice(product.originalPrice!)}
            </span>
            <Badge variant="sale">SAVE {discount}%</Badge>
          </>
        )}
      </div>

      {/* SKU + Stock */}
      <div className="flex items-center gap-4 text-xs">
        <span className="text-[#4a4a4a]">SKU: {product.sku}</span>
        {product.inStock ? (
          <Badge variant="instock">
            In Stock ({product.stockCount} available)
          </Badge>
        ) : (
          <Badge variant="outofstock">Out of Stock</Badge>
        )}
      </div>

      {/* Description */}
      <p className="text-[#c0c0c0] text-sm leading-relaxed border-t border-[#1f1f1f] pt-5">
        {product.description}
      </p>

      {/* Quantity + Add to cart */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <div className="flex items-center gap-0 border border-[#2a2a2a] rounded overflow-hidden">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-11 flex items-center justify-center text-[#c0c0c0] hover:bg-[#1f1f1f] transition-colors text-lg"
          >
            −
          </button>
          <span className="w-12 text-center text-white font-semibold text-sm">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-11 flex items-center justify-center text-[#c0c0c0] hover:bg-[#1f1f1f] transition-colors text-lg"
          >
            +
          </button>
        </div>

        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.97 }}
          disabled={!product.inStock}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-[#0f0f0f] font-bold text-sm tracking-wider uppercase rounded hover:bg-[#e0e0e0] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ShoppingCart size={15} />
          {added ? "ADDED TO CART!" : "ADD TO CART"}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={!product.inStock}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-[#1f1f1f] border border-[#2a2a2a] text-white font-bold text-sm tracking-wider uppercase rounded hover:border-[#c0c0c0] transition-colors disabled:opacity-40"
        >
          <Zap size={15} />
          BUY NOW
        </motion.button>
      </div>

      {/* Trust signals */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#1f1f1f]">
        {[
          { icon: Truck, label: "Free Shipping Over $100" },
          { icon: Shield, label: "30-Day Returns" },
          { icon: Zap, label: "Same-Day Dispatch" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 text-center p-3 rounded bg-[#1f1f1f] border border-[#2a2a2a]"
          >
            <Icon size={16} className="text-[#c0c0c0]" />
            <span className="text-[#4a4a4a] text-[10px] leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Specifications table */}
      <div className="pt-4">
        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
          Specifications
        </h3>
        <div className="rounded-lg border border-[#1f1f1f] overflow-hidden">
          {Object.entries(product.specifications).map(([key, value], i) => (
            <div
              key={key}
              className={`flex text-sm ${i % 2 === 0 ? "bg-[#1f1f1f]" : "bg-[#0f0f0f]"}`}
            >
              <div className="w-2/5 px-4 py-2.5 text-[#4a4a4a] font-medium border-r border-[#2a2a2a]">
                {key}
              </div>
              <div className="flex-1 px-4 py-2.5 text-[#c0c0c0]">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
