import type { ReactNode } from "react";

interface ExplorerCardProps {
  children: ReactNode;
  tilt?: "left" | "right" | "none";
  className?: string;
  hover?: boolean;
  "data-ocid"?: string;
}

/**
 * The core maritime document card.
 * Renders with parchment texture, optional 2–3° tilt, and a float-on-hover lift.
 */
export default function ExplorerCard({
  children,
  tilt = "none",
  className = "",
  hover = true,
  "data-ocid": ocid,
}: ExplorerCardProps) {
  const tiltClass =
    tilt === "left"
      ? "rotate-[-1.5deg]"
      : tilt === "right"
        ? "rotate-[1.5deg]"
        : "";

  return (
    <div
      data-ocid={ocid}
      className={`
        bg-card border border-border rounded-lg parchment-texture shadow-maritime
        ${tiltClass}
        ${hover ? "float-on-hover hover:shadow-maritime-lg hover:rotate-0 cursor-default" : ""}
        transition-smooth
        ${className}
      `}
    >
      {children}
    </div>
  );
}
