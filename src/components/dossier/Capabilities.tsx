import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { SectionIntro } from "./primitives/SectionIntro";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section id="capabilities" className={styles.section}>
      <SectionHeader num="[ 06 ]" label="What I Run" />
      <SectionIntro
        lead="The "
        sheen="operator's surface."
        text="The three domains that compound when I take a product from zero brand to first paying enterprise."
      />

      <div className={styles.capGrid}>
        {capabilities.map((group) => (
          <div key={group.title} data-reveal>
            <h4 className={styles.capTitle}>{group.title}</h4>
            <ul className={styles.capList}>
              {group.items.map((item) => (
                <li key={item} className={styles.capItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
