"use client";

import { useEffect } from "react";
import styles from "./dossier.module.css";
import { WorkDetailPanel } from "./WorkDetailPanel";
import type { ProjectData } from "@/lib/projects";

export function WorkMobileOverlay({
  project,
  onClose,
}: {
  project: ProjectData | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [project, onClose]);

  return (
    <div
      className={`${styles.wpOverlay} ${project ? styles.wpOverlayOpen : ""}`}
      role="dialog"
      aria-modal={project ? "true" : undefined}
      aria-label={project ? `${project.name} details` : undefined}
      aria-hidden={!project}
    >
      <button
        type="button"
        className={styles.wpOverlayClose}
        onClick={onClose}
        aria-label="Close panel"
      >
        &times;
      </button>
      {project && (
        <div className={styles.wpOverlayBody}>
          <WorkDetailPanel project={project} />
        </div>
      )}
    </div>
  );
}
