import type { RefObject } from "react";
import { useEffect } from "react";

/**
 * Drives the thin gradient progress bar in the header by scaling it
 * horizontally to match scroll depth. Mirrors `_initProgress`.
 */
export function useScrollProgress(barRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p)).toFixed(4)})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [barRef]);
}
