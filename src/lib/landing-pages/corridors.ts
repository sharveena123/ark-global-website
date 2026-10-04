import type { LandingPageConfig } from "@/lib/landing-pages/types";

function corridor(partial: LandingPageConfig): LandingPageConfig {
  return { pageType: "corridor", ...partial };
}

export const CORRIDOR_LANDINGS: LandingPageConfig[] = [
  corridor({
    slug: "malaysia-to-usa-frozen-embryo-transport",
    path: "/malaysia-to-usa-frozen-embryo-transport",
    h1: "Frozen Embryo Transportation from Malaysia to USA",
    subtitle: "Clinic-to-clinic cryogenic transport for vitrified embryos on Malaysia → United States routes.",
    intro:
      "Patients and clinics moving frozen embryos from Malaysia to the United States must align US import requirements, clinic release documentation, and IATA-aligned dry shipper transport. ARK Global plans hand-carry routes and documentation with both embryology teams before travel.",
    sections: [
      {
        heading: "Planning a Malaysia → USA embryo move",
        body: "Successful moves typically require:",
        bullets: [
          "Sending Malaysian clinic release and storage details",
          "Receiving US clinic acceptance and import coordination",
          "Cryogenic hand-carry with temperature logging",
          "Customs and airline documentation for biological specimens",
        ],
      },
      {
        heading: "Timeline",
        body: "Allow time for clinic paperwork and any US-side import steps before booking flights. Most transport legs complete within a few days once documentation is ready.",
      },
    ],
    faqs: [
      {
        question: "Can embryos be transported from Malaysia to the USA?",
        answer:
          "Yes, when both clinics authorise the transfer and US import/documentation requirements are met. Each case is verified before quoting.",
      },
    ],
    ctaText: "Start a Malaysia → USA enquiry with both clinic names and planned dates.",
    relatedLinks: [
      { href: "/frozen-embryo-transport", label: "Frozen embryo transport" },
      { href: "/ivf-import-export-permits", label: "Import & export permits" },
      { href: "/corridors", label: "All corridors" },
    ],
    meta: {
      title: "Malaysia to USA Frozen Embryo Transport",
      description: "Frozen embryo transportation from Malaysia to the USA with cryogenic couriers, clinics, and import documentation.",
      keywords: ["Malaysia to USA embryo transport", "ship embryos Malaysia USA", "IVF courier Malaysia America"],
    },
  }),
  corridor({
    slug: "malaysia-to-uk-frozen-embryo-transport",
    path: "/malaysia-to-uk-frozen-embryo-transport",
    h1: "Frozen Embryo Transportation from Malaysia to UK",
    subtitle: "International embryo logistics for Malaysia → United Kingdom fertility clinics.",
    intro:
      "UK-bound embryo shipments from Malaysia require aligned clinic consent, HFEA-aware clinic coordination on the UK side, and compliant cryogenic air transport. ARK Global supports the logistics and documentation layer between verified clinics.",
    sections: [
      {
        heading: "Clinic coordination",
        body: "We work with the sending lab in Malaysia and the receiving UK clinic to confirm storage devices, sample identifiers, and release windows before collection.",
      },
    ],
    faqs: [
      {
        question: "How long does Malaysia to UK embryo transport take?",
        answer: "Often 24–72 hours of travel time once documentation is complete, depending on routing and customs.",
      },
    ],
    ctaText: "Request a Malaysia → UK corridor assessment.",
    relatedLinks: [{ href: "/corridors", label: "All corridors" }, { href: "/frozen-embryo-transport", label: "Embryo transport" }],
    meta: {
      title: "Malaysia to UK Frozen Embryo Transport",
      description: "Transport frozen embryos from Malaysia to the UK with ARK Global cryogenic couriers and clinic verification.",
      keywords: ["Malaysia UK embryo transport", "IVF shipping Malaysia to Britain"],
    },
  }),
  corridor({
    slug: "malaysia-to-australia-ivf-transport",
    path: "/malaysia-to-australia-ivf-transport",
    h1: "IVF Specimen Transportation from Malaysia to Australia",
    subtitle: "Embryo, oocyte, and sperm transport with Australian biosecurity and import awareness.",
    intro:
      "Australia applies strict biosecurity rules to imported biological materials. Malaysia → Australia IVF moves require early planning with the receiving clinic and valid import pathways alongside cryogenic hand-carry transport.",
    sections: [
      {
        heading: "Australian import awareness",
        body: "We coordinate timing with clinics so permits and quarantine-related requirements are addressed before the courier departs Malaysia.",
      },
    ],
    faqs: [
      {
        question: "Can embryos be transported from Malaysia to Australia?",
        answer: "Yes, when Australian import requirements and both clinics’ authorisations are satisfied. Lead time for permits is important.",
      },
    ],
    ctaText: "Contact us early for Malaysia → Australia moves — permits may require advance planning.",
    relatedLinks: [
      { href: "/blog/shipping-embryos-malaysia-to-australia", label: "Malaysia–Australia guide" },
      { href: "/corridors", label: "All corridors" },
    ],
    meta: {
      title: "Malaysia to Australia IVF Transport",
      description: "IVF specimen transportation from Malaysia to Australia with import coordination and cryogenic couriers.",
      keywords: ["Malaysia Australia IVF transport", "embryo shipping to Australia"],
    },
  }),
  corridor({
    slug: "singapore-to-malaysia-frozen-embryo-transport",
    path: "/singapore-to-malaysia-frozen-embryo-transport",
    h1: "Frozen Embryo Transportation from Singapore to Malaysia",
    subtitle: "Cross-border embryo transport between Singapore and Malaysian fertility clinics.",
    intro:
      "Regional moves between Singapore and Malaysia still require formal clinic release, acceptance, and cryogenic custody — even over short distances. ARK Global provides hand-carried dry shipper transport with documented temperature records.",
    sections: [
      {
        heading: "Regional corridor expertise",
        body: "Short-haul routes can underestimate documentation needs. We treat Singapore ↔ Malaysia embryo moves with the same chain-of-custody standards as long-haul international shipments.",
      },
    ],
    faqs: [
      {
        question: "Is Singapore to Malaysia embryo transport considered international?",
        answer: "Yes — separate jurisdictions and clinic protocols apply. Documentation and clinic authorisation are still required.",
      },
    ],
    ctaText: "Enquire about Singapore → Malaysia embryo collection and delivery windows.",
    relatedLinks: [{ href: "/corridors", label: "All corridors" }],
    meta: {
      title: "Singapore to Malaysia Frozen Embryo Transport",
      description: "Frozen embryo transport Singapore to Malaysia with cryogenic couriers and clinic coordination.",
      keywords: ["Singapore Malaysia embryo transport", "IVF courier Singapore Malaysia"],
    },
  }),
  corridor({
    slug: "turkey-to-tajikistan-ivf-relocation",
    path: "/turkey-to-tajikistan-ivf-relocation",
    h1: "International IVF Specimen Relocation — Turkey to Tajikistan",
    subtitle: "Cryogenic relocation of IVF specimens on Turkey → Tajikistan routes.",
    intro:
      "Cross-regional IVF relocations require verified clinics in both countries, clear release documentation, and routing plans that respect airline and border requirements. ARK Global assesses Turkey → Tajikistan moves case by case with clinic verification.",
    sections: [
      {
        heading: "Feasibility review",
        body: "We confirm clinic identities, specimen types, and regulatory constraints before quoting — protecting patients from non-viable logistics plans.",
      },
    ],
    faqs: [
      {
        question: "Do you operate Turkey to Tajikistan corridors?",
        answer: "We evaluate each request based on clinic verification, airline acceptance, and documentation. Submit an enquiry with both clinic details.",
      },
    ],
    ctaText: "Provide both clinic names and coordinator contacts for corridor review.",
    relatedLinks: [{ href: "/international-ivf-specimen-relocation", label: "IVF relocation service" }],
    meta: {
      title: "Turkey to Tajikistan IVF Relocation",
      description: "IVF specimen relocation Turkey to Tajikistan with cryogenic logistics and clinic verification.",
      keywords: ["Turkey Tajikistan IVF transport", "embryo relocation Central Asia"],
    },
  }),
  corridor({
    slug: "malaysia-to-georgia-sperm-transport",
    path: "/malaysia-to-georgia-sperm-transport",
    h1: "Cryopreserved Sperm Transportation — Malaysia to Georgia",
    subtitle: "International frozen sperm transport with clinic verification on Malaysia → Georgia routes.",
    intro:
      "Frozen sperm shipments from Malaysia to Georgia (country) require clinic release, receiving lab acceptance, and compliant LN₂ dry shipper transport. ARK Global coordinates logistics once clinics confirm authorisation.",
    sections: [
      {
        heading: "Documentation",
        body: "Sperm transport packages include clinic letters, sample identification, and air transport documentation aligned with biological specimen rules.",
      },
    ],
    faqs: [
      {
        question: "Can sperm be shipped from Malaysia to Georgia?",
        answer: "When clinics authorise the move and corridor compliance is confirmed, professional cryogenic couriers can transport frozen sperm internationally.",
      },
    ],
    ctaText: "Submit clinic details for Malaysia → Georgia sperm transport assessment.",
    relatedLinks: [{ href: "/frozen-sperm-transport", label: "Frozen sperm transport" }],
    meta: {
      title: "Malaysia to Georgia Sperm Transport",
      description: "Cryopreserved sperm transportation from Malaysia to Georgia with ARK Global couriers.",
      keywords: ["Malaysia Georgia sperm transport", "frozen sperm international courier"],
    },
  }),
];

export const CORRIDOR_HUB_INTRO =
  "These pages document corridors where ARK Global supports clinic-verified cryogenic transport. Each route has distinct documentation and timing — contact us to confirm feasibility for your clinics.";
