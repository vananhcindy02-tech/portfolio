import styles from "../dossier.module.css";

/** The "[ 0X ] ———— Label" rule that opens each numbered section. */
export function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <div data-reveal className={styles.sectionHead}>
      <span className={styles.sectionHeadNum}>{num}</span>
      <span className={styles.sectionHeadRule} />
      <span className={styles.sectionHeadLabel}>{label}</span>
    </div>
  );
}
