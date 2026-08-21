import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { siteConfig } from "@/data/site-config";

const quickLinks = [
  { label: "HVAC Services", href: "/hvac-services" },
  { label: "Restaurant Equipment Services", href: "/restaurant-equipment-services" },
  { label: "Call Us", href: siteConfig.phone.href },
  { label: "Contact Us", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white" id="footer">
      <ContentContainer className="grid gap-10 py-12 md:grid-cols-[1fr_1.1fr_1fr] lg:py-14">
        <div className="text-center md:border-r md:border-white/10 md:pr-10">
          <Image alt={siteConfig.name} className="mx-auto h-auto w-64 max-w-full" height={398} src="/images/Logo-White.png" width={760} />
          <Link className="mt-6 inline-flex items-center gap-2 font-bold hover:text-white/80" href={siteConfig.phone.href}>
            <Phone aria-hidden="true" className="size-4 fill-current" />
            {siteConfig.phone.display}
          </Link>
        </div>

        <div>
          <h2 className="text-center text-xl font-extrabold uppercase">Quick Links</h2>
          <ul className="mt-5 space-y-2">
            {quickLinks.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link className="footer-link" href={item.href}>{item.label}</Link>
                ) : (
                  <span className="footer-link cursor-default" title="Page coming in a future phase">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-center text-xl font-extrabold uppercase md:text-left">Business Hours</h2>
          <dl className="mx-auto mt-5 max-w-xs space-y-2 text-sm sm:text-base md:mx-0">
            {siteConfig.businessHours.map((item) => (
              <div className="grid grid-cols-[1fr_auto] gap-5" key={item.day}>
                <dt>{item.day}:</dt>
                <dd>{item.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </ContentContainer>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/85 sm:text-sm">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          <span aria-hidden="true"> • </span>
          <a
            className="underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="https://www.greendigitalsolutions.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Built by Green Digital Solutions
          </a>
        </p>
        <p className="mt-1">Terms &amp; Conditions | Privacy Policy | Sitemap</p>
      </div>
    </footer>
  );
}
