import { SectionHeading } from "@/components/shared/section-heading";
import { homeContent } from "@/data/home-content";

export function HomeIntro() {
  const { body, eyebrow, heading } = homeContent.intro;
  return (
    <section className="bg-soft-gray py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading centered eyebrow={eyebrow}>{heading}</SectionHeading>
        <p className="mx-auto mt-6 max-w-3xl leading-7 text-charcoal/85 sm:text-lg sm:leading-8">{body}</p>
      </div>
    </section>
  );
}
