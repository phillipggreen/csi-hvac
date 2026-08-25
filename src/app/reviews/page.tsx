import type { Metadata } from "next";

import { ReviewsContent } from "@/components/reviews/reviews-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read customer reviews for Comfort Specialist Heating & Cooling and its HVAC services in Richmond, Kentucky.",
};

export default function ReviewsPage() {
  return (
    <>
      <UtilityPageHero
        description="Read what customers have shared about their experiences with Comfort Specialist Heating & Cooling."
        eyebrow="Customer Reviews"
        title="What Our Customers Say"
      />
      <ReviewsContent />
    </>
  );
}
