import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import CompassDivider from "../components/CompassDivider";
import ExplorerCard from "../components/ExplorerCard";
import MarkExploredButton from "../components/MarkExploredButton";
import SectionHeader from "../components/SectionHeader";
import {
  type ContinentKey,
  continentIcons,
  continentOrder,
  journeySteps,
  scholarshipCountries,
} from "../data/scholarships";
import type { Country, ScholarshipProgram } from "../types";

function smoothScrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Continent Index ──────────────────────────────────────────────────────────

function ContinentIndex({
  grouped,
  activeCountry,
}: {
  grouped: Record<ContinentKey, Country[]>;
  activeCountry: string;
}) {
  return (
    <section
      className="bg-muted/30 parchment-texture border-b border-border py-10"
      data-ocid="global.index_section"
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.25em] uppercase font-body text-muted-foreground text-center mb-8">
          ✦ Chart Your Course — Navigate to a Destination ✦
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {continentOrder.map((continent) => (
            <div key={continent} className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  smoothScrollToId(
                    `continent-${continent.toLowerCase().replace(/\s+/g, "-")}`,
                  )
                }
                className="w-full text-left px-4 py-3 bg-card border border-border rounded-lg shadow-maritime hover:bg-secondary transition-smooth float-on-hover"
                data-ocid={`global.continent.${continent.toLowerCase().replace(/\s+/g, "_")}`}
              >
                <span className="text-2xl block mb-1">
                  {continentIcons[continent]}
                </span>
                <span className="font-body font-semibold text-foreground text-sm block leading-snug">
                  {continent}
                </span>
              </button>
              <ul className="pl-1 space-y-0.5">
                {grouped[continent].map((country) => (
                  <li key={country.id}>
                    <button
                      type="button"
                      onClick={() => smoothScrollToId(`country-${country.id}`)}
                      className={`text-left w-full text-sm font-body py-1 transition-smooth rounded px-2 leading-snug ${
                        activeCountry === country.id
                          ? "text-foreground font-semibold underline underline-offset-2"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      data-ocid={`global.country_link.${country.id}`}
                    >
                      {country.flag} {country.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Program Card ─────────────────────────────────────────────────────────────

function ProgramCard({
  program,
  countryId,
  index,
}: {
  program: ScholarshipProgram;
  countryId: string;
  index: number;
}) {
  const applyUrl = program.url ?? program.applicationUrl ?? "#";
  const isFull = program.fundingLevel?.toLowerCase().includes("fully");

  return (
    <div
      className="bg-background border border-border rounded-xl p-6 shadow-maritime"
      data-ocid={`global.program_card.${countryId}.${index + 1}`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
        <div className="min-w-0">
          <h3 className="font-display text-xl text-foreground leading-snug mb-1">
            {program.name}
          </h3>
          {program.organization && (
            <p className="font-body text-xs text-muted-foreground">
              🏛️ {program.organization}
            </p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <Badge
            variant={isFull ? "default" : "secondary"}
            className="font-body text-xs font-semibold whitespace-nowrap"
          >
            {isFull ? "✦ Fully Funded" : "◎ Partial Funding"}
          </Badge>
          {program.deadlineMonth && (
            <span className="font-body text-xs text-muted-foreground whitespace-nowrap">
              📅 Deadline: {program.deadlineMonth}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
        {program.description}
      </p>

      {/* Eligibility */}
      {program.eligibility && (
        <div className="mb-4 p-3 bg-muted/40 rounded-lg border border-border">
          <p className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-1">
            Eligibility
          </p>
          <p className="font-body text-sm text-foreground leading-relaxed">
            {program.eligibility}
          </p>
        </div>
      )}

      {/* Coverage badges */}
      {(program.coverage ?? []).length > 0 && (
        <div className="mb-4">
          <p className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2">
            What's Covered
          </p>
          <div className="flex flex-wrap gap-2">
            {(program.coverage ?? []).map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="text-xs font-body font-medium"
              >
                ✓ {item}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Benefits */}
      {program.benefits && (
        <p className="font-body text-sm text-foreground leading-relaxed border-t border-border pt-3 mb-4">
          {program.benefits}
        </p>
      )}

      {/* CTA */}
      <a
        href={applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid={`global.program_link.${countryId}.${index + 1}`}
      >
        <Button
          variant="outline"
          className="w-full sm:w-auto font-body font-semibold text-sm transition-smooth hover:bg-secondary"
        >
          Visit Official Site →
        </Button>
      </a>
    </div>
  );
}

// ─── Country Section ──────────────────────────────────────────────────────────

function CountrySection({
  country,
  tilt,
}: {
  country: Country;
  tilt: "left" | "right" | "none";
}) {
  return (
    <motion.div
      id={`country-${country.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      data-ocid={`global.country_section.${country.id}`}
      className="scroll-mt-8"
    >
      <ExplorerCard tilt={tilt} className="p-8">
        {/* Country Header */}
        <div className="flex items-start gap-5 mb-6">
          <span className="text-5xl flex-shrink-0 leading-none">
            {country.flag}
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-3xl text-foreground leading-tight mb-2">
              {country.name}
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {country.overview}
            </p>
          </div>
        </div>

        {/* Why Choose */}
        <div className="mb-6 p-5 bg-muted/30 rounded-lg border border-border">
          <p className="text-xs tracking-[0.2em] uppercase font-body text-muted-foreground mb-3">
            Why Choose {country.name}
          </p>
          <ul className="space-y-2">
            {country.whyChoose.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-2 text-sm font-body text-foreground leading-relaxed"
              >
                <span className="text-muted-foreground flex-shrink-0 mt-0.5 text-base">
                  ✦
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase font-body text-muted-foreground mb-4">
            {country.programs.length === 1
              ? "Featured Program"
              : "Featured Programs"}
          </p>
          <div className="space-y-5">
            {country.programs.map((prog, i) => (
              <ProgramCard
                key={prog.name}
                program={prog}
                countryId={country.id}
                index={i}
              />
            ))}
          </div>
        </div>
      </ExplorerCard>
    </motion.div>
  );
}

// ─── Journey Guide ────────────────────────────────────────────────────────────

function JourneyGuide() {
  return (
    <section
      className="max-w-5xl mx-auto px-6 pb-20"
      data-ocid="global.journey_guide"
    >
      <CompassDivider label="How to Start Your Journey" />
      <p className="font-body text-sm text-muted-foreground text-center mb-10 max-w-xl mx-auto leading-relaxed">
        A step-by-step compass for beginning your international scholarship
        voyage — from choosing a destination to celebrating your award.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {journeySteps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            data-ocid={`global.journey_step.${step.number}`}
          >
            <ExplorerCard tilt="none" hover={false} className="p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-base font-display font-bold text-foreground">
                  {step.number}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="font-body font-semibold text-foreground text-sm leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ExplorerCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Page Root ────────────────────────────────────────────────────────────────

export default function GlobalRegistry() {
  const [activeCountry, setActiveCountry] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const grouped = continentOrder.reduce<Record<ContinentKey, Country[]>>(
    (acc, continent) => {
      acc[continent] = scholarshipCountries.filter(
        (c) => c.continent === continent,
      );
      return acc;
    },
    {} as Record<ContinentKey, Country[]>,
  );

  useEffect(() => {
    const targets = scholarshipCountries.map((c) =>
      document.getElementById(`country-${c.id}`),
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("country-", "");
            setActiveCountry(id);
          }
        }
      },
      { threshold: 0.25 },
    );

    for (const el of targets) {
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-card parchment-texture border-b border-border py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              icon="🌍"
              eyebrow="World Map Registry"
              title="Charting Fully Funded Voyages Across the Globe"
              subtitle="Explore prestigious international scholarships by continent — with complete coverage details, eligibility guides, and step-by-step application roadmaps for ambitious students from India and beyond."
            />
            <div className="mt-6 flex justify-center">
              <MarkExploredButton sectionId="global" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Continent Index */}
      <ContinentIndex grouped={grouped} activeCountry={activeCountry} />

      {/* Country Sections */}
      <div className="max-w-5xl mx-auto px-6 pt-4">
        {continentOrder.map(
          (continent) =>
            grouped[continent].length > 0 && (
              <div
                key={continent}
                id={`continent-${continent.toLowerCase().replace(/\s+/g, "-")}`}
                className="scroll-mt-4"
              >
                <CompassDivider label={continent} />
                <div className="space-y-10 mb-6">
                  {grouped[continent].map((country, i) => (
                    <CountrySection
                      key={country.id}
                      country={country}
                      tilt={i % 2 === 0 ? "left" : "right"}
                    />
                  ))}
                </div>
              </div>
            ),
        )}
      </div>

      {/* Journey Guide */}
      <JourneyGuide />
    </div>
  );
}
