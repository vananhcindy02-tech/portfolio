import type { RefObject } from "react";
import { useEffect } from "react";

/**
 * Magnetic buttons: every [data-magnetic] descendant is gently pulled toward
 * the cursor while hovered, then springs back on leave. Mirrors `_initMagnetic`.
 */
export function useMagnetic(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const btns = Array.from(
      root.querySelectorAll<HTMLElement>("[data-magnetic]")
    );
    const cleanups: Array<() => void> = [];

    btns.forEach((btn) => {
      btn.style.transition = "transform .25s cubic-bezier(.2,.7,.2,1)";
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${(dx * 0.3).toFixed(1)}px,${(
          dy * 0.45
        ).toFixed(1)}px)`;
      };
      const reset = () => {
        btn.style.transform = "translate(0,0)";
      };
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", reset);
      cleanups.push(() => {
        btn.removeEventListener("mousemove", move);
        btn.removeEventListener("mouseleave", reset);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [rootRef]);
}
