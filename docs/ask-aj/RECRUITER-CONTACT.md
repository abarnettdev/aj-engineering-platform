# Recruiter Contact Email

The Ask A.J. contact form sends server-side email through Resend. Configure these environment variables in the deployment environment:

```text
EMAIL_PROVIDER=resend
RESEND_API_KEY=
CONTACT_TO_EMAIL=aj.barnett84@gmail.com
CONTACT_FROM_EMAIL=
```

`CONTACT_FROM_EMAIL` must be an address on a domain verified in the Resend account. Resend does not permit a fabricated sender domain. The form uses the recruiter's validated email as `replyTo`; the recipient is always server-owned through `CONTACT_TO_EMAIL`.

The endpoint applies a small per-instance throttle and a honeypot. This is MVP protection, not a distributed abuse-prevention system.
