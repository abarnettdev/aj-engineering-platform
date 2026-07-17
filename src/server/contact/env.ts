import { z } from "zod";

const apiKeySchema = z.string().trim().min(1);
const emailSchema = z.string().trim().email();

export class ContactConfigurationError extends Error {
  constructor() {
    super("Recruiter contact email configuration is incomplete.");
  }
}

export type ContactRuntimeConfig = {
  provider: "resend";
  apiKey: string;
  toEmail: string;
  fromEmail: string;
};

export function getContactRuntimeConfig(): ContactRuntimeConfig {
  if (process.env.EMAIL_PROVIDER !== "resend") {
    throw new ContactConfigurationError();
  }

  const apiKey = apiKeySchema.safeParse(process.env.RESEND_API_KEY);
  const toEmail = emailSchema.safeParse(process.env.CONTACT_TO_EMAIL);
  const fromEmail = emailSchema.safeParse(process.env.CONTACT_FROM_EMAIL);

  if (!apiKey.success || !toEmail.success || !fromEmail.success) {
    throw new ContactConfigurationError();
  }

  return {
    provider: "resend",
    apiKey: apiKey.data,
    toEmail: toEmail.data,
    fromEmail: fromEmail.data,
  };
}
