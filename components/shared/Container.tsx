import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-px mx-auto max-w-7xl ${className}`}>{children}</div>;
}
