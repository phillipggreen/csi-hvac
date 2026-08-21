import { Star } from "lucide-react";

import { ContentContainer } from "@/components/shared/content-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { homeContent } from "@/data/home-content";

export function Testimonials() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <SectionHeading centered className="section-title-rule">Testimonials</SectionHeading>
      <ContentContainer className="mt-12 grid gap-6 lg:grid-cols-3">
        {homeContent.testimonials.map((testimonial) => (
          <figure className="flex min-h-72 flex-col items-center justify-center bg-brand-red px-7 py-10 text-center text-white" key={testimonial.name}>
            <div aria-label="5 out of 5 stars" className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => <Star aria-hidden="true" className="size-5 fill-current" key={index} />)}
            </div>
            <figcaption className="mt-5 text-2xl font-black uppercase">{testimonial.name}</figcaption>
            <blockquote className="mt-5 text-sm leading-7">{testimonial.review}</blockquote>
          </figure>
        ))}
      </ContentContainer>
    </section>
  );
}
