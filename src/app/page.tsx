import HomePage from "@/components/HomePage";
import JsonLd from "@/components/seo/JsonLd";
import { homeFaqs } from "@/lib/faq-data";
import {
  faqPageSchema,
  medicalBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "ARKGlobal | IVF Embryo & Cryo Shipping Specialist",
  description:
    "IATA P650 certified cryo courier for IVF embryos, oocytes & sperm. Door-to-door shipping across Southeast Asia & 200+ countries with real-time monitoring.",
  path: "/",
  keywords: [
    "IVF transport",
    "embryo shipping",
    "cryo shipping",
    "frozen embryo courier",
    "IATA P650",
    "cryogenic dry shipper",
    "fertility sample transport",
    "Southeast Asia IVF logistics",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          medicalBusinessSchema(),
          websiteSchema(),
          faqPageSchema(homeFaqs),
        ]}
      />
      <HomePage />
    </>
  );
}
