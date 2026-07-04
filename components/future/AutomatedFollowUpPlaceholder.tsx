/**
 * Placeholder documenting the intended data contract for a future
 * automated follow-up system (e.g. drip email/SMS after an inspection
 * request is submitted). No UI is rendered; this hook marks the
 * integration point in the contact submission flow.
 *
 * Future implementation: call this after a successful /api/contact
 * submission to enroll the lead in a follow-up sequence via your
 * CRM or marketing automation provider.
 */
export type FollowUpLead = {
  name: string;
  email: string;
  phone: string;
  service: string;
  submittedAt: string;
};

export async function enrollInFollowUpSequence(_lead: FollowUpLead): Promise<void> {
  // Intentionally unimplemented. Wire this up to an email/SMS automation
  // provider (e.g. Klaviyo, HubSpot, Twilio) when that system is selected.
  return;
}
