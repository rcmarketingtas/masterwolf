'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <ShoppingBag className="w-12 h-12 text-brand-mid mb-4" />
        <h3 className="font-heading text-2xl text-white mb-2">No Products Found</h3>
        <p className="text-brand-silver text-sm mb-6">
          Try adjusting your filters or search term.
        </p>
        <Link
          href="/shop"
          className="text-brand-silver hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors"
        >
          Clear All Filters
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}
