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
    <figure className="relative overflow-hidden border border-slate-200 bg-white px-6 py-8 text-center shadow-sm sm:px-8">
      <Quote aria-hidden="true" className="absolute top-5 left-5 size-6 fill-slate-300 text-slate-300" />
      <GoogleSourceLabel />
      <div aria-label={`${review.rating} out of 5 stars`} className="mt-5 flex justify-center gap-1 text-amber-400" role="img">
        {Array.from({ length: review.rating }).map((_, index) => <Star aria-hidden="true" className="size-5 fill-current" key={index} />)}
      </div>
      <figcaption className="mt-5">
        <time className="text-xs tracking-[0.16em] text-charcoal/60">{review.date}</time>
        <h2 className="mt-2 text-lg font-extrabold uppercase tracking-[0.12em] text-charcoal/75">{review.name}</h2>
      </figcaption>
      <blockquote className="mt-5 leading-7 text-charcoal/90">“{review.review}”</blockquote>
      <Quote aria-hidden="true" className="mt-7 ml-auto size-6 rotate-180 fill-slate-300 text-slate-300" />
    </figure>
  );
}
