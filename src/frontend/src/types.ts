// ── Quiz ─────────────────────────────────────────────────────────────────────
export interface QuizOption {
  id?: number | bigint;
  text?: string;
  label?: string;
  value?: string;
  keywords?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  category?: string;
}

// ── Career (enriched — matches backend + local data) ──────────────────────────
export interface Career {
  id: string;
  title: string;
  description: string;
  /** New: broad field (e.g. "Technology", "Arts", "Commerce") */
  field?: string;
  /** Legacy alias for field — used by older UI components */
  category?: string;
  /** New: keywords for quiz matching */
  keywords?: string[];
  requiredSkills?: string[];
  /** Legacy alias — local data uses 'skills', backend uses 'requiredSkills' */
  skills?: string[];
  /** Roadmap — local data uses RoadmapStep[], backend uses string[] */
  roadmap?: RoadmapStep[] | string[];
  projects?: string[];
  /** New: backend resource type */
  freeResources?: FreeResource[];
  /** Legacy alias — local data uses 'resources' */
  resources?: FreeResource[];
  resumeTips?: string[];
  /** New: salary range info */
  salaryRange?: string;
  /** New: job market outlook */
  jobOutlook?: string;
  /** Legacy: emoji icon used by local data */
  icon?: string;
  /** Legacy: quiz match tags */
  tags?: string[];
}

export interface RoadmapStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface FreeResource {
  title: string;
  url: string;
  type?: "video" | "course" | "article" | "website";
  isFree?: boolean;
  description?: string;
  /** Backend uses 'resourceType' as a string */
  resourceType?: string;
}

// ── Scholarship (enriched — matches backend + local data) ─────────────────────
export interface ScholarshipProgram {
  name: string;
  description: string;
  benefits?: string;
  applicationUrl?: string;
  /** Legacy alias for applicationUrl */
  url?: string;
  /** Array of coverage items (e.g. ["Full Tuition", "Monthly Stipend"]) */
  coverage?: string[];
  /** New: name of the awarding organization */
  organization?: string;
  /** New: eligibility as a single string */
  eligibility?: string;
  /** New: funding scope (e.g. "Fully Funded") */
  fundingLevel?: string;
  /** New: application deadline month */
  deadlineMonth?: string;
  coversTuition?: boolean;
  coversLiving?: boolean;
  coversTravel?: boolean;
}

// ── Country (enriched — matches backend + local data) ─────────────────────────
export interface Country {
  id: string;
  name: string;
  continent: string;
  overview: string;
  /** Array of reasons to choose this country */
  whyChoose: string[];
  programs: ScholarshipProgram[];
  /** Legacy: emoji flag */
  flag?: string;
  /** Legacy: application steps list */
  steps?: string[];
}

// ── Catalog resources ─────────────────────────────────────────────────────────
export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "youtube" | "website" | "course";
  channelName?: string;
}

export interface CatalogResource {
  title: string;
  description: string;
  url: string;
  category: string;
}

// ── Government Exams (frontend-only data) ─────────────────────────────────────
export interface GovernmentExam {
  id: string;
  title: string;
  fullName: string;
  description: string;
  eligibility: string[];
  prepSteps: string[];
  resources: FreeResource[];
  studyPlan: string;
}

// ── Business ──────────────────────────────────────────────────────────────────
export interface BusinessSection {
  id: string;
  title: string;
  description: string;
  steps: string[];
}

// ── Inspirational Media ───────────────────────────────────────────────────────
export interface InspirationalMedia {
  id: string;
  title: string;
  type: "movie" | "series" | "documentary";
  description: string;
  imageUrl: string;
  searchUrl: string;
  year: string;
  lesson: string;
}
