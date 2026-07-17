import { Link, useRouterState } from "@tanstack/react-router";
import { MessageSquareText } from "lucide-react";

type AskAjLauncherContentProps = {
  label?: string;
  description?: string;
};

export function AskAjLauncher() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  if (pathname === "/ask-aj") return null;

  return (
    <Link
      to="/ask-aj"
      aria-label="Ask A.J., AI agent built by AJ Barnett"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex max-w-[calc(100vw-2rem)] items-center gap-3 border border-gold/50 bg-ink px-4 py-3 text-background shadow-[0_18px_45px_-25px_rgba(0,0,0,0.55)] transition-colors hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:right-6"
    >
      <AskAjLauncherContent />
    </Link>
  );
}

export function AskAjLauncherContent({
  label = "Ask A.J.",
  description = "AI agent built by AJ Barnett",
}: AskAjLauncherContentProps) {
  return (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-current/25">
        <MessageSquareText className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight">
          {label}
        </span>
        <span className="mono hidden text-[9px] uppercase tracking-[0.18em] opacity-75 sm:block">
          {description}
        </span>
      </span>
    </>
  );
}
