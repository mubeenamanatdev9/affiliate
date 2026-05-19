import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const storeId = searchParams.get("storeId") || "";

    const where: any = {};
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { code: { contains: search, mode: "insensitive" } },
      ];
    }
    if (storeId) {
      where.storeId = storeId;
    }

    const coupons = await prisma.coupon.findMany({
      where,
      include: { store: true, product: true, category: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ coupons });
  } catch (error) {
    console.error("Failed to fetch coupons:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, code, description, discountType, discountValue, minPurchase, maxDiscount, affiliateUrl, storeId, productId, categoryId, affiliateId, endDate } = body;

    if (!title || !affiliateUrl || !storeId) {
      return NextResponse.json({ error: "Title, affiliate URL, and store are required" }, { status: 400 });
    }

    const coupon = await prisma.coupon.create({
      data: {
        title,
        code,
        description,
        discountType: discountType || "PERCENTAGE",
        discountValue: discountValue ? parseFloat(discountValue) : null,
        minPurchase: minPurchase ? parseFloat(minPurchase) : null,
        maxDiscount: maxDiscount ? parseFloat(maxDiscount) : null,
        affiliateUrl,
        storeId,
        productId: productId || null,
        categoryId: categoryId || null,
        affiliateId: affiliateId || null,
        endDate: endDate ? new Date(endDate) : null,
      },
    });

    return NextResponse.json({ coupon }, { status: 201 });
  } catch (error) {
    console.error("Failed to create coupon:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
