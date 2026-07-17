import { createFileRoute } from "@tanstack/react-router";
import {
  contactFormValuesSchema,
  contactResponseSchema,
} from "@/features/ask-aj/contact-contracts";
import {
  ContactConfigurationError,
  getContactRuntimeConfig,
} from "@/server/contact/env";
import {
  ContactEmailProviderError,
  isDuplicateContactSubmission,
  rememberContactSubmission,
  sendRecruiterContactEmail,
} from "@/server/contact/email";
import { isContactSubmissionRateLimited } from "@/server/contact/rate-limit";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const contact = contactFormValuesSchema.parse(await request.json());
          const clientKey = getClientKey(request);

          if (contact.website.trim()) return successResponse();

          if (isContactSubmissionRateLimited(clientKey)) {
            return response(
              {
                success: false,
                message:
                  "Please wait a few minutes before sending another message.",
              },
              429,
            );
          }

          const config = getContactRuntimeConfig();

          if (isDuplicateContactSubmission(contact)) {
            return successResponse();
          }

          await sendRecruiterContactEmail(contact, config);
          rememberContactSubmission(contact);
          return successResponse();
        } catch (error) {
          if (error instanceof ContactConfigurationError) {
            console.error("contact.configuration_invalid", {
              environment: process.env.NODE_ENV ?? "unknown",
              missingKeys: error.missingKeys,
              provider: error.provider || "unset",
              timestamp: new Date().toISOString(),
            });
            return response(
              {
                success: false,
                message:
                  "Contact is temporarily unavailable. Please try again shortly.",
              },
              503,
            );
          }

          if (error instanceof Error && error.name === "ZodError") {
            return response(
              {
                success: false,
                message: "Please review the highlighted fields and try again.",
              },
              400,
            );
          }

          if (error instanceof ContactEmailProviderError) {
            console.error("contact.provider_rejected", error.diagnostics);
            return response(
              {
                success: false,
                message:
                  "Your message could not be sent. Please try again shortly.",
              },
              502,
            );
          }

          console.error("Recruiter contact email failed", {
            name: error instanceof Error ? error.name : "UnknownError",
          });
          return response(
            {
              success: false,
              message:
                "Your message could not be sent. Please try again shortly.",
            },
            502,
          );
        }
      },
    },
  },
});

function successResponse() {
  return response(
    { success: true, message: "Your message was sent to AJ." },
    200,
  );
}

function response(
  payload: { success: boolean; message: string },
  status: number,
) {
  return Response.json(contactResponseSchema.parse(payload), { status });
}

function getClientKey(request: Request) {
  return request.headers.get("cf-connecting-ip")?.slice(0, 64) ?? "anonymous";
}
