import type { Metadata } from "next";
import ServiceLandingPage from "@/components/landing/ServiceLandingPage";
import { buildPageMetadata } from "@/lib/seo";

const config = {
  path: "/embryo-shipping",
  h1: "Frozen Embryo Shipping Services",
  subtitle:
    "Your embryos represent your hope for a family. We carry them with the reverence, precision, and unwavering protection they deserve.",
  intro:
    "Shipping frozen embryos is one of the most personal logistics decisions you will ever make. We understand that — and it is why every ARKGlobal shipment is hand-carried, continuously monitored, and treated with the same care we would want for our own.",
  sections: [
    {
      heading: "Is Embryo Shipping Safe?",
      body: "Yes — when performed by a certified cryo courier. Vitrified embryos remain biologically stable below -150°C. Our dry shippers maintain this temperature for 5–7 days, and our 5G data loggers provide real-time visibility so any anomaly is detected immediately — not after delivery.",
    },
    {
      heading: "Our Embryo Shipping Process",
      body: "Every embryo shipment follows the same rigorous protocol:",
      bullets: [
        "Pre-shipment documentation review with both clinics",
        "Dry shipper loaded and sealed under embryologist supervision",
        "Hand-carry transport — no unqualified third-party handlers",
        "Continuous temperature logging with live patient and clinic access",
        "Customs clearance with pre-arranged import permits",
        "Direct delivery to receiving embryology team with full audit trail",
      ],
    },
    {
      heading: "Popular Embryo Shipping Routes",
      body: "ARKGlobal handles embryo shipments across Southeast Asia and internationally. Common corridors include Malaysia to Australia, Singapore to the UK, Thailand to the Middle East, and intra-SEA transfers between KL, Bangkok, and Manila. We understand the specific import requirements of each destination.",
    },
  ],
  faqs: [
    {
      question: "Is embryo transportation safe?",
      answer:
        "Yes. Professional embryo shipping using IATA P650-certified dry shippers and real-time temperature monitoring maintains viability. ARKGlobal has a 100% cold chain success rate across all shipments.",
    },
    {
      question: "How long can embryos stay frozen during shipping?",
      answer:
        "Dry shippers maintain below -150°C for 5–7 days. Most international embryo shipments complete within 24–48 hours, well within safe limits.",
    },
    {
      question: "What documentation is needed to ship embryos?",
      answer:
        "Typically: patient consent forms, clinic release letter, receiving clinic acceptance letter, medical records, and destination-country import permits. Requirements vary by country.",
    },
  ],
  ctaText:
    "Need to ship frozen embryos? We're here to answer your questions and guide you through the process — with honesty, expertise, and genuine care.",
  relatedLinks: [
    { href: "/ivf-transport", label: "IVF Transport" },
    { href: "/cryo-shipping", label: "Cryo Shipping" },
    { href: "/blog/can-frozen-embryos-be-transported-safely", label: "Embryo Shipping Safety Guide" },
    { href: "/blog/shipping-embryos-malaysia-to-australia", label: "Malaysia to Australia Route" },
  ],
};

export const metadata: Metadata = buildPageMetadata({
  title: "Embryo Shipping | Frozen Embryo Courier Worldwide",
  description:
    "IATA P650 certified frozen embryo shipping with real-time cold chain monitoring. Door-to-door delivery for clinics & patients across 200+ countries.",
  path: "/embryo-shipping",
  keywords: [
    "embryo shipping",
    "frozen embryo transport",
    "embryo courier",
    "international embryo shipping",
  ],
});

export default function EmbryoShippingPage() {
  return <ServiceLandingPage config={config} />;
}
