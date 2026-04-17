import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import CompassDivider from "../components/CompassDivider";
import ExplorerCard from "../components/ExplorerCard";
import MarkExploredButton from "../components/MarkExploredButton";
import PathButton from "../components/PathButton";
import SectionHeader from "../components/SectionHeader";
import {
  allCareers,
  careerFields,
  careersById,
  getMatchScore,
  matchCareers,
  quizQuestions,
} from "../data/careers";
import type { CareerData } from "../data/careers";
import { useProgressStore } from "../store/progressStore";

// Local helper — reads careerProgress from store until the parallel task merges getCareerCompletionPercentage
function useCareerCompletion(careerId: string, totalSteps: number): number {
  const store = useProgressStore() as unknown as {
    careerProgress?: Record<string, Set<number>>;
    getCareerCompletionPercentage?: (
      careerId: string,
      totalSteps: number,
    ) => number;
  };
  if (typeof store.getCareerCompletionPercentage === "function") {
    return store.getCareerCompletionPercentage(careerId, totalSteps);
  }
  if (store.careerProgress && totalSteps > 0) {
    const done = store.careerProgress[careerId]?.size ?? 0;
    return Math.round((done / totalSteps) * 100);
  }
  return 0;
}

type Phase = "quiz" | "results";

// ─── Career Progress Badge ────────────────────────────────────────────────────

function CareerProgressBadge({
  careerId,
  totalSteps,
}: { careerId: string; totalSteps: number }) {
  const completion = useCareerCompletion(careerId, totalSteps);

  if (completion === 0 || totalSteps === 0) return null;

  if (completion >= 100) {
    return (
      <span
        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-body font-semibold border-2 border-dashed"
        style={{
          background:
            "oklch(from var(--color-background) calc(l - 0.04) calc(c + 0.01) 145)",
          borderColor: "oklch(0.45 0.12 145)",
          color: "oklch(0.35 0.12 145)",
          boxShadow: "inset 0 1px 2px oklch(0 0 0 / 0.08)",
        }}
        data-ocid={`career.voyage_complete_badge.${careerId}`}
        title="You've completed all steps for this career path"
      >
        ✓ Voyage Complete
      </span>
    );
  }

  // Partial progress
  const completedSteps = Math.round((completion / 100) * totalSteps);
  return (
    <span
      className="inline-flex flex-col gap-1 px-2.5 py-1.5 rounded font-body text-xs border"
      style={{
        background: "oklch(0.93 0.04 75)",
        borderColor: "oklch(0.72 0.09 75)",
        color: "oklch(0.38 0.09 55)",
      }}
      data-ocid={`career.progress_badge.${careerId}`}
      title={`${completedSteps} of ${totalSteps} steps completed`}
    >
      <span className="font-semibold leading-none">
        {completedSteps}/{totalSteps} steps
      </span>
      <span
        className="h-1 rounded-full overflow-hidden w-16"
        style={{ background: "oklch(0.82 0.05 75)" }}
      >
        <span
          className="block h-full rounded-full"
          style={{
            width: `${completion}%`,
            background: "oklch(0.58 0.12 55)",
          }}
        />
      </span>
    </span>
  );
}

export default function CareerPath() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [finalAnswers, setFinalAnswers] = useState<string[]>([]);

  const totalQuestions = quizQuestions.length;
  const question = quizQuestions[currentQ];
  const progress = (currentQ / totalQuestions) * 100;

  function handleSelect(value: string) {
    setSelected(value);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (currentQ < totalQuestions - 1) {
      setCurrentQ(currentQ + 1);
    }
  }

  function handleReveal() {
    if (!selected) return;
    const allAnswers = [...answers, selected];
    const ids = matchCareers(allAnswers);
    setFinalAnswers(allAnswers);
    setMatchedIds(ids);
    setPhase("results");
  }

  function handleReset() {
    setPhase("quiz");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setMatchedIds([]);
    setFinalAnswers([]);
  }

  const isLastQuestion = currentQ === totalQuestions - 1;

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-card parchment-texture border-b border-border py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth font-body mb-8 group"
            data-ocid="career.back_link"
          >
            ← <span className="group-hover:underline">Back to Voyages</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              icon="🧭"
              eyebrow="Navigation Path"
              title="Chart Your Professional Course"
              subtitle="Answer five questions to discover the career path aligned with your strengths, passions, and ambitions — across all fields in India."
            />
            <div className="mt-6 flex justify-center">
              <MarkExploredButton sectionId="career" />
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {phase === "quiz" ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45 }}
          >
            <QuizSection
              question={question}
              questionNumber={currentQ + 1}
              totalQuestions={totalQuestions}
              progress={progress}
              selected={selected}
              isLastQuestion={isLastQuestion}
              onSelect={handleSelect}
              onNext={handleNext}
              onReveal={handleReveal}
            />
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45 }}
          >
            <ResultsSection
              matchedIds={matchedIds}
              answers={finalAnswers}
              onReset={handleReset}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Quiz Section ─────────────────────────────────────────────────────────────

interface QuizSectionProps {
  question: (typeof quizQuestions)[0];
  questionNumber: number;
  totalQuestions: number;
  progress: number;
  selected: string | null;
  isLastQuestion: boolean;
  onSelect: (v: string) => void;
  onNext: () => void;
  onReveal: () => void;
}

function QuizSection({
  question,
  questionNumber,
  totalQuestions,
  progress,
  selected,
  isLastQuestion,
  onSelect,
  onNext,
  onReveal,
}: QuizSectionProps) {
  return (
    <section
      className="max-w-2xl mx-auto px-6 py-12"
      data-ocid="career.quiz_section"
    >
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-body tracking-wider uppercase text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-xs font-body text-muted-foreground">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden border border-border">
          <motion.div
            className="h-full bg-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.38 }}
        >
          <ExplorerCard tilt="none" hover={false} className="p-8 mb-6">
            <div className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-body font-bold text-foreground flex-shrink-0 shadow-maritime">
                {questionNumber}
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground leading-snug pt-1">
                {question.question}
              </h2>
            </div>

            <div className="space-y-3" data-ocid="career.quiz_options">
              {question.options.map((option, i) => {
                const isChosen = selected === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => onSelect(option.value)}
                    data-ocid={`career.quiz_option.${i + 1}`}
                    className={`
                      w-full text-left px-5 py-4 rounded-lg border transition-smooth
                      font-body text-sm leading-relaxed
                      ${
                        isChosen
                          ? "bg-secondary border-foreground/40 text-foreground shadow-maritime scale-[1.01]"
                          : "bg-background border-border text-foreground hover:bg-muted hover:border-border hover:scale-[1.005]"
                      }
                    `}
                  >
                    <span className="inline-flex items-start gap-3">
                      <span
                        className={`
                          w-5 h-5 rounded-full border flex-shrink-0 mt-0.5 flex items-center justify-center text-xs
                          ${isChosen ? "border-foreground bg-foreground text-background" : "border-muted-foreground"}
                        `}
                      >
                        {isChosen && "✓"}
                      </span>
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </ExplorerCard>

          <div className="flex justify-end">
            {isLastQuestion ? (
              <PathButton
                icon="🧭"
                disabled={!selected}
                onClick={onReveal}
                data-ocid="career.reveal_button"
                className="w-full sm:w-auto"
              >
                Reveal Your Compass
              </PathButton>
            ) : (
              <PathButton
                icon="→"
                disabled={!selected}
                onClick={onNext}
                data-ocid="career.next_button"
                className="w-full sm:w-auto"
              >
                Next Question
              </PathButton>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

// ─── Results Section ──────────────────────────────────────────────────────────

interface ResultsSectionProps {
  matchedIds: string[];
  answers: string[];
  onReset: () => void;
}

function ResultsSection({ matchedIds, answers, onReset }: ResultsSectionProps) {
  const [activeField, setActiveField] = useState("All");

  // Build matched list with scores
  const matched = matchedIds
    .map((id) => careersById[id])
    .filter(Boolean)
    .map((career) => ({ career, score: getMatchScore(career.id, answers) }));

  // Pad with other careers if few matches
  const displayedRaw: { career: CareerData; score: number }[] =
    matched.length >= 4
      ? matched.slice(0, 8)
      : [
          ...matched,
          ...allCareers
            .filter((c) => !matchedIds.includes(c.id))
            .slice(0, 8 - matched.length)
            .map((career) => ({
              career,
              score: getMatchScore(career.id, answers),
            })),
        ];

  // Field filter
  const fieldFiltered =
    activeField === "All"
      ? displayedRaw
      : displayedRaw.filter(({ career }) => career.category === activeField);

  // Only show fields that have results
  const availableFields = [
    "All",
    ...careerFields.filter(
      (f) =>
        f !== "All" && displayedRaw.some(({ career }) => career.category === f),
    ),
  ];

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-12"
      data-ocid="career.results_section"
    >
      {/* Results Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="text-5xl block mb-4 float-subtle">🧭</span>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
          Your Career Compass Points To:
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Based on your answers, these paths align with your strengths and
          vision. Use the field filter to explore specific areas.
        </p>
      </motion.div>

      {/* Field Filter */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mb-8"
      >
        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Filter by Field
        </p>
        <div className="flex flex-wrap gap-2" data-ocid="career.field_filter">
          {availableFields.map((field) => (
            <button
              key={field}
              type="button"
              onClick={() => setActiveField(field)}
              data-ocid={`career.field_filter.${field.toLowerCase().replace(/\s+/g, "_")}`}
              className={`
                px-3 py-1.5 rounded-full text-xs font-body border transition-smooth
                ${
                  activeField === field
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background border-border text-foreground hover:bg-muted"
                }
              `}
            >
              {field}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Career Cards */}
      <div className="space-y-5" data-ocid="career.results_list">
        {fieldFiltered.length === 0 ? (
          <div
            className="text-center py-12 font-body text-muted-foreground"
            data-ocid="career.results_empty_state"
          >
            No careers found in this field. Try another filter.
          </div>
        ) : (
          fieldFiltered.map(({ career, score }, i) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              data-ocid={`career.result_card.${i + 1}`}
            >
              <ExplorerCard
                tilt={i % 2 === 0 ? "left" : "right"}
                className="p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  {/* Icon & Match Score */}
                  <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-shrink-0">
                    <span className="text-4xl">{career.icon}</span>
                    <div className="text-center">
                      <div className="font-display text-xl text-foreground leading-none">
                        {score}%
                      </div>
                      <div className="font-body text-xs text-muted-foreground mt-0.5">
                        match
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    {/* Title & Badges */}
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-display text-2xl text-foreground leading-tight">
                            {career.title}
                          </h3>
                          {i === 0 && (
                            <Badge className="font-body text-xs bg-secondary text-foreground border border-border">
                              ✦ Best Match
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge
                            variant="outline"
                            className="font-body text-xs"
                          >
                            {career.category}
                          </Badge>
                          {career.salaryRange && (
                            <span className="font-body text-xs text-muted-foreground">
                              💼 {career.salaryRange}
                            </span>
                          )}
                          {career.jobOutlook && (
                            <span className="font-body text-xs text-muted-foreground">
                              📈 {career.jobOutlook}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Progress badge — top-right corner of content area */}
                      <div className="flex-shrink-0 self-start">
                        <CareerProgressBadge
                          careerId={career.id}
                          totalSteps={career.roadmap?.length ?? 0}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {career.description}
                    </p>

                    {/* Match bar */}
                    <div className="mb-4">
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden border border-border/50">
                        <motion.div
                          className="h-full bg-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${score}%` }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>

                    {/* Skills preview */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {career.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-muted rounded text-xs font-body text-foreground border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                      {career.skills.length > 5 && (
                        <span className="px-2.5 py-1 bg-muted/50 rounded text-xs font-body text-muted-foreground">
                          +{career.skills.length - 5} more
                        </span>
                      )}
                    </div>

                    <Link
                      to="/career/$id"
                      params={{ id: career.id }}
                      data-ocid={`career.explore_path.${i + 1}`}
                    >
                      <PathButton icon="📜">Explore This Path</PathButton>
                    </Link>
                  </div>
                </div>
              </ExplorerCard>
            </motion.div>
          ))
        )}
      </div>

      <CompassDivider className="my-12" />

      {/* Browse All Careers */}
      <BrowseAllCareers />

      <CompassDivider className="my-12" />

      {/* Retake */}
      <div className="text-center" data-ocid="career.retake_section">
        <p className="font-body text-sm text-muted-foreground mb-4">
          Want to rechart your course? Retake the questionnaire.
        </p>
        <button
          type="button"
          onClick={onReset}
          data-ocid="career.retake_button"
          className="font-body text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-smooth"
        >
          ↺ Retake the Compass Quiz
        </button>
      </div>
    </section>
  );
}

// ─── Browse All Careers ───────────────────────────────────────────────────────

function BrowseAllCareers() {
  const [browseField, setBrowseField] = useState("All");

  const filtered =
    browseField === "All"
      ? allCareers
      : allCareers.filter((c) => c.category === browseField);

  return (
    <div data-ocid="career.browse_section">
      <div className="mb-6">
        <h3 className="font-display text-2xl text-foreground mb-1">
          Browse All Career Paths
        </h3>
        <p className="font-body text-sm text-muted-foreground">
          Explore all {allCareers.length} career paths across every field in
          India.
        </p>
      </div>

      {/* Field tabs */}
      <div
        className="flex flex-wrap gap-2 mb-6"
        data-ocid="career.browse_filter"
      >
        {careerFields.map((field) => (
          <button
            key={field}
            type="button"
            onClick={() => setBrowseField(field)}
            data-ocid={`career.browse_tab.${field.toLowerCase().replace(/\s+/g, "_")}`}
            className={`
              px-3 py-1.5 rounded-full text-xs font-body border transition-smooth
              ${
                browseField === field
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background border-border text-foreground hover:bg-muted"
              }
            `}
          >
            {field}
          </button>
        ))}
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        data-ocid="career.browse_list"
      >
        {filtered.map((career, i) => (
          <motion.div
            key={career.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (i % 4) * 0.07 }}
            data-ocid={`career.browse_card.${i + 1}`}
          >
            <Link to="/career/$id" params={{ id: career.id }}>
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-maritime transition-smooth group hover:border-foreground/20 h-full">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{career.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-display text-base text-foreground group-hover:underline leading-tight">
                        {career.title}
                      </span>
                      <Badge variant="outline" className="font-body text-xs">
                        {career.category}
                      </Badge>
                    </div>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {career.description}
                    </p>
                    {career.salaryRange && (
                      <p className="font-body text-xs text-muted-foreground mt-1.5">
                        💼 {career.salaryRange}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
