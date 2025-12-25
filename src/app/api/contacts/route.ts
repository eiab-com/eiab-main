// app/api/contacts/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

/**
 * GET handler to fetch all contacts
 */
export async function GET() {
  try {
    await db.$connect();
    const data = await db.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
