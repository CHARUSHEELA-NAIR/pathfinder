import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import CompassDivider from "../components/CompassDivider";
import ExplorerCard from "../components/ExplorerCard";
import MarkExploredButton from "../components/MarkExploredButton";
import PathButton from "../components/PathButton";
import SectionHeader from "../components/SectionHeader";
import {
  SECTIONS,
  TOTAL_SECTIONS,
  useProgressStore,
} from "../store/progressStore";

// ── SVG Maritime Icons ──────────────────────────────────────────────────────

function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.5"
      />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      {/* North needle */}
      <path d="M32 8 L36.5 28 L32 30 L27.5 28 Z" fill="currentColor" />
      {/* South needle */}
      <path
        d="M32 56 L27.5 36 L32 34 L36.5 36 Z"
        fill="currentColor"
        opacity="0.35"
      />
      {/* West needle */}
      <path
        d="M8 32 L28 27.5 L30 32 L28 36.5 Z"
        fill="currentColor"
        opacity="0.35"
      />
      {/* East needle */}
      <path
        d="M56 32 L36 36.5 L34 32 L36 27.5 Z"
        fill="currentColor"
        opacity="0.35"
      />
      <text
        x="32"
        y="13"
        textAnchor="middle"
        fontSize="5.5"
        fill="currentColor"
        fontFamily="serif"
        fontWeight="bold"
      >
        N
      </text>
      <text
        x="32"
        y="55"
        textAnchor="middle"
        fontSize="5.5"
        fill="currentColor"
        fontFamily="serif"
        opacity="0.6"
      >
        S
      </text>
      <text
        x="10"
        y="34"
        textAnchor="middle"
        fontSize="5.5"
        fill="currentColor"
        fontFamily="serif"
        opacity="0.6"
      >
        W
      </text>
      <text
        x="54"
        y="34"
        textAnchor="middle"
        fontSize="5.5"
        fill="currentColor"
        fontFamily="serif"
        opacity="0.6"
      >
        E
      </text>
    </svg>
  );
}

function AnchorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="14" r="7" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="14" r="3" fill="currentColor" />
      <line
        x1="32"
        y1="21"
        x2="32"
        y2="52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 28 Q15 36 15 44 Q15 54 23 56 Q32 60 41 56 Q49 54 49 44 Q49 36 44 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <line
        x1="22"
        y1="52"
        x2="32"
        y2="52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="52"
        x2="42"
        y2="52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="28"
        x2="42"
        y2="28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" />
      <ellipse
        cx="32"
        cy="32"
        rx="13"
        ry="26"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <line
        x1="6"
        y1="32"
        x2="58"
        y2="32"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 20 Q32 24 54 20"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M10 44 Q32 40 54 44"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M18 9 Q20 20 18 32 Q16 44 18 55"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M46 9 Q44 20 46 32 Q48 44 46 55"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      {/* Tiny ship */}
      <path
        d="M26 28 L38 28 L36 32 L28 32 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

function ShipWheelIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="7" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 32 + 7 * Math.cos(rad);
        const y1 = 32 + 7 * Math.sin(rad);
        const x2 = 32 + 24 * Math.cos(rad);
        const y2 = 32 + 24 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

// ── Voyage Path Data ────────────────────────────────────────────────────────

const voyagePaths = [
  {
    id: "career",
    href: "/career",
    Icon: CompassIcon,
    eyebrow: "Career Discovery",
    title: "Chart Your Path",
    description:
      "Discover your path across every field in India — from arts, medicine, and law to technology, agriculture, design, and beyond. Answer a few questions and get matched to a career with a clear roadmap, skill guide, and free course links.",
    ctaLabel: "Discover Your Career",
    ctaIcon: "🧭",
    tiltDeg: "rotate-[1.5deg]",
    stamp: "CAREER",
  },
  {
    id: "government",
    href: "/government",
    Icon: AnchorIcon,
    eyebrow: "Government Jobs — India",
    title: "Naval Commission",
    description:
      "Navigate UPSC, SSC, Banking and Railways with structured preparation guides, exam calendars, and links to Skill India, SWAYAM, and Digital India programs. Serve the nation with purpose and a clear study plan.",
    ctaLabel: "Explore Government Roles",
    ctaIcon: "🏛️",
    tiltDeg: "rotate-[-1.5deg]",
    stamp: "GOVT",
  },
  {
    id: "global",
    href: "/global",
    Icon: GlobeIcon,
    eyebrow: "Global Opportunities",
    title: "World Voyage Registry",
    description:
      "Explore fully funded international opportunities — MEXT (Japan), DAAD (Germany), Chevening (UK), Fulbright (USA), Vanier (Canada), and Australia Awards. Browse by continent, deadline, and field of study.",
    ctaLabel: "Explore Scholarships",
    ctaIcon: "🌍",
    tiltDeg: "rotate-[1.5deg]",
    stamp: "GLOBAL",
  },
  {
    id: "business",
    href: "/business",
    Icon: ShipWheelIcon,
    eyebrow: "Entrepreneurship",
    title: "Trade Routes",
    description:
      "Chart your entrepreneurial journey — start a freelance career, launch a product, acquire your first clients, and navigate Indian startup schemes like Startup India and MSME funding. From idea to income.",
    ctaLabel: "Start Your Venture",
    ctaIcon: "⛵",
    tiltDeg: "rotate-[-1.5deg]",
    stamp: "TRADE",
  },
];

// ── Inspirational Media ─────────────────────────────────────────────────────

const inspirationalMedia = [
  {
    id: "social-network",
    title: "The Social Network",
    year: "2010",
    type: "Film",
    lesson:
      "How obsession and technical brilliance built a billion-dollar company from a dorm room. A masterclass on entrepreneurship and consequences.",
    searchUrl: "https://www.google.com/search?q=The+Social+Network+2010+film",
    emoji: "🎬",
  },
  {
    id: "pursuit-happyness",
    title: "The Pursuit of Happyness",
    year: "2006",
    type: "Film",
    lesson:
      "Resilience, hustle, and never accepting that your circumstances define your ceiling. One of cinema's most powerful career stories.",
    searchUrl: "https://www.google.com/search?q=The+Pursuit+of+Happyness+film",
    emoji: "💪",
  },
  {
    id: "silicon-valley",
    title: "Silicon Valley",
    year: "2014–2019",
    type: "Series",
    lesson:
      "The chaotic, hilarious reality of building a startup — funding rounds, pivots, and the madness of founders navigating a competitive world.",
    searchUrl: "https://www.google.com/search?q=Silicon+Valley+HBO+series",
    emoji: "💻",
  },
];

// ── Voyage Log Panel ────────────────────────────────────────────────────────

function VoyageLogPanel() {
  const {
    isExplored,
    markExplored,
    markUnexplored,
    getExploredCount,
    resetProgress,
  } = useProgressStore();
  const count = getExploredCount();
  const pct = Math.round((count / TOTAL_SECTIONS) * 100);

  function handleReset() {
    if (window.confirm("Reset all voyage progress? This cannot be undone.")) {
      resetProgress();
    }
  }

  return (
    <section
      className="py-8 bg-muted/30 parchment-texture"
      data-ocid="voyage_log.section"
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <ExplorerCard tilt="none" className="p-8">
            {/* Header row */}
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl flex-shrink-0 mt-0.5" aria-hidden="true">
                🗺️
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-3xl text-foreground leading-tight">
                  Your Voyage Log
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Track which sections of PathFinder you have charted.
                </p>
              </div>
            </div>

            {/* Progress summary */}
            <div className="mb-6" data-ocid="voyage_log.progress_summary">
              <div className="flex items-center justify-between mb-2">
                <span className="font-body text-sm font-semibold text-foreground">
                  You have explored{" "}
                  <span className="font-display text-2xl text-foreground">
                    {count}
                  </span>{" "}
                  of {TOTAL_SECTIONS} sections
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {pct}%
                </span>
              </div>
              {/* Maritime progress bar */}
              <div className="h-3 bg-muted rounded-sm border border-border overflow-hidden relative">
                <motion.div
                  className="h-full bg-foreground rounded-sm"
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                {/* Tick marks */}
                <div className="absolute inset-0 flex">
                  {[1, 2, 3, 4, 5, 6, 7].map((tick) => (
                    <div
                      key={tick}
                      className="flex-1 border-r border-background/30"
                    />
                  ))}
                </div>
              </div>
              {pct === 100 && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-body text-xs text-muted-foreground mt-2 text-center tracking-wide"
                >
                  ⚓ All seas charted. Well voyaged, explorer!
                </motion.p>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-6 opacity-50" />

            {/* Section list */}
            <ul className="space-y-2.5" data-ocid="voyage_log.section_list">
              {SECTIONS.map((section, i) => {
                const explored = isExplored(section.id);
                return (
                  <motion.li
                    key={section.id}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    data-ocid={`voyage_log.item.${i + 1}`}
                    className={[
                      "flex items-center gap-3 px-4 py-3 rounded-sm border transition-smooth",
                      explored
                        ? "bg-foreground/[0.06] border-foreground/20"
                        : "bg-background border-border hover:bg-muted/50",
                    ].join(" ")}
                  >
                    {/* Toggle checkbox */}
                    <button
                      type="button"
                      onClick={() =>
                        explored
                          ? markUnexplored(section.id)
                          : markExplored(section.id)
                      }
                      aria-pressed={explored}
                      aria-label={
                        explored
                          ? `Unmark ${section.label} as explored`
                          : `Mark ${section.label} as explored`
                      }
                      data-ocid={`voyage_log.toggle.${i + 1}`}
                      className={[
                        "w-6 h-6 flex-shrink-0 rounded-sm border-2 flex items-center justify-center transition-smooth",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-foreground",
                        explored
                          ? "bg-foreground border-foreground text-background"
                          : "bg-background border-border hover:border-foreground/60",
                      ].join(" ")}
                    >
                      {explored && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-xs leading-none"
                          aria-hidden="true"
                        >
                          ✓
                        </motion.span>
                      )}
                    </button>

                    {/* Section info */}
                    <Link
                      to={section.route}
                      className="flex-1 min-w-0 group"
                      data-ocid={`voyage_log.link.${i + 1}`}
                    >
                      <span
                        className={[
                          "font-body text-sm leading-snug transition-smooth group-hover:underline underline-offset-2",
                          explored
                            ? "text-foreground font-semibold"
                            : "text-foreground",
                        ].join(" ")}
                      >
                        {section.label}
                      </span>
                    </Link>

                    {/* Stamp badge when explored */}
                    {explored && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                        animate={{ opacity: 1, scale: 1, rotate: -4 }}
                        className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground border border-border px-1.5 py-0.5 rounded-sm flex-shrink-0 select-none"
                        aria-label="Charted"
                      >
                        Charted
                      </motion.span>
                    )}
                  </motion.li>
                );
              })}
            </ul>

            {/* Reset */}
            <div className="mt-6 pt-5 border-t border-border text-center">
              <button
                type="button"
                onClick={handleReset}
                data-ocid="voyage_log.reset_button"
                className="font-body text-xs text-muted-foreground hover:text-destructive transition-smooth underline underline-offset-4 hover:no-underline"
              >
                ↺ Reset Voyage — Clear All Progress
              </button>
            </div>
          </ExplorerCard>
        </motion.div>
      </div>
    </section>
  );
}

// ── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-background">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-card parchment-texture border-b-2 border-border overflow-hidden">
        {/* Background antique map image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-maritime-map.dim_1200x600.jpg')",
          }}
        />

        {/* Corner frame marks */}
        <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-border opacity-40" />
        <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-border opacity-40" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-border opacity-40" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-border opacity-40" />

        {/* Large decorative rotating compass — desktop only */}
        <motion.div
          className="absolute top-1/2 right-8 -translate-y-1/2 text-foreground opacity-[0.05] hidden lg:block pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{
            duration: 80,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          aria-hidden="true"
        >
          <CompassIcon className="w-72 h-72" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            {/* Eyebrow badge */}
            <p className="text-xs tracking-[0.32em] uppercase font-body text-muted-foreground mb-8 flex items-center gap-2.5">
              <span className="opacity-50">✦</span>
              Free · Beginner-Friendly · All Fields in India + Global
              <span className="opacity-50">✦</span>
            </p>

            {/* Compass icon — large animated */}
            <motion.div
              className="text-foreground opacity-70 mb-8 inline-block"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              <CompassIcon className="w-20 h-20 md:w-24 md:h-24" />
            </motion.div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] mb-6 max-w-3xl">
              Chart Your Course
            </h1>

            {/* Ornamental divider */}
            <div className="flex items-center gap-4 my-8 max-w-xs">
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
              <span className="text-foreground opacity-30 text-lg">⚓</span>
              <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
            </div>

            {/* Subheadline */}
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-4">
              PathFinder is your free, beginner-friendly guide to careers,
              government jobs, global scholarships, and entrepreneurship.
            </p>
            <p className="font-body text-base text-muted-foreground max-w-xl leading-relaxed mb-12 opacity-80">
              Covering every field in India — from arts, law, and medicine to
              technology, agriculture, and design — with real roadmaps, free
              resources, and global opportunities.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 items-start"
              data-ocid="hero.cta_group"
            >
              <Link to="/career" data-ocid="hero.primary_button">
                <PathButton
                  icon="🧭"
                  className="text-base px-8 py-4 h-auto shadow-maritime-lg"
                >
                  Begin Your Expedition
                </PathButton>
              </Link>
              <Link to="/global" data-ocid="hero.secondary_button">
                <PathButton
                  icon="🌍"
                  variant="outline"
                  className="text-base px-8 py-4 h-auto"
                >
                  Global Scholarships
                </PathButton>
              </Link>
            </div>

            {/* Mark Home as explored */}
            <div className="mt-8">
              <MarkExploredButton sectionId="home" />
            </div>
          </motion.div>
        </div>

        {/* Bottom ink-fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
      </section>

      {/* ── Divider ────────────────────────────────────────────────── */}
      <CompassDivider
        label="Choose Your Voyage"
        className="px-6 max-w-4xl mx-auto"
      />

      {/* ── Four Voyage Cards ───────────────────────────────────────── */}
      <section className="pb-20 bg-background" data-ocid="paths.section">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-14">
          {voyagePaths.map((path, i) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={path.tiltDeg}
              data-ocid={`paths.item.${i + 1}`}
            >
              <ExplorerCard
                tilt="none"
                className="p-10 relative overflow-hidden"
              >
                {/* Watermark icon */}
                <div className="absolute bottom-6 right-6 text-foreground opacity-[0.035] pointer-events-none">
                  <path.Icon className="w-36 h-36" />
                </div>

                {/* Document stamp */}
                <div
                  className="absolute top-5 right-8 text-foreground opacity-[0.07] font-body text-xs tracking-[0.4em] uppercase rotate-[-20deg] pointer-events-none select-none"
                  aria-hidden="true"
                >
                  {path.stamp}
                </div>

                <div className="relative z-10">
                  {/* Icon + heading row */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 text-foreground opacity-70 mt-1">
                      <path.Icon className="w-16 h-16" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-body mb-2 font-medium">
                        {path.eyebrow}
                      </p>
                      <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                        {path.title}
                      </h2>
                    </div>
                  </div>

                  {/* Ink rule */}
                  <div className="h-px bg-border mb-6 opacity-50" />

                  {/* Description — generous, no truncation */}
                  <p className="font-body text-base md:text-lg text-foreground leading-relaxed mb-8 max-w-2xl">
                    {path.description}
                  </p>

                  {/* CTA */}
                  <Link to={path.href} data-ocid={`paths.set_course.${i + 1}`}>
                    <PathButton
                      icon={path.ctaIcon}
                      className="px-7 py-3 h-auto text-sm font-semibold"
                    >
                      {path.ctaLabel}
                    </PathButton>
                  </Link>
                </div>
              </ExplorerCard>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center font-display text-xl text-muted-foreground mt-16 italic"
          data-ocid="home.tagline"
        >
          All paths are free. All knowledge is yours.
        </motion.p>
      </section>

      {/* ── Captain's Logbook ───────────────────────────────────────── */}
      <CompassDivider
        label="Your Voyage Log"
        className="px-6 max-w-4xl mx-auto"
      />

      {/* ── Progress / Voyage Log Panel ──────────────────────────────── */}
      <VoyageLogPanel />

      {/* ── Captain's Logbook ───────────────────────────────────────── */}
      <CompassDivider
        label="Captain's Logbook"
        className="px-6 max-w-4xl mx-auto"
      />

      <section
        className="py-16 bg-muted/30 parchment-texture"
        data-ocid="inspiration.section"
      >
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            icon="🎬"
            eyebrow="The Captain's Logbook"
            title="Career Inspiration"
            subtitle="Stories of resilience, ambition and grit — films and series worth watching on your voyage."
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {inspirationalMedia.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className={i % 2 === 0 ? "rotate-[1.2deg]" : "rotate-[-0.8deg]"}
                data-ocid={`inspiration.item.${i + 1}`}
              >
                <ExplorerCard
                  tilt="none"
                  className="p-7 flex flex-col gap-4 h-full"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-4xl mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    >
                      {item.emoji}
                    </span>
                    <div className="min-w-0">
                      <span className="text-xs text-muted-foreground font-body block mb-1">
                        {item.type} · {item.year}
                      </span>
                      <h3 className="font-display text-2xl text-foreground leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="h-px bg-border opacity-40" />
                  <p className="font-body text-sm md:text-base text-foreground leading-relaxed flex-1">
                    {item.lesson}
                  </p>
                  <a
                    href={item.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`inspiration.view_record.${i + 1}`}
                    className="inline-flex items-center gap-2 text-sm font-body text-foreground hover:text-muted-foreground transition-smooth underline-offset-2 hover:underline font-medium mt-auto"
                  >
                    📜 View Record →
                  </a>
                </ExplorerCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <CompassDivider className="px-6 max-w-4xl mx-auto" />

      <section
        className="py-24 bg-secondary/20 parchment-texture text-center"
        data-ocid="cta.section"
      >
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Animated ship wheel */}
            <div className="flex justify-center mb-8 text-foreground opacity-50">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              >
                <ShipWheelIcon className="w-20 h-20" />
              </motion.div>
            </div>

            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-5 leading-tight">
              Ready to Set Sail?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg mx-auto">
              Every great explorer had a map. PathFinder is yours — free,
              comprehensive, and built for every Indian student and
              professional, wherever you are starting from.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/career" data-ocid="cta.career_button">
                <PathButton
                  icon="🧭"
                  className="px-8 py-4 h-auto text-base font-semibold shadow-maritime-lg"
                >
                  Discover Careers
                </PathButton>
              </Link>
              <Link to="/global" data-ocid="cta.global_button">
                <PathButton
                  icon="🌍"
                  variant="outline"
                  className="px-8 py-4 h-auto text-base"
                >
                  Global Scholarships
                </PathButton>
              </Link>
            </div>

            {/* Coordinates decoration */}
            <p
              className="mt-12 text-xs text-muted-foreground font-body tracking-[0.2em] opacity-50 select-none"
              aria-hidden="true"
            >
              20.5937°N · 78.9629°E · INDIA
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
