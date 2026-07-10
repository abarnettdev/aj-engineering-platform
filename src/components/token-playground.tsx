import { useState } from "react";

/**
 * TokenPlayground, live design token controls.
 * Move sliders → the demo card responds in real time.
 * Demonstrates the "token as intent" thesis without leaving the page.
 */
export function TokenPlayground() {
  const [radius, setRadius] = useState(8);
  const [padding, setPadding] = useState(24);
  const [hue, setHue] = useState(78);
  const [density, setDensity] = useState(1);

  const goldish = `oklch(0.52 0.135 ${hue})`;
  const scale = 0.9 + density * 0.15;

  return (
    <div className="grid gap-8 border border-border bg-card p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
      {/* Controls */}
      <div className="space-y-6">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
            Tokens live
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Change a token. Watch the component change. That's the contract.
          </p>
        </div>

        <Control
          label="color.accent.hue"
          value={`${hue}°`}
          min={20}
          max={200}
          step={1}
          v={hue}
          set={setHue}
        />
        <Control
          label="radius.base"
          value={`${radius}px`}
          min={0}
          max={28}
          step={1}
          v={radius}
          set={setRadius}
        />
        <Control
          label="space.pad"
          value={`${padding}px`}
          min={12}
          max={48}
          step={2}
          v={padding}
          set={setPadding}
        />
        <Control
          label="density.scale"
          value={scale.toFixed(2)}
          min={0}
          max={2}
          step={1}
          v={density}
          set={setDensity}
          discrete={["Compact", "Comfortable", "Spacious"]}
        />

        <pre className="mono mt-4 overflow-auto border border-border bg-background p-3 text-[10.5px] leading-relaxed text-muted-foreground">
{`--color-accent: oklch(0.52 0.135 ${hue});
--radius-base: ${radius}px;
--space-pad: ${padding}px;
--density-scale: ${scale.toFixed(2)};`}
        </pre>
      </div>

      {/* Live output */}
      <div
        className="grid place-items-center border border-border bg-background"
        style={{ padding: padding * 1.5 }}
      >
        <div
          className="w-full max-w-sm border border-border bg-card"
          style={{
            borderRadius: radius,
            padding,
            transform: `scale(${scale})`,
            transition: "transform 240ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-8 w-8"
              style={{ background: goldish, borderRadius: radius * 0.5 }}
            />
            <div>
              <p
                className="mono text-[9.5px] uppercase tracking-[0.24em]"
                style={{ color: goldish }}
              >
                Component
              </p>
              <p className="font-display text-base text-ink">Live token demo</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Every visual decision flows through a token. Change one, everything
            downstream inherits it. No coordination meeting required.
          </p>
          <button
            className="mono mt-5 inline-flex items-center gap-2 px-4 py-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background transition-transform hover:scale-[1.02]"
            style={{ background: goldish, borderRadius: radius * 0.6 }}
          >
            Primary action
          </button>
        </div>
      </div>
    </div>
  );
}

function Control({
  label,
  value,
  min,
  max,
  step,
  v,
  set,
  discrete,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  v: number;
  set: (n: number) => void;
  discrete?: string[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink">
          {label}
        </span>
        <span className="mono text-[10.5px] text-gold">
          {discrete ? discrete[v] : value}
        </span>
      </div>
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-2 h-1 w-full cursor-pointer appearance-none bg-border accent-[color:var(--gold)]"
      />
    </div>
  );
}
