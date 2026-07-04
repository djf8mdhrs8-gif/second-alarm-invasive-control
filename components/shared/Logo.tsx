import Link from "next/link";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      className={`focus-ring group inline-flex flex-col leading-none ${className}`}
      aria-label="Second Alarm Invasive Control — Home"
    >
      <span className="flex items-center gap-2">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-sm border border-gold-500/70 bg-navy-900 text-gold-400 dark:bg-navy-950">
          <span className="font-display text-lg font-bold">SA</span>
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-coastal-500 group-hover:animate-ping" />
        </span>
        <span className="flex flex-col">
          <span
            className={`font-display text-[0.95rem] font-bold tracking-wide ${
              light ? "text-white" : "text-navy-900 dark:text-white"
            }`}
          >
            SECOND ALARM
          </span>
          <span
            className={`text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
              light ? "text-coastal-300" : "text-coastal-600 dark:text-coastal-400"
            }`}
          >
            Invasive Control
          </span>
        </span>
      </span>
    </Link>
  );
}
