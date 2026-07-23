import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { SectionIntro } from "./primitives/SectionIntro";
import { career } from "@/lib/content";

export function Career() {
  return (
    <section id="career" className={styles.section}>
      <SectionHeader num="[ 03 ]" label="Career, in six chapters" />
      <SectionIntro
        lead="Six rooms. "
        sheen="One operator."
        text="Diplomacy, enterprise tech, retail discipline, founding-team execution, and continuous marketing craft. Each room taught a different way to read the same problem."
      />

      <div>
        {career.map((row) => (
          <div key={row.num} data-reveal className={styles.careerRow}>
            <div
              className={`${styles.careerNum} ${row.active ? styles.careerNumActive : ""
                }`}
            >
              {row.num}
            </div>
            <div className={styles.careerPeriod}>{row.period}</div>
            <div>
              <h3 className={styles.careerTitle}>{row.title}</h3>
              <p className={styles.careerSub}>{row.sub}</p>
            </div>
            <div className={styles.careerNote}>{row.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
