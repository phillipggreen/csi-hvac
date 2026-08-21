import type { Metadata } from "next";

import { NotGreatFeedbackContent } from "@/components/feedback/feedback-content";
import { InteriorPageHero } from "@/components/layout/interior-page-hero";

export const metadata: Metadata = {
  title: "Share a Concern",
  description: "Contact Comfort Specialist Heating & Cooling directly to share a concern.",
};

export default function NotGreatFeedbackPage() {
  return (
    <>
      <InteriorPageHero title="Feedback" />
      <NotGreatFeedbackContent />
    </>
  );
}
