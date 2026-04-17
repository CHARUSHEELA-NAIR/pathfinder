import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import CompassDivider from "../components/CompassDivider";
import ExplorerCard from "../components/ExplorerCard";
import PathButton from "../components/PathButton";
import SectionHeader from "../components/SectionHeader";
import { careersById } from "../data/careers";
import { useProgressStore } from "../store/progressStore";
import type { FreeResource, RoadmapStep } from "../types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const RESOURCE_ICON: Record<string, string> = {
  video: "🎬",
  course: "📚",
  article: "📄",
  website: "🌐",
};

const RESOURCE_LABEL: Record<string, string> = {
  video: "Video",
  course: "Course",
  article: "Article",
  website: "Website",
};

function resolveType(res: FreeResource): string {
  return res.type ?? res.resourceType ?? "website";
}

function isRoadmapStep(step: RoadmapStep | string): step is RoadmapStep {
  return typeof step === "object" && step !== null && "title" in step;
}

function getPhaseLabelForStep(stepIndex: number, total: number): string | null {
  if (stepIndex === 0) return "Setting Sail";
  const quarterMark = Math.floor(total * 0.25);
  const halfMark = Math.floor(total * 0.5);
  const threeQuarterMark = Math.floor(total * 0.75);
  const lastMark = total - 1;

  if (stepIndex === quarterMark && quarterMark !== 0) return "On Course";
  if (stepIndex === halfMark && halfMark !== quarterMark) return "Deep Waters";
  if (stepIndex === threeQuarterMark && threeQuarterMark !== halfMark)
    return "Charting Unknown Seas";
  if (stepIndex === lastMark && lastMark !== threeQuarterMark && total > 1)
    return "Expert Navigator";
  return null;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SkillTags({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-3" data-ocid="career_detail.skills_list">
      {skills.map((skill, i) => (
        <span
          key={skill}
          data-ocid={`career_skills.item.${i + 1}`}
          className="px-3 py-1.5 bg-secondary border border-border rounded-md text-sm font-body text-foreground shadow-maritime"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

// ─── Phase Badge ──────────────────────────────────────────────────────────────

const PHASE_ICONS: Record<string, string> = {
  "Setting Sail": "⚓",
  "On Course": "🧭",
  "Deep Waters": "🌊",
  "Charting Unknown Seas": "🗺️",
  "Expert Navigator": "⭐",
};

function PhaseBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-border" />
      <div
        className="flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-border bg-secondary shadow-maritime"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span>{PHASE_ICONS[label] ?? "✦"}</span>
        <span className="text-sm font-semibold text-foreground tracking-wide">
          {label}
        </span>
      </div>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// ─── Guided Roadmap ───────────────────────────────────────────────────────────

interface GuidedRoadmapProps {
  careerId: string;
  steps: (RoadmapStep | string)[];
}

function GuidedRoadmap({ careerId, steps }: GuidedRoadmapProps) {
  const { markStepComplete, unmarkStepComplete, getCareerProgress } =
    useProgressStore();

  const normalizedSteps = steps.map((step, i) => {
    if (isRoadmapStep(step)) return step;
    return {
      step: i + 1,
      title: String(step),
      duration: undefined as string | undefined,
      description: "",
    } as RoadmapStep & { duration?: string };
  });

  const total = normalizedSteps.length;
  const { completed } = getCareerProgress(careerId, total);
  const completedCount = completed.size;
  const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  const allDone = completedCount === total && total > 0;

  // First uncompleted step index
  const currentStepIndex = normalizedSteps.findIndex(
    (s) => !completed.has(s.step),
  );

  function toggle(stepNum: number) {
    if (completed.has(stepNum)) {
      unmarkStepComplete(careerId, stepNum);
    } else {
      markStepComplete(careerId, stepNum);
    }
  }

  return (
    <div data-ocid="career_roadmap.guided_journey">
      {/* Progress gauge */}
      <div
        className="mb-8 p-5 rounded-xl border-2 border-border bg-secondary/60 shadow-maritime parchment-texture"
        data-ocid="career_roadmap.progress_panel"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧭</span>
            <span
              className="font-body font-semibold text-foreground text-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Voyage Progress
            </span>
          </div>
          <span className="font-body text-sm font-bold text-foreground">
            {completedCount} of {total} milestones
          </span>
        </div>
        {/* Ship's log gauge bar */}
        <div className="relative h-4 rounded-full bg-muted border border-border overflow-hidden shadow-inner">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.65 0.12 60), oklch(0.72 0.14 50))",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          {pct > 10 && (
            <span
              className="absolute inset-0 flex items-center justify-center text-xs font-bold"
              style={{ color: "oklch(0.22 0.06 30)", fontSize: "0.65rem" }}
            >
              {pct}%
            </span>
          )}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs font-body text-muted-foreground">
            Departed
          </span>
          <span className="text-xs font-body text-muted-foreground">
            Expert Navigator
          </span>
        </div>
      </div>

      {/* Voyage Complete celebration */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8 p-7 rounded-2xl border-4 border-border bg-secondary parchment-texture shadow-maritime-lg text-center relative overflow-hidden"
            data-ocid="career_roadmap.voyage_complete"
          >
            {/* Decorative corners */}
            <div className="absolute top-3 left-3 text-2xl opacity-30">✦</div>
            <div className="absolute top-3 right-3 text-2xl opacity-30">✦</div>
            <div className="absolute bottom-3 left-3 text-2xl opacity-30">
              ✦
            </div>
            <div className="absolute bottom-3 right-3 text-2xl opacity-30">
              ✦
            </div>

            <div className="text-5xl mb-3 float-subtle">⭐</div>
            <h3
              className="font-display text-3xl text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Voyage Complete!
            </h3>
            <div className="inline-block px-4 py-1 border-2 border-border rounded bg-muted text-xs font-body font-bold text-foreground tracking-widest uppercase mb-3">
              ✦ Expert Navigator Certified ✦
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
              You've charted every milestone on this voyage. A true navigator
              knows no limits — the seas of mastery are yours to command.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Steps */}
      <div className="space-y-0" data-ocid="career_roadmap.steps_list">
        {normalizedSteps.map((step, i) => {
          const isCompleted = completed.has(step.step);
          const isCurrent = !allDone && i === currentStepIndex;
          const phaseLabel = getPhaseLabelForStep(i, total);
          const dur = (step as RoadmapStep & { duration?: string }).duration;

          return (
            <div key={`step-${step.step}`}>
              {/* Phase header */}
              {phaseLabel && <PhaseBadge label={phaseLabel} />}

              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className="flex gap-4 items-stretch"
                data-ocid={`career_roadmap.item.${i + 1}`}
              >
                {/* Connector line + circle */}
                <div className="flex flex-col items-center flex-shrink-0 w-10">
                  {/* Stamp/wax seal checkbox */}
                  <button
                    type="button"
                    onClick={() => toggle(step.step)}
                    aria-label={
                      isCompleted
                        ? `Mark step ${step.step} incomplete`
                        : `Mark step ${step.step} complete`
                    }
                    data-ocid={`career_roadmap.checkbox.${i + 1}`}
                    className={[
                      "w-10 h-10 rounded-full border-4 flex items-center justify-center flex-shrink-0 transition-smooth shadow-maritime focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none relative",
                      isCompleted
                        ? "border-foreground bg-foreground text-background"
                        : isCurrent
                          ? "border-foreground bg-secondary animate-pulse-gentle"
                          : "border-border bg-muted hover:border-foreground/60 hover:bg-secondary",
                    ].join(" ")}
                    style={
                      isCurrent && !isCompleted
                        ? {
                            boxShadow:
                              "0 0 0 4px oklch(0.78 0.08 75 / 0.4), 0 4px 12px rgba(62,39,35,0.2)",
                          }
                        : undefined
                    }
                  >
                    {isCompleted ? (
                      <span className="text-base">✓</span>
                    ) : (
                      <span className="text-sm font-bold font-body text-foreground">
                        {step.step}
                      </span>
                    )}
                  </button>
                  {/* Connector line */}
                  {i < total - 1 && (
                    <div
                      className={[
                        "w-0.5 flex-1 min-h-6 my-1 rounded transition-smooth",
                        isCompleted ? "bg-foreground/60" : "bg-border",
                      ].join(" ")}
                    />
                  )}
                </div>

                {/* Card body */}
                <div
                  className={[
                    "flex-1 mb-4 min-w-0 rounded-xl border-2 p-5 parchment-texture transition-smooth",
                    isCompleted
                      ? "border-border bg-muted/60 opacity-75"
                      : isCurrent
                        ? "border-foreground bg-card shadow-maritime-lg"
                        : "border-border bg-card shadow-maritime hover:shadow-maritime-lg hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  {/* Current step label */}
                  {isCurrent && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-sm">🧭</span>
                      <span className="text-xs font-body font-bold text-foreground uppercase tracking-widest">
                        Your next step
                      </span>
                    </div>
                  )}

                  {/* Completed stamp */}
                  {isCompleted && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-sm">✦</span>
                      <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest line-through">
                        Completed
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <h3
                      className={[
                        "font-body font-semibold text-base leading-snug",
                        isCompleted
                          ? "text-muted-foreground line-through"
                          : "text-foreground",
                      ].join(" ")}
                    >
                      {step.title}
                    </h3>
                    {dur && (
                      <span className="text-xs font-body text-muted-foreground bg-muted px-2.5 py-1 rounded border border-border flex-shrink-0">
                        ⏱ {dur}
                      </span>
                    )}
                  </div>

                  {step.description && (
                    <p
                      className={[
                        "font-body text-sm leading-relaxed mt-2",
                        isCompleted
                          ? "text-muted-foreground/70"
                          : "text-muted-foreground",
                      ].join(" ")}
                    >
                      {step.description}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ResourceCard({ res, index }: { res: FreeResource; index: number }) {
  const type = resolveType(res);
  return (
    <a
      href={res.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:bg-secondary transition-smooth group"
      data-ocid={`career_resources.item.${index + 1}`}
    >
      <span className="text-2xl flex-shrink-0 mt-0.5">
        {RESOURCE_ICON[type] ?? "📖"}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-body text-sm font-semibold text-foreground group-hover:underline leading-snug mb-1">
          {res.title}
        </p>
        {res.description && (
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            {res.description}
          </p>
        )}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs font-body text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border">
            {RESOURCE_LABEL[type] ?? "Resource"}
          </span>
          {res.isFree !== false && (
            <span className="text-xs font-body text-foreground bg-secondary px-2 py-0.5 rounded border border-border">
              ✦ Free
            </span>
          )}
        </div>
      </div>
      <span className="ml-auto text-muted-foreground text-base flex-shrink-0 group-hover:translate-x-0.5 transition-smooth">
        →
      </span>
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CareerDetail() {
  const { id } = useParams({ from: "/career/$id" });

  const localCareer = careersById[id];

  if (!localCareer) {
    return (
      <div
        className="max-w-2xl mx-auto px-6 py-24 text-center"
        data-ocid="career_detail.empty_state"
      >
        <span className="text-6xl block mb-5">⚓</span>
        <h2 className="font-display text-3xl text-foreground mb-4">
          Uncharted Territory
        </h2>
        <p className="font-body text-muted-foreground mb-10 leading-relaxed max-w-sm mx-auto">
          This career path hasn't been charted yet. Return to the navigation map
          and explore other routes.
        </p>
        <Link to="/career" data-ocid="career_detail.back_link">
          <PathButton icon="🧭">Return to Career Map</PathButton>
        </Link>
      </div>
    );
  }

  const skills = localCareer.skills ?? [];
  const roadmap = localCareer.roadmap ?? [];
  const projects = localCareer.projects ?? [];
  const resources = localCareer.resources ?? [];
  const resumeTips = localCareer.resumeTips ?? [];
  const salaryRange: string | undefined = undefined;
  const jobOutlook: string | undefined = undefined;
  const hasAtAGlance = !!(salaryRange ?? jobOutlook ?? skills.length > 0);

  return (
    <div className="bg-background" data-ocid="career_detail.page">
      {/* Hero Header */}
      <section className="bg-card parchment-texture border-b border-border py-14">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-8"
              aria-label="Breadcrumb"
              data-ocid="career_detail.breadcrumb"
            >
              <Link
                to="/career"
                className="hover:text-foreground transition-smooth hover:underline"
                data-ocid="career_detail.back_link"
              >
                Career Paths
              </Link>
              <span className="text-border">›</span>
              <span className="text-foreground font-medium">
                {localCareer.title}
              </span>
            </nav>

            {/* Career identity */}
            <div className="flex items-start gap-6">
              <span className="text-5xl flex-shrink-0 float-subtle">
                {localCareer.icon}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                    {localCareer.title}
                  </h1>
                  <Badge
                    variant="secondary"
                    className="font-body text-sm flex-shrink-0"
                  >
                    {localCareer.category}
                  </Badge>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed max-w-2xl text-base">
                  {localCareer.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* At-a-Glance Panel */}
        {hasAtAGlance && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            data-ocid="career_detail.at_a_glance_panel"
          >
            <ExplorerCard tilt="left" className="p-7">
              <SectionHeader
                icon="🔭"
                title="At a Glance"
                align="left"
                className="mb-6"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {salaryRange && (
                  <div className="space-y-1">
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-widest">
                      Salary Range
                    </p>
                    <p className="font-body font-semibold text-foreground text-lg">
                      {salaryRange}
                    </p>
                  </div>
                )}
                {jobOutlook && (
                  <div className="space-y-1">
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-widest">
                      Job Outlook
                    </p>
                    <p className="font-body font-semibold text-foreground text-lg">
                      {jobOutlook}
                    </p>
                  </div>
                )}
              </div>
              {skills.length > 0 && (
                <>
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-widest mb-3">
                    Key Skills
                  </p>
                  <SkillTags skills={skills} />
                </>
              )}
            </ExplorerCard>
          </motion.div>
        )}

        <CompassDivider label="Guided Voyage" />

        {/* Interactive Guided Roadmap */}
        {roadmap.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <ExplorerCard tilt="right" className="p-7">
              <SectionHeader
                icon="🗺️"
                title="Your Guided Voyage"
                align="left"
                className="mb-6"
              />
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                Follow each milestone in order — tick off a step when you've
                completed it to chart your progress toward expertise.
              </p>
              <GuidedRoadmap careerId={id} steps={roadmap} />
            </ExplorerCard>
          </motion.div>
        )}

        {projects.length > 0 && (
          <>
            <CompassDivider label="Projects" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <ExplorerCard tilt="left" className="p-7">
                <SectionHeader
                  icon="🔧"
                  title="Projects to Build"
                  align="left"
                  className="mb-5"
                />
                <ul
                  className="space-y-4"
                  data-ocid="career_detail.projects_list"
                >
                  {projects.map((project, i) => {
                    const parts = project.split(" — ");
                    const title = parts[0];
                    const detail = parts.slice(1).join(" — ");
                    return (
                      <li
                        key={title}
                        className="flex items-start gap-4"
                        data-ocid={`career_projects.item.${i + 1}`}
                      >
                        <span className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-body font-semibold text-foreground flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="font-body font-medium text-foreground text-sm">
                            {title}
                          </p>
                          {detail && (
                            <p className="font-body text-xs text-muted-foreground mt-0.5 leading-relaxed">
                              {detail}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ExplorerCard>
            </motion.div>
          </>
        )}

        <CompassDivider label="Free Resources" />

        {resources.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <ExplorerCard tilt="right" className="p-7">
              <SectionHeader
                icon="📚"
                title="Free Learning Resources"
                align="left"
                className="mb-5"
              />
              <div
                className="space-y-3"
                data-ocid="career_detail.resources_list"
              >
                {resources.map((res) => (
                  <ResourceCard
                    key={res.title}
                    res={res}
                    index={resources.indexOf(res)}
                  />
                ))}
              </div>
            </ExplorerCard>
          </motion.div>
        )}

        {resumeTips.length > 0 && (
          <>
            <CompassDivider label="Resume Tips" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <ExplorerCard tilt="left" className="p-7">
                <SectionHeader
                  icon="📋"
                  title="Resume & Portfolio Tips"
                  align="left"
                  className="mb-5"
                />
                <ol
                  className="space-y-4"
                  data-ocid="career_detail.resume_tips_list"
                >
                  {resumeTips.map((tip, i) => (
                    <li
                      key={tip.slice(0, 40)}
                      className="flex items-start gap-4 font-body text-foreground text-sm"
                      data-ocid={`career_resume.item.${i + 1}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-semibold text-foreground flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ol>
              </ExplorerCard>
            </motion.div>
          </>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="pb-10"
        >
          <div className="text-center">
            <CompassDivider className="mb-10" />
            <p className="font-display text-xl text-foreground mb-2">
              Ready to chart another course?
            </p>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Explore all career paths across every field in India.
            </p>
            <Link to="/career" data-ocid="career_detail.back_to_careers_button">
              <PathButton icon="🧭">Back to Career Paths</PathButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
