"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a4a4a] pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-9 pr-9 py-2.5 bg-[#1f1f1f] border border-[#2a2a2a] rounded text-white placeholder-[#4a4a4a] text-sm focus:outline-none focus:border-[#c0c0c0] transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a4a4a] hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
