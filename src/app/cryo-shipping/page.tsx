import type { Metadata } from "next";
import ServiceLandingPage from "@/components/landing/ServiceLandingPage";
import { buildPageMetadata } from "@/lib/seo";

const config = {
  path: "/cryo-shipping",
  h1: "Cryo Shipping for Fertility & Life Sciences",
  subtitle:
    "Behind every shipment is a story of hope. We are committed to protecting what matters most through trusted cryogenic transport with uncompromising care.",
  intro:
    "Cryo shipping is more than logistics — it is a promise to keep biological samples safe at temperatures that preserve life itself. For fertility clinics and patients worldwide, ARKGlobal delivers that promise with scientific precision and genuine compassion.",
  sections: [
    {
      heading: "What Is a Cryogenic Dry Shipper?",
      body: "A dry shipper is a vacuum-insulated container that uses liquid nitrogen vapour (not liquid nitrogen) to maintain extreme cold. The nitrogen is absorbed into porous material inside the vessel, making it safe for commercial air travel while keeping samples below -150°C for 5–7 days without refilling.",
    },
    {
      heading: "Why Temperature Control Matters",
      body: "Vitrified embryos and eggs exist in a glass-like state that is stable only below -150°C. If the temperature rises above approximately -130°C, ice crystals can form and damage cell membranes — sometimes without visible signs until thaw. This is why continuous real-time monitoring, not just end-point checks, is essential for cryo shipping.",
      bullets: [
        "5G-enabled data loggers on every vessel",
        "Live temperature access for patients and clinics",
        "Immediate alert and contingency protocols for delays",
        "Full temperature audit trail provided at handover",
      ],
    },
    {
      heading: "Compliance & Certification",
      body: "All ARKGlobal cryo shipments comply with IATA Packing Instruction P650, EU Tissue Directives, and destination-country biosecurity requirements. Our couriers are trained in dangerous goods handling, and our MVE dewars are IATA/WHO certified for international air transport.",
    },
  ],
  faqs: [
    {
      question: "What is a cryogenic dry shipper?",
      answer:
        "A dry shipper is an insulated vessel using liquid nitrogen vapour to keep biological samples below -150°C. Unlike liquid nitrogen dewars, dry shippers are safe for air travel and maintain temperature for 5–7 days.",
    },
    {
      question: "What regulations govern cryo shipping?",
      answer:
        "Cryo shipping is regulated by IATA P650 for air transport, national biosecurity laws, EU Tissue Directives where applicable, and local ART regulations. Couriers must hold IATA dangerous goods certification.",
    },
    {
      question: "Can you ship cryo samples worldwide?",
      answer:
        "Yes. ARKGlobal provides door-to-door cryo shipping to over 200 countries, with expertise in Southeast Asian routes and major international corridors to Australia, Europe, and the Middle East.",
    },
  ],
  ctaText:
    "Have questions about cryo shipping? We'd love to hear from you — no pressure, just honest guidance from people who understand what you're going through.",
  relatedLinks: [
    { href: "/ivf-transport", label: "IVF Transport" },
    { href: "/embryo-shipping", label: "Embryo Shipping" },
    { href: "/blog/what-is-a-cryogenic-dry-shipper", label: "What Is a Dry Shipper?" },
    { href: "/blog/iata-p650-certification-embryo-shipping", label: "IATA P650 Guide" },
  ],
};

export const metadata: Metadata = buildPageMetadata({
  title: "Cryo Shipping | IATA Certified Cryogenic Courier",
  description:
    "Specialist cryo shipping for IVF samples using dry shippers & real-time monitoring. IATA P650 certified door-to-door service across Southeast Asia.",
  path: "/cryo-shipping",
  keywords: [
    "cryo shipping",
    "cryogenic courier",
    "dry shipper transport",
    "IATA P650 cryo shipping",
    "cold chain logistics",
  ],
});

export default function CryoShippingPage() {
  return <ServiceLandingPage config={config} />;
}
