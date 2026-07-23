/* ============================================================
   All copy for the dossier lives here so the section components
   stay purely presentational and data-driven.
   ============================================================ */

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#campaigns", label: "Campaigns" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroStats = [
  { term: "Dossier", value: "01 · 2026" },
  { term: "From", value: "Pham Thi Van Anh" },
  { term: "Role", value: "Founding GTM · BD Lead" },
  { term: "Base", value: "Hanoi · Singapore" },
] as const;

export const marqueeItems = [
  "Sales & Business Development",
  "Partnerships & Go-to-Market",
  "CRM & Sales Tools",
  "Analytics & Data",
  "Digital Marketing",
  "AI Productivity Tools",
] as const;

export type CareerRow = {
  num: string;
  period: string;
  title: string;
  sub: string;
  note: string;
  active?: boolean;
};

export const career: CareerRow[] = [
  {
    num: "i.",
    period: "2019 / 2023",
    title: "Diplomatic Academy of Vietnam",
    sub: "B.A. International Communication & Culture — Top 5% · GPA 3.62/4.0 · IELTS 8.0",
    note: "Learned political and cultural foundations — how to build marketing proposals with depth, vision, and influence through cultural and behavioural understanding.",
  },
  {
    num: "ii.",
    period: "2022 / 2023",
    title: "Dell Technologies APAC",
    sub: "Sales & Digital Marketing — OEM Solutions · Singapore & Vietnam",
    note: "Learned the bridge between enterprise sales and digital marketing — and the cadence of working with global B2B customers.",
  },
  {
    num: "iii.",
    period: "2023 / 2024",
    title: "UNIQLO Manager Candidate",
    sub: "Operations & Team Leadership — 54-person retail floor · Japan & Vietnam",
    note: "Learned corporate discipline — the balance between people management and generating revenue inside a global business.",
  },
  {
    num: "iv.",
    period: "2024 / Present",
    title: "Business Project Management",
    sub: "DarkHorseStocks · ShinobiData · SimpliDeliver · Ferrero",
    note: "Founding GTM on two AI products — Singapore & India. The room where strategy collapses into shipping.",
    active: true,
  },
  {
    num: "v.",
    period: "2025 / 2026",
    title: "ESSEC Business School",
    sub: "Master in Marketing Management and Digital — Singapore & France",
    note: "Building businesses holistically across marketing, operations, logistics, and entrepreneurship, and how they link together.",
  },
  {
    num: "vi.",
    period: "Online",
    title: "University of Pennsylvania",
    sub: "Business & Marketing — Wharton frameworks for brand, pricing, and growth",
    note: "Continuous marketing craft — sharpening the canonical frameworks behind brand strategy, customer value, and pricing.",
  },
];

export type Campaign = {
  year: string;
  tag: string;
  tagAccent?: boolean;
  title: string;
  desc: string;
  briefPdf?: string;
};

/** Judged competition work */
export const competitionWins: Campaign[] = [
  {
    year: "2022",
    tag: "Young Lion · Top 3 / 1,200",
    tagAccent: true,
    title: "AB InBev",
    desc: "Market entry strategy for a global beverage portfolio launching in Vietnam. Built segmentation logic, channel activation playbooks, and retail execution across both modern and traditional trade.",
    briefPdf: "/campaigns/ab-inbev.pdf",
  },
  {
    year: "2022",
    tag: "HTKD · Top 3 / 1,400",
    tagAccent: true,
    title: "MB Bank",
    desc: "Financial services campaign concept. Designed the digital customer journey, engagement architecture, and conversion activation targeting a younger banking demographic.",
    briefPdf: "/campaigns/mb-bank.pdf",
  },
  {
    year: "2022",
    tag: "Web3 Brand Strategy",
    title: "NFT Eazy Empire",
    desc: "Launch positioning for a Web3 collectibles platform. Designed the creator activation framework, tokenomics narrative, and a first 10,000 holder community playbook for early stage Web3 growth.",
    briefPdf: "/campaigns/nft-eazy-empire.pdf",
  },
  {
    year: "2022",
    tag: "Cultural Awareness",
    title: "Violent Communication",
    desc: "Awareness campaign reframing the language of digital conflict by translating Nonviolent Communication theory into culture forward, short form content native to Gen Z platforms.",
    briefPdf: "/campaigns/violent-communication.pdf",
  },
];

/** ESSEC & independent strategic concepts */
export const strategicConcepts: Campaign[] = [
  {
    year: "2026",
    tag: "Luxury Retail · Concept",
    title: "Chanel",
    desc: "Mystery shopping benchmark across Chanel, Dior, and Guerlain, decoding the rituals of luxury service, brand value delivery, and the behavioural signals that turn experience into willingness to pay.",
    briefPdf: "/campaigns/chanel.pdf",
  },
  {
    year: "2026",
    tag: "Editorial Beauty · Concept",
    title: "L'Oréal",
    desc: "Editorial beauty campaign direction. Built the launch storytelling, branded experience planning, and creator partnership architecture for premium category entry in a saturated market.",
    briefPdf: "/campaigns/loreal.pdf",
  },
  {
    year: "2026",
    tag: "Premium Lifestyle · Concept",
    title: "Soirée by Sephora",
    desc: "Nightwear collection launch concept. Designed the moodboard direction, brand narrative, and event architecture for a premium evening ritual targeted at urban Gen Z.",
    briefPdf: "/campaigns/soiree-by-sephora.pdf",
  },
  {
    year: "2026",
    tag: "Brand Vision · Concept",
    title: "Filé",
    desc: "Multi page strategic marketing concept spanning positioning, content rollout, campaign architecture, and brand vision for 2026 launch. Built end to end from brand foundation to go to market roadmap.",
    briefPdf: "/campaigns/file.pdf",
  },
];

/** Legacy combined export — kept for any component that still imports `campaigns` */
export const campaigns: Campaign[] = [...competitionWins, ...strategicConcepts];

export type Award = {
  year: string;
  title: string;
  detail: string;
  result: string;
  resultMuted?: boolean;
};

export const recognition: Award[] = [
  {
    year: "2024",
    title: "Japan Youth Summit — Sustainable Business Idea Summit",
    detail: "Sustainability strategy track",
    result: "Best Delegate",
  },
  {
    year: "2017",
    title: "Kaohsiung International Invention & Design Expo",
    detail: "Taiwan · International field",
    result: "Bronze Medal",
    resultMuted: true,
  },
  {
    year: "2022",
    title: "Vietnam Young Lion — Student Leagues",
    detail: "Most prestigious marketing competition · 1,200 entrants",
    result: "Top 3",
  },
  {
    year: "2022",
    title: "Hanh Trinh Kinh Doanh — Business Case Study",
    detail: "Nationwide · 1,400 entrants",
    result: "Top 3",
  },
  {
    year: "2021",
    title: "International Communications — Diplomatic Academy of Vietnam",
    detail: "MA cohort · 200 students",
    result: "Top 2",
  },
];

export type Capability = { title: string; items: string[] };

export const capabilities: Capability[] = [
  {
    title: "Go-to-Market",
    items: [
      "Zero-to-first-customer playbooks",
      "Outbound pipeline construction",
      "C-suite discovery interviews",
      "BANT qualification frameworks",
      "Pipeline velocity & conversion",
      "Multi-country GTM motions",
    ],
  },
  {
    title: "Product & Partnerships",
    items: [
      "Product-market fit validation",
      "Founding-team operations",
      "Strategic partnership building",
      "Cross-cultural enterprise (Asia ↔ EU)",
      "Pricing & deal structuring",
      "Roadmap-to-revenue coordination",
    ],
  },
  {
    title: "Marketing & AI",
    items: [
      "Brand positioning & narrative",
      "Multi-channel campaign architecture",
      "Analytics, attribution, dashboards",
      "AI workflow design (Claude, GPT, Cursor)",
      "Content systems & editorial direction",
      "Community & subscription growth",
    ],
  },
];

export type ContactLink = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "vananhcindy02@gmail.com",
    href: "mailto:vananhcindy02@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "pham-thi-van-anh ↗",
    href: "https://www.linkedin.com/in/pham-thi-van-anh-072265232/",
    external: true,
  },
  { label: "Phone", value: "+65 8158 6466", href: "tel:+6581586466" },
  { label: "Based", value: "Hanoi · Singapore" },
  { label: "Languages", value: "English · Vietnamese · French (working)" },
];
