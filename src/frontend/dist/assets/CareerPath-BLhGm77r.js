import { r as reactExports, j as jsxRuntimeExports, L as Link, m as motion, u as useProgressStore } from "./index-DLmsKBlQ.js";
import { B as Badge } from "./badge-BLCd9Io7.js";
import { S as SectionHeader, E as ExplorerCard, C as CompassDivider } from "./SectionHeader-B3v_DeuH.js";
import { M as MarkExploredButton } from "./MarkExploredButton-Cx9__lVw.js";
import { P as PathButton } from "./PathButton-C6b6y_Cu.js";
import { q as quizQuestions, m as matchCareers, c as careersById, g as getMatchScore, a as allCareers, b as careerFields } from "./careers-BUJDQeYp.js";
import { A as AnimatePresence } from "./index-oPS5ip4z.js";
import "./index-C29F0n-q.js";
import "./button-C0nt2FMv.js";
function useCareerCompletion(careerId, totalSteps) {
  var _a;
  const store = useProgressStore();
  if (typeof store.getCareerCompletionPercentage === "function") {
    return store.getCareerCompletionPercentage(careerId, totalSteps);
  }
  if (store.careerProgress && totalSteps > 0) {
    const done = ((_a = store.careerProgress[careerId]) == null ? void 0 : _a.size) ?? 0;
    return Math.round(done / totalSteps * 100);
  }
  return 0;
}
function CareerProgressBadge({
  careerId,
  totalSteps
}) {
  const completion = useCareerCompletion(careerId, totalSteps);
  if (completion === 0 || totalSteps === 0) return null;
  if (completion >= 100) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-body font-semibold border-2 border-dashed",
        style: {
          background: "oklch(from var(--color-background) calc(l - 0.04) calc(c + 0.01) 145)",
          borderColor: "oklch(0.45 0.12 145)",
          color: "oklch(0.35 0.12 145)",
          boxShadow: "inset 0 1px 2px oklch(0 0 0 / 0.08)"
        },
        "data-ocid": `career.voyage_complete_badge.${careerId}`,
        title: "You've completed all steps for this career path",
        children: "✓ Voyage Complete"
      }
    );
  }
  const completedSteps = Math.round(completion / 100 * totalSteps);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex flex-col gap-1 px-2.5 py-1.5 rounded font-body text-xs border",
      style: {
        background: "oklch(0.93 0.04 75)",
        borderColor: "oklch(0.72 0.09 75)",
        color: "oklch(0.38 0.09 55)"
      },
      "data-ocid": `career.progress_badge.${careerId}`,
      title: `${completedSteps} of ${totalSteps} steps completed`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold leading-none", children: [
          completedSteps,
          "/",
          totalSteps,
          " steps"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "h-1 rounded-full overflow-hidden w-16",
            style: { background: "oklch(0.82 0.05 75)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "block h-full rounded-full",
                style: {
                  width: `${completion}%`,
                  background: "oklch(0.58 0.12 55)"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function CareerPath() {
  const [phase, setPhase] = reactExports.useState("quiz");
  const [currentQ, setCurrentQ] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(null);
  const [matchedIds, setMatchedIds] = reactExports.useState([]);
  const [finalAnswers, setFinalAnswers] = reactExports.useState([]);
  const totalQuestions = quizQuestions.length;
  const question = quizQuestions[currentQ];
  const progress = currentQ / totalQuestions * 100;
  function handleSelect(value) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card parchment-texture border-b border-border py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth font-body mb-8 group",
          "data-ocid": "career.back_link",
          children: [
            "← ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:underline", children: "Back to Voyages" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: "🧭",
                eyebrow: "Navigation Path",
                title: "Chart Your Professional Course",
                subtitle: "Answer five questions to discover the career path aligned with your strengths, passions, and ambitions — across all fields in India."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkExploredButton, { sectionId: "career" }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: phase === "quiz" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -24 },
        transition: { duration: 0.45 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizSection,
          {
            question,
            questionNumber: currentQ + 1,
            totalQuestions,
            progress,
            selected,
            isLastQuestion,
            onSelect: handleSelect,
            onNext: handleNext,
            onReveal: handleReveal
          }
        )
      },
      "quiz"
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -24 },
        transition: { duration: 0.45 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ResultsSection,
          {
            matchedIds,
            answers: finalAnswers,
            onReset: handleReset
          }
        )
      },
      "results"
    ) })
  ] });
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
  onReveal
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "max-w-2xl mx-auto px-6 py-12",
      "data-ocid": "career.quiz_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-body tracking-wider uppercase text-muted-foreground", children: [
              "Question ",
              questionNumber,
              " of ",
              totalQuestions
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-body text-muted-foreground", children: [
              Math.round(progress),
              "% complete"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "h-full bg-secondary rounded-full",
              initial: { width: 0 },
              animate: { width: `${progress}%` },
              transition: { duration: 0.5, ease: "easeOut" }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -30 },
            transition: { duration: 0.38 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "none", hover: false, className: "p-8 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-7", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-body font-bold text-foreground flex-shrink-0 shadow-maritime", children: questionNumber }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground leading-snug pt-1", children: question.question })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "career.quiz_options", children: question.options.map((option, i) => {
                  const isChosen = selected === option.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onSelect(option.value),
                      "data-ocid": `career.quiz_option.${i + 1}`,
                      className: `
                      w-full text-left px-5 py-4 rounded-lg border transition-smooth
                      font-body text-sm leading-relaxed
                      ${isChosen ? "bg-secondary border-foreground/40 text-foreground shadow-maritime scale-[1.01]" : "bg-background border-border text-foreground hover:bg-muted hover:border-border hover:scale-[1.005]"}
                    `,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `
                          w-5 h-5 rounded-full border flex-shrink-0 mt-0.5 flex items-center justify-center text-xs
                          ${isChosen ? "border-foreground bg-foreground text-background" : "border-muted-foreground"}
                        `,
                            children: isChosen && "✓"
                          }
                        ),
                        option.label
                      ] })
                    },
                    option.value
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: isLastQuestion ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                PathButton,
                {
                  icon: "🧭",
                  disabled: !selected,
                  onClick: onReveal,
                  "data-ocid": "career.reveal_button",
                  className: "w-full sm:w-auto",
                  children: "Reveal Your Compass"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                PathButton,
                {
                  icon: "→",
                  disabled: !selected,
                  onClick: onNext,
                  "data-ocid": "career.next_button",
                  className: "w-full sm:w-auto",
                  children: "Next Question"
                }
              ) })
            ]
          },
          question.id
        ) })
      ]
    }
  );
}
function ResultsSection({ matchedIds, answers, onReset }) {
  const [activeField, setActiveField] = reactExports.useState("All");
  const matched = matchedIds.map((id) => careersById[id]).filter(Boolean).map((career) => ({ career, score: getMatchScore(career.id, answers) }));
  const displayedRaw = matched.length >= 4 ? matched.slice(0, 8) : [
    ...matched,
    ...allCareers.filter((c) => !matchedIds.includes(c.id)).slice(0, 8 - matched.length).map((career) => ({
      career,
      score: getMatchScore(career.id, answers)
    }))
  ];
  const fieldFiltered = activeField === "All" ? displayedRaw : displayedRaw.filter(({ career }) => career.category === activeField);
  const availableFields = [
    "All",
    ...careerFields.filter(
      (f) => f !== "All" && displayedRaw.some(({ career }) => career.category === f)
    )
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "max-w-4xl mx-auto px-6 py-12",
      "data-ocid": "career.results_section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "text-center mb-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl block mb-4 float-subtle", children: "🧭" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground mb-3", children: "Your Career Compass Points To:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-lg mx-auto", children: "Based on your answers, these paths align with your strengths and vision. Use the field filter to explore specific areas." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.15 },
            className: "mb-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs uppercase tracking-widest text-muted-foreground mb-3", children: "Filter by Field" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", "data-ocid": "career.field_filter", children: availableFields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveField(field),
                  "data-ocid": `career.field_filter.${field.toLowerCase().replace(/\s+/g, "_")}`,
                  className: `
                px-3 py-1.5 rounded-full text-xs font-body border transition-smooth
                ${activeField === field ? "bg-foreground text-background border-foreground" : "bg-background border-border text-foreground hover:bg-muted"}
              `,
                  children: field
                },
                field
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", "data-ocid": "career.results_list", children: fieldFiltered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-center py-12 font-body text-muted-foreground",
            "data-ocid": "career.results_empty_state",
            children: "No careers found in this field. Try another filter."
          }
        ) : fieldFiltered.map(({ career, score }, i) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.45, delay: i * 0.08 },
              "data-ocid": `career.result_card.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExplorerCard,
                {
                  tilt: i % 2 === 0 ? "left" : "right",
                  className: "p-6 md:p-8",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start gap-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: career.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl text-foreground leading-none", children: [
                          score,
                          "%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-muted-foreground mt-0.5", children: "match" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground leading-tight", children: career.title }),
                            i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "font-body text-xs bg-secondary text-foreground border border-border", children: "✦ Best Match" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Badge,
                              {
                                variant: "outline",
                                className: "font-body text-xs",
                                children: career.category
                              }
                            ),
                            career.salaryRange && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground", children: [
                              "💼 ",
                              career.salaryRange
                            ] }),
                            career.jobOutlook && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground", children: [
                              "📈 ",
                              career.jobOutlook
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CareerProgressBadge,
                          {
                            careerId: career.id,
                            totalSteps: ((_a = career.roadmap) == null ? void 0 : _a.length) ?? 0
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mb-4", children: career.description }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden border border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "h-full bg-secondary rounded-full",
                          initial: { width: 0 },
                          animate: { width: `${score}%` },
                          transition: {
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: "easeOut"
                          }
                        }
                      ) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mb-5", children: [
                        career.skills.slice(0, 5).map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "px-2.5 py-1 bg-muted rounded text-xs font-body text-foreground border border-border",
                            children: skill
                          },
                          skill
                        )),
                        career.skills.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 bg-muted/50 rounded text-xs font-body text-muted-foreground", children: [
                          "+",
                          career.skills.length - 5,
                          " more"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/career/$id",
                          params: { id: career.id },
                          "data-ocid": `career.explore_path.${i + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(PathButton, { icon: "📜", children: "Explore This Path" })
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            career.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { className: "my-12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BrowseAllCareers, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { className: "my-12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", "data-ocid": "career.retake_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mb-4", children: "Want to rechart your course? Retake the questionnaire." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onReset,
              "data-ocid": "career.retake_button",
              className: "font-body text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-smooth",
              children: "↺ Retake the Compass Quiz"
            }
          )
        ] })
      ]
    }
  );
}
function BrowseAllCareers() {
  const [browseField, setBrowseField] = reactExports.useState("All");
  const filtered = browseField === "All" ? allCareers : allCareers.filter((c) => c.category === browseField);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "career.browse_section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground mb-1", children: "Browse All Career Paths" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground", children: [
        "Explore all ",
        allCareers.length,
        " career paths across every field in India."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex flex-wrap gap-2 mb-6",
        "data-ocid": "career.browse_filter",
        children: careerFields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setBrowseField(field),
            "data-ocid": `career.browse_tab.${field.toLowerCase().replace(/\s+/g, "_")}`,
            className: `
              px-3 py-1.5 rounded-full text-xs font-body border transition-smooth
              ${browseField === field ? "bg-foreground text-background border-foreground" : "bg-background border-border text-foreground hover:bg-muted"}
            `,
            children: field
          },
          field
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
        "data-ocid": "career.browse_list",
        children: filtered.map((career, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.35, delay: i % 4 * 0.07 },
            "data-ocid": `career.browse_card.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/career/$id", params: { id: career.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl p-5 hover:shadow-maritime transition-smooth group hover:border-foreground/20 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: career.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base text-foreground group-hover:underline leading-tight", children: career.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "font-body text-xs", children: career.category })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed line-clamp-2", children: career.description }),
                career.salaryRange && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground mt-1.5", children: [
                  "💼 ",
                  career.salaryRange
                ] })
              ] })
            ] }) }) })
          },
          career.id
        ))
      }
    )
  ] });
}
export {
  CareerPath as default
};
