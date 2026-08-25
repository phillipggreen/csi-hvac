import type { Metadata } from "next";

import { ContactContent } from "@/components/contact/contact-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call Comfort Specialist Heating & Cooling to discuss HVAC or restaurant equipment service in Richmond, Kentucky.",
};

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
