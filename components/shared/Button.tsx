import Link from "next/link";
import type { ReactNode } from "react";
import clsx from "clsx";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-ember-600 text-white border border-ember-500/60 hover:bg-ember-700 shadow-lg shadow-ember-900/30",
  secondary:
    "bg-navy-900 text-white border border-gold-500/30 hover:bg-navy-800 dark:bg-white dark:text-navy-900 dark:hover:bg-navy-100",
  ghost:
    "bg-transparent border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
  gold: "bg-gold-500 text-navy-950 border border-gold-300/60 hover:bg-gold-400 shadow-lg shadow-gold-900/20",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon,
  } = props;

  const classes = clsx(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button type={buttonProps.type ?? "button"} onClick={buttonProps.onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
