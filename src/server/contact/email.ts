import { Resend } from "resend";
import type { ContactFormValues } from "@/features/ask-aj/contact-contracts";
import type { ContactRuntimeConfig } from "@/server/contact/env";

export async function sendRecruiterContactEmail(
  contact: ContactFormValues,
  config: ContactRuntimeConfig,
) {
  const resend = new Resend(config.apiKey);
  const result = await resend.emails.send({
    from: config.fromEmail,
    to: [config.toEmail],
    replyTo: contact.email,
    subject: `Ask A.J. recruiter message from ${contact.name}`,
    text: formatContactEmail(contact),
  });

  if (result.error) throw new Error("Email provider rejected the message.");
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
