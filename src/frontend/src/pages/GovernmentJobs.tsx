import { motion } from "motion/react";
import CompassDivider from "../components/CompassDivider";
import ExplorerCard from "../components/ExplorerCard";
import MarkExploredButton from "../components/MarkExploredButton";
import PathButton from "../components/PathButton";
import SectionHeader from "../components/SectionHeader";

type Resource = { label: string; url: string };
type ExamStage = { label: string; detail: string };

const govExams: {
  id: string;
  icon: string;
  title: string;
  fullName: string;
  tagline: string;
  description: string;
  eligibility: string[];
  stages: ExamStage[];
  prepSteps: string[];
  resources: Resource[];
  studyPlan: string;
  prepTimeline: string;
  variants?: { label: string; desc: string }[];
}[] = [
  {
    id: "upsc",
    icon: "🏛️",
    title: "UPSC Civil Services",
    fullName: "Union Public Service Commission",
    tagline: "IAS · IPS · IFS · IRS",
    description:
      "The gateway to India's elite All India Services. One of the world's most demanding examinations — and among the most prestigious careers.",
    eligibility: [
      "Citizen of India",
      "Age: 21–32 years (SC/ST: up to 37, OBC: up to 35)",
      "Bachelor's degree in any discipline from a recognised university",
      "Maximum 6 attempts (OBC: 9, SC/ST: unlimited until age limit)",
    ],
    stages: [
      {
        label: "Stage 1: Prelims",
        detail: "2 papers (GS + CSAT) — qualifying + merit filter",
      },
      {
        label: "Stage 2: Mains",
        detail: "9 papers — essays, GS I–IV, optional subject, language",
      },
      {
        label: "Stage 3: Interview",
        detail: "Personality Test, 275 marks — conducted by UPSC board",
      },
    ],
    prepSteps: [
      "Master NCERT books (Class 6–12) for History, Polity, Geography, Economy, and Science",
      "Read The Hindu or Indian Express daily — note important events, policies, and editorials",
      "Cover the official UPSC syllabus thoroughly: all 8 GS topics + one optional subject",
      "Practice answer writing daily — 150-word and 250-word structured answers for Mains",
      "Attempt CSAT Paper 2 (qualifying) with aptitude and comprehension practice",
      "Join a full-length test series in your final 4–6 months to benchmark performance",
    ],
    resources: [
      {
        label: "NCERT Textbooks (Free)",
        url: "https://ncert.nic.in/textbook.php",
      },
      {
        label: "Unacademy UPSC (YouTube)",
        url: "https://www.youtube.com/@Unacademy-UPSC",
      },
      {
        label: "Vision IAS (Study Material)",
        url: "https://www.visionias.in/",
      },
      { label: "UPSC Official Website", url: "https://upsc.gov.in/" },
      {
        label: "InSights IAS (Notes & Tests)",
        url: "https://www.insightsonindia.com/",
      },
    ],
    studyPlan:
      "8–10 hours/day, 12–18 months for a realistic first attempt. Strong foundation first, then mocks.",
    prepTimeline: "12–18 months",
  },
  {
    id: "ssc",
    icon: "📋",
    title: "SSC Exams",
    fullName: "Staff Selection Commission",
    tagline: "CGL · CHSL · MTS · CPO · JE",
    description:
      "Recruitment for Group B and C posts across central government departments. Highly accessible — vacancies in the tens of thousands each year.",
    eligibility: [
      "Indian citizen",
      "SSC CGL: Bachelor's degree, Age 18–32",
      "SSC CHSL: 12th pass, Age 18–27",
      "SSC MTS: 10th pass, Age 18–27",
    ],
    variants: [
      {
        label: "CGL",
        desc: "Combined Graduate Level — Group B & C posts (Tax Inspector, Auditor, Assistant)",
      },
      {
        label: "CHSL",
        desc: "Combined Higher Secondary Level — LDC, DEO, PA/SA roles",
      },
      {
        label: "MTS",
        desc: "Multi-Tasking Staff — Group C non-technical posts",
      },
    ],
    stages: [
      {
        label: "Tier 1 (CBT)",
        detail: "100 questions — GK, Reasoning, Quantitative, English",
      },
      {
        label: "Tier 2 (CBT)",
        detail:
          "3 papers — Math & Reasoning, English, Computer/Finance (post-wise)",
      },
      {
        label: "Document Verification",
        detail: "Final stage after merit list — check eligibility documents",
      },
    ],
    prepSteps: [
      "Build Quantitative Aptitude: Arithmetic, Algebra, Geometry, Trigonometry, Data Interpretation",
      "Practice English: Reading Comprehension, Error Detection, Para Jumbles, Fill-in-the-blanks",
      "Sharpen General Intelligence & Reasoning: Analogies, Blood Relations, Coding-Decoding, Puzzles",
      "Cover General Awareness: Static GK (Polity, History, Science) + Current Affairs (last 6 months)",
      "Speed and accuracy are critical — aim for 95+ in Tier 1 to secure your post choice",
      "Solve 10+ years of previous papers for both Tier 1 and Tier 2",
    ],
    resources: [
      { label: "SSC Official Website", url: "https://ssc.nic.in/" },
      {
        label: "Adda247 (YouTube + Tests)",
        url: "https://www.youtube.com/@Adda247",
      },
      { label: "Testbook SSC Mock Tests", url: "https://testbook.com/ssc-cgl" },
      {
        label: "Khan Sir GK (YouTube)",
        url: "https://www.youtube.com/@KhanGSResearchCentre",
      },
    ],
    studyPlan:
      "6–9 months, 5–6 hours/day. Focus on speed and accuracy in the final 3 months.",
    prepTimeline: "6–9 months",
  },
  {
    id: "banking",
    icon: "🏦",
    title: "Banking Exams",
    fullName: "IBPS · SBI · RBI",
    tagline: "PO · Clerk · Specialist Officer · RBI Grade B",
    description:
      "Covers Probationary Officers, Clerks, and Specialist Officers at SBI and all nationalised banks. Stable career with good perks and growth.",
    eligibility: [
      "Indian citizen",
      "IBPS PO / SBI PO: Bachelor's degree, Age 20–30",
      "IBPS Clerk / SBI Clerk: Bachelor's degree, Age 20–28",
      "RBI Grade B: Bachelor's degree 60%+, Age 21–30",
      "Basic computer knowledge required for all roles",
    ],
    stages: [
      {
        label: "Prelims (Online)",
        detail: "100 questions — English, Quantitative Aptitude, Reasoning",
      },
      {
        label: "Mains (Online)",
        detail:
          "Sectional + Descriptive test — Data Analysis, GK, Computer, Finance",
      },
      {
        label: "Interview / GD",
        detail: "Final round for PO/Grade B — evaluated by bank panel",
      },
    ],
    prepSteps: [
      "Quantitative Aptitude: Data Interpretation (charts, tables), Number Series, Quadratic Equations",
      "Reasoning Ability: Puzzles, Seating Arrangements, Syllogisms, Input-Output",
      "English: Reading Comprehension, Sentence Correction, Cloze Test",
      "General & Financial Awareness: Banking terminology, RBI policies, Union Budget, Current Affairs",
      "Computer Knowledge: MS Office basics, Internet, Networking, DBMS fundamentals",
      "Take full mock tests every alternate day from Month 3 onwards",
    ],
    resources: [
      { label: "IBPS Official Website", url: "https://www.ibps.in/" },
      {
        label: "Oliveboard Mock Tests (Free)",
        url: "https://www.oliveboard.in/",
      },
      {
        label: "Bankers Adda (YouTube)",
        url: "https://www.youtube.com/@BankersAdda",
      },
      { label: "SBI Official Careers", url: "https://bank.sbi/web/careers" },
    ],
    studyPlan:
      "4–6 months intensive, mock tests every alternate day from Month 3.",
    prepTimeline: "4–6 months",
  },
  {
    id: "railways",
    icon: "🚂",
    title: "RRB Railways",
    fullName: "Railway Recruitment Board",
    tagline: "NTPC · Group D · ALP · JE",
    description:
      "Thousands of vacancies every cycle across technical and non-technical roles in Indian Railways — one of the world's largest employers.",
    eligibility: [
      "Indian citizen",
      "RRB NTPC: 12th / Degree, Age 18–33",
      "RRB Group D: 10th + ITI, Age 18–33",
      "RRB ALP (Loco Pilot): 10th + ITI/Diploma, Age 18–28",
      "RRB JE (Junior Engineer): Diploma/Degree in Engineering, Age 18–33",
    ],
    stages: [
      {
        label: "CBT 1 (Computer Based)",
        detail: "100 questions — Math, General Intelligence, GS in 90 minutes",
      },
      {
        label: "CBT 2",
        detail: "Role-specific: technical or non-technical advanced paper",
      },
      {
        label: "Document Verification",
        detail: "Shortlisted candidates verify original certificates",
      },
    ],
    prepSteps: [
      "Mathematics: Number Systems, Profit & Loss, Time & Work, Simple/Compound Interest, Percentages",
      "General Intelligence: Analogies, Coding-Decoding, Blood Relations, Venn Diagrams",
      "General Science: Physics, Chemistry, Biology at Class 10 level — strong basics essential",
      "General Awareness: Static GK, Current Affairs, Indian Railways history and operations",
      "Focus on speed: 100 questions in 90 minutes — practice CBT interface regularly",
      "Solve RRB previous year papers from at least the last 5 exam cycles",
    ],
    resources: [
      {
        label: "Indian Railways Official",
        url: "https://indianrailways.gov.in/",
      },
      {
        label: "Study IQ (YouTube)",
        url: "https://www.youtube.com/@StudyIQEducation",
      },
      {
        label: "NCERT Science (Free)",
        url: "https://ncert.nic.in/textbook.php",
      },
      {
        label: "Youth4Work RRB Tests",
        url: "https://www.youth4work.com/Talent/RRB-NTPC",
      },
    ],
    studyPlan:
      "3–4 months, 5–6 hours/day. Strong GK and Maths foundation is crucial.",
    prepTimeline: "3–4 months",
  },
];

const govInitiatives = [
  {
    icon: "🎓",
    name: "Skill India",
    fullName: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    description:
      "India's flagship skill development initiative — free vocational training across 30+ sectors, with industry-recognised certificates and job placement support.",
    link: "https://www.skillindiadigital.gov.in",
    benefits: [
      "Free short-term skill training courses (3 weeks to 3 months)",
      "Recognised certificates accepted by employers nationwide",
      "Training in sectors: IT, retail, healthcare, construction, tourism, and more",
      "Job placement assistance and entrepreneurship development",
      "Special programs for women, differently-abled, and rural youth",
    ],
    cta: "Explore Skill India",
  },
  {
    icon: "💻",
    name: "Digital India",
    fullName: "Digital India Programme — Ministry of Electronics & IT",
    description:
      "Transforming India into a digitally empowered knowledge economy — with programs to improve digital literacy, internet access, and e-governance.",
    link: "https://www.digitalindia.gov.in",
    benefits: [
      "Pradhan Mantri Gramin Digital Saksharta Abhiyan (PMGDISHA) — free digital literacy",
      "Common Service Centres (CSC) providing government services digitally",
      "BharatNet — broadband connectivity to 2.5 lakh gram panchayats",
      "DigiLocker — store and share government documents digitally",
      "Access to all central government schemes and applications online",
    ],
    cta: "Explore Digital India",
  },
  {
    icon: "📖",
    name: "SWAYAM",
    fullName: "Study Webs of Active Learning for Young Aspiring Minds",
    description:
      "Free online courses by India's top professors from IITs, IIMs, and central universities — covering undergraduate, postgraduate, and professional subjects.",
    link: "https://swayam.gov.in",
    benefits: [
      "1,900+ free courses in all academic disciplines",
      "UGC-approved credit transfer — courses count toward your degree",
      "Courses in Hindi and multiple regional languages",
      "Certificates on completion — widely recognised by employers",
      "9 quadrants of learning: video, audio, reading, self-assessment, community",
    ],
    cta: "Browse SWAYAM Courses",
  },
];

// Compact stage badge strip
function ExamStageBadges({ stages }: { stages: ExamStage[] }) {
  return (
    <div className="mb-5">
      <p className="text-xs tracking-wider uppercase font-body text-muted-foreground mb-3">
        Exam Stages
      </p>
      <div className="flex flex-col gap-2">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-start gap-3">
            <div className="flex flex-col items-center mt-1">
              <span className="w-6 h-6 rounded-full bg-primary/20 border border-border flex items-center justify-center text-xs font-bold text-foreground font-mono flex-shrink-0">
                {i + 1}
              </span>
              {i < stages.length - 1 && (
                <div className="w-px h-4 bg-border mt-1" />
              )}
            </div>
            <div className="pb-1">
              <p className="text-sm font-body font-semibold text-foreground leading-tight">
                {stage.label}
              </p>
              <p className="text-xs font-body text-muted-foreground leading-snug mt-0.5">
                {stage.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GovernmentJobs() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-card parchment-texture border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeader
              icon="⚓"
              eyebrow="Naval Commission — Government Service"
              title="Government Jobs — India"
              subtitle="Complete guides for UPSC, SSC, Banking, and Railways — eligibility, exam stages, free resources, and study plans. Beginner-friendly and updated."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 flex justify-center"
          >
            <MarkExploredButton sectionId="government" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {govExams.map((exam) => (
              <a
                key={exam.id}
                href={`#${exam.id}`}
                className="px-4 py-1.5 bg-muted border border-border rounded-full text-sm font-body text-foreground hover:bg-secondary transition-smooth"
                data-ocid={`gov.nav_tab.${exam.id}`}
              >
                {exam.icon} {exam.title}
              </a>
            ))}
            <a
              href="#initiatives"
              className="px-4 py-1.5 bg-muted border border-border rounded-full text-sm font-body text-foreground hover:bg-secondary transition-smooth"
              data-ocid="gov.nav_tab.initiatives"
            >
              🇮🇳 Free Initiatives
            </a>
          </motion.div>
        </div>
      </section>

      <CompassDivider label="Examination Charts" />

      {/* Exam Cards */}
      <section
        className="max-w-3xl mx-auto px-6 pb-6 space-y-12"
        data-ocid="gov.exams.list"
      >
        {govExams.map((exam, i) => (
          <motion.div
            key={exam.id}
            id={exam.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            data-ocid={`gov.exam.item.${i + 1}`}
          >
            <ExplorerCard tilt={i % 2 === 0 ? "left" : "right"} className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl flex-shrink-0 leading-none">
                  {exam.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h2 className="font-display text-2xl text-foreground">
                      {exam.title}
                    </h2>
                    <span className="text-xs font-mono text-muted-foreground bg-muted border border-border px-2 py-0.5 rounded-full">
                      {exam.tagline}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body mb-2">
                    {exam.fullName}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {exam.description}
                  </p>
                </div>
              </div>

              {/* Prep timeline badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-body bg-secondary/70 border border-border px-3 py-1 rounded-full text-foreground">
                  🗓 Prep Time: <strong>{exam.prepTimeline}</strong>
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Eligibility */}
                <div>
                  <p className="text-xs tracking-wider uppercase font-body text-muted-foreground mb-3">
                    Eligibility
                  </p>
                  <ul className="space-y-2">
                    {exam.eligibility.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-body text-foreground"
                      >
                        <span className="text-muted-foreground flex-shrink-0 mt-0.5">
                          ✦
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exam Stages */}
                <ExamStageBadges stages={exam.stages} />
              </div>

              {/* SSC Variants */}
              {exam.variants && (
                <div className="mb-6 bg-secondary/30 border border-border rounded-lg p-4">
                  <p className="text-xs tracking-wider uppercase font-body text-muted-foreground mb-3">
                    Exam Variants
                  </p>
                  <div className="space-y-2">
                    {exam.variants.map((v) => (
                      <div key={v.label} className="flex gap-2 items-start">
                        <span className="font-mono text-xs bg-primary/20 border border-border px-2 py-0.5 rounded text-foreground flex-shrink-0 mt-0.5">
                          {v.label}
                        </span>
                        <p className="text-sm font-body text-muted-foreground">
                          {v.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Prep Steps */}
              <div className="mb-6">
                <p className="text-xs tracking-wider uppercase font-body text-muted-foreground mb-3">
                  Step-by-Step Preparation
                </p>
                <ol className="space-y-3">
                  {exam.prepSteps.map((step, si) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-sm font-body text-foreground"
                      data-ocid={`gov.prep_step.${i + 1}.${si + 1}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 mt-0.5 text-foreground">
                        {si + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Resources */}
              <div className="mb-5">
                <p className="text-xs tracking-wider uppercase font-body text-muted-foreground mb-3">
                  Free Resources
                </p>
                <div className="flex flex-wrap gap-2">
                  {exam.resources.map((res, ri) => (
                    <a
                      key={res.label}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-muted border border-border rounded-md text-xs font-body text-foreground hover:bg-secondary transition-smooth underline-offset-2 hover:underline"
                      data-ocid={`gov.resource_link.${i + 1}.${ri + 1}`}
                    >
                      📚 {res.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Study Plan */}
              <div className="bg-secondary/40 border border-border rounded-lg p-4">
                <p className="text-xs tracking-wider uppercase font-body text-muted-foreground mb-1">
                  Recommended Study Plan
                </p>
                <p className="font-body text-sm text-foreground leading-relaxed">
                  {exam.studyPlan}
                </p>
              </div>
            </ExplorerCard>
          </motion.div>
        ))}
      </section>

      <CompassDivider label="Government Initiatives" />

      {/* Govt Initiatives */}
      <section id="initiatives" className="bg-muted/30 parchment-texture py-14">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            icon="🇮🇳"
            eyebrow="Free for All Citizens"
            title="Government Skill Initiatives"
            subtitle="Free programs by the Government of India to help you upskill, get certified, and find opportunities — no fees, no barriers."
            className="mb-12"
          />
          <div className="space-y-8" data-ocid="gov.initiatives.list">
            {govInitiatives.map((init, i) => (
              <motion.div
                key={init.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                data-ocid={`gov.initiative.item.${i + 1}`}
              >
                <ExplorerCard
                  tilt={i % 2 === 0 ? "left" : "right"}
                  className="p-8"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <span className="text-5xl flex-shrink-0 leading-none">
                      {init.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-2xl text-foreground mb-0.5">
                        {init.name}
                      </h3>
                      <p className="text-xs font-body text-muted-foreground mb-2">
                        {init.fullName}
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {init.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs tracking-wider uppercase font-body text-muted-foreground mb-3">
                      What You Get
                    </p>
                    <ul className="space-y-2">
                      {init.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm font-body text-foreground"
                        >
                          <span className="text-muted-foreground flex-shrink-0 mt-0.5">
                            ⚓
                          </span>
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={init.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`gov.initiative_link.${i + 1}`}
                  >
                    <PathButton icon="🌐" className="text-sm">
                      {init.cta}
                    </PathButton>
                  </a>
                </ExplorerCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CompassDivider label="Begin Your Voyage" />

      {/* CTA Footer */}
      <section className="bg-card parchment-texture border-t border-border py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-4xl mb-4">🧭</p>
            <h2 className="font-display text-3xl text-foreground mb-3">
              Every Rank Starts with One Step
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Pick your exam, bookmark the resources, and start today.
              Consistency beats intensity — even one focused hour a day
              compounds over months.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#upsc">
                <PathButton icon="🏛️" data-ocid="gov.cta.upsc">
                  Explore UPSC
                </PathButton>
              </a>
              <a href="#ssc">
                <PathButton icon="📋" data-ocid="gov.cta.ssc">
                  Explore SSC
                </PathButton>
              </a>
              <a
                href="https://swayam.gov.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PathButton icon="📖" data-ocid="gov.cta.swayam">
                  Start Free Learning
                </PathButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
