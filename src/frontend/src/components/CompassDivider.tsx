interface CompassDividerProps {
  className?: string;
  label?: string;
}

/**
 * Full-width ornamental divider with a compass rose motif.
 * Used between major content sections.
 */
export default function CompassDivider({
  className = "",
  label,
}: CompassDividerProps) {
  return (
    <div
      className={`flex items-center gap-4 my-10 px-6 ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
      <div className="flex items-center gap-2 text-muted-foreground select-none">
        <span className="text-base rotate-45 inline-block">✦</span>
        {label ? (
          <span className="text-xs tracking-[0.22em] uppercase font-body font-medium px-2 text-muted-foreground">
            {label}
          </span>
        ) : (
          <span className="text-base">🧭</span>
        )}
        <span className="text-base -rotate-45 inline-block">✦</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
    </div>
  );
}
