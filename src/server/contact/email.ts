import { Resend } from "resend";
import type { ContactFormValues } from "@/features/ask-aj/contact-contracts";
import type { ContactRuntimeConfig } from "@/server/contact/env";

export class ContactEmailProviderError extends Error {
  readonly diagnostics: ContactEmailDiagnostics;

  constructor(diagnostics: ContactEmailDiagnostics) {
    super("Email provider rejected the message.");
    this.name = "ContactEmailProviderError";
    this.diagnostics = diagnostics;
  }
}

export type ContactEmailDiagnostics = {
  provider: ContactRuntimeConfig["provider"];
  httpStatus: number | null;
  errorCode: string | null;
  errorType: string | null;
  message: string | null;
  responseBody: unknown;
  senderEmail: string;
  replyTo: string;
  recipientEmail: string;
};

export async function sendRecruiterContactEmail(
  contact: ContactFormValues,
  config: ContactRuntimeConfig,
) {
  const resend = new Resend(config.apiKey);
  const payload = {
    from: config.fromEmail,
    to: [config.toEmail],
    replyTo: contact.email,
    subject: `Ask A.J. recruiter message from ${contact.name}`,
    text: formatContactEmail(contact),
  };

  try {
    const result = await resend.emails.send(payload);

    if (result.error) {
      throw new ContactEmailProviderError(
        toContactEmailDiagnostics(result.error, config, contact),
      );
    }

    if (!result.data?.id) {
      throw new ContactEmailProviderError({
        provider: config.provider,
        httpStatus: null,
        errorCode: "missing_data",
        errorType: "missing_data",
        message: "Email provider did not return a message id.",
        responseBody: null,
        senderEmail: config.fromEmail,
        replyTo: redactEmail(contact.email),
        recipientEmail: config.toEmail,
      });
    }
  } catch (error) {
    if (error instanceof ContactEmailProviderError) throw error;

    throw new ContactEmailProviderError(
      toContactEmailDiagnostics(error, config, contact),
    );
  }
}

const recentContactSubmissions = new Map<string, number>();
const duplicateWindowMs = 5 * 60 * 1_000;

export function isDuplicateContactSubmission(
  contact: ContactFormValues,
  now = Date.now(),
) {
  const expiresAt = recentContactSubmissions.get(
    getContactSubmissionKey(contact),
  );

  return expiresAt != null && expiresAt > now;
}

export function rememberContactSubmission(
  contact: ContactFormValues,
  now = Date.now(),
) {
  recentContactSubmissions.set(
    getContactSubmissionKey(contact),
    now + duplicateWindowMs,
  );
}

function getContactSubmissionKey(contact: ContactFormValues) {
  return [
    contact.email.trim().toLowerCase(),
    contact.message.trim().toLowerCase(),
  ].join(":");
}

function formatContactEmail(contact: ContactFormValues) {
  return [
    "New Ask A.J. recruiter contact",
    "",
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Role and company: ${contact.roleCompany || "Not provided"}`,
    "",
    "Message:",
    contact.message,
  ].join("\n");
}

function toContactEmailDiagnostics(
  error: unknown,
  config: ContactRuntimeConfig,
  contact: ContactFormValues,
): ContactEmailDiagnostics {
  const record = asRecord(error);
  const nestedResponse = asRecord(record?.response);
  const nestedError = asRecord(record?.error);
  const status =
    readNumber(record, "statusCode") ??
    readNumber(record, "status") ??
    readNumber(nestedResponse, "status") ??
    readNumber(nestedError, "statusCode") ??
    null;
  const message =
    readString(record, "message") ??
    readString(nestedError, "message") ??
    readString(nestedResponse, "statusText");

  return {
    provider: config.provider,
    httpStatus: status,
    errorCode:
      readString(record, "name") ??
      readString(record, "code") ??
      readString(nestedError, "name") ??
      readString(nestedError, "code"),
    errorType:
      readString(record, "type") ??
      readString(nestedError, "type") ??
      readString(record, "name"),
    message: sanitizeProviderMessage(message),
    responseBody: sanitizeResponseBody(error),
    senderEmail: config.fromEmail,
    replyTo: redactEmail(contact.email),
    recipientEmail: config.toEmail,
  };
}

function sanitizeResponseBody(value: unknown): unknown {
  if (value == null) return null;
  if (typeof value === "string") return sanitizeProviderMessage(value);
  if (typeof value !== "object") return value;

  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([key]) => !isSensitiveKey(key))
    .map(([key, nestedValue]) => [key, sanitizeResponseBody(nestedValue)]);

  return Object.fromEntries(entries);
}

function sanitizeProviderMessage(value: string | null | undefined) {
  if (!value) return null;
  return value.replace(/re_[A-Za-z0-9_=-]+/g, "[redacted]");
}

function redactEmail(value: string) {
  const [local, domain] = value.split("@");
  if (!local || !domain) return "[invalid-email]";
  return `${local.slice(0, 1)}***@${domain}`;
}

function asRecord(value: unknown) {
  return value != null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function readString(record: Record<string, unknown> | null, key: string) {
  const value = record?.[key];
  return typeof value === "string" ? value : null;
}

function readNumber(record: Record<string, unknown> | null, key: string) {
  const value = record?.[key];
  return typeof value === "number" ? value : null;
}

function isSensitiveKey(key: string) {
  return /api|key|authorization|token|secret|body|text|html|subject/i.test(key);
}
