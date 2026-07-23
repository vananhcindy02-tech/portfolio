import type { RefObject } from "react";
import styles from "./dossier.module.css";

/**
 * Fixed background layers: the optional dot-grid and two slowly drifting
 * gradient blobs, plus the cursor-trailing glow (positioned via its ref).
 */
export function BackgroundFX({
  showGrid,
  glowRef,
}: {
  showGrid: boolean;
  glowRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <div ref={glowRef} aria-hidden className={styles.glow} />
      {showGrid && <div aria-hidden className={styles.grid} />}
      <div aria-hidden className={styles.blob1} />
      <div aria-hidden className={styles.blob2} />
    </>
  );
}
