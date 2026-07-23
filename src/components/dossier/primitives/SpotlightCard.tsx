"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import styles from "../dossier.module.css";

/**
 * Interactive card surface shared by the Work and Campaign grids. It provides:
 *  - a radial "spotlight" that follows the cursor (driven via CSS vars on the
 *    element's ::before, see `.spotlightHost` in the stylesheet), and
 *  - a subtle 3D tilt toward the cursor.
 *
 * This mirrors the per-card behaviour of the original `_initMouse`, but stays
 * inside React rather than mutating the DOM imperatively.
 */
export function SpotlightCard({
  className,
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  const onEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--spot", "1");
    el.style.transition =
      "transform .15s ease, border-color .5s ease, background-color .5s ease";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--spot", "0");
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--sx", `${px * 100}%`);
    el.style.setProperty("--sy", `${py * 100}%`);
    el.style.transform = `perspective(1000px) rotateX(${((0.5 - py) * 6).toFixed(
      2
    )}deg) rotateY(${((px - 0.5) * 6).toFixed(2)}deg)`;
  };

  return (
    <article
      ref={ref}
      data-reveal
      data-spotlight
      className={`${styles.spotlightHost} ${className ?? ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      {...rest}
    >
      {children}
    </article>
  );
}
