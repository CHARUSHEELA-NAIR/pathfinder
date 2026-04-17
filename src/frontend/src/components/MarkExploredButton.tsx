import { type SectionId, useProgressStore } from "@/store/progressStore";
import { AnimatePresence, motion } from "motion/react";

interface MarkExploredButtonProps {
  sectionId: SectionId;
  className?: string;
}

export default function MarkExploredButton({
  sectionId,
  className = "",
}: MarkExploredButtonProps) {
  const { isExplored, markExplored, markUnexplored } = useProgressStore();
  const explored = isExplored(sectionId);

  const handleClick = () => {
    if (explored) {
      markUnexplored(sectionId);
    } else {
      markExplored(sectionId);
    }
  };

  return (
    <div className={`relative inline-flex ${className}`}>
      <button
        type="button"
        data-ocid={`${sectionId}.mark_explored_button`}
        onClick={handleClick}
        aria-pressed={explored}
        aria-label={
          explored
            ? "Remove explored mark from this section"
            : "Mark this section as explored"
        }
        className={[
          "relative group inline-flex items-center gap-2 px-5 py-2.5",
          "font-mono text-sm tracking-wide uppercase rounded-sm",
          "border-2 transition-smooth select-none overflow-hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          explored
            ? [
                "bg-[#3E2723] text-[#F5E6CA]",
                "border-[#3E2723]",
                "shadow-maritime",
                "focus-visible:ring-[#3E2723]",
              ].join(" ")
            : [
                "bg-[#F5E6CA] text-[#3E2723]",
                "border-[#3E2723]/60",
                "hover:bg-[#EAD7B7] hover:border-[#3E2723]",
                "shadow-maritime",
                "focus-visible:ring-[#3E2723]",
              ].join(" "),
        ].join(" ")}
      >
        {/* Parchment texture overlay */}
        <span
          className="absolute inset-0 parchment-texture pointer-events-none opacity-60"
          aria-hidden="true"
        />

        {/* Stamp ring effect when explored */}
        <AnimatePresence>
          {explored && (
            <motion.span
              key="stamp-ring"
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 rounded-sm border-4 border-[#F5E6CA]/30 pointer-events-none"
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        {/* Icon */}
        <span
          className="relative z-10 text-base leading-none"
          aria-hidden="true"
        >
          {explored ? "⚓" : "◯"}
        </span>

        {/* Label */}
        <span className="relative z-10">
          <AnimatePresence mode="wait">
            {explored ? (
              <motion.span
                key="explored"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                Charted ✓
              </motion.span>
            ) : (
              <motion.span
                key="unexplored"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                Mark as Explored
              </motion.span>
            )}
          </AnimatePresence>
        </span>

        {/* Ink stamp border decoration when explored */}
        {explored && (
          <span
            className="absolute inset-[3px] border border-dashed border-[#F5E6CA]/40 rounded-sm pointer-events-none"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}
