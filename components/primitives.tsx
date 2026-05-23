"use client";

import * as React from "react";

// =====================================================================
// Shared Sunbites primitives
// =====================================================================

type ButtonVariant = "primary" | "yellow" | "ghost" | "plain";
type ButtonSize = "sm" | "md" | "lg";

interface SbButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function SbButton({
  variant = "primary",
  size = "md",
  children,
  href = "#",
  style: styleProp,
  ...props
}: SbButtonProps) {
  const [pressed, setPressed] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    textDecoration: "none",
    border: "2.5px solid var(--border-strong)",
    borderRadius: 999,
    cursor: "pointer",
    transition:
      "transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 180ms ease",
    whiteSpace: "nowrap",
    lineHeight: 1,
  };
  const sizes: Record<ButtonSize, React.CSSProperties> = {
    sm: { padding: "10px 18px", fontSize: 14 },
    md: { padding: "16px 26px", fontSize: 16 },
    lg: { padding: "20px 34px", fontSize: 18 },
  };
  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: "var(--color-brand)",
      color: "var(--fg-on-brand)",
      boxShadow:
        "5px 5px 0 var(--sb-yellow-300), 5px 5px 0 2.5px var(--sb-ink-900)",
    },
    yellow: {
      background: "var(--color-accent)",
      color: "var(--fg-on-accent)",
      boxShadow: "5px 5px 0 var(--sb-ink-900)",
    },
    ghost: {
      background: "#FFFFFF",
      color: "var(--fg-1)",
      boxShadow: "5px 5px 0 var(--sb-ink-900)",
    },
    plain: {
      background: "transparent",
      color: "var(--fg-1)",
      boxShadow: "none",
    },
  };

  const style: React.CSSProperties = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...styleProp,
  };
  if (variant !== "plain") {
    if (pressed) {
      style.transform = "translate(5px, 5px)";
      style.boxShadow = "0 0 0 var(--sb-ink-900)";
    } else if (hovered) {
      style.transform = "translate(2px, 2px)";
    }
  }

  return (
    <a
      href={href}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...props}
    >
      {children}
    </a>
  );
}

type BadgeColor = "yellow" | "red" | "green" | "cream";

export function SbBadge({
  children,
  color = "yellow",
  icon,
}: {
  children: React.ReactNode;
  color?: BadgeColor;
  icon?: React.ReactNode;
}) {
  const map: Record<BadgeColor, { bg: string; fg: string }> = {
    yellow: { bg: "var(--sb-yellow-300)", fg: "var(--sb-ink-900)" },
    red: { bg: "var(--sb-red-500)", fg: "#fff" },
    green: { bg: "var(--sb-green-400)", fg: "#fff" },
    cream: { bg: "var(--sb-cream-200)", fg: "var(--sb-ink-900)" },
  };
  const c = map[color];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        borderRadius: 999,
        background: c.bg,
        color: c.fg,
        border: "2px solid var(--border-strong)",
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
      }}
    >
      {icon}
      {children}
    </span>
  );
}

export function SbEyebrow({
  children,
  color = "var(--color-brand)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

export function SbHighlight({
  children,
  color = "var(--sb-yellow-300)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        background: color,
        padding: "0 0.18em 0.06em",
        borderRadius: 8,
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
        display: "inline",
      }}
    >
      {children}
    </span>
  );
}

export function SbNoise({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity,
        mixBlendMode: "multiply",
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>")`,
      }}
    />
  );
}

export function SbHeart({
  size = 24,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style}>
      <path
        d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10z"
        fill="var(--sb-red-500)"
        stroke="var(--sb-ink-900)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function CheckIcon({ size = 11 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
