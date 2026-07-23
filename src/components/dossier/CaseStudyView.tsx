"use client";

import { useRef, useState, useEffect } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import styles from "./dossier.module.css";
import { dossierConfig } from "@/lib/config";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import type { ProjectData } from "@/lib/projects";

const statusLabels: Record<ProjectData["status"], string> = {
  in_development: "In Development",
  shipped: "Shipped",
  archived: "Archived",
};

export function CaseStudyView({ project }: { project: ProjectData }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.background = theme === "light" ? "#f6f6f7" : "#08080a";
  }, [theme]);

  useScrollProgress(progressRef);

  return (
    <div
      className={`dossier-root ${styles.root}`}
      data-theme={theme}
      style={{ "--accent": dossierConfig.accent } as CSSProperties}
    >
      <Nav
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        progressRef={progressRef}
      />

      <main className={styles.main}>
        <article className={styles.csPage}>
          <Link
            href={`/?project=${project.slug}#work`}
            className={styles.csBackLink}
          >
            &larr; Back to work
          </Link>

          <div className={styles.csPageEyebrow}>
            <span className={styles.csPageEyebrowDot} />
            {project.eyebrow}
          </div>

          <div className={styles.csPageStatusRow}>
            <span
              className={`${styles.wpPill} ${
                project.status === "shipped" ? styles.wpPillShipped : ""
              }`}
            >
              {statusLabels[project.status]}
            </span>
            <span className={styles.wpStatusMeta}>
              {project.year} &middot; {project.role}
            </span>
          </div>

          <h1 className={styles.csPageTitle}>{project.name}</h1>
          <p className={styles.csPageTagline}>{project.tagline}</p>

          {project.liveLink && (
            <a
              href={project.liveLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.csPageLiveLink}
            >
              <span>{project.liveLink.label}</span>
              <span>&nearr;</span>
            </a>
          )}

          <section className={styles.csPageSection}>
            <h2 className={styles.csPageSectionLabel}>Summary</h2>
            <p className={styles.csPageProse}>{project.summary}</p>
          </section>

          <section className={styles.csPageSection}>
            <h2 className={styles.csPageSectionLabel}>Target user</h2>
            <p className={styles.csPageProse}>{project.targetUser}</p>
          </section>

          {project.skills.length > 0 && (
            <div className={styles.wpChipGroup}>
              <span className={styles.wpChipLabel}>Skills</span>
              <div className={styles.wpChips}>
                {project.skills.map((s) => (
                  <span key={s} className={styles.wpChip}>{s}</span>
                ))}
              </div>
            </div>
          )}

          {project.tools.length > 0 && (
            <div className={styles.wpChipGroup}>
              <span className={styles.wpChipLabel}>Tools</span>
              <div className={styles.wpChips}>
                {project.tools.map((t) => (
                  <span key={t} className={styles.wpChip}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {project.scope.length > 0 && (
            <section className={styles.csPageSection}>
              <h2 className={styles.csPageSectionLabel}>Scope of ownership</h2>
              <ol className={styles.csPageList}>
                {project.scope.map((item) => (
                  <li key={item.num} className={styles.csPageListItem}>
                    <div className={styles.csPageListNum}>{item.num}</div>
                    <h3 className={styles.csPageListTitle}>{item.title}</h3>
                    <p className={styles.csPageListBody}>{item.body}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {project.hardestProblems.length > 0 && (
            <section className={styles.csPageSection}>
              <h2 className={styles.csPageSectionLabel}>Hardest problems</h2>
              <ol className={styles.csPageList}>
                {project.hardestProblems.map((item) => (
                  <li key={item.num} className={styles.csPageListItem}>
                    <div className={styles.csPageListNum}>{item.num}</div>
                    <h3 className={styles.csPageListTitle}>{item.title}</h3>
                    <p className={styles.csPageListBody}>{item.body}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
