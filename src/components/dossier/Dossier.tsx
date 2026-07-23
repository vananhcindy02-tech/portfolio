"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./dossier.module.css";
import { dossierConfig, statusLabel } from "@/lib/config";

import { useReveal } from "@/hooks/useReveal";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useScrollProgress } from "@/hooks/useScrollProgress";

import { BackgroundFX } from "./BackgroundFX";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { Work } from "./Work";
import { About } from "./About";
import { Career } from "./Career";
import { Campaigns } from "./Campaigns";
import { Recognition } from "./Recognition";
import { Capabilities } from "./Capabilities";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Dossier() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Keep the page (and overscroll gutters) in sync with the active theme.
  useEffect(() => {
    document.body.style.background = theme === "light" ? "#f6f6f7" : "#08080a";
  }, [theme]);

  // Imperative animation layer — each hook mirrors one of the original
  // document's init routines, scoped to the dossier root.
  useReveal(rootRef);
  useCursorGlow(glowRef);
  useMagnetic(rootRef);
  useScrollProgress(progressRef);

  return (
    <div
      ref={rootRef}
      className={`dossier-root ${styles.root}`}
      data-theme={theme}
      style={{ "--accent": dossierConfig.accent } as CSSProperties}
    >
      <BackgroundFX showGrid={dossierConfig.showGrid} glowRef={glowRef} />

      <Nav onToggleTheme={toggleTheme} progressRef={progressRef} />

      <main className={styles.main} id="top">
        <Hero statusLabel={statusLabel} />
      </main>

      <Marquee />

      <div className={styles.main}>
        <Work />
        <About />
        <Career />
        <Campaigns />
        <Recognition />
        <Capabilities />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
