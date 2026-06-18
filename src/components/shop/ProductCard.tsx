"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const isOnSale =
    product.originalPrice && product.originalPrice > product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#1f1f1f] rounded-lg border border-[#2a2a2a] hover:border-[#c0c0c0]/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
    >
      <Link href={`/products/${product.slug}`} className="block">
        {/* Image area */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-6">
              <div className="text-4xl text-[#3a3a3a] mb-2">⬡</div>
              <span className="text-[#3a3a3a] text-xs font-medium">
                MASTERWOLF
              </span>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {isOnSale && <Badge variant="sale">SALE</Badge>}
            {!product.inStock && <Badge variant="outofstock">SOLD OUT</Badge>}
          </div>

          {/* Wishlist */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              setWishlisted((v) => !v);
            }}
            whileTap={{ scale: 0.85 }}
            className="absolute top-3 right-3 w-8 h-8 rounded bg-[#0f0f0f]/80 flex items-center justify-center transition-colors"
            aria-label="Wishlist"
          >
            <Heart
              size={14}
              className={
                wishlisted
                  ? "fill-red-500 text-red-500"
                  : "text-[#4a4a4a] hover:text-white"
              }
            />
          </motion.button>

          {/* Quick view overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="flex items-center gap-1.5 px-4 py-2 bg-[#1f1f1f] rounded text-white text-xs font-semibold tracking-wide border border-[#4a4a4a] hover:border-[#c0c0c0] transition-colors">
              <Eye size={12} />
              QUICK VIEW
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-[#4a4a4a] text-[10px] tracking-wider uppercase mb-1 font-medium">
            {product.brand}
          </p>
          <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 mb-2 group-hover:text-[#c0c0c0] transition-colors">
            {product.name}
          </h3>
          <StarRating
            rating={product.rating}
            reviewCount={product.reviewCount}
            size="sm"
            className="mb-3"
          />
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">
              {formatPrice(product.price)}
            </span>
            {isOnSale && (
              <span className="text-[#4a4a4a] text-sm line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to cart */}
      <div className="px-4 pb-4">
        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.97 }}
          disabled={!product.inStock}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-[#0f0f0f] rounded text-xs font-bold tracking-wider uppercase hover:bg-[#e0e0e0] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ShoppingCart size={13} />
          {added ? "ADDED!" : product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
        </motion.button>
      </div>
    </motion.div>
  );
}
