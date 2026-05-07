"use server";

import { db } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  error?: string | {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
} | null;

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await db.insert(contactMessages).values({
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      message: validatedFields.data.message,
    });

    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      error: "Failed to send message. Please try again later.",
    };
  }
}
