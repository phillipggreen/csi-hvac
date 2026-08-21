import { Phone, Send, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { feedbackRoutes, siteConfig } from "@/data/site-config";

const feedbackActions = [
  {
    href: feedbackRoutes.great,
    icon: ThumbsUp,
    label: "Positive Feedback",
  },
  {
    href: feedbackRoutes.notGreat,
    icon: ThumbsDown,
    label: "Room for Improvement",
  },
] as const;

function GoogleWordmark() {
  return (
    <span aria-label="Google" className="text-3xl font-bold tracking-tight" role="img">
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc05]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </span>
  );
}

function GoogleReviewCallout() {
  const content = (
    <>
      <GoogleWordmark />
      <span className="font-extrabold uppercase text-charcoal">Leave a Google Review</span>
      <span aria-hidden="true" className="flex gap-1 text-[#fbbc05]">
        {Array.from({ length: 5 }, (_, index) => <Star className="size-5 fill-current" key={index} />)}
      </span>
      {!siteConfig.googleReviewUrl && <span className="text-sm font-semibold text-charcoal/65">Review link pending</span>}
    </>
  );

  const className = "mx-auto flex min-h-44 w-full max-w-sm flex-col items-center justify-center gap-3 border border-slate-200 bg-white px-8 py-7 text-center shadow-sm";

  if (!siteConfig.googleReviewUrl) {
    return <div aria-disabled="true" className={className}>{content}</div>;
  }

  return (
    <a
      className={`${className} transition hover:border-brand-red hover:shadow-md focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red`}
      href={siteConfig.googleReviewUrl}
      rel="noreferrer"
      target="_blank"
    >
      {content}
    </a>
  );
}

export function FeedbackLandingContent() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <ContentContainer>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading centered>How Are We Doing?</SectionHeading>
          <h3 className="mt-7 text-balance text-xl font-black uppercase leading-tight text-charcoal sm:text-2xl">
            Compliments - Complaints - Concerns
          </h3>
          <div className="mx-auto mt-4 max-w-2xl space-y-1 text-sm leading-7 text-charcoal/80 sm:text-base">
            <p>We take our customer feedback seriously.</p>
            <p>Please tell us if you had a positive experience, or an unfavorable experience.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {feedbackActions.map(({ href, icon: Icon, label }) => (
              <Link
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-brand-red px-6 py-4 text-sm font-extrabold uppercase text-white hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-red"
                href={href}
                key={href}
              >
                <Icon aria-hidden="true" className="size-5 fill-current" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

export function GreatFeedbackContent() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <ContentContainer>
        <div className="mx-auto max-w-4xl text-center">
          <Send aria-hidden="true" className="mx-auto mb-6 size-9 text-brand-red" />
          <SectionHeading centered>
            We Are Happy That You Had<br className="hidden sm:block" /> A Great Experience With Us!
          </SectionHeading>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-charcoal/80 sm:text-lg">
            We love to spread the good news. Please take a couple minutes to share your experience on the web by leaving a Google review.
          </p>
          <div className="mt-10">
            <GoogleReviewCallout />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

export function NotGreatFeedbackContent() {
  const openDays = siteConfig.businessHours.filter((item) => item.hours !== "Closed");
  const weekdayRange = `${openDays[0].day} – ${openDays.at(-1)?.day}`;
  const consistentWeekdayHours = openDays.every((item) => item.hours === openDays[0].hours)
    ? openDays[0].hours
    : null;

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <ContentContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading centered>We&apos;d Like to Make It Right</SectionHeading>
          <div className="mx-auto mt-7 max-w-2xl space-y-4 text-base leading-7 text-charcoal/80 sm:text-lg">
            <p>We appreciate you taking the time to share your concern.</p>
            <p>The owner would like the opportunity to hear from you directly. Please call Comfort Specialist Heating &amp; Cooling to discuss your experience.</p>
          </div>
          <div className="mx-auto mt-10 max-w-xl bg-soft-gray px-5 py-8 sm:px-10">
            <PrimaryCta
              aria-label={`Call Comfort Specialist Heating & Cooling at ${siteConfig.phone.display}`}
              className="min-h-14 gap-3 px-8 text-base sm:text-lg"
              href={siteConfig.phone.href}
            >
              <Phone aria-hidden="true" className="size-5 fill-current" />
              Call {siteConfig.phone.display}
            </PrimaryCta>
            {consistentWeekdayHours && (
              <div className="mt-6 text-sm leading-6 text-charcoal/75 sm:text-base">
                <p className="font-extrabold uppercase text-charcoal">Business Hours</p>
                <p className="mt-1">{weekdayRange}</p>
                <p>{consistentWeekdayHours}</p>
              </div>
            )}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
