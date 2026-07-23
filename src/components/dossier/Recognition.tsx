import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { SectionIntro } from "./primitives/SectionIntro";
import { recognition } from "@/lib/content";

export function Recognition() {
  return (
    <section id="recognition" className={styles.section}>
      <SectionHeader num="[ 05 ]" label="Recognition" />
      <SectionIntro
        lead="A few "
        sheen="commendations."
        text="Selected from a decade of competitions, summits, and academic distinctions across Vietnam, Taiwan, Japan, and France."
      />

      <div>
        {recognition.map((award) => (
          <div key={award.title} data-reveal className={styles.recogRow}>
            <span className={styles.recogYear}>{award.year}</span>
            <span className={styles.recogTitle}>{award.title}</span>
            <span className={styles.recogDetail}>{award.detail}</span>
            <span
              className={`${styles.recogResult} ${
                award.resultMuted ? styles.recogResultMuted : ""
              }`}
            >
              {award.result}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
