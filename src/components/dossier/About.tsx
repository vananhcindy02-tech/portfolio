import styles from "./dossier.module.css";
import { SectionHeader } from "./primitives/SectionHeader";
import { SectionIntro } from "./primitives/SectionIntro";
import { Soft, U } from "./primitives/Highlights";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeader num="[ 02 ]" label="Operator's Note" />
      <SectionIntro
        lead="I build ideas. "
        sheen="Then I sell them."
        text="Long before the title, the muscle is built from character, curiosity, and the discipline of relationships."
        mb={80}
      />

      <div data-reveal className={styles.aboutProse}>
        <p>
          I started in project management — building marketing strategies for
          brands, running campaigns, shaping launches, turning rough concepts
          into things customers would actually pay for. Each project was a new
          pitch, a new story, a new room to convince.
        </p>
        <p>
          Then one day it clicked: I&apos;d been doing this my entire life, long
          before I had a job title for it. The product kept changing, but the
          muscle was always the same.{" "}
          <Soft>Selling was never the side skill. It was the whole skill.</Soft>
        </p>
        <p>
          At <U>fourteen</U>, I cold-pitched the CEOs of English centres as an
          unknown teenager — with a deck and a story — and turned that pitch into
          a recurring annual free summer camp for 100+ disabled and
          disadvantaged children. At <U>sixteen</U>, I founded the first Model UN
          conference in Vietnam&apos;s mountainous provinces: VND 50 million in
          sponsorship, 100 paying delegates, 10,000+ community in year one. At{" "}
          <U>eighteen</U>, mid-pandemic, I built an IELTS coaching practice that
          served 100+ students — entirely on referrals.
        </p>
        <p>
          Looking back at every project, every pitch, every late night — I
          realised the pattern wasn&apos;t marketing.{" "}
          <Soft>It was building from zero.</Soft>
        </p>
        <p>
          Today, I&apos;m finishing my <U>Master in Management at INSEAD</U>,
          sharpening the same instinct in a global room.
        </p>
        <p className={styles.aboutProseSoft}>
          I&apos;m not just a PM coordinating teams. I take the brand, the
          strategy, the product — and ship until it scales.
        </p>
      </div>
    </section>
  );
}
