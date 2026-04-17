import type { Country } from "../types";

export const scholarshipCountries: Country[] = [
  // ── Asia ──────────────────────────────────────────────────────────────────
  {
    id: "japan",
    name: "Japan",
    continent: "Asia",
    flag: "🇯🇵",
    overview:
      "Japan blends ancient culture with cutting-edge technology, offering world-class universities and one of the most prestigious fully funded scholarship programs for international students.",
    whyChoose: [
      "Home to globally ranked institutions like the University of Tokyo and Osaka University",
      "Strong research culture in engineering, robotics, and life sciences",
      "Living in Japan offers unmatched safety, infrastructure, and cultural richness",
    ],
    programs: [
      {
        name: "MEXT Scholarship (Monbukagakusho)",
        organization:
          "Ministry of Education, Culture, Sports, Science & Technology (Japan)",
        description:
          "Awarded by the Japanese Ministry of Education to outstanding international students for undergraduate, master's, or doctoral programs at Japanese national universities.",
        eligibility:
          "Open to international students under 35 years of age with strong academic records and Japanese language interest.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "May–June (Embassy Track)",
        coverage: [
          "Full Tuition",
          "Monthly Stipend",
          "Travel Allowance",
          "Accommodation Support",
        ],
        benefits:
          "Covers tuition, living expenses (approx. ¥117,000–¥145,000/month), and round-trip airfare for the full duration of study.",
        url: "https://www.mext.go.jp/en/",
      },
    ],
    steps: [
      "Research Japanese universities and shortlist programs aligned with your goals",
      "Prepare academic transcripts, letters of recommendation, and a research proposal",
      "Apply via your home country's Japanese Embassy or directly to a Japanese university",
      "Attend the Embassy's written exam and interview rounds",
    ],
  },
  {
    id: "south-korea",
    name: "South Korea",
    continent: "Asia",
    flag: "🇰🇷",
    overview:
      "South Korea is a global leader in technology, K-culture, and innovation. Its universities consistently rise in global rankings, and the KGSP fully funds international students at the best institutions.",
    whyChoose: [
      "KAIST, POSTECH, and Seoul National University rank among Asia's best",
      "Full government funding with no tuition fees and generous stipends",
      "Dynamic, modern cities with excellent safety and quality of life",
    ],
    programs: [
      {
        name: "Korean Government Scholarship Program (KGSP)",
        organization:
          "National Institute for International Education (NIIED), South Korea",
        description:
          "The KGSP (also known as Global Korea Scholarship) is the Korean government's flagship program to attract talented international students for undergraduate and graduate study.",
        eligibility:
          "Under 25 (undergrad) or under 40 (graduate); minimum GPA of 2.64/4.0 or equivalent.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "February–March",
        coverage: [
          "Full Tuition",
          "Monthly Allowance (₩900,000)",
          "Airfare",
          "Settling-in Allowance",
        ],
        benefits:
          "Covers full tuition, monthly living allowance, Korean language training, round-trip airfare, and health insurance.",
        url: "https://www.studyinkorea.go.kr/",
      },
    ],
    steps: [
      "Check KGSP eligibility and decide between Embassy Track or University Track",
      "Prepare documents: transcripts, personal statement, health certificate, and references",
      "Submit through your national Korean Embassy or directly to KGSP partner universities",
      "Undergo written selection, interview, and medical examination",
    ],
  },

  // ── Europe ─────────────────────────────────────────────────────────────────
  {
    id: "germany",
    name: "Germany",
    continent: "Europe",
    flag: "🇩🇪",
    overview:
      "Germany offers tuition-free education at most public universities and is home to world-leading research institutions. DAAD funds thousands of international scholars every year.",
    whyChoose: [
      "Most public universities charge zero or minimal tuition fees for all nationalities",
      "Exceptional programs in engineering, natural sciences, and humanities",
      "Strong post-study work visa opportunities in one of Europe's largest economies",
    ],
    programs: [
      {
        name: "DAAD Scholarship",
        organization: "German Academic Exchange Service (DAAD)",
        description:
          "One of the world's largest scholarship organisations, DAAD funds over 100,000 scholars annually for study, research, and teaching in Germany.",
        eligibility:
          "Open to students worldwide; requires above-average academic results and strong motivation.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "October–November",
        coverage: [
          "Full Tuition",
          "Monthly Stipend (€934+)",
          "Health Insurance",
          "Travel Grant",
        ],
        benefits:
          "Provides monthly living allowance, study and research grants, travel subsidy, and comprehensive health, accident, and personal liability insurance.",
        url: "https://www.daad.de/en/",
      },
    ],
    steps: [
      "Choose a field of study and identify DAAD-eligible programs on the DAAD portal",
      "Prepare required documents: transcripts, CV, motivation letter, language certificate",
      "Submit your online application via the DAAD portal before the deadline",
      "Prepare for interviews and provide references from academic supervisors",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    continent: "Europe",
    flag: "🇬🇧",
    overview:
      "The UK is home to some of the world's most prestigious universities, including Oxford and Cambridge. Chevening is the UK government's flagship international scholarship programme.",
    whyChoose: [
      "World-renowned universities like Oxford, Cambridge, Imperial College, and LSE",
      "One-year Master's degrees make study efficient and cost-effective",
      "A global alumni network spanning government, business, and civil society",
    ],
    programs: [
      {
        name: "Chevening Scholarship",
        organization: "UK Foreign, Commonwealth & Development Office (FCDO)",
        description:
          "Chevening offers future leaders a unique opportunity to study in the UK, funded by the British Government. It targets emerging leaders from all over the world.",
        eligibility:
          "Must have at least 2 years of work experience and demonstrate leadership potential; open to all nationalities.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "November",
        coverage: [
          "Full Tuition",
          "Monthly Living Allowance",
          "Return Airfare",
          "Visa Fee Reimbursement",
        ],
        benefits:
          "Covers the full cost of a one-year master's degree in the UK including university fees, living expenses, travel, and other essential costs.",
        url: "https://www.chevening.org/",
      },
    ],
    steps: [
      "Review Chevening eligibility criteria — requires work experience and leadership potential",
      "Draft your personal statement and gather academic and employment references",
      "Submit the online application between August and November each year",
      "Attend in-country interviews conducted by the British High Commission",
    ],
  },
  {
    id: "netherlands",
    name: "Netherlands",
    continent: "Europe",
    flag: "🇳🇱",
    overview:
      "The Netherlands is renowned for innovative, English-taught programs across arts, engineering, and social sciences. The Holland Scholarship is the gateway for outstanding non-EU students.",
    whyChoose: [
      "Most programs are fully taught in English — no Dutch required",
      "High quality of life, cycling culture, and welcoming international community",
      "Eindhoven, Delft, and Wageningen are global leaders in tech and agriculture",
    ],
    programs: [
      {
        name: "Holland Scholarship",
        organization: "Dutch Ministry of Education, Culture and Science",
        description:
          "The Holland Scholarship is for international students from outside the European Economic Area who want to study in the Netherlands. Offered in partnership with Dutch universities.",
        eligibility:
          "Non-EEA students with excellent academic records applying to bachelor's or master's programs at participating Dutch institutions.",
        fundingLevel: "Partial",
        deadlineMonth: "February–May (varies by university)",
        coverage: ["€5,000 One-time Grant"],
        benefits:
          "Provides a one-time grant of €5,000 to cover initial costs of studying in the Netherlands. Some universities top up with additional support.",
        url: "https://www.studyinholland.nl/scholarships",
      },
    ],
    steps: [
      "Identify participating Dutch universities offering your field of study",
      "Apply for admission to the university first — scholarship is nomination-based",
      "Submit scholarship application form through the university's international office",
      "Await shortlist results and provide required supporting documents",
    ],
  },

  // ── Americas ───────────────────────────────────────────────────────────────
  {
    id: "usa",
    name: "United States",
    continent: "Americas",
    flag: "🇺🇸",
    overview:
      "The USA hosts the world's largest concentration of top-ranked universities and research institutions. Fulbright is the premier US government scholarship for international exchange and study.",
    whyChoose: [
      "Unmatched concentration of Ivy League and research-intensive universities",
      "Strong ecosystem for entrepreneurship, innovation, and career opportunities",
      "Diverse campus communities with students from every corner of the globe",
    ],
    programs: [
      {
        name: "Fulbright Foreign Student Program",
        organization:
          "U.S. Department of State (Bureau of Educational and Cultural Affairs)",
        description:
          "The Fulbright Program provides grants for graduate study, advanced research, or university teaching for international students at US institutions.",
        eligibility:
          "Open to citizens of eligible countries; requires strong academic record, leadership potential, and return-home commitment.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "May–October (varies by country)",
        coverage: [
          "Full Tuition",
          "Living Stipend",
          "Round-trip Airfare",
          "Health Insurance",
        ],
        benefits:
          "Covers tuition and fees, a living allowance, round-trip international travel, and health insurance for the duration of the grant.",
        url: "https://foreign.fulbrightonline.org/",
      },
    ],
    steps: [
      "Identify the correct Fulbright category — student, scholar, or professional",
      "Prepare a compelling study/research proposal and collect strong academic references",
      "Apply through your home country's Fulbright commission or US Embassy",
      "Attend pre-screening and interviews conducted by your national Fulbright committee",
    ],
  },
  {
    id: "canada",
    name: "Canada",
    continent: "Americas",
    flag: "🇨🇦",
    overview:
      "Canada is consistently ranked among the best countries in the world for quality of life, safety, and higher education. Vanier CGS attracts the world's top doctoral students.",
    whyChoose: [
      "Top universities like UofT, McGill, and UBC rank among the global elite",
      "Welcoming multicultural environment with strong immigrant pathways post-study",
      "Strong focus on research output in AI, health sciences, and environmental studies",
    ],
    programs: [
      {
        name: "Vanier Canada Graduate Scholarship",
        organization: "Government of Canada (CIHR, NSERC, SSHRC Tri-Councils)",
        description:
          "Designed to attract and retain world-class doctoral students by supporting those who demonstrate leadership skills and a high standard of scholarly achievement.",
        eligibility:
          "Must be nominated by a Canadian university; open to both Canadians and international students in doctoral programs.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "November (internal nomination deadlines vary)",
        coverage: [
          "$50,000 CAD Annual Stipend",
          "3-Year Duration",
          "Research Support",
        ],
        benefits:
          "Provides $50,000 CAD per year for three years of doctoral studies, recognising academic excellence and leadership potential in research.",
        url: "https://vanier.gc.ca/",
      },
    ],
    steps: [
      "Confirm eligibility — must be nominated by a Canadian university for doctoral study",
      "Contact your target Canadian university's graduate office for internal nomination",
      "Prepare research proposal, CV, academic transcripts, and reference letters",
      "Submit the application through your nominating institution's research office",
    ],
  },

  // ── Oceania ────────────────────────────────────────────────────────────────
  {
    id: "australia",
    name: "Australia",
    continent: "Oceania",
    flag: "🇦🇺",
    overview:
      "Australia offers exceptional education quality with a unique lifestyle advantage. Australia Awards target mid-career professionals from developing countries for graduate study.",
    whyChoose: [
      "Eight universities rank in the top 100 globally — across diverse disciplines",
      "Unique multicultural society with strong support services for international students",
      "Post-study work rights allowing up to 2–4 years of work experience after graduation",
    ],
    programs: [
      {
        name: "Australia Awards Scholarship",
        organization:
          "Australian Government (Department of Foreign Affairs and Trade)",
        description:
          "Australia Awards are prestigious international scholarships funded by the Australian government, aimed at developing leadership capacity and promoting development in partner countries.",
        eligibility:
          "Citizens of eligible developing countries; preference for mid-career professionals aged 18+.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "February–April",
        coverage: [
          "Full Tuition",
          "Return Airfare",
          "Living Allowance (COLA)",
          "Health Cover",
        ],
        benefits:
          "Covers full tuition fees, return air travel, establishment allowance, contribution to living expenses, overseas student health cover, and pre-course English training.",
        url: "https://www.australiaawards.gov.au/",
      },
    ],
    steps: [
      "Check country-specific eligibility — Australia Awards prioritise developing nations",
      "Gather required documents: passport, transcripts, English test scores, references",
      "Apply via your country's Australian Embassy or the Australia Awards online portal",
      "Shortlisted candidates undergo interviews in their home country",
    ],
  },

  // ── India (Domestic) ───────────────────────────────────────────────────────
  {
    id: "india",
    name: "India — Domestic Opportunities",
    continent: "India",
    flag: "🇮🇳",
    overview:
      "India offers a growing ecosystem of government-funded scholarships, skill development programs, and startup support for Indian students and entrepreneurs across all fields.",
    whyChoose: [
      "Largest range of government-funded schemes covering education, skill training, and research",
      "SWAYAM and NPTEL offer free online courses from IITs and IIMs with certifications",
      "Startup India and MSME schemes provide funding, mentorship, and regulatory support",
    ],
    programs: [
      {
        name: "National Scholarship Portal (NSP) Schemes",
        organization: "Ministry of Education, Government of India",
        description:
          "The NSP is a single-window platform for a wide range of central and state government scholarships covering pre-matric, post-matric, merit-cum-means, and minority scholarships.",
        eligibility:
          "Indian students from EWS, SC/ST/OBC, and minority communities; criteria vary by scheme.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "October–November",
        coverage: [
          "Tuition Fee Reimbursement",
          "Maintenance Allowance",
          "Book Grant",
        ],
        benefits:
          "Covers tuition fees, maintenance allowance, and book grant for eligible students at recognised institutions across India.",
        url: "https://scholarships.gov.in/",
      },
      {
        name: "SWAYAM Free Online Courses",
        organization: "Ministry of Education / AICTE / UGC",
        description:
          "SWAYAM (Study Webs of Active Learning for Young Aspiring Minds) provides 1,900+ free online courses from IITs, IIMs, and top universities across all disciplines — with certifications.",
        eligibility:
          "Any Indian student or professional — completely open access.",
        fundingLevel: "Fully Funded",
        deadlineMonth: "Rolling Admissions",
        coverage: [
          "100% Free Courses",
          "Certifications",
          "Credit Transfer Option",
        ],
        benefits:
          "Access to high-quality education absolutely free, with the option to earn credits towards your degree through UGC's credit transfer policy.",
        url: "https://swayam.gov.in/",
      },
    ],
    steps: [
      "Visit the National Scholarship Portal (scholarships.gov.in) and browse available schemes",
      "Register using your Aadhaar number and upload required documents",
      "Apply to eligible schemes before the annual deadline (usually October–November)",
      "Track application status on the NSP portal and respond to any verification requests",
    ],
  },
];

export const continentOrder = [
  "Asia",
  "Europe",
  "Americas",
  "Oceania",
  "India",
] as const;
export type ContinentKey = (typeof continentOrder)[number];

export const continentIcons: Record<ContinentKey, string> = {
  Asia: "🏯",
  Europe: "🏰",
  Americas: "🗽",
  Oceania: "🦘",
  India: "🪔",
};

export const journeySteps = [
  {
    number: 1,
    title: "Research Your Destination",
    description:
      "Reflect on your academic strengths, career goals, and research interests. Narrow down to 2–3 countries and disciplines. Visit official scholarship websites to understand requirements.",
    icon: "🧭",
  },
  {
    number: 2,
    title: "Prepare Documents",
    description:
      "Gather official transcripts, passport, language test scores (IELTS/TOEFL), letters of recommendation, CV/resume, and a compelling Statement of Purpose.",
    icon: "📜",
  },
  {
    number: 3,
    title: "Submit Application",
    description:
      "Apply before deadlines — most scholarships open 9–12 months before the programme start. Double-check all requirements and submit via the official scholarship portal.",
    icon: "📬",
  },
  {
    number: 4,
    title: "Prepare for Interview",
    description:
      "Research the scholarship's values and priorities. Practice articulating your goals, your home country impact, and how the scholarship aligns with your long-term vision.",
    icon: "🎯",
  },
  {
    number: 5,
    title: "Celebrate & Depart",
    description:
      "Once awarded, complete your visa application, attend pre-departure briefings, connect with past scholars, and prepare for the adventure of a lifetime!",
    icon: "🎉",
  },
];
