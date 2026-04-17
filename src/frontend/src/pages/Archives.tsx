import { Badge } from "@/components/ui/badge";
import { BookOpen, Globe, Users, Youtube } from "lucide-react";
import { motion } from "motion/react";
import CompassDivider from "../components/CompassDivider";
import ExplorerCard from "../components/ExplorerCard";
import MarkExploredButton from "../components/MarkExploredButton";
import SectionHeader from "../components/SectionHeader";
import {
  expeditionGrounds,
  knowledgeVaults,
  visualRecords,
} from "../data/resources";
import type { ArchiveResource } from "../data/resources";

// ── Type icon ──────────────────────────────────────────────────────────────────
function ResourceIcon({ type }: { type: ArchiveResource["type"] }) {
  const base =
    "flex items-center justify-center w-12 h-12 rounded-full bg-secondary border border-border flex-shrink-0 shadow-maritime";

  if (type === "youtube")
    return (
      <span className={base}>
        <Youtube className="w-5 h-5 text-foreground" strokeWidth={1.5} />
      </span>
    );
  if (type === "community")
    return (
      <span className={base}>
        <Users className="w-5 h-5 text-foreground" strokeWidth={1.5} />
      </span>
    );
  if (type === "website")
    return (
      <span className={base}>
        <Globe className="w-5 h-5 text-foreground" strokeWidth={1.5} />
      </span>
    );
  return (
    <span className={base}>
      <BookOpen className="w-5 h-5 text-foreground" strokeWidth={1.5} />
    </span>
  );
}

// ── Resource card ──────────────────────────────────────────────────────────────
function ResourceCard({
  resource,
  index,
  ocidPrefix,
}: {
  resource: ArchiveResource;
  index: number;
  ocidPrefix: string;
}) {
  const tilt = index % 2 === 0 ? ("left" as const) : ("right" as const);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      data-ocid={`${ocidPrefix}.item.${index + 1}`}
      className="h-full"
    >
      <ExplorerCard tilt={tilt} className="p-6 h-full flex flex-col gap-4">
        {/* Header row: icon + title + badge */}
        <div className="flex items-start gap-4">
          <ResourceIcon type={resource.type} />
          <div className="min-w-0 flex-1">
            <h3 className="font-body font-semibold text-foreground text-base leading-snug mb-1">
              {resource.title}
            </h3>
            <Badge
              variant="outline"
              className="text-xs font-body border-border text-foreground"
            >
              {resource.badge}
            </Badge>
          </div>
        </div>

        {/* Meta row */}
        {(resource.meta || resource.focus) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-body text-muted-foreground">
            {resource.meta && (
              <span className="flex items-center gap-1">
                <span className="text-foreground opacity-60">⚓</span>{" "}
                {resource.meta}
              </span>
            )}
            {resource.focus && (
              <span className="flex items-center gap-1">
                <span className="text-foreground opacity-60">🧭</span>{" "}
                {resource.focus}
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="font-body text-sm leading-relaxed flex-1 text-foreground">
          {resource.description}
        </p>

        {/* CTA */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-secondary font-body text-sm font-medium text-foreground transition-smooth hover:bg-primary hover:border-primary hover:text-primary-foreground self-start shadow-maritime"
          data-ocid={`${ocidPrefix}.open_button.${index + 1}`}
          aria-label={`Open ${resource.title}`}
        >
          Visit Archive →
        </a>
      </ExplorerCard>
    </motion.div>
  );
}

// ── Category section ───────────────────────────────────────────────────────────
function CategorySection({
  icon,
  eyebrow,
  title,
  subtitle,
  resources,
  ocidPrefix,
  bgClass,
}: {
  icon: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  resources: ArchiveResource[];
  ocidPrefix: string;
  bgClass: string;
}) {
  return (
    <section
      className={`py-14 parchment-texture ${bgClass}`}
      data-ocid={`${ocidPrefix}.section`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <SectionHeader
            icon={icon}
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="left"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              index={i}
              ocidPrefix={ocidPrefix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stat badge ─────────────────────────────────────────────────────────────────
function StatBadge({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-lg border border-border bg-secondary/60 shadow-maritime min-w-[120px]">
      <span className="text-2xl">{emoji}</span>
      <span className="font-body text-xs text-foreground text-center leading-snug">
        {label}
      </span>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function Archives() {
  const totalResources =
    visualRecords.length + knowledgeVaults.length + expeditionGrounds.length;

  return (
    <div data-ocid="archives.page" className="bg-[#E8D5B0]">
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="parchment-texture border-b border-border py-16 bg-[#D2B97E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase font-body font-medium mb-3 text-foreground">
              📖 &nbsp;The Admiralty Archives
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4 text-foreground">
              Free Archives
            </h1>
            <p className="font-body text-lg leading-relaxed max-w-2xl mx-auto text-foreground mb-8">
              Handpicked channels, platforms, and communities to accelerate
              every explorer's journey — from first steps to expert voyages.
              Every resource here is free or free to start.
            </p>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-4"
            >
              <StatBadge
                emoji="🎬"
                label={`${visualRecords.length} YouTube Channels`}
              />
              <StatBadge
                emoji="🏛️"
                label={`${knowledgeVaults.length} Learning Platforms`}
              />
              <StatBadge
                emoji="⚓"
                label={`${expeditionGrounds.length} Communities`}
              />
              <StatBadge
                emoji="✦"
                label={`${totalResources} Total Resources`}
              />
            </motion.div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-16 bg-border" />
              <span className="text-muted-foreground">⚓</span>
              <div className="h-px w-16 bg-border" />
            </div>
          </motion.div>
          <div className="mt-6 flex justify-center">
            <MarkExploredButton sectionId="archives" />
          </div>
        </div>
      </section>

      {/* ── Section 1 — Visual Records (YouTube) ──────────────────────────── */}
      <CategorySection
        icon="🎬"
        eyebrow="Visual Records"
        title="YouTube Channels"
        subtitle="The finest free channels for career growth, creative business, productivity, and entrepreneurship — curated for ambitious explorers."
        resources={visualRecords}
        ocidPrefix="archives.youtube"
        bgClass="bg-[#E8D5B0]"
      />

      <CompassDivider label="Knowledge Vaults" />

      {/* ── Section 2 — Knowledge Vaults (Learning Platforms) ─────────────── */}
      <CategorySection
        icon="🏛️"
        eyebrow="Knowledge Vaults"
        title="Learning Platforms"
        subtitle="Structured, free curricula from India's top institutes and global universities — earn skills and certifications without paying a rupee."
        resources={knowledgeVaults}
        ocidPrefix="archives.learning"
        bgClass="bg-[#D9C49A]"
      />

      <CompassDivider label="Expedition Grounds" />

      {/* ── Section 3 — Expedition Grounds (Communities) ──────────────────── */}
      <CategorySection
        icon="⚔️"
        eyebrow="Expedition Grounds"
        title="Communities & Discovery"
        subtitle="Join the forums, subreddits, and hubs where builders, makers, and learners gather to share real lessons and launch real things."
        resources={expeditionGrounds}
        ocidPrefix="archives.communities"
        bgClass="bg-[#E8D5B0]"
      />

      {/* ── Footer CTA strip ──────────────────────────────────────────────── */}
      <section className="parchment-texture border-t border-border py-12 bg-[#C9AA75]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-2xl mb-3">🗺️</p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
              Your Expedition Continues
            </h2>
            <p className="font-body text-base leading-relaxed text-foreground max-w-xl mx-auto mb-6">
              These archives are your provisioning stop — not your final
              destination. Use these resources, then return to the main deck to
              chart your career or global voyage.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-border" />
              <span className="text-muted-foreground font-body text-sm tracking-widest uppercase">
                ⚓ Bon Voyage
              </span>
              <div className="h-px w-12 bg-border" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
