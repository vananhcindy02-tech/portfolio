import styles from "./dossier.module.css";
import type { ProjectStat } from "@/lib/projects";

export function ProjectStats({ stats }: { stats: ProjectStat[] }) {
  if (stats.length === 0) return null;
  return (
    <div className={styles.csPageStats}>
      {stats.map((s) => (
        <div key={s.label} className={styles.csPageStat}>
          <span className={styles.csPageStatValue}>{s.value}</span>
          <span className={styles.csPageStatLabel}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
