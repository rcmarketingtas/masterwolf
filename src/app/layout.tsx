import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

export const metadata: Metadata = {
  title: {
    default: 'Masterwolf | Professional Detailing Equipment Australia',
    template: '%s | Masterwolf',
  },
  description:
    'Premium automotive detailing supplies and professional car care equipment. Foam pads, polishers, microfibre cloths and more. Fast Australia-wide shipping.',
  keywords: [
    'Car Detailing Supplies Australia',
    'Foam Pads Australia',
    'Car Polisher Australia',
    'Professional Detailing Equipment',
    'Automotive Detailing Products',
    'Microfibre Cloths Australia',
  ],
  openGraph: {
    siteName: 'Masterwolf',
    url: 'https://masterwolf.com.au',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
