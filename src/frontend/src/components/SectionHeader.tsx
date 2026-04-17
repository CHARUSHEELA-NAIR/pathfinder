interface SectionHeaderProps {
  icon?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable section heading with maritime anchor decoration.
 */
export default function SectionHeader({
  icon,
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.22em] uppercase font-body text-muted-foreground font-medium">
          {icon && (
            <span className="mr-2" aria-hidden="true">
              {icon}
            </span>
          )}
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
        {!eyebrow && icon && (
          <span className="mr-3" aria-hidden="true">
            {icon}
          </span>
        )}
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base text-muted-foreground max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
      {/* Maritime anchor decoration */}
      <div
        className={`flex items-center gap-3 mt-2 ${align === "center" ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <div className="h-px w-12 bg-border" />
        <span className="text-sm text-muted-foreground">⚓</span>
        <div className="h-px w-12 bg-border" />
      </div>
    </div>
  );
}
