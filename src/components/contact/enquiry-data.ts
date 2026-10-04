export type SpecimenKey = "embryos" | "oocytes" | "sperm" | "other";

export type EnquiryFormData = {
  fullName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  specimens: Record<SpecimenKey, boolean>;
  specimenOtherDescription: string;
  approximateQuantity: string;
  originatingClinicName: string;
  originatingCityCountry: string;
  originatingReleaseConfirmed: string;
  receivingClinicName: string;
  receivingCityCountry: string;
  receivingCoordinatorName: string;
  preferredTiming: string;
  transferUrgency: string;
  approvalsStatus: string;
  receivingConfirmation: string;
  originatingReleaseConfirmation: string;
  coordinatorContact: string;
  importExportPermit: string;
  antiScamConfirmed: boolean;
};

export type EnquiryErrors = Partial<
  Record<keyof EnquiryFormData | "specimens" | "verification", string>
>;

export const ENQUIRY_STEP_COUNT = 7;

export const ENQUIRY_STEPS: { title: string; hint: string }[] = [
  {
    title: "Patient & contact details",
    hint: "How we can reach you about this shipment.",
  },
  {
    title: "Specimen type",
    hint: "Select all that apply and enter the approximate quantity.",
  },
  {
    title: "Current storage (origin)",
    hint: "Where the specimens are stored today.",
  },
  {
    title: "Transfer destination",
    hint: "The receiving fertility clinic or laboratory.",
  },
  {
    title: "Planned transfer",
    hint: "When you hope to move the specimens.",
  },
  {
    title: "Clinic verification",
    hint: "Provide at least one verifiable clinic detail.",
  },
  {
    title: "Confirm & submit",
    hint: "Review the declaration and send your enquiry.",
  },
];

export const initialEnquiryFormData: EnquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  countryOfResidence: "",
  specimens: {
    embryos: false,
    oocytes: false,
    sperm: false,
    other: false,
  },
  specimenOtherDescription: "",
  approximateQuantity: "",
  originatingClinicName: "",
  originatingCityCountry: "",
  originatingReleaseConfirmed: "",
  receivingClinicName: "",
  receivingCityCountry: "",
  receivingCoordinatorName: "",
  preferredTiming: "",
  transferUrgency: "",
  approvalsStatus: "",
  receivingConfirmation: "",
  originatingReleaseConfirmation: "",
  coordinatorContact: "",
  importExportPermit: "",
  antiScamConfirmed: false,
};

export function selectedSpecimenLabels(data: EnquiryFormData): string[] {
  const labels: { key: SpecimenKey; label: string }[] = [
    { key: "embryos", label: "Cryopreserved Embryos" },
    { key: "oocytes", label: "Cryopreserved Oocytes (Eggs)" },
    { key: "sperm", label: "Cryopreserved Sperm" },
    { key: "other", label: "Other human reproductive specimens" },
  ];
  return labels.filter(({ key }) => data.specimens[key]).map(({ label }) => label);
}

export function buildEnquiryMessage(data: EnquiryFormData): string {
  const specimens = selectedSpecimenLabels(data);
  const verificationProvided: string[] = [];
  if (data.receivingConfirmation.trim())
    verificationProvided.push("Receiving clinic appointment/acceptance confirmation");
  if (data.originatingReleaseConfirmation.trim())
    verificationProvided.push("Originating clinic release confirmation");
  if (data.coordinatorContact.trim())
    verificationProvided.push("Clinic coordinator/doctor contact details");
  if (data.importExportPermit.trim())
    verificationProvided.push("Import/export permit or approval");

  return [
    "ARK Global – International Cryogenic Transportation Enquiry",
    "",
    "1. PATIENT & CONTACT DETAILS",
    `Full name: ${data.fullName}`,
    `Email: ${data.email}`,
    `WhatsApp/mobile: ${data.phone}`,
    `Country of residence: ${data.countryOfResidence}`,
    "",
    "2. SPECIMEN TYPE",
    `Specimen(s): ${specimens.length ? specimens.join("; ") : "—"}`,
    data.specimens.other && data.specimenOtherDescription.trim()
      ? `Other details: ${data.specimenOtherDescription.trim()}`
      : null,
    `Approximate quantity: ${data.approximateQuantity}`,
    "",
    "3. CURRENT STORAGE (ORIGIN)",
    `Clinic/laboratory: ${data.originatingClinicName}`,
    `City & country: ${data.originatingCityCountry}`,
    `Release confirmed by clinic: ${data.originatingReleaseConfirmed}`,
    "",
    "4. TRANSFER DESTINATION",
    `Receiving clinic/laboratory: ${data.receivingClinicName}`,
    `City & country: ${data.receivingCityCountry}`,
    `Doctor/clinic coordinator: ${data.receivingCoordinatorName.trim() || "Not provided"}`,
    "",
    "5. PLANNED TRANSFER",
    `Preferred timing: ${data.preferredTiming}`,
    `Urgent or planned: ${data.transferUrgency}`,
    `Release/import/export approvals: ${data.approvalsStatus.trim() || "Not specified"}`,
    "",
    "6. CLINIC VERIFICATION & SUPPORTING INFORMATION",
    `Information provided: ${verificationProvided.length ? verificationProvided.join("; ") : "—"}`,
    data.receivingConfirmation.trim()
      ? `\nReceiving confirmation:\n${data.receivingConfirmation.trim()}`
      : null,
    data.originatingReleaseConfirmation.trim()
      ? `\nOriginating release confirmation:\n${data.originatingReleaseConfirmation.trim()}`
      : null,
    data.coordinatorContact.trim()
      ? `\nCoordinator/doctor contact:\n${data.coordinatorContact.trim()}`
      : null,
    data.importExportPermit.trim()
      ? `\nPermit/approval details:\n${data.importExportPermit.trim()}`
      : null,
    "",
    "ANTI-SCAM DECLARATION",
    "Confirmed: Yes — information is accurate and relates to a genuine medical/IVF transportation requirement.",
  ]
    .filter((line) => line !== null)
    .join("\n");
}
