import styles from "./dossier.module.css";
import { SpotlightCard } from "./primitives/SpotlightCard";
import type { Campaign } from "@/lib/content";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <SpotlightCard className={styles.campaignCard}>
      <div className={styles.campaignTop}>
        <span className={styles.campaignYear}>{campaign.year}</span>
        <span
          className={`${styles.campaignTag} ${
            campaign.tagAccent ? styles.campaignTagAccent : ""
          }`}
        >
          {campaign.tag}
        </span>
      </div>
      <h3 className={styles.campaignTitle}>{campaign.title}</h3>
      <p className={styles.campaignDesc}>{campaign.desc}</p>
      {campaign.briefPdf ? (
        <a
          href={campaign.briefPdf}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.campaignCta}
        >
          Read brief &rarr;
        </a>
      ) : (
        <span className={`${styles.campaignCta} ${styles.campaignCtaDisabled}`}>
          Read brief &rarr;
        </span>
      )}
    </SpotlightCard>
  );
}
