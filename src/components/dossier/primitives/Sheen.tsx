import type { ReactNode } from "react";
import styles from "../dossier.module.css";

/** Animated accent→violet gradient text used in every section headline. */
export function Sheen({ children }: { children: ReactNode }) {
  return <span className={styles.sheen}>{children}</span>;
}
