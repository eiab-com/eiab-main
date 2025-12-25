import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const adventures = await db.adventure.findMany({
      where: {
        published: true,
      },
      orderBy: {
        startDate: "asc",
      },
    });
    return NextResponse.json(adventures);
  } catch (error) {
    console.error("Error fetching adventures:", error);
    return NextResponse.json(
      { error: "Failed to fetch adventures" },
      { status: 500 }
    );
  }
}
