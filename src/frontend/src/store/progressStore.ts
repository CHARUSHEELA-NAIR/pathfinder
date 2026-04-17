import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SectionId =
  | "home"
  | "career"
  | "global"
  | "government"
  | "business"
  | "archives"
  | "inspiration"
  | "enterprise";

export const SECTIONS: { id: SectionId; label: string; route: string }[] = [
  { id: "home", label: "Home Port", route: "/" },
  { id: "career", label: "Career Path", route: "/career" },
  { id: "global", label: "Global Registry", route: "/global" },
  { id: "government", label: "Government Posts", route: "/government" },
  { id: "business", label: "Trade Routes", route: "/business" },
  { id: "archives", label: "Free Archives", route: "/archives" },
  { id: "inspiration", label: "Inspiration", route: "/inspiration" },
  { id: "enterprise", label: "Enterprise Presence", route: "/enterprise" },
];

export const TOTAL_SECTIONS = SECTIONS.length;

interface ProgressState {
  exploredSections: Set<SectionId>;
  markExplored: (sectionId: SectionId) => void;
  markUnexplored: (sectionId: SectionId) => void;
  isExplored: (sectionId: SectionId) => boolean;
  getExploredCount: () => number;
  getTotalCount: () => number;
  resetProgress: () => void;

  // Career step progress
  careerProgress: Record<string, Set<number>>;
  markStepComplete: (careerId: string, stepNumber: number) => void;
  unmarkStepComplete: (careerId: string, stepNumber: number) => void;
  getCareerProgress: (
    careerId: string,
    total: number,
  ) => { completed: Set<number>; total: number };
  getCareerCompletionPercentage: (
    careerId: string,
    totalSteps: number,
  ) => number;
}

// Zustand persist requires serializable state — use Record instead of Set
interface PersistedState {
  exploredMap: Record<SectionId, boolean>;
  careerProgressMap: Record<string, number[]>;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      exploredSections: new Set<SectionId>(),
      careerProgress: {},

      // ── Section exploration ────────────────────────────────────────────────
      markExplored: (sectionId) =>
        set((state) => {
          const next = new Set(state.exploredSections);
          next.add(sectionId);
          return { exploredSections: next };
        }),

      markUnexplored: (sectionId) =>
        set((state) => {
          const next = new Set(state.exploredSections);
          next.delete(sectionId);
          return { exploredSections: next };
        }),

      isExplored: (sectionId) => get().exploredSections.has(sectionId),

      getExploredCount: () => get().exploredSections.size,

      getTotalCount: () => TOTAL_SECTIONS,

      resetProgress: () =>
        set({ exploredSections: new Set<SectionId>(), careerProgress: {} }),

      // ── Career step progress ───────────────────────────────────────────────
      markStepComplete: (careerId, stepNumber) =>
        set((state) => {
          const current = new Set(state.careerProgress[careerId] ?? []);
          current.add(stepNumber);
          return {
            careerProgress: { ...state.careerProgress, [careerId]: current },
          };
        }),

      unmarkStepComplete: (careerId, stepNumber) =>
        set((state) => {
          const current = new Set(state.careerProgress[careerId] ?? []);
          current.delete(stepNumber);
          return {
            careerProgress: { ...state.careerProgress, [careerId]: current },
          };
        }),

      getCareerProgress: (careerId, total) => {
        const completed = get().careerProgress[careerId] ?? new Set<number>();
        return { completed, total };
      },

      getCareerCompletionPercentage: (careerId, totalSteps) => {
        if (totalSteps === 0) return 0;
        const completed = get().careerProgress[careerId]?.size ?? 0;
        return Math.round((completed / totalSteps) * 100);
      },
    }),
    {
      name: "pathfinder-progress",
      // Serialize Sets → plain arrays/objects for localStorage
      storage: {
        getItem: (name) => {
          const raw = localStorage.getItem(name);
          if (!raw) return null;
          try {
            const parsed = JSON.parse(raw) as {
              state: PersistedState;
              version: number;
            };
            const exploredMap = parsed.state.exploredMap ?? {};
            const exploredSections = new Set<SectionId>(
              Object.entries(exploredMap)
                .filter(([, v]) => v)
                .map(([k]) => k as SectionId),
            );
            const careerProgressMap = parsed.state.careerProgressMap ?? {};
            const careerProgress: Record<string, Set<number>> = {};
            for (const [cid, steps] of Object.entries(careerProgressMap)) {
              careerProgress[cid] = new Set(steps as number[]);
            }
            return {
              state: { exploredSections, careerProgress },
              version: parsed.version,
            };
          } catch {
            return null;
          }
        },
        setItem: (name, value) => {
          const exploredMap: Record<string, boolean> = {};
          const sections = (
            value.state as {
              exploredSections: Set<SectionId>;
              careerProgress: Record<string, Set<number>>;
            }
          ).exploredSections;
          for (const id of sections) {
            exploredMap[id] = true;
          }

          const careerProgressMap: Record<string, number[]> = {};
          const cp = (
            value.state as {
              exploredSections: Set<SectionId>;
              careerProgress: Record<string, Set<number>>;
            }
          ).careerProgress;
          for (const [cid, steps] of Object.entries(cp)) {
            careerProgressMap[cid] = Array.from(steps);
          }

          localStorage.setItem(
            name,
            JSON.stringify({
              state: { exploredMap, careerProgressMap },
              version: value.version,
            }),
          );
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    },
  ),
);
