"use client";

import { X } from "lucide-react";
import { categories } from "@/lib/categories";

export interface Filters {
  categories: string[];
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
}

interface FilterSidebarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export default function FilterSidebar({ filters, onChange }: FilterSidebarProps) {
  const toggleCategory = (slug: string) => {
    const current = filters.categories;
    const updated = current.includes(slug)
      ? current.filter((c) => c !== slug)
      : [...current, slug];
    onChange({ ...filters, categories: updated });
  };

  const clearAll = () => {
    onChange({ categories: [], minPrice: 0, maxPrice: 1000, inStockOnly: false });
  };

  const hasActive =
    filters.categories.length > 0 ||
    filters.inStockOnly ||
    filters.minPrice > 0 ||
    filters.maxPrice < 1000;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
          Filters
        </h3>
        {hasActive && (
          <button
            onClick={clearAll}
            className="text-[#4a4a4a] hover:text-white text-xs transition-colors flex items-center gap-1"
          >
            <X size={10} /> Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div>
        <h4 className="text-[#4a4a4a] text-xs tracking-wider uppercase mb-3 font-medium">
          Category
        </h4>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label
              key={cat.slug}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.slug)}
                onChange={() => toggleCategory(cat.slug)}
                className="w-3.5 h-3.5 rounded border border-[#4a4a4a] bg-[#1f1f1f] accent-white cursor-pointer"
              />
              <span className="text-[#4a4a4a] text-sm group-hover:text-white transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h4 className="text-[#4a4a4a] text-xs tracking-wider uppercase mb-3 font-medium">
          Price Range
        </h4>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-[#4a4a4a] text-xs">$</span>
            <input
              type="number"
              min={0}
              max={filters.maxPrice}
              value={filters.minPrice}
              onChange={(e) =>
                onChange({ ...filters, minPrice: Number(e.target.value) })
              }
              className="w-16 bg-[#1f1f1f] border border-[#2a2a2a] rounded px-2 py-1.5 text-white text-xs focus:outline-none focus:border-[#c0c0c0] transition-colors"
            />
          </div>
          <span className="text-[#4a4a4a] text-xs">–</span>
          <div className="flex items-center gap-1">
            <span className="text-[#4a4a4a] text-xs">$</span>
            <input
              type="number"
              min={filters.minPrice}
              max={1000}
              value={filters.maxPrice}
              onChange={(e) =>
                onChange({ ...filters, maxPrice: Number(e.target.value) })
              }
              className="w-16 bg-[#1f1f1f] border border-[#2a2a2a] rounded px-2 py-1.5 text-white text-xs focus:outline-none focus:border-[#c0c0c0] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* In stock */}
      <div>
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) =>
              onChange({ ...filters, inStockOnly: e.target.checked })
            }
            className="w-3.5 h-3.5 rounded border border-[#4a4a4a] bg-[#1f1f1f] accent-white cursor-pointer"
          />
          <span className="text-[#4a4a4a] text-sm group-hover:text-white transition-colors">
            In Stock Only
          </span>
        </label>
      </div>
    </div>
  );
}
