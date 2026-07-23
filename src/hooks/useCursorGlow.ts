import type { RefObject } from "react";
import { useEffect } from "react";

/**
 * A large accent-coloured radial glow that smoothly trails the pointer.
 * Mirrors the original `_initMouse` glow: an eased lerp toward the cursor,
 * driven by requestAnimationFrame. The 520px glow element is offset by -260px
 * so its centre sits under the cursor.
 */
export function useCursorGlow(glowRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: target.x, y: target.y };

    // Seat the glow at the start position immediately to avoid a corner flash.
    glow.style.transform = `translate(${pos.x - 260}px,${pos.y - 260}px)`;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      glow.style.transform = `translate(${pos.x - 260}px,${pos.y - 260}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [glowRef]);
}
