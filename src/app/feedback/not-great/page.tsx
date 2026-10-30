import type { Metadata } from "next";

import { NotGreatFeedbackContent } from "@/components/feedback/feedback-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Share a Concern",
  description: "Contact Comfort Specialist Heating & Cooling directly to share a concern.",
  path: "/feedback/not-great",
});

export default function NotGreatFeedbackPage() {
  return (
    <>
      <UtilityPageHero eyebrow="We're Listening" title="We'd Like the Opportunity to Make It Right." />
      <NotGreatFeedbackContent />
    </>
  );
}
