import type { CSSProperties } from "react";

/**
 * Custom SVG illustration set, engineered on the fly, no stock imagery.
 * Uses currentColor + a gold accent stop so illustrations inherit theme.
 */

const gold = "var(--gold)";
const ink = "currentColor";

function Frame({
  children,
  ratio = "4/3",
  className = "",
  style,
}: {
  children: React.ReactNode;
  ratio?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-border bg-surface ${className}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      {children}
    </div>
  );
}

export function BlueprintIllus({ label = "01", className = "" }: { label?: string; className?: string }) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-foreground/70">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
        <rect x="40" y="50" width="200" height="140" fill="none" stroke={ink} strokeOpacity="0.6" strokeWidth="1.2" />
        <rect x="60" y="70" width="80" height="18" fill={ink} fillOpacity="0.08" />
        <rect x="60" y="96" width="160" height="6" fill={ink} fillOpacity="0.15" />
        <rect x="60" y="108" width="120" height="6" fill={ink} fillOpacity="0.15" />
        <rect x="60" y="120" width="140" height="6" fill={ink} fillOpacity="0.15" />
        <rect x="60" y="150" width="70" height="24" fill={gold} fillOpacity="0.85" />
        <line x1="260" y1="60" x2="360" y2="60" stroke={gold} strokeWidth="1" />
        <line x1="260" y1="80" x2="330" y2="80" stroke={ink} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="260" y1="100" x2="345" y2="100" stroke={ink} strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="320" cy="200" r="34" fill="none" stroke={gold} strokeWidth="1" />
        <circle cx="320" cy="200" r="4" fill={gold} />
        <text x="40" y="270" fill={ink} fillOpacity="0.55" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
          {label} · BLUEPRINT → PRODUCTION
        </text>
      </svg>
    </Frame>
  );
}

export function ComponentSystemIllus({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-foreground/70">
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={40 + c * 62}
              y={40 + r * 55}
              width="52"
              height="45"
              rx="4"
              fill="none"
              stroke={ink}
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          )),
        )}
        <rect x="164" y="150" width="52" height="45" rx="4" fill={gold} fillOpacity="0.85" />
        <rect x="102" y="95" width="52" height="45" rx="4" fill={ink} fillOpacity="0.85" />
        <rect x="226" y="205" width="52" height="45" rx="4" fill={ink} fillOpacity="0.12" stroke={gold} strokeWidth="1.5" />
        <text x="40" y="285" fill={ink} fillOpacity="0.55" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
          COMPONENT SYSTEM · 170+ ASSETS
        </text>
      </svg>
    </Frame>
  );
}

export function ArchitectureIllus({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-foreground/70">
        {[[80, 60], [200, 60], [320, 60], [140, 150], [260, 150], [200, 240]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill={i === 5 ? gold : ink} fillOpacity={i === 5 ? 1 : 0.85} />
          </g>
        ))}
        <g stroke={ink} strokeOpacity="0.35" strokeWidth="1">
          <line x1="80" y1="60" x2="140" y2="150" />
          <line x1="200" y1="60" x2="140" y2="150" />
          <line x1="200" y1="60" x2="260" y2="150" />
          <line x1="320" y1="60" x2="260" y2="150" />
          <line x1="140" y1="150" x2="200" y2="240" />
          <line x1="260" y1="150" x2="200" y2="240" />
        </g>
        <text x="40" y="285" fill={ink} fillOpacity="0.55" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
          ARCHITECTURE · DESIGN FOR CHANGE
        </text>
      </svg>
    </Frame>
  );
}

export function TokensIllus({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-foreground/70">
        {[
          [40, 60, "#0a0a0a"],
          [90, 60, "#2a2a2a"],
          [140, 60, "#5a5a5a"],
          [190, 60, "#a8a8a8"],
          [240, 60, "#e2e2e2"],
          [290, 60, "#f5f5f5"],
          [340, 60, "var(--gold)"],
        ].map(([x, y, c], i) => (
          <rect key={i} x={x as number} y={y as number} width="40" height="40" rx="4" fill={c as string} stroke={ink} strokeOpacity="0.15" />

        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={40 + i * 50} y={140} width={8 + i * 8} height="8" fill={ink} fillOpacity="0.7" />
        ))}
        {[4, 8, 12, 16, 24].map((r, i) => (
          <rect key={r} x={40 + i * 60} y={200} width="50" height="50" rx={r} fill="none" stroke={ink} strokeOpacity="0.6" strokeWidth="1" />
        ))}
        <text x="40" y="285" fill={ink} fillOpacity="0.55" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
          TOKENS · COLOR · SPACE · RADIUS
        </text>
      </svg>
    </Frame>
  );
}

export function AiLoopIllus({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-foreground/70">
        <circle cx="200" cy="150" r="90" fill="none" stroke={ink} strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="200" cy="150" r="90" fill="none" stroke={gold} strokeWidth="1.5" strokeDasharray="4 6" />
        {["EXPLORE", "DRAFT", "REVIEW", "REFINE", "SHIP"].map((label, i, arr) => {
          const angle = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
          const x = 200 + Math.cos(angle) * 90;
          const y = 150 + Math.sin(angle) * 90;
          return (
            <g key={label}>
              <circle cx={x} cy={y} r="6" fill={ink} />
              <text x={x} y={y - 14} textAnchor="middle" fill={ink} fillOpacity="0.8" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="2">
                {label}
              </text>
            </g>
          );
        })}
        <text x="200" y="155" textAnchor="middle" fill={gold} fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="2">
          JUDGMENT
        </text>
      </svg>
    </Frame>
  );
}

export function AutomotiveIllus({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-foreground/70">
        <rect x="30" y="40" width="340" height="60" fill={ink} fillOpacity="0.08" />
        <rect x="45" y="55" width="180" height="14" fill={ink} fillOpacity="0.85" />
        <rect x="45" y="78" width="120" height="8" fill={ink} fillOpacity="0.4" />
        <rect x="300" y="60" width="60" height="24" fill={gold} />
        <path d="M 60 200 Q 200 130 340 200" fill="none" stroke={ink} strokeWidth="1.5" />
        <circle cx="120" cy="220" r="20" fill="none" stroke={ink} strokeOpacity="0.6" />
        <circle cx="280" cy="220" r="20" fill="none" stroke={ink} strokeOpacity="0.6" />
        <text x="30" y="270" fill={ink} fillOpacity="0.55" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
          HIERARCHY · CONVERSION · ATTENTION
        </text>
      </svg>
    </Frame>
  );
}

export function CodeIllus({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-foreground/70">
        {[
          [40, "20 30 10 25"],
          [60, "40 15 20"],
          [80, "10 45 25 30"],
          [100, "25 20 60"],
          [120, "15 30 20"],
          [140, "30 40 25 15"],
        ].map(([y, widths], i) => (
          <g key={i}>
            <text x="20" y={y as number} fill={ink} fillOpacity="0.4" fontFamily="ui-monospace, monospace" fontSize="10">
              {String(i + 1).padStart(2, "0")}
            </text>
            {(widths as string).split(" ").reduce<number[]>((acc, w) => {
              acc.push((acc[acc.length - 1] ?? 45) + Number(w) + 6);
              return acc;
            }, [45]).slice(0, -1).map((x, j, arr) => (
              <rect
                key={j}
                x={x}
                y={(y as number) - 8}
                width={Number((widths as string).split(" ")[j])}
                height="8"
                fill={j === 1 && i % 2 === 0 ? gold : ink}
                fillOpacity={j === 1 && i % 2 === 0 ? 0.85 : 0.6}
              />
            ))}
          </g>
        ))}
        <rect x="20" y="180" width="360" height="100" rx="6" fill={ink} fillOpacity="0.04" stroke={ink} strokeOpacity="0.15" />
        <rect x="40" y="200" width="80" height="16" fill={ink} fillOpacity="0.85" />
        <rect x="40" y="224" width="200" height="6" fill={ink} fillOpacity="0.35" />
        <rect x="40" y="236" width="160" height="6" fill={ink} fillOpacity="0.35" />
        <rect x="40" y="256" width="60" height="14" fill={gold} />
      </svg>
    </Frame>
  );
}
