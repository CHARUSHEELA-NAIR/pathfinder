import Types "../types";
import List "mo:core/List";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";

module {
  // Seed all quiz questions — broader coverage across all Indian career fields
  public func seedQuestions() : List.List<Types.QuizQuestion> {
    let questions = List.empty<Types.QuizQuestion>();

    questions.add({
      id = 0;
      question = "What type of activities excite you most?";
      options = [
        { id = 0; text = "Building or fixing things with technology"; keywords = ["technology", "engineering", "software", "data", "mechanical", "electrical", "civil"] },
        { id = 1; text = "Helping, healing, or caring for people"; keywords = ["medicine", "nursing", "social-work", "psychology", "public-health"] },
        { id = 2; text = "Creating art, music, writing, or performance"; keywords = ["arts", "music", "theatre", "creative", "media", "content", "design", "film"] },
        { id = 3; text = "Leading, managing, or running a business"; keywords = ["management", "business", "entrepreneur", "marketing", "consulting"] },
        { id = 4; text = "Studying society, history, law, or governance"; keywords = ["law", "humanities", "government", "civil-services", "social-work", "policy"] },
        { id = 5; text = "Working with nature, animals, or the environment"; keywords = ["agriculture", "forestry", "veterinary", "environment", "food-tech"] },
      ];
    });

    questions.add({
      id = 1;
      question = "Which school subjects did you enjoy most?";
      options = [
        { id = 0; text = "Maths, Physics, or Computer Science"; keywords = ["software", "data", "engineering", "technology", "mechanical", "electrical", "civil", "aerospace"] },
        { id = 1; text = "Biology, Chemistry, or life sciences"; keywords = ["medicine", "pharmacy", "nursing", "public-health", "agriculture", "food-tech", "biomedical", "veterinary"] },
        { id = 2; text = "History, Civics, Geography, or Political Science"; keywords = ["humanities", "civil-services", "law", "policy", "government", "social-work"] },
        { id = 3; text = "Art, Music, Literature, or Languages"; keywords = ["arts", "music", "theatre", "design", "media", "content", "film", "creative"] },
        { id = 4; text = "Commerce, Economics, or Business Studies"; keywords = ["finance", "accounting", "business", "marketing", "entrepreneur", "consulting", "banking", "commerce"] },
        { id = 5; text = "Physical Education, Sports, or NCC"; keywords = ["sports", "defence", "government"] },
      ];
    });

    questions.add({
      id = 2;
      question = "How do you prefer to spend your time?";
      options = [
        { id = 0; text = "Solving technical problems or writing code"; keywords = ["software", "data", "engineering", "technology"] },
        { id = 1; text = "Designing, drawing, or making creative things"; keywords = ["design", "arts", "creative", "film", "animation", "fashion", "interior"] },
        { id = 2; text = "Reading, researching, or writing articles"; keywords = ["humanities", "law", "media", "content", "journalism", "academic"] },
        { id = 3; text = "Talking to people, networking, or persuading"; keywords = ["marketing", "sales", "management", "media", "journalism", "public-relations", "consulting"] },
        { id = 4; text = "Helping others or doing community work"; keywords = ["social-work", "public-health", "ngo", "policy", "medicine", "nursing"] },
        { id = 5; text = "Working outdoors or with natural resources"; keywords = ["agriculture", "forestry", "environment", "veterinary", "sports"] },
      ];
    });

    questions.add({
      id = 3;
      question = "What kind of work environment suits you?";
      options = [
        { id = 0; text = "Office or tech company (startup or MNC)"; keywords = ["software", "data", "product", "entrepreneur", "business", "marketing"] },
        { id = 1; text = "Hospital, clinic, or health centre"; keywords = ["medicine", "nursing", "pharmacy", "public-health", "physiotherapy"] },
        { id = 2; text = "Government office, court, or civil service"; keywords = ["civil-services", "law", "government", "defence", "police", "policy"] },
        { id = 3; text = "Studio, agency, stage, or film set"; keywords = ["arts", "music", "theatre", "film", "design", "media", "content", "animation"] },
        { id = 4; text = "Field, farm, forest, or outdoors"; keywords = ["agriculture", "forestry", "environment", "sports", "veterinary"] },
        { id = 5; text = "School, university, or research institute"; keywords = ["academic", "humanities", "social-work", "policy", "engineering"] },
      ];
    });

    questions.add({
      id = 4;
      question = "What motivates you most at work?";
      options = [
        { id = 0; text = "Building products that millions of people use"; keywords = ["software", "product", "data", "entrepreneur", "technology"] },
        { id = 1; text = "Making a difference in people's lives"; keywords = ["medicine", "social-work", "ngo", "public-health", "nursing", "policy"] },
        { id = 2; text = "Expressing creativity and original ideas"; keywords = ["arts", "design", "film", "music", "creative", "content", "media"] },
        { id = 3; text = "Earning money and achieving financial success"; keywords = ["finance", "banking", "business", "marketing", "entrepreneur", "commerce", "consulting"] },
        { id = 4; text = "Protecting justice, law, and the nation"; keywords = ["law", "civil-services", "defence", "government", "police"] },
        { id = 5; text = "Discovering or advancing human knowledge"; keywords = ["academic", "engineering", "humanities", "agriculture", "environment"] },
      ];
    });

    questions.add({
      id = 5;
      question = "Which of these best describes your personality?";
      options = [
        { id = 0; text = "Analytical and logical — I love solving puzzles"; keywords = ["software", "data", "engineering", "finance", "law", "technology"] },
        { id = 1; text = "Empathetic and caring — people often come to me with problems"; keywords = ["medicine", "nursing", "social-work", "psychology", "public-health"] },
        { id = 2; text = "Creative and expressive — I see beauty in everything"; keywords = ["arts", "design", "music", "theatre", "film", "content", "creative"] },
        { id = 3; text = "Ambitious and entrepreneurial — I want to build something big"; keywords = ["business", "entrepreneur", "marketing", "management", "consulting"] },
        { id = 4; text = "Principled and responsible — I care about justice and ethics"; keywords = ["law", "civil-services", "government", "defence", "policy", "social-work"] },
        { id = 5; text = "Adventurous and hands-on — I prefer doing over thinking"; keywords = ["sports", "agriculture", "engineering", "environment", "veterinary"] },
      ];
    });

    questions;
  };

  // Seed all career definitions — full coverage of all Indian fields
  public func seedCareers() : List.List<Types.Career> {
    let careers = List.empty<Types.Career>();

    // ─── TECHNOLOGY & ENGINEERING ───────────────────────────────

    careers.add({
      id = "software-engineer";
      title = "Software Engineer";
      field = "Technology";
      description = "Design, build, and maintain software systems and applications. One of the most in-demand careers globally with strong remote opportunities.";
      requiredSkills = ["Programming (Python/JavaScript/Java)", "Data structures & algorithms", "Version control (Git)", "System design", "Problem-solving"];
      roadmap = [
        "Learn programming fundamentals (Python or JavaScript)",
        "Study data structures and algorithms",
        "Build 3-5 personal projects",
        "Learn web/mobile frameworks",
        "Contribute to open source",
        "Prepare for technical interviews",
        "Apply for internships and entry-level roles",
      ];
      projects = [
        "Build a to-do app with full CRUD functionality",
        "Create a weather app using a public API",
        "Build a personal portfolio website",
        "Develop a simple e-commerce site",
        "Contribute to an open-source repository",
      ];
      freeResources = [
        { title = "CS50 by Harvard (free)"; url = "https://cs50.harvard.edu/x/"; resourceType = "course" },
        { title = "The Odin Project"; url = "https://www.theodinproject.com/"; resourceType = "course" },
        { title = "freeCodeCamp"; url = "https://www.freecodecamp.org/"; resourceType = "course" },
        { title = "Traversy Media (YouTube)"; url = "https://www.youtube.com/@TraversyMedia"; resourceType = "video" },
        { title = "LeetCode for practice"; url = "https://leetcode.com/"; resourceType = "practice" },
      ];
      resumeTips = [
        "Highlight projects with GitHub links",
        "Quantify impact: 'Reduced load time by 40%'",
        "List tech stack clearly in each project",
        "Include contributions to open source",
        "Keep to 1 page for entry-level",
      ];
      salaryRange = "₹4–12 LPA entry, ₹20–60 LPA senior";
      jobOutlook = "Very high demand globally; remote work widely available";
      keywords = ["software", "technology", "engineering", "data"];
    });

    careers.add({
      id = "data-scientist";
      title = "Data Scientist";
      field = "Technology";
      description = "Extract insights from complex datasets to drive business decisions. Combines statistics, programming, and domain expertise.";
      requiredSkills = ["Python or R programming", "Statistics & probability", "Machine learning", "SQL", "Data visualization"];
      roadmap = [
        "Learn Python and statistics fundamentals",
        "Study SQL for data manipulation",
        "Learn pandas, NumPy, and scikit-learn",
        "Work on Kaggle datasets and competitions",
        "Build an end-to-end ML project",
        "Learn data visualization (matplotlib, Tableau)",
        "Apply for data analyst roles to gain experience",
      ];
      projects = [
        "Predict housing prices using regression",
        "Build a sentiment analysis model",
        "Create a dashboard for COVID-19 data",
        "Recommend movies using collaborative filtering",
        "Classify customer churn for a telecom dataset",
      ];
      freeResources = [
        { title = "Kaggle Learn"; url = "https://www.kaggle.com/learn"; resourceType = "course" },
        { title = "Google ML Crash Course"; url = "https://developers.google.com/machine-learning/crash-course"; resourceType = "course" },
        { title = "StatQuest (YouTube)"; url = "https://www.youtube.com/@statquest"; resourceType = "video" },
        { title = "Fast.ai free deep learning courses"; url = "https://www.fast.ai/"; resourceType = "course" },
        { title = "Towards Data Science blog"; url = "https://towardsdatascience.com/"; resourceType = "article" },
      ];
      resumeTips = [
        "Include Kaggle rankings or competition results",
        "Link to GitHub notebooks and projects",
        "Describe datasets used (size and complexity)",
        "Mention specific models and accuracy metrics",
        "Highlight business impact of your analysis",
      ];
      salaryRange = "₹5–15 LPA entry, ₹25–80 LPA senior";
      jobOutlook = "Very high demand; every industry hiring data talent";
      keywords = ["data", "software", "technology", "engineering"];
    });

    careers.add({
      id = "mechanical-engineer";
      title = "Mechanical Engineer";
      field = "Engineering";
      description = "Design, analyze, and manufacture mechanical systems and devices — from engines to medical equipment to consumer products.";
      requiredSkills = ["CAD/CAM software (AutoCAD, SolidWorks)", "Thermodynamics & fluid mechanics", "Materials science", "Manufacturing processes", "Problem-solving"];
      roadmap = [
        "Complete B.E./B.Tech in Mechanical Engineering",
        "Master CAD tools: AutoCAD, SolidWorks, CATIA",
        "Intern at a manufacturing company",
        "Learn FEA and simulation software (ANSYS)",
        "Get certified in relevant software",
        "Apply for graduate engineer trainee roles",
        "Specialize in automotive, aerospace, or HVAC",
      ];
      projects = [
        "Design a mechanical arm using CAD software",
        "Build a working model of a 4-stroke engine",
        "Design and test a heat exchanger",
        "Create a product prototype using 3D printing",
        "Conduct failure analysis on a broken component",
      ];
      freeResources = [
        { title = "MIT OpenCourseWare — Mechanical Eng"; url = "https://ocw.mit.edu/course-lists/mechanical-engineering/"; resourceType = "course" },
        { title = "NPTEL Mechanical courses (free)"; url = "https://nptel.ac.in/course.html"; resourceType = "course" },
        { title = "Engineer4Free (YouTube)"; url = "https://www.youtube.com/@Engineer4Free"; resourceType = "video" },
        { title = "GrabCAD free CAD library"; url = "https://grabcad.com/library"; resourceType = "community" },
        { title = "The Engineering Mindset (YouTube)"; url = "https://www.youtube.com/@TheEngineeringMindset"; resourceType = "video" },
      ];
      resumeTips = [
        "List CAD tools and software proficiencies",
        "Include internship projects with technical details",
        "Mention any patents or published designs",
        "Show project outcomes: weight reduction, cost savings",
        "Include GATE score if applicable",
      ];
      salaryRange = "₹3–7 LPA entry, ₹12–35 LPA senior";
      jobOutlook = "Steady demand in manufacturing, automotive, defence";
      keywords = ["engineering", "mechanical", "technology"];
    });

    careers.add({
      id = "civil-engineer";
      title = "Civil Engineer";
      field = "Engineering";
      description = "Plan, design, and supervise construction of infrastructure — buildings, bridges, roads, dams, and water systems.";
      requiredSkills = ["Structural analysis", "AutoCAD & civil software", "Project management", "Building codes & standards", "Surveying"];
      roadmap = [
        "Complete B.E./B.Tech in Civil Engineering",
        "Learn AutoCAD and STAAD Pro",
        "Intern with a construction or infrastructure firm",
        "Study IS codes and building regulations",
        "Get familiar with project management tools",
        "Prepare for government exams (CPWD, PWD, railways)",
        "Consider M.Tech or MBA for senior roles",
      ];
      projects = [
        "Design a residential building structure in AutoCAD",
        "Conduct a soil bearing capacity test",
        "Plan a drainage system for a small locality",
        "Estimate cost for a building construction",
        "Create a detailed structural analysis report",
      ];
      freeResources = [
        { title = "NPTEL Civil Engineering courses"; url = "https://nptel.ac.in/course.html"; resourceType = "course" },
        { title = "Civil Engineering Academy (YouTube)"; url = "https://www.youtube.com/@CivilEngineeringAcademy"; resourceType = "video" },
        { title = "IS Codes India (free PDF)"; url = "https://bis.gov.in/"; resourceType = "article" },
        { title = "SkyCiv structural analysis (free tier)"; url = "https://skyciv.com/"; resourceType = "course" },
        { title = "Civil Sir tutorials (YouTube)"; url = "https://www.youtube.com/@civilsir"; resourceType = "video" },
      ];
      resumeTips = [
        "List software tools and design codes used",
        "Quantify projects: area, cost, timeline",
        "Include site supervision experience",
        "Mention any government project involvement",
        "Show GATE score or state PSC exam results",
      ];
      salaryRange = "₹3–6 LPA entry, ₹10–30 LPA senior";
      jobOutlook = "Strong demand with infrastructure boom in India";
      keywords = ["engineering", "civil", "technology"];
    });

    careers.add({
      id = "electrical-engineer";
      title = "Electrical Engineer";
      field = "Engineering";
      description = "Design and develop electrical systems, power grids, electronics, and control systems for industry and consumer applications.";
      requiredSkills = ["Circuit design (MATLAB, PSPICE)", "Power systems", "Control systems", "Embedded systems", "PCB design"];
      roadmap = [
        "Complete B.E./B.Tech in Electrical/Electronics Engineering",
        "Learn circuit simulation: MATLAB, PSPICE",
        "Study power electronics and drives",
        "Build electronics projects (Arduino, Raspberry Pi)",
        "Intern at power companies or manufacturing firms",
        "Clear GATE for PSUs or higher studies",
        "Specialize in renewable energy, IoT, or automation",
      ];
      projects = [
        "Build an automatic street light using LDR",
        "Design a home automation system using Arduino",
        "Simulate a DC motor speed control circuit",
        "Build a solar charge controller",
        "Design a power factor correction circuit",
      ];
      freeResources = [
        { title = "NPTEL Electrical Engineering"; url = "https://nptel.ac.in/course.html"; resourceType = "course" },
        { title = "ElectroBOOM (YouTube)"; url = "https://www.youtube.com/@ElectroBOOM"; resourceType = "video" },
        { title = "MIT OCW 6.002 Circuits"; url = "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/"; resourceType = "course" },
        { title = "All About Circuits free tutorials"; url = "https://www.allaboutcircuits.com/"; resourceType = "article" },
        { title = "circuitdigest.com free projects"; url = "https://circuitdigest.com/"; resourceType = "article" },
      ];
      resumeTips = [
        "List circuit design software and tools",
        "Describe projects with specifications",
        "Include GATE score and PSU exam results",
        "Mention any patents or innovations",
        "Show internship experience with power systems",
      ];
      salaryRange = "₹3–7 LPA entry, ₹12–35 LPA senior";
      jobOutlook = "Strong demand in power, telecom, and automation sectors";
      keywords = ["engineering", "electrical", "technology"];
    });

    careers.add({
      id = "aerospace-engineer";
      title = "Aerospace Engineer";
      field = "Engineering";
      description = "Design and develop aircraft, spacecraft, satellites, and missiles. India's growing space sector (ISRO, private players) creates exciting opportunities.";
      requiredSkills = ["Aerodynamics & flight mechanics", "CFD (Computational Fluid Dynamics)", "Propulsion systems", "Structural mechanics", "MATLAB/ANSYS"];
      roadmap = [
        "Complete B.E./B.Tech in Aerospace/Aeronautical Engineering",
        "Learn MATLAB, ANSYS, and OpenFOAM",
        "Study aerodynamics and propulsion deeply",
        "Intern at ISRO, DRDO, HAL, or aerospace firms",
        "Participate in SAE Aero Design competitions",
        "Apply for ISRO/DRDO graduate roles",
        "Consider M.Tech or research at IIT/IISc",
      ];
      projects = [
        "Build and fly a model rocket",
        "Design a fixed-wing RC aircraft",
        "Simulate airfoil lift and drag using OpenFOAM",
        "Build a CubeSat model with sensors",
        "Design a drone frame and test aerodynamics",
      ];
      freeResources = [
        { title = "NPTEL Aerospace courses"; url = "https://nptel.ac.in/course.html"; resourceType = "course" },
        { title = "Real Engineering (YouTube)"; url = "https://www.youtube.com/@RealEngineering"; resourceType = "video" },
        { title = "NASA OpenCourseWare"; url = "https://www.nasa.gov/learning-resources/"; resourceType = "course" },
        { title = "ISRO careers portal"; url = "https://www.isro.gov.in/Careers.html"; resourceType = "article" },
        { title = "Scott Manley (YouTube — space engineering)"; url = "https://www.youtube.com/@scottmanley"; resourceType = "video" },
      ];
      resumeTips = [
        "Highlight simulation projects and tools used",
        "Include competition participation (SAE, NASA competitions)",
        "Show any ISRO/DRDO/HAL internship",
        "Mention publications or technical presentations",
        "List GATE score if applying to PSUs",
      ];
      salaryRange = "₹4–8 LPA entry, ₹15–50 LPA senior";
      jobOutlook = "Growing with India's expanding space and defence sector";
      keywords = ["engineering", "aerospace", "technology"];
    });

    // ─── COMMERCE & FINANCE ──────────────────────────────────────

    careers.add({
      id = "chartered-accountant";
      title = "Chartered Accountant (CA)";
      field = "Commerce";
      description = "India's most prestigious commerce qualification. CAs handle auditing, taxation, financial advisory, and corporate compliance for individuals and companies.";
      requiredSkills = ["Accounting & auditing", "Income Tax & GST", "Corporate law basics", "Financial reporting (Ind AS)", "Analytical thinking"];
      roadmap = [
        "Clear Class 12 Commerce with strong marks",
        "Register for CA Foundation exam with ICAI",
        "Clear Foundation → Intermediate → Final in sequence",
        "Complete 3-year articleship training",
        "Clear both groups of CA Final exam",
        "Join a CA firm or corporate finance team",
        "Specialize in tax, audit, or advisory",
      ];
      projects = [
        "File ITR for a salaried individual",
        "Prepare a complete set of financial statements",
        "Conduct a GST compliance audit for a business",
        "Create a financial model for a startup",
        "Analyze annual reports of 3 listed companies",
      ];
      freeResources = [
        { title = "ICAI study material (free)"; url = "https://www.icai.org/study-material"; resourceType = "course" },
        { title = "ICAI BoS free lectures"; url = "https://boslive.icai.org/"; resourceType = "video" },
        { title = "CA Intermediate free lectures (YouTube)"; url = "https://www.youtube.com/results?search_query=ca+intermediate+free+lectures"; resourceType = "video" },
        { title = "Income Tax India portal (e-learning)"; url = "https://www.incometax.gov.in/"; resourceType = "article" },
        { title = "GSTN official training portal"; url = "https://www.gst.gov.in/"; resourceType = "course" },
      ];
      resumeTips = [
        "Lead with CA qualification year and rank",
        "Describe articleship firm and industry exposure",
        "List specific tax and audit engagements",
        "Mention software: Tally, SAP, Zoho Books",
        "Include any DISA or post-qualification certifications",
      ];
      salaryRange = "₹6–12 LPA fresh CA, ₹25–80 LPA senior/partner";
      jobOutlook = "Always in demand; strong for Big 4, banking, and self-practice";
      keywords = ["finance", "accounting", "commerce", "banking", "business"];
    });

    careers.add({
      id = "investment-banker";
      title = "Investment Banker / Financial Analyst";
      field = "Commerce";
      description = "Help companies raise capital, merge, or acquire other companies. Highly competitive but one of the highest-paying careers in India.";
      requiredSkills = ["Financial modeling", "Valuation (DCF, comparables)", "Excel & PowerPoint", "Corporate finance", "Capital markets knowledge"];
      roadmap = [
        "Complete B.Com, BBA, or Economics degree",
        "Learn financial modeling on Excel",
        "Pursue CFA Level 1 or MBA Finance",
        "Intern at a bank, NBFC, or investment firm",
        "Build a financial model portfolio",
        "Apply for analyst roles at investment banks",
        "Clear NISM certifications for capital markets",
      ];
      projects = [
        "Build a DCF valuation model for a listed company",
        "Create a merger model for two companies",
        "Prepare a pitch book for a startup fundraise",
        "Analyse quarterly results of 5 companies",
        "Model a leveraged buyout (LBO) transaction",
      ];
      freeResources = [
        { title = "Corporate Finance Institute (free courses)"; url = "https://corporatefinanceinstitute.com/resources/"; resourceType = "course" },
        { title = "Aswath Damodaran free valuation course"; url = "https://pages.stern.nyu.edu/~adamodar/"; resourceType = "course" },
        { title = "NISM free e-learning"; url = "https://elearning.nism.ac.in/"; resourceType = "course" },
        { title = "Wall Street Oasis (free resources)"; url = "https://www.wallstreetoasis.com/finance-dictionary"; resourceType = "article" },
        { title = "Break Into Wall Street (YouTube)"; url = "https://www.youtube.com/@BreakIntoWallStreet"; resourceType = "video" },
      ];
      resumeTips = [
        "Highlight quantitative internship work",
        "Mention deal sizes and types handled",
        "Show Excel and financial modeling proficiency",
        "Include CFA progress or MBA school",
        "List NISM certifications for Indian markets",
      ];
      salaryRange = "₹5–15 LPA entry analyst, ₹40–200 LPA senior banker";
      jobOutlook = "High demand; Mumbai, Bangalore key hubs";
      keywords = ["finance", "banking", "commerce", "business", "consulting"];
    });

    careers.add({
      id = "banking-professional";
      title = "Banking Professional (PSU/Private)";
      field = "Commerce";
      description = "Work in India's vast banking sector — from front-line banking to credit analysis, treasury, and branch management in public or private banks.";
      requiredSkills = ["Banking products & services", "Credit appraisal", "RBI regulations", "Customer service", "Numerical ability"];
      roadmap = [
        "Complete graduation (any stream)",
        "Prepare for IBPS PO/SO or SBI PO exam",
        "Study banking awareness and RBI guidelines",
        "Clear prelims and mains written exam",
        "Prepare for group discussion and interview",
        "Join as Probationary Officer (PO)",
        "Progress through scales for promotions",
      ];
      projects = [
        "Study and summarize RBI Annual Report",
        "Prepare credit appraisal report for a fictitious SME",
        "Mock-open a current account and complete KYC process",
        "Analyze a bank's balance sheet",
        "Prepare a personal financial plan for a client",
      ];
      freeResources = [
        { title = "Adda247 Banking free material"; url = "https://www.adda247.com/banking-jobs/"; resourceType = "course" },
        { title = "IBPS official preparation guide"; url = "https://www.ibps.in/"; resourceType = "article" },
        { title = "bankersadda.com free quizzes"; url = "https://www.bankersadda.com/"; resourceType = "course" },
        { title = "RBI Kehta Hai (YouTube)"; url = "https://www.youtube.com/results?search_query=rbi+kehta+hai"; resourceType = "video" },
        { title = "Oliveboard free mocks"; url = "https://www.oliveboard.in/"; resourceType = "course" },
      ];
      resumeTips = [
        "Highlight IBPS/SBI exam scores and ranks",
        "Describe internship or part-time banking exposure",
        "Show numerical accuracy and speed",
        "Mention computer literacy and banking software",
        "Include volunteer credit society work if any",
      ];
      salaryRange = "₹4–9 LPA entry (PSU), ₹5–15 LPA private banks";
      jobOutlook = "Stable demand; thousands of vacancies annually";
      keywords = ["banking", "finance", "commerce", "accounting", "business"];
    });

    // ─── ARTS & CREATIVE ─────────────────────────────────────────

    careers.add({
      id = "graphic-designer";
      title = "Graphic Designer";
      field = "Design";
      description = "Create visual communications — logos, brand identities, posters, social media graphics, and UI assets for businesses and individuals.";
      requiredSkills = ["Adobe Illustrator & Photoshop", "Typography", "Color theory", "Brand identity design", "Figma or Canva"];
      roadmap = [
        "Learn Canva first, then move to Adobe tools",
        "Study typography, color theory, and layout",
        "Build a design portfolio with 10 real projects",
        "Offer free work to local businesses",
        "List services on Fiverr and Behance",
        "Specialize in a niche (logo, social media, print)",
        "Pursue freelance or in-house design roles",
      ];
      projects = [
        "Redesign an existing logo with a brief",
        "Create a complete brand identity for a fictional cafe",
        "Design a poster series for a social campaign",
        "Design a 10-page company brochure",
        "Create a social media template pack",
      ];
      freeResources = [
        { title = "Canva Design School (free)"; url = "https://www.canva.com/designschool/"; resourceType = "course" },
        { title = "Flux Academy (YouTube)"; url = "https://www.youtube.com/@FluxAcademy"; resourceType = "video" },
        { title = "Chris Do (YouTube)"; url = "https://www.youtube.com/@ChrisDo"; resourceType = "video" },
        { title = "Behance for portfolio inspiration"; url = "https://www.behance.net/"; resourceType = "community" },
        { title = "Adobe Express free tutorials"; url = "https://www.adobe.com/in/express/learn/"; resourceType = "course" },
      ];
      resumeTips = [
        "Lead with your portfolio website or Behance link",
        "Show your design process, not just final output",
        "Quantify results: 'Increased engagement by 30%'",
        "Include client work and testimonials",
        "List all design software you use",
      ];
      salaryRange = "₹2–5 LPA entry, ₹8–25 LPA senior/freelance";
      jobOutlook = "High demand; strong freelance potential globally";
      keywords = ["design", "creative", "arts", "media", "content"];
    });

    careers.add({
      id = "ux-designer";
      title = "UX/UI Designer";
      field = "Design";
      description = "Research user needs and design intuitive, beautiful digital experiences. Bridges the gap between technology and human behaviour.";
      requiredSkills = ["User research", "Wireframing & prototyping", "Figma", "Usability testing", "Visual design basics"];
      roadmap = [
        "Learn UX fundamentals and design thinking",
        "Master Figma (free tool)",
        "Study color theory and typography",
        "Conduct user interviews and surveys",
        "Build a UX portfolio with 3-5 case studies",
        "Learn basic HTML/CSS to collaborate with devs",
        "Apply for junior UX roles or freelance gigs",
      ];
      projects = [
        "Redesign an existing app's onboarding flow",
        "Create a mobile app prototype for a local business",
        "Design a dashboard for a SaaS product",
        "Conduct a usability audit for a website",
        "Build a design system with components",
      ];
      freeResources = [
        { title = "Google UX Design Certificate (audit free)"; url = "https://www.coursera.org/professional-certificates/google-ux-design"; resourceType = "course" },
        { title = "Figma tutorials (YouTube)"; url = "https://www.youtube.com/@Figma"; resourceType = "video" },
        { title = "Nielsen Norman Group articles"; url = "https://www.nngroup.com/articles/"; resourceType = "article" },
        { title = "Flux Academy (YouTube)"; url = "https://www.youtube.com/@FluxAcademy"; resourceType = "video" },
        { title = "Dribbble for inspiration"; url = "https://dribbble.com/"; resourceType = "community" },
      ];
      resumeTips = [
        "Lead with portfolio link prominently",
        "Show process, not just final designs",
        "Include user research methods used",
        "Quantify results: 'Increased conversion by 25%'",
        "Tailor case studies to the company's product type",
      ];
      salaryRange = "₹4–10 LPA entry, ₹15–45 LPA senior";
      jobOutlook = "Very high demand in tech industry";
      keywords = ["design", "ux", "creative", "technology", "content"];
    });

    careers.add({
      id = "fashion-designer";
      title = "Fashion Designer";
      field = "Design";
      description = "Create clothing, accessories, and textiles. India's fashion industry is one of the largest in the world, blending traditional crafts with modern trends.";
      requiredSkills = ["Sketching & illustration", "Fabric knowledge", "Garment construction", "Trend forecasting", "Adobe Illustrator"];
      roadmap = [
        "Complete NIFT, Pearl Academy, or NID fashion programme",
        "Learn hand sketching and fashion illustration",
        "Understand textiles: weaves, fabric types, finishes",
        "Intern with a designer, brand, or garment factory",
        "Build a portfolio with 3-5 collections",
        "Participate in fashion weeks and competitions",
        "Launch your own label or work for a brand",
      ];
      projects = [
        "Design a capsule collection of 10 pieces",
        "Create a lookbook for a seasonal collection",
        "Develop a sustainable fashion line concept",
        "Create flat sketches for a kurta collection",
        "Design a costume for a theatre production",
      ];
      freeResources = [
        { title = "NIFT free webinars"; url = "https://www.nift.ac.in/"; resourceType = "course" },
        { title = "Fashion Design Council of India"; url = "https://www.fdci.org/"; resourceType = "community" },
        { title = "Evelyn Wood Fashion Illustration (YouTube)"; url = "https://www.youtube.com/results?search_query=fashion+illustration+tutorial"; resourceType = "video" },
        { title = "Vogue India (trend research)"; url = "https://www.vogue.in/"; resourceType = "article" },
        { title = "Coursera Fashion Design courses (audit)"; url = "https://www.coursera.org/search?query=fashion+design"; resourceType = "course" },
      ];
      resumeTips = [
        "Lead with portfolio or Instagram link",
        "Describe collections with concept, fabric, and market",
        "Include internship with known designers or brands",
        "Show any media coverage or awards",
        "Mention textile knowledge and sourcing experience",
      ];
      salaryRange = "₹2–6 LPA entry, ₹10–40 LPA for established designers";
      jobOutlook = "Growing with India's rising fashion exports and domestic market";
      keywords = ["design", "creative", "arts", "fashion"];
    });

    careers.add({
      id = "animation-game-designer";
      title = "Animator / Game Designer";
      field = "Design";
      description = "Create animated films, visual effects, or interactive games. India's gaming and animation industry is growing rapidly with global studios outsourcing work here.";
      requiredSkills = ["3D modelling (Blender/Maya)", "2D animation", "Game engines (Unity/Unreal)", "Storytelling", "Rigging & texturing"];
      roadmap = [
        "Learn Blender (free) for 3D modelling and animation",
        "Study principles of animation (12 Disney principles)",
        "Learn Unity (free) for game development",
        "Build a portfolio with 3-5 animation shorts or games",
        "Share work on ArtStation and YouTube",
        "Apply for roles at gaming or animation studios",
        "Freelance for YouTube channels and indie games",
      ];
      projects = [
        "Animate a 30-second character walk cycle",
        "Create a 2D explainer animation",
        "Build a simple 2D platformer game in Unity",
        "Model and texture a 3D environment",
        "Create a short animated film (1-3 minutes)",
      ];
      freeResources = [
        { title = "Blender free tutorials (Blender Guru)"; url = "https://www.blenderguru.com/"; resourceType = "course" },
        { title = "Unity Learn free courses"; url = "https://learn.unity.com/"; resourceType = "course" },
        { title = "Alan Becker Animation (YouTube)"; url = "https://www.youtube.com/@AlanBecker"; resourceType = "video" },
        { title = "ArtStation for portfolio"; url = "https://www.artstation.com/"; resourceType = "community" },
        { title = "MAAC Animation free workshops"; url = "https://www.maacindia.com/"; resourceType = "course" },
      ];
      resumeTips = [
        "Link to your ArtStation portfolio and YouTube",
        "Show work in progress, not just final renders",
        "Include reel with diverse styles",
        "Describe software stack and project duration",
        "Mention any film festival or gaming competition wins",
      ];
      salaryRange = "₹2–6 LPA entry, ₹10–35 LPA for senior artists";
      jobOutlook = "Growing with India's gaming boom and global animation outsourcing";
      keywords = ["design", "animation", "creative", "technology", "arts", "film"];
    });

    // ─── ARTS & PERFORMING ARTS ──────────────────────────────────

    careers.add({
      id = "classical-musician";
      title = "Classical / Performing Musician";
      field = "Arts";
      description = "Master a classical Indian or Western instrument and build a career in performance, teaching, recording, and music direction.";
      requiredSkills = ["Instrument mastery (vocals, sitar, tabla, violin, etc.)", "Music theory & ragas", "Stage performance", "Teaching", "Recording basics"];
      roadmap = [
        "Study under a guru (traditional gurukul or institution)",
        "Appear in Doordarshan/AIR auditions for recognition",
        "Perform at sabhas, temples, and cultural events",
        "Build a YouTube channel with performances",
        "Pursue B.Music or equivalent degree",
        "Apply for government arts grants (Sangeet Natak Akademi)",
        "Teach online or at music schools for steady income",
      ];
      projects = [
        "Record and release 5 solo performances on YouTube",
        "Compose an original piece combining classical and modern",
        "Teach 10 beginner students to learn basics",
        "Perform at a local cultural festival",
        "Create a music album and release on Spotify",
      ];
      freeResources = [
        { title = "SPIC MACAY free classical concerts"; url = "https://spicmacay.com/"; resourceType = "community" },
        { title = "Sangeet Natak Akademi India"; url = "https://sangeetnatak.gov.in/"; resourceType = "article" },
        { title = "Ragas & Talas YouTube channel"; url = "https://www.youtube.com/results?search_query=hindustani+classical+music+lessons"; resourceType = "video" },
        { title = "DistroKid for music distribution"; url = "https://distrokid.com/"; resourceType = "course" },
        { title = "Coursera — Introduction to Music Theory (audit)"; url = "https://www.coursera.org/learn/music-theory"; resourceType = "course" },
      ];
      resumeTips = [
        "List your guru lineage and training years",
        "Include All India Radio/Doordarshan artist status",
        "Link to your best performance recordings",
        "Mention prestigious sabhas or festivals performed at",
        "Show awards, fellowships, or government grants",
      ];
      salaryRange = "₹1–5 LPA starting, ₹10–50 LPA for acclaimed artists";
      jobOutlook = "Niche but fulfilling; income from performance, teaching, and digital";
      keywords = ["arts", "music", "creative", "theatre"];
    });

    careers.add({
      id = "film-director-screenwriter";
      title = "Film Director / Screenwriter";
      field = "Media & Film";
      description = "Direct films, web series, or documentaries — or write compelling screenplays. India's entertainment industry is the largest in the world by output.";
      requiredSkills = ["Storytelling", "Screenplay writing", "Camera & cinematography basics", "Directing actors", "Video editing"];
      roadmap = [
        "Watch 100+ films with critical analysis",
        "Study screenplay structure (3-act, Save the Cat)",
        "Write 3-5 short film scripts",
        "Direct short films with friends using a smartphone",
        "Attend FTII/SRFTI or film workshops",
        "Upload short films to YouTube and film festivals",
        "Network with producers and industry professionals",
      ];
      projects = [
        "Write a 10-page short film screenplay",
        "Direct and edit a 5-minute short film",
        "Create a documentary about your community",
        "Write a web series pilot episode",
        "Submit a film to a national short film festival",
      ];
      freeResources = [
        { title = "FTII free workshops & admissions"; url = "https://www.ftii.ac.in/"; resourceType = "course" },
        { title = "Film Riot (YouTube — filmmaking tutorials)"; url = "https://www.youtube.com/@filmriot"; resourceType = "video" },
        { title = "No Film School (free filmmaking articles)"; url = "https://nofilmschool.com/"; resourceType = "article" },
        { title = "Screenplay.io free screenwriting tool"; url = "https://screenplay.io/"; resourceType = "course" },
        { title = "IndieWire for film industry news"; url = "https://www.indiewire.com/"; resourceType = "article" },
      ];
      resumeTips = [
        "Link to your IMDb page and films on YouTube",
        "Describe films with genre, duration, and festivals",
        "Include awards or selections at film festivals",
        "Show collaboration with cinematographers and actors",
        "Mention any FTII or film school training",
      ];
      salaryRange = "₹1–5 LPA starting, ₹20–500 LPA for successful directors";
      jobOutlook = "OTT boom creating massive opportunities for content creators";
      keywords = ["film", "media", "creative", "arts", "content"];
    });

    careers.add({
      id = "theatre-dance-performer";
      title = "Theatre Artist / Classical Dancer";
      field = "Arts";
      description = "Build a career in theatre performance, direction, or classical Indian dance (Bharatanatyam, Kathak, Odissi, Manipuri, etc.).";
      requiredSkills = ["Performance technique", "Voice & movement training", "Stage presence", "Choreography", "Script interpretation"];
      roadmap = [
        "Train rigorously under a guru for 5-10 years",
        "Perform at local, state, and national cultural events",
        "Apply for scholarships: Sangeet Natak Akademi, Ustad Bismillah Khan Yuva Puraskar",
        "Build a YouTube/Instagram presence with performances",
        "Teach dance or theatre at academies",
        "Create original productions and tour them",
        "Explore theatre direction and production",
      ];
      projects = [
        "Choreograph and perform a solo recital",
        "Direct and perform a 30-minute theatre piece",
        "Create a fusion performance blending classical and contemporary",
        "Teach a beginner batch and showcase their performance",
        "Film and release a professionally produced dance video",
      ];
      freeResources = [
        { title = "Sangeet Natak Akademi scholarships"; url = "https://sangeetnatak.gov.in/"; resourceType = "article" },
        { title = "NSD (National School of Drama)"; url = "https://nsd.gov.in/"; resourceType = "course" },
        { title = "SPIC MACAY classical arts programmes"; url = "https://spicmacay.com/"; resourceType = "community" },
        { title = "Bharatanatyam tutorials (YouTube)"; url = "https://www.youtube.com/results?search_query=bharatanatyam+lessons+free"; resourceType = "video" },
        { title = "Kalakshetra Foundation Chennai"; url = "https://www.kalakshetra.in/"; resourceType = "course" },
      ];
      resumeTips = [
        "List guru lineage and years of training",
        "Include notable performances and venues",
        "Show awards, scholarships, or government recognition",
        "Link to video recordings of performances",
        "Mention teaching and choreography experience",
      ];
      salaryRange = "₹1–4 LPA starting, ₹10–30 LPA for acclaimed performers";
      jobOutlook = "Dedicated community; income from teaching, performing, and digital content";
      keywords = ["arts", "theatre", "music", "creative"];
    });

    // ─── JOURNALISM & MEDIA ──────────────────────────────────────

    careers.add({
      id = "journalist";
      title = "Journalist / Reporter";
      field = "Media";
      description = "Report news, investigate stories, and inform the public through print, digital, or broadcast media. India has one of the world's largest media markets.";
      requiredSkills = ["Writing & reporting", "Research & fact-checking", "Interview skills", "Photography/Video basics", "Digital media tools"];
      roadmap = [
        "Complete BA/MA in Journalism or Mass Communication",
        "Start a blog, podcast, or YouTube news channel",
        "Intern at a local newspaper or news website",
        "Build a portfolio of 20+ published articles",
        "Learn multimedia: video reporting, podcasting",
        "Network with senior journalists and editors",
        "Apply for staff reporter or content roles",
      ];
      projects = [
        "Write an investigative report on a local issue",
        "Produce a 3-minute news video package",
        "Interview 5 people for a feature story",
        "Fact-check a viral social media claim",
        "Create a data journalism piece with infographics",
      ];
      freeResources = [
        { title = "IIMC (Indian Institute of Mass Communication)"; url = "https://www.iimc.nic.in/"; resourceType = "course" },
        { title = "Coursera Journalism courses (audit free)"; url = "https://www.coursera.org/search?query=journalism"; resourceType = "course" },
        { title = "Reuters Journalism free training"; url = "https://reutersinstitute.politics.ox.ac.uk/"; resourceType = "article" },
        { title = "The Wire (for journalism standards)"; url = "https://thewire.in/"; resourceType = "article" },
        { title = "Poynter free journalism training"; url = "https://www.poynter.org/"; resourceType = "course" },
      ];
      resumeTips = [
        "Link to your published articles and videos",
        "Include bylines at known publications",
        "Mention beat specializations (politics, tech, sports)",
        "Show investigative or long-form stories",
        "Include awards or press accreditations",
      ];
      salaryRange = "₹2–6 LPA entry, ₹10–30 LPA senior journalists";
      jobOutlook = "Evolving; digital journalism growing; traditional print consolidating";
      keywords = ["media", "journalism", "content", "creative"];
    });

    careers.add({
      id = "content-creator";
      title = "Content Creator / Digital Influencer";
      field = "Media";
      description = "Create compelling content across video, written, or audio formats that engages audiences and builds communities.";
      requiredSkills = ["Video editing", "Copywriting", "Social media strategy", "Storytelling", "Basic SEO"];
      roadmap = [
        "Choose a niche and platform (YouTube, Instagram, blog)",
        "Learn video editing (DaVinci Resolve is free)",
        "Study copywriting and storytelling techniques",
        "Post consistently for 3-6 months",
        "Learn basic SEO for discoverability",
        "Monetize through sponsorships, affiliates, or courses",
        "Diversify to multiple platforms",
      ];
      projects = [
        "Start a YouTube channel and publish 10 videos",
        "Write 20 blog posts on a topic you know well",
        "Build an Instagram page to 1000 followers",
        "Launch a newsletter with 100 subscribers",
        "Create a free course or ebook to build an email list",
      ];
      freeResources = [
        { title = "Ali Abdaal (YouTube)"; url = "https://www.youtube.com/@aliabdaal"; resourceType = "video" },
        { title = "DaVinci Resolve free video editor"; url = "https://www.blackmagicdesign.com/products/davinciresolve"; resourceType = "course" },
        { title = "Copyblogger"; url = "https://copyblogger.com/blog/"; resourceType = "article" },
        { title = "Think Media (YouTube)"; url = "https://www.youtube.com/@ThinkMedia"; resourceType = "video" },
        { title = "Canva free design tool"; url = "https://www.canva.com/"; resourceType = "course" },
      ];
      resumeTips = [
        "Link to your best-performing content pieces",
        "Show subscriber/follower counts and growth",
        "Highlight collaboration or brand deal experience",
        "Include engagement rates, not just follower count",
        "Demonstrate niche expertise and audience trust",
      ];
      salaryRange = "₹0–3 LPA starting, ₹10–200+ LPA for top creators";
      jobOutlook = "Growing rapidly; monetization via multiple income streams";
      keywords = ["content", "media", "creative", "marketing"];
    });

    // ─── MEDICINE & HEALTH ───────────────────────────────────────

    careers.add({
      id = "doctor-mbbs";
      title = "Medical Doctor (MBBS/MD)";
      field = "Medicine";
      description = "Diagnose and treat illness, promote health, and care for patients. One of India's most respected and secure professions.";
      requiredSkills = ["Clinical knowledge (anatomy, physiology, pharmacology)", "Diagnostic reasoning", "Patient communication", "Emergency care", "Medical ethics"];
      roadmap = [
        "Clear NEET-UG with a high rank (target 600+/720)",
        "Complete 5.5-year MBBS programme (including internship)",
        "Clear NEET-PG for specialisation",
        "Do MD/MS in your chosen specialty",
        "Complete DNB or super-specialty fellowship if needed",
        "Practice in a hospital, clinic, or community health centre",
        "Consider academic medicine or research",
      ];
      projects = [
        "Shadow a doctor in a government hospital outpatient",
        "Write a case study on a complex patient",
        "Create a patient education leaflet for a common disease",
        "Participate in a health camp in a rural community",
        "Present a journal club paper to peers",
      ];
      freeResources = [
        { title = "AIIMS free medical video lectures"; url = "https://www.youtube.com/@aiimsnewdelhi"; resourceType = "video" },
        { title = "NPTEL Biomedical courses (free)"; url = "https://nptel.ac.in/course.html"; resourceType = "course" },
        { title = "Osmosis free medical videos"; url = "https://www.osmosis.org/library"; resourceType = "video" },
        { title = "Amboss free question bank (trial)"; url = "https://www.amboss.com/us"; resourceType = "course" },
        { title = "NMC India official resources"; url = "https://www.nmc.org.in/"; resourceType = "article" },
      ];
      resumeTips = [
        "List NEET-UG/PG scores and ranks",
        "Describe clinical rotations and specialties",
        "Include research papers and publications",
        "Show any rural service (NHRM posting)",
        "Mention presentations at medical conferences",
      ];
      salaryRange = "₹6–15 LPA MBBS, ₹20–80 LPA specialists";
      jobOutlook = "Very high demand especially in rural and tier-2/3 India";
      keywords = ["medicine", "public-health", "nursing", "biology"];
    });

    careers.add({
      id = "nursing-professional";
      title = "Nurse / Nursing Professional";
      field = "Medicine";
      description = "Provide direct patient care, administer treatments, and support doctors in hospitals, clinics, and community health settings.";
      requiredSkills = ["Patient care", "Clinical procedures", "Pharmacology basics", "Emergency response", "Communication & empathy"];
      roadmap = [
        "Clear NEET for B.Sc Nursing (select states)",
        "Complete 4-year B.Sc Nursing programme",
        "Register with Indian Nursing Council (INC)",
        "Join a hospital for clinical experience",
        "Specialize: ICU, OT, oncology, midwifery nursing",
        "Consider M.Sc Nursing or Nurse Practitioner",
        "Explore opportunities in Gulf countries (high pay)",
      ];
      projects = [
        "Conduct a community health assessment",
        "Create a patient handover documentation standard",
        "Participate in a vaccination drive",
        "Write a care plan for a diabetic patient",
        "Train junior nursing students in procedures",
      ];
      freeResources = [
        { title = "INC India official guidelines"; url = "https://www.indiannursingcouncil.org/"; resourceType = "article" },
        { title = "Nurse.com free CEUs"; url = "https://www.nurse.com/ce/"; resourceType = "course" },
        { title = "Nursing with Joanna (YouTube)"; url = "https://www.youtube.com/results?search_query=nursing+lectures+india"; resourceType = "video" },
        { title = "AIIMS Nursing Tutorials (YouTube)"; url = "https://www.youtube.com/results?search_query=aiims+nursing+tutorial"; resourceType = "video" },
        { title = "Khan Academy Health & Medicine"; url = "https://www.khanacademy.org/science/health-and-medicine"; resourceType = "course" },
      ];
      resumeTips = [
        "List INC registration number",
        "Describe clinical departments worked in",
        "Include specialized certifications (BLS, ACLS)",
        "Show any overseas training or work experience",
        "Mention patient volume and ward complexity managed",
      ];
      salaryRange = "₹2–5 LPA India, ₹15–40 LPA in Gulf countries";
      jobOutlook = "Very high demand globally; Gulf and UK have strong demand";
      keywords = ["medicine", "nursing", "public-health"];
    });

    careers.add({
      id = "physiotherapist";
      title = "Physiotherapist";
      field = "Medicine";
      description = "Help patients recover from injuries, surgeries, or chronic pain through exercise, manual therapy, and rehabilitation.";
      requiredSkills = ["Anatomy & kinesiology", "Manual therapy techniques", "Exercise prescription", "Patient assessment", "Sports rehabilitation"];
      roadmap = [
        "Complete B.P.T (Bachelor of Physiotherapy) — 4.5 years",
        "Intern in a hospital for 6 months",
        "Register with Indian Association of Physiotherapists",
        "Specialize: sports, neuro, orthopaedic, paediatric",
        "Consider M.P.T for specialisation and academia",
        "Work in hospitals, sports teams, or private clinics",
        "Build online practice for home visit or tele-rehab",
      ];
      projects = [
        "Create a rehabilitation protocol for a knee injury",
        "Write a case study on post-stroke rehabilitation",
        "Develop a home exercise programme video series",
        "Conduct a community posture screening camp",
        "Collaborate with a sports team during training season",
      ];
      freeResources = [
        { title = "Physiotutors free videos (YouTube)"; url = "https://www.youtube.com/@Physiotutors"; resourceType = "video" },
        { title = "IAP India official resources"; url = "https://www.physiotherapyindia.org/"; resourceType = "article" },
        { title = "Physiopedia free courses"; url = "https://www.physio-pedia.com/"; resourceType = "course" },
        { title = "Bob and Brad (YouTube — exercise therapy)"; url = "https://www.youtube.com/@BobandBrad"; resourceType = "video" },
        { title = "NPTEL Rehabilitation Engineering"; url = "https://nptel.ac.in/course.html"; resourceType = "course" },
      ];
      resumeTips = [
        "List IAP registration and specializations",
        "Describe patient types and conditions treated",
        "Include sports team or elite athlete experience",
        "Show any publications or conference presentations",
        "Mention outcome measures and tools used",
      ];
      salaryRange = "₹2–6 LPA entry, ₹8–20 LPA senior/private practice";
      jobOutlook = "Growing with awareness of rehabilitation and sports medicine";
      keywords = ["medicine", "sports", "public-health", "physio"];
    });

    careers.add({
      id = "pharmacist";
      title = "Pharmacist";
      field = "Medicine";
      description = "Dispense medicines, advise on drug interactions, and manage pharmaceutical supplies in hospitals, retail pharmacies, or the pharmaceutical industry.";
      requiredSkills = ["Pharmacology & drug knowledge", "Patient counselling", "Inventory management", "Regulatory compliance", "Research skills"];
      roadmap = [
        "Complete D.Pharm or B.Pharm (4 years)",
        "Register with State Pharmacy Council",
        "Intern in a hospital pharmacy or retail chain",
        "Learn about drug regulations (CDSCO, WHO-GMP)",
        "Consider M.Pharm for R&D or academia",
        "Join a pharma company in production, QA, or regulatory",
        "Explore medical writing or clinical research roles",
      ];
      projects = [
        "Prepare a drug information bulletin for common conditions",
        "Conduct a medication adherence study",
        "Create a patient counselling guide for diabetes medicines",
        "Analyze a hospital's drug procurement data",
        "Document adverse drug reactions for 20 patients",
      ];
      freeResources = [
        { title = "Pharmacy Tutor (YouTube)"; url = "https://www.youtube.com/results?search_query=pharmacy+tutorials+india"; resourceType = "video" },
        { title = "PubMed free research papers"; url = "https://pubmed.ncbi.nlm.nih.gov/"; resourceType = "article" },
        { title = "CDSCO India regulatory guidance"; url = "https://cdsco.gov.in/"; resourceType = "article" },
        { title = "Pharmacist's Letter free resources"; url = "https://pharmacistsletter.therapeuticresearch.com/"; resourceType = "course" },
        { title = "WHO model formulary (free PDF)"; url = "https://www.who.int/publications/i/item/WHO-EMP-2009.3"; resourceType = "article" },
      ];
      resumeTips = [
        "List state pharmacy council registration",
        "Include any drug regulatory or GMP experience",
        "Show pharma industry internship details",
        "Mention research projects or thesis topic",
        "List software: SAP, Oracle Pharma, Tally",
      ];
      salaryRange = "₹2–5 LPA retail, ₹5–20 LPA pharma industry";
      jobOutlook = "Stable demand; growing in pharma manufacturing and exports";
      keywords = ["medicine", "pharmacy", "public-health"];
    });

    // ─── AGRICULTURE ─────────────────────────────────────────────

    careers.add({
      id = "agricultural-scientist";
      title = "Agricultural Scientist / Agronomist";
      field = "Agriculture";
      description = "Research and develop better crop varieties, farming techniques, and sustainable agricultural practices to feed India and the world.";
      requiredSkills = ["Crop science", "Soil science", "Agricultural chemistry", "Research methods", "GIS and remote sensing"];
      roadmap = [
        "Complete B.Sc Agriculture from SAU/ICAR institute",
        "Qualify ICAR-JRF/SRF for research and scholarship",
        "Pursue M.Sc/Ph.D at IARI, NRRI, or state agricultural university",
        "Publish research papers in agriculture journals",
        "Join ICAR, state agriculture departments, or agri-startups",
        "Apply for ASRB (Agricultural Scientists Recruitment Board) positions",
        "Engage with farmers for ground-level impact",
      ];
      projects = [
        "Conduct a soil health card analysis for a village",
        "Set up a vermicompost unit and document results",
        "Design a drip irrigation plan for a 1-acre plot",
        "Study the impact of biofertilizers on crop yield",
        "Create an agricultural knowledge app for farmers",
      ];
      freeResources = [
        { title = "ICAR free e-courses"; url = "https://ecourses.icar.gov.in/"; resourceType = "course" },
        { title = "Krishi Vigyan Kendra (KVK) India"; url = "https://kvk.icar.gov.in/"; resourceType = "community" },
        { title = "SWAYAM Agriculture courses"; url = "https://swayam.gov.in/"; resourceType = "course" },
        { title = "FAO free agriculture resources"; url = "https://www.fao.org/knowledge/en/"; resourceType = "article" },
        { title = "Agriculture Guru (YouTube)"; url = "https://www.youtube.com/results?search_query=agriculture+science+india+hindi"; resourceType = "video" },
      ];
      resumeTips = [
        "Include ICAR-JRF/SRF rank and fellowship",
        "List research publications with citations",
        "Describe field experiments and outcomes",
        "Show any technology transfer to farmers",
        "Include state-level or district-level awards",
      ];
      salaryRange = "₹3–8 LPA entry, ₹10–25 LPA senior scientists";
      jobOutlook = "High demand with agriculture technology and food security focus";
      keywords = ["agriculture", "food-tech", "environment", "forestry"];
    });

    careers.add({
      id = "food-technologist";
      title = "Food Technologist / Food Scientist";
      field = "Agriculture";
      description = "Develop new food products, ensure food safety, and improve food processing. India's food processing sector is one of the world's largest.";
      requiredSkills = ["Food chemistry & microbiology", "HACCP & food safety standards", "Product development", "Quality control", "Packaging technology"];
      roadmap = [
        "Complete B.Tech/B.Sc in Food Technology",
        "Intern at a food processing company or FSSAI lab",
        "Learn HACCP, ISO 22000, and FSSAI regulations",
        "Work in quality control or R&D",
        "Pursue M.Tech or MBA in Food Business Management",
        "Join CFTRI (Central Food Technological Research Institute)",
        "Explore startups in alternative proteins and food innovation",
      ];
      projects = [
        "Develop a new flavour variant of an existing product",
        "Conduct shelf-life testing for a packaged food item",
        "Create a HACCP plan for a small food business",
        "Design packaging for a new food product",
        "Analyse nutritional labelling of 10 common products",
      ];
      freeResources = [
        { title = "CFTRI free training programmes"; url = "https://www.cftri.res.in/"; resourceType = "course" },
        { title = "FSSAI official training portal"; url = "https://foscos.fssai.gov.in/"; resourceType = "course" },
        { title = "SWAYAM Food Technology courses"; url = "https://swayam.gov.in/"; resourceType = "course" },
        { title = "IFT free webinars"; url = "https://www.ift.org/professional-development/"; resourceType = "course" },
        { title = "Food Science Institute (YouTube)"; url = "https://www.youtube.com/results?search_query=food+technology+lectures"; resourceType = "video" },
      ];
      resumeTips = [
        "List food safety certifications (HACCP, ISO 22000)",
        "Include product launches you contributed to",
        "Show FSSAI internship or lab work",
        "Describe specific analytical equipment used",
        "Mention any R&D projects and patent filings",
      ];
      salaryRange = "₹3–7 LPA entry, ₹10–25 LPA senior";
      jobOutlook = "Strong growth with organized food sector and exports";
      keywords = ["agriculture", "food-tech", "engineering"];
    });

    // ─── HUMANITIES & SOCIAL SCIENCES ────────────────────────────

    careers.add({
      id = "psychologist-counsellor";
      title = "Psychologist / Counsellor";
      field = "Humanities";
      description = "Help individuals overcome mental health challenges through therapy, assessment, and counselling. Mental health awareness is growing rapidly in India.";
      requiredSkills = ["Counselling techniques (CBT, REBT)", "Psychological assessment", "Empathy & active listening", "Case formulation", "Research methods"];
      roadmap = [
        "Complete BA/B.Sc in Psychology",
        "Pursue M.Sc/M.A Psychology (clinical or counselling)",
        "Complete internship under a licensed psychologist",
        "Register with RCI (Rehabilitation Council of India) for clinical practice",
        "Complete supervised clinical hours",
        "Start practice: private clinic, school, NGO, or corporate",
        "Pursue RCI-CRE accreditation or Ph.D for research",
      ];
      projects = [
        "Conduct a mental health awareness workshop at school",
        "Create a stress management workbook",
        "Administer and interpret a standardized test (MMSE, BDI)",
        "Write a case formulation for a therapy client (supervised)",
        "Develop a self-care toolkit for college students",
      ];
      freeResources = [
        { title = "iCall free counselling resources (TISS)"; url = "https://icallhelpline.org/"; resourceType = "community" },
        { title = "NIMHANS free digital resources"; url = "https://nimhans.ac.in/"; resourceType = "article" },
        { title = "Coursera — Science of Well-Being (free)"; url = "https://www.coursera.org/learn/the-science-of-well-being"; resourceType = "course" },
        { title = "Simply Psychology (free articles)"; url = "https://www.simplypsychology.org/"; resourceType = "article" },
        { title = "Khan Academy Mental Health"; url = "https://www.khanacademy.org/science/health-and-medicine"; resourceType = "course" },
      ];
      resumeTips = [
        "Include RCI registration and therapy certifications",
        "Describe client populations and presenting issues",
        "Mention any research publications",
        "Show school, hospital, or NGO internship experience",
        "List theoretical orientations and assessment tools",
      ];
      salaryRange = "₹2–6 LPA starting, ₹8–25 LPA private practice";
      jobOutlook = "Growing rapidly with mental health awareness in India";
      keywords = ["psychology", "social-work", "humanities", "medicine"];
    });

    careers.add({
      id = "social-worker";
      title = "Social Worker / NGO Professional";
      field = "Social Work";
      description = "Work with marginalized communities, children, women, and vulnerable populations to improve their quality of life through advocacy, programmes, and policy.";
      requiredSkills = ["Community assessment", "Programme management", "Advocacy & communication", "Government scheme knowledge", "Report writing"];
      roadmap = [
        "Complete BA/BSW in Social Work",
        "Pursue M.S.W (Master of Social Work) from TISS, Delhi School of Social Work, etc.",
        "Intern with an NGO, government social programme, or INGO",
        "Learn project monitoring and evaluation tools",
        "Get familiar with government schemes (MNREGA, ICDS, PM-POSHAN)",
        "Apply for programme manager or field officer roles",
        "Pursue CSR roles in corporates or UNHCR/UNICEF",
      ];
      projects = [
        "Conduct a community needs assessment for a slum area",
        "Manage a 3-month health awareness programme",
        "Write a project proposal and apply for a small grant",
        "Map government benefits received by 50 families",
        "Create an awareness campaign for child rights",
      ];
      freeResources = [
        { title = "TISS Mumbai free resources"; url = "https://www.tiss.edu/"; resourceType = "article" },
        { title = "CSR Box India — NGO resources"; url = "https://csrbox.org/"; resourceType = "community" },
        { title = "GiveIndia NGO career portal"; url = "https://www.giveindia.org/"; resourceType = "community" },
        { title = "UNDP India knowledge hub"; url = "https://www.undp.org/india"; resourceType = "article" },
        { title = "Coursera — Social Work essentials (audit)"; url = "https://www.coursera.org/search?query=social+work"; resourceType = "course" },
      ];
      resumeTips = [
        "Describe beneficiaries reached and impact metrics",
        "Show field work experience in rural or urban communities",
        "List government schemes you've worked with",
        "Include FCRA, NGO Darpan knowledge",
        "Show any INGO (UN, UNICEF, CARE India) exposure",
      ];
      salaryRange = "₹2–5 LPA entry NGO, ₹10–25 LPA INGO/corporate CSR";
      jobOutlook = "Growing with CSR mandates and INGO expansion";
      keywords = ["social-work", "ngo", "policy", "humanities"];
    });

    // ─── LAW ─────────────────────────────────────────────────────

    careers.add({
      id = "lawyer";
      title = "Lawyer / Advocate";
      field = "Law";
      description = "Represent clients in courts, provide legal advice, and draft contracts. India's growing economy creates strong demand for corporate, tax, and IPR lawyers.";
      requiredSkills = ["Legal research & drafting", "Court procedure", "Constitutional & substantive law", "Negotiation", "Analytical reasoning"];
      roadmap = [
        "Clear CLAT for top NLUs or complete 5-year BA LLB",
        "Enrol with State Bar Council after completing LLB",
        "Start as a junior advocate under a senior lawyer",
        "Develop expertise in a practice area: corporate, criminal, IPR, tax",
        "Apply for jobs at law firms, corporations, or NGOs",
        "Qualify for AIBE (All India Bar Examination)",
        "Build a reputation through cases and publications",
      ];
      projects = [
        "Draft a contract for a freelance services agreement",
        "Research and write a brief on a constitutional issue",
        "Argue a moot court competition case",
        "Prepare legal notice for a consumer complaint",
        "Write an article for a legal journal",
      ];
      freeResources = [
        { title = "India Kanoon free case law database"; url = "https://indiankanoon.org/"; resourceType = "article" },
        { title = "CLAT Consortium resources"; url = "https://consortiumofnlus.ac.in/"; resourceType = "course" },
        { title = "Bar & Bench (legal news India)"; url = "https://www.barandbench.com/"; resourceType = "article" },
        { title = "NLSIU free webinars & lectures"; url = "https://www.nls.ac.in/"; resourceType = "course" },
        { title = "Law School Toolbox (free resources)"; url = "https://lawschooltoolbox.com/"; resourceType = "article" },
      ];
      resumeTips = [
        "Include bar council enrollment number",
        "List practice areas and notable cases",
        "Show moot court wins and legal writing awards",
        "Include NLU rank or law school pedigree",
        "Mention law review publications or clerkships",
      ];
      salaryRange = "₹3–8 LPA junior, ₹20–200+ LPA top firm partners";
      jobOutlook = "Strong demand in corporate law, fintech, and IPR";
      keywords = ["law", "government", "humanities", "policy"];
    });

    // ─── GOVERNMENT & CIVIL SERVICES ─────────────────────────────

    careers.add({
      id = "civil-services";
      title = "Civil Services (IAS/IPS/IFS)";
      field = "Government";
      description = "Serve the nation through the Indian Administrative Service, Police Service, or Foreign Service. One of India's most prestigious career paths.";
      requiredSkills = ["General knowledge & current affairs", "Essay writing", "Analytical reasoning", "Ethics and governance", "Interview skills"];
      roadmap = [
        "Complete graduation (any stream)",
        "Understand the UPSC exam structure thoroughly",
        "Build a 12-18 month study plan",
        "Study NCERT books from Class 6-12 as foundation",
        "Follow The Hindu and PIB daily",
        "Join a test series for prelims and mains practice",
        "Prepare for personality test (interview)",
      ];
      projects = [
        "Create a complete notes system for GS1-GS4",
        "Write 50 UPSC-style essays for practice",
        "Solve 10 years of previous year papers",
        "Track and summarize current affairs for 6 months",
        "Conduct mock interviews with a senior",
      ];
      freeResources = [
        { title = "NCERT books (free PDF)"; url = "https://ncert.nic.in/textbook.php"; resourceType = "course" },
        { title = "UPSC official website"; url = "https://www.upsc.gov.in/"; resourceType = "article" },
        { title = "StudyIQ (YouTube)"; url = "https://www.youtube.com/@StudyIQEducation"; resourceType = "video" },
        { title = "SWAYAM free courses"; url = "https://swayam.gov.in/"; resourceType = "course" },
        { title = "Insights on India free resources"; url = "https://www.insightsonindia.com/"; resourceType = "article" },
      ];
      resumeTips = [
        "Highlight academic achievements and ranks",
        "Show public service internships or NCC/NSS involvement",
        "Demonstrate leadership in college activities",
        "Include any research or published papers",
        "Show district or state level competition participation",
      ];
      salaryRange = "₹7–18 LPA (Level 10–18 pay matrix) + perks and housing";
      jobOutlook = "Highly competitive but extremely prestigious with job security";
      keywords = ["government", "civil-services", "law", "management", "leadership"];
    });

    careers.add({
      id = "defence-military";
      title = "Defence Officer (Army/Navy/Air Force)";
      field = "Government";
      description = "Serve as an officer in the Indian Armed Forces — defending the nation while developing exceptional leadership and discipline.";
      requiredSkills = ["Physical fitness", "Leadership", "Technical knowledge (for technical branches)", "Decision-making under pressure", "Team management"];
      roadmap = [
        "Appear for NDA (National Defence Academy) after Class 12",
        "Or appear for CDS (Combined Defence Services) after graduation",
        "Clear SSB (Service Selection Board) interview — 5-day process",
        "Complete officer training at IMA/OTA/NDA/INA/AFA",
        "Commission as a Lieutenant/Sub-Lieutenant",
        "Serve, specialize, and rise through ranks",
        "Consider defence PSU roles (HAL, BEL, DRDO) post-service",
      ];
      projects = [
        "Clear NDA or CDS written exam",
        "Build physical fitness: 5km under 24 min, push-ups 40+",
        "Prepare for SSB psychological and group tasks",
        "Study GK, maths, and English for NDA/CDS",
        "Develop leadership through NCC, NSS, or scouts",
      ];
      freeResources = [
        { title = "Join Indian Army official portal"; url = "https://joinindianarmy.nic.in/"; resourceType = "article" },
        { title = "NDA preparation free guides (YouTube)"; url = "https://www.youtube.com/results?search_query=nda+exam+preparation+free"; resourceType = "video" },
        { title = "SSB Crack free SSB preparation"; url = "https://ssbcrack.com/"; resourceType = "article" },
        { title = "Major Kalshi Classes (YouTube)"; url = "https://www.youtube.com/@MajorKalshiClasses"; resourceType = "video" },
        { title = "Jagran Josh defence exams guide"; url = "https://www.jagranjosh.com/defence-exams"; resourceType = "article" },
      ];
      resumeTips = [
        "List NCC grade and certificates",
        "Show physical fitness achievements",
        "Include NSS, scouts, or community leadership",
        "Show academic performance in science/maths",
        "Demonstrate extracurricular leadership",
      ];
      salaryRange = "₹6–18 LPA + free housing, food, medical, and pension";
      jobOutlook = "Steady intake; highly respected and secure career";
      keywords = ["defence", "government", "civil-services", "sports"];
    });

    // ─── SPORTS ──────────────────────────────────────────────────

    careers.add({
      id = "professional-athlete";
      title = "Professional Athlete / Sports Person";
      field = "Sports";
      description = "Compete at state, national, or international level in your sport. India's sports ecosystem is growing rapidly with government and private support.";
      requiredSkills = ["Technical sport skills", "Physical conditioning", "Mental toughness", "Tactical understanding", "Coachability"];
      roadmap = [
        "Identify and specialize in one sport early",
        "Train under a certified coach (SAI training centres are free)",
        "Compete at school and district levels",
        "Qualify for state championships",
        "Aim for SAI TOPS (Target Olympic Podium Scheme) selection",
        "Represent India at national and international games",
        "Secure sponsorships and government sports quota jobs",
      ];
      projects = [
        "Create a 6-month periodization training plan",
        "Compete in district and state championships",
        "Build a YouTube/Instagram channel documenting training",
        "Participate in Khelo India Games",
        "Apply for government sports quota jobs (railways, PSUs)",
      ];
      freeResources = [
        { title = "Sports Authority of India (SAI)"; url = "https://www.sportsauthorityofindia.nic.in/"; resourceType = "article" },
        { title = "Khelo India programme"; url = "https://kheloindia.gov.in/"; resourceType = "community" },
        { title = "NSNIS training centres (free coaching)"; url = "https://www.sportsauthorityofindia.nic.in/"; resourceType = "course" },
        { title = "Yuval Noah Harari — Sports Psychology (Coursera audit)"; url = "https://www.coursera.org/search?query=sports+psychology"; resourceType = "course" },
        { title = "Olympics free athletes resources"; url = "https://olympics.com/en/athletes/"; resourceType = "article" },
      ];
      resumeTips = [
        "List sports and competition achievements with years",
        "Include national/state level rankings",
        "Show government or sports authority recognition",
        "Mention coaches, clubs, and training programmes",
        "Include fitness certifications if pivoting to coaching",
      ];
      salaryRange = "₹3–10 LPA government sports quota, ₹10–500 LPA top athletes";
      jobOutlook = "Growing with PM Modi's sports push and Khelo India";
      keywords = ["sports", "defence", "government", "physical-education"];
    });

    careers.add({
      id = "sports-management";
      title = "Sports Manager / Sports Journalist";
      field = "Sports";
      description = "Manage sports teams, plan events, handle athletes' careers, or report on sports. India's IPL and sports broadcasting industry offers growing opportunities.";
      requiredSkills = ["Sports knowledge", "Event management", "Marketing & branding", "Negotiation", "Journalism or management"];
      roadmap = [
        "Complete BBA in Sports Management or BA in Journalism",
        "Follow cricket, football, kabaddi, and esports closely",
        "Intern with a sports club, federation, or IPL franchise",
        "Cover local sports events as a journalist or blogger",
        "Build a sports blog or YouTube sports channel",
        "Network at sports conferences and industry events",
        "Apply for roles at BCCI, Star Sports, JSW Sports, etc.",
      ];
      projects = [
        "Organise a college-level sports tournament",
        "Write 20 sports analysis articles or match reports",
        "Create a sports sponsorship proposal for a local team",
        "Produce a 3-minute sports video package",
        "Develop a social media plan for an athlete's brand",
      ];
      freeResources = [
        { title = "Sports Management Worldwide free courses"; url = "https://www.smww.com/"; resourceType = "course" },
        { title = "Cricinfo ESPNcricinfo (sports journalism)"; url = "https://www.espncricinfo.com/"; resourceType = "article" },
        { title = "Coursera Sports Management (audit)"; url = "https://www.coursera.org/search?query=sports+management"; resourceType = "course" },
        { title = "SportsPro Media (industry news)"; url = "https://www.sportspromedia.com/"; resourceType = "article" },
        { title = "Khel Now India sports news"; url = "https://khelnow.com/"; resourceType = "article" },
      ];
      resumeTips = [
        "Link to sports journalism portfolio or blog",
        "Include any sports event management experience",
        "Show knowledge of IPL/BCCI/federation structures",
        "Describe internship or work with sports brands",
        "Mention any data analytics or digital marketing skills",
      ];
      salaryRange = "₹2–6 LPA entry, ₹10–40 LPA senior sports management";
      jobOutlook = "Growing with India's sports ecosystem and media rights expansion";
      keywords = ["sports", "media", "management", "journalism", "marketing"];
    });

    // ─── BUSINESS & ENTREPRENEURSHIP ─────────────────────────────

    careers.add({
      id = "digital-marketer";
      title = "Digital Marketer";
      field = "Business";
      description = "Grow brands and businesses through online channels including SEO, social media, email, and paid advertising.";
      requiredSkills = ["SEO & SEM", "Social media marketing", "Content strategy", "Email marketing", "Google Analytics"];
      roadmap = [
        "Learn SEO fundamentals and keyword research",
        "Study Google Ads and Meta Ads",
        "Master Google Analytics and data reporting",
        "Build and grow a personal brand or blog",
        "Get certified (Google, HubSpot free certs)",
        "Run campaigns for small businesses pro bono",
        "Apply for digital marketing roles",
      ];
      projects = [
        "Start a blog and grow it to 1000 monthly visitors",
        "Run a ₹500 Google Ads campaign and report results",
        "Grow a social media account from 0 to 500 followers",
        "Build an email list and send a newsletter campaign",
        "Audit and improve SEO for a local business",
      ];
      freeResources = [
        { title = "Google Digital Garage (free cert)"; url = "https://learndigital.withgoogle.com/digitalgarage/"; resourceType = "course" },
        { title = "HubSpot Academy (free certs)"; url = "https://academy.hubspot.com/"; resourceType = "course" },
        { title = "Neil Patel blog"; url = "https://neilpatel.com/blog/"; resourceType = "article" },
        { title = "Backlinko SEO blog"; url = "https://backlinko.com/blog"; resourceType = "article" },
        { title = "Marketing School Podcast"; url = "https://www.marketingschool.io/"; resourceType = "course" },
      ];
      resumeTips = [
        "Always include campaign performance numbers",
        "Show ROI, ROAS, and conversion improvements",
        "List certifications prominently",
        "Describe channels managed and audience size",
        "Include tools used: GA4, Ahrefs, Mailchimp etc.",
      ];
      salaryRange = "₹3–8 LPA entry, ₹12–40 LPA senior/head of marketing";
      jobOutlook = "Very high demand in every industry; freelance-friendly globally";
      keywords = ["marketing", "content", "business", "entrepreneur", "media"];
    });

    careers.add({
      id = "entrepreneur";
      title = "Entrepreneur / Startup Founder";
      field = "Business";
      description = "Build a business from scratch, identify market opportunities, and create value for customers. India has the world's 3rd largest startup ecosystem.";
      requiredSkills = ["Business model design", "Market research", "Sales & customer acquisition", "Basic finance", "Team building"];
      roadmap = [
        "Identify a problem you have personal experience with",
        "Validate the idea with 10 customer interviews",
        "Build an MVP (Minimum Viable Product)",
        "Get your first 10 paying customers",
        "Learn basic accounting and cash flow management",
        "Apply for startup programs (YC, Startup India, iStart)",
        "Iterate based on customer feedback",
      ];
      projects = [
        "Launch a service business (freelancing counts)",
        "Start a dropshipping store to learn e-commerce",
        "Build a SaaS tool for a problem you face",
        "Create and sell a digital product (ebook, template)",
        "Apply and pitch at a startup accelerator",
      ];
      freeResources = [
        { title = "Y Combinator Startup School (free)"; url = "https://www.startupschool.org/"; resourceType = "course" },
        { title = "Indie Hackers"; url = "https://www.indiehackers.com/"; resourceType = "community" },
        { title = "Slidebean (YouTube)"; url = "https://www.youtube.com/@slidebean"; resourceType = "video" },
        { title = "Paul Graham essays"; url = "http://www.paulgraham.com/articles.html"; resourceType = "article" },
        { title = "Startup India portal"; url = "https://www.startupindia.gov.in/"; resourceType = "article" },
      ];
      resumeTips = [
        "Lead with the business name, what it does, and traction",
        "Use metrics: revenue, customers, growth rate",
        "Highlight team-building and leadership",
        "Show problem-solving under uncertainty",
        "Include any media coverage or awards",
      ];
      salaryRange = "Variable; potential for very high returns with successful venture";
      jobOutlook = "India has 100,000+ startups; ecosystem growing with funding and support";
      keywords = ["entrepreneur", "business", "management", "marketing", "consulting"];
    });

    careers.add({
      id = "product-manager";
      title = "Product Manager";
      field = "Business";
      description = "Define product vision and lead cross-functional teams to build products that users love. Combines strategy, empathy, and execution.";
      requiredSkills = ["Product strategy", "User research", "Data analysis", "Roadmap planning", "Stakeholder communication"];
      roadmap = [
        "Understand PM fundamentals and frameworks",
        "Learn SQL for product metrics",
        "Study A/B testing and product analytics",
        "Build side projects or improve existing products",
        "Create a PM portfolio with product case studies",
        "Network with PMs and attend product events",
        "Apply for associate PM programs",
      ];
      projects = [
        "Write a PRD for a new feature of an existing app",
        "Analyze and present a product teardown",
        "Design a metrics dashboard for a product",
        "Run a user research study and present findings",
        "Create a 90-day roadmap for a product idea",
      ];
      freeResources = [
        { title = "Lenny's Newsletter"; url = "https://www.lennysnewsletter.com/"; resourceType = "article" },
        { title = "Y Combinator Startup School"; url = "https://www.startupschool.org/"; resourceType = "course" },
        { title = "Product School (free resources)"; url = "https://productschool.com/resources/"; resourceType = "article" },
        { title = "ProductHunt for product inspiration"; url = "https://www.producthunt.com/"; resourceType = "community" },
        { title = "Reforge blog"; url = "https://www.reforge.com/blog"; resourceType = "article" },
      ];
      resumeTips = [
        "Lead with measurable outcomes for each role",
        "Use the 'I led X which resulted in Y' format",
        "Show cross-functional collaboration examples",
        "Include metrics: DAU, retention, revenue impact",
        "Link to products or features you shipped",
      ];
      salaryRange = "₹8–20 LPA entry, ₹25–80 LPA senior PM";
      jobOutlook = "High demand in tech startups, fintech, and enterprise software";
      keywords = ["product", "business", "management", "technology", "entrepreneur"];
    });

    careers;
  };

  // Match careers by keyword overlap with answer keywords
  public func matchCareers(
    answers : [Nat],
    questions : List.List<Types.QuizQuestion>,
    careers : List.List<Types.Career>,
  ) : [Text] {
    // Collect all selected keywords from answers
    let selectedKeywords = List.empty<Text>();
    let questionsArr = questions.toArray();

    for (i in questionsArr.keys()) {
      let q = questionsArr[i];
      if (i < answers.size()) {
        let answerIndex = answers[i];
        if (answerIndex < q.options.size()) {
          let option = q.options[answerIndex];
          for (kw in option.keywords.values()) {
            selectedKeywords.add(kw);
          };
        };
      };
    };

    let kwArray = selectedKeywords.toArray();

    // Score each career
    type ScoredCareer = { id : Text; score : Nat };
    let scored = List.empty<ScoredCareer>();

    careers.forEach(func(career) {
      var score : Nat = 0;
      for (kw in kwArray.values()) {
        for (ck in career.keywords.values()) {
          if (Text.equal(kw, ck)) {
            score += 1;
          };
        };
      };
      scored.add({ id = career.id; score });
    });

    // Sort by score descending and return top 5 IDs
    let sortedArr = scored.toArray();
    let sorted = sortedArr.sort(
      func(a : ScoredCareer, b : ScoredCareer) : Order.Order {
        if (a.score > b.score) #less
        else if (a.score < b.score) #greater
        else #equal
      },
    );

    let top5 = sorted.values().take(5);
    top5.toArray().map<ScoredCareer, Text>(func(c) { c.id });
  };
};
