"use server";

import { db } from "@/lib/prisma";
import { AdventureEnquiryFormSchema } from "@/schema";

export async function submitAdventureEnquiryForm(data: unknown) {
  const parsedData = AdventureEnquiryFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { error: "Invalid form data." };
  }

  const { name, email, message, destination, phone, countryCode } =
    parsedData.data;

  try {
    await db.adventureEnquiry.create({
      data: {
        name,
        email,
        message,
        destination,
        phone: `${countryCode}${phone}`,
        countryCode,
      },
    });

    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Submission error:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}
