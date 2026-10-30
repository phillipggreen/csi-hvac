import type { Metadata } from "next";

import { GreatFeedbackContent } from "@/components/feedback/feedback-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Share Your Experience",
  description: "Share a positive experience with Comfort Specialist Heating & Cooling.",
  path: "/feedback/great",
});

export default function GreatFeedbackPage() {
  return (
    <>
      <UtilityPageHero eyebrow="Thank You" title="We're Glad You Had a Great Experience." />
      <GreatFeedbackContent />
    </>
  );
}
