import type { Metadata } from "next";

import { LegalContent, type LegalSection } from "@/components/shared/legal-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";
import { siteConfig } from "@/data/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles information when you visit this website.`,
  path: "/privacy",
});

const phoneLink = (
  <a className="font-bold text-brand-blue underline underline-offset-4 hover:text-brand-red" href={siteConfig.phone.href}>
    {siteConfig.phone.display}
  </a>
);

const sections: LegalSection[] = [
  {
    title: "Overview",
    body: <p>This policy explains how {siteConfig.name} handles information when you visit this website.</p>,
  },
  {
    title: "Information We Collect",
    body: (
      <p>
        This website has no forms, no accounts, and no analytics. We do not ask you to submit personal information online, and we do not use cookies to track your visit.
      </p>
    ),
  },
  {
    title: "Technical Information",
    body: (
      <p>
        Like most websites, our hosting provider may automatically record basic technical details, such as your IP address, browser type, and the pages requested, to keep the site secure and running. We do not use this information to identify you or for marketing.
      </p>
    ),
  },
  {
    title: "When You Call Us",
    body: (
      <p>
        If you call us, we use the details you share, such as your name, phone number, and service location, only to respond to you and provide service. We do not sell your information.
      </p>
    ),
  },
  {
    title: "Links to Other Websites",
    body: (
      <p>
        This website links to other services, such as Google for reviews and {siteConfig.financing.provider} for financing. Their own privacy policies apply when you visit them.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    body: <p>We may update this policy from time to time. Changes take effect when they are posted on this page.</p>,
  },
  {
    title: "Contact Us",
    body: <p>Questions about this policy? Call us at {phoneLink}.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <UtilityPageHero eyebrow="Privacy" title="Privacy Policy" />
      <LegalContent lastUpdated="October 30, 2026" sections={sections} />
    </>
  );
}
