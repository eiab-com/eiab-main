// app/api/enquiries/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

// Set dynamic rendering to ensure fresh data on each request

/**
 * GET handler to fetch all adventure enquiries
 */
export async function GET() {
  try {
    await db.$connect();
    const data = await db.adventureEnquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching adventure enquiries:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch adventure enquiries" },
      { status: 500 }
    );
  }
}
