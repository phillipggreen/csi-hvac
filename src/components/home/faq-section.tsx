import { ContentContainer } from "@/components/shared/content-container";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { homeContent } from "@/data/home-content";

export function FaqSection() {
  const answeredFaqs = homeContent.faqs.filter((faq) => faq.answer !== null);

  if (answeredFaqs.length === 0) return null;

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <SectionHeading centered className="section-title-rule">Frequently Asked Questions</SectionHeading>
      <ContentContainer className="mt-12" size="faq">
        <FaqAccordion idPrefix="home-faq" items={answeredFaqs} />
      </ContentContainer>
    </section>
  );
}
