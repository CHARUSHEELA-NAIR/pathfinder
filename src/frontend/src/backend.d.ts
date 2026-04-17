import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuizQuestion {
    id: bigint;
    question: string;
    options: Array<QuizOption>;
}
export interface Resource {
    url: string;
    title: string;
    resourceType: string;
}
export interface ScholarshipProgram {
    name: string;
    description: string;
    deadlineMonth: string;
    coversLiving: boolean;
    eligibility: string;
    applicationUrl: string;
    coversTuition: boolean;
    fundingLevel: string;
    benefits: Array<string>;
    organization: string;
    coversTravel: boolean;
}
export interface Career {
    id: string;
    field: string;
    roadmap: Array<string>;
    title: string;
    projects: Array<string>;
    description: string;
    keywords: Array<string>;
    resumeTips: Array<string>;
    freeResources: Array<Resource>;
    jobOutlook: string;
    salaryRange: string;
    requiredSkills: Array<string>;
}
export interface QuizOption {
    id: bigint;
    text: string;
    keywords: Array<string>;
}
export interface Country {
    id: string;
    name: string;
    overview: string;
    continent: string;
    programs: Array<ScholarshipProgram>;
    whyChoose: string;
}
export interface CatalogResource {
    url: string;
    title: string;
    description: string;
    category: string;
}
export interface backendInterface {
    getAllCareers(): Promise<Array<Career>>;
    getCareerById(id: string): Promise<Career | null>;
    getCareersByField(field: string): Promise<Array<Career>>;
    getCountries(): Promise<Array<Country>>;
    getCountryById(id: string): Promise<Country | null>;
    getQuizQuestions(): Promise<Array<QuizQuestion>>;
    getResources(): Promise<Array<CatalogResource>>;
    matchCareers(answers: Array<bigint>): Promise<Array<string>>;
}
