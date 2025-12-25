"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Adventure } from "@/types";

export async function createAdventure(data: Partial<Adventure>) {
  try {
    const adventure = await db.adventure.create({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: data as any,
    });
    revalidatePath("/admin/adventures");
    return { success: true, data: adventure };
  } catch (error) {
    console.error("Error creating adventure:", error);
    return { success: false, error: "Failed to create adventure." };
  }
}

export async function getAdventures() {
  try {
    const adventures = await db.adventure.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: adventures };
  } catch (error) {
    console.error("Error fetching adventures:", error);
    return { success: false, error: "Failed to fetch adventures." };
  }
}

export async function getAdventureById(id: string) {
  try {
    const adventure = await db.adventure.findUnique({
      where: { id },
    });
    return { success: true, data: adventure };
  } catch (error) {
    console.error(`Error fetching adventure with id ${id}:`, error);
    return { success: false, error: "Failed to fetch adventure." };
  }
}

export async function updateAdventure(id: string, data: Partial<Adventure>) {
  try {
    const adventure = await db.adventure.update({
      where: { id },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: data as any,
    });
    revalidatePath("/admin/adventures");
    revalidatePath(`/admin/adventures/edit/${id}`);
    return { success: true, data: adventure };
  } catch (error) {
    console.error(`Error updating adventure with id ${id}:`, error);
    return { success: false, error: "Failed to update adventure." };
  }
}

export async function updateAdventurePublishedStatus(id: string, published: boolean) {
  try {
    const adventure = await db.adventure.update({
      where: { id },
      data: {
        published,
      },
    });
    revalidatePath("/admin/adventures");
    return { success: true, data: adventure };
  } catch (error) {
    console.error(`Error updating adventure status with id ${id}:`, error);
    return { success: false, error: "Failed to update adventure status." };
  }
}

export async function getUpcomingAdventures() {
    try {
        const adventures = await db.adventure.findMany({
            where: {
                published: true,
                startDate: {
                    gte: new Date(),
                },
            },
            orderBy: {
                startDate: 'asc',
            },
            take: 3,
        });
        return { success: true, data: adventures };
    } catch (error) {
        console.error("Error fetching upcoming adventures:", error);
        return { success: false, error: "Failed to fetch upcoming adventures." };
    }
}

export async function getLatestAdventure() {
    try {
        const adventures = await db.adventure.findMany({
            where: {
                published: true,
                startDate: {
                    gte: new Date(),
                },
            },
            orderBy: {
                startDate: 'asc',
            },
            take: 1,
        });
        return { success: true, data: adventures[0] || null };
    } catch (error) {
        console.error("Error fetching latest adventure:", error);
        return { success: false, error: "Failed to fetch latest adventure." };
    }
}
