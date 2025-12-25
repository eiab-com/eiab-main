import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const adventure = await db.adventure.findUnique({
      where: {
        id,
      },
    });

    if (!adventure) {
      return NextResponse.json(
        { error: "Adventure not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(adventure);
  } catch (error) {
    console.error("Error fetching adventure:", error);
    return NextResponse.json(
      { error: "Failed to fetch adventure" },
      { status: 500 }
    );
  }
}
