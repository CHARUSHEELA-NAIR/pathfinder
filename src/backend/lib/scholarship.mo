import Types "../types";
import List "mo:core/List";

module {
  public func seedCountries() : List.List<Types.Country> {
    let countries = List.empty<Types.Country>();

    // ─── ASIA ────────────────────────────────────────────────────
    countries.add({
      id = "japan";
      name = "Japan";
      continent = "Asia";
      overview = "Japan offers one of the most prestigious government scholarships through MEXT, covering full tuition, living expenses, and travel. Japan is known for its world-class universities, advanced research facilities, and unique culture blending tradition with cutting-edge technology.";
      whyChoose = "Japan offers tuition-free education at top universities, a monthly stipend to cover living costs, and Japanese language training is included. Ideal for STEM, arts, and social science students who want to study in one of Asia's most innovative countries.";
      programs = [
        {
          name = "MEXT (Monbukagakusho) Scholarship";
          organization = "Ministry of Education, Culture, Sports, Science and Technology — Japan";
          eligibility = "Indian nationals under 35 years; completed higher secondary or bachelor's; not currently in Japan on a scholarship";
          fundingLevel = "Fully Funded";
          deadlineMonth = "June (Embassy Recommendation) / December (University Recommendation)";
          coversTuition = true;
          coversLiving = true;
          coversTravel = true;
          benefits = [
            "Monthly stipend of ¥117,000–¥145,000 (approx ₹65,000–₹80,000)",
            "Full tuition waived by university",
            "Round-trip airfare covered",
            "Japanese language training provided before university",
            "Valid for undergraduate and postgraduate levels",
          ];
          description = "Japan's government scholarship for international students. One of the most comprehensive fully-funded scholarships globally. Covers all major expenses and includes Japanese language preparation courses before starting your programme.";
          applicationUrl = "https://www.studyinjapan.go.jp/en/smap-stopj-applications-scholarship.html";
        },
      ];
    });

    countries.add({
      id = "south-korea";
      name = "South Korea";
      continent = "Asia";
      overview = "South Korea is a global leader in technology, K-culture, and research. The GKS (Global Korea Scholarship) is one of Asia's most generous fully-funded programmes for international students.";
      whyChoose = "Korea offers high-quality education in engineering, business, and arts with a vibrant cultural experience. The GKS covers everything from tuition to Korean language training.";
      programs = [
        {
          name = "Global Korea Scholarship (GKS / KGSP)";
          organization = "National Institute for International Education (NIIED) — South Korea";
          eligibility = "Indian nationals under 25 (undergraduate) or 40 (graduate); GPA requirement; not currently enrolled in Korean university";
          fundingLevel = "Fully Funded";
          deadlineMonth = "September (for next year)";
          coversTuition = true;
          coversLiving = true;
          coversTravel = true;
          benefits = [
            "Full tuition covered",
            "Monthly allowance of 900,000 KRW (approx ₹56,000)",
            "1-year Korean language training stipend",
            "Round-trip airfare",
            "Settlement and dissertation allowances",
          ];
          description = "South Korea's flagship scholarship programme for international students. Supports bachelor's, master's, and PhD studies. Includes Korean language training and covers all living and academic expenses.";
          applicationUrl = "https://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do";
        },
      ];
    });

    // ─── EUROPE ──────────────────────────────────────────────────
    countries.add({
      id = "germany";
      name = "Germany";
      continent = "Europe";
      overview = "Germany is the most popular study destination in Europe, offering world-class education often tuition-free at public universities. DAAD is Germany's largest funding organisation supporting thousands of international students annually.";
      whyChoose = "Most German public universities charge no tuition fees. DAAD provides living stipends, health insurance, and study allowances. Germany is an industrial and tech powerhouse making it ideal for engineering, science, and business students.";
      programs = [
        {
          name = "DAAD Scholarships";
          organization = "German Academic Exchange Service (DAAD)";
          eligibility = "Indian nationals with a strong academic record; relevant language skills (German or English depending on programme); completed bachelor's or master's";
          fundingLevel = "Partially Funded (tuition often free at German public universities)";
          deadlineMonth = "October–November (varies by programme)";
          coversTuition = false;
          coversLiving = true;
          coversTravel = true;
          benefits = [
            "Monthly stipend of €850–€1,200 (approx ₹75,000–₹1,06,000)",
            "Health, accident, and liability insurance",
            "Travel allowance to/from Germany",
            "Study and research allowances",
            "German language course subsidy",
          ];
          description = "The German Academic Exchange Service (DAAD) offers numerous scholarship programmes for international students at all levels. German public universities are typically tuition-free so DAAD primarily covers living and research costs.";
          applicationUrl = "https://www.daad.de/en/study-and-research-in-germany/scholarships/";
        },
      ];
    });

    countries.add({
      id = "uk";
      name = "United Kingdom";
      continent = "Europe";
      overview = "The UK is home to Oxford, Cambridge, and 18 other world top-100 universities. The Chevening Scholarship is the UK government's flagship international scholarship programme, selecting future global leaders.";
      whyChoose = "Chevening is highly prestigious and covers full tuition, living costs, and flights. UK master's degrees are typically completed in just 1 year, saving time and costs. Strong alumni network and global recognition.";
      programs = [
        {
          name = "Chevening Scholarship";
          organization = "UK Foreign, Commonwealth & Development Office (FCDO)";
          eligibility = "Indian nationals with a bachelor's degree; minimum 2 years of full-time work experience; meet English language requirements; demonstrate leadership potential";
          fundingLevel = "Fully Funded";
          deadlineMonth = "November";
          coversTuition = true;
          coversLiving = true;
          coversTravel = true;
          benefits = [
            "Full tuition fees paid directly to university",
            "Monthly living allowance (London rate approx £1,160/month)",
            "Return economy class flights to/from the UK",
            "Arrival and departure allowances",
            "Access to Chevening global alumni network (55,000+)",
          ];
          description = "The UK government's global scholarship programme, awarded to outstanding emerging leaders. Fully-funded 1-year master's degree at any eligible UK university. Highly competitive — requires at least 2 years of work experience.";
          applicationUrl = "https://www.chevening.org/scholarships/";
        },
      ];
    });

    countries.add({
      id = "netherlands";
      name = "Netherlands";
      continent = "Europe";
      overview = "The Netherlands is home to excellent universities including TU Delft, Wageningen, and UvA. The Holland Scholarship and Orange Knowledge Programme support international students.";
      whyChoose = "Most Dutch universities offer programmes in English. The country is known for water management, agriculture, and engineering excellence. Strong post-study work opportunities.";
      programs = [
        {
          name = "Orange Knowledge Programme (OKP)";
          organization = "Netherlands Universities Foundation for International Cooperation (Nuffic)";
          eligibility = "Indian nationals working in specific sectors (water, food security, health); with work experience; employer endorsement required";
          fundingLevel = "Fully Funded";
          deadlineMonth = "March–April";
          coversTuition = true;
          coversLiving = true;
          coversTravel = true;
          benefits = [
            "Full tuition and course fees",
            "Monthly living allowance",
            "Return flights covered",
            "Visa costs covered",
            "Insurance allowance",
          ];
          description = "The OKP supports mid-career professionals from developing countries with master's degrees and short courses at Dutch institutions. Focuses on sectors where the Netherlands has expertise: water, food, health, and governance.";
          applicationUrl = "https://www.nuffic.nl/en/subjects/orange-knowledge-programme";
        },
      ];
    });

    // ─── NORTH AMERICA ───────────────────────────────────────────
    countries.add({
      id = "usa";
      name = "United States";
      continent = "North America";
      overview = "The USA hosts more top-ranked universities than any other country. The Fulbright Program is America's flagship cultural and educational exchange programme, funded by the US government.";
      whyChoose = "Fulbright covers full funding and places you at prestigious US institutions. The US has unparalleled research infrastructure, industry connections (Silicon Valley, Wall Street), and diverse academic programmes.";
      programs = [
        {
          name = "Fulbright Foreign Student Program";
          organization = "US Department of State / United States-India Educational Foundation (USIEF)";
          eligibility = "Indian nationals with a bachelor's degree; strong academic record; demonstrate leadership; apply through USIEF India; no recent extended US stay";
          fundingLevel = "Fully Funded";
          deadlineMonth = "May";
          coversTuition = true;
          coversLiving = true;
          coversTravel = true;
          benefits = [
            "Full tuition and required university fees",
            "Monthly living stipend",
            "Round-trip economy class airfare",
            "Health insurance (ASPE plan)",
            "Book and equipment allowances",
          ];
          description = "The Fulbright Program awards approximately 4,000 grants annually to foreign nationals for graduate study, research, or English teaching in the USA. One of the most recognized scholarships worldwide with 400,000+ alumni globally.";
          applicationUrl = "https://www.usief.org.in/Fulbright-Fellowships.aspx";
        },
      ];
    });

    countries.add({
      id = "canada";
      name = "Canada";
      continent = "North America";
      overview = "Canada is known for its multicultural environment, high quality of life, and world-class research universities. The Vanier CGS is Canada's premier doctoral scholarship for top international PhD candidates.";
      whyChoose = "Canada offers clear pathways to permanent residency post-study, making it ideal for those seeking long-term migration. Top universities like UofT, UBC, and McGill are globally ranked with strong industry connections.";
      programs = [
        {
          name = "Vanier Canada Graduate Scholarships";
          organization = "Government of Canada — Natural Sciences & Engineering / Social Sciences / Health Research Councils";
          eligibility = "Nominated by a Canadian university; pursuing a PhD; demonstrate academic excellence, leadership, and research potential; no prior doctoral degree";
          fundingLevel = "Partially Funded (living stipend; tuition separate)";
          deadlineMonth = "November";
          coversTuition = false;
          coversLiving = true;
          coversTravel = false;
          benefits = [
            "CAD $50,000 per year for 3 years",
            "Access to world-class research facilities",
            "Networking with Canada's top researchers",
            "Covers 3 years of PhD study stipend",
          ];
          description = "The Vanier CGS programme strengthens Canada's ability to attract and retain world-class doctoral students. Awarded to PhD students who demonstrate academic excellence, research potential, and leadership skills. University nomination is required.";
          applicationUrl = "https://vanier.gc.ca/en/home-accueil.html";
        },
      ];
    });

    // ─── OCEANIA ─────────────────────────────────────────────────
    countries.add({
      id = "australia";
      name = "Australia";
      continent = "Oceania";
      overview = "Australia has 7 universities in the world top-100 and a thriving research ecosystem. Australia Awards are the Australian government's premier international scholarships for students from developing countries including India.";
      whyChoose = "Australia offers a warm climate, multicultural society, and strong post-study work visa options. Australia Awards provide comprehensive support for long-term development impact in awardees' home countries.";
      programs = [
        {
          name = "Australia Awards Scholarships";
          organization = "Australian Department of Foreign Affairs and Trade (DFAT)";
          eligibility = "Indian nationals; not currently enrolled in Australian institution; minimum bachelor's degree for postgraduate; meet English language requirements; commit to 2-year home return after study";
          fundingLevel = "Fully Funded";
          deadlineMonth = "April–June";
          coversTuition = true;
          coversLiving = true;
          coversTravel = true;
          benefits = [
            "Full tuition fees",
            "Return economy class air travel",
            "Establishment allowance on arrival",
            "Contribution to living expenses (fortnightly)",
            "Overseas Student Health Cover (OSHC)",
            "Academic and English language support",
          ];
          description = "Australia Awards are prestigious international scholarships funded by the Australian Government. Open to students from eligible countries including India, aimed at building leadership capacity. Recipients must return home for 2 years after completing their qualification.";
          applicationUrl = "https://www.australiaawards.gov.au/";
        },
      ];
    });

    // ─── AFRICA/INDIA-SPECIFIC ────────────────────────────────────
    countries.add({
      id = "india-domestic";
      name = "India (Domestic Scholarships)";
      continent = "Asia";
      overview = "India has a rich ecosystem of government scholarships for students from economically weaker sections, SC/ST/OBC communities, merit-based national scholarships, and sector-specific fellowships.";
      whyChoose = "If you want to study in India at top institutions (IITs, IIMs, AIIMS, NLUs), these scholarships provide substantial financial support. No visa, no cultural adjustment, and proximity to family.";
      programs = [
        {
          name = "National Scholarship Portal (NSP) — PM Scholarship";
          organization = "Ministry of Education, Government of India";
          eligibility = "Indian nationals; various criteria by scheme (merit, EWS, SC/ST/OBC, minority, ex-servicemen families); Class 1 onwards through PhD";
          fundingLevel = "Partially Funded";
          deadlineMonth = "October–November";
          coversTuition = false;
          coversLiving = false;
          coversTravel = false;
          benefits = [
            "Annual scholarship amount: ₹10,000–₹50,000 depending on scheme",
            "Covers SC/ST students, minority students, EWS, and merit scholars",
            "Post-Matric scholarship for Class 11 and above",
            "Direct bank transfer (DBT) to student account",
          ];
          description = "India's centralized national scholarship portal consolidates central and state government scholarships. Covers thousands of schemes for students at all levels from pre-matric to PhD. Apply once to access multiple schemes.";
          applicationUrl = "https://scholarships.gov.in/";
        },
        {
          name = "ICAR Junior Research Fellowship (JRF)";
          organization = "Indian Council of Agricultural Research (ICAR)";
          eligibility = "Indian nationals; B.Sc Agriculture or related; appear for ICAR-AIEEA exam; enrolled in PG programme at ICAR-SAU";
          fundingLevel = "Partially Funded";
          deadlineMonth = "June";
          coversTuition = false;
          coversLiving = true;
          coversTravel = false;
          benefits = [
            "JRF: ₹31,000/month + HRA",
            "SRF: ₹35,000/month + HRA",
            "Access to ICAR research facilities",
            "Pathway to permanent ICAR scientist positions",
          ];
          description = "ICAR-JRF supports students pursuing postgraduate research in agriculture, veterinary science, fisheries, and related fields. Highly competitive exam; successful candidates receive monthly fellowships at ICAR-affiliated universities.";
          applicationUrl = "https://icar.org.in/content/aieea";
        },
      ];
    });

    countries;
  };
};
