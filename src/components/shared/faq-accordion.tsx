"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type FaqAccordionItem = {
  answer: string | null;
  question: string;
};

type FaqAccordionProps = {
  idPrefix: string;
  items: readonly FaqAccordionItem[];
};

export function FaqAccordion({ idPrefix, items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const hasAnswer = faq.answer !== null;
        const isOpen = hasAnswer && openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div key={faq.question}>
            <h3>
              <button
                aria-controls={hasAnswer ? panelId : undefined}
                aria-expanded={hasAnswer ? isOpen : undefined}
                className={cn("faq-trigger", !hasAnswer && "cursor-default")}
                disabled={!hasAnswer}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span>{faq.question}</span>
                <Plus aria-hidden="true" className={cn("size-5 shrink-0 transition-transform", isOpen && "rotate-45")} />
              </button>
            </h3>
            {hasAnswer && (
              <div className={cn("border-x border-b border-brand-blue/15 bg-white px-5 text-charcoal/80", isOpen ? "block py-5" : "hidden")} id={panelId}>
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
