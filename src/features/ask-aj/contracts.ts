import { z } from "zod";

export const askAjRequestSchema = z
  .object({
    question: z.string().trim().min(1).max(1_000),
    conversationId: z.string().uuid().optional(),
  })
  .strict();

export type AskAjRequest = z.infer<typeof askAjRequestSchema>;

const streamBaseSchema = z.object({
  conversationId: z.string().uuid(),
  messageId: z.string().uuid(),
});

export const askAjCitationSchema = z.object({
  id: z.string().min(1),
  sourceId: z.string().min(1),
  title: z.string().min(1),
  url: z.string().min(1),
  section: z.string().min(1).optional(),
  excerpt: z.string().min(1),
});

export const askAjStreamEventSchema = z.discriminatedUnion("type", [
  streamBaseSchema.extend({
    type: z.literal("conversation.started"),
  }),
  streamBaseSchema.extend({
    type: z.literal("agent.status"),
    status: z.enum(["thinking", "searching", "writing"]),
    label: z.string().min(1),
  }),
  streamBaseSchema.extend({
    type: z.literal("message.delta"),
    delta: z.string(),
  }),
  streamBaseSchema.extend({
    type: z.literal("citation"),
    citation: askAjCitationSchema,
  }),
  streamBaseSchema.extend({
    type: z.literal("message.completed"),
  }),
  z.object({
    type: z.literal("error"),
    conversationId: z.string().uuid().optional(),
    messageId: z.string().uuid().optional(),
    message: z.string().min(1),
  }),
]);

export type AskAjCitation = z.infer<typeof askAjCitationSchema>;
export type AskAjStreamEvent = z.infer<typeof askAjStreamEventSchema>;
