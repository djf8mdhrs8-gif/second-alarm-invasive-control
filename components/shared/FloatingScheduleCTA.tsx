"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import Link from "next/link";

export function FloatingScheduleCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-20 right-5 z-40 hidden sm:bottom-6 sm:block"
        >
          <Link
            href="/contact"
            className="focus-ring group flex items-center gap-2 rounded-md border border-gold-300/60 bg-gold-500 px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-navy-950 shadow-xl shadow-gold-900/30 transition-transform hover:-translate-y-0.5"
          >
            <CalendarCheck size={18} />
            Schedule an Inspection
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
