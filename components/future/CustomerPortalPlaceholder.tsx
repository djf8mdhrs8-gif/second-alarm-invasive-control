import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/shared/Button";

/**
 * Placeholder for a future customer portal (service history, invoices,
 * appointment status, and follow-up scheduling). Replace with an
 * authenticated dashboard component when the customer portal ships.
 */
export function CustomerPortalPlaceholder() {
  return (
    <div className="card-surface rounded-3xl p-8 text-center sm:p-10">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-coastal-600/10 text-coastal-600 dark:text-coastal-400">
        <LayoutDashboard size={26} />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
        Customer Portal — Coming Soon
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-navy-600 dark:text-navy-300">
        A dedicated portal for tracking service history, appointments, and invoices is in
        development. Contact us directly for account updates in the meantime.
      </p>
      <div className="mt-6">
        <Button href="/contact" variant="secondary">
          Contact Our Team
        </Button>
      </div>
    </div>
  );
}
