import { GEOGRAPHIC_REACH } from "@/lib/company-facts";
import type { LandingPageConfig } from "@/lib/landing-pages/types";

const sharedRelated = [
  { href: "/international-cryogenic-medical-logistics", label: "About ARK Global logistics" },
  { href: "/corridors", label: "Country corridors" },
  { href: "/blog", label: "Knowledge Centre" },
  { href: "/#contact", label: "Request a quotation" },
];

function service(partial: LandingPageConfig): LandingPageConfig {
  return { pageType: "service", ...partial };
}

export const SERVICE_LANDINGS: LandingPageConfig[] = [
  service({
    slug: "ivf-specimen-transportation",
    path: "/ivf-specimen-transportation",
    h1: "International IVF Specimen Transportation",
    subtitle: "Door-to-door cryogenic logistics for embryos, oocytes, sperm, and related reproductive specimens.",
    professionalLine: "Clinic-coordinated, hand-carried, temperature-monitored IVF specimen transport.",
    intro:
      "ARK Global specialises in moving cryopreserved IVF specimens between fertility clinics internationally. We coordinate with sending and receiving embryology teams, manage permits where required, and maintain the cold chain from collection through customs to delivery.",
    sections: [
      {
        heading: "Specimens we transport",
        body: "Our IVF specimen transportation service covers cryopreserved materials used in assisted reproduction and related programmes:",
        bullets: [
          "Vitrified and slow-frozen embryos",
          "Cryopreserved oocytes (eggs)",
          "Frozen sperm in straws or vials",
          "Selected stem-cell and biological specimens (case-by-case)",
        ],
      },
      {
        heading: "End-to-end process",
        body: "Each shipment follows a documented workflow designed for regulatory compliance and cold chain integrity:",
        bullets: [
          "Clinic verification, consent, and release documentation",
          "Dry shipper preparation and chain-of-custody logging",
          "Hand-carry on approved air routes with live temperature monitoring",
          "Import/export permits and customs clearance where applicable",
          "Direct delivery to the receiving laboratory with temperature records",
        ],
      },
      {
        heading: "Who this service is for",
        body: `Patients relocating internationally, fertility clinics referring samples abroad, and laboratories requiring ${GEOGRAPHIC_REACH.toLowerCase()} We work with both clinical teams and individuals once clinics have confirmed release and acceptance.`,
      },
    ],
    faqs: [
      {
        question: "Can IVF specimens be transported internationally?",
        answer:
          "Yes, when both clinics authorise release and receipt, documentation is complete, and transport follows IATA P650-aligned dry shipper protocols. Requirements vary by country.",
      },
      {
        question: "How long does international IVF specimen transport take?",
        answer:
          "Most corridors complete within 24–72 hours depending on routing, permits, and airline schedules. Dry shippers typically maintain safe hold times well beyond standard journey durations.",
      },
    ],
    ctaText: "Tell us your origin clinic, destination clinic, and specimen type — we will assess documentation and provide a structured quotation.",
    relatedLinks: [
      { href: "/ivf-transport", label: "IVF transport overview" },
      { href: "/frozen-embryo-transport", label: "Frozen embryo transport" },
      ...sharedRelated,
    ],
    meta: {
      title: "International IVF Specimen Transportation",
      description:
        "Clinic-to-clinic IVF specimen transportation with dry shippers, monitoring, permits, and customs support. Embryos, oocytes, and sperm.",
      keywords: ["IVF specimen transportation", "international IVF courier", "cryogenic fertility logistics"],
    },
  }),
  service({
    slug: "frozen-embryo-transport",
    path: "/frozen-embryo-transport",
    h1: "Frozen Embryo Transport",
    subtitle: "International transport of vitrified embryos with monitored LN₂ dry shippers and clinic handover.",
    intro:
      "Frozen embryo transport is one of the most sensitive cryogenic logistics tasks in fertility care. ARK Global hand-carries vitrified embryos in certified dry shippers, documents temperature throughout the journey, and coordinates directly with embryology teams at both ends.",
    sections: [
      {
        heading: "Why embryo transport requires specialists",
        body: "Embryos remain stable only while cryogenic temperature is maintained. Professional couriers use vapour-phase LN₂ shippers, avoid unqualified cargo handling, and plan routes to minimise risk.",
        bullets: [
          "Below −150°C maintenance in transit",
          "Real-time or logged temperature data for clinics",
          "Documented chain of custody",
        ],
      },
      {
        heading: "Documentation & compliance",
        body: "International embryo moves typically require clinic release letters, patient consent, and destination import approvals. Our operations team aligns paperwork with each corridor before travel.",
      },
    ],
    faqs: [
      {
        question: "Are vitrified embryos safe to fly internationally?",
        answer:
          "Yes, when transported in qualified dry shippers by trained couriers following IATA P650-aligned procedures and valid clinic/import documentation.",
      },
    ],
    ctaText: "Share your sending clinic, receiving clinic, and planned transfer date for an embryo transport assessment.",
    relatedLinks: [
      { href: "/embryo-shipping", label: "Embryo shipping service" },
      { href: "/corridors", label: "Embryo transport corridors" },
      ...sharedRelated,
    ],
    meta: {
      title: "Frozen Embryo Transport — International",
      description:
        "International frozen embryo transport with dry shippers, temperature monitoring, and clinic coordination. Vitrified embryo hand-carry specialists.",
      keywords: ["frozen embryo transport", "international embryo shipping", "vitrified embryo courier"],
    },
  }),
  service({
    slug: "frozen-sperm-transport",
    path: "/frozen-sperm-transport",
    h1: "Frozen Sperm Transport",
    subtitle: "Cross-border transport of cryopreserved sperm with regulatory coordination and cold chain control.",
    intro:
      "Whether for fertility treatment abroad, donor programmes, or personal relocation, frozen sperm must remain in continuous cryogenic storage during international transport. ARK Global provides hand-carried dry shipper logistics with clinic verification.",
    sections: [
      {
        heading: "Transport methods",
        body: "Sperm samples in straws or vials are secured in LN₂ vapour shippers designed for air transport of biological specimens, with secondary containment and clear labelling.",
      },
      {
        heading: "Regulatory considerations",
        body: "Some countries restrict import of reproductive tissues or require specific permits. We confirm destination rules with clinics before quoting.",
      },
    ],
    faqs: [
      {
        question: "Can frozen sperm be hand carried on an aircraft?",
        answer:
          "Yes, when packaged and documented under applicable air transport rules for biological specimens and carried by trained couriers — not as unchecked personal luggage without compliance.",
      },
    ],
    ctaText: "Contact us with sample type, quantity, and both clinic locations.",
    relatedLinks: [
      { href: "/ivf-specimen-transportation", label: "IVF specimen transportation" },
      ...sharedRelated,
    ],
    meta: {
      title: "Frozen Sperm Transport — International",
      description: "International frozen sperm transport with cryogenic dry shippers, permits, and clinic-to-clinic delivery.",
      keywords: ["frozen sperm transport", "sperm courier international", "cryogenic sperm shipping"],
    },
  }),
  service({
    slug: "frozen-oocyte-transport",
    path: "/frozen-oocyte-transport",
    h1: "Frozen Oocyte (Egg) Transport",
    subtitle: "International cryogenic transport for frozen eggs and oocytes between fertility clinics.",
    intro:
      "Egg freezing and cross-border IVF programmes increasingly require reliable oocyte transport. ARK Global moves cryopreserved oocytes with the same monitoring, documentation, and clinic coordination standards applied to embryo shipments.",
    sections: [
      {
        heading: "Clinical coordination",
        body: "We verify release from the sending lab and acceptance at the receiving clinic before scheduling collection, including storage device compatibility and transfer manifests.",
      },
      {
        heading: "Cold chain protection",
        body: "Oocytes travel in qualified dry shippers with temperature logging suitable for clinic review on arrival.",
      },
    ],
    faqs: [
      {
        question: "Can frozen eggs be transported internationally?",
        answer:
          "Yes, with proper clinic authorisation and compliance with destination import rules. Documentation requirements differ by country.",
      },
    ],
    ctaText: "Start an enquiry with clinic names, countries, and approximate number of oocytes.",
    relatedLinks: [{ href: "/ivf-specimen-transportation", label: "IVF specimen transportation" }, ...sharedRelated],
    meta: {
      title: "Frozen Oocyte Transport — International",
      description: "International transport of frozen oocytes and eggs between clinics with cryogenic monitoring and permits.",
      keywords: ["frozen oocyte transport", "egg shipping international", "cryopreserved oocyte courier"],
    },
  }),
  service({
    slug: "stem-cell-transportation",
    path: "/stem-cell-transportation",
    h1: "Stem Cell & Biological Specimen Transportation",
    subtitle: "Cryogenic relocation of approved stem-cell and biological specimens — assessed case by case.",
    intro:
      "Beyond standard IVF samples, ARK Global supports selected cryogenic biological specimen moves where regulations, clinic approval, and airline acceptance align. Each enquiry is reviewed for corridor feasibility and compliance.",
    sections: [
      {
        heading: "Scope",
        body: "We focus on cryopreserved human reproductive and related biological materials for licensed clinics and approved programmes — not ad-hoc unverified shipments.",
      },
      {
        heading: "Compliance first",
        body: "Stem-cell and advanced biological moves often involve additional import licences and carrier approvals. We confirm requirements before confirming transport.",
      },
    ],
    faqs: [
      {
        question: "Do you transport all stem-cell types?",
        answer:
          "We assess each request against destination regulations, clinic authorisation, and carrier rules. Contact operations with full clinical details.",
      },
    ],
    ctaText: "Provide specimen type, clinics, and countries for a compliance review.",
    relatedLinks: [{ href: "/cryogenic-medical-logistics", label: "Cryogenic medical logistics" }, ...sharedRelated],
    meta: {
      title: "Stem Cell Transportation — Cryogenic",
      description: "International cryogenic transportation for approved stem-cell and biological specimens with compliance review.",
      keywords: ["stem cell transport", "cryogenic biological specimen", "cell logistics international"],
    },
  }),
  service({
    slug: "cryogenic-medical-logistics",
    path: "/cryogenic-medical-logistics",
    h1: "Cryogenic Medical Logistics",
    subtitle: "End-to-end cold chain logistics for cryopreserved medical and reproductive specimens.",
    intro:
      "Cryogenic medical logistics combines specialised equipment, air transport rules, customs processes, and clinical coordination. ARK Global focuses on reproductive and related biological specimens requiring continuous LN₂ vapour-phase storage in transit.",
    sections: [
      {
        heading: "Core capabilities",
        body: "Our logistics stack is built for specimens that cannot tolerate temperature excursions:",
        bullets: [
          "Dry shipper supply and preparation",
          "Hand-carry and door-to-door routing",
          "Temperature monitoring and custody records",
          "Permit and customs documentation support",
        ],
      },
      {
        heading: "Operational base",
        body: "Headquartered in Malaysia with international satellite support, we plan corridors based on real operational experience — not generic freight templates.",
      },
    ],
    faqs: [
      {
        question: "How is cryogenic medical logistics different from standard courier services?",
        answer:
          "Standard couriers rarely hold IATA dangerous goods training, dry shipper equipment, or clinic-to-clinic IVF documentation experience. Cold chain integrity and regulatory alignment are the product — not just speed.",
      },
    ],
    ctaText: "Describe your specimen, route, and clinics for a logistics assessment.",
    relatedLinks: [
      { href: "/international-cryogenic-medical-logistics", label: "ARK Global authority profile" },
      { href: "/cryo-shipping", label: "Cryo shipping overview" },
      ...sharedRelated,
    ],
    meta: {
      title: "Cryogenic Medical Logistics",
      description: "Cryogenic medical logistics for reproductive specimens: dry shippers, monitoring, permits, customs, clinic coordination.",
      keywords: ["cryogenic medical logistics", "cold chain medical courier", "LN2 specimen transport"],
    },
  }),
  service({
    slug: "ivf-hand-carry",
    path: "/ivf-hand-carry",
    h1: "IVF Hand-Carry Courier Service",
    subtitle: "Dedicated couriers hand-carry dry shippers as cabin baggage on approved routes.",
    intro:
      "Hand-carry is the preferred method for many international IVF shipments because it avoids uncontrolled cargo holds and reduces handling risk. ARK Global couriers are trained for biological specimen transport and carry full documentation for airline and customs checks.",
    sections: [
      {
        heading: "Why hand-carry matters",
        body: "Cryogenic shippers are designed for safe vapour-phase transport, but mishandling or unplanned delays in generic cargo systems add risk. Hand-carry keeps custody with a trained courier.",
      },
      {
        heading: "Airline coordination",
        body: "We pre-clear routes where possible, align with airline dangerous goods desks, and carry P650-aligned packaging and paperwork.",
      },
    ],
    faqs: [
      {
        question: "Can patients hand-carry their own frozen embryos?",
        answer:
          "Some airlines may allow properly documented specimens, but clinics and regulators often require a professional courier. We recommend clinic-approved professional hand-carry for accountability and chain of custody.",
      },
    ],
    ctaText: "Ask about hand-carry availability on your origin–destination corridor.",
    relatedLinks: [{ href: "/ivf-transport", label: "IVF transport" }, ...sharedRelated],
    meta: {
      title: "IVF Hand-Carry Courier Service",
      description: "Professional IVF hand-carry couriers for dry shippers on international routes with documentation and monitoring.",
      keywords: ["IVF hand carry", "embryo hand carry courier", "dry shipper cabin baggage"],
    },
  }),
  service({
    slug: "international-ivf-specimen-relocation",
    path: "/international-ivf-specimen-relocation",
    h1: "International IVF Specimen Relocation",
    subtitle: "Relocate cryopreserved IVF materials when you move countries or change fertility clinics.",
    intro:
      "International relocation of IVF specimens is common when patients emigrate, pursue treatment abroad, or consolidate storage at a new clinic. ARK Global manages the logistics layer while clinics handle medical authorisation.",
    sections: [
      {
        heading: "Typical relocation scenarios",
        body: "We support patients and clinics when cryopreserved materials must move between countries or healthcare systems:",
        bullets: [
          "Emigration with existing frozen embryos or gametes",
          "Switching IVF clinics internationally",
          "Returning home country for treatment with stored samples abroad",
        ],
      },
      {
        heading: "What you will need",
        body: "Both clinics must confirm release and acceptance. Permits may be required depending on corridor. Our enquiry form collects verifiable clinic details before quoting.",
      },
    ],
    faqs: [
      {
        question: "How do I start an international IVF specimen relocation?",
        answer:
          "Confirm with both clinics that samples can be released and received, then contact ARK Global with clinic names, countries, specimen type, and timing. We guide documentation and transport planning.",
      },
    ],
    ctaText: "Begin a relocation enquiry — we verify clinics before confirming transport.",
    relatedLinks: [{ href: "/corridors", label: "Browse corridors" }, ...sharedRelated],
    meta: {
      title: "International IVF Specimen Relocation",
      description: "Relocate frozen embryos, sperm, or oocytes internationally with clinic verification, permits, and cryogenic couriers.",
      keywords: ["IVF relocation", "move frozen embryos abroad", "international fertility sample move"],
    },
  }),
  service({
    slug: "ivf-import-export-permits",
    path: "/ivf-import-export-permits",
    h1: "IVF Import & Export Permits",
    subtitle: "Guidance and coordination for permits and documentation on international IVF shipments.",
    intro:
      "Import and export rules for reproductive tissues vary widely. ARK Global coordinates with clinics and, where applicable, regulatory pathways so paperwork aligns before the courier travels — reducing delays and rejection at borders.",
    sections: [
      {
        heading: "What we coordinate",
        body: "Depending on the corridor, shipments may require:",
        bullets: [
          "Clinic release and acceptance letters",
          "Patient consent and identity documentation",
          "National biosecurity or tissue import permits",
          "Customs declarations and airway bill data",
        ],
      },
      {
        heading: "Clinic-led medical authorisation",
        body: "Permits sit alongside clinical decisions. We do not substitute for clinic ethics or medical approval — we ensure logistics matches documented authorisation.",
      },
    ],
    faqs: [
      {
        question: "Do I need an import permit for frozen embryos?",
        answer:
          "Many countries require import approval for human reproductive tissues. Requirements depend on destination. We confirm with operations based on your receiving country.",
      },
    ],
    ctaText: "Share origin and destination countries early so we can flag permit requirements.",
    relatedLinks: [{ href: "/ivf-customs-clearance", label: "IVF customs clearance" }, ...sharedRelated],
    meta: {
      title: "IVF Import & Export Permits",
      description: "Support for IVF sample import/export permits and documentation on international cryogenic shipments.",
      keywords: ["IVF import permit", "embryo export documentation", "fertility sample permits"],
    },
  }),
  service({
    slug: "ivf-customs-clearance",
    path: "/ivf-customs-clearance",
    h1: "IVF Customs Clearance Support",
    subtitle: "Customs and border documentation aligned with cryogenic IVF courier movements.",
    intro:
      "Cryogenic IVF couriers cross international borders with biological specimens that customs officials may scrutinise. ARK Global prepares shipment documentation and works within each corridor’s customs expectations to avoid preventable delays.",
    sections: [
      {
        heading: "Documentation package",
        body: "Typical packages include clinic letters, permits where required, courier credentials, dry shipper specifications, and declared non-infectious biological substance classifications under applicable air transport rules.",
      },
      {
        heading: "Corridor experience",
        body: "Clearance steps differ between, for example, Australia, the UK, the US, UAE, and Southeast Asian hubs. We apply corridor-specific checklists learned from operational moves.",
      },
    ],
    faqs: [
      {
        question: "Does the courier handle customs clearance?",
        answer:
          "Our operations team prepares documentation and supports the courier through clearance processes. Ultimate approval rests with border authorities and valid permits.",
      },
    ],
    ctaText: "Tell us your corridor — we will outline customs documentation expectations.",
    relatedLinks: [{ href: "/ivf-import-export-permits", label: "Import & export permits" }, ...sharedRelated],
    meta: {
      title: "IVF Customs Clearance Support",
      description: "Customs clearance support for international IVF and cryogenic specimen couriers.",
      keywords: ["IVF customs clearance", "embryo import customs", "cryogenic courier customs"],
    },
  }),
];
