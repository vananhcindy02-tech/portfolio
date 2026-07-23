import type { ReactNode } from "react";
import styles from "../dossier.module.css";
import { SplitReveal } from "./SplitReveal";

/**
 * The 5fr/7fr intro block: a large two-tone headline on the left and a
 * supporting paragraph on the right. The bottom margin varies per section.
 */
export function SectionIntro({
  lead,
  sheen,
  text,
  mb = 60,
}: {
  lead: ReactNode;
  sheen: string;
  text: ReactNode;
  mb?: number;
}) {
  return (
    <div data-reveal className={styles.intro} style={{ marginBottom: mb }}>
      <SplitReveal as="h2" className={styles.introTitle}>
        {lead}
        <em>{sheen}</em>
      </SplitReveal>
      <p className={styles.introText}>{text}</p>
    </div>
  );
}
