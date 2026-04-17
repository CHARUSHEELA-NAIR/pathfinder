module {
  // --- Career Quiz Types ---
  public type QuizOption = {
    id : Nat;
    text : Text;
    keywords : [Text];
  };

  public type QuizQuestion = {
    id : Nat;
    question : Text;
    options : [QuizOption];
  };

  public type Resource = {
    title : Text;
    url : Text;
    resourceType : Text; // "video", "article", "course", "community"
  };

  public type Career = {
    id : Text;
    title : Text;
    field : Text; // broad field category
    description : Text;
    requiredSkills : [Text];
    roadmap : [Text];
    projects : [Text];
    freeResources : [Resource];
    resumeTips : [Text];
    salaryRange : Text; // e.g. "₹3–8 LPA entry, ₹15–40 LPA senior"
    jobOutlook : Text;
    keywords : [Text]; // for matching
  };

  // --- Scholarship Types ---
  public type ScholarshipProgram = {
    name : Text;
    organization : Text;
    eligibility : Text;
    fundingLevel : Text; // "Fully Funded", "Partially Funded", "Stipend Only"
    deadlineMonth : Text;
    coversTuition : Bool;
    coversLiving : Bool;
    coversTravel : Bool;
    benefits : [Text];
    description : Text;
    applicationUrl : Text;
  };

  public type Country = {
    id : Text;
    name : Text;
    continent : Text;
    overview : Text;
    whyChoose : Text;
    programs : [ScholarshipProgram];
  };

  // --- Free Resource Catalog Types ---
  public type CatalogResource = {
    title : Text;
    url : Text;
    description : Text;
    category : Text; // "visualRecords", "enterpriseBasics", "practiceGrounds"
  };
}
