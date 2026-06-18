import { Product } from "@/types";
import ProductCard from "@/components/shop/ProductCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 border-t border-[#1f1f1f]">
      <AnimatedSection className="mb-8">
        <h2
          className="text-4xl font-black text-white heading-font"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          RELATED PRODUCTS
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
