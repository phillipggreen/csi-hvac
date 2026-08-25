import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { ReviewCard } from "@/components/reviews/review-card";
import { customerReviews } from "@/data/reviews";
import { feedbackRoutes, siteConfig } from "@/data/site-config";

export function ReviewsContent() {
  return (
    <section aria-label="Customer reviews" className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
      <ContentContainer size="wide">
        <div className="flex flex-col gap-7 border-l-4 border-brand-red bg-white p-7 shadow-[0_16px_45px_rgba(8,37,68,0.06)] sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Share or explore</p>
            <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-brand-blue sm:text-3xl">Customer feedback, in their own words.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryCta href={feedbackRoutes.root}>Leave a Testimonial</PrimaryCta>
            <PrimaryCta href={siteConfig.googleReviewUrl} rel="noopener noreferrer" target="_blank" tone="blue">View More Reviews</PrimaryCta>
          </div>
        </div>
        <div className="mt-10 columns-1 gap-6 md:columns-2 xl:columns-3">
          {customerReviews.map((review) => <ReviewCard key={`${review.name}-${review.date}`} review={review} />)}
        </div>
        <div className="mt-12 flex justify-center">
          <PrimaryCta
            href={siteConfig.googleReviewUrl}
            rel="noopener noreferrer"
            target="_blank"
            tone="blue"
          >
            View More Reviews
          </PrimaryCta>
        </div>
      </ContentContainer>
    </section>
  );
}
