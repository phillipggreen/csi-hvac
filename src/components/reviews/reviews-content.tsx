import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { ReviewCard } from "@/components/reviews/review-card";
import { customerReviews } from "@/data/reviews";
import { feedbackRoutes, siteConfig } from "@/data/site-config";

export function ReviewsContent() {
  return (
    <section aria-label="Customer reviews" className="py-14 sm:py-16 lg:py-20">
      <ContentContainer>
        <div className="text-center sm:text-left">
          <PrimaryCta href={feedbackRoutes.root}>Leave a Testimonial</PrimaryCta>
        </div>
        <div className="mt-14 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
          {customerReviews.map((review) => <ReviewCard key={`${review.name}-${review.date}`} review={review} />)}
        </div>
        <div className="mt-12 text-center">
          <PrimaryCta
            href={siteConfig.googleReviewUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            View More Reviews
          </PrimaryCta>
        </div>
      </ContentContainer>
    </section>
  );
}
