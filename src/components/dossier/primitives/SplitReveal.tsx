"use client";

import type { ElementType, ReactNode } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Cuberto-style headline reveal: the text is split into words that rise and
 * fade in with a stagger the first time the element scrolls into view. Powered
 * by split-type + GSAP ScrollTrigger.
 *
 * We split by words only (not lines): line-splitting re-parents words into line
 * wrappers, which would pull the gradient <Sheen> words out of their
 * background-clipped container and break the gradient. Words-only keeps every
 * word inside its original element, so gradients survive untouched.
 *
 * Falls back to plain, fully-visible text when JS is off or the user prefers
 * reduced motion. Re-measures on web-font load so the trigger stays accurate.
 */
export function SplitReveal({
  as,
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    // Hide pre-paint so the un-split text never flashes before the reveal.
    el.style.visibility = "hidden";

    let split: SplitType | undefined;
    let tween: gsap.core.Tween | undefined;

    const ctx = gsap.context(() => {
      try {
        split = new SplitType(el, { types: "words", tagName: "span" });

        el.style.visibility = "visible";

        if (split.words && split.words.length) {
          tween = gsap.from(split.words, {
            yPercent: 120,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.055,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        }
      } catch {
        // Never leave the headline stuck hidden if splitting fails.
        el.style.visibility = "visible";
      }
    }, el);

    // Web fonts change line wrapping; refresh so the masks line up.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      tween?.scrollTrigger?.kill();
      ctx.revert();
      split?.revert();
      if (ref.current) ref.current.style.visibility = "";
    };
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
