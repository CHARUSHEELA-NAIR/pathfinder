import { j as jsxRuntimeExports, m as motion } from "./index-DLmsKBlQ.js";
import { C as CompassDivider, E as ExplorerCard, S as SectionHeader } from "./SectionHeader-B3v_DeuH.js";
import { M as MarkExploredButton } from "./MarkExploredButton-Cx9__lVw.js";
import { P as PathButton } from "./PathButton-C6b6y_Cu.js";
import "./index-oPS5ip4z.js";
import "./button-C0nt2FMv.js";
import "./index-C29F0n-q.js";
const launchSteps = [
  {
    icon: "💡",
    title: "Idea Validation",
    description: "Talk to 20 potential customers before writing a single line of code. Ask about their problems, not your solution. Use free tools like Google Forms and WhatsApp polls."
  },
  {
    icon: "📊",
    title: "Business Model",
    description: "Choose how you make money: services, productized services, subscriptions, or digital products. Use the Business Model Canvas (free on Strategyzer) to map it out in one page."
  },
  {
    icon: "🏛️",
    title: "Legal Registration",
    description: "Start as Sole Proprietor (no cost, simplest) or Private Limited Company (best for investment). Register your MSME at Udyam Registration for free benefits and loan access."
  },
  {
    icon: "🎨",
    title: "Branding",
    description: "Create a name, logo, and 1-line description. Use Canva for design, Namecheap for domain (~₹700/yr). Your brand is how customers describe you when you're not in the room."
  },
  {
    icon: "🚀",
    title: "Launch",
    description: "Ship your MVP in 4 weeks or less. Post in 3 communities where your customers are. Offer first 5 clients a discount for a testimonial. Revenue before perfection."
  }
];
const clientSteps = [
  {
    icon: "🔍",
    title: "Niche Down",
    description: "'React developer for SaaS startups' beats 'web developer'. The narrower your niche, the easier it is to find clients and charge premium rates. Counterintuitive but true."
  },
  {
    icon: "📧",
    title: "Cold Outreach",
    description: "Research 20 dream clients. Send a 3-sentence personalised email: reference their work, identify a specific problem, suggest a solution. Follow up once after 4 days. Keep a spreadsheet."
  },
  {
    icon: "🌐",
    title: "Freelancing Platforms",
    description: "Start on Fiverr for productized fixed-price gigs, Upwork for long-term project clients, or Toptal if you're in the top 3% of your field. Build a 5-star review history early."
  },
  {
    icon: "📣",
    title: "Community Presence",
    description: "Be consistently helpful in Slack groups, Discord servers, and subreddits where your ideal clients hang out. DMs and referrals come to those who give value first."
  },
  {
    icon: "🤝",
    title: "Referral Engine",
    description: "Ask every happy client: 'Do you know anyone else who could use this?' Offer a 10% referral fee. One referral programme, executed consistently, can replace cold outreach entirely."
  }
];
const fundingSources = [
  {
    icon: "💰",
    tag: "Zero Dilution",
    tagColor: "bg-secondary text-foreground",
    title: "Bootstrapping",
    description: "Revenue before investment. Keep your day job, build evenings and weekends. Reach ₹1 lakh MRR before quitting. Full control, no investors.",
    link: null,
    linkLabel: null
  },
  {
    icon: "🌱",
    tag: "Government",
    tagColor: "bg-accent/20 text-foreground",
    title: "Startup India Seed Fund",
    description: "Up to ₹20 lakh for early-stage DPIIT-recognised startups for proof-of-concept, prototype, and market entry. Register free at startupindia.gov.in for tax exemptions and fast-track IP.",
    link: "https://www.startupindia.gov.in",
    linkLabel: "Visit Startup India →"
  },
  {
    icon: "🏦",
    tag: "Government",
    tagColor: "bg-accent/20 text-foreground",
    title: "MSME & Mudra Yojana",
    description: "Mudra Loan offers up to ₹10 lakh with no collateral under Shishu, Kishore, and Tarun tiers. CGTMSE provides credit guarantees. Register your MSME free at Udyam Registration.",
    link: "https://udyamregistration.gov.in",
    linkLabel: "Register Udyam →"
  },
  {
    icon: "👼",
    tag: "Equity",
    tagColor: "bg-muted text-foreground",
    title: "Angel Investors",
    description: "High-net-worth individuals investing ₹5L–₹50L for 5–15% equity. Reach them via AngelList India, LetsVenture, or founder communities. Warm introductions convert 5× better than cold.",
    link: "https://www.angellist.com/india",
    linkLabel: "Explore AngelList India →"
  },
  {
    icon: "📈",
    tag: "Equity",
    tagColor: "bg-muted text-foreground",
    title: "Venture Capital",
    description: "Institutional funds seeking 10× returns. Target after achieving product-market fit with consistent month-on-month growth. Key India VCs: Sequoia Surge, Matrix India, Blume Ventures, 3one4 Capital.",
    link: null,
    linkLabel: null
  }
];
const growthWorkflow = [
  {
    icon: "🗺️",
    label: "Market Research",
    desc: "Size the market, find 3 competitors, understand pricing gaps."
  },
  {
    icon: "🔧",
    label: "Prototype",
    desc: "Build the simplest version that demonstrates value. No-code is fine."
  },
  {
    icon: "🧪",
    label: "Test",
    desc: "Put it in front of 10 real users. Record what confuses them."
  },
  {
    icon: "🔁",
    label: "Iterate",
    desc: "Fix the top 3 friction points. Repeat the test cycle."
  },
  {
    icon: "📡",
    label: "Scale",
    desc: "Double down on channels that work. Remove everything else."
  }
];
const onlinePlatforms = [
  {
    icon: "🖥️",
    name: "Fiverr",
    tagline: "Best for productized services",
    description: "Create clear gigs with fixed pricing. Start with ₹2,000–₹5,000 gigs, scale to ₹50,000+ once reviews build up. Focus on a single, searchable niche.",
    tips: [
      "Complete your profile 100%",
      "Use video intro for 2× conversion",
      "Respond within 1 hour of every message"
    ],
    link: "https://www.fiverr.com"
  },
  {
    icon: "💼",
    name: "Upwork",
    tagline: "Best for long-term clients",
    description: "Project-based and hourly contracts with global clients. Maintain 90%+ Job Success Score for premium visibility. Write proposals that reference the client's exact words.",
    tips: [
      "Specialise in one service category",
      "Send 5 targeted proposals daily",
      "Never compete on price alone"
    ],
    link: "https://www.upwork.com"
  },
  {
    icon: "🔗",
    name: "LinkedIn",
    tagline: "Essential for B2B & professional services",
    description: "Optimise your headline with a 'I help X do Y' format. Post weekly insights, engage on prospects' posts for 30 days before DMing. Your profile is your digital storefront.",
    tips: [
      "Add featured section with portfolio",
      "Post 3× a week consistently",
      "Send 10 connection requests daily"
    ],
    link: "https://www.linkedin.com"
  },
  {
    icon: "📝",
    name: "Notion Portfolio",
    tagline: "Free portfolio & documentation site",
    description: "Build a polished Notion site with case studies, services, and testimonials in under 2 hours. Share as a link instead of attaching files. Clean, professional, and instantly updatable.",
    tips: [
      "Structure: About → Work → Process → Contact",
      "Add 3 case studies minimum",
      "Include social proof (testimonials, metrics)"
    ],
    link: "https://notion.so"
  }
];
const dosList = [
  "Professional photo with a clean, plain background",
  "Niche headline: 'I help X achieve Y using Z'",
  "3 portfolio case studies with results (not just screenshots)",
  "Social proof: client names, ratings, measurable outcomes",
  "Clear call-to-action — make it easy to contact you",
  "Update your profile every 3 months"
];
const dontsList = [
  "Generic headline: 'Freelancer | Designer | Developer'",
  "Empty 'About' section or walls of text",
  "Portfolio with no context — show the problem you solved",
  "Ignoring reviews — ask for one after every project",
  "Underpricing to win work — sets the wrong expectation",
  "Multiple disconnected niches on one profile"
];
function Business() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card parchment-texture border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.22em] uppercase font-body text-muted-foreground mb-3", children: "⛵ Trade Routes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight", children: "Start Your Venture" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6", children: "Every great enterprise began as a small ship navigating uncertain waters. Here is your complete chart — from validating your first idea to acquiring clients, securing funding, and building an unstoppable online presence." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-center gap-3",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 bg-border" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "⚓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 bg-border" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkExploredButton, { sectionId: "business" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "The Launch Sequence" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "max-w-3xl mx-auto px-6 pb-4",
        "data-ocid": "business.start.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "left", className: "p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl flex-shrink-0", "aria-hidden": "true", children: "🏴‍☠️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.18em] uppercase font-body text-muted-foreground mb-1", children: "Section A" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground", children: "How to Start a Business" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: launchSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex gap-5",
                  "data-ocid": `business.start.step.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-base flex-shrink-0 shadow-maritime", children: step.icon }),
                      i < launchSteps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px flex-1 bg-border min-h-[36px] my-1" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-5 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body font-semibold text-foreground mb-1", children: step.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: step.description })
                    ] })
                  ]
                },
                step.title
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://www.startupindia.gov.in",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "business.startup_india_link",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PathButton, { icon: "🇮🇳", className: "text-sm py-2", children: "Startup India Registration" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://udyamregistration.gov.in",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "business.udyam_link",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PathButton, { icon: "🏭", className: "text-sm py-2", children: "MSME Udyam Registration" })
                  }
                )
              ] })
            ] })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Finding Your Crew" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "max-w-3xl mx-auto px-6 pb-4",
        "data-ocid": "business.clients.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "right", className: "p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl flex-shrink-0", "aria-hidden": "true", children: "🎯" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.18em] uppercase font-body text-muted-foreground mb-1", children: "Section B" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground", children: "Client Acquisition" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: clientSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex gap-5",
                  "data-ocid": `business.client.step.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-base flex-shrink-0 shadow-maritime", children: step.icon }),
                      i < clientSteps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px flex-1 bg-border min-h-[36px] my-1" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-5 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body font-semibold text-foreground mb-1", children: step.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: step.description })
                    ] })
                  ]
                },
                step.title
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 bg-background/60 rounded-lg border border-border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-semibold text-foreground mb-2", children: "⚓ Top Freelancing Platforms" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                  "Fiverr",
                  "Upwork",
                  "Toptal",
                  "PeoplePerHour",
                  "Freelancer.in"
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-body px-3 py-1 bg-secondary border border-border rounded-full text-foreground",
                    children: p
                  },
                  p
                )) })
              ] })
            ] })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "The Treasure Map" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "max-w-3xl mx-auto px-6 pb-4",
        "data-ocid": "business.funding.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6 px-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl flex-shrink-0", "aria-hidden": "true", children: "💰" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.18em] uppercase font-body text-muted-foreground mb-1", children: "Section C" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground", children: "Funding Your Venture" })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: fundingSources.map((source, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.45, delay: i * 0.08 },
              "data-ocid": `business.funding.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                ExplorerCard,
                {
                  tilt: i % 2 === 0 ? "left" : "right",
                  className: "p-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", "aria-hidden": "true", children: source.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: source.title })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-xs font-body px-2.5 py-1 rounded-full border border-border flex-shrink-0 ${source.tagColor}`,
                          children: source.tag
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mb-3", children: source.description }),
                    source.link && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: source.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center text-sm font-body text-foreground hover:text-muted-foreground transition-smooth underline-offset-2 hover:underline",
                        "data-ocid": `business.funding.link.${i + 1}`,
                        children: [
                          "🗺️ ",
                          source.linkLabel
                        ]
                      }
                    )
                  ]
                }
              )
            },
            source.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "mt-5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "none", className: "p-5 bg-muted/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-semibold text-foreground mb-1", children: "🇮🇳 Indian Government Initiatives" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed mb-3", children: "The Startup India initiative has a ₹10,000 crore Fund of Funds. MSME schemes support over 63 million enterprises across India." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                  {
                    label: "Startup India",
                    link: "https://www.startupindia.gov.in"
                  },
                  { label: "Mudra Yojana", link: "https://www.mudra.org.in" },
                  { label: "Skill India", link: "https://skillindia.gov.in" },
                  { label: "Digital India", link: "https://digitalindia.gov.in" },
                  { label: "SWAYAM", link: "https://swayam.gov.in" }
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: item.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-xs font-body px-3 py-1.5 bg-secondary border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth",
                    "data-ocid": "business.govt.link",
                    children: item.label
                  },
                  item.label
                )) })
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Navigating the Trade Winds" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 parchment-texture py-12",
        "data-ocid": "business.workflow.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeader,
                {
                  icon: "⚙️",
                  eyebrow: "Section D",
                  title: "Practical Growth Workflow",
                  subtitle: "Five stages every successful product passes through — from first idea to a scaled, profitable business.",
                  className: "mb-10"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-start gap-0", children: growthWorkflow.map((stage, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start flex-1",
                "data-ocid": `business.workflow.step.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      className: "flex flex-col items-center text-center flex-1",
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.4, delay: i * 0.12 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-card border-2 border-border shadow-maritime flex items-center justify-center text-2xl mb-3", children: stage.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-sm text-foreground mb-1", children: stage.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed px-2", children: stage.desc })
                      ]
                    }
                  ),
                  i < growthWorkflow.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-7 mx-1 flex-shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-px bg-border" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "→" })
                  ] })
                ]
              },
              stage.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-0", children: growthWorkflow.map((stage, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex gap-4",
                "data-ocid": `business.workflow.step.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-card border-2 border-border shadow-maritime flex items-center justify-center text-xl flex-shrink-0", children: stage.icon }),
                    i < growthWorkflow.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px flex-1 bg-border min-h-[28px] my-1" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-sm text-foreground mb-1", children: stage.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed", children: stage.desc })
                  ] })
                ]
              },
              stage.label
            )) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Your Digital Ports of Call" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "max-w-3xl mx-auto px-6 pb-12",
        "data-ocid": "business.platforms.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeader,
                {
                  icon: "💼",
                  eyebrow: "Enterprise Presence",
                  title: "Build Your Online Presence",
                  subtitle: "The platforms where clients and contracts are waiting. Set up your profile correctly from day one.",
                  className: "mb-10"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: onlinePlatforms.map((platform, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: i * 0.1 },
              "data-ocid": `business.platform.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                ExplorerCard,
                {
                  tilt: i % 2 === 0 ? "left" : "right",
                  className: "p-6 h-full flex flex-col",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", "aria-hidden": "true", children: platform.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: platform.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-muted-foreground", children: platform.tagline })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1", children: platform.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-4", children: platform.tips.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2 text-xs font-body text-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground flex-shrink-0 mt-0.5", children: "✦" }),
                          tip
                        ]
                      },
                      tip
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: platform.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-sm font-body text-foreground hover:text-muted-foreground transition-smooth underline-offset-2 hover:underline",
                        "data-ocid": `business.platform_link.${i + 1}`,
                        children: [
                          "🗺️ Explore ",
                          platform.name,
                          " →"
                        ]
                      }
                    )
                  ]
                }
              )
            },
            platform.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "mt-8",
              "data-ocid": "business.profile_tips.card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "left", className: "p-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", "aria-hidden": "true", children: "⭐" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground", children: "Profile Optimisation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mt-1", children: "A great profile converts browsers into paying clients. A mediocre one disappears in search." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-secondary border border-border flex items-center justify-center text-xs", children: "✓" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-wider uppercase font-body text-muted-foreground font-medium", children: "What to Include" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: dosList.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2.5 text-sm font-body text-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground flex-shrink-0 mt-0.5", children: "✦" }),
                          tip
                        ]
                      },
                      tip
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-destructive/20 border border-border flex items-center justify-center text-xs", children: "✕" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-wider uppercase font-body text-muted-foreground font-medium", children: "What to Avoid" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: dontsList.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2.5 text-sm font-body text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive/70 flex-shrink-0 mt-0.5", children: "⚓" }),
                          tip
                        ]
                      },
                      tip
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-semibold text-foreground mb-2", children: "💡 Pricing Strategy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: "Start 20% below market to build reviews, then raise prices by 15% after every 5 positive reviews. Never undercut by more than 30% — it signals low quality, not value. Aim to double your rate within 12 months." })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "mt-8 text-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "none", className: "p-7 bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground mb-2", children: "Ready to set sail?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mb-5 max-w-lg mx-auto", children: "The best time to start was a year ago. The second best time is today. Pick one action from this guide and do it before you close this tab." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://www.startupindia.gov.in",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "business.cta.startup_india",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PathButton, { icon: "🇮🇳", children: "Register on Startup India" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://www.fiverr.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "business.cta.fiverr",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PathButton, { icon: "🖥️", children: "Start on Fiverr" })
                    }
                  )
                ] })
              ] })
            }
          )
        ]
      }
    )
  ] });
}
export {
  Business as default
};
