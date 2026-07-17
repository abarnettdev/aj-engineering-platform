# Ask A.J. Availability Safeguards

Ask A.J. targets high functional availability without claiming a guaranteed SLA. External systems such as OpenAI, Vercel, DNS, and network infrastructure remain outside the application's direct control.

Functional availability is defined as:

```text
(live success + fallback-model success + cached success + static fallback success) / total valid requests
```

Malformed requests, blocked origins, deliberate rate-limit abuse, and user-aborted requests are excluded from downtime accounting.

## Availability Chain

1. Primary OpenAI model from `OPENAI_MODEL`.
2. Transient retry for `429`, `500`, `502`, `503`, and `504` before the first text delta.
3. One fallback OpenAI model from `OPENAI_FALLBACK_MODEL`.
4. Application-owned cached answer for recognized recruiter questions.
5. Static graceful fallback answer.

## Timeout Budget

- Primary model attempt: 9 seconds, with bounded retry delays of about 500ms and 1250ms plus small jitter.
- Fallback model attempt: 5 seconds.
- Cached/static fallback reserve: local-only and expected to complete immediately.
- Total target decision window: about 10-15 seconds under normal conditions.

## Serverless Limitations

The circuit breaker, rate limiter, duplicate-request guard, and availability counters are in-memory and per server instance. This is the safest no-cost implementation for the current MVP, but Vercel instances do not share this state. A durable shared store such as Vercel KV or Redis would be the smallest production upgrade if abuse traffic or availability measurement needs cross-instance accuracy.

## Log Inspection

Availability can be inspected through structured server logs with events such as:

- `ask_aj.primary_success`
- `ask_aj.primary_retry`
- `ask_aj.model_fallback`
- `ask_aj.fallback_success`
- `ask_aj.cache_fallback`
- `ask_aj.static_fallback`
- `ask_aj.circuit_open`
- `ask_aj.circuit_recovered`
- `ask_aj.request_failed`
- `ask_aj.request_rejected`

Logs intentionally avoid API keys, authorization headers, full recruiter questions, full generated answers, contact-form details, and system prompts.
