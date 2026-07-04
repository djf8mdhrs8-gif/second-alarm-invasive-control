"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/shared/Button";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "@/lib/data";
import { company } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100/80 bg-white/90 backdrop-blur-md dark:border-navy-800/80 dark:bg-navy-950/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-3">
        <Logo light={!scrolled} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-navy-700 hover:bg-navy-50 hover:text-coastal-600 dark:text-navy-200 dark:hover:bg-navy-800"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown size={14} />}
              </Link>

              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full w-72 overflow-hidden rounded-2xl border border-navy-100 bg-white p-2 shadow-xl dark:border-navy-700 dark:bg-navy-900"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="focus-ring block rounded-xl px-4 py-3 transition-colors hover:bg-navy-50 dark:hover:bg-navy-800"
                      >
                        <span className="block text-sm font-semibold text-navy-900 dark:text-white">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="mt-0.5 block text-xs text-navy-500 dark:text-navy-400">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle light={!scrolled} />
          <a
            href={company.phoneHref}
            className={`focus-ring flex items-center gap-2 text-sm font-bold ${
              scrolled ? "text-navy-800 dark:text-white" : "text-white"
            }`}
          >
            <Phone size={16} className="text-coastal-500" />
            {company.phone}
          </a>
          <Button href="/contact" size="md">
            Schedule an Inspection
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle light={!scrolled} />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full border ${
              scrolled
                ? "border-navy-200 text-navy-800 dark:border-navy-700 dark:text-white"
                : "border-white/40 text-white"
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden dark:border-navy-800 dark:bg-navy-950"
          >
            <div className="container-px mx-auto max-w-7xl py-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-navy-100 py-2 last:border-none dark:border-navy-800">
                  <Link
                    href={link.href}
                    className="block py-2 text-base font-semibold text-navy-900 dark:text-white"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-3 flex flex-col gap-1 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-1.5 text-sm text-navy-600 dark:text-navy-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={company.phoneHref}
                  className="focus-ring flex items-center justify-center gap-2 rounded-full border border-navy-200 py-3 text-sm font-bold text-navy-900 dark:border-navy-700 dark:text-white"
                >
                  <Phone size={16} className="text-coastal-500" />
                  {company.phone}
                </a>
                <Button href="/contact" className="w-full justify-center">
                  Schedule an Inspection
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
