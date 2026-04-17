import { motion } from "motion/react";
import CompassDivider from "../components/CompassDivider";
import ExplorerCard from "../components/ExplorerCard";
import MarkExploredButton from "../components/MarkExploredButton";
import PathButton from "../components/PathButton";
import SectionHeader from "../components/SectionHeader";

// ─── Data ──────────────────────────────────────────────────────────────────

const launchSteps = [
  {
    icon: "💡",
    title: "Idea Validation",
    description:
      "Talk to 20 potential customers before writing a single line of code. Ask about their problems, not your solution. Use free tools like Google Forms and WhatsApp polls.",
  },
  {
    icon: "📊",
    title: "Business Model",
    description:
      "Choose how you make money: services, productized services, subscriptions, or digital products. Use the Business Model Canvas (free on Strategyzer) to map it out in one page.",
  },
  {
    icon: "🏛️",
    title: "Legal Registration",
    description:
      "Start as Sole Proprietor (no cost, simplest) or Private Limited Company (best for investment). Register your MSME at Udyam Registration for free benefits and loan access.",
  },
  {
    icon: "🎨",
    title: "Branding",
    description:
      "Create a name, logo, and 1-line description. Use Canva for design, Namecheap for domain (~₹700/yr). Your brand is how customers describe you when you're not in the room.",
  },
  {
    icon: "🚀",
    title: "Launch",
    description:
      "Ship your MVP in 4 weeks or less. Post in 3 communities where your customers are. Offer first 5 clients a discount for a testimonial. Revenue before perfection.",
  },
];

const clientSteps = [
  {
    icon: "🔍",
    title: "Niche Down",
    description:
      "'React developer for SaaS startups' beats 'web developer'. The narrower your niche, the easier it is to find clients and charge premium rates. Counterintuitive but true.",
  },
  {
    icon: "📧",
    title: "Cold Outreach",
    description:
      "Research 20 dream clients. Send a 3-sentence personalised email: reference their work, identify a specific problem, suggest a solution. Follow up once after 4 days. Keep a spreadsheet.",
  },
  {
    icon: "🌐",
    title: "Freelancing Platforms",
    description:
      "Start on Fiverr for productized fixed-price gigs, Upwork for long-term project clients, or Toptal if you're in the top 3% of your field. Build a 5-star review history early.",
  },
  {
    icon: "📣",
    title: "Community Presence",
    description:
      "Be consistently helpful in Slack groups, Discord servers, and subreddits where your ideal clients hang out. DMs and referrals come to those who give value first.",
  },
  {
    icon: "🤝",
    title: "Referral Engine",
    description:
      "Ask every happy client: 'Do you know anyone else who could use this?' Offer a 10% referral fee. One referral programme, executed consistently, can replace cold outreach entirely.",
  },
];

const fundingSources = [
  {
    icon: "💰",
    tag: "Zero Dilution",
    tagColor: "bg-secondary text-foreground",
    title: "Bootstrapping",
    description:
      "Revenue before investment. Keep your day job, build evenings and weekends. Reach ₹1 lakh MRR before quitting. Full control, no investors.",
    link: null,
    linkLabel: null,
  },
  {
    icon: "🌱",
    tag: "Government",
    tagColor: "bg-accent/20 text-foreground",
    title: "Startup India Seed Fund",
    description:
      "Up to ₹20 lakh for early-stage DPIIT-recognised startups for proof-of-concept, prototype, and market entry. Register free at startupindia.gov.in for tax exemptions and fast-track IP.",
    link: "https://www.startupindia.gov.in",
    linkLabel: "Visit Startup India →",
  },
  {
    icon: "🏦",
    tag: "Government",
    tagColor: "bg-accent/20 text-foreground",
    title: "MSME & Mudra Yojana",
    description:
      "Mudra Loan offers up to ₹10 lakh with no collateral under Shishu, Kishore, and Tarun tiers. CGTMSE provides credit guarantees. Register your MSME free at Udyam Registration.",
    link: "https://udyamregistration.gov.in",
    linkLabel: "Register Udyam →",
  },
  {
    icon: "👼",
    tag: "Equity",
    tagColor: "bg-muted text-foreground",
    title: "Angel Investors",
    description:
      "High-net-worth individuals investing ₹5L–₹50L for 5–15% equity. Reach them via AngelList India, LetsVenture, or founder communities. Warm introductions convert 5× better than cold.",
    link: "https://www.angellist.com/india",
    linkLabel: "Explore AngelList India →",
  },
  {
    icon: "📈",
    tag: "Equity",
    tagColor: "bg-muted text-foreground",
    title: "Venture Capital",
    description:
      "Institutional funds seeking 10× returns. Target after achieving product-market fit with consistent month-on-month growth. Key India VCs: Sequoia Surge, Matrix India, Blume Ventures, 3one4 Capital.",
    link: null,
    linkLabel: null,
  },
];

const growthWorkflow = [
  {
    icon: "🗺️",
    label: "Market Research",
    desc: "Size the market, find 3 competitors, understand pricing gaps.",
  },
  {
    icon: "🔧",
    label: "Prototype",
    desc: "Build the simplest version that demonstrates value. No-code is fine.",
  },
  {
    icon: "🧪",
    label: "Test",
    desc: "Put it in front of 10 real users. Record what confuses them.",
  },
  {
    icon: "🔁",
    label: "Iterate",
    desc: "Fix the top 3 friction points. Repeat the test cycle.",
  },
  {
    icon: "📡",
    label: "Scale",
    desc: "Double down on channels that work. Remove everything else.",
  },
];

const onlinePlatforms = [
  {
    icon: "🖥️",
    name: "Fiverr",
    tagline: "Best for productized services",
    description:
      "Create clear gigs with fixed pricing. Start with ₹2,000–₹5,000 gigs, scale to ₹50,000+ once reviews build up. Focus on a single, searchable niche.",
    tips: [
      "Complete your profile 100%",
      "Use video intro for 2× conversion",
      "Respond within 1 hour of every message",
    ],
    link: "https://www.fiverr.com",
  },
  {
    icon: "💼",
    name: "Upwork",
    tagline: "Best for long-term clients",
    description:
      "Project-based and hourly contracts with global clients. Maintain 90%+ Job Success Score for premium visibility. Write proposals that reference the client's exact words.",
    tips: [
      "Specialise in one service category",
      "Send 5 targeted proposals daily",
      "Never compete on price alone",
    ],
    link: "https://www.upwork.com",
  },
  {
    icon: "🔗",
    name: "LinkedIn",
    tagline: "Essential for B2B & professional services",
    description:
      "Optimise your headline with a 'I help X do Y' format. Post weekly insights, engage on prospects' posts for 30 days before DMing. Your profile is your digital storefront.",
    tips: [
      "Add featured section with portfolio",
      "Post 3× a week consistently",
      "Send 10 connection requests daily",
    ],
    link: "https://www.linkedin.com",
  },
  {
    icon: "📝",
    name: "Notion Portfolio",
    tagline: "Free portfolio & documentation site",
    description:
      "Build a polished Notion site with case studies, services, and testimonials in under 2 hours. Share as a link instead of attaching files. Clean, professional, and instantly updatable.",
    tips: [
      "Structure: About → Work → Process → Contact",
      "Add 3 case studies minimum",
      "Include social proof (testimonials, metrics)",
    ],
    link: "https://notion.so",
  },
];

const dosList = [
  "Professional photo with a clean, plain background",
  "Niche headline: 'I help X achieve Y using Z'",
  "3 portfolio case studies with results (not just screenshots)",
  "Social proof: client names, ratings, measurable outcomes",
  "Clear call-to-action — make it easy to contact you",
  "Update your profile every 3 months",
];

const dontsList = [
  "Generic headline: 'Freelancer | Designer | Developer'",
  "Empty 'About' section or walls of text",
  "Portfolio with no context — show the problem you solved",
  "Ignoring reviews — ask for one after every project",
  "Underpricing to win work — sets the wrong expectation",
  "Multiple disconnected niches on one profile",
];

// ─── Component ─────────────────────────────────────────────────────────────

export default function Business() {
  return (
    <div className="bg-background">
      {/* ── Hero ── */}
      <section className="bg-card parchment-texture border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.22em] uppercase font-body text-muted-foreground mb-3">
              ⛵ Trade Routes
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Start Your Venture
            </h1>
            <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              Every great enterprise began as a small ship navigating uncertain
              waters. Here is your complete chart — from validating your first
              idea to acquiring clients, securing funding, and building an
              unstoppable online presence.
            </p>
            <div
              className="flex items-center justify-center gap-3"
              aria-hidden="true"
            >
              <div className="h-px w-16 bg-border" />
              <span className="text-muted-foreground">⚓</span>
              <div className="h-px w-16 bg-border" />
            </div>
          </motion.div>
          <div className="mt-6 flex justify-center">
            <MarkExploredButton sectionId="business" />
          </div>
        </div>
      </section>

      {/* ── A. How to Start ── */}
      <CompassDivider label="The Launch Sequence" />
      <section
        className="max-w-3xl mx-auto px-6 pb-4"
        data-ocid="business.start.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ExplorerCard tilt="left" className="p-8">
            <div className="flex items-start gap-4 mb-7">
              <span className="text-4xl flex-shrink-0" aria-hidden="true">
                🏴‍☠️
              </span>
              <div>
                <p className="text-xs tracking-[0.18em] uppercase font-body text-muted-foreground mb-1">
                  Section A
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  How to Start a Business
                </h2>
              </div>
            </div>

            <div className="space-y-0">
              {launchSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex gap-5"
                  data-ocid={`business.start.step.${i + 1}`}
                >
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-9 h-9 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-base flex-shrink-0 shadow-maritime">
                      {step.icon}
                    </div>
                    {i < launchSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border min-h-[36px] my-1" />
                    )}
                  </div>
                  <div className="pb-5 min-w-0">
                    <h3 className="font-body font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.startupindia.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="business.startup_india_link"
              >
                <PathButton icon="🇮🇳" className="text-sm py-2">
                  Startup India Registration
                </PathButton>
              </a>
              <a
                href="https://udyamregistration.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="business.udyam_link"
              >
                <PathButton icon="🏭" className="text-sm py-2">
                  MSME Udyam Registration
                </PathButton>
              </a>
            </div>
          </ExplorerCard>
        </motion.div>
      </section>

      {/* ── B. Client Acquisition ── */}
      <CompassDivider label="Finding Your Crew" />
      <section
        className="max-w-3xl mx-auto px-6 pb-4"
        data-ocid="business.clients.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ExplorerCard tilt="right" className="p-8">
            <div className="flex items-start gap-4 mb-7">
              <span className="text-4xl flex-shrink-0" aria-hidden="true">
                🎯
              </span>
              <div>
                <p className="text-xs tracking-[0.18em] uppercase font-body text-muted-foreground mb-1">
                  Section B
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  Client Acquisition
                </h2>
              </div>
            </div>

            <div className="space-y-0">
              {clientSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex gap-5"
                  data-ocid={`business.client.step.${i + 1}`}
                >
                  <div className="flex flex-col items-center gap-0">
                    <div className="w-9 h-9 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-base flex-shrink-0 shadow-maritime">
                      {step.icon}
                    </div>
                    {i < clientSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border min-h-[36px] my-1" />
                    )}
                  </div>
                  <div className="pb-5 min-w-0">
                    <h3 className="font-body font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-background/60 rounded-lg border border-border p-4">
              <p className="font-body text-sm font-semibold text-foreground mb-2">
                ⚓ Top Freelancing Platforms
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Fiverr",
                  "Upwork",
                  "Toptal",
                  "PeoplePerHour",
                  "Freelancer.in",
                ].map((p) => (
                  <span
                    key={p}
                    className="text-xs font-body px-3 py-1 bg-secondary border border-border rounded-full text-foreground"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </ExplorerCard>
        </motion.div>
      </section>

      {/* ── C. Funding ── */}
      <CompassDivider label="The Treasure Map" />
      <section
        className="max-w-3xl mx-auto px-6 pb-4"
        data-ocid="business.funding.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-4 mb-6 px-1">
            <span className="text-4xl flex-shrink-0" aria-hidden="true">
              💰
            </span>
            <div>
              <p className="text-xs tracking-[0.18em] uppercase font-body text-muted-foreground mb-1">
                Section C
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                Funding Your Venture
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="space-y-5">
          {fundingSources.map((source, i) => (
            <motion.div
              key={source.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              data-ocid={`business.funding.item.${i + 1}`}
            >
              <ExplorerCard
                tilt={i % 2 === 0 ? "left" : "right"}
                className="p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {source.icon}
                    </span>
                    <h3 className="font-display text-xl text-foreground">
                      {source.title}
                    </h3>
                  </div>
                  <span
                    className={`text-xs font-body px-2.5 py-1 rounded-full border border-border flex-shrink-0 ${source.tagColor}`}
                  >
                    {source.tag}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                  {source.description}
                </p>
                {source.link && (
                  <a
                    href={source.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-body text-foreground hover:text-muted-foreground transition-smooth underline-offset-2 hover:underline"
                    data-ocid={`business.funding.link.${i + 1}`}
                  >
                    🗺️ {source.linkLabel}
                  </a>
                )}
              </ExplorerCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5"
        >
          <ExplorerCard tilt="none" className="p-5 bg-muted/40">
            <p className="font-body text-sm font-semibold text-foreground mb-1">
              🇮🇳 Indian Government Initiatives
            </p>
            <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3">
              The Startup India initiative has a ₹10,000 crore Fund of Funds.
              MSME schemes support over 63 million enterprises across India.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  label: "Startup India",
                  link: "https://www.startupindia.gov.in",
                },
                { label: "Mudra Yojana", link: "https://www.mudra.org.in" },
                { label: "Skill India", link: "https://skillindia.gov.in" },
                { label: "Digital India", link: "https://digitalindia.gov.in" },
                { label: "SWAYAM", link: "https://swayam.gov.in" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-body px-3 py-1.5 bg-secondary border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                  data-ocid="business.govt.link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </ExplorerCard>
        </motion.div>
      </section>

      {/* ── D. Practical Growth Workflow ── */}
      <CompassDivider label="Navigating the Trade Winds" />
      <section
        className="bg-muted/30 parchment-texture py-12"
        data-ocid="business.workflow.section"
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              icon="⚙️"
              eyebrow="Section D"
              title="Practical Growth Workflow"
              subtitle="Five stages every successful product passes through — from first idea to a scaled, profitable business."
              className="mb-10"
            />
          </motion.div>

          {/* Horizontal workflow with connector lines */}
          <div className="relative">
            {/* Desktop flow */}
            <div className="hidden md:flex items-start gap-0">
              {growthWorkflow.map((stage, i) => (
                <div
                  key={stage.label}
                  className="flex items-start flex-1"
                  data-ocid={`business.workflow.step.${i + 1}`}
                >
                  <motion.div
                    className="flex flex-col items-center text-center flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-card border-2 border-border shadow-maritime flex items-center justify-center text-2xl mb-3">
                      {stage.icon}
                    </div>
                    <p className="font-body font-semibold text-sm text-foreground mb-1">
                      {stage.label}
                    </p>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed px-2">
                      {stage.desc}
                    </p>
                  </motion.div>
                  {i < growthWorkflow.length - 1 && (
                    <div className="flex items-center mt-7 mx-1 flex-shrink-0">
                      <div className="w-6 h-px bg-border" />
                      <span className="text-muted-foreground text-xs">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile flow — vertical */}
            <div className="md:hidden space-y-0">
              {growthWorkflow.map((stage, i) => (
                <div
                  key={stage.label}
                  className="flex gap-4"
                  data-ocid={`business.workflow.step.${i + 1}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-card border-2 border-border shadow-maritime flex items-center justify-center text-xl flex-shrink-0">
                      {stage.icon}
                    </div>
                    {i < growthWorkflow.length - 1 && (
                      <div className="w-px flex-1 bg-border min-h-[28px] my-1" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="font-body font-semibold text-sm text-foreground mb-1">
                      {stage.label}
                    </p>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Enterprise Presence ── */}
      <CompassDivider label="Your Digital Ports of Call" />
      <section
        className="max-w-3xl mx-auto px-6 pb-12"
        data-ocid="business.platforms.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            icon="💼"
            eyebrow="Enterprise Presence"
            title="Build Your Online Presence"
            subtitle="The platforms where clients and contracts are waiting. Set up your profile correctly from day one."
            className="mb-10"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {onlinePlatforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              data-ocid={`business.platform.${i + 1}`}
            >
              <ExplorerCard
                tilt={i % 2 === 0 ? "left" : "right"}
                className="p-6 h-full flex flex-col"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-3xl" aria-hidden="true">
                    {platform.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-foreground">
                      {platform.name}
                    </h3>
                    <p className="text-xs font-body text-muted-foreground">
                      {platform.tagline}
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {platform.description}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {platform.tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-xs font-body text-foreground"
                    >
                      <span className="text-muted-foreground flex-shrink-0 mt-0.5">
                        ✦
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-foreground hover:text-muted-foreground transition-smooth underline-offset-2 hover:underline"
                  data-ocid={`business.platform_link.${i + 1}`}
                >
                  🗺️ Explore {platform.name} →
                </a>
              </ExplorerCard>
            </motion.div>
          ))}
        </div>

        {/* Profile Tips — Do's and Don'ts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
          data-ocid="business.profile_tips.card"
        >
          <ExplorerCard tilt="left" className="p-7">
            <div className="flex items-start gap-3 mb-6">
              <span className="text-3xl" aria-hidden="true">
                ⭐
              </span>
              <div>
                <h3 className="font-display text-2xl text-foreground">
                  Profile Optimisation
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  A great profile converts browsers into paying clients. A
                  mediocre one disappears in search.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Do's */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-secondary border border-border flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <p className="text-xs tracking-wider uppercase font-body text-muted-foreground font-medium">
                    What to Include
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {dosList.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2.5 text-sm font-body text-foreground"
                    >
                      <span className="text-muted-foreground flex-shrink-0 mt-0.5">
                        ✦
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-destructive/20 border border-border flex items-center justify-center text-xs">
                    ✕
                  </span>
                  <p className="text-xs tracking-wider uppercase font-body text-muted-foreground font-medium">
                    What to Avoid
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {dontsList.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2.5 text-sm font-body text-muted-foreground"
                    >
                      <span className="text-destructive/70 flex-shrink-0 mt-0.5">
                        ⚓
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing strategy note */}
            <div className="mt-6 pt-5 border-t border-border">
              <p className="font-body text-sm font-semibold text-foreground mb-2">
                💡 Pricing Strategy
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Start 20% below market to build reviews, then raise prices by
                15% after every 5 positive reviews. Never undercut by more than
                30% — it signals low quality, not value. Aim to double your rate
                within 12 months.
              </p>
            </div>
          </ExplorerCard>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <ExplorerCard tilt="none" className="p-7 bg-card">
            <p className="font-display text-xl text-foreground mb-2">
              Ready to set sail?
            </p>
            <p className="font-body text-sm text-muted-foreground mb-5 max-w-lg mx-auto">
              The best time to start was a year ago. The second best time is
              today. Pick one action from this guide and do it before you close
              this tab.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.startupindia.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="business.cta.startup_india"
              >
                <PathButton icon="🇮🇳">Register on Startup India</PathButton>
              </a>
              <a
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="business.cta.fiverr"
              >
                <PathButton icon="🖥️">Start on Fiverr</PathButton>
              </a>
            </div>
          </ExplorerCard>
        </motion.div>
      </section>
    </div>
  );
}
