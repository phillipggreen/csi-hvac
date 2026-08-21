import type { Metadata } from "next";

import { GreatFeedbackContent } from "@/components/feedback/feedback-content";
import { InteriorPageHero } from "@/components/layout/interior-page-hero";

export const metadata: Metadata = {
  title: "Share Your Experience",
  description: "Share a positive experience with Comfort Specialist Heating & Cooling.",
};

export default function GreatFeedbackPage() {
  return (
    <>
      <InteriorPageHero title="Spread the Word" />
      <GreatFeedbackContent />
    </>
  );
}
