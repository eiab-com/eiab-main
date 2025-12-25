
"use server";

import { db } from "@/lib/prisma";
import { contactFormSchema, type ContactFormValues } from "@/schema";

export async function submitContactForm(data: ContactFormValues) {
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { error: "Invalid form data." };
  }

  const { name, email, message, location, phone, countryCode, contactMethod } =
    parsedData.data;

  try {
    await db.contact.create({
      data: {
        name,
        email,
        message,
        location,
        phone: `${countryCode}${phone}`,
        countryCode,
        contactMethod,
      },
    });

    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Submission error:", error);
    return { error: "Something went wrong. Please try again with another email." };
  }
}
