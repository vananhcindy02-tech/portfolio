import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { SectionIntro } from "./primitives/SectionIntro";
import { CampaignCard } from "./CampaignCard";
import { campaigns } from "@/lib/content";

export function Campaigns() {
  return (
    <section id="campaigns" className={styles.section}>
      <SectionHeader num="[ 04 ]" label="Marketing Project Proposals" />
      <SectionIntro
        lead="Brand, market, "
        sheen="and positioning."
        text="Strategic concepts spanning luxury retail, beauty editorial, FMCG entry, financial services, Web3, and cultural awareness — each selected for the depth of the playbook, not the logo on the cover."
      />
      <div className={styles.campaignGrid}>
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.title} campaign={campaign} />
        ))}
      </div>
    </section>
  );
}
