import type { Metadata } from "next";

import { FeedbackLandingContent } from "@/components/feedback/feedback-content";
import { InteriorPageHero } from "@/components/layout/interior-page-hero";

export const metadata: Metadata = {
  title: "Customer Feedback",
  description: "Share feedback about your experience with Comfort Specialist Heating & Cooling.",
};

export default function FeedbackPage() {
  return (
    <>
      <InteriorPageHero title="Feedback" />
      <FeedbackLandingContent />
    </>
  );
}
