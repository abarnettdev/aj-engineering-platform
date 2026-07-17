const limitWindowMs = 15 * 60 * 1_000;
const maxSubmissionsPerWindow = 5;
const attempts = new Map<string, number[]>();

export function isContactSubmissionRateLimited(key: string, now = Date.now()) {
  const windowStart = now - limitWindowMs;
  const recentAttempts = (attempts.get(key) ?? []).filter(
    (time) => time > windowStart,
  );

  if (recentAttempts.length >= maxSubmissionsPerWindow) {
    attempts.set(key, recentAttempts);
    return true;
  }

  recentAttempts.push(now);
  attempts.set(key, recentAttempts);
  return false;
}
