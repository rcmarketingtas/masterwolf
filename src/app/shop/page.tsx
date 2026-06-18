"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import FilterSidebar, { Filters } from "@/components/shop/FilterSidebar";
import SearchBar from "@/components/shop/SearchBar";
import SortDropdown, { SortOption } from "@/components/shop/SortDropdown";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    minPrice: 0,
    maxPrice: 1000,
    inStockOnly: false,
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }

    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [search, filters, sort]);

  const activeTagCount =
    filters.categories.length + (filters.inStockOnly ? 1 : 0);

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-16">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-[#1f1f1f] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#4a4a4a] mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#c0c0c0]">Shop</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black tracking-tight text-white heading-font mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ALL PRODUCTS
          </h1>
          <p className="text-[#4a4a4a] text-sm">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-[#1f1f1f] border border-[#2a2a2a] rounded text-sm text-white hover:border-[#4a4a4a] transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeTagCount > 0 && (
                <span className="bg-white text-[#0f0f0f] text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                  {activeTagCount}
                </span>
              )}
            </button>
            <SortDropdown value={sort} onChange={setSort} />
          </div>
        </div>

        {/* Active filter tags */}
        {(filters.categories.length > 0 || filters.inStockOnly) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() =>
                  setFilters((f: Filters) => ({
                    ...f,
                    categories: f.categories.filter((c: string) => c !== cat),
                  }))
                }
                className="flex items-center gap-1.5 px-3 py-1 bg-[#1f1f1f] border border-[#2a2a2a] rounded text-xs text-[#c0c0c0] hover:border-[#4a4a4a] transition-colors"
              >
                {cat}
                <X size={10} />
              </button>
            ))}
            {filters.inStockOnly && (
              <button
                onClick={() =>
                  setFilters((f: Filters) => ({ ...f, inStockOnly: false }))
                }
                className="flex items-center gap-1.5 px-3 py-1 bg-[#1f1f1f] border border-[#2a2a2a] rounded text-xs text-[#c0c0c0] hover:border-[#4a4a4a] transition-colors"
              >
                In Stock Only
                <X size={10} />
              </button>
            )}
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-20 p-5 rounded-lg bg-[#1f1f1f] border border-[#2a2a2a]">
              <FilterSidebar filters={filters} onChange={setFilters} />
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-white font-semibold text-lg mb-2">
                  No products found
                </p>
                <p className="text-[#4a4a4a] text-sm mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setFilters({
                      categories: [],
                      minPrice: 0,
                      maxPrice: 1000,
                      inStockOnly: false,
                    });
                  }}
                  className="px-6 py-2.5 bg-white text-[#0f0f0f] text-sm font-semibold rounded hover:bg-[#e0e0e0] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#0f0f0f] border-l border-[#1f1f1f] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-[#4a4a4a] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <FilterSidebar filters={filters} onChange={setFilters} />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 py-3 bg-white text-[#0f0f0f] font-bold text-sm rounded hover:bg-[#e0e0e0] transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
