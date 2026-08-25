import { Quote, Star } from "lucide-react";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { homeRedesignContent } from "@/data/home-redesign-content";
import { customerReviews } from "@/data/reviews";

const selectedReviews = customerReviews.filter((review) =>
  homeRedesignContent.selectedReviewNames.some((name) => name === review.name),
);

function GoogleReviewSource() {
  return (
    <span aria-label="Google review" className="inline-flex items-center" role="img">
      <span aria-hidden="true" className="text-lg font-bold tracking-tight">
        <span className="text-[#4285f4]">G</span>
        <span className="text-[#ea4335]">o</span>
        <span className="text-[#fbbc05]">o</span>
        <span className="text-[#4285f4]">g</span>
        <span className="text-[#34a853]">l</span>
        <span className="text-[#ea4335]">e</span>
      </span>
      <span aria-hidden="true" className="ml-1.5 text-[0.65rem] font-black uppercase tracking-[0.12em] text-slate-500">Review</span>
    </span>
  );
}

export function HomeSelectedReviews() {
  const content = homeRedesignContent.reviews;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <ContentContainer size="wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">{content.eyebrow}</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl">{content.heading}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{content.description}</p>
          </div>
          <Link className="inline-flex min-h-12 self-start items-center border-b-2 border-brand-red text-sm font-black uppercase tracking-[0.08em] text-brand-navy hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:self-auto" href="/reviews">
            Read All Reviews
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {selectedReviews.map((review) => (
            <figure className="relative flex min-h-full flex-col border border-slate-200 border-t-4 border-t-brand-red bg-blue-gray px-6 py-8 sm:px-8" key={review.name}>
              <div className="flex items-center justify-between gap-4">
                <GoogleReviewSource />
                <Quote aria-hidden="true" className="size-7 fill-brand-navy/10 text-brand-navy/10" />
              </div>
              <div aria-label={`${review.rating} out of 5 stars`} className="mt-6 flex gap-1 text-amber-400" role="img">
                {Array.from({ length: review.rating }).map((_, index) => <Star aria-hidden="true" className="size-4 fill-current" key={index} />)}
              </div>
              <blockquote className="mt-6 flex-1 text-[1.05rem] leading-8 text-slate-700">“{review.review}”</blockquote>
              <figcaption className="mt-8 border-t border-slate-300 pt-5">
                <p className="font-black text-brand-navy">{review.name}</p>
                <time className="mt-1 block text-xs uppercase tracking-[0.12em] text-slate-500">{review.date}</time>
              </figcaption>
            </figure>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
