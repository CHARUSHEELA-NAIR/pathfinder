export type ResourceCategory =
  | "visual-records"
  | "knowledge-vaults"
  | "expedition-grounds";

export type ResourceType = "youtube" | "website" | "platform" | "community";

export interface ArchiveResource {
  id: string;
  category: ResourceCategory;
  type: ResourceType;
  title: string;
  description: string;
  url: string;
  badge: string;
  /** e.g. "8.2M subscribers" or "50M+ learners" */
  meta?: string;
  /** Focus area tag, e.g. "Productivity & Career" */
  focus?: string;
}

export const archiveResources: ArchiveResource[] = [
  // ── Visual Records — YouTube Channels ─────────────────────────────────────
  {
    id: "ycombinator",
    category: "visual-records",
    type: "youtube",
    title: "Y Combinator",
    description:
      "Startup strategies, founder advice, and insider lessons straight from the world's most prestigious startup accelerator. Includes their famous Startup School lectures.",
    url: "https://www.youtube.com/@ycombinator",
    badge: "YouTube",
    meta: "1M+ subscribers",
    focus: "Startups & Entrepreneurship",
  },
  {
    id: "slidebean",
    category: "visual-records",
    type: "youtube",
    title: "Slidebean",
    description:
      "Deep-dive case studies on how iconic companies were built, failed, or pivoted — including pitch deck breakdowns and real startup numbers.",
    url: "https://www.youtube.com/@slidebean",
    badge: "YouTube",
    meta: "900K+ subscribers",
    focus: "Startup Case Studies",
  },
  {
    id: "ali-abdaal",
    category: "visual-records",
    type: "youtube",
    title: "Ali Abdaal",
    description:
      "Evidence-based productivity, passive income, and building a fulfilling career. Trusted by millions of ambitious students and young professionals worldwide.",
    url: "https://www.youtube.com/@aliabdaal",
    badge: "YouTube",
    meta: "5M+ subscribers",
    focus: "Productivity & Career",
  },
  {
    id: "chris-do",
    category: "visual-records",
    type: "youtube",
    title: "The Futur (Chris Do)",
    description:
      "Creative business, design thinking, and pricing strategy for freelancers and agency founders. Essential watching for anyone monetising a creative skill.",
    url: "https://www.youtube.com/@thefutur",
    badge: "YouTube",
    meta: "1.7M+ subscribers",
    focus: "Creative Business & Design",
  },
  {
    id: "flux-academy",
    category: "visual-records",
    type: "youtube",
    title: "Flux Academy",
    description:
      "Web design fundamentals and freelancing mastery — from landing your first client to building a sustainable design studio from scratch.",
    url: "https://www.youtube.com/@flux-academy",
    badge: "YouTube",
    meta: "500K+ subscribers",
    focus: "Web Design & Freelancing",
  },

  // ── Knowledge Vaults — Learning Platforms ─────────────────────────────────
  {
    id: "swayam",
    category: "knowledge-vaults",
    type: "platform",
    title: "SWAYAM",
    description:
      "India's national online education platform hosting 3,000+ free MOOCs from top universities and institutions across engineering, humanities, law, agriculture, and more.",
    url: "https://swayam.gov.in",
    badge: "Indian MOOC",
    meta: "3,000+ free courses",
    focus: "All Disciplines · Government of India",
  },
  {
    id: "nptel",
    category: "knowledge-vaults",
    type: "platform",
    title: "NPTEL",
    description:
      "Free video lectures from IITs and IISc — India's finest engineering and science institutes. Earn certificates recognised by top employers and PSUs.",
    url: "https://nptel.ac.in",
    badge: "IIT / IISc",
    meta: "Recognised by top PSUs",
    focus: "Engineering & Sciences",
  },
  {
    id: "khan-academy",
    category: "knowledge-vaults",
    type: "platform",
    title: "Khan Academy",
    description:
      "A completely free, world-class education for anyone, anywhere. Covers maths, science, computing, economics, and humanities at every level — from school to college.",
    url: "https://www.khanacademy.org",
    badge: "Free Forever",
    meta: "150M+ learners globally",
    focus: "All Subjects · K–12 to University",
  },
  {
    id: "coursera",
    category: "knowledge-vaults",
    type: "platform",
    title: "Coursera",
    description:
      "University-grade courses from Yale, Stanford, Google, IBM, and 300+ partners. Many are free to audit; financial aid available for certifications.",
    url: "https://www.coursera.org",
    badge: "University Courses",
    meta: "125M+ enrolled learners",
    focus: "Tech, Business & Humanities",
  },
  {
    id: "edx",
    category: "knowledge-vaults",
    type: "platform",
    title: "edX",
    description:
      "Online courses and MicroBachelors / MicroMasters from Harvard, MIT, and 160+ global institutions. Audit for free or earn verified certificates.",
    url: "https://www.edx.org",
    badge: "Harvard / MIT",
    meta: "45M+ learners",
    focus: "STEM, Business & Policy",
  },
  {
    id: "freecodecamp",
    category: "knowledge-vaults",
    type: "platform",
    title: "freeCodeCamp",
    description:
      "A fully free, structured coding curriculum covering web dev, data science, machine learning, and information security — with industry-recognised certifications.",
    url: "https://www.freecodecamp.org",
    badge: "100% Free",
    meta: "400M+ lessons completed",
    focus: "Programming & Data Science",
  },

  // ── Expedition Grounds — Communities & Inspiration ─────────────────────────
  {
    id: "indie-hackers",
    category: "expedition-grounds",
    type: "community",
    title: "Indie Hackers",
    description:
      "Bootstrapped founders share real revenue numbers, growth tactics, and failures openly. An honest look at building profitable internet businesses without VC funding.",
    url: "https://www.indiehackers.com",
    badge: "Community",
    meta: "100K+ founders",
    focus: "Bootstrapped Startups",
  },
  {
    id: "product-hunt",
    category: "expedition-grounds",
    type: "community",
    title: "Product Hunt",
    description:
      "Discover and launch new products to thousands of early adopters every day. The go-to launchpad for indie makers, startups, and side projects.",
    url: "https://www.producthunt.com",
    badge: "Discovery",
    meta: "5M+ monthly visitors",
    focus: "Product Launches",
  },
  {
    id: "linkedin-learning",
    category: "expedition-grounds",
    type: "platform",
    title: "LinkedIn Learning",
    description:
      "Professional skill courses in business, creative, and technology — directly tied to your LinkedIn profile. Many accessible free through public libraries.",
    url: "https://www.linkedin.com/learning",
    badge: "Professional",
    meta: "21,000+ courses",
    focus: "Career & Professional Skills",
  },
  {
    id: "reddit-entrepreneur",
    category: "expedition-grounds",
    type: "community",
    title: "r/entrepreneur",
    description:
      "One of Reddit's largest entrepreneur communities — honest discussions on starting businesses, overcoming challenges, and finding your first customers.",
    url: "https://www.reddit.com/r/entrepreneur",
    badge: "Reddit",
    meta: "2M+ members",
    focus: "Business & Startups",
  },
  {
    id: "reddit-learnprogramming",
    category: "expedition-grounds",
    type: "community",
    title: "r/learnprogramming",
    description:
      "A supportive Reddit community for beginner and intermediate coders. Ask questions, share resources, and get peer feedback on your learning journey.",
    url: "https://www.reddit.com/r/learnprogramming",
    badge: "Reddit",
    meta: "3.5M+ members",
    focus: "Coding & Tech",
  },
];

export const visualRecords = archiveResources.filter(
  (r) => r.category === "visual-records",
);
export const knowledgeVaults = archiveResources.filter(
  (r) => r.category === "knowledge-vaults",
);
export const expeditionGrounds = archiveResources.filter(
  (r) => r.category === "expedition-grounds",
);

// Legacy aliases (used in old page — keep for compatibility during refactor)
export const enterpriseBasics = knowledgeVaults;
export const practiceGrounds = expeditionGrounds;
