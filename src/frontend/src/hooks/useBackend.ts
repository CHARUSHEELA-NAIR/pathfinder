import { useQuery } from "@tanstack/react-query";
import {
  careersById,
  allCareers as localCareers,
  quizQuestions as localQuizQuestions,
} from "../data/careers";
import type { Career, Country, QuizQuestion, Resource } from "../types";

// Static data hooks — backend interface wired through local fallback data
// These hooks follow the same pattern as actor-backed hooks for future wiring

export function useQuizQuestions() {
  return useQuery<QuizQuestion[]>({
    queryKey: ["quizQuestions"],
    queryFn: async (): Promise<QuizQuestion[]> => {
      return localQuizQuestions.map((q) => ({
        id: q.id,
        question: q.question,
        options: q.options.map((o, i) => ({
          id: i,
          label: o.label,
          value: o.value,
          text: o.label,
        })),
        category: "general",
      }));
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useCareers() {
  return useQuery<Career[]>({
    queryKey: ["careers"],
    queryFn: async () => {
      return localCareers.map((c) => ({
        id: c.id,
        title: c.title,
        category: c.category,
        field: c.category,
        description: c.description,
        icon: c.icon,
        skills: c.skills,
        roadmap: c.roadmap,
        projects: c.projects,
        resources: c.resources,
        resumeTips: c.resumeTips,
        tags: c.tags,
        salaryRange: c.salaryRange,
        jobOutlook: c.jobOutlook,
      }));
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useCareer(id: string) {
  return useQuery<Career | undefined>({
    queryKey: ["career", id],
    queryFn: async () => {
      const c = careersById[id];
      if (!c) return undefined;
      return {
        id: c.id,
        title: c.title,
        category: c.category,
        field: c.category,
        description: c.description,
        icon: c.icon,
        skills: c.skills,
        roadmap: c.roadmap,
        projects: c.projects,
        resources: c.resources,
        resumeTips: c.resumeTips,
        tags: c.tags,
        salaryRange: c.salaryRange,
        jobOutlook: c.jobOutlook,
      };
    },
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!id,
  });
}

export function useCountries() {
  return useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: async () => COUNTRIES_DATA,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useCountry(id: string) {
  return useQuery<Country | undefined>({
    queryKey: ["country", id],
    queryFn: async () => COUNTRIES_DATA.find((c) => c.id === id),
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!id,
  });
}

export function useResources() {
  return useQuery<Resource[]>({
    queryKey: ["resources"],
    queryFn: async () => RESOURCES_DATA,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// ── Static Data ──────────────────────────────────────────────────────────────

const COUNTRIES_DATA: Country[] = [
  {
    id: "japan",
    name: "Japan",
    continent: "Asia",
    flag: "🇯🇵",
    overview:
      "Japan offers world-class universities, cutting-edge research, and a rich cultural experience for international students.",
    whyChoose: [
      "Free/subsidized tuition at national universities",
      "Monthly living stipend",
      "Vibrant tech & research ecosystem",
      "Safe and welcoming country",
    ],
    programs: [
      {
        name: "MEXT Scholarship",
        coverage: [
          "Full tuition",
          "Monthly stipend ¥117,000–¥145,000",
          "Round-trip airfare",
          "Medical insurance",
        ],
        benefits:
          "Full government scholarship for undergraduate, master's, and PhD students.",
        description:
          "The Japanese government's prestigious scholarship covering all study and living expenses.",
        url: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/1373897.htm",
      },
    ],
    steps: [
      "Choose your field of study",
      "Prepare Japanese language documents (N2/N3 helpful)",
      "Apply through Japanese embassy in India",
      "Pass written and interview exams",
      "Receive placement at Japanese university",
    ],
  },
  {
    id: "germany",
    name: "Germany",
    continent: "Europe",
    flag: "🇩🇪",
    overview:
      "Germany offers tuition-free public universities and excellent research opportunities in the heart of Europe.",
    whyChoose: [
      "No tuition fees at public universities",
      "Strong engineering & research programs",
      "Post-study work visa for 18 months",
      "Multicultural environment",
    ],
    programs: [
      {
        name: "DAAD Scholarship",
        coverage: [
          "Monthly allowance €861–€1,200",
          "Travel subsidy",
          "Health insurance",
          "Tuition waiver",
        ],
        benefits:
          "Comprehensive scholarship for study, research, and teaching at German institutions.",
        description:
          "Germany's largest scholarship organization offering thousands of awards annually.",
        url: "https://www.daad.de/en/study-and-research-in-germany/scholarships",
      },
    ],
    steps: [
      "Choose a program taught in English or learn German (B2)",
      "Get academic transcripts evaluated",
      "Apply via uni-assist portal",
      "Submit DAAD application (if applying for scholarship)",
      "Obtain German student visa",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    continent: "Europe",
    flag: "🇬🇧",
    overview:
      "The UK is home to Oxford, Cambridge, and world-ranked universities offering globally recognized degrees.",
    whyChoose: [
      "1-year master's programs (faster completion)",
      "Graduate Route Visa — 2 years post-study work",
      "World's top-ranked universities",
      "Strong alumni networks globally",
    ],
    programs: [
      {
        name: "Chevening Scholarship",
        coverage: [
          "Full tuition fees",
          "Living expenses stipend",
          "Return flights",
          "Visa application fees",
        ],
        benefits:
          "UK Government's flagship scholarship for future global leaders.",
        description:
          "Fully funded scholarship for 1-year master's degree at any UK university.",
        url: "https://www.chevening.org",
      },
    ],
    steps: [
      "Research eligible master's programs",
      "Build 2 years of work experience (Chevening requirement)",
      "Apply to 3 UK universities simultaneously",
      "Submit Chevening application (August–November)",
      "Attend interview and await decision",
    ],
  },
  {
    id: "usa",
    name: "United States",
    continent: "North America",
    flag: "🇺🇸",
    overview:
      "The USA hosts the world's largest and most diverse higher education system with unmatched research funding.",
    whyChoose: [
      "Leading universities in every field",
      "OPT — up to 3 years work authorization for STEM",
      "Largest research budgets globally",
      "Diverse startup & tech ecosystem",
    ],
    programs: [
      {
        name: "Fulbright Scholarship",
        coverage: [
          "J-1 visa sponsorship",
          "Tuition and fees",
          "Monthly stipend",
          "Health insurance",
          "Travel allowance",
        ],
        benefits:
          "US government's premier international exchange program for graduate study and research.",
        description:
          "Prestigious scholarship enabling study, research, and teaching in the USA.",
        url: "https://foreign.fulbrightonline.org",
      },
    ],
    steps: [
      "Appear for GRE/GMAT exam",
      "Collect recommendation letters (3 required)",
      "Write compelling Statement of Purpose",
      "Apply to programs (September–December)",
      "Apply for Fulbright through US Embassy India",
    ],
  },
  {
    id: "canada",
    name: "Canada",
    continent: "North America",
    flag: "🇨🇦",
    overview:
      "Canada offers world-class education, post-graduation work permits, and a clear pathway to permanent residence.",
    whyChoose: [
      "3-year post-graduation work permit",
      "Pathway to Canadian PR through Express Entry",
      "Affordable compared to USA/UK",
      "Multicultural and inclusive society",
    ],
    programs: [
      {
        name: "Vanier Canada Graduate Scholarship",
        coverage: [
          "CAD $50,000/year for 3 years",
          "Full research support",
          "Prestigious credential",
        ],
        benefits:
          "Canada's most prestigious doctoral scholarship for world-class PhD students.",
        description:
          "Attracts and retains exceptional doctoral students at Canadian universities.",
        url: "https://vanier.gc.ca",
      },
    ],
    steps: [
      "Select a Canadian university with your program",
      "Prepare GRE / IELTS scores",
      "Secure a faculty supervisor (for research programs)",
      "Apply for study permit (Student Direct Stream)",
      "Apply for Vanier CGS through your university",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    continent: "Oceania",
    flag: "🇦🇺",
    overview:
      "Australia combines academic excellence with an exceptional quality of life and post-study work opportunities.",
    whyChoose: [
      "2-4 year graduate visa depending on qualification",
      "8 of world's top 100 universities",
      "Strong research programs",
      "Safe and high quality of life",
    ],
    programs: [
      {
        name: "Australia Awards Scholarship",
        coverage: [
          "Full tuition fees",
          "Return airfare",
          "Establishment allowance",
          "Monthly living stipend",
          "Health insurance (OSHC)",
        ],
        benefits:
          "Australian government's flagship international development scholarship program.",
        description:
          "Fully funded scholarships for study at Australian universities for developing countries.",
        url: "https://www.australiaawardsindia.org",
      },
    ],
    steps: [
      "Choose a program at an eligible Australian university",
      "Prepare IELTS (minimum 6.5 overall)",
      "Gather transcripts, resume, and essays",
      "Apply for Australia Awards (February–April each year)",
      "Submit Confirmation of Enrolment and apply for student visa",
    ],
  },
];

const RESOURCES_DATA: Resource[] = [
  {
    id: "ycombinator",
    title: "Y Combinator",
    description:
      "Startup school videos, founder stories, and advice from the world's top accelerator.",
    url: "https://www.youtube.com/@ycombinator",
    category: "youtube",
    channelName: "Y Combinator",
  },
  {
    id: "slidebean",
    title: "Slidebean",
    description:
      "Pitch decks, startup case studies, and founder lessons in engaging video format.",
    url: "https://www.youtube.com/@slidebean",
    category: "youtube",
    channelName: "Slidebean",
  },
  {
    id: "ali-abdaal",
    title: "Ali Abdaal",
    description:
      "Productivity, career growth, and becoming a content creator — practical and evidence-based.",
    url: "https://www.youtube.com/@aliabdaal",
    category: "youtube",
    channelName: "Ali Abdaal",
  },
  {
    id: "chris-do",
    title: "The Futur with Chris Do",
    description:
      "Design business, creative entrepreneurship, and pricing your work with confidence.",
    url: "https://www.youtube.com/@thefutur",
    category: "youtube",
    channelName: "The Futur",
  },
  {
    id: "flux-academy",
    title: "Flux Academy",
    description:
      "UX/UI design tutorials, freelancing strategies, and design career guidance.",
    url: "https://www.youtube.com/@FluxAcademy",
    category: "youtube",
    channelName: "Flux Academy",
  },
  {
    id: "indie-hackers",
    title: "Indie Hackers",
    description:
      "Community of founders sharing revenue numbers, strategies, and honest startup stories.",
    url: "https://www.indiehackers.com",
    category: "website",
  },
  {
    id: "product-hunt",
    title: "Product Hunt",
    description:
      "Daily showcase of the best new products — discover tools, get feedback, and launch.",
    url: "https://www.producthunt.com",
    category: "website",
  },
];
