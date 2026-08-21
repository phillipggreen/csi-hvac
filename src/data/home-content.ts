export type ServiceCardData = {
  title: string;
  description: string;
  ctaLabel: string;
  icon: "installation" | "repair" | "maintenance";
};

export type Testimonial = { name: string; review: string };
export type FaqItem = { question: string; answer: string | null };

export const homeContent = {
  intro: {
    eyebrow: "Comfort Specialist Heating & Cooling",
    heading: "Your Trusted HVAC Company in Richmond, KY",
    body: "Welcome to Comfort Specialist, your locally trusted HVAC company in Richmond, KY for all things heating, ventilation, and air conditioning. For over 20 years, we’ve proudly served as a locally owned and operated business that understands the unique comfort needs of our neighbors. Whether you’re looking to install a new system, repair an existing one, or maintain your HVAC equipment, we’re here to deliver dependable solutions you can count on. Our friendly and professional team is dedicated to helping you achieve year-round comfort in both residential and commercial spaces.",
  },
  overview: {
    heading: "Expert HVAC Services in Richmond, KY",
    body: "At Comfort Specialist, we offer a comprehensive range of HVAC services designed to meet the diverse needs of homeowners and businesses in Richmond, KY. From quick repairs to full system replacements, our goal is to make your indoor environment as comfortable, efficient, and healthy as possible. We understand how critical your HVAC system is to your daily life, and we bring decades of experience to every job we handle. Our services include:",
    services: [
      "HVAC Installation and Replacement",
      "HVAC Repair and Troubleshooting",
      "HVAC Maintenance and Cleaning",
      "HVAC Inspection",
      "HVAC Ductwork and Ventilation",
      "Thermostat Setup and System Zoning",
      "HVAC Refrigerant Recharge",
      "Filter Changes",
    ],
  },
  services: [
    {
      title: "HVAC Installation",
      description: "When it’s time for a new heating or cooling system, our HVAC company can help you select the right HVAC system for your space and install it with precision. We handle installations for residential homes and commercial properties. By properly sizing your system and ensuring correct setup, we help you maximize energy efficiency, lower utility costs, and enjoy long-lasting comfort.",
      ctaLabel: "Get an Estimate",
      icon: "installation",
    },
    {
      title: "HVAC Repair",
      description: "When your system stops working as it should, Comfort Specialist is here to get it back up and running quickly. Our experienced technicians diagnose problems accurately and provide effective solutions for issues such as uneven cooling, strange noises, poor airflow, refrigerant leaks, or complete system breakdowns. We offer fast response times in Richmond, KY, so you don’t have to go long without heating or cooling.",
      ctaLabel: "Fix Your AC",
      icon: "repair",
    },
    {
      title: "HVAC Maintenance",
      description: "Preventive maintenance is one of the best ways to avoid costly repairs and extend the lifespan of your HVAC system. Our maintenance services include cleaning, inspections, filter changes, refrigerant checks, and energy audits. With regular maintenance, you’ll enjoy better efficiency, improved indoor air quality, and fewer unexpected breakdowns.",
      ctaLabel: "Book Slot",
      icon: "maintenance",
    },
  ] satisfies ServiceCardData[],
  whyChoose: {
    heading: "Why Choose Comfort Specialist?",
    body: "Choosing the right HVAC company in Richmond can make all the difference in your comfort, efficiency, and long-term savings. At Comfort Specialist, we take pride in offering top-quality service backed by our decades of experience.",
    reasons: [
      { title: "Over 20 Years of Experience", text: "Serving Richmond and surrounding areas since day one." },
      { title: "Locally Owned & Operated", text: "We’re part of the community and care deeply about our neighbors." },
      { title: "Residential & Commercial Expertise", text: "We have the tools and training to handle a wide variety of jobs." },
      { title: "Professional & Friendly Service", text: "We explain your options clearly and never push unnecessary services." },
      { title: "Trusted Reputation", text: "Our goal is to earn your trust by delivering reliable, transparent, and honest solutions." },
    ],
  },
  testimonials: [
    { name: "Matt T.", review: "Amazing quality of craftsmanship, great customer service, affordable pricing, 5* A+ rating! My customer love Mark & Steven! Thanks." },
    { name: "Scott C.", review: "Mark is great to work with. He’s fixed our A/C unit on a moments notice in this heat and got us going fast. He’s someone I trust a great deal for his knowledge and suggestions. Very high integrity and easy to deal with. Highly recommend CSI." },
    { name: "Sherri W.", review: "I am so grateful for this company. They came out and quickly fixed my HVAC system and did a great job. I will definitely call them in the future. I highly recommend them." },
  ] satisfies Testimonial[],
  faqs: [
    { question: "Do you offer emergency HVAC repair in Richmond, KY?", answer: null },
    { question: "How often should I schedule HVAC maintenance?", answer: null },
    { question: "Can you handle both residential and commercial HVAC installations?", answer: null },
    { question: "How do I know if I need an HVAC replacement?", answer: null },
  ] satisfies FaqItem[],
  bottomCta: {
    heading: "Experience Comfort Like Never Before",
    paragraphs: [
      "At Comfort Specialist, we believe that your comfort should never be compromised. For over two decades, we’ve helped families and businesses across Richmond, KY, create healthier, more energy-efficient, and more comfortable living and working environments. Whether you need HVAC repair, installation, maintenance, an energy audit, or restaurant equipment repair, our expert team is here to provide dependable service and lasting solutions.",
      "Call us today to schedule your service or request a free consultation. Our goal is to be your trusted HVAC company in Richmond, KY for all things heating and cooling. Let us help you stay comfortable every season of the year.",
    ],
  },
};
