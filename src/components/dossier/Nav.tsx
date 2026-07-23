import type { RefObject } from "react";
import styles from "./dossier.module.css";
import { navLinks } from "@/lib/content";

export function Nav({
  onToggleTheme,
  progressRef,
}: {
  onToggleTheme: () => void;
  progressRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <header className={styles.header}>
      <div ref={progressRef} id="dossier-progress" className={styles.progress} />
      <div className={styles.navInner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>PVA</span>
          Pham Thi Van Anh
        </a>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={styles.themeBtn}
          >
            <span className="theme-sun">☀</span>
            <span className="theme-moon">☾</span>
          </button>
          <a href="#contact" className={styles.contactBtn}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
