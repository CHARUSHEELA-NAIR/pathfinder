import { j as jsxRuntimeExports, m as motion, L as Link, u as useProgressStore, T as TOTAL_SECTIONS, S as SECTIONS } from "./index-DLmsKBlQ.js";
import { C as CompassDivider, E as ExplorerCard, S as SectionHeader } from "./SectionHeader-B3v_DeuH.js";
import { M as MarkExploredButton } from "./MarkExploredButton-Cx9__lVw.js";
import { P as PathButton } from "./PathButton-C6b6y_Cu.js";
import "./index-oPS5ip4z.js";
import "./button-C0nt2FMv.js";
import "./index-C29F0n-q.js";
function CompassIcon({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 64 64",
      fill: "none",
      className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "32", r: "28", stroke: "currentColor", strokeWidth: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "32",
            cy: "32",
            r: "20",
            stroke: "currentColor",
            strokeWidth: "1",
            strokeDasharray: "2 3",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "32", r: "4", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M32 8 L36.5 28 L32 30 L27.5 28 Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M32 56 L27.5 36 L32 34 L36.5 36 Z",
            fill: "currentColor",
            opacity: "0.35"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M8 32 L28 27.5 L30 32 L28 36.5 Z",
            fill: "currentColor",
            opacity: "0.35"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M56 32 L36 36.5 L34 32 L36 27.5 Z",
            fill: "currentColor",
            opacity: "0.35"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "32",
            y: "13",
            textAnchor: "middle",
            fontSize: "5.5",
            fill: "currentColor",
            fontFamily: "serif",
            fontWeight: "bold",
            children: "N"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "32",
            y: "55",
            textAnchor: "middle",
            fontSize: "5.5",
            fill: "currentColor",
            fontFamily: "serif",
            opacity: "0.6",
            children: "S"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "10",
            y: "34",
            textAnchor: "middle",
            fontSize: "5.5",
            fill: "currentColor",
            fontFamily: "serif",
            opacity: "0.6",
            children: "W"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "54",
            y: "34",
            textAnchor: "middle",
            fontSize: "5.5",
            fill: "currentColor",
            fontFamily: "serif",
            opacity: "0.6",
            children: "E"
          }
        )
      ]
    }
  );
}
function AnchorIcon({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 64 64",
      fill: "none",
      className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "14", r: "7", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "14", r: "3", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "32",
            y1: "21",
            x2: "32",
            y2: "52",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M20 28 Q15 36 15 44 Q15 54 23 56 Q32 60 41 56 Q49 54 49 44 Q49 36 44 28",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "22",
            y1: "52",
            x2: "32",
            y2: "52",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "32",
            y1: "52",
            x2: "42",
            y2: "52",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "22",
            y1: "28",
            x2: "42",
            y2: "28",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function GlobeIcon({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 64 64",
      fill: "none",
      className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "32", r: "26", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: "32",
            cy: "32",
            rx: "13",
            ry: "26",
            stroke: "currentColor",
            strokeWidth: "1.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "6",
            y1: "32",
            x2: "58",
            y2: "32",
            stroke: "currentColor",
            strokeWidth: "1.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M10 20 Q32 24 54 20",
            stroke: "currentColor",
            strokeWidth: "1.4",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M10 44 Q32 40 54 44",
            stroke: "currentColor",
            strokeWidth: "1.4",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M18 9 Q20 20 18 32 Q16 44 18 55",
            stroke: "currentColor",
            strokeWidth: "1",
            fill: "none",
            opacity: "0.4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M46 9 Q44 20 46 32 Q48 44 46 55",
            stroke: "currentColor",
            strokeWidth: "1",
            fill: "none",
            opacity: "0.4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M26 28 L38 28 L36 32 L28 32 Z",
            fill: "currentColor",
            opacity: "0.5"
          }
        )
      ]
    }
  );
}
function ShipWheelIcon({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 64 64",
      fill: "none",
      className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "32", r: "24", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "32", r: "7", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "32", r: "3", fill: "currentColor" }),
        [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = deg * Math.PI / 180;
          const x1 = 32 + 7 * Math.cos(rad);
          const y1 = 32 + 7 * Math.sin(rad);
          const x2 = 32 + 24 * Math.cos(rad);
          const y2 = 32 + 24 * Math.sin(rad);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1,
              y1,
              x2,
              y2,
              stroke: "currentColor",
              strokeWidth: "2.2",
              strokeLinecap: "round"
            },
            deg
          );
        })
      ]
    }
  );
}
const voyagePaths = [
  {
    id: "career",
    href: "/career",
    Icon: CompassIcon,
    eyebrow: "Career Discovery",
    title: "Chart Your Path",
    description: "Discover your path across every field in India — from arts, medicine, and law to technology, agriculture, design, and beyond. Answer a few questions and get matched to a career with a clear roadmap, skill guide, and free course links.",
    ctaLabel: "Discover Your Career",
    ctaIcon: "🧭",
    tiltDeg: "rotate-[1.5deg]",
    stamp: "CAREER"
  },
  {
    id: "government",
    href: "/government",
    Icon: AnchorIcon,
    eyebrow: "Government Jobs — India",
    title: "Naval Commission",
    description: "Navigate UPSC, SSC, Banking and Railways with structured preparation guides, exam calendars, and links to Skill India, SWAYAM, and Digital India programs. Serve the nation with purpose and a clear study plan.",
    ctaLabel: "Explore Government Roles",
    ctaIcon: "🏛️",
    tiltDeg: "rotate-[-1.5deg]",
    stamp: "GOVT"
  },
  {
    id: "global",
    href: "/global",
    Icon: GlobeIcon,
    eyebrow: "Global Opportunities",
    title: "World Voyage Registry",
    description: "Explore fully funded international opportunities — MEXT (Japan), DAAD (Germany), Chevening (UK), Fulbright (USA), Vanier (Canada), and Australia Awards. Browse by continent, deadline, and field of study.",
    ctaLabel: "Explore Scholarships",
    ctaIcon: "🌍",
    tiltDeg: "rotate-[1.5deg]",
    stamp: "GLOBAL"
  },
  {
    id: "business",
    href: "/business",
    Icon: ShipWheelIcon,
    eyebrow: "Entrepreneurship",
    title: "Trade Routes",
    description: "Chart your entrepreneurial journey — start a freelance career, launch a product, acquire your first clients, and navigate Indian startup schemes like Startup India and MSME funding. From idea to income.",
    ctaLabel: "Start Your Venture",
    ctaIcon: "⛵",
    tiltDeg: "rotate-[-1.5deg]",
    stamp: "TRADE"
  }
];
const inspirationalMedia = [
  {
    id: "social-network",
    title: "The Social Network",
    year: "2010",
    type: "Film",
    lesson: "How obsession and technical brilliance built a billion-dollar company from a dorm room. A masterclass on entrepreneurship and consequences.",
    searchUrl: "https://www.google.com/search?q=The+Social+Network+2010+film",
    emoji: "🎬"
  },
  {
    id: "pursuit-happyness",
    title: "The Pursuit of Happyness",
    year: "2006",
    type: "Film",
    lesson: "Resilience, hustle, and never accepting that your circumstances define your ceiling. One of cinema's most powerful career stories.",
    searchUrl: "https://www.google.com/search?q=The+Pursuit+of+Happyness+film",
    emoji: "💪"
  },
  {
    id: "silicon-valley",
    title: "Silicon Valley",
    year: "2014–2019",
    type: "Series",
    lesson: "The chaotic, hilarious reality of building a startup — funding rounds, pivots, and the madness of founders navigating a competitive world.",
    searchUrl: "https://www.google.com/search?q=Silicon+Valley+HBO+series",
    emoji: "💻"
  }
];
function VoyageLogPanel() {
  const {
    isExplored,
    markExplored,
    markUnexplored,
    getExploredCount,
    resetProgress
  } = useProgressStore();
  const count = getExploredCount();
  const pct = Math.round(count / TOTAL_SECTIONS * 100);
  function handleReset() {
    if (window.confirm("Reset all voyage progress? This cannot be undone.")) {
      resetProgress();
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-8 bg-muted/30 parchment-texture",
      "data-ocid": "voyage_log.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.55 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "none", className: "p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl flex-shrink-0 mt-0.5", "aria-hidden": "true", children: "🗺️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-foreground leading-tight", children: "Your Voyage Log" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mt-1", children: "Track which sections of PathFinder you have charted." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", "data-ocid": "voyage_log.progress_summary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm font-semibold text-foreground", children: [
                  "You have explored",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-foreground", children: count }),
                  " ",
                  "of ",
                  TOTAL_SECTIONS,
                  " sections"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
                  pct,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-3 bg-muted rounded-sm border border-border overflow-hidden relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "h-full bg-foreground rounded-sm",
                    initial: { width: 0 },
                    animate: { width: `${pct}%` },
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex", children: [1, 2, 3, 4, 5, 6, 7].map((tick) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1 border-r border-background/30"
                  },
                  tick
                )) })
              ] }),
              pct === 100 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  className: "font-body text-xs text-muted-foreground mt-2 text-center tracking-wide",
                  children: "⚓ All seas charted. Well voyaged, explorer!"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border mb-6 opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", "data-ocid": "voyage_log.section_list", children: SECTIONS.map((section, i) => {
              const explored = isExplored(section.id);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.li,
                {
                  initial: { opacity: 0, x: -12 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.3, delay: i * 0.05 },
                  "data-ocid": `voyage_log.item.${i + 1}`,
                  className: [
                    "flex items-center gap-3 px-4 py-3 rounded-sm border transition-smooth",
                    explored ? "bg-foreground/[0.06] border-foreground/20" : "bg-background border-border hover:bg-muted/50"
                  ].join(" "),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => explored ? markUnexplored(section.id) : markExplored(section.id),
                        "aria-pressed": explored,
                        "aria-label": explored ? `Unmark ${section.label} as explored` : `Mark ${section.label} as explored`,
                        "data-ocid": `voyage_log.toggle.${i + 1}`,
                        className: [
                          "w-6 h-6 flex-shrink-0 rounded-sm border-2 flex items-center justify-center transition-smooth",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-foreground",
                          explored ? "bg-foreground border-foreground text-background" : "bg-background border-border hover:border-foreground/60"
                        ].join(" "),
                        children: explored && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.span,
                          {
                            initial: { scale: 0 },
                            animate: { scale: 1 },
                            className: "text-xs leading-none",
                            "aria-hidden": "true",
                            children: "✓"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: section.route,
                        className: "flex-1 min-w-0 group",
                        "data-ocid": `voyage_log.link.${i + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: [
                              "font-body text-sm leading-snug transition-smooth group-hover:underline underline-offset-2",
                              explored ? "text-foreground font-semibold" : "text-foreground"
                            ].join(" "),
                            children: section.label
                          }
                        )
                      }
                    ),
                    explored && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        initial: { opacity: 0, scale: 0.7, rotate: -8 },
                        animate: { opacity: 1, scale: 1, rotate: -4 },
                        className: "font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground border border-border px-1.5 py-0.5 rounded-sm flex-shrink-0 select-none",
                        "aria-label": "Charted",
                        children: "Charted"
                      }
                    )
                  ]
                },
                section.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-5 border-t border-border text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleReset,
                "data-ocid": "voyage_log.reset_button",
                className: "font-body text-xs text-muted-foreground hover:text-destructive transition-smooth underline underline-offset-4 hover:no-underline",
                children: "↺ Reset Voyage — Clear All Progress"
              }
            ) })
          ] })
        }
      ) })
    }
  );
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-card parchment-texture border-b-2 border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none",
          style: {
            backgroundImage: "url('/assets/generated/hero-maritime-map.dim_1200x600.jpg')"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-border opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-border opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-border opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-border opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute top-1/2 right-8 -translate-y-1/2 text-foreground opacity-[0.05] hidden lg:block pointer-events-none",
          animate: { rotate: 360 },
          transition: {
            duration: 80,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          },
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompassIcon, { className: "w-72 h-72" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 py-20 md:py-32 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs tracking-[0.32em] uppercase font-body text-muted-foreground mb-8 flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "✦" }),
              "Free · Beginner-Friendly · All Fields in India + Global",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "✦" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "text-foreground opacity-70 mb-8 inline-block",
                animate: { rotate: [0, 5, -5, 0] },
                transition: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                },
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompassIcon, { className: "w-20 h-20 md:w-24 md:h-24" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] mb-6 max-w-3xl", children: "Chart Your Course" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 my-8 max-w-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-border to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground opacity-30 text-lg", children: "⚓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-gradient-to-l from-border to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-4", children: "PathFinder is your free, beginner-friendly guide to careers, government jobs, global scholarships, and entrepreneurship." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-muted-foreground max-w-xl leading-relaxed mb-12 opacity-80", children: "Covering every field in India — from arts, law, and medicine to technology, agriculture, and design — with real roadmaps, free resources, and global opportunities." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col sm:flex-row gap-4 items-start",
                "data-ocid": "hero.cta_group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/career", "data-ocid": "hero.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    PathButton,
                    {
                      icon: "🧭",
                      className: "text-base px-8 py-4 h-auto shadow-maritime-lg",
                      children: "Begin Your Expedition"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/global", "data-ocid": "hero.secondary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    PathButton,
                    {
                      icon: "🌍",
                      variant: "outline",
                      className: "text-base px-8 py-4 h-auto",
                      children: "Global Scholarships"
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkExploredButton, { sectionId: "home" }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CompassDivider,
      {
        label: "Choose Your Voyage",
        className: "px-6 max-w-4xl mx-auto"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pb-20 bg-background", "data-ocid": "paths.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-6 flex flex-col gap-14", children: voyagePaths.map((path, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 48 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, delay: i * 0.08 },
          className: path.tiltDeg,
          "data-ocid": `paths.item.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ExplorerCard,
            {
              tilt: "none",
              className: "p-10 relative overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 right-6 text-foreground opacity-[0.035] pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(path.Icon, { className: "w-36 h-36" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-5 right-8 text-foreground opacity-[0.07] font-body text-xs tracking-[0.4em] uppercase rotate-[-20deg] pointer-events-none select-none",
                    "aria-hidden": "true",
                    children: path.stamp
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-6 mb-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 text-foreground opacity-70 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(path.Icon, { className: "w-16 h-16" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground font-body mb-2 font-medium", children: path.eyebrow }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground leading-tight", children: path.title })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border mb-6 opacity-50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base md:text-lg text-foreground leading-relaxed mb-8 max-w-2xl", children: path.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: path.href, "data-ocid": `paths.set_course.${i + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    PathButton,
                    {
                      icon: path.ctaIcon,
                      className: "px-7 py-3 h-auto text-sm font-semibold",
                      children: path.ctaLabel
                    }
                  ) })
                ] })
              ]
            }
          )
        },
        path.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: 0.3 },
          className: "text-center font-display text-xl text-muted-foreground mt-16 italic",
          "data-ocid": "home.tagline",
          children: "All paths are free. All knowledge is yours."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CompassDivider,
      {
        label: "Your Voyage Log",
        className: "px-6 max-w-4xl mx-auto"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VoyageLogPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CompassDivider,
      {
        label: "Captain's Logbook",
        className: "px-6 max-w-4xl mx-auto"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/30 parchment-texture",
        "data-ocid": "inspiration.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              icon: "🎬",
              eyebrow: "The Captain's Logbook",
              title: "Career Inspiration",
              subtitle: "Stories of resilience, ambition and grit — films and series worth watching on your voyage.",
              className: "mb-12"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: inspirationalMedia.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45, delay: i * 0.12 },
              className: i % 2 === 0 ? "rotate-[1.2deg]" : "rotate-[-0.8deg]",
              "data-ocid": `inspiration.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                ExplorerCard,
                {
                  tilt: "none",
                  className: "p-7 flex flex-col gap-4 h-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-4xl mt-0.5 flex-shrink-0",
                          "aria-hidden": "true",
                          children: item.emoji
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-body block mb-1", children: [
                          item.type,
                          " · ",
                          item.year
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground leading-tight", children: item.title })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border opacity-40" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm md:text-base text-foreground leading-relaxed flex-1", children: item.lesson }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: item.searchUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-ocid": `inspiration.view_record.${i + 1}`,
                        className: "inline-flex items-center gap-2 text-sm font-body text-foreground hover:text-muted-foreground transition-smooth underline-offset-2 hover:underline font-medium mt-auto",
                        children: "📜 View Record →"
                      }
                    )
                  ]
                }
              )
            },
            item.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { className: "px-6 max-w-4xl mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 bg-secondary/20 parchment-texture text-center",
        "data-ocid": "cta.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.65 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-8 text-foreground opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { rotate: [0, 10, -10, 0] },
                  transition: {
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  },
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShipWheelIcon, { className: "w-20 h-20" })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl text-foreground mb-5 leading-tight", children: "Ready to Set Sail?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg mx-auto", children: "Every great explorer had a map. PathFinder is yours — free, comprehensive, and built for every Indian student and professional, wherever you are starting from." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/career", "data-ocid": "cta.career_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PathButton,
                  {
                    icon: "🧭",
                    className: "px-8 py-4 h-auto text-base font-semibold shadow-maritime-lg",
                    children: "Discover Careers"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/global", "data-ocid": "cta.global_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PathButton,
                  {
                    icon: "🌍",
                    variant: "outline",
                    className: "px-8 py-4 h-auto text-base",
                    children: "Global Scholarships"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "mt-12 text-xs text-muted-foreground font-body tracking-[0.2em] opacity-50 select-none",
                  "aria-hidden": "true",
                  children: "20.5937°N · 78.9629°E · INDIA"
                }
              )
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  Home as default
};
