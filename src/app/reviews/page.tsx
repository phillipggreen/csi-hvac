import type { Metadata } from "next";

import { InteriorPageHero } from "@/components/layout/interior-page-hero";
import { ReviewsContent } from "@/components/reviews/reviews-content";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read customer reviews for Comfort Specialist Heating & Cooling and its HVAC services in Richmond, Kentucky.",
};

export default function ReviewsPage() {
  return (
    <>
      <InteriorPageHero title="Reviews" />
      <ReviewsContent />
    </>
  );
}
