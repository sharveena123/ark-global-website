// /**
//  * Editorial roadmap for the ARK Global Knowledge Centre.
//  * Published articles live in blog-data; this list drives the hub UI and content planning.
//  */

// export type KnowledgeTopic = {
//   title: string;
//   slug?: string;
//   priority: "P1" | "P2" | "P3";
//   category: "Transport" | "Regulation" | "Equipment" | "Corridors" | "Patients" | "Clinics";
// };

// export const KNOWLEDGE_CENTRE_INTRO =
//   "Expert guides on international IVF cryogenic transportation — written from operational experience, not generic AI filler.";

// /** P1 = publish first; slug set when live in blog-data */
// export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
//   { title: "Can I transport frozen embryos internationally?", priority: "P1", category: "Patients", slug: "can-frozen-embryos-be-transported-safely" },
//   { title: "How are frozen embryos transported by air?", priority: "P1", category: "Transport", slug: "how-are-ivf-embryos-transported-internationally" },
//   { title: "What is an LN2 dry shipper?", priority: "P1", category: "Equipment", slug: "what-is-a-cryogenic-dry-shipper" },
//   { title: "What is IATA P650 certification for embryo shipping?", priority: "P1", category: "Regulation", slug: "iata-p650-certification-embryo-shipping" },
//   { title: "Can frozen sperm be hand carried on an aircraft?", priority: "P1", category: "Transport" },
//   { title: "Can frozen eggs be transported internationally?", priority: "P1", category: "Patients" },
//   { title: "How long can embryos remain in a dry shipper?", priority: "P1", category: "Equipment" },
//   { title: "What documents are required to transport frozen embryos?", priority: "P1", category: "Regulation", slug: "international-regulations-ivf-shipping" },
//   { title: "Do I need an import permit for frozen embryos?", priority: "P1", category: "Regulation" },
//   { title: "Can embryos be transported from Malaysia to the USA?", priority: "P1", category: "Corridors" },
//   { title: "Can embryos be transported from Malaysia to Australia?", priority: "P1", category: "Corridors", slug: "shipping-embryos-malaysia-to-australia" },
//   { title: "How much does international embryo transportation cost?", priority: "P2", category: "Patients" },
//   { title: "What is the safest way to transport IVF samples?", priority: "P1", category: "Transport", slug: "why-temperature-control-matters-embryo-shipping" },
//   { title: "Can a patient hand-carry frozen embryos?", priority: "P1", category: "Patients" },
//   { title: "IVF courier vs normal medical courier — what's the difference?", priority: "P1", category: "Clinics", slug: "choosing-the-right-ivf-courier" },
//   { title: "IVF sample transportation process explained", priority: "P1", category: "Transport", slug: "ivf-sample-transportation-process-explained" },
//   { title: "Cold chain integrity in IVF embryo transport", priority: "P1", category: "Transport", slug: "cold-chain-integrity-ivf-embryo-transport" },
//   { title: "Shipping frozen embryos from Malaysia", priority: "P1", category: "Corridors", slug: "ship-frozen-embryos-from-malaysia" },
//   { title: "Egg freezing and transport in Southeast Asia", priority: "P2", category: "Corridors", slug: "egg-freezing-southeast-asia-guide" },
//   { title: "Moving your fertility journey abroad", priority: "P2", category: "Patients", slug: "moving-your-fertility-journey-abroad" },
// ];

// export function publishedKnowledgeTopics() {
//   return KNOWLEDGE_TOPICS.filter((t) => t.slug);
// }

// export function plannedKnowledgeTopics() {
//   return KNOWLEDGE_TOPICS.filter((t) => !t.slug);
// }
