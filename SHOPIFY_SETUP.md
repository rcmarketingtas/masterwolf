# Shopify Headless Integration Setup

## Prerequisites
- A Shopify store (start a free trial at shopify.com)
- Admin access to your store

## Steps

### 1. Create a Custom App in Shopify Admin
1. Go to your Shopify Admin → Settings → Apps and sales channels
2. Click "Develop apps" → "Create an app"
3. Name it "Masterwolf Storefront"
4. Click "Configure Storefront API scopes"
5. Enable these scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_collection_listings`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_customers`
   - `unauthenticated_read_customers`
6. Click "Save" then "Install app"
7. Copy the **Storefront API access token**

### 2. Configure Environment Variables
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Fill in your values:
```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=masterwolf.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-token-here
NEXT_PUBLIC_SHOPIFY_API_VERSION=2025-01
```

### 3. Set Up Your Products
In Shopify Admin:
- Add your products with the same handles as in `src/lib/products.ts`
- Add product images
- Set prices and inventory
- Organize into collections matching your categories

### 4. Test
```bash
npm run dev
```

Open the browser — product data will now come from Shopify automatically.

## How It Works

The integration uses a **graceful fallback pattern**:
- When `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` and `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` are set → **live Shopify data**
- When env vars are missing → **mock data** from `src/lib/products.ts`

This means the site always works, even before Shopify is configured.

## Cart & Checkout Flow

1. Customer adds product → `ShopifyCartContext.addItem(variantId)` is called
2. A Shopify cart is created via Storefront API `cartCreate` mutation
3. Cart ID is persisted to `localStorage`
4. "Checkout" button redirects to `cart.checkoutUrl` — Shopify's native hosted checkout
5. Payment is handled entirely by Shopify (Shopify Payments, PayPal, etc.)

## Customizing the Checkout

Shopify's hosted checkout handles:
- Address collection
- Shipping rate calculation
- Payment processing (Shopify Payments, PayPal, Afterpay, etc.)
- Order confirmation emails
- Order management

To customize checkout appearance, use Shopify's checkout editor in the admin.

## File Structure

```
src/
├── lib/
│   └── shopify/
│       ├── client.ts      # Storefront API client + shopifyFetch helper
│       ├── queries.ts     # All GraphQL queries and mutations
│       ├── types.ts       # TypeScript interfaces
│       └── index.ts       # Public API: getProducts, createCart, etc.
└── context/
    └── ShopifyCartContext.tsx  # React context for cart state management
```

## Usage Examples

### Fetch products in a Server Component
```tsx
import { getProducts } from '@/lib/shopify';

export default async function ProductsPage() {
  const products = await getProducts({ first: 12 });
  // falls back to [] when Shopify is not configured
  return <ProductGrid products={products} />;
}
```

### Use the cart in a Client Component
```tsx
'use client';
import { useShopifyCart } from '@/context/ShopifyCartContext';

export function AddToCartButton({ variantId }: { variantId: string }) {
  const { addItem, isLoading, isConfigured } = useShopifyCart();

  if (!isConfigured) return null;

  return (
    <button onClick={() => addItem(variantId)} disabled={isLoading}>
      {isLoading ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}
```
