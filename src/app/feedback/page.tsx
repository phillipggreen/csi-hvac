import type { Metadata } from "next";

import { FeedbackLandingContent } from "@/components/feedback/feedback-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";

export const metadata: Metadata = {
  title: "Customer Feedback",
  description: "Share feedback about your experience with Comfort Specialist Heating & Cooling.",
};

export default function FeedbackPage() {
  return (
    <>
      <UtilityPageHero
        description="Compliments. Concerns. Room to improve. We appreciate hearing about your experience."
        eyebrow="Feedback"
        title="How Are We Doing?"
      />
      <FeedbackLandingContent />
    </>
  );
}
