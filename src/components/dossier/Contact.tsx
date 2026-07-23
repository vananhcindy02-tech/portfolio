import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { Sheen } from "./primitives/Sheen";
import { SplitReveal } from "./primitives/SplitReveal";
import { EmW } from "./primitives/Highlights";
import { contactLinks } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className={styles.sectionContact}>
      <SectionHeader num="[ 07 ]" label="End of Dossier" />

      <div className={styles.contactGrid}>
        <div data-reveal>
        <h2 className={styles.contactThesis}>
  Tell me what <em>you&apos;re building.</em>
</h2>
        </div>

        <div data-reveal className={styles.contactList}>
          {contactLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={styles.contactItem}
              >
                <span className={styles.contactItemLabel}>{link.label}</span>
                <span className={styles.contactItemValue}>{link.value}</span>
              </a>
            ) : (
              <div key={link.label} className={styles.contactItem}>
                <span className={styles.contactItemLabel}>{link.label}</span>
                <span className={styles.contactItemValue}>{link.value}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
