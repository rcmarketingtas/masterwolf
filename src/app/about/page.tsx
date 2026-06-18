import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Target, Users, Award, TrendingUp, MapPin } from "lucide-react";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Masterwolf — Australia's premium automotive detailing supplier. Our story, mission, and commitment to quality.",
};

const stats = [
  { value: "12+", label: "Years in Business" },
  { value: "50K+", label: "Products Sold" },
  { value: "2000+", label: "Professional Clients" },
  { value: "8", label: "States Covered" },
];

const pillars = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    desc: "Every product is rigorously tested by professional detailers before it ever reaches our shelves. We only stock what we'd use ourselves.",
  },
  {
    icon: Target,
    title: "Built for Professionals",
    desc: "Our range is curated specifically for professional detailers, auto shops, and serious enthusiasts who demand consistent results.",
  },
  {
    icon: Users,
    title: "Community & Support",
    desc: "We're not just a supplier — we're part of the detailing community. Expert advice, tutorials, and genuine after-sales support.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(192,192,192,0.05),transparent)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-[#4a4a4a] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              About Masterwolf
            </p>
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white heading-font leading-none mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              BUILT FOR
              <span className="shimmer-text block">PERFECTION</span>
            </h1>
            <p className="text-[#c0c0c0] text-lg leading-relaxed">
              Masterwolf was founded with a single goal: to supply Australian
              detailing professionals with the same-calibre equipment used by the
              world&apos;s best. No compromises. No shortcuts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2
                className="text-4xl sm:text-5xl font-black text-white heading-font mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OUR STORY
              </h2>
              <div className="flex flex-col gap-4 text-[#c0c0c0] text-sm leading-relaxed">
                <p>
                  Masterwolf started over a decade ago in a small garage in
                  Melbourne. Our founder, a veteran detailer with over 15 years
                  of experience, was frustrated by the lack of professional-grade
                  supplies available to Australian detailers without paying
                  international freight.
                </p>
                <p>
                  What began as a personal stockpile of premium pads and
                  compounds quickly became the go-to supplier for detailing
                  professionals across Victoria, then nationally. Today, Masterwolf
                  supplies thousands of professionals, dealerships, and car care
                  enthusiasts across all eight states and territories.
                </p>
                <p>
                  We&apos;ve never stopped being detailers ourselves — every product
                  we stock has been tested in real-world conditions, and we stand
                  behind everything we sell.
                </p>
              </div>
            </AnimatedSection>

            {/* Story image */}
            <AnimatedSection delay={0.2} direction="left">
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden border border-[#2a2a2a]">
                  <Image
                    src="/images/about-story.jpg"
                    alt="Professional detailer at work"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <div className="text-xs tracking-[0.3em] text-[#c0c0c0]/70 uppercase">
                      Est. 2012 · Melbourne, AU
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-24 h-24 rounded-lg bg-[#c0c0c0]/5 border border-[#c0c0c0]/10" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded bg-[#c0c0c0]/5 border border-[#c0c0c0]/10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0f0f0f] border-y border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-lg bg-[#1f1f1f] border border-[#2a2a2a]">
                  <div
                    className="text-5xl font-black text-white heading-font mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#4a4a4a] text-xs tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#4a4a4a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              What Drives Us
            </p>
            <h2
              className="text-5xl font-black text-white heading-font"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              OUR MISSION
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="p-7 rounded-lg bg-[#1f1f1f] border border-[#2a2a2a] h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] flex items-center justify-center mb-5">
                    <p.icon size={20} className="text-[#c0c0c0]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-4xl sm:text-5xl font-black text-white heading-font mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              READY TO EXPERIENCE THE DIFFERENCE?
            </h2>
            <p className="text-[#4a4a4a] mb-8">
              Browse our full range of professional detailing equipment.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f0f0f] font-bold text-sm tracking-widest uppercase rounded hover:bg-[#e0e0e0] transition-colors"
            >
              Shop All Products
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
