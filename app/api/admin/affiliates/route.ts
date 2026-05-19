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
    const status = searchParams.get("status") || "";
    const network = searchParams.get("network") || "";

    const where: any = {};
    if (search) {
      where.name = { contains: search, mode: "insensitive" };
    }
    if (status) {
      where.status = status;
    }
    if (network) {
      where.network = network;
    }

    const affiliates = await prisma.affiliate.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ affiliates });
  } catch (error) {
    console.error("Failed to fetch affiliates:", error);
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
    const { name, slug, email, website, network, commissionType, commissionRate, cookieDuration, status, notes } = body;

    if (!name || !slug) {
      return NextResponse.json({ error: "Name and slug are required" }, { status: 400 });
    }

    const affiliate = await prisma.affiliate.create({
      data: {
        name,
        slug,
        email,
        website,
        network: network || "DIRECT",
        commissionType: commissionType || "CPS",
        commissionRate: parseFloat(commissionRate) || 0,
        cookieDuration: parseInt(cookieDuration) || 30,
        status: status || "ACTIVE",
        notes,
      },
    });

    return NextResponse.json({ affiliate }, { status: 201 });
  } catch (error) {
    console.error("Failed to create affiliate:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
