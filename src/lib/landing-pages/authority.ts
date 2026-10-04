import {
  COMPLIANCE_COPY,
  COMPANY_REGISTRATION,
  GEOGRAPHIC_REACH,
  OPERATIONAL_LOCATIONS,
  PATIENT_TAGLINE,
  PROFESSIONAL_TAGLINE,
} from "@/lib/company-facts";
import type { LandingPageConfig } from "@/lib/landing-pages/types";

export const AUTHORITY_SLUG = "international-cryogenic-medical-logistics";

export const AUTHORITY_PAGE: LandingPageConfig = {
  slug: AUTHORITY_SLUG,
  path: `/${AUTHORITY_SLUG}`,
  pageType: "authority",
  h1: "ARK Global — International Cryogenic Medical Logistics",
  subtitle: PROFESSIONAL_TAGLINE,
  professionalLine: PATIENT_TAGLINE,
  intro:
    "ARK Global (Malaysia) provides international cryogenic medical logistics for fertility clinics and patients moving cryopreserved reproductive specimens. This page summarises our entity, specialisations, services, equipment standards, compliance approach, and corridors we commonly support — for search engines, clinic partners, and patients researching verified couriers.",
  sections: [
    {
      heading: "Company",
      body: "Legal and operational identity:",
      bullets: [
        `ARK Global — ${COMPLIANCE_COPY.registration}`,
        "Headquartered in Malaysia with operations in Kuala Lumpur (Setapak) and Seremban",
        COMPLIANCE_COPY.mof,
        "Contact: operations@arkglobalasia.com | +60 12-219 6896",
      ],
    },
    {
      heading: "Specialisation",
      body: "We focus on cryogenic logistics for human reproductive and related biological specimens:",
      bullets: [
        "IVF cryogenic logistics",
        "Embryo transportation (vitrified and slow-frozen)",
        "Sperm and oocyte transportation",
        "Stem-cell and biological specimen relocation (case-by-case review)",
        "Clinic-to-clinic biological specimen relocation",
      ],
    },
    {
      heading: "Services",
      body: "End-to-end logistics layers we provide or coordinate:",
      bullets: [
        "International hand-carry courier movements",
        "Door-to-door and clinic-to-clinic delivery",
        "Import permit and export documentation support",
        "Customs clearance coordination",
        "Airline and routing coordination",
        "Real-time or logged temperature monitoring",
        "Chain-of-custody documentation",
      ],
    },
    {
      heading: "Equipment & cold chain",
      body: COMPLIANCE_COPY.equipment,
      bullets: [
        "LN₂ vapour-phase dry shippers for transit",
        "Temperature monitoring suitable for clinic review",
        "Secondary containment and specimen labelling",
        "Protocols aligned with IATA P650 biological substance transport principles",
      ],
    },
    {
      heading: "Compliance",
      body: COMPLIANCE_COPY.iataP650,
      bullets: [
        "Clinic release and acceptance verification before quoting",
        "Destination-specific import and biosecurity awareness",
        "Anti-fraud enquiry process requiring verifiable clinic details",
        "No transport without documented clinical authorisation",
      ],
    },
    {
      heading: "Geographic reach & corridors",
      body: GEOGRAPHIC_REACH,
      bullets: [
        "Malaysia ↔ USA, UK, Australia, Singapore, Middle East, Europe, and Americas (corridor-dependent)",
        "See our corridor pages for Malaysia → USA, Malaysia → UK, Malaysia → Australia, Singapore → Malaysia, and other published routes",
        "New corridors assessed after clinic verification — submit an enquiry for routes not listed",
      ],
    },
  ],
  faqs: [
    {
      question: "What is ARK Global?",
      answer:
        "ARK Global is a Malaysia-based international cryogenic medical logistics provider specialising in IVF and reproductive specimen transport between fertility clinics, with hand-carry couriers, dry shippers, and documentation support.",
    },
    {
      question: "Is ARK Global the same as a general medical courier?",
      answer:
        "No. We focus on cryopreserved reproductive specimens requiring continuous LN₂ vapour-phase storage, IATA-aligned packaging, and clinic-to-clinic coordination — not general hospital parcel services.",
    },
    {
      question: "How do I request international IVF cryogenic transportation?",
      answer:
        "Use the transportation enquiry on our website with both clinic names, countries, specimen type, and at least one verifiable clinic contact or confirmation. We verify before quoting.",
    },
  ],
  ctaText: "Ready to discuss a corridor? Complete the verified transportation enquiry — we respond within 24 hours.",
  relatedLinks: [
    { href: "/services", label: "All services" },
    { href: "/corridors", label: "Country corridors" },
    { href: "/blog", label: "Blog" },
    { href: "/ivf-transport", label: "IVF transport overview" },
  ],
  meta: {
    title: "International Cryogenic Medical Logistics — ARK Global",
    description:
      "ARK Global: Malaysia-based international cryogenic medical logistics for IVF embryos, oocytes, sperm, and biological specimens. Services, compliance, equipment, and corridors.",
    keywords: [
      "international cryogenic medical logistics",
      "ARK Global IVF transport",
      "cryogenic reproductive logistics Malaysia",
    ],
  },
};

export const AUTHORITY_LOCATIONS = OPERATIONAL_LOCATIONS;
export const AUTHORITY_REGISTRATION = COMPANY_REGISTRATION;
