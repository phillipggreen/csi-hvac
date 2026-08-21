"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { ContentContainer } from "@/components/shared/content-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { homeContent } from "@/data/home-content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <SectionHeading centered className="section-title-rule">Frequently Asked Questions</SectionHeading>
      <ContentContainer className="mt-12 space-y-3" size="faq">
        {homeContent.faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div key={faq.question}>
              <h3>
                <button aria-controls={panelId} aria-expanded={isOpen} className="faq-trigger" onClick={() => setOpenIndex(isOpen ? null : index)} type="button">
                  <span>{faq.question}</span>
                  <Plus aria-hidden="true" className={cn("size-5 shrink-0 transition-transform", isOpen && "rotate-45")} />
                </button>
              </h3>
              <div className={cn("border-x border-b border-brand-blue/15 bg-white px-5 text-charcoal/80", isOpen ? "block py-5" : "hidden")} id={panelId}>
                {faq.answer ?? "Answer content is awaiting confirmation from Comfort Specialist."}
              </div>
            </div>
          );
        })}
      </ContentContainer>
    </section>
  );
}
