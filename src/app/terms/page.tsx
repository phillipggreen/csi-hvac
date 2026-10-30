import type { Metadata } from "next";

import { LegalContent, type LegalSection } from "@/components/shared/legal-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";
import { siteConfig } from "@/data/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: `Terms for using the ${siteConfig.name} website.`,
  path: "/terms",
});

const phoneLink = (
  <a className="font-bold text-brand-blue underline underline-offset-4 hover:text-brand-red" href={siteConfig.phone.href}>
    {siteConfig.phone.display}
  </a>
);

const sections: LegalSection[] = [
  {
    title: "Using This Website",
    body: <p>By using this website, you agree to these terms. If you do not agree, please do not use the site.</p>,
  },
  {
    title: "Website Information",
    body: (
      <p>
        The information on this website is a general description of our services. It is not a quote, offer, or guarantee. Pricing, scheduling, and warranty details are confirmed directly with {siteConfig.name} for each job.
      </p>
    ),
  },
  {
    title: "Financing",
    body: (
      <p>
        Financing is provided by {siteConfig.financing.provider} and is subject to credit approval. {siteConfig.financing.provider} sets its own terms and conditions.
      </p>
    ),
  },
  {
    title: "Links to Other Websites",
    body: <p>This website links to sites we do not control. We are not responsible for their content or practices.</p>,
  },
  {
    title: "Content Ownership",
    body: (
      <p>
        The text, images, and logos on this website belong to {siteConfig.name} and may not be copied or reused without permission.
      </p>
    ),
  },
  {
    title: "No Warranties",
    body: (
      <p>
        This website is provided &ldquo;as is.&rdquo; To the extent permitted by law, {siteConfig.name} is not liable for any damages that result from using this website.
      </p>
    ),
  },
  {
    title: "Governing Law",
    body: <p>These terms are governed by the laws of the Commonwealth of Kentucky.</p>,
  },
  {
    title: "Changes to These Terms",
    body: <p>We may update these terms from time to time. Changes take effect when they are posted on this page.</p>,
  },
  {
    title: "Contact Us",
    body: <p>Questions about these terms? Call us at {phoneLink}.</p>,
  },
];

export default function TermsPage() {
  return (
    <>
      <UtilityPageHero eyebrow="Terms" title="Terms & Conditions" />
      <LegalContent lastUpdated="October 30, 2026" sections={sections} />
    </>
  );
}
