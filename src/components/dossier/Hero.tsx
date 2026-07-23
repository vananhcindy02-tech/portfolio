import { useState, useEffect } from "react";
import styles from "./dossier.module.css";
import { Sheen } from "./primitives/Sheen";
import { SplitReveal } from "./primitives/SplitReveal";
import { EmW } from "./primitives/Highlights";
import { heroStats } from "@/lib/content";

export function Hero({ statusLabel }: { statusLabel: string }) {
  const roles = [
    { text: "Founding GTM", color: "#8FA37F" },
    { text: "Marketing Project Manager", color: "#7F9BA3" },
    { text: "Business Development", color: "#A38B7F" },
  ];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % roles.length);
        setVisible(true);
      }, 500);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className={styles.hero}>
      <div data-reveal className={styles.badge}>
        <span className={styles.badgeDot} />
        <span className={styles.badgeText}>{statusLabel}</span>
      </div>

      <h1 className={styles.heroThesis}>
        <em style={{
          display: "inline-block",
          color: roles[index].color,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease",
          fontStyle: "italic",
        }}>
          {roles[index].text}
        </em>
      </h1>

      <p className={styles.heroSub}>
        I take AI-native products from <strong>zero brand to first paying enterprises.</strong>
      </p>

      <div data-reveal className={styles.ctaRow}>
        <a href="#work" data-magnetic className={styles.btnPrimary}>
          See the work <span className={styles.btnArrow}>→</span>
        </a>
      </div>

      <dl data-reveal className={styles.heroStats}>
        {heroStats.map((stat) => (
          <div key={stat.term}>
            <dt className={styles.heroStatTerm}>{stat.term}</dt>
            <dd className={styles.heroStatDef}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
