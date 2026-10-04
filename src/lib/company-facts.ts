/** Single source of truth for publishable company metrics and compliance copy. */

export const COMPANY_REGISTRATION = "CT0123202-W";

export const OPERATIONAL_LOCATIONS = [
  {
    name: "Kuala Lumpur (Setapak)",
    role: "Main operations hub",
    country: "Malaysia",
  },
  {
    name: "Seremban",
    role: "International satellite operations",
    country: "Malaysia",
  },
] as const;

/** Published track-record figures shown on the homepage. Update when verified. */
export const TRACK_RECORD = {
  successfulDeliveries: 900,
  countriesServed: 17,
  yearsExperience: 3,
} as const;

export const GEOGRAPHIC_REACH =
  "International clinic-to-clinic routes across Asia-Pacific, the Middle East, Europe, the Americas, and selected corridors worldwide.";

export const COMPLIANCE_COPY = {
  iataP650:
    "Shipments are planned and executed in line with IATA Packing Instruction P650 for air transport of biological substances, using trained couriers and certified dry shippers.",
  equipment:
    "Cryogenic transport uses LN₂ vapour-phase dry shippers (including MVE-class dewars where required), with temperature monitoring and documented chain of custody.",
  mof: "MOF-registered supplier (Malaysia).",
  registration: `Company registration: ${COMPANY_REGISTRATION}.`,
} as const;

export const PROFESSIONAL_TAGLINE =
  "International cryogenic medical logistics for reproductive and biological specimens.";

export const PATIENT_TAGLINE = "Safely carrying hope across borders.";
