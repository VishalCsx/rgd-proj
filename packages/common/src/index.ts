import { z } from "zod";

export const genderEnum = z.enum(["Male", "Female", "Others"]);

export const classEnum = z.enum([
  "I", "II", "III", "IV", "V",
  "VI", "VII", "VIII", "IX", "X"
]);

export const studentSchema = z.object({
  adharNumber: z.string().min(12).max(12), // Aadhaar is 12 digits
  name: z.string().min(2),
  dob: z.string().datetime(), // store as ISO string, parse later
  gender: genderEnum,
  imageUrl: z.string().url().optional(),

  // contact info
  email: z.string().email().optional(),
  phone: z.string().min(10).max(15).optional(),
  address: z.string().optional(),

  // Parent/Guardian Info
  fatherName: z.string().optional(),
  motherName: z.string().optional(),

  // Academics
  class: classEnum,
  status: z.string().default("active"),

  // Auto-managed by DB, don’t accept from client
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

// Inferred type
export type StudentInput = z.infer<typeof studentSchema>;
