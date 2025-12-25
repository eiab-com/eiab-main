import { z } from "zod";

export const AdventureEnquiryFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
  destination: z.string(),
  phone: z.string().optional(),
  countryCode: z.string().optional(),
});

export type adventureEnquiryType = z.infer<typeof AdventureEnquiryFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  countryCode: z.string(),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  contactMethod: z.enum(["Email", "Phone"], {
    required_error: "Please select a preferred way of contact",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Country codes
export const countryCodes = [
  { code: "+1", country: "US/Canada" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
];