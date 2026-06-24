import type { Metadata } from "next";
import ServiceLandingPage from "@/components/landing/ServiceLandingPage";
import { buildPageMetadata } from "@/lib/seo";

const config = {
  path: "/ivf-transport",
  h1: "International IVF Transport Services",
  subtitle:
    "We safely carry embryos, oocytes, and sperm across borders — with the care your fertility journey deserves and the precision science demands.",
  intro:
    "Whether you are a fertility clinic coordinating a transfer or a patient navigating an international move, you deserve a partner who understands what is at stake. We hand-carry every sample in certified dry shippers, monitor temperature in real time, and guide you through every step with warmth and clarity.",
  sections: [
    {
      heading: "What We Transport",
      body: "Our IVF transport service covers all cryopreserved reproductive materials used in assisted reproduction:",
      bullets: [
        "Frozen embryos (vitrified and slow-frozen)",
        "Oocytes and eggs for fertility preservation",
        "Sperm samples in liquid nitrogen dewars",
        "Stem cells and other biological specimens",
      ],
    },
    {
      heading: "How IVF Transport Works",
      body: "A typical international IVF transport follows a structured process designed to protect cold chain integrity at every step:",
      bullets: [
        "Clinic coordination — consent forms, release letters, and import permits verified before shipment",
        "Collection — courier collects the dry shipper directly from the sending embryology lab",
        "Air transport — hand-carried as cabin baggage on IATA P650-compliant routes",
        "Real-time monitoring — 5G data logger transmits temperature throughout the journey",
        "Customs clearance — import/export documentation managed by our operations team",
        "Delivery — direct handover to the receiving clinic's embryology team with temperature log",
      ],
    },
    {
      heading: "Why Clinics Choose ARKGlobal",
      body: "Fertility clinics across Southeast Asia trust ARKGlobal because we combine regulatory expertise with hands-on cryogenic logistics experience. We understand the import requirements of Australia, the UK, the UAE, Singapore, Malaysia, and dozens of other destinations — and we coordinate directly with both sending and receiving clinics so patients don't have to manage logistics themselves.",
    },
  ],
  faqs: [
    {
      question: "How are IVF embryos transported internationally?",
      answer:
        "IVF embryos are placed in a dry shipper maintaining below -150°C, collected by an IATA-certified courier, hand-carried on commercial flights, and delivered door-to-door to the receiving clinic with real-time temperature monitoring throughout.",
    },
    {
      question: "Can IVF samples be transported between countries?",
      answer:
        "Yes. With proper clinic documentation, import permits, and an IATA P650-certified courier, frozen embryos, eggs, and sperm can be legally transported between most countries worldwide.",
    },
    {
      question: "How long does international IVF transport take?",
      answer:
        "Most shipments complete within 24–48 hours. Dry shippers maintain safe temperatures for 5–7 days, providing ample buffer for any unforeseen delays.",
    },
  ],
  ctaText:
    "Planning an international IVF transport? Reach out for a no-obligation conversation — we'll listen to your situation and walk you through every step with care.",
  relatedLinks: [
    { href: "/embryo-shipping", label: "Embryo Shipping" },
    { href: "/cryo-shipping", label: "Cryo Shipping" },
    { href: "/blog/how-are-ivf-embryos-transported-internationally", label: "How IVF Embryos Are Transported" },
    { href: "/blog", label: "All Guides" },
  ],
};

export const metadata: Metadata = buildPageMetadata({
  title: "IVF Transport Services | International Sample Courier",
  description:
    "IATA-certified IVF transport for embryos, eggs & sperm. Door-to-door cryo shipping with real-time monitoring across Southeast Asia & worldwide.",
  path: "/ivf-transport",
  keywords: [
    "IVF transport",
    "international IVF shipping",
    "fertility sample courier",
    "cryo IVF logistics",
  ],
});

export default function IvfTransportPage() {
  return <ServiceLandingPage config={config} />;
}
