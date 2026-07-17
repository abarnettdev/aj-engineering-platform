import { z } from "zod";

export const contactFormValuesSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email address is too long."),
  roleCompany: z.string().trim().max(160, "Role or company is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Add a short message so AJ has useful context.")
    .max(2_000, "Message is too long."),
  website: z.string().max(200).default(""),
});

export type ContactFormValues = z.infer<typeof contactFormValuesSchema>;
export type ContactFieldErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export const contactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().min(1),
});

export const emptyContactFormValues: ContactFormValues = {
  name: "",
  email: "",
  roleCompany: "",
  message: "",
  website: "",
};

export function getContactFieldErrors(error: z.ZodError): ContactFieldErrors {
  const editableFields = ["name", "email", "roleCompany", "message"] as const;

  return error.issues.reduce<ContactFieldErrors>((errors, issue) => {
    const field = issue.path[0];
    if (
      typeof field === "string" &&
      editableFields.includes(field as (typeof editableFields)[number]) &&
      !errors[field as (typeof editableFields)[number]]
    ) {
      errors[field as (typeof editableFields)[number]] = issue.message;
    }
    return errors;
  }, {});
}
