const quizQuestions = [
  {
    id: "q1",
    question: "What activity excites you most?",
    options: [
      { label: "Building and tinkering with things", value: "build" },
      { label: "Analyzing data and finding patterns", value: "analyze" },
      { label: "Creating beautiful designs and art", value: "create" },
      { label: "Helping, healing, and supporting others", value: "care" }
    ]
  },
  {
    id: "q2",
    question: "How do you prefer to work?",
    options: [
      { label: "Independently, diving deep into problems", value: "solo" },
      { label: "In a small creative team", value: "team" },
      { label: "Leading and coordinating people", value: "manage" },
      { label: "Freely — I like variety and change", value: "free" }
    ]
  },
  {
    id: "q3",
    question: "What kind of impact do you want to make?",
    options: [
      { label: "Shape technology that millions use", value: "tech" },
      { label: "Help individuals reach their potential", value: "people" },
      { label: "Build a brand or business of my own", value: "business" },
      { label: "Serve society through public institutions", value: "public" }
    ]
  },
  {
    id: "q4",
    question: "Which of these best describes your strength?",
    options: [
      { label: "Logical thinking and problem-solving", value: "logic" },
      { label: "Empathy and communication", value: "empathy" },
      { label: "Creativity and storytelling", value: "story" },
      { label: "Strategy and big-picture thinking", value: "strategy" }
    ]
  },
  {
    id: "q5",
    question: "Where do you see yourself in 5 years?",
    options: [
      { label: "A specialist respected in my field", value: "expert" },
      { label: "Running my own venture or freelancing", value: "entrepreneur" },
      { label: "Making a difference in government or policy", value: "civil" },
      { label: "Doing creative work I love every day", value: "creative" }
    ]
  }
];
const answerWeights = {
  // Q1: activity
  build: {
    "software-engineer": 3,
    "civil-engineer": 3,
    architect: 2,
    "product-manager": 1
  },
  analyze: {
    "data-scientist": 3,
    "ca-finance": 2,
    "product-manager": 2,
    scientist: 2
  },
  create: {
    "ux-designer": 3,
    "content-creator": 2,
    "graphic-designer": 3,
    "fashion-designer": 2,
    filmmaker: 2
  },
  care: {
    doctor: 3,
    nurse: 3,
    psychologist: 3,
    "social-worker": 3,
    teacher: 2
  },
  // Q2: work style
  solo: {
    "software-engineer": 2,
    "data-scientist": 2,
    writer: 3,
    researcher: 3
  },
  team: { "ux-designer": 2, "content-creator": 2, filmmaker: 2, teacher: 2 },
  manage: {
    "product-manager": 3,
    entrepreneur: 2,
    "civil-services": 2,
    lawyer: 2
  },
  free: {
    "digital-marketer": 2,
    "content-creator": 2,
    entrepreneur: 2,
    "freelance-designer": 2
  },
  // Q3: impact
  tech: { "software-engineer": 3, "data-scientist": 2, "product-manager": 1 },
  people: {
    doctor: 2,
    teacher: 3,
    psychologist: 2,
    "social-worker": 2,
    nurse: 2
  },
  business: { entrepreneur: 3, "digital-marketer": 2, "ca-finance": 2 },
  public: { "civil-services": 3, lawyer: 2, journalist: 2, "social-worker": 2 },
  // Q4: strengths
  logic: {
    "software-engineer": 3,
    "data-scientist": 3,
    lawyer: 2,
    scientist: 2
  },
  empathy: {
    "ux-designer": 3,
    "civil-services": 2,
    teacher: 3,
    psychologist: 3,
    nurse: 2
  },
  story: {
    "content-creator": 3,
    "digital-marketer": 2,
    journalist: 3,
    filmmaker: 3,
    writer: 3
  },
  strategy: {
    "product-manager": 3,
    entrepreneur: 3,
    "civil-services": 2,
    "ca-finance": 2
  },
  // Q5: vision
  expert: {
    "data-scientist": 2,
    "ux-designer": 2,
    "civil-services": 1,
    doctor: 2,
    scientist: 3
  },
  entrepreneur: {
    entrepreneur: 3,
    "digital-marketer": 1,
    "content-creator": 2
  },
  civil: { "civil-services": 3, lawyer: 2, "social-worker": 2 },
  creative: {
    "graphic-designer": 3,
    "fashion-designer": 3,
    filmmaker: 3,
    "content-creator": 2,
    writer: 3
  }
};
function matchCareers(answers) {
  const scores = {};
  for (const answer of answers) {
    const weights = answerWeights[answer] ?? {};
    for (const [careerId, weight] of Object.entries(weights)) {
      scores[careerId] = (scores[careerId] ?? 0) + weight;
    }
  }
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([id]) => id);
  return sorted.length >= 3 ? sorted.slice(0, 6) : Object.keys(careersById).slice(0, 6);
}
function getMatchScore(careerId, answers) {
  let score = 0;
  for (const answer of answers) {
    const weights = answerWeights[answer] ?? {};
    score += weights[careerId] ?? 0;
  }
  const maxPossible = 15;
  return Math.min(Math.round(score / maxPossible * 100), 99);
}
const softwareEngineer = {
  id: "software-engineer",
  icon: "⚙️",
  title: "Software Engineer",
  category: "Technology",
  salaryRange: "₹4–40 LPA",
  jobOutlook: "Excellent — growing rapidly",
  description: "Craft the digital world — from mobile apps to cloud systems. Software Engineers are the architects of the modern age, turning logic into experiences used by billions.",
  tags: ["build", "logic", "solo", "tech"],
  skills: [
    "Data Structures & Algorithms",
    "JavaScript / TypeScript",
    "Python",
    "React / Next.js",
    "Node.js",
    "SQL & Databases",
    "Git & Version Control",
    "System Design",
    "REST APIs",
    "Cloud Basics (AWS/GCP)"
  ],
  roadmap: [
    {
      step: 1,
      title: "Master Programming Foundations",
      duration: "2–3 months",
      description: "Learn a language (Python or JavaScript). Understand variables, loops, functions, and basic data structures."
    },
    {
      step: 2,
      title: "Data Structures & Algorithms",
      duration: "2–3 months",
      description: "Study arrays, linked lists, trees, graphs, sorting, and searching. Solve 100+ problems on LeetCode."
    },
    {
      step: 3,
      title: "Build Web Applications",
      duration: "3–4 months",
      description: "Learn HTML, CSS, React for frontend. Node.js + Express for backend. Deploy your first full-stack project."
    },
    {
      step: 4,
      title: "System Design & Portfolio",
      duration: "2–3 months",
      description: "Learn system design basics. Create 3–5 production-quality projects and apply for internships."
    }
  ],
  projects: [
    "Full-stack Task Manager",
    "Real-time Chat App",
    "Personal Finance Tracker",
    "E-commerce store",
    "GitHub stats visualizer"
  ],
  resources: [
    {
      title: "CS50: Introduction to Computer Science (Harvard)",
      type: "course",
      url: "https://cs50.harvard.edu/x/",
      isFree: true,
      description: "World's most popular CS course."
    },
    {
      title: "freeCodeCamp — Full Stack Curriculum",
      type: "website",
      url: "https://www.freecodecamp.org/",
      isFree: true,
      description: "300+ hours of structured coding curriculum."
    },
    {
      title: "The Odin Project",
      type: "website",
      url: "https://www.theodinproject.com/",
      isFree: true,
      description: "Open-source full-stack curriculum."
    },
    {
      title: "Traversy Media — Web Dev Tutorials",
      type: "video",
      url: "https://www.youtube.com/@TraversyMedia",
      isFree: true,
      description: "Practical web development YouTube channel."
    }
  ],
  resumeTips: [
    "Lead every bullet with strong action verbs: Built, Developed, Optimized.",
    "Quantify impact — 'Reduced page load by 40%'.",
    "Include GitHub profile link prominently.",
    "Keep to 1 page until 5+ years experience."
  ]
};
const dataScientist = {
  id: "data-scientist",
  icon: "📊",
  title: "Data Scientist",
  category: "Analytics",
  salaryRange: "₹6–35 LPA",
  jobOutlook: "High demand across industries",
  description: "Turn raw numbers into decisions that move organizations forward. Data Scientists blend statistics, programming, and storytelling to uncover insights hidden in data.",
  tags: ["analyze", "logic", "solo", "tech"],
  skills: [
    "Python (NumPy, Pandas)",
    "Machine Learning (Scikit-learn)",
    "SQL & Database Querying",
    "Statistics & Probability",
    "Data Visualization",
    "Deep Learning (TensorFlow/PyTorch)",
    "Feature Engineering",
    "Jupyter Notebooks",
    "Business Communication"
  ],
  roadmap: [
    {
      step: 1,
      title: "Python & Statistics Fundamentals",
      duration: "2 months",
      description: "Learn Python basics, NumPy, Pandas. Study descriptive statistics, probability distributions, hypothesis testing."
    },
    {
      step: 2,
      title: "Data Manipulation & Visualization",
      duration: "2 months",
      description: "Master data cleaning, transformation, and exploration. Build charts with Matplotlib and Seaborn."
    },
    {
      step: 3,
      title: "Machine Learning Fundamentals",
      duration: "3 months",
      description: "Supervised & unsupervised learning. Linear/logistic regression, decision trees, random forests."
    },
    {
      step: 4,
      title: "Kaggle Competitions & Portfolio",
      duration: "Ongoing",
      description: "Participate in Kaggle competitions. Build an end-to-end ML project and deploy it."
    }
  ],
  projects: [
    "Customer churn prediction model",
    "House price prediction",
    "Sentiment analysis on reviews",
    "Movie recommendation system",
    "COVID-19 data dashboard"
  ],
  resources: [
    {
      title: "Kaggle — Free Data Science Courses",
      type: "course",
      url: "https://www.kaggle.com/learn",
      isFree: true,
      description: "Hands-on micro-courses with real datasets."
    },
    {
      title: "Andrew Ng's Machine Learning Specialization",
      type: "course",
      url: "https://www.coursera.org/specializations/machine-learning-introduction",
      isFree: true,
      description: "World-class ML course. Audit for free."
    },
    {
      title: "StatQuest with Josh Starmer",
      type: "video",
      url: "https://www.youtube.com/@statquest",
      isFree: true,
      description: "Best YouTube channel for statistics and ML."
    },
    {
      title: "Google's ML Crash Course",
      type: "course",
      url: "https://developers.google.com/machine-learning/crash-course",
      isFree: true,
      description: "Free intro to ML with TensorFlow APIs."
    }
  ],
  resumeTips: [
    "List tools in 'Technical Skills': Python, R, SQL, TensorFlow.",
    "For each project, state the business problem and measurable outcome.",
    "Include your Kaggle profile or GitHub notebooks link.",
    "Show business impact: 'Model reduced fraud detection time by 60%'."
  ]
};
const uxDesigner = {
  id: "ux-designer",
  icon: "🎨",
  title: "UX/UI Designer",
  category: "Design",
  salaryRange: "₹4–25 LPA",
  jobOutlook: "Growing with digital transformation",
  description: "Design experiences that feel effortless. UX Designers are user advocates — they research, prototype, and craft interfaces that connect people with products seamlessly.",
  tags: ["create", "empathy", "team", "people"],
  skills: [
    "User Research Methods",
    "Wireframing & Prototyping",
    "Figma (Expert)",
    "Interaction Design",
    "Usability Testing",
    "Information Architecture",
    "Accessibility Standards",
    "Design Systems",
    "Basic HTML/CSS"
  ],
  roadmap: [
    {
      step: 1,
      title: "Design Fundamentals",
      duration: "1–2 months",
      description: "Learn typography, color theory, layout, and Gestalt principles. Study 10 apps you love and critique their design."
    },
    {
      step: 2,
      title: "Master Figma",
      duration: "1 month",
      description: "Frames, components, auto-layout, prototyping. Recreate 5 existing apps in Figma."
    },
    {
      step: 3,
      title: "User Research",
      duration: "2 months",
      description: "Learn to conduct user interviews, surveys, and usability tests. Practice affinity mapping and persona creation."
    },
    {
      step: 4,
      title: "End-to-End Case Studies",
      duration: "3 months",
      description: "Design 2–3 complete products from research to polished prototype. Document your process for portfolio."
    }
  ],
  projects: [
    "Mobile app redesign with user research",
    "Personal portfolio website",
    "Onboarding flow for a fintech app",
    "Design system from scratch",
    "Accessibility audit"
  ],
  resources: [
    {
      title: "Google UX Design Certificate",
      type: "course",
      url: "https://www.coursera.org/professional-certificates/google-ux-design",
      isFree: true,
      description: "Industry-standard certificate. Audit for free."
    },
    {
      title: "NN/g Nielsen Norman — UX Articles",
      type: "article",
      url: "https://www.nngroup.com/articles/",
      isFree: true,
      description: "World's leading UX research publication."
    },
    {
      title: "Figma Official Tutorials",
      type: "video",
      url: "https://www.youtube.com/@Figma",
      isFree: true,
      description: "Official Figma YouTube channel."
    },
    {
      title: "Interaction Design Foundation",
      type: "course",
      url: "https://www.interaction-design.org/",
      isFree: true,
      description: "Comprehensive UX courses with certificates."
    }
  ],
  resumeTips: [
    "Portfolio link IS your resume — link prominently.",
    "Use: Problem → Research → Solution → Outcome for each case study.",
    "Show your process, not just final mockups.",
    "Quantify user impact: 'Redesign reduced task completion time by 35%'."
  ]
};
const graphicDesigner = {
  id: "graphic-designer",
  icon: "✏️",
  title: "Graphic Designer",
  category: "Design",
  salaryRange: "₹2–18 LPA",
  jobOutlook: "Steady demand, strong freelance market",
  description: "Give visual form to ideas. Graphic Designers create logos, posters, brand identities, packaging, and digital content that communicate powerfully through images and type.",
  tags: ["create", "story", "free", "creative"],
  skills: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Typography",
    "Color Theory",
    "Brand Identity Design",
    "Print & Digital Production",
    "Layout Design",
    "Canva",
    "Motion Basics",
    "Client Communication"
  ],
  roadmap: [
    {
      step: 1,
      title: "Design Fundamentals",
      duration: "2 months",
      description: "Learn typography, layout, color theory, and visual hierarchy. Study logo and brand design principles."
    },
    {
      step: 2,
      title: "Master Adobe Creative Suite",
      duration: "2 months",
      description: "Illustrator for vector design, Photoshop for image editing. Practice daily with design challenges."
    },
    {
      step: 3,
      title: "Build a Diverse Portfolio",
      duration: "3 months",
      description: "Create logo designs, posters, social media graphics, brand identities. Work on real briefs for local businesses."
    },
    {
      step: 4,
      title: "Freelance & Grow",
      duration: "Ongoing",
      description: "List on Fiverr, Upwork, and 99designs. Build a Behance portfolio. Specialize in a niche (branding, packaging, etc.)."
    }
  ],
  projects: [
    "Full brand identity for a local business",
    "Movie poster series",
    "Social media visual kit",
    "Infographic on a complex topic",
    "Book cover design"
  ],
  resources: [
    {
      title: "The Futur with Chris Do",
      type: "video",
      url: "https://www.youtube.com/@thefutur",
      isFree: true,
      description: "Design business, pricing, and creative entrepreneurship."
    },
    {
      title: "Canva Design School",
      type: "course",
      url: "https://www.canva.com/learn/",
      isFree: true,
      description: "Free design tutorials for all skill levels."
    },
    {
      title: "Adobe Express & Tutorials",
      type: "course",
      url: "https://www.adobe.com/learn/",
      isFree: true,
      description: "Free official Adobe tutorials and resources."
    },
    {
      title: "Flux Academy — Design & Freelance",
      type: "video",
      url: "https://www.youtube.com/@FluxAcademy",
      isFree: true,
      description: "UX/UI and freelance design career guidance."
    }
  ],
  resumeTips: [
    "Behance / Dribbble portfolio link is essential.",
    "Show range: logos, layouts, social, print.",
    "For agency roles, emphasize process and brand thinking.",
    "Highlight any client work — even pro-bono counts."
  ]
};
const fashionDesigner = {
  id: "fashion-designer",
  icon: "👗",
  title: "Fashion Designer",
  category: "Design",
  salaryRange: "₹2–20 LPA",
  jobOutlook: "Growing in India's textile & fashion industry",
  description: "Blend art with commerce. Fashion Designers create clothing, accessories, and styling concepts — working across Indian textile traditions and global contemporary trends.",
  tags: ["create", "story", "creative", "free"],
  skills: [
    "Sketching & Illustration",
    "Textile Knowledge",
    "Pattern Making & Draping",
    "Sewing & Garment Construction",
    "Fashion History",
    "Color Forecasting",
    "Adobe Illustrator for Fashion",
    "Trend Research",
    "Sustainability in Fashion"
  ],
  roadmap: [
    {
      step: 1,
      title: "Foundations of Fashion",
      duration: "1–2 months",
      description: "Study fashion history, textile science, and garment construction basics. Learn sketching."
    },
    {
      step: 2,
      title: "Technical Skills",
      duration: "3 months",
      description: "Master pattern making, draping, and sewing. Learn fashion illustration in Adobe Illustrator."
    },
    {
      step: 3,
      title: "Build a Collection",
      duration: "3 months",
      description: "Design a complete capsule collection with mood boards, fabric swatches, and technical drawings."
    },
    {
      step: 4,
      title: "Internships & Industry Entry",
      duration: "Ongoing",
      description: "Intern with designers or garment exporters. Enter competitions (NIFT, Pearl Academy). Build your portfolio."
    }
  ],
  projects: [
    "Capsule collection with 6 looks",
    "Upcycled fashion project from old garments",
    "Brand identity for a sustainable fashion label",
    "Fashion editorial shoot coordination"
  ],
  resources: [
    {
      title: "NIFT — National Institute of Fashion Technology",
      type: "website",
      url: "https://www.nift.ac.in/",
      isFree: true,
      description: "India's premier fashion institute resources."
    },
    {
      title: "Business of Fashion (BoF)",
      type: "article",
      url: "https://www.businessoffashion.com/",
      isFree: true,
      description: "Industry news and career resources."
    },
    {
      title: "Fashion Design Tutorial — YouTube",
      type: "video",
      url: "https://www.youtube.com/results?search_query=fashion+design+tutorial+india",
      isFree: true,
      description: "Pattern making and garment construction tutorials."
    },
    {
      title: "Coursera — Fashion as Design",
      type: "course",
      url: "https://www.coursera.org/learn/fashion-design",
      isFree: true,
      description: "MoMA's free course on fashion as design discipline."
    }
  ],
  resumeTips: [
    "Portfolio of illustrations and photos of actual garments is essential.",
    "Mention any textile or craftsmanship specialization (embroidery, weaves, etc.).",
    "Include internship experience even at student level.",
    "Highlight knowledge of Indian textiles — valuable in the market."
  ]
};
const productManager = {
  id: "product-manager",
  icon: "🧩",
  title: "Product Manager",
  category: "Business",
  salaryRange: "₹8–40 LPA",
  jobOutlook: "Rapidly growing in tech companies",
  description: "Be the captain of a product. PMs bridge business, design, and engineering — defining what gets built, why, and when, while obsessing over user value and business outcomes.",
  tags: ["lead", "strategy", "manage", "analyze"],
  skills: [
    "Product Strategy",
    "User Story Writing",
    "Roadmap Planning",
    "Data Analytics",
    "SQL Basics",
    "Stakeholder Management",
    "A/B Testing",
    "Competitive Analysis",
    "Agile / Scrum",
    "Communication"
  ],
  roadmap: [
    {
      step: 1,
      title: "Foundations of Product Thinking",
      duration: "2 months",
      description: "Read 'Inspired' by Marty Cagan. Understand product-market fit, customer discovery, and product lifecycle."
    },
    {
      step: 2,
      title: "Learn Analytics & Metrics",
      duration: "2 months",
      description: "Understand DAU, retention, NPS, conversion. Learn SQL basics. Practice with Google Analytics and Mixpanel."
    },
    {
      step: 3,
      title: "Agile & Product Processes",
      duration: "1 month",
      description: "Learn Scrum, sprint planning, backlog grooming, and user story writing."
    },
    {
      step: 4,
      title: "Break into PM",
      duration: "Ongoing",
      description: "Apply for Associate PM programs. Network on LinkedIn. Build a PM portfolio with case studies."
    }
  ],
  projects: [
    "Product teardown document",
    "Feature PRD (Product Requirement Document)",
    "User research report from 5 interviews",
    "Competitive analysis for a market",
    "Product metrics dashboard mockup"
  ],
  resources: [
    {
      title: "Lenny's Newsletter — Product Management",
      type: "article",
      url: "https://www.lennysnewsletter.com/",
      isFree: true,
      description: "Top PM newsletter with templates and frameworks."
    },
    {
      title: "Product School — Free PM Resources",
      type: "article",
      url: "https://productschool.com/resources/",
      isFree: true,
      description: "Guides and templates for aspiring PMs."
    },
    {
      title: "Y Combinator — Startup School",
      type: "video",
      url: "https://www.youtube.com/@ycombinator",
      isFree: true,
      description: "Product and startup fundamentals."
    },
    {
      title: "Mode Analytics — SQL Tutorial",
      type: "course",
      url: "https://mode.com/sql-tutorial/",
      isFree: true,
      description: "Free SQL course designed for PMs and analysts."
    }
  ],
  resumeTips: [
    "Highlight ownership: 'Led development of feature used by 50K users'.",
    "Show cross-functional collaboration.",
    "Include metrics for every significant project.",
    "Demonstrate strategic thinking — explain WHY you built something."
  ]
};
const caFinance = {
  id: "ca-finance",
  icon: "💰",
  title: "Chartered Accountant (CA)",
  category: "Commerce",
  salaryRange: "₹6–50 LPA",
  jobOutlook: "Always in demand — every business needs accounting",
  description: "The financial backbone of every organization. CAs audit accounts, manage taxes, plan finances, and ensure compliance — opening doors at Big 4 firms, banks, and independent practice.",
  tags: ["analyze", "logic", "strategy", "business"],
  skills: [
    "Financial Accounting & Reporting",
    "Taxation (Direct & Indirect)",
    "Auditing",
    "Corporate Law",
    "Financial Analysis",
    "Tally & Accounting Software",
    "Excel (Advanced)",
    "GST & Income Tax",
    "IFRS / Ind AS",
    "Risk Management"
  ],
  roadmap: [
    {
      step: 1,
      title: "CA Foundation",
      duration: "4–6 months",
      description: "Pass the Foundation exam covering Accounting, Business Law, Maths, and Economics. Register with ICAI."
    },
    {
      step: 2,
      title: "CA Intermediate",
      duration: "8 months each group",
      description: "Two groups — Group 1 (Accounting, Laws, Cost Accounting) and Group 2 (Taxation, Auditing, Financial Management)."
    },
    {
      step: 3,
      title: "3-Year Articleship",
      duration: "3 years",
      description: "Mandatory training under a practising CA. Work in audit, tax, and accounts. This is where practical skills are built."
    },
    {
      step: 4,
      title: "CA Final",
      duration: "6 months",
      description: "Two groups of advanced subjects. Pass all to become a Chartered Accountant. Average pass rate is 10–15%."
    }
  ],
  projects: [
    "Prepare and file ITR for a small business",
    "Complete GST reconciliation for a company",
    "Conduct internal audit of a society or NGO",
    "Build a financial model for a startup"
  ],
  resources: [
    {
      title: "ICAI Official Website",
      type: "website",
      url: "https://www.icai.org/",
      isFree: true,
      description: "Official ICAI resources, study material, and syllabus."
    },
    {
      title: "CA Wallah by PW — YouTube",
      type: "video",
      url: "https://www.youtube.com/@CAWallah",
      isFree: true,
      description: "Free CA preparation videos in Hindi and English."
    },
    {
      title: "SWAYAM — Commerce Courses",
      type: "course",
      url: "https://swayam.gov.in/",
      isFree: true,
      description: "Free government-certified commerce and accounting courses."
    },
    {
      title: "Investopedia — Finance Fundamentals",
      type: "article",
      url: "https://www.investopedia.com/",
      isFree: true,
      description: "Free finance education and terminology guides."
    }
  ],
  resumeTips: [
    "List your CA rank or ICAI All India rank if in top 50.",
    "Highlight specific articleship areas: tax, audit, advisory.",
    "Mention ERP/accounting software expertise.",
    "For Big 4 roles, emphasize analytical and communication skills."
  ]
};
const entrepreneur = {
  id: "entrepreneur",
  icon: "🚀",
  title: "Entrepreneur",
  category: "Business",
  salaryRange: "Variable — unlimited upside",
  jobOutlook: "High risk, high reward; growing ecosystem in India",
  description: "Chart your own course. Entrepreneurs identify problems, build solutions, and take calculated risks to create value for others — and ultimately, freedom for themselves.",
  tags: ["lead", "strategy", "free", "business"],
  skills: [
    "Business Model Design",
    "Customer Discovery",
    "Financial Planning",
    "Sales & Negotiation",
    "Product Development (MVP)",
    "Marketing & Growth",
    "Leadership",
    "Fundraising",
    "Legal Basics",
    "Resilience"
  ],
  roadmap: [
    {
      step: 1,
      title: "Validate Before You Build",
      duration: "1–2 months",
      description: "Identify a real problem. Talk to 20 potential customers. Use the Mom Test framework. Validate demand first."
    },
    {
      step: 2,
      title: "Build a Minimum Viable Product",
      duration: "2–3 months",
      description: "Build the smallest version that solves the core problem. Get 10 people to pay for it."
    },
    {
      step: 3,
      title: "Get Your First Customers",
      duration: "Ongoing",
      description: "Do things that don't scale: cold emails, events, LinkedIn. Focus on retention before growth."
    },
    {
      step: 4,
      title: "Scale & Optimize",
      duration: "Year 2+",
      description: "Double down on what works. Apply to accelerators like Y Combinator, Startup India, 100x.vc."
    }
  ],
  projects: [
    "Launch a micro-SaaS product",
    "Freelance consulting practice — land 3 clients in 30 days",
    "Community-based business around a niche",
    "Startup pitch deck with full market analysis"
  ],
  resources: [
    {
      title: "Y Combinator Startup School",
      type: "course",
      url: "https://www.startupschool.org/",
      isFree: true,
      description: "Free program from the world's top startup accelerator."
    },
    {
      title: "Indie Hackers — Founder Stories",
      type: "website",
      url: "https://www.indiehackers.com/",
      isFree: true,
      description: "Real founder interviews and revenue reports."
    },
    {
      title: "Startup India — Government Portal",
      type: "website",
      url: "https://www.startupindia.gov.in/",
      isFree: true,
      description: "Indian startup registration, funding, and mentorship."
    },
    {
      title: "Slidebean — Startup Strategy",
      type: "video",
      url: "https://www.youtube.com/@slidebean",
      isFree: true,
      description: "Company-building, pitch decks, and startup analysis."
    }
  ],
  resumeTips: [
    "List your venture as a company: 'Founder & CEO, [Name], 2022–Present'.",
    "Show traction: users, revenue, growth rate.",
    "Emphasize transferable skills: sales, fundraising, leadership.",
    "Describe what you learned from failure — it shows maturity."
  ]
};
const digitalMarketer = {
  id: "digital-marketer",
  icon: "📣",
  title: "Digital Marketer",
  category: "Marketing",
  salaryRange: "₹3–20 LPA",
  jobOutlook: "High demand as all businesses go online",
  description: "Own the voice of a brand online. Digital Marketers craft campaigns across SEO, social media, email, and paid ads — to attract, engage, and convert audiences.",
  tags: ["create", "story", "free", "business"],
  skills: [
    "SEO (On-page & Off-page)",
    "Google Ads & Meta Ads",
    "Email Marketing",
    "Content Strategy",
    "Social Media Marketing",
    "Google Analytics 4",
    "Copywriting",
    "Marketing Automation",
    "Conversion Rate Optimization"
  ],
  roadmap: [
    {
      step: 1,
      title: "Marketing Fundamentals",
      duration: "1–2 months",
      description: "Understand the 4Ps, customer journey, funnels, and buyer personas."
    },
    {
      step: 2,
      title: "SEO & Content Marketing",
      duration: "2 months",
      description: "Learn keyword research. Understand on-page SEO, backlinks. Start a blog to practice."
    },
    {
      step: 3,
      title: "Paid Advertising",
      duration: "2 months",
      description: "Learn Google Ads and Meta Ads. Understand bidding strategies and A/B testing."
    },
    {
      step: 4,
      title: "Portfolio & Freelancing",
      duration: "Ongoing",
      description: "Manage a client's social media pro bono. Apply to agencies or freelance on Upwork."
    }
  ],
  projects: [
    "Personal niche blog with SEO strategy",
    "30-day social media growth experiment",
    "Email marketing campaign sequence",
    "Google Ads campaign simulation",
    "Content calendar for a hypothetical brand"
  ],
  resources: [
    {
      title: "HubSpot Academy — Free Certifications",
      type: "course",
      url: "https://academy.hubspot.com/",
      isFree: true,
      description: "Industry-recognized free certifications."
    },
    {
      title: "Google Digital Garage",
      type: "course",
      url: "https://learndigital.withgoogle.com/digitalgarage",
      isFree: true,
      description: "Free digital marketing fundamentals with Google certificate."
    },
    {
      title: "Neil Patel — SEO & Marketing Blog",
      type: "article",
      url: "https://neilpatel.com/blog/",
      isFree: true,
      description: "Comprehensive blog on SEO and growth."
    },
    {
      title: "Ahrefs — SEO Learning Hub",
      type: "article",
      url: "https://ahrefs.com/seo",
      isFree: true,
      description: "Free in-depth guides on every aspect of SEO."
    }
  ],
  resumeTips: [
    "Numbers win: 'Grew Instagram from 2K to 25K in 6 months'.",
    "List certifications: Google Ads, HubSpot, Meta Blueprint.",
    "Show channel diversity — SEO, paid, email, social.",
    "Include budget management experience."
  ]
};
const civilServices = {
  id: "civil-services",
  icon: "🏛️",
  title: "Civil Services (IAS/IPS/IFS)",
  category: "Government",
  salaryRange: "₹56,100–₹2,50,000/month + perks",
  jobOutlook: "Prestigious and stable; highly competitive",
  description: "Serve the nation at its highest level. The Indian Administrative Service represents one of the most prestigious and impactful careers — shaping policy, infrastructure, and millions of lives.",
  tags: ["lead", "public", "civil", "strategy"],
  skills: [
    "General Studies (History, Geography, Polity)",
    "Current Affairs & Newspaper Analysis",
    "Essay Writing",
    "Analytical Thinking",
    "Ethics & Integrity",
    "Indian Economy",
    "CSAT (Aptitude)",
    "Answer Writing",
    "Time Management"
  ],
  roadmap: [
    {
      step: 1,
      title: "Understand UPSC Structure",
      duration: "1 month",
      description: "Study the exam pattern: Prelims (GS + CSAT), Mains (9 papers), and Interview. Choose optional subject."
    },
    {
      step: 2,
      title: "Build NCERT Foundation",
      duration: "3–4 months",
      description: "Read NCERT books for Classes 6–12 in History, Geography, Economics, Political Science, and Science."
    },
    {
      step: 3,
      title: "Standard References & Current Affairs",
      duration: "Ongoing",
      description: "Read The Hindu or Indian Express daily. Study Laxmikant, Bipin Chandra, Ramesh Singh."
    },
    {
      step: 4,
      title: "Answer Writing & Mock Tests",
      duration: "3–6 months",
      description: "Write 2 answers daily. Join a test series. Give full-length mock tests weekly."
    }
  ],
  projects: [
    "Complete a 60-day Prelims revision plan",
    "Write 50 Mains answers with model comparison",
    "Create comprehensive notes for all GS topics",
    "Build monthly current affairs database"
  ],
  resources: [
    {
      title: "UPSC Official Website",
      type: "website",
      url: "https://www.upsc.gov.in/",
      isFree: true,
      description: "Official syllabus and previous year papers."
    },
    {
      title: "SWAYAM — Free IAS Preparation",
      type: "course",
      url: "https://swayam.gov.in/",
      isFree: true,
      description: "Free courses on UPSC subjects by top universities."
    },
    {
      title: "Insights IAS — Study Material",
      type: "website",
      url: "https://www.insightsonindia.com/",
      isFree: true,
      description: "Free UPSC study material and daily MCQs."
    },
    {
      title: "Drishti IAS — Hindi & English",
      type: "website",
      url: "https://www.drishtiias.com/",
      isFree: true,
      description: "Free articles, videos, and test series for UPSC."
    }
  ],
  resumeTips: [
    "Your DAF (Detailed Application Form) IS your resume for UPSC.",
    "Highlight NCC/NSS activities and community service.",
    "Develop a strong 'why civil services' narrative.",
    "Mention language proficiency — regional languages are assets."
  ]
};
const lawyer = {
  id: "lawyer",
  icon: "⚖️",
  title: "Lawyer / Advocate",
  category: "Law",
  salaryRange: "₹3–50 LPA (highly variable)",
  jobOutlook: "Growing with expanding legal landscape in India",
  description: "Uphold justice and navigate the legal system. Lawyers advise clients, argue cases, draft contracts, and specialize in areas from corporate law to human rights advocacy.",
  tags: ["logic", "empathy", "manage", "civil"],
  skills: [
    "Legal Research",
    "Contract Drafting",
    "Oral Argumentation",
    "Case Analysis",
    "Indian Constitution",
    "Civil & Criminal Procedure",
    "Legal Writing",
    "Client Counseling",
    "Negotiation",
    "Domain Specialization (Corporate/Tax/Family etc.)"
  ],
  roadmap: [
    {
      step: 1,
      title: "LLB Degree (5-year or 3-year)",
      duration: "3–5 years",
      description: "Complete an LLB from a recognized university. Top options: NLUs, Delhi University Faculty of Law, NALSAR."
    },
    {
      step: 2,
      title: "Bar Council Enrollment",
      duration: "After LLB",
      description: "Enroll with your state Bar Council. Pass the AIBE (All India Bar Examination). This grants you the right to practice."
    },
    {
      step: 3,
      title: "Junior Advocacy / Internships",
      duration: "1–3 years",
      description: "Work as a junior under a senior advocate or in a law firm. Diverse exposure to courtroom work is crucial."
    },
    {
      step: 4,
      title: "Specialization",
      duration: "Ongoing",
      description: "Specialize in: Corporate Law, Taxation, IP, Family Law, Criminal Law, Human Rights, or Constitutional Law."
    }
  ],
  projects: [
    "Moot court participation and case research",
    "Legal aid clinic work for underserved communities",
    "Draft a sample employment contract",
    "Prepare a legal opinion memo on a current issue"
  ],
  resources: [
    {
      title: "Bar Council of India",
      type: "website",
      url: "https://www.barcouncilofindia.org/",
      isFree: true,
      description: "Official regulatory body for lawyers in India."
    },
    {
      title: "SCC Online — Legal Database",
      type: "website",
      url: "https://www.scconline.com/",
      isFree: false,
      description: "Comprehensive Indian legal database."
    },
    {
      title: "Lawctopus — Law Students Platform",
      type: "website",
      url: "https://www.lawctopus.com/",
      isFree: true,
      description: "Opportunities, courses, and career guidance for law students."
    },
    {
      title: "Legal Bites — Free Study Material",
      type: "article",
      url: "https://www.legalbites.in/",
      isFree: true,
      description: "Free legal study material and MCQs."
    }
  ],
  resumeTips: [
    "List NLU rank, moot court wins, and publication experience.",
    "Specify internship courts and firms.",
    "Highlight any publications or case commentaries.",
    "For corporate law roles, emphasize deal experience and transactional skills."
  ]
};
const doctor = {
  id: "doctor",
  icon: "🩺",
  title: "Doctor (MBBS/MD)",
  category: "Medicine",
  salaryRange: "₹8–80 LPA depending on specialization",
  jobOutlook: "Consistently high demand across India",
  description: "Heal, diagnose, and transform lives. Doctors are at the frontline of healthcare — combining deep medical knowledge, empathy, and critical thinking to care for patients.",
  tags: ["care", "people", "empathy", "expert"],
  skills: [
    "Clinical Diagnosis",
    "Medical Knowledge",
    "Patient Communication",
    "Anatomy & Physiology",
    "Pharmacology",
    "Emergency Care",
    "Medical Ethics",
    "Surgical Skills (specialties)",
    "Research & Documentation",
    "Empathy & Bedside Manner"
  ],
  roadmap: [
    {
      step: 1,
      title: "NEET-UG Preparation",
      duration: "1–2 years prep",
      description: "Clear NEET-UG (Physics, Chemistry, Biology). Score high enough for government medical college admission."
    },
    {
      step: 2,
      title: "MBBS (5.5 years including internship)",
      duration: "5.5 years",
      description: "Complete MBBS including a 1-year compulsory rotational internship across all major departments."
    },
    {
      step: 3,
      title: "NEET-PG & Specialization (MD/MS)",
      duration: "3 years PG",
      description: "Appear for NEET-PG to enter a specialization: Medicine, Surgery, Pediatrics, Radiology, etc."
    },
    {
      step: 4,
      title: "Practice or Super-Specialization",
      duration: "Ongoing",
      description: "Start independent practice, join a hospital, or pursue DM/MCh super-specialization."
    }
  ],
  projects: [
    "Community health camps in rural areas",
    "Case report documentation and presentation",
    "Research paper on a clinical observation",
    "Internship logbook with detailed patient notes"
  ],
  resources: [
    {
      title: "NMC — National Medical Commission",
      type: "website",
      url: "https://www.nmc.org.in/",
      isFree: true,
      description: "Official regulatory body for medical education in India."
    },
    {
      title: "MedEd101 — Medical Study Videos",
      type: "video",
      url: "https://www.youtube.com/results?search_query=MBBS+medical+education",
      isFree: true,
      description: "Free MBBS study videos and lectures."
    },
    {
      title: "PubMed — Medical Research",
      type: "website",
      url: "https://pubmed.ncbi.nlm.nih.gov/",
      isFree: true,
      description: "Free access to medical research papers globally."
    },
    {
      title: "AIIMS Lectures — YouTube",
      type: "video",
      url: "https://www.youtube.com/results?search_query=AIIMS+medical+lectures",
      isFree: true,
      description: "Free AIIMS medical education lectures."
    }
  ],
  resumeTips: [
    "Include NEET rank, college, and specialization clearly.",
    "Highlight research papers, publications, or case presentations.",
    "List internship rotations with department specifics.",
    "Clinical skills and procedures should be in a dedicated section."
  ]
};
const nurse = {
  id: "nurse",
  icon: "🏥",
  title: "Nursing Professional",
  category: "Medicine",
  salaryRange: "₹2–15 LPA (₹25–60 LPA abroad)",
  jobOutlook: "Critical shortage worldwide — excellent global opportunities",
  description: "Nurses are the backbone of healthcare — providing direct patient care, administering treatments, and bridging the gap between doctors and patients with compassion and expertise.",
  tags: ["care", "people", "empathy", "expert"],
  skills: [
    "Patient Care & Monitoring",
    "Medication Administration",
    "Wound Care",
    "IV Therapy",
    "Patient Education",
    "Emergency Response",
    "Documentation",
    "Infection Control",
    "Critical Thinking",
    "Empathy"
  ],
  roadmap: [
    {
      step: 1,
      title: "B.Sc. Nursing or GNM",
      duration: "3–4 years",
      description: "Complete B.Sc. Nursing (4 years) or GNM Diploma (3.5 years) from an INC-recognized institution."
    },
    {
      step: 2,
      title: "State Nursing Council Registration",
      duration: "After graduation",
      description: "Register with your State Nursing Council. This is mandatory to practice professionally."
    },
    {
      step: 3,
      title: "Clinical Experience",
      duration: "2–3 years",
      description: "Work in hospitals, clinics, or community health centers. Specialize: ICU, OT, pediatrics, oncology."
    },
    {
      step: 4,
      title: "Global Opportunities",
      duration: "After 2+ years exp",
      description: "Pass NCLEX-RN for USA, NMC CBT for UK, or DHA/MOH for Gulf countries. Global salaries are significantly higher."
    }
  ],
  projects: [
    "Community health awareness campaign",
    "Patient education pamphlet design",
    "Clinical skills simulation and documentation",
    "Research on nursing outcomes in a specific area"
  ],
  resources: [
    {
      title: "Indian Nursing Council",
      type: "website",
      url: "https://www.indiannursingcouncil.org/",
      isFree: true,
      description: "Official regulatory body for nursing in India."
    },
    {
      title: "NCLEX Practice Questions — YouTube",
      type: "video",
      url: "https://www.youtube.com/results?search_query=NCLEX+RN+practice+questions",
      isFree: true,
      description: "Free NCLEX preparation resources."
    },
    {
      title: "Khan Academy — Biology & Health",
      type: "course",
      url: "https://www.khanacademy.org/science/health-and-medicine",
      isFree: true,
      description: "Free health and medicine foundation courses."
    },
    {
      title: "Osmosis — Medical Education Videos",
      type: "video",
      url: "https://www.youtube.com/@osmosis",
      isFree: true,
      description: "Excellent nursing and medical education channel."
    }
  ],
  resumeTips: [
    "List your nursing council registration number.",
    "Highlight specialized units worked: ICU, NICU, OT.",
    "For global jobs, note IELTS/OET scores prominently.",
    "Include any advanced certifications: BLS, ACLS, PALS."
  ]
};
const psychologist = {
  id: "psychologist",
  icon: "🧠",
  title: "Psychologist / Counselor",
  category: "Medicine",
  salaryRange: "₹3–25 LPA",
  jobOutlook: "Growing rapidly as mental health awareness increases",
  description: "Support mental wellbeing and help people navigate life's challenges. Psychologists assess, diagnose, and treat mental health conditions through research-backed therapeutic approaches.",
  tags: ["care", "empathy", "people", "expert"],
  skills: [
    "Psychological Assessment",
    "Counseling Techniques",
    "CBT (Cognitive Behavioral Therapy)",
    "Active Listening",
    "Report Writing",
    "Research Methods",
    "Crisis Intervention",
    "Ethics in Psychology",
    "Child & Adolescent Development"
  ],
  roadmap: [
    {
      step: 1,
      title: "B.A./B.Sc. in Psychology",
      duration: "3 years",
      description: "Complete undergraduate psychology. Top colleges: Delhi University, Christ University, Fergusson College."
    },
    {
      step: 2,
      title: "M.A./M.Sc. in Psychology",
      duration: "2 years",
      description: "Specialize: Clinical Psychology, Counseling, Organizational, or Child Psychology."
    },
    {
      step: 3,
      title: "M.Phil./PhD or RCI Certification",
      duration: "2+ years",
      description: "For clinical practice, complete M.Phil. in Clinical Psychology recognized by the Rehabilitation Council of India (RCI)."
    },
    {
      step: 4,
      title: "Build Practice",
      duration: "Ongoing",
      description: "Work in hospitals, NGOs, schools, or corporate wellness programs. Register with RCI for independent practice."
    }
  ],
  projects: [
    "Case study report on a psychological assessment",
    "CBT intervention plan for a presenting problem",
    "Community mental health awareness workshop",
    "Research study with data analysis"
  ],
  resources: [
    {
      title: "Rehabilitation Council of India",
      type: "website",
      url: "https://www.rehabcouncil.nic.in/",
      isFree: true,
      description: "Official regulatory body for clinical psychologists."
    },
    {
      title: "Coursera — Psychology Courses",
      type: "course",
      url: "https://www.coursera.org/browse/health/psychology",
      isFree: true,
      description: "Free audit of global psychology courses."
    },
    {
      title: "iCall — Mental Health Resources",
      type: "website",
      url: "https://icallhelpline.org/",
      isFree: true,
      description: "TISS iCall resources for psychology learning."
    },
    {
      title: "APA — Psychology Resources",
      type: "article",
      url: "https://www.apa.org/education-career",
      isFree: true,
      description: "American Psychological Association career resources."
    }
  ],
  resumeTips: [
    "List RCI registration number for clinical roles.",
    "Highlight therapy modalities trained in (CBT, DBT, EMDR).",
    "Research publications and internship hours are valuable.",
    "For corporate wellness roles, emphasize organizational psychology experience."
  ]
};
const contentCreator = {
  id: "content-creator",
  icon: "🎬",
  title: "Content Creator",
  category: "Media",
  salaryRange: "₹1–50 LPA (creator economy variable)",
  jobOutlook: "Booming — India has 50M+ content creators",
  description: "Build an audience and make a living telling stories. Content Creators produce video, writing, or audio that educates, entertains, and builds genuine communities across platforms.",
  tags: ["create", "story", "free", "people"],
  skills: [
    "Video Production & Editing",
    "Scriptwriting & Storytelling",
    "Thumbnail & Graphic Design",
    "SEO for YouTube/Blogs",
    "Audience Psychology",
    "Brand Partnerships",
    "Content Strategy",
    "Short-form Content (Reels, Shorts)",
    "Email List Building"
  ],
  roadmap: [
    {
      step: 1,
      title: "Find Your Niche & Voice",
      duration: "1 month",
      description: "Identify the intersection of your passion, skill, and audience demand. Commit to one primary platform first."
    },
    {
      step: 2,
      title: "Learn Production Basics",
      duration: "2 months",
      description: "Master your smartphone camera, basic lighting, and free editing software (DaVinci Resolve, CapCut)."
    },
    {
      step: 3,
      title: "Consistent Publishing",
      duration: "3 months",
      description: "Publish every week without fail for 3 months. Study analytics. Double down on what works."
    },
    {
      step: 4,
      title: "Monetization Strategies",
      duration: "After 6–12 months",
      description: "Explore YouTube Partner Program, brand deals, digital products, Patreon, and affiliate marketing."
    }
  ],
  projects: [
    "Publish 12 videos in 90 days with analytics tracking",
    "Build a content repurposing system",
    "Create a lead magnet to build email list",
    "Personal brand website with portfolio"
  ],
  resources: [
    {
      title: "Ali Abdaal — Content Creation",
      type: "video",
      url: "https://www.youtube.com/@aliabdaal",
      isFree: true,
      description: "Practical content creation and productivity channel."
    },
    {
      title: "Creator Science by Jay Clouse",
      type: "article",
      url: "https://creatorscience.com/",
      isFree: true,
      description: "Research-based newsletter on creator strategies."
    },
    {
      title: "DaVinci Resolve — Free Video Editing",
      type: "website",
      url: "https://www.blackmagicdesign.com/products/davinciresolve",
      isFree: true,
      description: "Professional-grade free video editing software."
    },
    {
      title: "Think Media — YouTube Growth",
      type: "video",
      url: "https://www.youtube.com/@ThinkMedia",
      isFree: true,
      description: "Growing on YouTube and content strategy."
    }
  ],
  resumeTips: [
    "Include channel stats: subscribers, total views, average view duration.",
    "Highlight brand deals and collaborations as professional experience.",
    "For agency jobs, emphasize production skills.",
    "Frame it as a business: 'Grew and monetized content business reaching 50K+ monthly viewers'."
  ]
};
const journalist = {
  id: "journalist",
  icon: "📰",
  title: "Journalist / Reporter",
  category: "Media",
  salaryRange: "₹2–20 LPA",
  jobOutlook: "Digital media growing; print declining",
  description: "Tell the stories that matter. Journalists investigate, report, and communicate news — holding power accountable and informing the public through print, broadcast, or digital media.",
  tags: ["story", "empathy", "civil", "public"],
  skills: [
    "Investigative Reporting",
    "Writing & Editing",
    "Interviewing Techniques",
    "Photography / Videography",
    "Digital Media Tools",
    "Social Media Journalism",
    "Data Journalism",
    "Media Law & Ethics",
    "Fact-Checking",
    "Source Management"
  ],
  roadmap: [
    {
      step: 1,
      title: "Journalism Degree or Course",
      duration: "1–3 years",
      description: "Complete B.A. in Journalism, Mass Communication, or an IIMC/ACJ short course. Any field degree works — start writing."
    },
    {
      step: 2,
      title: "Build a Writing Portfolio",
      duration: "Ongoing from day 1",
      description: "Start a blog. Pitch to student publications, local newspapers, or free platforms (Medium, Substack)."
    },
    {
      step: 3,
      title: "Reporting Internships",
      duration: "3–6 months",
      description: "Intern at newspapers, TV channels, or digital outlets. The Wire, NDTV, Times of India all take interns."
    },
    {
      step: 4,
      title: "Specialize & Network",
      duration: "2–3 years",
      description: "Cover a beat: politics, business, technology, sports, culture. Build a network of sources. Develop your voice."
    }
  ],
  projects: [
    "Investigate a local governance issue with 3 stakeholder interviews",
    "Write a data-driven analysis of a current social trend",
    "Produce a short documentary on a community story",
    "Start a niche newsletter on a topic you follow closely"
  ],
  resources: [
    {
      title: "IIMC — Indian Institute of Mass Communication",
      type: "website",
      url: "https://www.iimc.nic.in/",
      isFree: true,
      description: "Premier Indian journalism institute."
    },
    {
      title: "The Wire — Digital Journalism Model",
      type: "article",
      url: "https://thewire.in/",
      isFree: true,
      description: "Learn from India's leading digital news outlet."
    },
    {
      title: "Reuters Institute — Journalism Resources",
      type: "article",
      url: "https://reutersinstitute.politics.ox.ac.uk/",
      isFree: true,
      description: "Free journalism research and training resources."
    },
    {
      title: "Snap Judgement — Storytelling Podcast",
      type: "article",
      url: "https://snapjudgment.org/",
      isFree: true,
      description: "Excellent podcast on narrative journalism techniques."
    }
  ],
  resumeTips: [
    "Portfolio of published articles is essential — include links.",
    "List your reporting beat and notable stories.",
    "Highlight any awards, fellowships, or grants received.",
    "For digital media, show analytics: pageviews, social reach."
  ]
};
const writer = {
  id: "writer",
  icon: "📖",
  title: "Writer / Author",
  category: "Arts",
  salaryRange: "₹1–30 LPA (highly variable)",
  jobOutlook: "Multiple income paths: books, content, copywriting",
  description: "Craft worlds with words. Writers create fiction, non-fiction, poetry, screenplays, and copy — channeling ideas into language that moves, informs, and inspires readers.",
  tags: ["create", "story", "solo", "creative"],
  skills: [
    "Creative Writing",
    "Editing & Proofreading",
    "Narrative Structure",
    "Research Skills",
    "Copywriting",
    "Content Writing",
    "SEO Writing",
    "Screenplay Writing",
    "Literary Analysis",
    "Self-Publishing"
  ],
  roadmap: [
    {
      step: 1,
      title: "Read Voraciously",
      duration: "Ongoing",
      description: "Read 50+ books across genres. Study structure, voice, and technique. Read in your genre and outside it."
    },
    {
      step: 2,
      title: "Write Daily",
      duration: "Ongoing",
      description: "Commit to 500–1000 words daily. Keep a journal. Write short stories. Submit to magazines and competitions."
    },
    {
      step: 3,
      title: "Build an Online Presence",
      duration: "3–6 months",
      description: "Start a newsletter (Substack) or blog. Share your writing. Build an audience before publishing a book."
    },
    {
      step: 4,
      title: "Publishing Path",
      duration: "Variable",
      description: "For books: query literary agents (traditional publishing) or self-publish on Amazon KDP. For content writing: freelance immediately."
    }
  ],
  projects: [
    "Complete a short story collection of 10 pieces",
    "Write and self-publish an e-book",
    "Write a 30-day flash fiction challenge",
    "Start a Substack newsletter and reach 100 subscribers"
  ],
  resources: [
    {
      title: "MasterClass — Writing Classes",
      type: "video",
      url: "https://www.masterclass.com/categories/writing",
      isFree: false,
      description: "World-class writing instruction from published authors."
    },
    {
      title: "Scribophile — Writing Community",
      type: "website",
      url: "https://www.scribophile.com/",
      isFree: true,
      description: "Free online writing critique community."
    },
    {
      title: "Brandon Sanderson — Creative Writing Lectures",
      type: "video",
      url: "https://www.youtube.com/playlist?list=PLSH_xM-KC3Zv-79sVZTTj-YA6IAqh8qeQ",
      isFree: true,
      description: "Free university-level creative writing course."
    },
    {
      title: "Poets & Writers — Resources",
      type: "article",
      url: "https://www.pw.org/",
      isFree: true,
      description: "Resources for writers: grants, contests, literary agents."
    }
  ],
  resumeTips: [
    "List published works prominently: books, magazines, blogs.",
    "Include writing statistics for content roles: word count, traffic.",
    "For copywriting: include conversion metrics.",
    "Writing samples are your portfolio — always have 3–5 ready."
  ]
};
const musician = {
  id: "musician",
  icon: "🎵",
  title: "Musician / Performing Artist",
  category: "Arts",
  salaryRange: "₹1–50 LPA (performer/composer/teacher)",
  jobOutlook: "Multiple career paths; digital distribution enables global reach",
  description: "Create and share music that resonates. Musicians compose, perform, record, and teach — building careers across classical Indian music, film, Bollywood, independent music, and international genres.",
  tags: ["create", "story", "creative", "free"],
  skills: [
    "Instrumental Proficiency",
    "Music Theory",
    "Composition & Arrangement",
    "Music Production (DAWs)",
    "Performance",
    "Music History",
    "Audio Recording & Mixing",
    "Stage Presence",
    "Teaching",
    "Music Business Basics"
  ],
  roadmap: [
    {
      step: 1,
      title: "Master Your Instrument / Voice",
      duration: "Years of practice",
      description: "Study formally or self-teach. Aim for 10,000 hours of deliberate practice. Join music schools, gurukuls, or online academies."
    },
    {
      step: 2,
      title: "Learn Music Theory & Production",
      duration: "1–2 years",
      description: "Understand scales, harmony, and rhythm. Learn a DAW (GarageBand, FL Studio, Logic Pro). Start composing original music."
    },
    {
      step: 3,
      title: "Build a Portfolio of Recordings",
      duration: "Ongoing",
      description: "Record and release music on Spotify, Apple Music, YouTube. Document your journey on social media."
    },
    {
      step: 4,
      title: "Performance & Collaboration",
      duration: "Ongoing",
      description: "Play at local venues, open mics, and corporate events. Collaborate with other artists. Explore film/jingle scoring."
    }
  ],
  projects: [
    "Record and release a 5-song EP",
    "Compose music for a short film",
    "Teach 10 music lessons and document learning outcomes",
    "Perform at 5 live events"
  ],
  resources: [
    {
      title: "Swarnabhoomi Academy of Music",
      type: "website",
      url: "https://www.sam.edu.in/",
      isFree: false,
      description: "Premier contemporary music school in India."
    },
    {
      title: "Berklee Online — Free Courses",
      type: "course",
      url: "https://online.berklee.edu/free-courses",
      isFree: true,
      description: "Free music courses from world's top music school."
    },
    {
      title: "Musicca — Free Music Theory",
      type: "website",
      url: "https://www.musicca.com/",
      isFree: true,
      description: "Interactive free music theory exercises."
    },
    {
      title: "YouTube — SaReGaMaPa Music Academy",
      type: "video",
      url: "https://www.youtube.com/results?search_query=Indian+classical+music+lessons",
      isFree: true,
      description: "Free Indian classical music tutorials."
    }
  ],
  resumeTips: [
    "List instruments, voice type, and training background.",
    "Include discography or compositions portfolio.",
    "Performance credits and collaborations add credibility.",
    "For Bollywood/commercial music: mention studio experience."
  ]
};
const filmmaker = {
  id: "filmmaker",
  icon: "🎥",
  title: "Filmmaker / Director",
  category: "Media",
  salaryRange: "₹3–1 Crore+ (assistant to director range)",
  jobOutlook: "Booming with OTT platforms expanding in India",
  description: "Tell visual stories. Filmmakers write scripts, direct actors, and work with crews to create feature films, short films, documentaries, and web series for audiences worldwide.",
  tags: ["create", "story", "team", "creative"],
  skills: [
    "Screenwriting",
    "Directing",
    "Cinematography Basics",
    "Film Editing",
    "Story Structure",
    "Production Management",
    "Adobe Premiere / Final Cut Pro",
    "Sound Design",
    "Color Grading",
    "Film History & Analysis"
  ],
  roadmap: [
    {
      step: 1,
      title: "Film School or Self-Study",
      duration: "1–2 years",
      description: "Pursue FTII, SRFTI, or an NID course — OR self-teach through filmmaking YouTube channels and books."
    },
    {
      step: 2,
      title: "Make Short Films",
      duration: "Ongoing",
      description: "Make 5–10 short films. Submit to festivals. Each film teaches you more than any classroom."
    },
    {
      step: 3,
      title: "Enter the Industry",
      duration: "2–3 years",
      description: "Work as an assistant director (AD) or production assistant on films. The AD route is the traditional Indian industry entry point."
    },
    {
      step: 4,
      title: "Build Your Voice & Vision",
      duration: "Ongoing",
      description: "Develop a distinctive visual style. Submit to national and international film festivals. Apply for FD grants."
    }
  ],
  projects: [
    "Short film (under 15 minutes) submitted to a festival",
    "Documentary on a local community story",
    "Music video for an independent musician",
    "Web series pilot episode"
  ],
  resources: [
    {
      title: "FTII — Film and Television Institute of India",
      type: "website",
      url: "https://www.ftii.ac.in/",
      isFree: false,
      description: "India's premier film school in Pune."
    },
    {
      title: "StudioBinder — Filmmaking Resources",
      type: "article",
      url: "https://www.studiobinder.com/blog/",
      isFree: true,
      description: "Free guides on directing, screenwriting, and production."
    },
    {
      title: "Film Riot — Filmmaking YouTube",
      type: "video",
      url: "https://www.youtube.com/@FilmRiot",
      isFree: true,
      description: "Practical filmmaking techniques and tutorials."
    },
    {
      title: "No Film School — Industry News",
      type: "article",
      url: "https://nofilmschool.com/",
      isFree: true,
      description: "Filmmaking resources and industry insights."
    }
  ],
  resumeTips: [
    "List director credits with genre and runtime.",
    "Include festival selections and awards.",
    "For AD roles, emphasize organizational and communication skills.",
    "Show range: narrative, documentary, commercial."
  ]
};
const teacher = {
  id: "teacher",
  icon: "📚",
  title: "Teacher / Educator",
  category: "Education",
  salaryRange: "₹2–20 LPA (private schools higher)",
  jobOutlook: "Permanent demand; ed-tech opening new revenue streams",
  description: "Shape the future one student at a time. Teachers design learning experiences, mentor young minds, and play an irreplaceable role in building the knowledge and character of the next generation.",
  tags: ["care", "empathy", "people", "team"],
  skills: [
    "Subject Matter Expertise",
    "Lesson Planning",
    "Classroom Management",
    "Assessment Design",
    "Communication",
    "Differentiated Instruction",
    "Ed-Tech Tools",
    "Student Mentoring",
    "Curriculum Development",
    "Parent Communication"
  ],
  roadmap: [
    {
      step: 1,
      title: "Subject Degree",
      duration: "3 years",
      description: "Complete a B.A./B.Sc./B.Com. in your chosen subject. Strong subject knowledge is the foundation."
    },
    {
      step: 2,
      title: "B.Ed. (Bachelor of Education)",
      duration: "2 years",
      description: "Complete B.Ed. — mandatory for teaching in recognized schools. Covers pedagogy, child development, and teaching practice."
    },
    {
      step: 3,
      title: "CTET / State TET",
      duration: "Exam prep 3–6 months",
      description: "Clear CTET (Central Teacher Eligibility Test) or State TET. This is required for government school teaching positions."
    },
    {
      step: 4,
      title: "Build Your Classroom / Online Presence",
      duration: "Ongoing",
      description: "Apply to reputed schools. Or build an online teaching practice via YouTube, Unacademy, Vedantu, or your own platform."
    }
  ],
  projects: [
    "Design a complete unit plan with lesson plans and assessments",
    "Create a YouTube educational series on your subject",
    "Develop an innovative classroom project for a concept you teach",
    "Build a free study resource website for students"
  ],
  resources: [
    {
      title: "NCERT Official Portal",
      type: "website",
      url: "https://ncert.nic.in/",
      isFree: true,
      description: "Official NCERT curriculum, textbooks, and teacher resources."
    },
    {
      title: "SWAYAM Prabha — Educational TV",
      type: "video",
      url: "https://www.swayamprabha.gov.in/",
      isFree: true,
      description: "Free DTH educational channels for school and college."
    },
    {
      title: "Khan Academy — All Subjects",
      type: "course",
      url: "https://www.khanacademy.org/",
      isFree: true,
      description: "World's best free education platform."
    },
    {
      title: "Diksha Platform — Teacher Resources",
      type: "website",
      url: "https://diksha.gov.in/",
      isFree: true,
      description: "India's national digital education platform for teachers."
    }
  ],
  resumeTips: [
    "List CTET/TET scores and certification year.",
    "Highlight student outcomes: board exam results, competition wins.",
    "Include any innovative teaching methods or ed-tech tools used.",
    "For online teaching: list platform, subscriber count, and ratings."
  ]
};
const agronomist = {
  id: "agronomist",
  icon: "🌾",
  title: "Agricultural Scientist / Agronomist",
  category: "Agriculture",
  salaryRange: "₹3–20 LPA",
  jobOutlook: "Growing with precision agriculture and food security focus",
  description: "Feed the world with science. Agricultural scientists research crops, soil, and farming systems to increase yields, improve sustainability, and transform India's agricultural sector.",
  tags: ["analyze", "build", "expert", "public"],
  skills: [
    "Crop Science & Agronomy",
    "Soil Science",
    "Plant Pathology",
    "Agricultural Biotechnology",
    "Irrigation Management",
    "Farm Management",
    "ICAR Research Methods",
    "Remote Sensing (GIS)",
    "Agricultural Economics",
    "Extension Education"
  ],
  roadmap: [
    {
      step: 1,
      title: "B.Sc. Agriculture",
      duration: "4 years",
      description: "Complete B.Sc. Agriculture from state agricultural university or ICAR-affiliated institute."
    },
    {
      step: 2,
      title: "M.Sc. Agriculture (Specialization)",
      duration: "2 years",
      description: "Specialize in Agronomy, Plant Breeding, Soil Science, Horticulture, or Agricultural Economics."
    },
    {
      step: 3,
      title: "ICAR-JRF / SRF Research",
      duration: "2–5 years",
      description: "Qualify ICAR-JRF to pursue PhD or junior research positions at ICAR institutes and SAUs."
    },
    {
      step: 4,
      title: "PhD & Extension / Industry",
      duration: "3+ years",
      description: "Complete PhD for academic/research career OR join agri-business, input companies, or government extension services."
    }
  ],
  projects: [
    "Field experiment on crop variety comparison",
    "Soil health assessment of a local farm",
    "Business plan for a precision agriculture startup",
    "Farmer survey on adoption of new technologies"
  ],
  resources: [
    {
      title: "ICAR — Indian Agricultural Research Institute",
      type: "website",
      url: "https://www.icar.org.in/",
      isFree: true,
      description: "India's apex agricultural research body with free resources."
    },
    {
      title: "AgriStudy — Free Agriculture Material",
      type: "website",
      url: "https://www.agristudy.in/",
      isFree: true,
      description: "Free study material for ICAR JRF and agriculture exams."
    },
    {
      title: "Krishi Jagran — Agriculture News",
      type: "article",
      url: "https://www.krishijagran.com/",
      isFree: true,
      description: "Latest agriculture news and farming innovations."
    },
    {
      title: "NPTEL — Agriculture Courses",
      type: "course",
      url: "https://nptel.ac.in/courses/119",
      isFree: true,
      description: "Free agriculture courses from IIT and NIT professors."
    }
  ],
  resumeTips: [
    "List ICAR JRF/SRF score and rank.",
    "Highlight field research experience and publications.",
    "For agri-business roles, emphasize practical farm management.",
    "Mention regional crop and soil expertise."
  ]
};
const socialWorker = {
  id: "social-worker",
  icon: "🤝",
  title: "Social Worker / NGO Professional",
  category: "Social Work",
  salaryRange: "₹2–15 LPA (NGO/Government/UN agencies)",
  jobOutlook: "Growing with increased CSR and government social spending",
  description: "Create change from the ground up. Social Workers work with vulnerable communities — providing counseling, advocacy, and programs that address poverty, rights, and social justice.",
  tags: ["care", "empathy", "people", "public"],
  skills: [
    "Community Development",
    "Case Management",
    "Counseling Techniques",
    "Grant Writing",
    "Project Management",
    "Advocacy & Policy",
    "Field Research",
    "Data Collection & Reporting",
    "NGO Management",
    "Legal Rights Knowledge"
  ],
  roadmap: [
    {
      step: 1,
      title: "BSW (Bachelor of Social Work)",
      duration: "3 years",
      description: "Complete BSW from TISS, Delhi School of Social Work, or similar. Includes mandatory field placements."
    },
    {
      step: 2,
      title: "MSW (Master of Social Work)",
      duration: "2 years",
      description: "Specialize in: Community Development, Medical Social Work, Family & Child Welfare, or Rural Development."
    },
    {
      step: 3,
      title: "Field Work & NGO Experience",
      duration: "Ongoing",
      description: "Volunteer with or intern at NGOs. Build expertise in a specific population or issue area."
    },
    {
      step: 4,
      title: "Advance to Policy or Management",
      duration: "5+ years",
      description: "Move into program management, policy advocacy, or UN agency work. Pursue TISS or overseas fellowships."
    }
  ],
  projects: [
    "Community needs assessment survey",
    "Grant proposal for a social initiative",
    "Awareness campaign on a local social issue",
    "Case study documentation for a community intervention"
  ],
  resources: [
    {
      title: "TISS — Tata Institute of Social Sciences",
      type: "website",
      url: "https://www.tiss.edu/",
      isFree: true,
      description: "India's premier social work institution and resources."
    },
    {
      title: "CaFE — Career & Freedom Education",
      type: "website",
      url: "https://www.cafeindia.org/",
      isFree: true,
      description: "Resources for development sector careers."
    },
    {
      title: "Development Aid Jobs",
      type: "website",
      url: "https://www.developmentaid.org/jobs",
      isFree: true,
      description: "International development and NGO job listings."
    },
    {
      title: "Coursera — Social Work Courses",
      type: "course",
      url: "https://www.coursera.org/search?query=social+work",
      isFree: true,
      description: "Free audit of global social work courses."
    }
  ],
  resumeTips: [
    "List fieldwork hours and populations served.",
    "Highlight specific programs designed and impact measured.",
    "Grant writing experience is highly valued — mention amounts.",
    "For international roles, note language proficiency."
  ]
};
const sportsAthlete = {
  id: "sports-athlete",
  icon: "🏅",
  title: "Professional Athlete / Sports Career",
  category: "Sports",
  salaryRange: "₹2–10 Crore+ (elite); coaching ₹3–20 LPA",
  jobOutlook: "Khelo India and government support growing opportunities",
  description: "Turn athletic excellence into a profession. From cricket to chess, kabaddi to athletics — India's sports ecosystem is expanding, opening paths in performance, coaching, management, and sports science.",
  tags: ["build", "expert", "team", "free"],
  skills: [
    "Sport-Specific Technical Skills",
    "Physical Conditioning",
    "Mental Strength & Resilience",
    "Tactical Understanding",
    "Nutrition & Recovery",
    "Team Collaboration",
    "Sports Psychology",
    "Self-Discipline",
    "Injury Prevention",
    "Leadership"
  ],
  roadmap: [
    {
      step: 1,
      title: "Early Specialization & Academy Training",
      duration: "School years",
      description: "Join a sports academy early. District, state, and national representation builds your profile."
    },
    {
      step: 2,
      title: "Academic + Sports Balance",
      duration: "College years",
      description: "Pursue a degree (Sports Science, Physical Education, or any field). Inter-university sports add credentials."
    },
    {
      step: 3,
      title: "Professional Selection & Trials",
      duration: "Ongoing",
      description: "Participate in Khelo India Games, university tournaments, national trials for your sport."
    },
    {
      step: 4,
      title: "Beyond Performance: Career Transition",
      duration: "Post-playing years",
      description: "Move into coaching, sports management, sports journalism, or commentary. Physical Education teaching is a stable option."
    }
  ],
  projects: [
    "Training logbook with data tracking over 90 days",
    "Sports nutrition plan with a certified dietitian",
    "Coach a youth team for a season",
    "Document your athletic journey as a blog or YouTube channel"
  ],
  resources: [
    {
      title: "Sports Authority of India (SAI)",
      type: "website",
      url: "https://sportsauthorityofindia.nic.in/",
      isFree: true,
      description: "Government sports scholarships, academies, and programs."
    },
    {
      title: "Khelo India — Athlete Registration",
      type: "website",
      url: "https://kheloindia.gov.in/",
      isFree: true,
      description: "National sports development program for young athletes."
    },
    {
      title: "NSNIS — Netaji Subhas National Institute of Sports",
      type: "website",
      url: "https://nsnis.nic.in/",
      isFree: true,
      description: "Coaching certifications and sports science resources."
    },
    {
      title: "Olympic Channel — Athlete Stories",
      type: "video",
      url: "https://www.olympicchannel.com/",
      isFree: true,
      description: "Inspiring athlete stories and training insights."
    }
  ],
  resumeTips: [
    "List competitions, ranking, and medals at district/state/national level.",
    "For coaching/management roles, highlight leadership and teaching experience.",
    "Academic credentials strengthen sports management applications.",
    "Mention any sponsorships or brand partnerships."
  ]
};
const scientist = {
  id: "scientist",
  icon: "🔬",
  title: "Research Scientist",
  category: "Science",
  salaryRange: "₹4–30 LPA + research grants",
  jobOutlook: "Growing with India's R&D investment",
  description: "Push the boundaries of human knowledge. Research Scientists conduct experiments, publish findings, and contribute to the global body of knowledge — from basic science to applied research in industry.",
  tags: ["analyze", "logic", "solo", "expert"],
  skills: [
    "Scientific Method & Research Design",
    "Laboratory Techniques",
    "Statistical Analysis",
    "Scientific Writing",
    "Data Analysis (R/Python/MATLAB)",
    "Literature Review",
    "Grant Writing",
    "Peer Review",
    "Domain Specialization",
    "Collaboration"
  ],
  roadmap: [
    {
      step: 1,
      title: "Strong Science Undergraduate",
      duration: "3 years",
      description: "B.Sc. in Physics, Chemistry, Biology, Biotechnology, or related. Aim for a good CGPA and IIT/IISc if possible."
    },
    {
      step: 2,
      title: "M.Sc. / M.Tech",
      duration: "2 years",
      description: "Choose a specialization. IISER, IISc, and IIT postgraduate programs are excellent. Focus on research projects."
    },
    {
      step: 3,
      title: "CSIR-NET / GATE for Research",
      duration: "Exam prep 6 months",
      description: "Qualify CSIR-NET (JRF) for life sciences or GATE for engineering. This funds your PhD stipend."
    },
    {
      step: 4,
      title: "PhD & Post-Doctoral Research",
      duration: "4–6 years",
      description: "Join a research group at IIT, IISc, IISER, or CSIR labs. Publish in international journals."
    }
  ],
  projects: [
    "Undergraduate research project with faculty mentor",
    "Literature review published as a review article",
    "Conference presentation at a national symposium",
    "Replication study of a published experiment"
  ],
  resources: [
    {
      title: "CSIR — Council of Scientific & Industrial Research",
      type: "website",
      url: "https://www.csir.res.in/",
      isFree: true,
      description: "India's largest research body with career resources."
    },
    {
      title: "IISER — Research Opportunities",
      type: "website",
      url: "https://www.iiserpune.ac.in/",
      isFree: true,
      description: "India's premier institutes for basic science research."
    },
    {
      title: "Coursera — Research Methods",
      type: "course",
      url: "https://www.coursera.org/search?query=research+methods",
      isFree: true,
      description: "Free research methodology courses."
    },
    {
      title: "SciHub alternatives — Open Access",
      type: "website",
      url: "https://www.unpaywall.org/",
      isFree: true,
      description: "Legal free access to research papers."
    }
  ],
  resumeTips: [
    "List CSIR-NET/GATE rank prominently.",
    "Highlight publications, even conference proceedings.",
    "Research internships at national labs are highly valued.",
    "For industry R&D: show how research translates to applications."
  ]
};
const civilEngineer = {
  id: "civil-engineer",
  icon: "🏗️",
  title: "Civil Engineer",
  category: "Engineering",
  salaryRange: "₹3–20 LPA",
  jobOutlook: "Strong with infrastructure expansion across India",
  description: "Build the world's physical infrastructure. Civil Engineers design, construct, and maintain roads, bridges, dams, buildings, and water systems that form the backbone of civilization.",
  tags: ["build", "logic", "manage", "expert"],
  skills: [
    "Structural Analysis",
    "AutoCAD & Civil 3D",
    "Construction Management",
    "Surveying",
    "Soil Mechanics",
    "Project Estimation",
    "Building Materials",
    "BIM (Building Information Modeling)",
    "Environmental Engineering",
    "Contract Management"
  ],
  roadmap: [
    {
      step: 1,
      title: "B.Tech / B.E. in Civil Engineering",
      duration: "4 years",
      description: "Complete an AICTE-approved B.Tech in Civil Engineering. JEE/state entrance exams for admission."
    },
    {
      step: 2,
      title: "Software Proficiency",
      duration: "During college",
      description: "Master AutoCAD, STAAD Pro, ETABS, and MS Project. These are industry-standard tools."
    },
    {
      step: 3,
      title: "Site Internships & GATE",
      duration: "Final years",
      description: "Get site experience through internships. Qualify GATE for M.Tech or PSU jobs (NHAI, RVNL, CPWD)."
    },
    {
      step: 4,
      title: "Specialization",
      duration: "2–5 years",
      description: "Specialize in: structural, geotechnical, transportation, water resources, or environmental engineering."
    }
  ],
  projects: [
    "Structural design of a residential building in AutoCAD",
    "Detailed project report for an infrastructure project",
    "Soil test analysis and foundation design",
    "Construction schedule for a hypothetical project"
  ],
  resources: [
    {
      title: "NPTEL — Civil Engineering Courses",
      type: "course",
      url: "https://nptel.ac.in/courses/105",
      isFree: true,
      description: "Free civil engineering courses from IIT professors."
    },
    {
      title: "GATE Wallah — Civil Engineering",
      type: "video",
      url: "https://www.youtube.com/@GATEWallah",
      isFree: true,
      description: "Free GATE Civil Engineering preparation."
    },
    {
      title: "AutoCAD Tutorials — YouTube",
      type: "video",
      url: "https://www.youtube.com/results?search_query=AutoCAD+tutorial+civil+engineering",
      isFree: true,
      description: "Free AutoCAD learning resources."
    },
    {
      title: "Indian Roads Congress",
      type: "website",
      url: "https://irc.nic.in/",
      isFree: true,
      description: "Standard specifications and codes for road design."
    }
  ],
  resumeTips: [
    "List software skills prominently: AutoCAD, STAAD Pro, ETABS.",
    "Include internship projects with scope and your role.",
    "GATE score opens PSU jobs — mention it if cleared.",
    "Specify type of construction experience: residential, commercial, infrastructure."
  ]
};
const architect = {
  id: "architect",
  icon: "🏛️",
  title: "Architect",
  category: "Engineering",
  salaryRange: "₹3–30 LPA",
  jobOutlook: "Growing with real estate and urban development",
  description: "Create spaces where life happens. Architects design buildings, interiors, and urban spaces — blending aesthetics, functionality, and engineering into structures that endure.",
  tags: ["create", "build", "logic", "creative"],
  skills: [
    "Architectural Design & Drawing",
    "AutoCAD & Revit",
    "3D Modeling (SketchUp, Rhino)",
    "Building Construction",
    "Urban Planning Basics",
    "Interior Design",
    "Sustainable Design",
    "Client Communication",
    "Site Analysis",
    "Building Regulations"
  ],
  roadmap: [
    {
      step: 1,
      title: "B.Arch. (5 years)",
      duration: "5 years",
      description: "Complete B.Arch. from a COA-recognized institution. NATA entrance exam is required for most top schools."
    },
    {
      step: 2,
      title: "Master CAD & 3D Software",
      duration: "During college",
      description: "Master AutoCAD, Revit, SketchUp, and rendering tools (Lumion, V-Ray). These are essential for any studio."
    },
    {
      step: 3,
      title: "2-Year Internship (COA Requirement)",
      duration: "2 years",
      description: "Mandatory architectural experience under a registered architect before COA registration."
    },
    {
      step: 4,
      title: "COA Registration & Independent Practice",
      duration: "After internship",
      description: "Register with the Council of Architecture. Join a firm or start your own practice. Specialize (interior, sustainable, hospitality)."
    }
  ],
  projects: [
    "Housing society design with sustainable features",
    "Cultural center space planning project",
    "Interior design of a commercial office",
    "Portfolio of 5 design projects at different scales"
  ],
  resources: [
    {
      title: "Council of Architecture India",
      type: "website",
      url: "https://www.coa.gov.in/",
      isFree: true,
      description: "Official regulatory body for architects in India."
    },
    {
      title: "ArchDaily — Architecture Inspiration",
      type: "article",
      url: "https://www.archdaily.com/",
      isFree: true,
      description: "World's leading architecture news and inspiration site."
    },
    {
      title: "NATA Preparation Resources",
      type: "website",
      url: "https://www.nata.in/",
      isFree: true,
      description: "Official NATA information and preparation resources."
    },
    {
      title: "Dezeen — Architecture & Design",
      type: "article",
      url: "https://www.dezeen.com/",
      isFree: true,
      description: "Global architecture and design magazine."
    }
  ],
  resumeTips: [
    "Portfolio of rendered projects is essential for architecture jobs.",
    "COA registration status and registration number.",
    "List software proficiency: AutoCAD, Revit, SketchUp, rendering tools.",
    "Specify project types: residential, commercial, public."
  ]
};
const careersById = {
  "software-engineer": softwareEngineer,
  "data-scientist": dataScientist,
  "ux-designer": uxDesigner,
  "graphic-designer": graphicDesigner,
  "fashion-designer": fashionDesigner,
  "product-manager": productManager,
  "ca-finance": caFinance,
  entrepreneur,
  "digital-marketer": digitalMarketer,
  "civil-services": civilServices,
  lawyer,
  doctor,
  nurse,
  psychologist,
  "content-creator": contentCreator,
  journalist,
  writer,
  musician,
  filmmaker,
  teacher,
  agronomist,
  "social-worker": socialWorker,
  "sports-athlete": sportsAthlete,
  scientist,
  "civil-engineer": civilEngineer,
  architect
};
const allCareers = Object.values(careersById);
const careerFields = [
  "All",
  "Technology",
  "Analytics",
  "Design",
  "Business",
  "Commerce",
  "Marketing",
  "Government",
  "Law",
  "Medicine",
  "Media",
  "Arts",
  "Education",
  "Agriculture",
  "Social Work",
  "Sports",
  "Science",
  "Engineering"
];
export {
  allCareers as a,
  careerFields as b,
  careersById as c,
  getMatchScore as g,
  matchCareers as m,
  quizQuestions as q
};
