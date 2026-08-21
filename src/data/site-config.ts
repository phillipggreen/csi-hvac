export type NavigationItem = {
  label: string;
  href: string | null;
  hasDropdown?: boolean;
};

export type BusinessHour = {
  day: string;
  hours: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  referenceUrl: string;
  phone: { display: string; href: string };
  email: null;
  address: null;
  businessHours: BusinessHour[];
  navigation: NavigationItem[];
  socialLinks: NavigationItem[];
  serviceAreas: string[];
};

export const siteConfig: SiteConfig = {
  name: "Comfort Specialist Heating & Cooling",
  shortName: "Comfort Specialist",
  description:
    "HVAC and restaurant equipment services from Comfort Specialist Heating & Cooling in Richmond, Kentucky.",
  referenceUrl: "https://comfortspecialistheatingandcooling.com/",
  phone: { display: "(859) 661-1965", href: "tel:+18596611965" },
  email: null,
  address: null,
  businessHours: [
    { day: "Monday", hours: "8 AM - 5 PM" },
    { day: "Tuesday", hours: "8 AM - 5 PM" },
    { day: "Wednesday", hours: "8 AM - 5 PM" },
    { day: "Thursday", hours: "8 AM - 5 PM" },
    { day: "Friday", hours: "8 AM - 5 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "HVAC Services", href: "/hvac-services" },
    { label: "Restaurant Equipment Services", href: "/restaurant-equipment-services" },
    { label: "Service Areas", href: "/service-areas/lexington-ky", hasDropdown: true },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [],
  serviceAreas: [
    "Richmond, KY",
    "Berea, KY",
    "Lexington, KY",
    "Nicholasville, KY",
    "Winchester, KY",
    "Lancaster, KY",
    "Irvine, KY",
    "Mount Vernon, KY",
    "Danville, KY",
    "Paris, KY",
    "Harrodsburg, KY",
  ],
};
