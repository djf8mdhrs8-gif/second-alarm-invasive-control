import { CalendarClock } from "lucide-react";
import { Button } from "@/components/shared/Button";

/**
 * Placeholder for a future online self-scheduling integration
 * (e.g. Calendly, Acuity, or a custom booking flow). Replace the
 * static content below with an embedded scheduler component.
 */
export function OnlineSchedulingPlaceholder() {
  return (
    <div className="card-surface rounded-3xl p-8 text-center sm:p-10">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-coastal-600/10 text-coastal-600 dark:text-coastal-400">
        <CalendarClock size={26} />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
        Online Scheduling — Coming Soon
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-navy-600 dark:text-navy-300">
        Soon you&apos;ll be able to book your inspection instantly online. For now, request an
        appointment through our contact form and we&apos;ll confirm a time with you directly.
      </p>
      <div className="mt-6">
        <Button href="/contact" variant="secondary">
          Request an Appointment
        </Button>
      </div>
    </div>
  );
}
