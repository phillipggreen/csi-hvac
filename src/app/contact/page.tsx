import type { Metadata } from "next";

import { ContactContent } from "@/components/contact/contact-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Call Comfort Specialist Heating & Cooling to discuss HVAC or restaurant equipment service in Richmond, Kentucky.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <UtilityPageHero
        description="Call Comfort Specialist Heating & Cooling to discuss HVAC or restaurant equipment service."
        eyebrow="Contact"
        title="Let's Talk About What You Need."
      />
      <ContactContent />
    </>
  );
}
