import { ArrowUpRight, Clock3, Phone, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { feedbackRoutes, siteConfig } from "@/data/site-config";

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

function StarRating() {
  return (
    <div aria-label="Five out of five stars" className="flex gap-1 text-[#fbbc05]" role="img">
      {Array.from({ length: 5 }, (_, index) => <Star aria-hidden="true" className="size-6 fill-current" key={index} />)}
    </div>
  );
}

function BusinessHours() {
  return (
    <div>
      <div className="flex items-center gap-3 text-brand-blue/60">
        <Clock3 aria-hidden="true" className="size-5" />
        <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Business Hours</p>
      </div>
      <dl className="mt-5 divide-y divide-brand-blue/15 border-y border-brand-blue/15">
        {siteConfig.businessHours.map((item) => (
          <div className="flex min-h-11 items-center justify-between gap-4 py-2.5 text-sm" key={item.day}>
            <dt className="font-bold text-brand-blue">{item.day}</dt>
            <dd className="text-right text-charcoal/70">{item.hours}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function FeedbackLandingContent() {
  return (
    <section className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
      <ContentContainer size="wide">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Choose the path that fits</p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl">Tell Us About Your Experience</h2>
          <div className="mt-5 space-y-1 text-base leading-8 text-charcoal/78">
            <p>We take our customer feedback seriously.</p>
            <p>Please tell us if you had a positive experience, or an unfavorable experience.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Link className="group flex min-h-72 flex-col justify-between border-t-4 border-brand-red bg-white p-7 shadow-[0_18px_50px_rgba(8,37,68,0.08)] transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red sm:p-10" href={feedbackRoutes.great}>
            <div>
              <span className="inline-flex size-14 items-center justify-center bg-brand-red text-white"><ThumbsUp aria-hidden="true" className="size-7" /></span>
              <h3 className="mt-7 text-2xl font-black uppercase text-brand-blue sm:text-3xl">Positive Feedback</h3>
              <p className="mt-4 max-w-xl leading-7 text-charcoal/75">We are happy that you had a great experience with us.</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-brand-red">Share Your Experience <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>

          <Link className="group flex min-h-72 flex-col justify-between bg-brand-blue p-7 text-white transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:p-10" href={feedbackRoutes.notGreat}>
            <div>
              <span className="inline-flex size-14 items-center justify-center bg-white/10 text-white"><ThumbsDown aria-hidden="true" className="size-7" /></span>
              <h3 className="mt-7 text-2xl font-black uppercase sm:text-3xl">Room for Improvement</h3>
              <p className="mt-4 max-w-xl leading-7 text-white/72">We appreciate you taking the time to share your concern.</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-white">Contact Us Directly <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>
        </div>
      </ContentContainer>
    </section>
  );
}

export function GreatFeedbackContent() {
  return (
    <section className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
      <ContentContainer>
        <div className="mx-auto max-w-4xl bg-white p-7 text-center shadow-[0_22px_65px_rgba(8,37,68,0.1)] sm:p-12 lg:p-16">
          <GoogleWordmark />
          <div className="mt-5 flex justify-center"><StarRating /></div>
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Share the good news</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl">Leave a Google Review</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-charcoal/78 sm:text-lg">We love to spread the good news. Please take a couple minutes to share your experience on the web by leaving a Google review.</p>
          <a className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 bg-brand-red px-7 py-4 text-sm font-extrabold uppercase text-white transition-colors hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red" href={siteConfig.googleReviewUrl} rel="noopener noreferrer" target="_blank">
            Leave a Google Review <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <p className="mt-5 text-xs leading-5 text-charcoal/50">This link opens the Google review destination in a new tab.</p>
        </div>
      </ContentContainer>
    </section>
  );
}

export function NotGreatFeedbackContent() {
  return (
    <section className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
      <ContentContainer size="wide">
        <div className="grid overflow-hidden bg-white shadow-[0_22px_65px_rgba(8,37,68,0.1)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">A direct conversation</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl">We&apos;d Like to Make It Right</h2>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-charcoal/78 sm:text-lg">
              <p>We appreciate you taking the time to share your concern.</p>
              <p>The owner would like the opportunity to hear from you directly. Please call Comfort Specialist Heating &amp; Cooling to discuss your experience.</p>
            </div>
            <a aria-label={`Call Comfort Specialist Heating & Cooling at ${siteConfig.phone.display}`} className="mt-8 inline-flex min-h-16 w-fit items-center justify-center gap-3 bg-brand-red px-7 py-4 text-lg font-black uppercase text-white transition-colors hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red sm:px-9" href={siteConfig.phone.href}>
              <Phone aria-hidden="true" className="size-6 fill-current" />
              {siteConfig.phone.display}
            </a>
          </div>
          <aside aria-label="Business hours" className="bg-white p-7 sm:p-10 lg:p-12 xl:p-14">
            <BusinessHours />
            <PrimaryCta className="mt-8 w-full sm:w-auto" href={siteConfig.phone.href} tone="blue">Call Now</PrimaryCta>
          </aside>
        </div>
      </ContentContainer>
    </section>
  );
}
