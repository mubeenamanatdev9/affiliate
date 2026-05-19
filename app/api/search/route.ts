import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Mock data for MVP fallback
const mockStores = [
  { name: "Amazon", slug: "amazon", type: "store" },
  { name: "Nike", slug: "nike", type: "store" },
  { name: "Target", slug: "target", type: "store" },
  { name: "Best Buy", slug: "best-buy", type: "store" },
  { name: "Adidas", slug: "adidas", type: "store" },
  { name: "Walmart", slug: "walmart", type: "store" },
  { name: "Home Depot", slug: "home-depot", type: "store" },
  { name: "Macy's", slug: "macys", type: "store" },
  { name: "Sephora", slug: "sephora", type: "store" },
  { name: "Ulta", slug: "ulta", type: "store" },
  { name: "Lowe's", slug: "lowes", type: "store" },
  { name: "Wayfair", slug: "wayfair", type: "store" },
];

const mockCategories = [
  { name: "Fashion", slug: "fashion", type: "category" },
  { name: "Electronics", slug: "electronics", type: "category" },
  { name: "Travel", slug: "travel", type: "category" },
  { name: "Food", slug: "food", type: "category" },
  { name: "Software", slug: "software", type: "category" },
  { name: "Beauty", slug: "beauty", type: "category" },
  { name: "Home", slug: "home", type: "category" },
  { name: "Sports", slug: "sports", type: "category" },
  { name: "Finance", slug: "finance", type: "category" },
  { name: "Gifts", slug: "gifts", type: "category" },
  { name: "Education", slug: "education", type: "category" },
];

const mockDeals = [
  { name: "30% OFF Summer Collection", slug: "nike/summer30", type: "deal", store: "Nike" },
  { name: "Up to 50% Off Electronics", slug: "amazon/tech-sale", type: "deal", store: "Amazon" },
  { name: "$10 Gift Card with $50 Purchase", slug: "target/gift-card", type: "deal", store: "Target" },
  { name: "20% Off Select Laptops", slug: "best-buy/laptops", type: "deal", store: "Best Buy" },
];

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q")?.toLowerCase() || "";

    if (!query || query.length < 1) {
      return NextResponse.json({ results: [] });
    }

    const results: any[] = [];

    // Search database
    try {
      const [dbStores, dbCategories, dbCoupons] = await Promise.all([
        prisma.store.findMany({
          where: { name: { contains: query, mode: "insensitive" } },
          take: 5,
        }),
        prisma.category.findMany({
          where: { name: { contains: query, mode: "insensitive" } },
          take: 5,
        }),
        prisma.coupon.findMany({
          where: { title: { contains: query, mode: "insensitive" } },
          take: 5,
          include: { store: true },
        }),
      ]);

      dbStores.forEach((s) =>
        results.push({ id: s.id, name: s.name, slug: s.slug, type: "store" })
      );
      dbCategories.forEach((c) =>
        results.push({ id: c.id, name: c.name, slug: c.slug, type: "category" })
      );
      dbCoupons.forEach((c) =>
        results.push({
          id: c.id,
          name: c.title,
          slug: `${c.store?.slug || "deal"}/${c.id}`,
          type: "deal",
          store: c.store?.name,
        })
      );
    } catch (dbError) {
      // If DB fails, fall back to mock data
      console.log("DB search failed, using mock data");
    }

    // Fallback/mock search
    if (results.length === 0) {
      mockStores
        .filter((s) => s.name.toLowerCase().includes(query))
        .forEach((s) => results.push(s));
      mockCategories
        .filter((c) => c.name.toLowerCase().includes(query))
        .forEach((c) => results.push(c));
      mockDeals
        .filter((d) => d.name.toLowerCase().includes(query) || d.store.toLowerCase().includes(query))
        .forEach((d) => results.push(d));
    }

    return NextResponse.json({ results: results.slice(0, 8) });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
