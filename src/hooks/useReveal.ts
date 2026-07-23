import type { RefObject } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/**
 * Scroll-reveal: every [data-reveal] descendant starts hidden and fades /
 * slides up as it enters the viewport. Mirrors the original `_initReveal`,
 * including the timed safety retries that catch late layout settling.
 *
 * The initial hidden state is applied in a layout effect (not in CSS), so the
 * page degrades gracefully to fully-visible content when JS never runs.
 */
export function useReveal(rootRef: RefObject<HTMLElement | null>) {
  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const revealed = new WeakSet<HTMLElement>();

    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
      el.style.transition =
        "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)";
      el.style.willChange = "opacity, transform";
    });

    const reveal = (el: HTMLElement) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        if (revealed.has(el)) return;
        const r = el.getBoundingClientRect();
        if (r.height === 0 && r.top === 0) return; // not laid out / hidden yet
        if (r.top < vh * 0.92 && r.bottom > 0) reveal(el);
      });
    };

    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io?.observe(el));
    }

    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);

    // Safety retries: catch the moment layout settles so above-the-fold
    // content can never stay invisible if the observer misses it.
    const timers = [120, 400, 900, 1600, 2600].map((t) =>
      window.setTimeout(revealInView, t)
    );

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", revealInView);
      window.removeEventListener("resize", revealInView);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [rootRef]);
}
