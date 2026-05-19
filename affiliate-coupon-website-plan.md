# Affiliate Coupon Website — Implementation Plan

> **Project:** Affiliate Products & Coupon Codes Platform  
> **Goal:** A high-converting, SEO-rich affiliate website where users discover deals, copy coupon codes, and click affiliate links to purchase.  
> **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Prisma + PostgreSQL + Redis + Vercel

---

## 1. Tech Stack & Architecture

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 14 (App Router) | SSR/SSG for SEO, API routes, edge-ready |
| **Language** | TypeScript | Type safety, better DX |
| **Styling** | Tailwind CSS + shadcn/ui | Rapid UI, consistent design system |
| **Database** | PostgreSQL (via Prisma ORM) | Relational data, full-text search, JSONB for metadata |
| **Cache** | Redis (Upstash) | Session store, rate limiting, hot deal caching |
| **Auth** | NextAuth.js (OAuth + Credentials) | User accounts for "My Coupons", deal alerts |
| **CMS** | Sanity CMS (or self-built admin) | Manage products, coupons, categories |
| **Analytics** | Plausible + Google Analytics 4 | Privacy-friendly + comprehensive tracking |
| **Hosting** | Vercel (Edge Network) | Global CDN, instant deploys, image optimization |
| **Images** | Cloudinary / Vercel Blob | Optimized product images, WebP/AVIF |
| **Email** | Resend / SendGrid | Deal alerts, weekly digest, welcome series |
| **Search** | Algolia / Meilisearch | Instant product/coupon search |

### Architecture Diagram (Mental Model)
```
User → Vercel Edge (Next.js) → Redis Cache → PostgreSQL (Prisma)
                                    ↓
                              Sanity CMS (Admin)
                                    ↓
                              Affiliate Networks APIs (CJ, Impact, etc.)
```

---

## 2. Core Features Breakdown

### 2.1 Public-Facing Features
- **Homepage:** Hero section, trending deals, category grid, featured stores
- **Deal/Coupon Pages:** Individual pages for each coupon with SEO-optimized content
- **Store Pages:** Aggregated deals per brand/store (e.g., `/store/amazon`)
- **Category Pages:** `/category/electronics`, `/category/fashion`
- **Search:** Instant search with filters (discount %, category, store, expiry)
- **Copy-to-Clipboard:** One-click copy for coupon codes with visual feedback
- **Affiliate Redirect:** Tracked redirect with click analytics before sending to merchant
- **Deal Expiry Countdown:** Urgency timers for limited-time offers
- **User Accounts:** Save favorite coupons, deal alerts, browsing history
- **Newsletter:** Weekly best deals digest
- **Blog:** SEO content hub for buying guides, seasonal roundups

### 2.2 Admin/Backend Features
- **Dashboard:** Revenue metrics, click-through rates, top-performing deals, real-time stats
- **Affiliate Management Panel:** Full CRUD for affiliate partners, networks, and commission tracking
- **Coupon Manager:** CRUD for coupons, expiry dates, usage limits
- **Product Importer:** Bulk import via CSV or affiliate network APIs
- **Link Cloaking:** Automatic affiliate link generation and tracking
- **SEO Manager:** Meta tags, Open Graph, structured data per page
- **User Management:** Roles, permissions, activity logs
- **Analytics & Reports:** Exportable reports, trend analysis, fraud detection

---

## 3. Database Schema (Prisma)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  image         String?
  role          Role      @default(USER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  favorites     Favorite[]
  clicks        Click[]
  alerts        Alert[]
  activityLogs  ActivityLog[]
}

model Affiliate {
  id            String    @id @default(cuid())
  name          String
  slug          String    @unique
  email         String?
  website       String?
  logo          String?
  description   String?   @db.Text
  network       AffiliateNetwork @default(DIRECT)
  networkApiKey String?   // Encrypted API key for network integration
  commissionType CommissionType @default(CPS)
  commissionRate Float     // e.g., 5.5 = 5.5%
  cookieDuration Int       @default(30) // days
  paymentMethod String?    // PayPal, Wire, etc.
  paymentEmail  String?
  status        AffiliateStatus @default(ACTIVE)
  isFeatured    Boolean   @default(false)
  clicks        Click[]
  conversions   Conversion[]
  coupons       Coupon[]
  products      Product[]
  stores        Store[]
  notes         String?   @db.Text
  totalClicks   Int       @default(0)
  totalRevenue  Float     @default(0)
  totalPaid     Float     @default(0)
  balanceDue    Float     @default(0)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([slug])
  @@index([status])
  @@index([network])
}

model Store {
  id            String    @id @default(cuid())
  slug          String    @unique
  name          String
  logo          String?
  description   String?   @db.Text
  website       String
  affiliateId   String?
  affiliate     Affiliate? @relation(fields: [affiliateId], references: [id], onDelete: SetNull)
  commissionRate Float?
  isFeatured    Boolean   @default(false)
  products      Product[]
  coupons       Coupon[]
  createdAt     DateTime  @default(now())

  @@index([slug])
  @@index([isFeatured])
  @@index([affiliateId])
}

model Category {
  id            String    @id @default(cuid())
  slug          String    @unique
  name          String
  description   String?   @db.Text
  image         String?
  parentId      String?
  parent        Category? @relation("CategoryHierarchy", fields: [parentId], references: [id])
  children      Category[] @relation("CategoryHierarchy")
  products      Product[]
  coupons       Coupon[]

  @@index([slug])
}

model Product {
  id            String    @id @default(cuid())
  slug          String    @unique
  name          String
  description   String?   @db.Text
  image         String?
  originalPrice Float?
  salePrice     Float?
  currency      String    @default("USD")
  storeId       String
  store         Store     @relation(fields: [storeId], references: [id], onDelete: Cascade)
  categoryId    String?
  category      Category? @relation(fields: [categoryId], references: [id])
  affiliateId   String?
  affiliate     Affiliate? @relation(fields: [affiliateId], references: [id], onDelete: SetNull)
  coupons       Coupon[]
  clicks        Click[]
  isFeatured    Boolean   @default(false)
  isActive      Boolean   @default(true)
  seoTitle      String?
  seoDesc       String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([slug])
  @@index([storeId])
  @@index([categoryId])
  @@index([affiliateId])
  @@index([isFeatured])
  @@index([isActive])
}

model Coupon {
  id            String    @id @default(cuid())
  code          String?
  title         String
  description   String?   @db.Text
  discountType  DiscountType @default(PERCENTAGE)
  discountValue Float?
  minPurchase   Float?
  maxDiscount   Float?
  affiliateUrl  String    @db.Text
  productId     String?
  product       Product?  @relation(fields: [productId], references: [id], onDelete: SetNull)
  storeId       String
  store         Store     @relation(fields: [storeId], references: [id], onDelete: Cascade)
  categoryId    String?
  category      Category? @relation(fields: [categoryId], references: [id])
  affiliateId   String?
  affiliate     Affiliate? @relation(fields: [affiliateId], references: [id], onDelete: SetNull)
  clicks        Click[]
  conversions   Conversion[]
  favorites     Favorite[]
  startDate     DateTime  @default(now())
  endDate       DateTime?
  isVerified    Boolean   @default(true)
  isFeatured    Boolean   @default(false)
  isActive      Boolean   @default(true)
  usageCount    Int       @default(0)
  successRate   Float     @default(0)
  seoTitle      String?
  seoDesc       String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([storeId])
  @@index([productId])
  @@index([categoryId])
  @@index([affiliateId])
  @@index([isActive])
  @@index([isFeatured])
  @@index([endDate])
  @@index([code])
}

model Click {
  id            String    @id @default(cuid())
  couponId      String?
  coupon        Coupon?   @relation(fields: [couponId], references: [id], onDelete: SetNull)
  productId     String?
  product       Product?  @relation(fields: [productId], references: [id], onDelete: SetNull)
  affiliateId   String?
  affiliate     Affiliate? @relation(fields: [affiliateId], references: [id], onDelete: SetNull)
  userId        String?
  user          User?     @relation(fields: [userId], references: [id], onDelete: SetNull)
  ipAddress     String?
  userAgent     String?
  referrer      String?
  country       String?
  device        String?
  isUnique      Boolean   @default(true) // deduplicated per 24h
  createdAt     DateTime  @default(now())

  @@index([couponId])
  @@index([productId])
  @@index([affiliateId])
  @@index([createdAt])
  @@index([isUnique])
}

model Conversion {
  id            String    @id @default(cuid())
  clickId       String    @unique
  couponId      String?
  coupon        Coupon?   @relation(fields: [couponId], references: [id], onDelete: SetNull)
  affiliateId   String?
  affiliate     Affiliate? @relation(fields: [affiliateId], references: [id], onDelete: SetNull)
  orderValue    Float?
  commission    Float?
  currency      String    @default("USD")
  status        ConversionStatus @default(PENDING)
  merchantRef   String?   // Order ID from merchant
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([affiliateId])
  @@index([status])
  @@index([createdAt])
}

model Favorite {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  couponId      String
  coupon        Coupon    @relation(fields: [couponId], references: [id], onDelete: Cascade)
  createdAt     DateTime  @default(now())

  @@unique([userId, couponId])
}

model Alert {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  storeId       String?
  categoryId    String?
  minDiscount   Float?
  emailEnabled  Boolean   @default(true)
  createdAt     DateTime  @default(now())
}

model ActivityLog {
  id            String    @id @default(cuid())
  userId        String?
  user          User?     @relation(fields: [userId], references: [id], onDelete: SetNull)
  action        String    // e.g., "affiliate_created", "coupon_updated"
  entityType    String    // "affiliate", "coupon", "store"
  entityId      String?
  details       Json?     // Flexible metadata
  ipAddress     String?
  createdAt     DateTime  @default(now())

  @@index([userId])
  @@index([action])
  @@index([createdAt])
}

enum Role {
  USER
  ADMIN
  EDITOR
}

enum AffiliateNetwork {
  DIRECT
  CJ
  IMPACT
  SHAREASALE
  AMAZON_ASSOCIATES
  AWIN
  RAKUTEN
  OTHER
}

enum AffiliateStatus {
  ACTIVE
  PAUSED
  PENDING
  REJECTED
  TERMINATED
}

enum CommissionType {
  CPS        // Cost Per Sale
  CPA        // Cost Per Action
  CPC        // Cost Per Click
  CPL        // Cost Per Lead
  REVENUE_SHARE
}

enum DiscountType {
  PERCENTAGE
  FIXED
  FREE_SHIPPING
  BOGO
}

enum ConversionStatus {
  PENDING
  CONFIRMED
  REJECTED
  PAID
}
```

---

## 4. SEO Strategy (Critical)

### 4.1 Technical SEO
- **SSR/SSG:** Every public page server-rendered with Next.js App Router
- **Dynamic Sitemap:** Auto-generated `sitemap.xml` with 50k URLs, lastmod, priority
- **Robots.txt:** Configured with crawl rules, sitemap reference
- **Canonical URLs:** Prevent duplicate content issues
- **Hreflang:** If targeting multiple countries/languages
- **Core Web Vitals:** LCP < 2.5s, CLS < 0.1, FID < 100ms
- **Schema.org Markup:** JSON-LD structured data on every page type
- **URL Structure:** Clean, keyword-rich slugs
  - `/deals/{store-slug}/{coupon-slug}`
  - `/stores/{store-slug}`
  - `/categories/{category-slug}`
  - `/blog/{post-slug}`

### 4.2 Structured Data (JSON-LD)
```json
// Coupon/Offer Schema
{
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "50% Off Nike Shoes",
  "description": "Get 50% off on all running shoes...",
  "url": "https://yoursite.com/deals/nike/50-off-running-shoes",
  "seller": {
    "@type": "Organization",
    "name": "Nike"
  },
  "price": "49.99",
  "priceCurrency": "USD",
  "availability": "https://schema.org/InStock",
  "validFrom": "2026-05-01",
  "validThrough": "2026-05-31",
  "couponCode": "RUN50"
}

// Organization Schema (Homepage)
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "YourSiteName",
  "url": "https://yoursite.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yoursite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 4.3 On-Page SEO
- **Title Tags:** `{Coupon Title} | {Store Name} Deals | YourSiteName` (50-60 chars)
- **Meta Descriptions:** Compelling CTA with discount info (150-160 chars)
- **Open Graph:** Rich previews for social sharing
- **Twitter Cards:** Summary Large Image for deal sharing
- **Internal Linking:** Related deals, breadcrumb navigation, category cross-links
- **Image Alt Text:** Descriptive, keyword-rich alt tags
- **Heading Hierarchy:** Single H1, logical H2-H6 structure

### 4.4 Content SEO
- **Buying Guides:** `/blog/best-running-shoes-2026` → internal links to deals
- **Seasonal Content:** Black Friday, Cyber Monday, Back-to-School roundups
- **Store Reviews:** Honest reviews with pros/cons + active deals
- **FAQ Sections:** Schema markup for "People Also Ask" visibility
- **Comparison Tables:** X vs Y product comparisons with affiliate links

### 4.5 Off-Page SEO
- **Link Building:** Guest posts on deal forums, Reddit communities, deal aggregator submissions
- **Social Signals:** Pinterest boards (high intent for deals), Twitter/X deal alerts
- **Email Outreach:** Notify stores when featuring them (potential backlinks)
- **Press Releases:** Major launches, exclusive partnerships

---

## 5. Page Structure & Design System

### 5.1 Homepage Layout
```
[Header: Logo | Search | Categories | Login]
[Hero Banner: "Today's Top Deals" - 3 featured cards]
[Trust Badges: "Verified Coupons" | "Hand-Tested Daily" | "Exclusive Codes"]
[Category Grid: 8-12 categories with icons]
[Trending Deals: Horizontal scroll/carousel]
[Featured Stores: Logo grid with deal counts]
[How It Works: 3-step visual guide]
[Blog Teaser: 3 latest posts]
[Newsletter: "Never Miss a Deal" CTA]
[Footer: Links, Legal, Social]
```

### 5.2 Coupon Card Component
```
┌─────────────────────────────────────┐
│ [Store Logo]  Store Name     [Heart]│
│                                     │
│ 30% OFF Summer Collection          │
│ Verified • 2,341 used today        │
│                                     │
│ ┌─────────────────────────────┐    │
│ │  SUMMER30  [Copy Button]   │    │
│ └─────────────────────────────┘    │
│                                     │
│ [Get Deal →]  Expires in 2 days    │
└─────────────────────────────────────┘
```

### 5.3 Individual Coupon Page
```
[Breadcrumb: Home > Stores > Nike > 30% Off]
[Hero: Large coupon card with copy CTA]
[Store Info: Logo, rating, total deals]
[Deal Details: Terms, exclusions, expiry]
[How to Use: Step-by-step accordion]
[Related Deals: "More Nike Coupons"]
[Related Stores: "Similar Brands"]
[User Reviews: "Did this code work?"]
[FAQ: Schema markup for rich snippets]
```

### 5.4 Design Tokens (Tailwind)
```js
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',  // Orange - urgency/action
          600: '#ea580c',
          700: '#c2410c',
        },
        success: {
          500: '#22c55e',  // Green - verified/working
        },
        deal: {
          bg: '#fafafa',
          card: '#ffffff',
          border: '#e5e7eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'copy-pulse': 'copyPulse 0.3s ease-in-out',
        'countdown': 'countdown 1s linear infinite',
      }
    }
  }
}
```

---

## 6. Affiliate Link Architecture

### 6.1 Link Cloaking & Tracking
```
User clicks "Get Deal" 
  → POST /api/click (record analytics)
  → Redirect to /out/{tracking-id}
  → 302 redirect to actual affiliate URL
  → Merchant site
```

### 6.2 Click Tracking API
```typescript
// app/api/click/route.ts
export async function POST(req: Request) {
  const { couponId, productId, referrer } = await req.json();

  const click = await prisma.click.create({
    data: {
      couponId,
      productId,
      ipAddress: req.headers.get('x-forwarded-for'),
      userAgent: req.headers.get('user-agent'),
      referrer,
      country: req.headers.get('cf-ipcountry'), // Cloudflare
      device: parseDevice(req.headers.get('user-agent')),
    }
  });

  // Update coupon usage count
  await prisma.coupon.update({
    where: { id: couponId },
    data: { usageCount: { increment: 1 } }
  });

  return Response.json({ redirectUrl: cloakedUrl });
}
```

### 6.3 URL Structure
- **Public:** `yoursite.com/deals/nike/summer-sale-30-off`
- **Redirect:** `yoursite.com/out/clk_abc123` (302 redirect)
- **Affiliate:** `https://nike.sjv.io/c/123456/789012/xxxx?u=...` (actual network URL)

### 6.4 Supported Affiliate Networks
| Network | Integration | API |
|---------|-----------|-----|
| **CJ Affiliate (Commission Junction)** | Product API, Deep Link Generator | REST |
| **Impact Radius** | Catalog API, Tracking | REST |
| **ShareASale** | Merchant API, Product API | REST |
| **Amazon Associates** | PA-API 5.0 | REST |
| **Awin** | Publisher API | REST |
| **Rakuten** | Link generator | Manual |
| **Custom Direct** | Manual entry | Admin panel |

---

## 7. Coupon Code System

### 7.1 Code Types
1. **Code-based:** User copies alphanumeric code, applies at merchant checkout
2. **Deal/Auto-apply:** No code needed, discount auto-applied via affiliate link
3. **Printable:** For in-store use (PDF generation)
4. **Cashback:** Percentage returned post-purchase

### 7.2 Copy-to-Clipboard Flow
```typescript
// components/CopyButton.tsx
"use client";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    // Analytics
    gtag('event', 'coupon_copy', { code, store });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="relative group flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all"
    >
      <span className="font-mono tracking-wider">{code}</span>
      {copied ? <CheckIcon /> : <CopyIcon />}

      {/* Tooltip */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Click to copy
      </span>
    </button>
  );
}
```

### 7.3 Verification System
- **Manual Testing:** Admin marks codes as "Verified" after testing
- **User Feedback:** "Did this work?" Yes/No buttons → updates `successRate`
- **Auto-expiry:** Cron job marks expired codes inactive
- **Usage Limits:** Track `usageCount` vs `maxUses` if provided by merchant

---

## 8. API Routes (Next.js App Router)

```
app/api/
├── auth/[...nextauth]/route.ts     # NextAuth config
├── coupons/
│   ├── route.ts                    # GET (list), POST (create)
│   ├── [id]/route.ts               # GET, PUT, DELETE single
│   ├── [id]/click/route.ts         # POST track click
│   ├── [id]/verify/route.ts        # POST user verification
│   └── trending/route.ts           # GET trending deals
├── stores/
│   ├── route.ts
│   ├── [slug]/route.ts
│   └── [slug]/coupons/route.ts
├── categories/
│   ├── route.ts
│   └── [slug]/route.ts
├── search/
│   └── route.ts                    # Algolia/Meilisearch proxy
├── sitemap.xml/route.ts            # Dynamic sitemap generation
├── newsletter/
│   └── subscribe/route.ts
├── affiliates/
│   ├── route.ts                    # GET list, POST create
│   ├── [id]/route.ts               # GET, PUT, DELETE single
│   ├── [id]/stats/route.ts         # GET affiliate performance
│   ├── [id]/toggle/route.ts        # POST activate/deactivate
│   └── networks/route.ts           # GET supported networks
├── conversions/
│   ├── route.ts                    # GET/POST conversions
│   └── [id]/route.ts               # Update conversion status
├── dashboard/
│   ├── stats/route.ts              # GET aggregated metrics
│   ├── chart-data/route.ts         # GET time-series data
│   └── export/route.ts             # POST export CSV/Excel
└── admin/
    ├── stats/route.ts              # Dashboard metrics
    ├── import/route.ts             # Bulk CSV import
    └── activity/route.ts           # Admin activity logs
```

---

## 9. Admin Dashboard — Detailed Spec

### 9.1 Dashboard Layout (`/admin/dashboard`)
```
[Sidebar Navigation]
├── Dashboard (Overview)
├── Affiliates (Management)
├── Coupons (CRUD)
├── Stores (CRUD)
├── Products (CRUD)
├── Categories (CRUD)
├── Analytics (Reports)
├── Users (Management)
├── Activity Logs
└── Settings

[Main Content Area]
```

### 9.2 Dashboard Widgets (Overview Page)

#### Row 1: KPI Cards
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  💰 Revenue │ │  👆 Clicks  │ │  🎯 Conv.   │ │  📊 CTR     │
│  $12,450    │ │  45,231     │ │  1,203      │ │  8.4%       │
│  +23% ↗️    │ │  +15% ↗️    │ │  +5% ↗️     │ │  +1.2% ↗️   │
│  vs last mo │ │  vs last mo │ │  vs last mo │ │  vs last mo │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

#### Row 2: Charts
```
┌─────────────────────────────┐ ┌─────────────────────────────┐
│  Revenue Over Time          │ │  Clicks by Device           │
│  [Line Chart: 30 days]      │ │  [Pie Chart]                │
│  - Daily revenue            │ │  - Mobile: 68%              │
│  - Moving average           │ │  - Desktop: 28%             │
│  - Trend line               │ │  - Tablet: 4%               │
└─────────────────────────────┘ └─────────────────────────────┘
```

#### Row 3: Tables
```
┌─────────────────────────────────────────────────────────────┐
│  Top Performing Affiliates                                  │
│  ┌──────────┬────────┬────────┬──────────┬────────┐        │
│  │ Affiliate│ Clicks │ Conv.  │ Revenue  │ Status │        │
│  ├──────────┼────────┼────────┼──────────┼────────┤        │
│  │ Nike     │ 12,403 │ 412    │ $5,230   │ Active │        │
│  │ Amazon   │ 8,921  │ 298    │ $3,450   │ Active │        │
│  │ Best Buy │ 5,102  │ 153    │ $2,100   │ Active │        │
│  └──────────┴────────┴────────┴──────────┴────────┘        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Recent Activity                                            │
│  ┌──────────────┬─────────────┬──────────┬────────────┐      │
│  │ Action       │ Entity      │ User     │ Time       │      │
│  ├──────────────┼─────────────┼──────────┼────────────┤      │
│  │ Affiliate +  │ Nike        │ admin    │ 2 min ago  │      │
│  │ Coupon edit  │ SUMMER30    │ editor   │ 15 min ago │      │
│  │ Store +      │ Adidas      │ admin    │ 1 hr ago   │      │
│  └──────────────┴─────────────┴──────────┴────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### 9.3 Dashboard Data API
```typescript
// app/api/dashboard/stats/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { subDays, startOfDay, endOfDay } from 'date-fns';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get('days') || '30');
  const from = startOfDay(subDays(new Date(), days));
  const to = endOfDay(new Date());

  const [
    totalRevenue,
    totalClicks,
    totalConversions,
    activeAffiliates,
    activeCoupons,
    chartData,
    topAffiliates,
    deviceBreakdown,
    recentActivity
  ] = await Promise.all([
    // Total revenue
    prisma.conversion.aggregate({
      where: { status: 'CONFIRMED', createdAt: { gte: from, lte: to } },
      _sum: { commission: true }
    }),

    // Total clicks
    prisma.click.count({
      where: { isUnique: true, createdAt: { gte: from, lte: to } }
    }),

    // Total conversions
    prisma.conversion.count({
      where: { status: 'CONFIRMED', createdAt: { gte: from, lte: to } }
    }),

    // Active affiliates
    prisma.affiliate.count({ where: { status: 'ACTIVE' } }),

    // Active coupons
    prisma.coupon.count({ where: { isActive: true, endDate: { gt: new Date() } } }),

    // Daily chart data
    prisma.$queryRaw`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as clicks,
        SUM(CASE WHEN is_unique = true THEN 1 ELSE 0 END) as unique_clicks
      FROM clicks
      WHERE created_at BETWEEN ${from} AND ${to}
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `,

    // Top affiliates
    prisma.affiliate.findMany({
      where: { status: 'ACTIVE' },
      take: 10,
      orderBy: { totalRevenue: 'desc' },
      select: {
        id: true,
        name: true,
        logo: true,
        totalClicks: true,
        totalRevenue: true,
        commissionRate: true,
        network: true
      }
    }),

    // Device breakdown
    prisma.$queryRaw`
      SELECT device, COUNT(*) as count
      FROM clicks
      WHERE created_at BETWEEN ${from} AND ${to}
      GROUP BY device
    `,

    // Recent activity
    prisma.activityLog.findMany({
      take: 20,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { name: true, email: true } } }
    })
  ]);

  const ctr = totalClicks > 0 
    ? ((totalConversions / totalClicks) * 100).toFixed(2)
    : '0.00';

  return NextResponse.json({
    kpis: {
      revenue: totalRevenue._sum.commission || 0,
      clicks: totalClicks,
      conversions: totalConversions,
      ctr: parseFloat(ctr),
      activeAffiliates,
      activeCoupons
    },
    chartData,
    topAffiliates,
    deviceBreakdown,
    recentActivity
  });
}
```

---

## 10. Affiliate Management Panel — Detailed Spec

### 10.1 Affiliate List Page (`/admin/affiliates`)
```
[Page Header]
Affiliate Partners                    [+ Add Affiliate] [Export CSV] [Filter ▼]

[Search & Filters]
┌─────────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ 🔍 Search...   │ │ Network ▼   │ │ Status ▼    │ │ Sort By ▼   │
└─────────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

[Data Table]
┌────┬────────────┬─────────┬──────────┬──────────┬─────────┬──────────┬────────┐
│ ✓  │ Name       │ Network │ Comm.    │ Clicks   │ Revenue │ Balance  │ Status │
├────┼────────────┼─────────┼──────────┼──────────┼─────────┼──────────┼────────┤
│ ✓  │ Nike Inc.  │ CJ      │ 8% CPS   │ 45,231   │ $12.4k  │ $2,100   │ 🟢 Act │
│ ✓  │ Amazon     │ Amazon  │ 4% Rev   │ 89,102   │ $34.2k  │ $8,500   │ 🟢 Act │
│ ✓  │ Best Buy   │ Impact  │ 6% CPS   │ 12,403   │ $5.2k   │ $1,200   │ 🟡 Paus│
│ ✓  │ Target     │ ShareAS │ 5% CPS   │ 8,921    │ $3.1k   │ $800     │ 🔴 Term│
└────┴────────────┴─────────┴──────────┴──────────┴─────────┴──────────┴────────┘

[Bulk Actions]  [Delete Selected] [Change Status] [Export Selected]

[Pagination: 1 2 3 ... 10 >]
```

### 10.2 Add/Edit Affiliate Modal
```
┌─────────────────────────────────────────────┐
│  Add New Affiliate                    [×]   │
├─────────────────────────────────────────────┤
│                                             │
│  Basic Information                          │
│  ┌─────────────────────────────────────┐    │
│  │ Affiliate Name *                    │    │
│  │ [Nike Inc.                        ] │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ Slug (auto-generated)               │    │
│  │ [nike-inc                         ] │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ Contact Email                       │    │
│  │ [affiliates@nike.com              ] │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ Website URL                         │    │
│  │ [https://nike.com                 ] │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Affiliate Network                          │
│  ┌─────────────────────────────────────┐    │
│  │ [CJ Affiliate                 ▼]    │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ Network API Key (encrypted)         │    │
│  │ [••••••••••••••••••••••••••••••]    │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Commission Settings                        │
│  ┌─────────────────┐ ┌─────────────────┐    │
│  │ Type: [CPS ▼]   │ │ Rate: [8.5    ]%│    │
│  └─────────────────┘ └─────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ Cookie Duration: [30] days          │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Payment Information                        │
│  ┌─────────────────────────────────────┐    │
│  │ Payment Method: [PayPal ▼]          │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ Payment Email                       │    │
│  │ [payments@nike.com                ] │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Notes                                      │
│  ┌─────────────────────────────────────┐    │
│  │ [Special terms: quarterly bonuses  ] │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Status: [● Active] [○ Paused] [○ Pending]  │
│                                             │
│  [Cancel]              [Save Affiliate]     │
└─────────────────────────────────────────────┘
```

### 10.3 Affiliate Detail Page (`/admin/affiliates/[id]`)
```
[Header]
← Back to Affiliates
[Nike Logo] Nike Inc.                    [Edit] [Pause] [Delete]
Status: 🟢 Active  |  Network: CJ  |  Commission: 8% CPS

[Tabs: Overview | Coupons | Stores | Analytics | Settings]

[Overview Tab]
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Total Clicks│ │ Conversions │ │ Revenue     │ │ Balance Due │
│ 45,231      │ │ 1,203       │ │ $12,450     │ │ $2,100      │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

[Revenue Chart: Last 90 Days]
[Line chart with daily revenue + moving average]

[Top Performing Coupons]
┌──────────┬────────┬─────────┬──────────┐
│ Coupon   │ Clicks │ Conv.   │ Revenue  │
├──────────┼────────┼─────────┼──────────┤
│ SUMMER30 │ 8,432  │ 312     │ $3,200   │
│ FLASH20  │ 5,102  │ 198     │ $2,100   │
│ WELCOME15│ 3,891  │ 145     │ $1,450   │
└──────────┴────────┴─────────┴──────────┘

[Recent Clicks Table: Last 50 clicks with geo/device data]
```

### 10.4 Affiliate API Routes
```typescript
// app/api/affiliates/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const createSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  network: z.enum(['DIRECT', 'CJ', 'IMPACT', 'SHAREASALE', 'AMAZON_ASSOCIATES', 'AWIN', 'RAKUTEN', 'OTHER']),
  networkApiKey: z.string().optional(),
  commissionType: z.enum(['CPS', 'CPA', 'CPC', 'CPL', 'REVENUE_SHARE']),
  commissionRate: z.number().positive(),
  cookieDuration: z.number().int().positive().default(30),
  paymentMethod: z.string().optional(),
  paymentEmail: z.string().email().optional(),
  notes: z.string().optional(),
  status: z.enum(['ACTIVE', 'PAUSED', 'PENDING', 'REJECTED', 'TERMINATED']).default('ACTIVE'),
});

// GET /api/affiliates — List with pagination & filters
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const search = searchParams.get('search') || '';
  const network = searchParams.get('network');
  const status = searchParams.get('status');
  const sortBy = searchParams.get('sortBy') || 'createdAt';
  const sortOrder = searchParams.get('sortOrder') || 'desc';

  const where = {
    AND: [
      search ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { slug: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } }
        ]
      } : {},
      network ? { network } : {},
      status ? { status } : {}
    ]
  };

  const [affiliates, total] = await Promise.all([
    prisma.affiliate.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { [sortBy]: sortOrder },
      include: {
        _count: { select: { coupons: true, stores: true, products: true } }
      }
    }),
    prisma.affiliate.count({ where })
  ]);

  return NextResponse.json({
    data: affiliates,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  });
}

// POST /api/affiliates — Create new affiliate
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = createSchema.parse(body);

    // Check for duplicate slug
    const existing = await prisma.affiliate.findUnique({
      where: { slug: validated.slug }
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Slug already exists' },
        { status: 409 }
      );
    }

    const affiliate = await prisma.affiliate.create({
      data: validated
    });

    // Log activity
    await prisma.activityLog.create({
      data: {
        action: 'affiliate_created',
        entityType: 'affiliate',
        entityId: affiliate.id,
        details: { name: affiliate.name, network: affiliate.network }
      }
    });

    return NextResponse.json(affiliate, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

```typescript
// app/api/affiliates/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/affiliates/[id] — Single affiliate with stats
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const affiliate = await prisma.affiliate.findUnique({
    where: { id: params.id },
    include: {
      coupons: {
        where: { isActive: true },
        orderBy: { usageCount: 'desc' },
        take: 10
      },
      stores: true,
      _count: {
        select: { clicks: true, conversions: true, coupons: true, stores: true }
      }
    }
  });

  if (!affiliate) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  // Get last 30 days stats
  const from = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const [recentClicks, recentConversions, revenueTrend] = await Promise.all([
    prisma.click.count({
      where: { affiliateId: params.id, createdAt: { gte: from } }
    }),
    prisma.conversion.count({
      where: { affiliateId: params.id, createdAt: { gte: from } }
    }),
    prisma.$queryRaw`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as conversions,
        SUM(commission) as revenue
      FROM conversions
      WHERE affiliate_id = ${params.id}
        AND created_at >= ${from}
        AND status = 'CONFIRMED'
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `
  ]);

  return NextResponse.json({
    ...affiliate,
    stats: {
      recentClicks,
      recentConversions,
      revenueTrend
    }
  });
}

// PUT /api/affiliates/[id] — Update affiliate
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const affiliate = await prisma.affiliate.update({
      where: { id: params.id },
      data: body
    });

    await prisma.activityLog.create({
      data: {
        action: 'affiliate_updated',
        entityType: 'affiliate',
        entityId: params.id,
        details: { updatedFields: Object.keys(body) }
      }
    });

    return NextResponse.json(affiliate);
  } catch (error) {
    return NextResponse.json(
      { error: 'Update failed' },
      { status: 500 }
    );
  }
}

// DELETE /api/affiliates/[id] — Soft or hard delete
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Option 1: Soft delete (mark as TERMINATED)
    await prisma.affiliate.update({
      where: { id: params.id },
      data: { status: 'TERMINATED' }
    });

    // Option 2: Hard delete (cascades to related records)
    // await prisma.affiliate.delete({ where: { id: params.id } });

    await prisma.activityLog.create({
      data: {
        action: 'affiliate_deleted',
        entityType: 'affiliate',
        entityId: params.id
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Delete failed' },
      { status: 500 }
    );
  }
}
```

```typescript
// app/api/affiliates/[id]/toggle/route.ts
export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { status } = await req.json();

  const affiliate = await prisma.affiliate.update({
    where: { id: params.id },
    data: { status }
  });

  // Cascade: pause all related coupons if affiliate paused
  if (status === 'PAUSED' || status === 'TERMINATED') {
    await prisma.coupon.updateMany({
      where: { affiliateId: params.id },
      data: { isActive: false }
    });
  }

  return NextResponse.json(affiliate);
}
```

### 10.5 Bulk Operations
```typescript
// app/api/affiliates/bulk/route.ts
export async function POST(req: Request) {
  const { action, ids } = await req.json();

  switch (action) {
    case 'delete':
      await prisma.affiliate.updateMany({
        where: { id: { in: ids } },
        data: { status: 'TERMINATED' }
      });
      break;

    case 'activate':
      await prisma.affiliate.updateMany({
        where: { id: { in: ids } },
        data: { status: 'ACTIVE' }
      });
      break;

    case 'pause':
      await prisma.affiliate.updateMany({
        where: { id: { in: ids } },
        data: { status: 'PAUSED' }
      });
      break;

    case 'export':
      const affiliates = await prisma.affiliate.findMany({
        where: { id: { in: ids } }
      });
      const csv = generateCSV(affiliates);
      return new Response(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': 'attachment; filename="affiliates.csv"'
        }
      });
  }

  return NextResponse.json({ success: true, affected: ids.length });
}
```

---

## 11. Performance & Security

### 11.1 Performance Checklist
- [ ] Image optimization: WebP/AVIF, lazy loading, blur placeholders
- [ ] Font optimization: `next/font`, subsetting, font-display: swap
- [ ] Code splitting: Route-level splitting, dynamic imports for heavy components
- [ ] Edge caching: `export const revalidate = 3600` (ISR)
- [ ] Redis caching: Hot deals cached for 1 hour
- [ ] Database indexing: All query columns indexed (see Prisma schema)
- [ ] Bundle analysis: Regular `next-bundle-analyzer` checks
- [ ] Prefetching: `Link` component prefetch for critical paths

### 11.2 Security Measures
- [ ] Rate limiting: 100 requests/minute per IP (Redis + `rate-limiter-flexible`)
- [ ] Input validation: Zod schemas for all API inputs
- [ ] SQL injection prevention: Prisma ORM (parameterized queries)
- [ ] XSS protection: React auto-escaping, sanitize HTML content (DOMPurify)
- [ ] CSRF protection: NextAuth.js built-in CSRF tokens
- [ ] Click fraud detection: Max 3 clicks/coupon/IP/hour
- [ ] Affiliate link validation: Regex + domain whitelist
- [ ] Content Security Policy: Strict CSP headers
- [ ] HTTPS only: HSTS header, secure cookies
- [ ] Admin route protection: Middleware checking `ADMIN` or `EDITOR` role
- [ ] API key encryption: AES-256 for stored network API keys

---

## 12. Analytics & Tracking

### 12.1 Events to Track
| Event | Trigger | Data |
|-------|---------|------|
| `page_view` | Every page load | URL, referrer, device |
| `coupon_view` | Coupon page load | Coupon ID, store, category |
| `coupon_copy` | Copy button click | Code, store, time spent |
| `affiliate_click` | "Get Deal" click | Coupon ID, destination URL |
| `search_query` | Search submit | Query, results count, filters |
| `favorite_add` | Heart button click | User ID, coupon ID |
| `newsletter_sub` | Email submit | Source page, email domain |
| `deal_expired` | Expired code clicked | Code, store, days expired |
| `affiliate_created` | Admin adds affiliate | Name, network, commission |
| `affiliate_paused` | Admin pauses affiliate | ID, reason |

### 12.2 Key Metrics Dashboard
- **CTR (Click-Through Rate):** Clicks / Views per coupon
- **Conversion Rate:** Estimated from affiliate network postbacks
- **EPC (Earnings Per Click):** Revenue / Total clicks
- **Top Performing:** By store, category, discount type, time of day
- **SEO Metrics:** Organic traffic, keyword rankings, indexed pages
- **Affiliate Health:** Active vs paused, balance due, commission trends

---

## 13. Deployment & DevOps

### 13.1 Environment Variables
```bash
# .env.local
DATABASE_URL="postgresql://..."
REDIS_URL="rediss://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="https://yoursite.com"

# OAuth Providers
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Affiliate Networks
CJ_API_KEY="..."
IMPACT_API_KEY="..."
SHAREASALE_API_TOKEN="..."

# Search
ALGOLIA_APP_ID="..."
ALGOLIA_API_KEY="..."

# Email
RESEND_API_KEY="..."

# Storage
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."

# Encryption (for API keys)
ENCRYPTION_KEY="32-char-random-string..."
```

### 13.2 CI/CD Pipeline (GitHub Actions)
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: vercel/action-deploy@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### 13.3 Deployment Steps
1. **Development:** Local with `npm run dev`
2. **Staging:** Vercel preview deployments per PR
3. **Production:** Auto-deploy on merge to `main`
4. **Database:** Prisma migrations on deploy (`prisma migrate deploy`)
5. **Monitoring:** Vercel Analytics + LogDrains to external service

---

## 14. Monetization Strategy

### 14.1 Revenue Streams
1. **Affiliate Commissions:** Primary revenue (CPS/CPA/CPC models)
2. **Featured Placements:** Paid promotion slots for stores ($/month)
3. **Sponsored Content:** Native blog posts with affiliate integration
4. **Email Sponsorships:** Dedicated blast or newsletter inclusion
5. **Data Insights:** Anonymized trend reports for merchants (B2B)

### 14.2 Commission Optimization
- **Deep Linking:** Direct to product pages (higher conversion than homepage)
- **Retargeting Pixels:** Facebook/Google pixel on redirect page
- **Exit Intent:** "Wait! Get 10% extra off" popup before leaving
- **Urgency:** Real stock counters, expiry timers, "X people viewing"
- **A/B Testing:** Button colors, CTA text, coupon reveal flow

---

## 15. Content & Legal

### 15.1 Required Pages
- **About Us:** Story, team, mission (builds trust)
- **Contact:** Form, email, social links
- **Privacy Policy:** GDPR/CCPA compliant cookie consent
- **Terms of Service:** User agreement, liability disclaimers
- **Affiliate Disclosure:** FTC compliance statement (footer + individual pages)
- **Cookie Policy:** Detailed cookie usage breakdown
- **DMCA / Abuse:** Content removal request process

### 15.2 Legal Compliance
- **FTC Guidelines:** Clear disclosure on every affiliate link
- **GDPR:** Cookie consent banner, data export/deletion
- **CAN-SPAM:** Unsubscribe link in all emails, physical address
- **CCPA:** "Do Not Sell My Info" link (if applicable)

---

## 16. Implementation Roadmap

### Phase 1: MVP (Weeks 1-3)
- [ ] Project setup (Next.js + Tailwind + Prisma + PostgreSQL)
- [ ] Database schema + migrations
- [ ] Core UI components (Header, Footer, Coupon Card)
- [ ] Homepage with static data
- [ ] Individual coupon pages
- [ ] Copy-to-clipboard functionality
- [ ] Basic affiliate redirect
- [ ] SEO basics (meta tags, sitemap)

### Phase 2: Admin Foundation (Weeks 4-5)
- [ ] Admin authentication & role-based access
- [ ] Dashboard overview with KPI cards
- [ ] **Affiliate Management Panel** — CRUD, list, search, filters
- [ ] **Affiliate detail page** with stats & performance charts
- [ ] Category pages + filtering
- [ ] Store pages with aggregated deals
- [ ] Search functionality (Algolia)
- [ ] Bulk operations (delete, export, status change)

### Phase 3: Content & Discovery (Weeks 6-7)
- [ ] Blog system setup
- [ ] Newsletter subscription
- [ ] Coupon Manager (full CRUD with expiry handling)
- [ ] Product Importer (CSV + manual)
- [ ] Admin activity logs
- [ ] Analytics chart data APIs

### Phase 4: User Features (Weeks 8-9)
- [ ] NextAuth.js authentication
- [ ] Favorites / Saved coupons
- [ ] Deal alerts (email notifications)
- [ ] User profile + history
- [ ] "Did this work?" feedback system
- [ ] Social sharing buttons

### Phase 5: Scale & Optimize (Weeks 10-12)
- [ ] Redis caching layer
- [ ] Advanced analytics dashboard (full charts)
- [ ] Conversion tracking & revenue reports
- [ ] A/B testing framework
- [ ] Performance optimization (90+ Lighthouse)
- [ ] Affiliate API integrations (CJ, Impact)
- [ ] Automated deal import/crawling
- [ ] Mobile app (PWA or React Native)

### Phase 6: Growth (Ongoing)
- [ ] SEO content strategy execution
- [ ] Link building campaigns
- [ ] Social media automation
- [ ] Email marketing sequences
- [ ] Partnership negotiations with stores
- [ ] International expansion

---

## 17. Folder Structure

```
affiliate-coupons/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Public routes
│   │   ├── page.tsx              # Homepage
│   │   ├── deals/
│   │   │   ├── page.tsx          # All deals
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual coupon
│   │   ├── stores/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── categories/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── search/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── (admin)/                  # Admin dashboard (protected)
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Overview with KPIs + charts
│   │   ├── affiliates/
│   │   │   ├── page.tsx          # Affiliate list (table + filters)
│   │   │   ├── new/
│   │   │   │   └── page.tsx      # Add new affiliate form
│   │   │   └── [id]/
│   │   │       ├── page.tsx      # Affiliate detail + stats
│   │   │       └── edit/
│   │   │           └── page.tsx    # Edit affiliate form
│   │   ├── coupons/
│   │   │   ├── page.tsx          # Coupon manager
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Edit coupon
│   │   ├── stores/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── import/
│   │   │       └── page.tsx      # Bulk import
│   │   ├── analytics/
│   │   │   └── page.tsx          # Detailed reports
│   │   ├── users/
│   │   │   └── page.tsx
│   │   ├── activity/
│   │   │   └── page.tsx          # Activity logs
│   │   └── layout.tsx            # Admin sidebar + header
│   ├── api/                      # API routes
│   │   ├── affiliates/
│   │   │   ├── route.ts          # GET list, POST create
│   │   │   ├── [id]/
│   │   │   │   ├── route.ts      # GET, PUT, DELETE
│   │   │   │   ├── stats/
│   │   │   │   │   └── route.ts  # Performance data
│   │   │   │   └── toggle/
│   │   │   │       └── route.ts  # Activate/deactivate
│   │   │   ├── bulk/
│   │   │   │   └── route.ts      # Bulk operations
│   │   │   └── networks/
│   │   │       └── route.ts      # Supported networks list
│   │   ├── dashboard/
│   │   │   ├── stats/
│   │   │   │   └── route.ts      # Aggregated KPIs
│   │   │   ├── chart-data/
│   │   │   │   └── route.ts      # Time-series charts
│   │   │   └── export/
│   │   │       └── route.ts      # CSV/Excel export
│   │   └── admin/
│   │       ├── activity/
│   │       │   └── route.ts      # Activity log API
│   │       └── import/
│   │           └── route.ts      # Bulk import handler
│   ├── out/
│   │   └── [id]/
│   │       └── route.ts          # Affiliate redirect
│   ├── layout.tsx                # Root layout
│   └── globals.css
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── coupons/                  # Coupon-specific components
│   ├── layout/                   # Header, Footer, Sidebar
│   ├── admin/                    # Admin-specific components
│   │   ├── dashboard/
│   │   │   ├── KpiCard.tsx
│   │   │   ├── RevenueChart.tsx
│   │   │   ├── DeviceChart.tsx
│   │   │   ├── TopAffiliates.tsx
│   │   │   └── RecentActivity.tsx
│   │   ├── affiliates/
│   │   │   ├── AffiliateTable.tsx
│   │   │   ├── AffiliateFilters.tsx
│   │   │   ├── AffiliateForm.tsx       # Create/Edit form
│   │   │   ├── AffiliateDetail.tsx     # Detail view
│   │   │   └── StatusBadge.tsx
│   │   └── shared/
│   │       ├── DataTable.tsx
│   │       ├── Pagination.tsx
│   │       ├── BulkActions.tsx
│   │       ├── SearchBar.tsx
│   │       └── ExportButton.tsx
│   └── shared/                   # Reusable components
├── lib/
│   ├── prisma.ts                 # Database client
│   ├── auth.ts                   # NextAuth config
│   ├── seo.ts                    # SEO utilities
│   ├── encryption.ts             # API key encryption
│   └── utils.ts                  # Helpers
├── hooks/
│   ├── use-copy.ts
│   ├── use-search.ts
│   ├── use-analytics.ts
│   └── use-affiliates.ts         # Affiliate data fetching
├── types/
│   └── index.ts
├── prisma/
│   └── schema.prisma
├── public/
│   ├── images/
│   └── logos/
├── scripts/
│   └── seed.ts                   # Database seeding
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 18. Recommended Packages

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "@prisma/client": "^5.7.0",
    "prisma": "^5.7.0",
    "next-auth": "^4.24.0",
    "tailwindcss": "^3.4.0",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.300.0",
    "zod": "^3.22.0",
    "react-hook-form": "^7.49.0",
    "@hookform/resolvers": "^3.3.0",
    "algoliasearch": "^4.22.0",
    "react-instantsearch": "^7.5.0",
    "resend": "^2.0.0",
    "@upstash/redis": "^1.25.0",
    "@vercel/kv": "^1.0.0",
    "rate-limiter-flexible": "^5.0.0",
    "dompurify": "^3.0.0",
    "@types/dompurify": "^3.0.0",
    "date-fns": "^3.0.0",
    "framer-motion": "^10.16.0",
    "react-hot-toast": "^2.4.0",
    "@next/third-parties": "^14.0.0",
    "recharts": "^2.10.0",           // Charts for dashboard
    "@tanstack/react-table": "^8.11.0", // Data tables
    "react-select": "^5.8.0",         // Multi-select filters
    "papaparse": "^5.4.0",            // CSV import/export
    "crypto-js": "^4.2.0"             // API key encryption
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.0",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "prettier": "^3.1.0",
    "@tailwindcss/typography": "^0.5.10"
  }
}
```

---

## 19. Success Metrics (KPIs)

| Metric | Target (Month 3) | Target (Month 6) | Target (Month 12) |
|--------|-----------------|-----------------|------------------|
| Organic Traffic | 10k/month | 50k/month | 200k/month |
| Indexed Pages | 500 | 5,000 | 20,000 |
| Domain Authority | 15 | 30 | 45 |
| Avg. CTR | 8% | 12% | 15% |
| Revenue | $500/month | $3,000/month | $10,000/month |
| Email Subscribers | 1,000 | 5,000 | 20,000 |
| Page Speed (Lighthouse) | 85 | 90 | 95 |
| Bounce Rate | <60% | <50% | <40% |
| Active Affiliates | 10 | 50 | 200 |
| Coupons Managed | 100 | 1,000 | 5,000 |

---

## 20. Notes & Tips

1. **Start with 3-5 niches:** Don't try to cover everything. Pick high-commission categories (software, finance, travel, fashion).
2. **Manual verification wins:** Users trust "Verified" badges. Test codes before publishing.
3. **Speed = SEO:** Google Core Web Vitals directly impact rankings. Optimize images and JS bundles aggressively.
4. **Content is king:** 70% of traffic should come from SEO content (guides, comparisons), not just coupon pages.
5. **Email is gold:** Build your list from day one. Email converts 3-5x better than social.
6. **Disclose everything:** FTC compliance isn't optional. Clear affiliate disclosures build long-term trust.
7. **Mobile first:** 70%+ of deal traffic is mobile. Design mobile-first, desktop-second.
8. **Schema markup:** Rich snippets can increase CTR by 30%. Implement all relevant schemas.
9. **User-generated content:** Reviews, "did this work" votes, comments = free SEO content + trust signals.
10. **Monitor broken links:** Use automated link checkers. Dead affiliate links = lost revenue + bad UX.
11. **Admin security:** Never expose admin routes publicly. Use middleware to protect `/admin/*` and API routes.
12. **Encrypt API keys:** Store affiliate network API keys encrypted in the database, not plain text.
13. **Audit logs:** Track every admin action. You'll need this for debugging and compliance.
14. **Soft deletes:** Never hard-delete affiliates. Mark as TERMINATED so you keep historical revenue data.
15. **Test affiliate links:** Build a link validator that periodically checks if affiliate URLs are still working.

---

---

## 21. Visual Design System & Mock Design References

> This section provides curated design references and a complete visual specification for every screen in the application. Use these as your north star when building components.

---

### 21.1 Design Philosophy

| Principle | Application |
|-----------|-------------|
| **Clarity First** | Users scan deals in 2 seconds. Every element must communicate value instantly. |
| **Trust Through Detail** | Verified badges, expiry dates, usage counts, and store logos reduce friction. |
| **Urgency Without Anxiety** | Orange CTAs and countdown timers drive action; clean whitespace prevents overwhelm. |
| **Mobile-First** | 70%+ of deal traffic is mobile. Touch targets ≥ 44px, card grids on small screens. |
| **Admin = Power + Calm** | Dashboard uses soft gradients and generous spacing to make data feel manageable. |

---

### 21.2 Color Palette

```css
:root {
  /* Primary Action — Urgency, Deals, CTAs */
  --color-primary-50:  #fff7ed;
  --color-primary-100: #ffedd5;
  --color-primary-200: #fed7aa;
  --color-primary-500: #f97316;   /* Main CTA */
  --color-primary-600: #ea580c;
  --color-primary-700: #c2410c;
  --color-primary-900: #7c2d12;

  /* Secondary — Headers, Trust, Admin */
  --color-navy-50:  #f8fafc;
  --color-navy-100: #f1f5f9;
  --color-navy-800: #1e293b;
  --color-navy-900: #0f172a;        /* Header / Footer bg */

  /* Success — Verified, Working, Positive */
  --color-success-50:  #f0fdf4;
  --color-success-500: #22c55e;     /* Verified badge */
  --color-success-600: #16a34a;

  /* Backgrounds & Surfaces */
  --color-bg-main:     #fafafa;      /* Page background */
  --color-bg-card:     #ffffff;      /* Card surface */
  --color-border:      #e5e7eb;      /* Dividers, card borders */
  --color-border-focus:#f97316;

  /* Text */
  --color-text-primary:   #111827;
  --color-text-secondary: #6b7280;
  --color-text-muted:     #9ca3af;

  /* Admin Dashboard Gradients */
  --gradient-revenue:  linear-gradient(135deg, #f97316 0%, #fb923c 100%);
  --gradient-clicks:  linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  --gradient-conv:    linear-gradient(135deg, #22c55e 0%, #4ade80 100%);
  --gradient-ctr:     linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
}
```

---

### 21.3 Typography Scale

| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `display-1` | 48px / 3rem | 800 | Homepage hero headline |
| `display-2` | 36px / 2.25rem | 700 | Section headings |
| `heading-1` | 30px / 1.875rem | 700 | Page titles |
| `heading-2` | 24px / 1.5rem | 600 | Card titles, sub-sections |
| `heading-3` | 20px / 1.25rem | 600 | Sidebar headings |
| `body-lg` | 18px / 1.125rem | 400 | Lead paragraphs |
| `body` | 16px / 1rem | 400 | Standard text |
| `body-sm` | 14px / 0.875rem | 400 | Metadata, captions |
| `caption` | 12px / 0.75rem | 500 | Badges, timestamps |
| `mono` | 14px / 0.875rem | 600 | Coupon codes, data values |

**Font Stack:**
- **Display / Headings:** `Cal Sans`, `Inter`, `system-ui`, sans-serif
- **Body:** `Inter`, `system-ui`, sans-serif
- **Monospace (Codes):** `JetBrains Mono`, `SF Mono`, `monospace`

---

### 21.4 Spacing & Layout Grid

- **Container max-width:** 1280px (`max-w-7xl`)
- **Grid:** 12-column, 24px gutter
- **Section padding:** `py-16` (64px vertical) on desktop, `py-10` (40px) on mobile
- **Card padding:** `p-6` (24px) internal
- **Card border-radius:** `16px` (`rounded-2xl`)
- **Card shadow:** `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)`
- **Card hover shadow:** `0 10px 25px rgba(0,0,0,0.1)`
- **Button border-radius:** `12px` (`rounded-xl`) for primary, `9999px` (`rounded-full`) for pills

---

### 21.5 Component Design Specs

#### Coupon Card (Public — Grid View)
```
┌─────────────────────────────────────────────┐  ← Card Container
│  ┌────────┐                                  │     bg: white
│  │  NIKE  │  Nike Official Store      ♡     │     border: 1px solid #e5e7eb
│  │  Logo  │  234 active deals               │     radius: 16px
│  └────────┘                                  │     padding: 24px
│                                             │     shadow: subtle
│  ─────────────────────────────────────────  │     hover: lift + stronger shadow
│                                             │
│  🔥 30% OFF Summer Collection               │  ← Discount Badge
│     Verified • 2,341 used today           │     color: primary-500
│                                             │     font: heading-2
│  ┌─────────────────────────────────────┐   │
│  │  S U M M E R 3 0        [📋 Copy]   │   │  ← Code Block
│  └─────────────────────────────────────┘   │     bg: primary-50
│                                             │     border: 2px dashed primary-200
│  [🛒 Get Deal →]     Expires in 2 days ⏰  │     font: mono, 14px, tracking-wide
│                                             │     Copy button: solid primary
└─────────────────────────────────────────────┘     "Get Deal": outline button
                                                    Expiry: caption, text-muted
```

#### Coupon Card (Public — List View)
```
┌────────────────────────────────────────────────────────────────────┐
│ ┌────┐  Nike          30% OFF Summer Collection      [📋 Copy]  │
│ │Logo│  234 deals     Verified • 2,341 used today     [🛒 Deal] │
│ └────┘                              Expires in 2 days            │
└────────────────────────────────────────────────────────────────────┘
```

#### Admin KPI Card
```
┌─────────────────────────────────┐
│  💰 Total Revenue               │  ← Icon (24px, white, 80% opacity)
│                                 │
│  $12,450.00                     │  ← Value: display-2, white, bold
│  ━━━━━━━━━━━━━━━━               │  ← Thin progress bar (optional)
│  +23.4% vs last month  ↗️       │  ← Trend: body-sm, white/80%
│                                 │
│  [Gradient Background]          │  ← bg: gradient-revenue
└─────────────────────────────────┘     radius: 16px
                                        padding: 24px
```

#### Admin Data Table Row
```
┌────┬────────────┬─────────┬────────┬─────────┬──────────┬────────┐
│ ✓  │ [Logo] Nike│ CJ      │ 8% CPS │ 45,231  │ $12,450  │ 🟢 Act │
└────┴────────────┴─────────┴────────┴─────────┴──────────┴────────┘
  ↑ Checkbox (indigo)  ↑ Logo 40×40  ↑ Status badge: 
                                             Active = emerald bg + white text
                                             Paused = amber bg
                                             Terminated = rose bg
```

---

### 21.6 Screen-by-Screen Mock Designs

#### A. Homepage (`/`)

```
┌────────────────────────────────────────────────────────────────────┐
│  [Logo]      Search deals...    Categories  Stores  [Login]        │  ← Header
│  ───────────────────────────────────────────────────────────────  │     bg: white
│                                                                   │     height: 72px
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                                                             │  │  ← Hero Section
│  │   Save Big on Every Purchase                                │  │     bg: gradient or
│  │   Discover 10,000+ Verified Coupons                         │  │     subtle pattern
│  │                                                             │  │     height: 480px
│  │   ┌─────────────────────────────────────────────────────┐   │  │
│  │   │ 🔍 Search stores, brands, or product types...      │   │  │  ← Search Bar
│  │   └─────────────────────────────────────────────────────┘   │  │     width: 640px
│  │                                                             │  │     radius: 9999px
│  │   [🔥 Trending: Amazon  Nike  Target  Best Buy  Adidas]    │  │  ← Quick Pills
│  │                                                             │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ─── Trusted by 2M+ Shoppers ───                                  │  ← Trust Bar
│  [Amazon] [Nike] [Target] [Best Buy] [Adidas] [Walmart]           │     Logo row, grayscale
│                                                                   │     → color on hover
│  ┌────────────────────────────────────────────────────────────────┐
│  │ 🔥 Trending Deals                    [View All →]            │  ← Section Header
│  ├────────────────────────────────────────────────────────────────┤
│  │ [Card] [Card] [Card] [Card]                                    │  ← 4-col grid
│  │ [Card] [Card] [Card] [Card]                                    │     gap: 24px
│  └────────────────────────────────────────────────────────────────┘
│                                                                   │
│  ┌────────────────────────────────────────────────────────────────┐
│  │ 🏷️ Browse by Category                                         │
│  ├────────────────────────────────────────────────────────────────┤
│  │ [Fashion] [Electronics] [Travel] [Food] [Software] [Beauty]   │  ← 6-col icon grid
│  │ [Home] [Sports] [Finance] [Health] [Gifts] [Education]        │     Icon + Label
│  └────────────────────────────────────────────────────────────────┘
│                                                                   │
│  ┌────────────────────────────────────────────────────────────────┐
│  │ ✨ Featured Stores                                             │
│  ├────────────────────────────────────────────────────────────────┤
│  │ [Nike 45 deals] [Amazon 120 deals] [Target 34 deals] ...     │  ← Logo + count
│  └────────────────────────────────────────────────────────────────┘
│                                                                   │
│  ┌────────────────────────────────────────────────────────────────┐
│  │ 📰 Latest Buying Guides                                        │
│  ├────────────────────────────────────────────────────────────────┤
│  │ [Blog Card] [Blog Card] [Blog Card]                           │  ← 3-col blog cards
│  └────────────────────────────────────────────────────────────────┘
│                                                                   │
│  ┌────────────────────────────────────────────────────────────────┐
│  │ 💌 Never Miss a Deal                                           │  ← Newsletter CTA
│  │ Get the best coupons delivered to your inbox weekly.          │     bg: primary-50
│  │ [Enter email...] [Subscribe]                                  │     centered
│  └────────────────────────────────────────────────────────────────┘
│                                                                   │
│  ───────────────────────────────────────────────────────────────  │  ← Footer
│  [Logo]   Deals  Stores  Categories  Blog  About  Contact         │     bg: navy-900
│  [Social Icons]   © 2026 YourSite. All rights reserved.           │     text: white/60%
│  Privacy • Terms • Affiliate Disclosure • Cookies                 │
└────────────────────────────────────────────────────────────────────┘
```

#### B. Coupon Detail Page (`/deals/{store}/{slug}`)

```
┌────────────────────────────────────────────────────────────────────┐
│  [Header — same as homepage]                                      │
│                                                                   │
│  Home > Stores > Nike > 30% Off Summer Collection                   │  ← Breadcrumb
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  [Nike Logo]  Nike Official Store                           │  │
│  │                                                             │  │  ← Hero Card
│  │  🔥 30% OFF                                                 │  │     bg: white
│  │  Summer Collection — Limited Time                           │  │     padding: 40px
│  │                                                             │  │     border: 2px
│  │  ┌─────────────────────────────────────────────────────┐     │  │
│  │  │  S U M M E R 3 0        [📋 Copy Code]           │     │  │  ← Code Block
│  │  └─────────────────────────────────────────────────────┘     │  │     Large, centered
│  │                                                             │  │
│  │  [🛒 Get Deal →]    ⏰ Expires in 2 days, 14 hours           │  │  ← CTAs
│  │                                                             │  │
│  │  ✅ Verified by our team    👥 2,341 used today             │  │  ← Trust Signals
│  │  ⭐ 94% success rate (1,203 votes)                           │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  📋 How to Use                                              │  │  ← Accordion
│  │  1. Click "Copy Code" above                                 │  │
│  │  2. Shop at Nike and add items to cart                      │  │
│  │  3. Paste code at checkout                                  │  │
│  │  4. Enjoy your savings!                                     │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  📋 Terms & Conditions                                      │  │
│  │  • Valid on full-price items only                           │  │
│  │  • Cannot be combined with other offers                     │  │
│  │  • Excludes sale items and gift cards                       │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ─── More Nike Coupons ───                                        │  ← Related Section
│  [Card] [Card] [Card] [Card]                                      │
│                                                                   │
│  ─── Similar Stores ───                                           │  ← Cross-sell
│  [Adidas] [Puma] [Under Armour] [New Balance]                     │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  🤔 Did this code work for you?                             │  │  ← Feedback
│  │  [👍 Yes, it worked]  [👎 No, it didn't]                    │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  [Footer]                                                         │
└────────────────────────────────────────────────────────────────────┘
```

#### C. Store Page (`/stores/{slug}`)

```
┌────────────────────────────────────────────────────────────────────┐
│  [Header]                                                         │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  [Large Nike Logo]                                          │  │  ← Store Hero
│  │  Nike                                                       │  │     bg: store brand
│  │  ★★★★★ 4.8 (234 reviews)   45 Active Deals   1.2M Clicks   │  │     color or gradient
│  │  "Just Do It. Official Nike coupons and deals."             │  │
│  │  [🌐 Visit Store]  [🔔 Get Alerts]                           │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  [Filter: All Deals ▼] [Sort: Most Popular ▼] [🔍 Search...]      │  ← Toolbar
│                                                                   │
│  ┌────────────────────────────────────────────────────────────────┐
│  │ [Coupon Card — List View]                                      │  ← List Layout
│  │ [Coupon Card — List View]                                      │     1 per row
│  │ [Coupon Card — List View]                                      │     compact
│  │ [Coupon Card — List View]                                      │
│  └────────────────────────────────────────────────────────────────┘
│                                                                   │
│  [Pagination: < 1 2 3 ... 10 >]                                   │
│  [Footer]                                                         │
└────────────────────────────────────────────────────────────────────┘
```

#### D. Admin Dashboard (`/admin/dashboard`)

```
┌────────────────────────────────────────────────────────────────────┐
│  [≡]  Dashboard          🔍 Search...    🔔 3  [👤 Admin ▼]       │  ← Admin Header
│  ───────────────────────────────────────────────────────────────  │     bg: white
│                                                                   │     height: 64px
│  ┌──────────┐  ┌────────────────────────────────────────────────┐ │
│  │          │  │  📊 Dashboard Overview          [Today ▼]      │ │
│  │  🏠      │  ├────────────────────────────────────────────────┤ │
│  │  Dash    │  │                                                │ │
│  │  ────    │  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │ │  ← KPI Row
│  │  👥      │  │  │ 💰 Rev │ │ 👆 Clk │ │ 🎯 Conv│ │ 📊 CTR │ │ │     4 cards
│  │  Affil   │  │  │ $12.4k │ │ 45,231 │ │ 1,203  │ │ 8.4%   │ │ │     gradient bg
│  │  ────    │  │  │ +23% ↗ │ │ +15% ↗ │ │ +5%  ↗ │ │+1.2% ↗ │ │ │     white text
│  │  🎟️      │  │  └────────┘ └────────┘ └────────┘ └────────┘ │ │
│  │  Coupons │  │                                                │ │
│  │  ────    │  │  ┌────────────────────┐ ┌──────────────────┐ │ │  ← Charts Row
│  │  🏪      │  │  │ Revenue Over Time  │ │ Clicks by Device │ │ │
│  │  Stores  │  │  │ [Line Chart]       │ │ [Pie/Donut]      │ │ │
│  │  ────    │  │  │ Last 30 days       │ │ Mobile: 68%      │ │ │
│  │  📈      │  │  │ Moving avg overlay │ │ Desktop: 28%     │ │ │
│  │  Analytics│  │  └────────────────────┘ └──────────────────┘ │ │
│  │  ────    │  │                                                │ │
│  │  👤      │  │  ┌────────────────────────────────────────────┐ │ │  ← Tables Row
│  │  Users   │  │  │ Top Performing Affiliates                  │ │ │
│  │  ────    │  │  ├────────┬────────┬────────┬────────┬──────┤ │ │     5 columns
│  │  📝      │  │  │ Name   │ Clicks │ Conv.  │ Revenue│Status│ │ │     sortable
│  │  Activity│  │  ├────────┼────────┼────────┼────────┼──────┤ │ │     pagination
│  │  ────    │  │  │ Nike   │ 12,403 │ 412    │ $5,230 │ 🟢   │ │ │
│  │  ⚙️      │  │  │ Amazon │ 8,921  │ 298    │ $3,450 │ 🟢   │ │ │
│  │  Settings│  │  │ BestBuy│ 5,102  │ 153    │ $2,100 │ 🟡   │ │ │
│  │          │  │  └────────┴────────┴────────┴────────┴──────┘ │ │
│  │          │  │                                                │ │
│  │          │  │  ┌────────────────────────────────────────────┐ │ │  ← Activity Row
│  │          │  │  │ Recent Activity                            │ │ │
│  │          │  │  ├──────────────┬──────────┬────────┬────────┤ │ │     timestamp
│  │          │  │  │ Action       │ Entity   │ User   │ Time   │ │ │     color-coded
│  │          │  │  ├──────────────┼──────────┼────────┼────────┤ │ │
│  │          │  │  │ Affiliate +  │ Nike     │ admin  │ 2m ago │ │ │
│  │          │  │  │ Coupon edit  │ SUMMER30 │ editor │ 15m ago│ │ │
│  │          │  │  │ Store +      │ Adidas   │ admin  │ 1h ago │ │ │
│  │          │  │  └──────────────┴──────────┴────────┴────────┘ │ │
│  └──────────┘  └────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

#### E. Affiliate Management List (`/admin/affiliates`)

```
┌────────────────────────────────────────────────────────────────────┐
│  [Admin Header — same as dashboard]                               │
│  ┌──────────┐  ┌────────────────────────────────────────────────┐ │
│  │ Sidebar  │  │  Affiliate Partners                           │ │
│  │ (same)   │  │  [+ Add Affiliate] [Export CSV] [Filter ▼]      │ │  ← Page Header
│  │          │  ├────────────────────────────────────────────────┤ │
│  │          │  │                                                │ │
│  │          │  │  ┌─────────────┐ ┌───────────┐ ┌───────────┐  │ │  ← Filters
│  │          │  │  │ 🔍 Search  │ │ Network ▼ │ │ Status ▼  │  │ │
│  │          │  │  └─────────────┘ └───────────┘ └───────────┘  │ │
│  │          │  │                                                │ │
│  │          │  │  [✓ Select All]  [Delete Selected] [Activate] │ │  ← Bulk Bar
│  │          │  │                                                │ │
│  │          │  │  ┌────┬──────────┬─────────┬────────┬────────┐ │ │  ← Data Table
│  │          │  │  │ ✓  │ Name     │ Network │ Comm.  │ Clicks │ │ │     Checkbox
│  │          │  │  ├────┼──────────┼─────────┼────────┼────────┤ │ │     Sortable
│  │          │  │  │ ✓  │ [Logo]   │ CJ      │ 8% CPS │ 45,231 │ │ │     Hover row
│  │          │  │  │    │ Nike Inc.│         │        │        │ │ │     Action menu
│  │          │  │  │ ✓  │ [Logo]   │ Amazon  │ 4% Rev │ 89,102 │ │ │
│  │          │  │  │    │ Amazon   │         │        │        │ │ │
│  │          │  │  │    │ [Logo]   │ Impact  │ 6% CPS │ 12,403 │ │ │
│  │          │  │  │    │ Best Buy │         │        │        │ │ │
│  │          │  │  └────┴──────────┴─────────┴────────┴────────┘ │ │
│  │          │  │                                                │ │
│  │          │  │  [1] [2] [3] ... [10] >    Showing 1-20 of  │ │  ← Pagination
│  │          │  │  156 affiliates                               │ │
│  └──────────┘  └────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

#### F. Add/Edit Affiliate Modal

```
┌────────────────────────────────────────────────────────────────────┐
│  Add New Affiliate                                          [×]  │  ← Modal Header
│  ─────────────────────────────────────────────────────────────────  │     bg: white
│                                                                    │     width: 640px
│  ┌─────────────────────────────────────────────────────────────┐   │     radius: 16px
│  │  Basic Information                                          │   │
│  │  ───────────────────────────────────────────────────────────  │   │
│  │                                                             │   │
│  │  Affiliate Name *                                           │   │  ← Text Input
│  │  ┌─────────────────────────────────────────────────────┐   │   │     label: body-sm
│  │  │ Nike Inc.                                          │   │   │     border: 1px
│  │  └─────────────────────────────────────────────────────┘   │   │     focus: primary
│  │                                                             │   │
│  │  Slug (auto-generated)                                      │   │
│  │  ┌─────────────────────────────────────────────────────┐   │   │
│  │  │ nike-inc                                           │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  │                                                             │   │
│  │  Contact Email                                              │   │
│  │  ┌─────────────────────────────────────────────────────┐   │   │
│  │  │ affiliates@nike.com                                │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  │                                                             │   │
│  │  Website URL                                                │   │
│  │  ┌─────────────────────────────────────────────────────┐   │   │
│  │  │ https://nike.com                                   │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Affiliate Network                                          │   │  ← Select
│  │  ┌─────────────────────────────────────────────────────┐   │   │     bg: white
│  │  │ CJ Affiliate                                  ▼    │   │   │     border: 1px
│  │  └─────────────────────────────────────────────────────┘   │   │     radius: 12px
│  │                                                             │   │
│  │  Network API Key (encrypted)                                │   │  ← Password Input
│  │  ┌─────────────────────────────────────────────────────┐   │   │     masked: ••••
│  │  │ ••••••••••••••••••••••••••••••••••••••••••••••   │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Commission Settings                                        │   │
│  │  ───────────────────────────────────────────────────────────  │   │
│  │  ┌───────────────────┐  ┌───────────────────┐              │   │  ← Inline fields
│  │  │ Type: [CPS    ▼]  │  │ Rate: [8.5     ]% │              │   │     gap: 16px
│  │  └───────────────────┘  └───────────────────┘              │   │
│  │                                                             │   │
│  │  Cookie Duration: [30] days                                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Payment Information                                        │   │
│  │  ┌─────────────────────────────────────────────────────┐   │   │
│  │  │ Payment Method: [PayPal                 ▼]         │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  │  ┌─────────────────────────────────────────────────────┐   │   │
│  │  │ Payment Email: payments@nike.com                   │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Notes                                                      │   │  ← Textarea
│  │  ┌─────────────────────────────────────────────────────┐   │   │     rows: 3
│  │  │ Special terms: quarterly bonuses for high volume   │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                    │
│  Status:  ● Active  ○ Paused  ○ Pending  ○ Rejected                │  ← Radio Group
│                                                                    │
│  [Cancel]                              [Save Affiliate]            │  ← Footer Actions
│                                                                    │     Cancel: outline
└────────────────────────────────────────────────────────────────────┘     Save: solid primary
```

#### G. Affiliate Detail Page (`/admin/affiliates/{id}`)

```
┌────────────────────────────────────────────────────────────────────┐
│  [Admin Header]                                                   │
│  ┌──────────┐  ┌────────────────────────────────────────────────┐ │
│  │ Sidebar  │  │  ← Back to Affiliates                         │ │
│  │ (same)   │  │                                                                │ │
│  │          │  │  [Nike Logo]  Nike Inc.              [Edit] [Pause] [Delete]│ │  ← Profile Header
│  │          │  │  Status: 🟢 Active  |  Network: CJ  |  Commission: 8% CPS   │ │
│  │          │  │                                                                │ │
│  │          │  │  [Overview] [Coupons] [Stores] [Analytics] [Settings]          │ │  ← Tabs
│  │          │  ├──────────────────────────────────────────────────────────────┤ │
│  │          │  │                                                                │ │
│  │          │  │  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐    │ │  ← Mini KPIs
│  │          │  │  │ 45,231    │ │ 1,203     │ │ $12,450   │ │ $2,100    │    │ │
│  │          │  │  │ Clicks    │ │ Conv.     │ │ Revenue   │ │ Balance   │    │ │
│  │          │  │  └───────────┘ └───────────┘ └───────────┘ └───────────┘    │ │
│  │          │  │                                                                │ │
│  │          │  │  ┌────────────────────────────────────────────────────────┐    │ │  ← Revenue Chart
│  │          │  │  │ Revenue Over Last 90 Days                              │    │ │
│  │          │  │  │ [Area Chart — daily revenue + 7-day moving average]    │    │ │
│  │          │  │  └────────────────────────────────────────────────────────┘    │ │
│  │          │  │                                                                │ │
│  │          │  │  Top Performing Coupons                                        │ │  ← Table
│  │          │  │  ┌──────────┬────────┬─────────┬──────────┐                  │ │
│  │          │  │  │ Coupon   │ Clicks │ Conv.   │ Revenue  │                  │ │
│  │          │  │  ├──────────┼────────┼─────────┼──────────┤                  │ │
│  │          │  │  │ SUMMER30 │ 8,432  │ 312     │ $3,200   │                  │ │
│  │          │  │  │ FLASH20  │ 5,102  │ 198     │ $2,100   │                  │ │
│  │          │  │  │ WELCOME15│ 3,891  │ 145     │ $1,450   │                  │ │
│  │          │  │  └──────────┴────────┴─────────┴──────────┘                  │ │
│  │          │  │                                                                │ │
│  │          │  │  Recent Clicks (Last 50)                                       │ │  ← Live Table
│  │          │  │  ┌──────────┬────────┬────────┬────────┬────────┐              │ │     Geo + Device
│  │          │  │  │ Time     │ Country│ Device │ Referrer│ Coupon │              │ │
│  │          │  │  ├──────────┼────────┼────────┼─────────┼────────┤              │ │
│  │          │  │  │ 2m ago   │ US     │ Mobile │ Google  │SUMMER30│              │ │
│  │          │  │  │ 5m ago   │ UK     │ Desktop│ Direct  │FLASH20 │              │ │
│  │          │  │  └──────────┴────────┴────────┴─────────┴────────┘              │ │
│  └──────────┘  └────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

#### H. Mobile Responsive Views

```
Homepage (Mobile)
┌─────────────────────────┐
│ [≡]  Logo    [🔍] [👤] │  ← Compact Header
├─────────────────────────┤
│                         │
│   Save Big on Every     │  ← Stacked Hero
│   Purchase              │
│                         │
│   ┌─────────────────┐   │
│   │ 🔍 Search...   │   │  ← Full-width Search
│   └─────────────────┘   │
│                         │
│   [Amazon] [Nike] [Target]  ← Horizontal scroll pills
│                         │
│   🔥 Trending Deals     │
│   ┌────────┐ ┌────────┐│  ← 2-column Card Grid
│   │ Card   │ │ Card   ││     gap: 12px
│   └────────┘ └────────┘│
│   ┌────────┐ ┌────────┐│
│   │ Card   │ │ Card   ││
│   └────────┘ └────────┘│
│                         │
│   🏷️ Categories         │
│   ┌────┐ ┌────┐ ┌────┐│  ← 3-col Icon Grid
│   │ 👗 │ │ 💻 │ │ ✈️ ││
│   └────┘ └────┘ └────┘│
│                         │
│   [Bottom Nav]          │  ← Fixed Bottom Bar
│   [🏠] [🔍] [❤️] [👤]  │     Home / Search / Fav / Profile
└─────────────────────────┘

Admin Dashboard (Mobile)
┌─────────────────────────┐
│  [≡]  Dashboard  [👤] │  ← Hamburger opens sidebar drawer
├─────────────────────────┤
│  ┌───────────────────┐   │
│  │ 💰 $12,450 +23% │   │  ← Stacked KPI Cards
│  └───────────────────┘   │     1 per row, full width
│  ┌───────────────────┐   │
│  │ 👆 45,231 +15%  │   │
│  └───────────────────┘   │
│  ┌───────────────────┐   │
│  │ 🎯 1,203 +5%    │   │
│  └───────────────────┘   │
│  ┌───────────────────┐   │
│  │ 📊 8.4% +1.2%   │   │
│  └───────────────────┘   │
│                         │
│  Revenue Chart          │  ← Horizontal scrollable chart
│  [Swipe →]              │
│                         │
│  Top Affiliates         │  ← Collapsible table rows
│  ▼ Nike      $5,230     │
│  ▶ Amazon    $3,450     │
│  ▶ Best Buy  $2,100     │
│                         │
│  [+ Floating Button]     │  ← FAB for quick actions
└─────────────────────────┘
```

---

### 21.7 Design Reference Images

Below are real-world design references that match the aesthetic direction described above. Study these for color usage, spacing, and component patterns.

**A. Full Coupon Website Templates (Homepage + Store Pages)**
imageimage_search:3#7image_search:3#8

**B. Mobile Coupon App Designs (Card Grids + Detail Pages)**
imageimage_search:3#3image_search:3#5

**C. Coupon Listing & Code Reveal Patterns**
imageimage_search:3#4image_search:3#0

**D. Admin Dashboard with KPIs & Charts**
imageimage_search:3#1

**E. Clean Data Table & Order Management UI**
imageimage_search:3#2

---

### 21.8 Animation & Interaction Specs

| Interaction | Behavior | Duration | Easing |
|-------------|----------|----------|--------|
| **Card Hover** | translateY(-4px) + shadow increase | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Copy Button** | Scale(1.05) on click + checkmark morph | 150ms | `ease-out` |
| **Toast Notification** | Slide in from bottom-right + fade | 300ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Modal Open** | Backdrop fade + content scale(0.95→1) | 250ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Sidebar Toggle** | translateX(-100%→0) slide | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Countdown Timer** | Number flip animation | 600ms | `ease-in-out` |
| **Page Transition** | Fade content + slight translateY | 150ms | `ease-out` |
| **Skeleton Loading** | Shimmer gradient sweep | 1500ms | `linear infinite` |
| **Chart Data Load** | Bars grow from bottom / line draws | 800ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Bulk Action** | Selected rows highlight + action bar slide up | 200ms | `ease-out` |

---

### 21.9 Iconography

Use **Lucide React** for all icons. Size guidelines:

| Context | Size | Stroke Width |
|---------|------|--------------|
| Navigation | 20px | 2px |
| Buttons / CTAs | 18px | 2px |
| Inline text | 16px | 2px |
| Badges / Status | 14px | 2px |
| Empty states | 48px | 1.5px |
| Feature illustrations | 64px | 1.5px |

**Key Icons by Screen:**
- **Public:** `Search`, `Copy`, `Check`, `Heart`, `Share2`, `Clock`, `Tag`, `Percent`, `Truck`, `QrCode`
- **Admin:** `LayoutDashboard`, `Users`, `Ticket`, `Store`, `BarChart3`, `Activity`, `Settings`, `Plus`, `Pencil`, `Trash2`, `Download`, `Filter`, `MoreHorizontal`, `ChevronDown`, `ArrowUpDown`

---

### 21.10 Dark Mode Admin (Optional)

For late-night admin work, provide a dark mode toggle:

```css
[data-theme="dark"] {
  --color-bg-main:     #0f172a;
  --color-bg-card:     #1e293b;
  --color-border:      #334155;
  --color-text-primary:   #f8fafc;
  --color-text-secondary: #94a3b8;
  --color-text-muted:     #64748b;
}
```

- Charts use lighter grid lines (`#334155`)
- KPI cards keep their gradients but add a subtle inner glow
- Tables use alternating row backgrounds (`#1e293b` / `#0f172a`)
- Sidebar background: `#020617` (deeper than main bg)

---

*Document Version: 2.1*  
*Last Updated: May 2026*  
*Next Review: Post-MVP Launch*
