import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl",
        hover && "transition-all duration-300 hover:scale-105 hover:border-primary/50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
