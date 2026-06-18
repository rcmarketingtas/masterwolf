import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChoose from '@/components/home/WhyChoose';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Categories />
      <FeaturedProducts />
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </>
  );
}
