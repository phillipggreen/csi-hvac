import posthog from "posthog-js";

import { siteConfig } from "@/data/site-config";

/** Super property so several sites can share one PostHog project. */
export const ANALYTICS_SITE = "comfort-specialist";

const DEFAULT_POSTHOG_HOST = "https://us.i.posthog.com";

export type ContactLinkEvent = "call_clicked" | "email_clicked";

type AnalyticsGateInput = {
  apiKey: string | undefined;
  vercelEnv: string | undefined;
  hostname: string | undefined;
  productionHostname: string;
};

export function productionHostname(): string {
  return new URL(siteConfig.url).hostname;
}

/**
 * Analytics runs only for the production deployment on the canonical domain.
 * Preview, local, and the Vercel project URL stay out of PostHog.
 */
export function shouldEnableAnalytics({
  apiKey,
  vercelEnv,
  hostname,
  productionHostname: expectedHostname,
}: AnalyticsGateInput): boolean {
  if (!apiKey?.trim()) return false;
  if (vercelEnv !== "production") return false;
  if (!hostname) return false;
  return hostname.toLowerCase() === expectedHostname.toLowerCase();
}

/** Classify a link without returning the phone number or email address. */
export function contactLinkEvent(href: string | null | undefined): ContactLinkEvent | null {
  if (!href) return null;
  const normalized = href.trim().toLowerCase();
  if (normalized.startsWith("tel:")) return "call_clicked";
  if (normalized.startsWith("mailto:")) return "email_clicked";
  return null;
}

let listening = false;

function captureContactLink(event: ContactLinkEvent): void {
  try {
    if (!posthog.__loaded) return;
    posthog.capture(event, {
      page_path: window.location.pathname,
    });
  } catch {
    // A failed analytics call must not break the page.
  }
}

function onDocumentClick(event: MouseEvent): void {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest("a");
  if (!anchor) return;
  const analyticsEvent = contactLinkEvent(anchor.getAttribute("href"));
  if (!analyticsEvent) return;
  captureContactLink(analyticsEvent);
}

export function initAnalytics(): void {
  if (listening || typeof window === "undefined") return;

  try {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim();
    const enabled = shouldEnableAnalytics({
      apiKey,
      vercelEnv: process.env.NEXT_PUBLIC_VERCEL_ENV,
      hostname: window.location.hostname,
      productionHostname: productionHostname(),
    });
    if (!enabled || !apiKey) return;

    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || DEFAULT_POSTHOG_HOST;

    posthog.init(apiKey, {
      api_host: host,
      defaults: "2026-01-30",
      capture_pageview: "history_change",
      persistence: "memory",
      disable_session_recording: true,
      // Link text on this site is the phone number. Leave those clicks to call_clicked.
      autocapture: false,
      rageclick: false,
      capture_dead_clicks: false,
      capture_heatmaps: false,
      disable_surveys: true,
      respect_dnt: true,
      loaded: (client) => {
        client.register({ site: ANALYTICS_SITE });
      },
    });

    posthog.register({ site: ANALYTICS_SITE });
    document.addEventListener("click", onDocumentClick, true);
    listening = true;
  } catch {
    // Missing or rejected analytics config must not break the page.
  }
}
