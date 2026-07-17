# Recruiter Contact Email

The Ask A.J. contact form sends server-side email through Resend. Configure these environment variables in the deployment environment:

```text
EMAIL_PROVIDER=resend
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

`EMAIL_PROVIDER` is case-normalized by the server, but `resend` is the intended value. `CONTACT_FROM_EMAIL` must be an address on a domain verified in the Resend account. Display-name format is supported, for example:

```text
AJ Barnett <contact@mail.ajbarnett.tech>
```

Resend does not permit a fabricated sender domain. The form uses the recruiter's validated email as `replyTo`; the recipient is always server-owned through `CONTACT_TO_EMAIL`.

The endpoint applies a small per-instance throttle, duplicate-submission protection, and a honeypot. This is MVP protection, not a distributed abuse-prevention system.

## Vercel Checklist

- Confirm all four variables exist in Production.
- Confirm the same variables exist in Preview only if preview deployments should send email.
- Redeploy after changing environment variables.
- Confirm the Resend domain is verified.
- Confirm `CONTACT_FROM_EMAIL` uses that verified domain.
- Confirm `CONTACT_TO_EMAIL` is a valid recipient inbox.
- Send one controlled smoke test and verify the message arrives.
