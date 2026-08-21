import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { ReviewCard } from "@/components/reviews/review-card";
import { customerReviews } from "@/data/reviews";
import { feedbackRoutes } from "@/data/site-config";

function UnavailableReviewAction({ children }: { children: React.ReactNode }) {
  return (
    <span aria-disabled="true" className="inline-flex min-h-11 cursor-default items-center justify-center bg-brand-red px-6 py-3 text-sm font-extrabold uppercase text-white">
      {children}
    </span>
  );
}

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
          <UnavailableReviewAction>View More Reviews</UnavailableReviewAction>
        </div>
      </ContentContainer>
    </section>
  );
}
