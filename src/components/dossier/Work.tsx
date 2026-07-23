"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { SectionIntro } from "./primitives/SectionIntro";
import { WorkProjectList } from "./WorkProjectList";
import { WorkDetailPanel } from "./WorkDetailPanel";
import { WorkMobileOverlay } from "./WorkMobileOverlay";
import { projects } from "@/lib/projects";

function WorkInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramSlug = searchParams.get("project");
  const initialSlug =
    projects.find((p) => p.slug === paramSlug)?.slug ?? projects[0].slug;

  const [activeSlug, setActiveSlug] = useState(initialSlug);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (paramSlug && projects.some((p) => p.slug === paramSlug)) {
      setActiveSlug(paramSlug);
    }
  }, [paramSlug]);

  const updateUrl = useCallback(
    (slug: string) => {
      const url = new URL(window.location.href);
      url.searchParams.set("project", slug);
      router.replace(url.pathname + url.search, { scroll: false });
    },
    [router],
  );

  const handleSelect = useCallback(
    (slug: string) => {
      setActiveSlug(slug);
      updateUrl(slug);
      if (window.innerWidth < 768) {
        setMobileOpen(true);
      }
    },
    [updateUrl],
  );

  const handleHover = useCallback(
    (slug: string) => {
      setActiveSlug(slug);
      updateUrl(slug);
    },
    [updateUrl],
  );

  const handleClose = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const active = projects.find((p) => p.slug === activeSlug) ?? projects[0];

  return (
    <>
      <div className={styles.wpSplit}>
        <WorkProjectList
          projects={projects}
          activeSlug={activeSlug}
          onSelect={handleSelect}
          onHover={handleHover}
        />
        <div className={styles.wpRight}>
          <WorkDetailPanel project={active} />
        </div>
      </div>
      <WorkMobileOverlay
        project={mobileOpen ? active : null}
        onClose={handleClose}
      />
    </>
  );
}

export function Work() {
  return (
    <section id="work" className={styles.sectionWork}>
      <SectionHeader num="[ 01 ]" label="Business Project Management" />
      <SectionIntro
        lead="From building ideas "
        sheen="to shipping."
        text="Founding GTM. Growth scaling. Brand repositioning. Four projects where I owned the strategy, the execution, or both."
        mb={64}
      />
      <Suspense>
        <WorkInner />
      </Suspense>
    </section>
  );
}
