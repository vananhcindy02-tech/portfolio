export type ProjectStatus = "in_development" | "shipped" | "archived";

export type ProjectStat = { value: string; label: string };

export type ScopeItem = { num: string; title: string; body: string };

export type ProjectData = {
  slug: string;
  index: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  role: string;
  status: ProjectStatus;
  completionPercent?: number;
  eyebrow: string;
  tagline: string;
  liveLink?: { label: string; href: string };
  summary: string;
  targetUser: string;
  scope: ScopeItem[];
  hardestProblems: ScopeItem[];
  skills: string[];
  tools: string[];
  techStack: string[];
  achievementsShort: string[];
  achievementsFull: string[];
  stats: ProjectStat[];
  screenshot: string;
  links: {
    github?: string;
    npm?: string;
    website?: string;
  };
};

export const projects: ProjectData[] = [
  {
    slug: "simplideliver",
    index: "01",
    name: "SimpliDeliver",
    shortDescription:
      "Six channels, one inbox. Talk to every customer from one screen.",
    fullDescription:
      "Multi-channel CRM unifying WhatsApp, Zalo, Facebook, Instagram, Shopee, and TikTok in a single workspace. Official Meta Business Partner, SOC 2 compliant, 99.9% uptime. Took the product from zero brand recognition to 8 paying B2B enterprises in the first 3 months after 30 founder-level discovery interviews across Vietnam, India, and Malaysia.",
    year: "2026",
    role: "Founding BD & GTM Lead",
    status: "shipped",
    eyebrow:
      "Early-stage · 2025–2026 · Founding GTM & Business Strategy · Live with paying customers",
    tagline:
      "Took a five-channel CRM and customer-messaging platform from market validation to its first paying customers, owning discovery, positioning, the sales motion, and the bridge between customer briefs and the engineering team.",
    liveLink: { label: "Visit live website", href: "https://simplideliver.com" },
    summary:
      "Joined SimpliDeliver pre-revenue to validate the market and build the go-to-market motion for a multi-channel inbox covering WhatsApp Cloud, WhatsApp Personal, Zalo, Messenger, and Instagram DM, with native in-chat payments, a visual chatbot builder, and Shopee and Shopify connectors. Ran 30 SMB discovery interviews across India, Vietnam, and Malaysia to pressure-test the product hypothesis, then shaped feature prioritization with the founder based on what surfaced. Drove the outbound sales motion through demo-stage and closed the first paying cohort while the product was still in beta. The product now sits at 8 paying customers with an average ACV of around $1,000, and channel strategy is scaling into a structured distribution plan.",
    targetUser:
      "SMBs and creators across India, Vietnam, and Malaysia working in education, cosmetics, FMCG, and Shopee-first ecommerce. These are operators who have outgrown personal WhatsApp or Zalo, need a multi-channel inbox with CRM and in-chat payments, and cannot justify the price of WATI, AiSensy, or Gallabox.",
    scope: [
      { num: "01", title: "Market validation and customer discovery", body: "Designed and ran the discovery program across 30 SMBs in India, Vietnam, and Malaysia, spanning education, cosmetics, FMCG, and Shopee sellers. Translated the interview signal into a prioritized problem map that became the input for product strategy, separating must-have channel coverage (WhatsApp and Zalo) from differentiators (in-chat payments, Shopee connector) and from deferred scope." },
      { num: "02", title: "Product strategy contribution", body: "Partnered with the founder on feature prioritization based on the validation data. Surfaced which channels actually mattered per market, with WhatsApp leading in India and Malaysia and Zalo leading in Vietnam. Mapped which payment flows were dealbreakers for ecommerce sellers, and identified the CRM surfaces buyers compared against incumbents during evaluation." },
      { num: "03", title: "Positioning and brand identity", body: "Built the brand identity, the value proposition hierarchy, and the public surface including messaging, pitch deck, and demo script. Anchored the product as a regional-first, payments-native alternative to WATI and AiSensy rather than positioning it as a feature-parity competitor." },
      { num: "04", title: "Outbound sales and lead generation", body: "Owned the outbound motion end-to-end, from ICP filtering on LinkedIn Sales Navigator through contact enrichment, multi-touch sequencing across LinkedIn and email, and qualification into demo calls. Sourced and ran the pipeline that produced the first paying cohort." },
      { num: "05", title: "Demo-stage conversion", body: "Closed paying customers while the product was still in demo. Ran live pitching sessions, handled objections on feature gaps, structured pilot agreements that converted into paid contracts, and walked early customers through onboarding personally." },
      { num: "06", title: "Business analyst and dev bridge", body: "Acted as the translation layer between customer requirements and the engineering team. Converted business briefs from paying customers into structured specs, prioritized incoming requests against the roadmap, and fed real usage signal back into product decisions so the build stayed aligned with what buyers actually paid for." },
      { num: "07", title: "Pricing strategy", body: "Owned the pricing structure for the early-stage motion. Landed on an average ACV of around $1,000 across the first cohort, calibrated against incumbent pricing while accounting for the SMB segment's willingness to pay across three different markets." },
      { num: "08", title: "Distribution channel strategy", body: "Currently architecting the channel mix for the next stage of growth, moving the motion beyond founder-led outbound into a structured, partner-leveraged distribution model." },
    ],
    hardestProblems: [
      { num: "P01", title: "Validating a multi-market, multi-vertical product without diluting the discovery signal.", body: "30 interviews across 3 countries and 4 verticals risked producing 30 different product directions. The solution was to structure the interview script around channel behavior and payment friction rather than feature wishlists. That approach surfaced a shared core (a WhatsApp and Zalo inbox, in-chat payments, and light CRM) underneath the surface-level vertical differences, which let the founder build one product that worked across all four segments instead of four separate products." },
      { num: "P02", title: "Closing paying customers on a product still in beta.", body: "Buyers wanted production stability, but the product had feature gaps. The solution was to structure early deals as pilot contracts with explicit scope and timelines, anchor the conversation on the channels and payment flows that were already production-ready, and convert customer feature requests into prioritized roadmap items the dev team shipped against. Demo-stage trust became the wedge that closed the cohort." },
      { num: "P03", title: "Running BA, sales, and GTM simultaneously on a small team.", body: "Owning customer-facing sales while also translating briefs to engineering created a constant context-switching tax. The solution was to template the BA workflow so every customer brief went through the same structured intake and every spec used the same format for dev. The translation step then took minutes instead of hours, and the sales motion didn't slow when implementation work picked up." },
    ],
    skills: ["Founding BD", "Customer Discovery", "B2B Sales", "Product Strategy", "Brand Positioning"],
    tools: ["WhatsApp Cloud API", "Zalo API", "Meta Business Suite", "Shopee Connector", "TikTok Shop API", "LinkedIn Sales Navigator"],
    techStack: [],
    stats: [
      { value: "8", label: "PAYING B2B CUSTOMERS" },
      { value: "30", label: "DISCOVERY INTERVIEWS" },
      { value: "6", label: "CHANNELS UNIFIED" },
    ],
    achievementsShort: [
      "8 paying B2B enterprises in first 3 months",
      "30 founder-level discovery calls across 3 countries",
      "Official Meta Business Partner, SOC 2, 99.9% uptime",
      "Closed paying customers while product was still in beta",
    ],
    achievementsFull: [
      "Multi-channel CRM unifying WhatsApp, Zalo, Facebook, Instagram, Shopee, TikTok",
      "Official Meta Business Partner, SOC 2 compliant, 99.9% uptime",
      "8 paying B2B enterprises in first 3 months",
      "30 founder-level discovery interviews across Vietnam, India, Malaysia",
    ],
    screenshot: "/screenshots/simplideliver.png",
    links: { website: "https://simplideliver.com" },
  },
  {
    slug: "ferrero",
    index: "02",
    name: "Ferrero",
    shortDescription: "Rebuilding TicTac branding for Asia-Pacific.",
    fullDescription:
      "Five-month consultancy on TicTac's APAC repositioning. Led the strategic foundation across four workstreams: consumer and sales data analysis, competitor benchmarking and SWOT across FMCG confectionery, functional and emotional brand insight development, and a customer engagement playbook combining digital touchpoints with experiential campaigns. Output: 63-slide strategy deck and a 16-month activation calendar driving the 2026 to 2027 launch in Singapore.",
    year: "2025",
    role: "Strategic Marketing Consultant",
    status: "shipped",
    eyebrow: "Consulting · Dec 2025 – May 2026 · Strategic Marketing Consultant",
    tagline:
      "Five-month consultancy on TicTac's APAC repositioning, with the first regional campaign launching in Singapore.",
    summary:
      "Led the strategic foundation for TicTac's APAC repositioning across four workstreams: consumer and sales data analysis, competitor benchmarking and SWOT across FMCG confectionery, functional and emotional brand insight development, and a customer engagement playbook combining digital touchpoints with experiential campaigns. The output was a 63-slide strategy deck and a 16-month activation calendar driving the 2026 to 2027 launch in Singapore.",
    targetUser:
      "Singapore Gen Z aged 18 to 30, with 56% consuming mints daily or several times a week. The segment is shifting from nostalgia-led candy mints toward functional freshness and shareable social rituals, leaving TicTac's heritage positioning disconnected from current category drivers.",
    scope: [
      { num: "01", title: "Mixed-methods consumer research", body: "Ran a triangulated study combining 82 surveys, 16 semi-structured interviews, and social listening across TikTok, Reddit, Instagram, and X (58,500 estimated impressions), applying the Evidence, Insight, Action, Result framework to translate raw signal into strategic direction." },
      { num: "02", title: "Competitor benchmarking and SWOT", body: "Mapped TicTac against Mentos and Eclipse across seven dimensions (Censydiam territory, retail presence, flavor range, pricing, consumer perception, usage moment, current strength), surfacing TicTac's core tension between strong heritage and weaker functional credibility." },
      { num: "03", title: "Brand insight and positioning", body: "Surfaced four strategic insights including \"The Intensity Gap\" and translated them into \"The Playful Ritual\" concept, anchoring TicTac as the confidence ritual that turns ordinary social moments into joyful sharing." },
      { num: "04", title: "360-degree IMC playbook", body: "Designed the integrated activation framework across POS, consumer promotion, PR, social, and online video, weighted 70% Awareness, 20% Innovation, 10% Sustainability." },
      { num: "05", title: "Activity grid and partnership stack", body: "Sequenced a 16-month calendar across 810 POS locations with partnerships across Yuu loyalty, Universal Studios x Chewy, Chagee, and campus takeovers at NUS, NTU, SMU, and ESSEC." },
    ],
    hardestProblems: [
      { num: "P01", title: "Repositioning between two opposite-end competitors.", body: "TicTac sits between Mentos (playful but functionally weak) and Eclipse (functional but youth-distant). The solution was to claim a third position rather than competing on either axis. \"The Playful Ritual\" anchored TicTac to a pre-social confidence moment that neither competitor owned." },
      { num: "P02", title: "Validating insights in a low-involvement category.", body: "Mint consumption is habit-driven, so direct survey questions produce weak signal. The triangulated method (survey, social listening, interviews) was what surfaced \"The Intensity Gap.\" No single source would have produced it alone." },
      { num: "P03", title: "Translating strategy into an executable calendar.", body: "The risk was that the insight would land but the activation grid would stay generic. The solution was to design the 16-month calendar backward from the three weighted objectives, so every insight had a corresponding activation and the client could trace research findings to retail outcomes on a single page." },
    ],
    skills: ["Brand Repositioning", "Consumer Research", "Competitor Benchmarking", "IMC Planning", "Strategic Consulting"],
    tools: ["Survey Design", "Social Listening", "SWOT Framework", "Censydiam Model", "PowerPoint"],
    techStack: [],
    stats: [
      { value: "63", label: "STRATEGY SLIDES" },
      { value: "16mo", label: "ACTIVATION CALENDAR" },
      { value: "810", label: "POS LOCATIONS" },
    ],
    achievementsShort: [
      "63-slide strategy deck for APAC repositioning",
      "Mixed-methods research: 82 surveys, 16 interviews, 4 platforms",
      "Benchmarked across 7 dimensions vs Mentos and Eclipse",
      "16-month activation calendar across 810 POS locations",
    ],
    achievementsFull: [
      "63-slide strategy deck and 16-month activation calendar",
      "Mixed-methods research: 82 surveys, 16 interviews, social listening across 4 platforms",
      "Competitor benchmarking across 7 dimensions against Mentos and Eclipse",
      "360-degree IMC playbook across 810 POS locations with 5 partnership activations",
    ],
    screenshot: "/screenshots/ferrero.png",
    links: {},
  },
  {
    slug: "shinobidata",
    index: "03",
    name: "ShinobiData",
    shortDescription:
      "Bloomberg-grade equity research, queryable from any AI agent.",
    fullDescription:
      "US equity research platform covering 10,000+ tickers with 200+ screener fields, sub-50ms filters, and natural-language queries in 5 languages. The first equity research MCP server listed on the official Anthropic MCP Registry, queryable natively from Claude, ChatGPT, Gemini, and Perplexity via OAuth 2.1.",
    year: "2025",
    role: "Founding GTM",
    status: "shipped",
    eyebrow: "Production · 2025–2026 · Founding GTM · Live",
    tagline:
      "Positioned a Bloomberg-grade equity research platform against a $499/month incumbent, owning the zero-to-first-paying-cohort motion alongside the founder.",
    liveLink: { label: "Visit live website", href: "https://shinobidata.com" },
    summary:
      "Joined ShinobiData as Founding GTM pre-launch, working on a technically dense product (10k+ tickers, 200+ screener fields, sub-50ms filters, MCP server) that needed a non-technical wedge to reach its audience. Owned positioning, ICP definition, launch sequencing, and the early distribution motion. Translated a deep engineering surface into a narrative buyers could grasp in 30 seconds, designed the anti-Koyfin price anchor, and built the channel mix that took the product from zero audience to its first paying cohort without paid acquisition.",
    targetUser:
      "Retail investors and fundamental analysis hobbyists priced out of Bloomberg Terminal and Koyfin Pro, alongside AI-native finance developers building agents on Claude and OpenAI Apps who needed a real data plane behind MCP. The result was a dual-ICP motion where one side pays for the product and the other amplifies it.",
    scope: [
      { num: "01", title: "Positioning and narrative", body: "Defined the market wedge against Bloomberg and Koyfin, wrote the one-line value proposition that anchored every downstream surface, and built the message hierarchy that made a dense engineering product legible to non-technical buyers." },
      { num: "02", title: "ICP segmentation and dual-motion strategy", body: "Split the audience into two non-overlapping ICPs, with retail investors on the consumer side and AI-agent developers on the MCP side. Designed separate narratives and conversion paths so the same product could carry two motions without diluting either." },
      { num: "03", title: "Pricing and packaging", body: "Owned the pricing narrative against the $499/month incumbent benchmark and structured the tier breakpoints so the product read as a discount on Bloomberg rather than a premium over free tools." },
      { num: "04", title: "Launch sequencing", body: "Architected the multi-stage launch across warm-up content, an HN launch timed to the MCP server release, a Product Hunt cross-launch, and Claude and OpenAI Apps directory listings. Sequencing was designed so earned distribution compounded across channels instead of being spent in a single news cycle." },
      { num: "05", title: "Distribution and channels", body: "Built the channel mix across HN, Product Hunt, finance Twitter/X, Reddit, and AI-developer communities, with channel-specific message variants and clean attribution back to activation and conversion." },
      { num: "06", title: "MCP ecosystem partnerships", body: "Treated the Claude and OpenAI Apps directories as a primary distribution surface. Owned the listing strategy and partnerships with agent builders, turning every MCP integration into a backlink and a referral loop." },
      { num: "07", title: "Early-user pipeline and founder-led sales", body: "Sourced the first paying cohort by hand through direct outbound to finance creators, newsletter operators, and agent builders. Qualified conversations, prepped the founder for each call, and converted initial users into testimonials and warm referrals." },
      { num: "08", title: "Analytics and funnel instrumentation", body: "Set up end-to-end measurement from day one (acquisition, activation, screener depth, MCP-token issuance, paid conversion) so every channel test had clean attribution and pricing decisions ran on real data." },
    ],
    hardestProblems: [
      { num: "P01", title: "Selling a Bloomberg-grade product to people who have never paid for one.", body: "Retail investors are conditioned on free tools and skeptical of new finance SaaS. The solution was to invert the pricing narrative, anchoring downward from the $499/month incumbents rather than upward from free, so the price read as the discount rather than the spend. A generous unauthenticated surface then let the product's depth do the selling before the paywall appeared." },
      { num: "P02", title: "Reaching two ICPs without diluting either message.", body: "A single landing page speaking to both retail investors and AI-agent developers would have converted neither. The solution was to treat MCP as a separate product surface with its own narrative, channels, and documentation. Same backend, two front doors. The developer story could then lean into technical depth while the retail story stayed entirely about research speed and price." },
      { num: "P03", title: "Building distribution with no paid budget against incumbents with sales teams.", body: "The solution was to use the MCP server as a Trojan horse. Listing in the Claude and OpenAI app directories meant every developer searching for a finance data source for their agent found ShinobiData first, and each integration became a backlink, a tweet, and an implicit endorsement. Earned channels compounded while the incumbents' paid channels didn't." },
    ],
    skills: ["Founding GTM", "Product Positioning", "ICP Segmentation", "Pricing Strategy", "Launch Sequencing"],
    tools: ["TypeScript", "Next.js", "Python", "FastAPI", "PostgreSQL", "MCP Protocol", "OAuth 2.1"],
    techStack: ["TypeScript", "Next.js", "Python", "FastAPI", "PostgreSQL", "MCP Protocol", "OAuth 2.1"],
    stats: [
      { value: "10k+", label: "TICKERS INDEXED" },
      { value: "5", label: "AI AGENTS INTEGRATED" },
      { value: "v1.0", label: "ON ANTHROPIC REGISTRY" },
    ],
    achievementsShort: [
      "First equity MCP server on Anthropic's official Registry",
      "10,000+ tickers, 200+ screener fields, sub-50ms filters",
      "Zero-to-first-paying-cohort without paid acquisition",
      "Dual ICP motion: retail investors + AI-agent developers",
    ],
    achievementsFull: [
      "10,000+ US equity tickers indexed with 200+ screener fields",
      "Sub-50ms filter performance, natural-language queries in 5 languages",
      "First equity research MCP server listed on Anthropic's official MCP Registry",
      "Queryable natively from Claude, ChatGPT, Gemini, and Perplexity via OAuth 2.1",
    ],
    screenshot: "/screenshots/shinobidata.png",
    links: { website: "https://shinobidata.com" },
  },
  {
    slug: "darkhorsestocks",
    index: "04",
    name: "DarkHorseStocks",
    shortDescription:
      "From scratch to 46,000+ subscribers across four channels.",
    fullDescription:
      "Led growth across digital channels for an AI-powered equity research platform. Scaled the Telegram subscriber base to 46,000+ as the primary distribution channel, grew Instagram past 19,000 followers, and built the email marketing automation and WhatsApp nurture flows that converted passive audience into engaged community.",
    year: "2024",
    role: "Business Project Manager",
    status: "shipped",
    eyebrow: "Live · 2023–2025 · Growth Marketing Specialist to Business Project Manager · Active",
    tagline:
      "Scaled a stock research platform across five digital channels, growing the Telegram base to 46,000+ subscribers and the Instagram audience past 19,000 followers through content strategy, community building, and marketing automation.",
    liveLink: { label: "Visit live website", href: "https://www.instagram.com/darkhorsestocks" },
    summary:
      "Joined DarkHorseStocks as Growth Marketing Specialist and progressed into Business Project Manager over 20 months. Owned digital channel growth, content strategy, community nurture, and the translation between user signal and platform decisions. Built and ran the multi-channel growth engine that took the platform from an early-stage audience to a 46,000+ Telegram community and a 19,000+ Instagram following, while shipping the email marketing automation and WhatsApp nurture flows that converted passive audience into engaged community.",
    targetUser:
      "Indian retail investors and stock market enthusiasts looking for institutional-quality equity research without paying premium platform fees. The audience came in for deep-dive company analysis, educational content on small and mid-cap opportunities, and a peer community of fellow retail investors.",
    scope: [
      { num: "01", title: "Multi-channel growth strategy", body: "Owned digital growth across five channels (LinkedIn, Instagram, Twitter, Telegram, and WhatsApp) with a unified content strategy that respected the different audience behavior and content format expectations of each platform." },
      { num: "02", title: "Content strategy and format evolution", body: "Led the strategic shift from image-based posts to scripted video content, restructuring the content production pipeline to support a higher-engagement medium and improve organic reach across Instagram and Twitter." },
      { num: "03", title: "Telegram community scaling", body: "Built the Telegram subscriber base to 46,000+ as the platform's primary distribution channel, turning it from a secondary surface into the highest-value audience asset for the business." },
      { num: "04", title: "Instagram audience building", body: "Scaled the Instagram account past 19,000 followers through a consistent posting cadence, a tightened branded visual identity, and the format shift to video that compounded organic discovery." },
      { num: "05", title: "Email marketing automation", body: "Designed and shipped automated email campaigns for lead nurture and audience engagement, building the sequencing logic that converted casual subscribers into recurring readers." },
      { num: "06", title: "WhatsApp community nurture", body: "Owned the WhatsApp group strategy and ran the engagement and retention motions inside the community, keeping subscribers active beyond the initial conversion event." },
      { num: "07", title: "Cross-functional product feedback loop", body: "Acted as the bridge between user signals from the digital channels and the founding team. Translated community feedback into platform communication, content priorities, and growth requirements that shaped direction." },
      { num: "08", title: "Branded campaign execution", body: "Ran coordinated branded campaigns across Telegram, Twitter, and Instagram with aligned messaging and creative, treating each campaign as a multi-channel push rather than a single-platform activation." },
    ],
    hardestProblems: [
      { num: "P01", title: "Growing five distinct channels with a small team.", body: "Each channel has different audience behavior, content format expectations, and growth mechanics. The solution was to identify the highest-leverage channel for the business (Telegram) and concentrate distribution resources there, while running the other four channels as feeder surfaces designed to push the audience into Telegram rather than trying to grow each independently." },
      { num: "P02", title: "Shifting content format without losing audience momentum.", body: "Moving from image to video required rebuilding the production workflow, training the team on script-based content, and risking a temporary drop in posting cadence. The solution was to phase the transition by running both formats in parallel for two months, validating which video formats outperformed images on engagement, and then fully committing to video once the data was clear." },
      { num: "P03", title: "Converting passive followers into engaged communities.", body: "Follower counts on Instagram and Telegram measure reach, not retention. The solution was to design WhatsApp groups as the high-touch community layer where genuine discussion happened, and use the broader channels as top-of-funnel feeders that pushed warm audiences into WhatsApp where retention and long-term engagement were measurable." },
    ],
    skills: ["Growth Marketing", "Content Strategy", "Community Building", "Email Automation", "Campaign Management"],
    tools: ["Telegram Bot API", "Instagram", "Twitter/X", "Mailchimp"],
    techStack: [],
    stats: [
      { value: "46k+", label: "TELEGRAM SUBSCRIBERS" },
      { value: "19k+", label: "INSTAGRAM FOLLOWERS" },
      { value: "5.2k+", label: "TWITTER FOLLOWERS" },
    ],
    achievementsShort: [
      "Scaled Telegram to 46,000+ subscribers as primary channel",
      "Grew Instagram past 19,000 followers",
      "Shifted content from static images to scripted video",
      "Built email + WhatsApp nurture converting audience to community",
    ],
    achievementsFull: [
      "Scaled Telegram subscriber base to 46,000+",
      "Grew Instagram following past 19,000",
      "Built email marketing automation and WhatsApp nurture flows",
      "Led strategic shift from image-based posts to scripted video content",
    ],
    screenshot: "/screenshots/darkhorsestocks.png",
    links: { website: "https://www.darkhorsestocks.in" },
  },
];
