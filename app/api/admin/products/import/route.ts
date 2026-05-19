import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { products } = body;

    if (!Array.isArray(products) || products.length === 0) {
      return NextResponse.json({ error: "Products array is required" }, { status: 400 });
    }

    const created = await prisma.product.createMany({
      data: products.map((p: any) => ({
        name: p.name,
        slug: p.slug || p.name.toLowerCase().replace(/\s+/g, "-"),
        description: p.description,
        originalPrice: p.originalPrice ? parseFloat(p.originalPrice) : null,
        salePrice: p.salePrice ? parseFloat(p.salePrice) : null,
        currency: p.currency || "USD",
        storeId: p.storeId,
        categoryId: p.categoryId || null,
        affiliateId: p.affiliateId || null,
        image: p.image,
      })),
      skipDuplicates: true,
    });

    return NextResponse.json({ created: created.count });
  } catch (error) {
    console.error("Failed to import products:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
