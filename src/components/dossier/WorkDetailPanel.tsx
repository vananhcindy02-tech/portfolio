"use client";

import Link from "next/link";
import styles from "./dossier.module.css";
import type { ProjectData } from "@/lib/projects";

const statusLabels: Record<ProjectData["status"], string> = {
  in_development: "In Development",
  shipped: "Shipped",
  archived: "Archived",
};

export function WorkDetailPanel({ project }: { project: ProjectData }) {
  return (
    <div key={project.slug} className={styles.wpDetail}>
      <div className={styles.wpStatusRow}>
        <span
          className={`${styles.wpPill} ${
            project.status === "shipped" ? styles.wpPillShipped : ""
          }`}
        >
          {statusLabels[project.status]}
        </span>
        <span className={styles.wpStatusMeta}>
          {project.year}
          {project.completionPercent != null &&
            ` / ${project.completionPercent}%`}
        </span>
      </div>

      <h2 className={styles.wpTitle}>{project.name}</h2>
      <p className={styles.wpShortDesc}>{project.fullDescription}</p>

      {project.skills.length > 0 && (
        <div className={styles.wpChipGroup}>
          <span className={styles.wpChipLabel}>Skills</span>
          <div className={styles.wpChips}>
            {project.skills.map((s) => (
              <span key={s} className={styles.wpChip}>
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.tools.length > 0 && (
        <div className={styles.wpChipGroup}>
          <span className={styles.wpChipLabel}>Tools</span>
          <div className={styles.wpChips}>
            {project.tools.map((t) => (
              <span key={t} className={styles.wpChip}>
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={styles.wpLinks}>
        <Link href={`/work/${project.slug}`} className={styles.wpLink}>
          Read case study &rarr;
        </Link>
        {project.links.website && (
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.wpLink}
          >
            Website &nearr;
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.wpLink}
          >
            GitHub &nearr;
          </a>
        )}
      </div>
    </div>
  );
}
