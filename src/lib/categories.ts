import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "foam-pads",
    name: "Foam Pads",
    slug: "foam-pads",
    description: "Professional cutting, polishing & finishing pads for every stage of paint correction.",
    productCount: 2,
    image: "",
  },
  {
    id: "polishers",
    name: "Polishers & Buffers",
    slug: "polishers",
    description: "Rotary and dual-action polishers engineered for professional-grade paint correction.",
    productCount: 2,
    image: "",
  },
  {
    id: "microfibre",
    name: "Microfibre Cloths",
    slug: "microfibre",
    description: "Ultra-soft, scratch-free microfibre cloths for every step of the detailing process.",
    productCount: 1,
    image: "",
  },
  {
    id: "clay-mitts",
    name: "Clay Mitts",
    slug: "clay-mitts",
    description: "Next-generation clay mitts for fast, thorough paint decontamination.",
    productCount: 1,
    image: "",
  },
  {
    id: "chemicals",
    name: "Chemicals & Sprays",
    slug: "chemicals",
    description: "Professional-strength chemicals, iron removers, and spray detailers.",
    productCount: 3,
    image: "",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
