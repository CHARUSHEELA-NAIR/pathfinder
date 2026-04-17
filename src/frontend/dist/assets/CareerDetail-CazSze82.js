import { a as useParams, j as jsxRuntimeExports, L as Link, m as motion, u as useProgressStore } from "./index-DLmsKBlQ.js";
import { B as Badge } from "./badge-BLCd9Io7.js";
import { E as ExplorerCard, S as SectionHeader, C as CompassDivider } from "./SectionHeader-B3v_DeuH.js";
import { P as PathButton } from "./PathButton-C6b6y_Cu.js";
import { c as careersById } from "./careers-BUJDQeYp.js";
import { A as AnimatePresence } from "./index-oPS5ip4z.js";
import "./index-C29F0n-q.js";
import "./button-C0nt2FMv.js";
const RESOURCE_ICON = {
  video: "🎬",
  course: "📚",
  article: "📄",
  website: "🌐"
};
const RESOURCE_LABEL = {
  video: "Video",
  course: "Course",
  article: "Article",
  website: "Website"
};
function resolveType(res) {
  return res.type ?? res.resourceType ?? "website";
}
function isRoadmapStep(step) {
  return typeof step === "object" && step !== null && "title" in step;
}
function getPhaseLabelForStep(stepIndex, total) {
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
function SkillTags({ skills }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", "data-ocid": "career_detail.skills_list", children: skills.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "data-ocid": `career_skills.item.${i + 1}`,
      className: "px-3 py-1.5 bg-secondary border border-border rounded-md text-sm font-body text-foreground shadow-maritime",
      children: skill
    },
    skill
  )) });
}
const PHASE_ICONS = {
  "Setting Sail": "⚓",
  "On Course": "🧭",
  "Deep Waters": "🌊",
  "Charting Unknown Seas": "🗺️",
  "Expert Navigator": "⭐"
};
function PhaseBadge({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-border bg-secondary shadow-maritime",
        style: { fontFamily: "var(--font-display)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: PHASE_ICONS[label] ?? "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground tracking-wide", children: label })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
  ] });
}
function GuidedRoadmap({ careerId, steps }) {
  const { markStepComplete, unmarkStepComplete, getCareerProgress } = useProgressStore();
  const normalizedSteps = steps.map((step, i) => {
    if (isRoadmapStep(step)) return step;
    return {
      step: i + 1,
      title: String(step),
      duration: void 0,
      description: ""
    };
  });
  const total = normalizedSteps.length;
  const { completed } = getCareerProgress(careerId, total);
  const completedCount = completed.size;
  const pct = total > 0 ? Math.round(completedCount / total * 100) : 0;
  const allDone = completedCount === total && total > 0;
  const currentStepIndex = normalizedSteps.findIndex(
    (s) => !completed.has(s.step)
  );
  function toggle(stepNum) {
    if (completed.has(stepNum)) {
      unmarkStepComplete(careerId, stepNum);
    } else {
      markStepComplete(careerId, stepNum);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "career_roadmap.guided_journey", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mb-8 p-5 rounded-xl border-2 border-border bg-secondary/60 shadow-maritime parchment-texture",
        "data-ocid": "career_roadmap.progress_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "🧭" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body font-semibold text-foreground text-sm",
                  style: { fontFamily: "var(--font-display)" },
                  children: "Voyage Progress"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm font-bold text-foreground", children: [
              completedCount,
              " of ",
              total,
              " milestones"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-4 rounded-full bg-muted border border-border overflow-hidden shadow-inner", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute inset-y-0 left-0 rounded-full",
                style: {
                  background: "linear-gradient(90deg, oklch(0.65 0.12 60), oklch(0.72 0.14 50))"
                },
                initial: { width: 0 },
                animate: { width: `${pct}%` },
                transition: { duration: 0.7, ease: "easeOut" }
              }
            ),
            pct > 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "absolute inset-0 flex items-center justify-center text-xs font-bold",
                style: { color: "oklch(0.22 0.06 30)", fontSize: "0.65rem" },
                children: [
                  pct,
                  "%"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body text-muted-foreground", children: "Departed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body text-muted-foreground", children: "Expert Navigator" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: allDone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: -10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9 },
        transition: { duration: 0.5, type: "spring" },
        className: "mb-8 p-7 rounded-2xl border-4 border-border bg-secondary parchment-texture shadow-maritime-lg text-center relative overflow-hidden",
        "data-ocid": "career_roadmap.voyage_complete",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 text-2xl opacity-30", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 text-2xl opacity-30", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 text-2xl opacity-30", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 text-2xl opacity-30", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3 float-subtle", children: "⭐" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display text-3xl text-foreground mb-2",
              style: { fontFamily: "var(--font-display)" },
              children: "Voyage Complete!"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-4 py-1 border-2 border-border rounded bg-muted text-xs font-body font-bold text-foreground tracking-widest uppercase mb-3", children: "✦ Expert Navigator Certified ✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto", children: "You've charted every milestone on this voyage. A true navigator knows no limits — the seas of mastery are yours to command." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", "data-ocid": "career_roadmap.steps_list", children: normalizedSteps.map((step, i) => {
      const isCompleted = completed.has(step.step);
      const isCurrent = !allDone && i === currentStepIndex;
      const phaseLabel = getPhaseLabelForStep(i, total);
      const dur = step.duration;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        phaseLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(PhaseBadge, { label: phaseLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -16 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: Math.min(i * 0.05, 0.3) },
            className: "flex gap-4 items-stretch",
            "data-ocid": `career_roadmap.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center flex-shrink-0 w-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggle(step.step),
                    "aria-label": isCompleted ? `Mark step ${step.step} incomplete` : `Mark step ${step.step} complete`,
                    "data-ocid": `career_roadmap.checkbox.${i + 1}`,
                    className: [
                      "w-10 h-10 rounded-full border-4 flex items-center justify-center flex-shrink-0 transition-smooth shadow-maritime focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none relative",
                      isCompleted ? "border-foreground bg-foreground text-background" : isCurrent ? "border-foreground bg-secondary animate-pulse-gentle" : "border-border bg-muted hover:border-foreground/60 hover:bg-secondary"
                    ].join(" "),
                    style: isCurrent && !isCompleted ? {
                      boxShadow: "0 0 0 4px oklch(0.78 0.08 75 / 0.4), 0 4px 12px rgba(62,39,35,0.2)"
                    } : void 0,
                    children: isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "✓" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold font-body text-foreground", children: step.step })
                  }
                ),
                i < total - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: [
                      "w-0.5 flex-1 min-h-6 my-1 rounded transition-smooth",
                      isCompleted ? "bg-foreground/60" : "bg-border"
                    ].join(" ")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: [
                    "flex-1 mb-4 min-w-0 rounded-xl border-2 p-5 parchment-texture transition-smooth",
                    isCompleted ? "border-border bg-muted/60 opacity-75" : isCurrent ? "border-foreground bg-card shadow-maritime-lg" : "border-border bg-card shadow-maritime hover:shadow-maritime-lg hover:-translate-y-0.5"
                  ].join(" "),
                  children: [
                    isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "🧭" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body font-bold text-foreground uppercase tracking-widest", children: "Your next step" })
                    ] }),
                    isCompleted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "✦" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest line-through", children: "Completed" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: [
                            "font-body font-semibold text-base leading-snug",
                            isCompleted ? "text-muted-foreground line-through" : "text-foreground"
                          ].join(" "),
                          children: step.title
                        }
                      ),
                      dur && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-body text-muted-foreground bg-muted px-2.5 py-1 rounded border border-border flex-shrink-0", children: [
                        "⏱ ",
                        dur
                      ] })
                    ] }),
                    step.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: [
                          "font-body text-sm leading-relaxed mt-2",
                          isCompleted ? "text-muted-foreground/70" : "text-muted-foreground"
                        ].join(" "),
                        children: step.description
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] }, `step-${step.step}`);
    }) })
  ] });
}
function ResourceCard({ res, index }) {
  const type = resolveType(res);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: res.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:bg-secondary transition-smooth group",
      "data-ocid": `career_resources.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0 mt-0.5", children: RESOURCE_ICON[type] ?? "📖" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-semibold text-foreground group-hover:underline leading-snug mb-1", children: res.title }),
          res.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed", children: res.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border", children: RESOURCE_LABEL[type] ?? "Resource" }),
            res.isFree !== false && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body text-foreground bg-secondary px-2 py-0.5 rounded border border-border", children: "✦ Free" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-muted-foreground text-base flex-shrink-0 group-hover:translate-x-0.5 transition-smooth", children: "→" })
      ]
    }
  );
}
function CareerDetail() {
  const { id } = useParams({ from: "/career/$id" });
  const localCareer = careersById[id];
  if (!localCareer) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-2xl mx-auto px-6 py-24 text-center",
        "data-ocid": "career_detail.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl block mb-5", children: "⚓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-foreground mb-4", children: "Uncharted Territory" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-10 leading-relaxed max-w-sm mx-auto", children: "This career path hasn't been charted yet. Return to the navigation map and explore other routes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/career", "data-ocid": "career_detail.back_link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PathButton, { icon: "🧭", children: "Return to Career Map" }) })
        ]
      }
    );
  }
  const skills = localCareer.skills ?? [];
  const roadmap = localCareer.roadmap ?? [];
  const projects = localCareer.projects ?? [];
  const resources = localCareer.resources ?? [];
  const resumeTips = localCareer.resumeTips ?? [];
  const salaryRange = void 0;
  const jobOutlook = void 0;
  const hasAtAGlance = !!(skills.length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", "data-ocid": "career_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card parchment-texture border-b border-border py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "nav",
            {
              className: "flex items-center gap-2 text-sm font-body text-muted-foreground mb-8",
              "aria-label": "Breadcrumb",
              "data-ocid": "career_detail.breadcrumb",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/career",
                    className: "hover:text-foreground transition-smooth hover:underline",
                    "data-ocid": "career_detail.back_link",
                    children: "Career Paths"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "›" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: localCareer.title })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl flex-shrink-0 float-subtle", children: localCareer.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground leading-tight", children: localCareer.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "font-body text-sm flex-shrink-0",
                    children: localCareer.category
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed max-w-2xl text-base", children: localCareer.description })
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-12 space-y-12", children: [
      hasAtAGlance && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45 },
          "data-ocid": "career_detail.at_a_glance_panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "left", className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: "🔭",
                title: "At a Glance",
                align: "left",
                className: "mb-6"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6", children: [
              salaryRange,
              jobOutlook
            ] }),
            skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-muted-foreground uppercase tracking-widest mb-3", children: "Key Skills" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTags, { skills })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Guided Voyage" }),
      roadmap.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "right", className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: "🗺️",
                title: "Your Guided Voyage",
                align: "left",
                className: "mb-6"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mb-6 leading-relaxed", children: "Follow each milestone in order — tick off a step when you've completed it to chart your progress toward expertise." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(GuidedRoadmap, { careerId: id, steps: roadmap })
          ] })
        }
      ),
      projects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.45 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "left", className: "p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeader,
                {
                  icon: "🔧",
                  title: "Projects to Build",
                  align: "left",
                  className: "mb-5"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "ul",
                {
                  className: "space-y-4",
                  "data-ocid": "career_detail.projects_list",
                  children: projects.map((project, i) => {
                    const parts = project.split(" — ");
                    const title = parts[0];
                    const detail = parts.slice(1).join(" — ");
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-4",
                        "data-ocid": `career_projects.item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-body font-semibold text-foreground flex-shrink-0 mt-0.5", children: i + 1 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-medium text-foreground text-sm", children: title }),
                            detail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-0.5 leading-relaxed", children: detail })
                          ] })
                        ]
                      },
                      title
                    );
                  })
                }
              )
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Free Resources" }),
      resources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "right", className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: "📚",
                title: "Free Learning Resources",
                align: "left",
                className: "mb-5"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "space-y-3",
                "data-ocid": "career_detail.resources_list",
                children: resources.map((res) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ResourceCard,
                  {
                    res,
                    index: resources.indexOf(res)
                  },
                  res.title
                ))
              }
            )
          ] })
        }
      ),
      resumeTips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { label: "Resume Tips" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.45 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ExplorerCard, { tilt: "left", className: "p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeader,
                {
                  icon: "📋",
                  title: "Resume & Portfolio Tips",
                  align: "left",
                  className: "mb-5"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "ol",
                {
                  className: "space-y-4",
                  "data-ocid": "career_detail.resume_tips_list",
                  children: resumeTips.map((tip, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-4 font-body text-foreground text-sm",
                      "data-ocid": `career_resume.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-semibold text-foreground flex-shrink-0 mt-0.5", children: i + 1 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: tip })
                      ]
                    },
                    tip.slice(0, 40)
                  ))
                }
              )
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45 },
          className: "pb-10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CompassDivider, { className: "mb-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground mb-2", children: "Ready to chart another course?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mb-6", children: "Explore all career paths across every field in India." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/career", "data-ocid": "career_detail.back_to_careers_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PathButton, { icon: "🧭", children: "Back to Career Paths" }) })
          ] })
        }
      )
    ] })
  ] });
}
export {
  CareerDetail as default
};
