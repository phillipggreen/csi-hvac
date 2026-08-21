import { Phone } from "lucide-react";
import type { Metadata } from "next";

import { InteriorPageHero } from "@/components/layout/interior-page-hero";
import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call Comfort Specialist Heating & Cooling to discuss HVAC or restaurant equipment service in Richmond, Kentucky.",
};

export default function ContactPage() {
  const openDays = siteConfig.businessHours.filter((item) => item.hours !== "Closed");
  const weekdayRange = `${openDays[0].day} – ${openDays.at(-1)?.day}`;
  const consistentWeekdayHours = openDays.every((item) => item.hours === openDays[0].hours)
    ? openDays[0].hours
    : null;

  return (
    <>
      <InteriorPageHero title="Contact Us" />
      <section className="py-16 text-center sm:py-20 lg:py-24">
        <ContentContainer>
          <div className="mx-auto max-w-3xl">
            <SectionHeading centered className="section-title-rule">Reach Out Today!</SectionHeading>
            <p className="mx-auto mt-10 max-w-2xl leading-7 text-charcoal/85 sm:text-lg">
              Need HVAC or restaurant equipment service? Give Comfort Specialist Heating &amp; Cooling a call today and we&apos;ll be happy to discuss your service needs.
            </p>
            <PrimaryCta
              aria-label={`Call Comfort Specialist Heating & Cooling at ${siteConfig.phone.display}`}
              className="mt-8 min-h-14 gap-3 px-8 text-base sm:text-lg"
              href={siteConfig.phone.href}
            >
              <Phone aria-hidden="true" className="size-5 fill-current" />
              Call {siteConfig.phone.display}
            </PrimaryCta>
            {consistentWeekdayHours && (
              <div className="mt-8 text-sm leading-6 text-charcoal/75 sm:text-base">
                <p className="font-extrabold uppercase text-charcoal">Business Hours</p>
                <p className="mt-1">{weekdayRange}</p>
                <p>{consistentWeekdayHours}</p>
              </div>
            )}
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
