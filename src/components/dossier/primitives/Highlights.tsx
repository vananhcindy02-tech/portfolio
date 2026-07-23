import type { ReactNode } from "react";

/**
 * Inline text-emphasis primitives used throughout the dossier's prose.
 * They map 1:1 to the original inline-styled emphasis spans.
 */

/** Strong emphasis — lifts text to the primary foreground colour. */
export function Em({ children }: { children: ReactNode }) {
  return <span style={{ color: "var(--text)" }}>{children}</span>;
}

/** Strong emphasis with medium weight (used in lead paragraphs). */
export function EmW({ children }: { children: ReactNode }) {
  return <span style={{ color: "var(--text)", fontWeight: 500 }}>{children}</span>;
}

/** Underlined key term. */
export function U({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        color: "var(--text)",
        borderBottom: "1px solid var(--underline)",
      }}
    >
      {children}
    </span>
  );
}

/** Softened / muted aside text. */
export function Soft({ children }: { children: ReactNode }) {
  return <span style={{ color: "var(--muted-2)" }}>{children}</span>;
}
