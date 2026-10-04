import HomePage from "@/components/HomePage";
import JsonLd from "@/components/seo/JsonLd";
import { homeFaqs } from "@/lib/faq-data";
import {
  faqPageSchema,
  medicalBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { buildPageMetadata, SITE_DESCRIPTION } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "ARK Global | International IVF Cryogenic Transportation",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "IVF transport",
    "embryo shipping",
    "cryo shipping",
    "frozen embryo courier",
    "IATA P650",
    "cryogenic dry shipper",
    "fertility sample transport",
    "international IVF logistics",
    "global cryo courier",
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
