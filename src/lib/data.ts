import { db } from "./prisma";
export const dynamic = "force-dynamic";

export const getAdventureById = async (id: string) => {
  try {
    const adventure = await db.adventure.findUnique({
      where: {
        id,
      },
    });
    return adventure;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch adventure.");
  }
};

export const getAdventureEnquiries = async () => {
  const data = await db.adventureEnquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};

export const getContacts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contacts`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch contacts: ${response.status}`);
    }

    const { data } = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};
