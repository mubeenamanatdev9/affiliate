import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/favorites - List user's favorites
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ favorites: [] }, { status: 200 });
  }

  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId: session.user.id as string },
      select: { couponId: true },
    });

    return NextResponse.json({ favorites: favorites.map((f) => f.couponId) });
  } catch (error) {
    console.error("Failed to fetch favorites:", error);
    return NextResponse.json(
      { error: "Failed to fetch favorites" },
      { status: 500 }
    );
  }
}

// POST /api/favorites - Add a favorite
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { couponId } = await req.json();

    if (!couponId || typeof couponId !== "string") {
      return NextResponse.json(
        { error: "Invalid couponId" },
        { status: 400 }
      );
    }

    const favorite = await prisma.favorite.create({
      data: {
        userId: session.user.id as string,
        couponId,
      },
    });

    return NextResponse.json({ favorite }, { status: 201 });
  } catch (error: any) {
    // Handle unique constraint violation (already favorited)
    if (error.code === "P2002") {
      return NextResponse.json(
        { message: "Already favorited" },
        { status: 200 }
      );
    }

    console.error("Failed to add favorite:", error);
    return NextResponse.json(
      { error: "Failed to add favorite" },
      { status: 500 }
    );
  }
}

// DELETE /api/favorites - Remove a favorite
export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { couponId } = await req.json();

    if (!couponId || typeof couponId !== "string") {
      return NextResponse.json(
        { error: "Invalid couponId" },
        { status: 400 }
      );
    }

    await prisma.favorite.deleteMany({
      where: {
        userId: session.user.id as string,
        couponId,
      },
    });

    return NextResponse.json({ message: "Favorite removed" }, { status: 200 });
  } catch (error) {
    console.error("Failed to remove favorite:", error);
    return NextResponse.json(
      { error: "Failed to remove favorite" },
      { status: 500 }
    );
  }
}
