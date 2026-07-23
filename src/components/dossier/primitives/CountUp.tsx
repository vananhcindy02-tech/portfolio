"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric stat up from zero the first time it scrolls into view.
 * Mirrors `_initCount`: only values that begin with a digit animate (so
 * "APAC", "SG" or "v1.0" render verbatim), easing out over 1300ms.
 */
export function CountUp({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Keep in sync if the source text changes between renders.
    setDisplay(text);

    if (!/^[\d.]/.test(text.trim()) || typeof IntersectionObserver === "undefined") {
      return;
    }

    const m = text.trim().match(/^([\d.]+)(.*)$/);
    if (!m) return;
    const target = parseFloat(m[1]);
    const suffix = m[2];
    const dec = m[1].indexOf(".") >= 0;

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const dur = 1300;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const e = 1 - Math.pow(1 - p, 3);
            const v = target * e;
            setDisplay((dec ? v.toFixed(1) : Math.round(v).toString()) + suffix);
            if (p < 1) raf = requestAnimationFrame(step);
            else setDisplay(text);
          };
          raf = requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <div ref={ref} data-count className={className}>
      {display}
    </div>
  );
}
