import type * as React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The color of the spinner
   * @default "text-primary"
   */
  color?: string;
  /**
   * The size of the spinner
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl";
}

export function Spinner({
  color = "text-primary",
  size = "md",
  className,
  ...props
}: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
    xl: "h-12 w-12 border-4",
  };

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-solid border-current border-t-transparent",
        color,
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
