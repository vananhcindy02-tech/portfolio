import styles from "./dossier.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerText}>
          © 2026 Pham Thi Van Anh · Dossier v.01
        </span>
        <span className={styles.footerText}>Set in Geist · Singapore</span>
      </div>
    </footer>
  );
}
