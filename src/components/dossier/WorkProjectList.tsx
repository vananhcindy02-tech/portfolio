"use client";

import styles from "./dossier.module.css";
import type { ProjectData } from "@/lib/projects";

export function WorkProjectList({
  projects,
  activeSlug,
  onSelect,
  onHover,
}: {
  projects: ProjectData[];
  activeSlug: string;
  onSelect: (slug: string) => void;
  onHover: (slug: string) => void;
}) {
  return (
    <nav className={styles.wpList} aria-label="Project list">
      {projects.map((p) => {
        const active = p.slug === activeSlug;
        return (
          <button
            key={p.slug}
            type="button"
            className={`${styles.wpRow} ${active ? styles.wpRowActive : ""}`}
            onClick={() => onSelect(p.slug)}
            onMouseEnter={() => onHover(p.slug)}
            aria-current={active ? "true" : undefined}
          >
            <span className={styles.wpRowIndex}>{p.index}</span>
            <div className={styles.wpRowBody}>
              <span className={styles.wpRowName}>{p.name}</span>
              <span className={styles.wpRowDesc}>{p.shortDescription}</span>
              <span className={styles.wpRowMeta}>
                {p.year} &middot; {p.role}
              </span>
            </div>
            <span className={styles.wpRowArrow}>&rarr;</span>
          </button>
        );
      })}
    </nav>
  );
}
