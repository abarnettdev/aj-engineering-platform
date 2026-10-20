import { Link, useRouterState } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

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
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full bg-ink py-2 pl-2 pr-4 text-white shadow-lift transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:right-6"
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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight">
          {label}
        </span>
        <span className="hidden text-[10px] leading-tight text-white/65 sm:block">
          {description}
        </span>
      </span>
    </>
  );
}
