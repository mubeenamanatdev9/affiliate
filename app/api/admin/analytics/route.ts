import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [totalClicks, totalConversions, confirmedConversions, clicksByDevice, recentActivity, topAffiliates] = await Promise.all([
      prisma.click.count(),
      prisma.conversion.count(),
      prisma.conversion.aggregate({
        where: { status: "CONFIRMED" },
        _sum: { orderValue: true },
      }),
      prisma.click.groupBy({
        by: ["device"],
        _count: { id: true },
      }),
      prisma.activityLog.findMany({
        include: { user: true },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
      prisma.affiliate.findMany({
        orderBy: { totalRevenue: "desc" },
        take: 5,
      }),
    ]);

    const conversionRate = totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0;

    return NextResponse.json({
      totalRevenue: confirmedConversions._sum.orderValue || 0,
      totalClicks,
      totalConversions,
      conversionRate: parseFloat(conversionRate.toFixed(2)),
      clicksByDevice: clicksByDevice.map((d) => ({ device: d.device || "Unknown", count: d._count.id })),
      topAffiliates,
      recentActivity,
    });
  } catch (error) {
    console.error("Failed to fetch analytics:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
