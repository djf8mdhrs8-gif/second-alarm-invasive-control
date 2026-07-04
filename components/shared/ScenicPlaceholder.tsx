import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

export function ScenicPlaceholder({
  icon: Icon,
  label,
  className = "",
  variant = "navy",
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
  variant?: "navy" | "coastal" | "gold";
}) {
  const gradients: Record<string, string> = {
    navy: "from-navy-800 via-navy-900 to-navy-950",
    coastal: "from-coastal-700 via-coastal-800 to-navy-950",
    gold: "from-navy-900 via-navy-950 to-navy-950",
  };

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradients[variant],
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[length:32px_32px] opacity-40" />
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-coastal-500/20 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <Icon className="h-10 w-10 text-gold-400" strokeWidth={1.5} />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          {label}
        </span>
      </div>
    </div>
  );
}
