import { z } from "zod";

const apiKeySchema = z.string().trim().min(1);
const emailSchema = z.string().trim().email();
const senderSchema = z
  .string()
  .trim()
  .min(1)
  .refine(isValidSender, "Enter a valid sender email.");

export class ContactConfigurationError extends Error {
  readonly missingKeys: string[];
  readonly provider: string;

  constructor(missingKeys: string[], provider: string) {
    super("Recruiter contact email configuration is incomplete.");
    this.missingKeys = missingKeys;
    this.provider = provider;
  }
}

export type ContactRuntimeConfig = {
  provider: "resend";
  apiKey: string;
  toEmail: string;
  fromEmail: string;
};

export function getContactRuntimeConfig(): ContactRuntimeConfig {
  const provider = process.env.EMAIL_PROVIDER?.trim().toLowerCase() ?? "";
  const missingKeys: string[] = [];

  if (provider !== "resend") missingKeys.push("EMAIL_PROVIDER");

  const apiKey = apiKeySchema.safeParse(process.env.RESEND_API_KEY);
  const toEmail = emailSchema.safeParse(process.env.CONTACT_TO_EMAIL);
  const fromEmail = senderSchema.safeParse(process.env.CONTACT_FROM_EMAIL);

  if (!apiKey.success) missingKeys.push("RESEND_API_KEY");
  if (!toEmail.success) missingKeys.push("CONTACT_TO_EMAIL");
  if (!fromEmail.success) missingKeys.push("CONTACT_FROM_EMAIL");

  if (
    missingKeys.length > 0 ||
    !apiKey.success ||
    !toEmail.success ||
    !fromEmail.success
  ) {
    throw new ContactConfigurationError(missingKeys, provider);
  }

  return {
    provider: "resend",
    apiKey: apiKey.data,
    toEmail: toEmail.data,
    fromEmail: fromEmail.data,
  };
}

function isValidSender(value: string) {
  const displayNameMatch = value.match(/^.+<([^<>]+)>$/);
  const email = displayNameMatch?.[1]?.trim() ?? value;
  return emailSchema.safeParse(email).success;
}
