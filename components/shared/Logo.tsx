import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      className={`focus-ring group inline-flex flex-col leading-none ${className}`}
      aria-label="Second Alarm Invasive Control — Home"
    >
      <span className="flex items-center gap-2">
        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-gold-500/70 bg-navy-950">
          <Image
            src="/logo.png"
            alt=""
            fill
            sizes="40px"
            className="scale-[1.7] object-cover object-[center_32%]"
            priority
          />
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
