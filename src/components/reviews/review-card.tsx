import { Quote, Star } from "lucide-react";

import type { CustomerReview } from "@/data/reviews";

function GoogleSourceLabel() {
  return (
    <div aria-label="Source: Google review" className="text-center" role="img">
      <span aria-hidden="true" className="text-xl font-bold tracking-tight">
        <span className="text-[#4285f4]">G</span>
        <span className="text-[#ea4335]">o</span>
        <span className="text-[#fbbc05]">o</span>
        <span className="text-[#4285f4]">g</span>
        <span className="text-[#34a853]">l</span>
        <span className="text-[#ea4335]">e</span>
      </span>
      <span aria-hidden="true" className="ml-1.5 text-xs font-bold uppercase tracking-wide text-charcoal/55">Review</span>
    </div>
  );
}

export function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <figure className="mb-6 break-inside-avoid-column border border-brand-blue/10 bg-white p-6 shadow-[0_14px_38px_rgba(8,37,68,0.06)] sm:p-8">
      <div className="flex items-start justify-between gap-5">
        <GoogleSourceLabel />
        <Quote aria-hidden="true" className="size-7 shrink-0 fill-brand-blue/10 text-brand-blue/10" />
      </div>
      <div aria-label={`${review.rating} out of 5 stars`} className="mt-6 flex gap-1 text-amber-400" role="img">
        {Array.from({ length: review.rating }).map((_, index) => <Star aria-hidden="true" className="size-5 fill-current" key={index} />)}
      </div>
      <blockquote className="mt-5 text-[15px] leading-7 text-charcoal/82">“{review.review}”</blockquote>
      <figcaption className="mt-7 border-t border-brand-blue/10 pt-5">
        <h2 className="text-base font-black uppercase tracking-[0.08em] text-brand-blue">{review.name}</h2>
        <time className="mt-1 block text-xs tracking-[0.12em] text-charcoal/55">{review.date}</time>
      </figcaption>
    </figure>
  );
}
