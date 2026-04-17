import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-DLmsKBlQ.js";
import { B as Badge } from "./badge-BLCd9Io7.js";
import { C as CompassDivider, S as SectionHeader, E as ExplorerCard } from "./SectionHeader-B3v_DeuH.js";
import { M as MarkExploredButton } from "./MarkExploredButton-Cx9__lVw.js";
import "./index-C29F0n-q.js";
import "./index-oPS5ip4z.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
];
const Youtube = createLucideIcon("youtube", __iconNode);
const archiveResources = [
  // ── Visual Records — YouTube Channels ─────────────────────────────────────
  {
    id: "ycombinator",
    category: "visual-records",
    type: "youtube",
    title: "Y Combinator",
    description: "Startup strategies, founder advice, and insider lessons straight from the world's most prestigious startup accelerator. Includes their famous Startup School lectures.",
    url: "https://www.youtube.com/@ycombinator",
    badge: "YouTube",
    meta: "1M+ subscribers",
    focus: "Startups & Entrepreneurship"
  },
  {
    id: "slidebean",
    category: "visual-records",
    type: "youtube",
    title: "Slidebean",
    description: "Deep-dive case studies on how iconic companies were built, failed, or pivoted — including pitch deck breakdowns and real startup numbers.",
    url: "https://www.youtube.com/@slidebean",
    badge: "YouTube",
    meta: "900K+ subscribers",
    focus: "Startup Case Studies"
  },
  {
    id: "ali-abdaal",
    category: "visual-records",
    type: "youtube",
    title: "Ali Abdaal",
    description: "Evidence-based productivity, passive income, and building a fulfilling career. Trusted by millions of ambitious students and young professionals worldwide.",
    url: "https://www.youtube.com/@aliabdaal",
    badge: "YouTube",
    meta: "5M+ subscribers",
    focus: "Productivity & Career"
  },
  {
    id: "chris-do",
    category: "visual-records",
    type: "youtube",
    title: "The Futur (Chris Do)",
    description: "Creative business, design thinking, and pricing strategy for freelancers and agency founders. Essential watching for anyone monetising a creative skill.",
    url: "https://www.youtube.com/@thefutur",
    badge: "YouTube",
    meta: "1.7M+ subscribers",
    focus: "Creative Business & Design"
  },
  {
    id: "flux-academy",
    category: "visual-records",
    type: "youtube",
    title: "Flux Academy",
    description: "Web design fundamentals and freelancing mastery — from landing your first client to building a sustainable design studio from scratch.",
    url: "https://www.youtube.com/@flux-academy",
    badge: "YouTube",
    meta: "500K+ subscribers",
    focus: "Web Design & Freelancing"
  },
  // ── Knowledge Vaults — Learning Platforms ─────────────────────────────────
  {
    id: "swayam",
    category: "knowledge-vaults",
    type: "platform",
    title: "SWAYAM",
    description: "India's national online education platform hosting 3,000+ free MOOCs from top universities and institutions across engineering, humanities, law, agriculture, and more.",
    url: "https://swayam.gov.in",
    badge: "Indian MOOC",
    meta: "3,000+ free courses",
    focus: "All Disciplines · Government of India"
  },
  {
    id: "nptel",
    category: "knowledge-vaults",
    type: "platform",
    title: "NPTEL",
    description: "Free video lectures from IITs and IISc — India's finest engineering and science institutes. Earn certificates recognised by top employers and PSUs.",
    url: "https://nptel.ac.in",
    badge: "IIT / IISc",
    meta: "Recognised by top PSUs",
    focus: "Engineering & Sciences"
  },
  {
    id: "khan-academy",
    category: "knowledge-vaults",
    type: "platform",
    title: "Khan Academy",
    description: "A completely free, world-class education for anyone, anywhere. Covers maths, science, computing, economics, and humanities at every level — from school to college.",
    url: "https://www.khanacademy.org",
    badge: "Free Forever",
    meta: "150M+ learners globally",
    focus: "All Subjects · K–12 to University"
  },
  {
    id: "coursera",
    category: "knowledge-vaults",
    type: "platform",
    title: "Coursera",
    description: "University-grade courses from Yale, Stanford, Google, IBM, and 300+ partners. Many are free to audit; financial aid available for certifications.",
    url: "https://www.coursera.org",
    badge: "University Courses",
    meta: "125M+ enrolled learners",
    focus: "Tech, Business & Humanities"
  },
  {
    id: "edx",
    category: "knowledge-vaults",
    type: "platform",
    title: "edX",
    description: "Online courses and MicroBachelors / MicroMasters from Harvard, MIT, and 160+ global institutions. Audit for free or earn verified certificates.",
    url: "https://www.edx.org",
    badge: "Harvard / MIT",
    meta: "45M+ learners",
    focus: "STEM, Business & Policy"
  },
  {
    id: "freecodecamp",
    category: "knowledge-vaults",
    type: "platform",
    title: "freeCodeCamp",
    description: "A fully free, structured coding curriculum covering web dev, data science, machine learning, and information security — with industry-recognised certifications.",
    url: "https://www.freecodecamp.org",
    badge: "100% Free",
    meta: "400M+ lessons completed",
    focus: "Programming & Data Science"
  },
  // ── Expedition Grounds — Communities & Inspiration ─────────────────────────
  {
    id: "indie-hackers",
    category: "expedition-grounds",
    type: "community",
    title: "Indie Hackers",
    description: "Bootstrapped founders share real revenue numbers, growth tactics, and failures openly. An honest look at building profitable internet businesses without VC funding.",
    url: "https://www.indiehackers.com",
    badge: "Community",
    meta: "100K+ founders",
    focus: "Bootstrapped Startups"
  },
  {
    id: "product-hunt",
    category: "expedition-grounds",
    type: "community",
    title: "Product Hunt",
    description: "Discover and launch new products to thousands of early adopters every day. The go-to launchpad for indie makers, startups, and side projects.",
    url: "https://www.producthunt.com",
    badge: "Discovery",
    meta: "5M+ monthly visitors",
    focus: "Product Launches"
  },
  {
    id: "linkedin-learning",
    category: "expedition-grounds",
    type: "platform",
    title: "LinkedIn Learning",
    description: "Professional skill courses in business, creative, and technology — directly tied to your LinkedIn profile. Many accessible free through public libraries.",
    url: "https://www.linkedin.com/learning",
    badge: "Professional",
    meta: "21,000+ courses",
    focus: "Career & Professional Skills"
  },
  {
    id: "reddit-entrepreneur",
    category: "expedition-grounds",
    type: "community",
    title: "r/entrepreneur",
    description: "One of Reddit's largest entrepreneur communities — honest discussions on starting businesses, overcoming challenges, and finding your first customers.",
    url: "https://www.reddit.com/r/entrepreneur",
    badge: "Reddit",
    meta: "2M+ members",
    focus: "Business & Startups"
  },
  {
    id: "reddit-learnprogramming",
    category: "expedition-grounds",
    type: "community",
    title: "r/learnprogramming",
    description: "A supportive Reddit community for beginner and intermediate coders. Ask questions, share resources, and get peer feedback on your learning journey.",
    url: "https://www.reddit.com/r/learnprogramming",
    badge: "Reddit",
    meta: "3.5M+ members",
    focus: "Coding & Tech"
  }
];
const visualRecords = archiveResources.filter(
  (r) => r.category === "visual-records"
);
const knowledgeVaults = archiveResources.filter(
  (r) => r.category === "knowledge-vaults"
);
const expeditionGrounds = archiveResources.filter(
  (r) => r.category === "expedition-grounds"
);
function ResourceIcon({ type }) {
  const base = "flex items-center justify-center w-12 h-12 rounded-full bg-secondary border border-border flex-shrink-0 shadow-maritime";
  if (type === "youtube")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "w-5 h-5 text-foreground", strokeWidth: 1.5 }) });
  if (type === "community")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-foreground", strokeWidth: 1.5 }) });
  if (type === "website")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-foreground", strokeWidth: 1.5 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-foreground", strokeWidth: 1.5 }) });
}
function ResourceCard({
  resource,
  index,
  ocidPrefix
}) {
  const tilt = index % 2 === 0 ? "left" : "right";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.45, delay: index * 0.07 },
      "data-ocid": `${ocidPrefix}.item.${index + 1}`,
      className: "h-full",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt, className: "p-6 h-full flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceIcon, { type: resource.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body font-semibold text-foreground text-base leading-snug mb-1", children: resource.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-xs font-body border-border text-foreground",
                children: resource.badge
              }
            )
          ] })
        ] }),
        (resource.meta || resource.focus) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-xs font-body text-muted-foreground", children: [
          resource.meta && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground opacity-60", children: "⚓" }),
            " ",
            resource.meta
          ] }),
          resource.focus && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground opacity-60", children: "🧭" }),
            " ",
            resource.focus
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm leading-relaxed flex-1 text-foreground", children: resource.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: resource.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-secondary font-body text-sm font-medium text-foreground transition-smooth hover:bg-primary hover:border-primary hover:text-primary-foreground self-start shadow-maritime",
            "data-ocid": `${ocidPrefix}.open_button.${index + 1}`,
            "aria-label": `Open ${resource.title}`,
            children: "Visit Archive →"
          }
        )
      ] })
    }
  );
}
function CategorySection({
  icon,
  eyebrow,
  title,
  subtitle,
  resources,
  ocidPrefix,
  bgClass
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: `py-14 parchment-texture ${bgClass}`,
      "data-ocid": `${ocidPrefix}.section`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4 },
            className: "mb-10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon,
                eyebrow,
                title,
                subtitle,
                align: "left"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: resources.map((resource, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ResourceCard,
          {
            resource,
            index: i,
            ocidPrefix
          },
          resource.id
        )) })
      ] })
    }
  );
}
function StatBadge({ emoji, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1 px-6 py-4 rounded-lg border border-border bg-secondary/60 shadow-maritime min-w-[120px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: emoji }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-foreground text-center leading-snug", children: label })
  ] });
}
function Archives() {
  const totalResources = visualRecords.length + knowledgeVaults.length + expeditionGrounds.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "archives.page", className: "bg-[#E8D5B0]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "parchment-texture border-b border-border py-16 bg-[#D2B97E]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase font-body font-medium mb-3 text-foreground", children: "📖  The Admiralty Archives" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl leading-tight mb-4 text-foreground", children: "Free Archives" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg leading-relaxed max-w-2xl mx-auto text-foreground mb-8", children: "Handpicked channels, platforms, and communities to accelerate every explorer's journey — from first steps to expert voyages. Every resource here is free or free to start." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.3 },
                className: "flex flex-wrap items-center justify-center gap-4 mt-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatBadge,
                    {
                      emoji: "🎬",
                      label: `${visualRecords.length} YouTube Channels`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatBadge,
                    {
                      emoji: "🏛️",
                      label: `${knowledgeVaults.length} Learning Platforms`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatBadge,
                    {
                      emoji: "⚓",
                      label: `${expeditionGrounds.length} Communities`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatBadge,
                    {
                      emoji: "✦",
                      label: `${totalResources} Total Resources`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "⚓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 bg-border" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkExploredButton, { sectionId: "archives" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CategorySection,
      {
        icon: "🎬",
        eyebrow: "Visual Records",
        title: "YouTube Channels",
        subtitle: "The finest free channels for career growth, creative business, productivity, and entrepreneurship — curated for ambitious explorers.",
        resources: visualRecords,
        ocidPrefix: "archives.youtube",
        bgClass: "bg-[#E8D5B0]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Knowledge Vaults" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CategorySection,
      {
        icon: "🏛️",
        eyebrow: "Knowledge Vaults",
        title: "Learning Platforms",
        subtitle: "Structured, free curricula from India's top institutes and global universities — earn skills and certifications without paying a rupee.",
        resources: knowledgeVaults,
        ocidPrefix: "archives.learning",
        bgClass: "bg-[#D9C49A]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Expedition Grounds" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CategorySection,
      {
        icon: "⚔️",
        eyebrow: "Expedition Grounds",
        title: "Communities & Discovery",
        subtitle: "Join the forums, subreddits, and hubs where builders, makers, and learners gather to share real lessons and launch real things.",
        resources: expeditionGrounds,
        ocidPrefix: "archives.communities",
        bgClass: "bg-[#E8D5B0]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "parchment-texture border-t border-border py-12 bg-[#C9AA75]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.45 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl mb-3", children: "🗺️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground mb-3", children: "Your Expedition Continues" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base leading-relaxed text-foreground max-w-xl mx-auto mb-6", children: "These archives are your provisioning stop — not your final destination. Use these resources, then return to the main deck to chart your career or global voyage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-body text-sm tracking-widest uppercase", children: "⚓ Bon Voyage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-border" })
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  Archives as default
};
