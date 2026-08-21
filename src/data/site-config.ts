export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string | null;
  referenceUrl: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  businessHours: string[];
  navigation: NavigationItem[];
  socialLinks: NavigationItem[];
  serviceAreas: string[];
};

export const siteConfig: SiteConfig = {
  name: "Comfort Specialist Heating & Cooling",
  shortName: "Comfort Specialist",
  description: null,
  referenceUrl: "https://comfortspecialistheatingandcooling.com/",
  phone: null,
  email: null,
  address: null,
  businessHours: [],
  navigation: [{ label: "Home", href: "/" }],
  socialLinks: [],
  serviceAreas: [],
};
