import { siteConfig } from "@/data/site-config";

// Converts "8 AM" or "5:30 PM" to the 24-hour "08:00" / "17:30" format schema.org expects.
function to24Hour(time: string) {
  const match = time.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i);
  if (!match) return null;

  const [, hourText, minutes = "00", period] = match;
  const hour = (Number(hourText) % 12) + (period.toUpperCase() === "PM" ? 12 : 0);
  return `${String(hour).padStart(2, "0")}:${minutes}`;
}

function openingHoursSpecification() {
  return siteConfig.businessHours.flatMap(({ day, hours }) => {
    const [opens, closes] = hours.split("-").map(to24Hour);
    if (!opens || !closes) return [];

    return [{ "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${day}`, opens, closes }];
  });
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/Logo.jpg`,
  image: `${siteConfig.url}/images/Logo.jpg`,
  telephone: siteConfig.phone.href.replace("tel:", ""),
  openingHoursSpecification: openingHoursSpecification(),
  areaServed: siteConfig.serviceAreas.map((area) => ({ "@type": "City", name: area })),
};

export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
