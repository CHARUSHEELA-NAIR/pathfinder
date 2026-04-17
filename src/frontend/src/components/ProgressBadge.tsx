import { TOTAL_SECTIONS, useProgressStore } from "@/store/progressStore";
import { motion } from "motion/react";

interface ProgressBadgeProps {
  className?: string;
}

export default function ProgressBadge({ className = "" }: ProgressBadgeProps) {
  const { getExploredCount } = useProgressStore();
  const count = getExploredCount();
  const isComplete = count === TOTAL_SECTIONS;
  const pct = Math.round((count / TOTAL_SECTIONS) * 100);

  return (
    <div
      data-ocid="progress.badge"
      className={[
        "inline-flex items-center gap-2 px-3 py-1.5",
        "border rounded-sm font-mono text-xs tracking-wide",
        "transition-smooth shadow-maritime relative overflow-hidden",
        isComplete
          ? "bg-[#3E2723] text-[#F5E6CA] border-[#3E2723]"
          : "bg-[#F5E6CA] text-[#3E2723] border-[#3E2723]/50",
        className,
      ].join(" ")}
      title={`${count} of ${TOTAL_SECTIONS} sections explored (${pct}%)`}
      aria-label={`${count} of ${TOTAL_SECTIONS} sections explored`}
    >
      {/* Parchment texture */}
      <span
        className="absolute inset-0 parchment-texture pointer-events-none opacity-40"
        aria-hidden="true"
      />

      {/* Compass icon */}
      <motion.span
        className="relative z-10 text-sm leading-none"
        aria-hidden="true"
        animate={isComplete ? { rotate: 360 } : { rotate: 0 }}
        transition={
          isComplete ? { duration: 1.2, ease: "easeInOut" } : { duration: 0 }
        }
      >
        {isComplete ? "⚓" : "🧭"}
      </motion.span>

      {/* Count label */}
      <span className="relative z-10 whitespace-nowrap">
        <span className="font-bold">{count}</span>
        <span className="opacity-70">/{TOTAL_SECTIONS}</span>
        <span className="hidden sm:inline opacity-70 ml-1">Charted</span>
      </span>

      {/* Progress fill bar */}
      <span
        className="absolute bottom-0 left-0 h-0.5 bg-current opacity-30 transition-all duration-500"
        style={{ width: `${pct}%` }}
        aria-hidden="true"
      />
    </div>
  );
}
