import { Button } from "@/components/ui/button";
import type { ComponentProps, ReactNode } from "react";

interface PathButtonProps
  extends Omit<ComponentProps<typeof Button>, "children"> {
  children?: ReactNode;
  icon?: string;
}

/**
 * Maritime-themed action button.
 * Defaults to a parchment-style secondary appearance with hover lift.
 */
export default function PathButton({
  children = "Set Course",
  icon = "🧭",
  variant = "default",
  className = "",
  ...props
}: PathButtonProps) {
  return (
    <Button
      variant={variant}
      className={`
        font-body font-medium tracking-wide
        bg-secondary border border-border text-foreground
        hover:bg-primary hover:text-primary-foreground hover:shadow-maritime
        transition-smooth active:scale-95
        ${className}
      `}
      {...props}
    >
      {icon && (
        <span className="mr-2 text-base" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </Button>
  );
}
