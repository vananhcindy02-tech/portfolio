import styles from "./dossier.module.css";
import { marqueeItems } from "@/lib/content";

function MarqueeGroup() {
  return (
    <span className={styles.marqueeGroup}>
      {marqueeItems.map((item) => (
        <span key={item} style={{ display: "contents" }}>
          <span className={styles.marqueeItem}>{item}</span>
          <span className={styles.marqueeSlash}>/</span>
        </span>
      ))}
    </span>
  );
}

/** Infinitely scrolling band of disciplines. Two identical groups loop. */
export function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
