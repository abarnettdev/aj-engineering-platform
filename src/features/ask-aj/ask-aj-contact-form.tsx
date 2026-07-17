import { useEffect, useRef, type FormEvent, type KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type {
  ContactFieldErrors,
  ContactFormValues,
} from "@/features/ask-aj/contact-contracts";

export type AskAjContactFormProps = {
  values: ContactFormValues;
  errors: ContactFieldErrors;
  state: "idle" | "submitting" | "success" | "error";
  error?: string;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function AskAjContactForm({
  values,
  errors,
  state,
  error,
  onChange,
  onSubmit,
}: AskAjContactFormProps) {
  const isSubmitting = state === "submitting";
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const roleCompanyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (state !== "error") return;

    if (errors.name) {
      nameRef.current?.focus();
      return;
    }
    if (errors.email) {
      emailRef.current?.focus();
      return;
    }
    if (errors.roleCompany) {
      roleCompanyRef.current?.focus();
      return;
    }
    if (errors.message) {
      messageRef.current?.focus();
    }
  }, [errors.email, errors.message, errors.name, errors.roleCompany, state]);

  function handleMessageKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.nativeEvent.isComposing ||
      event.shiftKey ||
      event.key !== "Enter"
    )
      return;

    event.preventDefault();
    if (isSubmitting) return;
    event.currentTarget.form?.requestSubmit();
  }

  return (
    <form
      className="mt-5 space-y-4"
      noValidate
      onSubmit={onSubmit}
      aria-busy={isSubmitting}
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Share the essentials and AJ will follow up directly.
      </p>
      <div className="space-y-1.5">
        <label
          className="text-sm font-medium text-ink"
          htmlFor="ask-aj-contact-name"
        >
          Name
        </label>
        <Input
          id="ask-aj-contact-name"
          ref={nameRef}
          value={values.name}
          onChange={(event) => onChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={
            errors.name ? "ask-aj-contact-name-error" : undefined
          }
          autoComplete="name"
          disabled={isSubmitting}
          className="h-11 bg-background"
        />
        {errors.name && (
          <FieldError id="ask-aj-contact-name-error" message={errors.name} />
        )}
      </div>
      <div className="space-y-1.5">
        <label
          className="text-sm font-medium text-ink"
          htmlFor="ask-aj-contact-email"
        >
          Work email
        </label>
        <Input
          id="ask-aj-contact-email"
          ref={emailRef}
          type="email"
          value={values.email}
          onChange={(event) => onChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={
            errors.email ? "ask-aj-contact-email-error" : undefined
          }
          autoComplete="email"
          inputMode="email"
          disabled={isSubmitting}
          className="h-11 bg-background"
        />
        {errors.email && (
          <FieldError id="ask-aj-contact-email-error" message={errors.email} />
        )}
      </div>
      <div className="space-y-1.5">
        <label
          className="text-sm font-medium text-ink"
          htmlFor="ask-aj-contact-role-company"
        >
          Role and company{" "}
          <span className="text-muted-foreground">(optional)</span>
        </label>
        <Input
          id="ask-aj-contact-role-company"
          ref={roleCompanyRef}
          value={values.roleCompany}
          onChange={(event) => onChange("roleCompany", event.target.value)}
          aria-invalid={Boolean(errors.roleCompany)}
          aria-describedby={
            errors.roleCompany ? "ask-aj-contact-role-company-error" : undefined
          }
          autoComplete="organization-title"
          disabled={isSubmitting}
          className="h-11 bg-background"
        />
        {errors.roleCompany && (
          <FieldError
            id="ask-aj-contact-role-company-error"
            message={errors.roleCompany}
          />
        )}
      </div>
      <div className="space-y-1.5">
        <label
          className="text-sm font-medium text-ink"
          htmlFor="ask-aj-contact-message"
        >
          Message
        </label>
        <Textarea
          id="ask-aj-contact-message"
          ref={messageRef}
          value={values.message}
          onChange={(event) => onChange("message", event.target.value)}
          onKeyDown={handleMessageKeyDown}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "ask-aj-contact-message-error" : undefined
          }
          disabled={isSubmitting}
          className="min-h-28 resize-y bg-background"
        />
        {errors.message && (
          <FieldError
            id="ask-aj-contact-message-error"
            message={errors.message}
          />
        )}
      </div>
      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="ask-aj-contact-website">Website</label>
        <input
          id="ask-aj-contact-website"
          name="website"
          value={values.website}
          onChange={(event) => onChange("website", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {error && (
        <p
          className="border border-oxblood/40 bg-oxblood/5 p-3 text-sm text-oxblood"
          role="alert"
        >
          {error}
        </p>
      )}
      {state === "success" && (
        <p
          className="border border-success/35 bg-success-surface p-3 text-sm text-success-foreground"
          role="status"
          aria-live="polite"
        >
          Thanks! Your message has been sent. I'll be in touch soon.
        </p>
      )}
      <Button type="submit" className="min-h-11 w-full" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="text-sm text-oxblood" role="alert">
      {message}
    </p>
  );
}
