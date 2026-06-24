import { COMPANY_EMAIL, COMPANY_PHONE, SITE_NAME, SITE_URL } from "./seo";

export interface FAQItem {
  question: string;
  answer: string;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "ARK Global Asia",
    url: SITE_URL,
    logo: `${SITE_URL}/images/pic1.png`,
    description:
      "Global specialist in cryogenic shipping for IVF embryos, oocytes, sperm, and reproductive cells. Serving fertility clinics and patients internationally across 200+ countries.",
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kuala Lumpur",
        addressCountry: "MY",
      },
    },
    areaServed: "Worldwide",
    sameAs: [
      "https://linkedin.com/in/ark-global-cryogenic-shipper-1721362a5",
    ],
  };
}

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/pic1.png`,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    priceRange: "$$$",
    medicalSpecialty: "Cryogenic reproductive tissue transport",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Kuala Lumpur",
        addressRegion: "Wilayah Persekutuan",
        addressCountry: "MY",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Seremban",
        addressRegion: "Negeri Sembilan",
        addressCountry: "MY",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.139,
      longitude: 101.6869,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    knowsAbout: [
      "IVF embryo transport",
      "Cryogenic dry shipper logistics",
      "IATA P650 biological specimen shipping",
      "International fertility sample import and export",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "IATA-certified global cryo courier for international IVF and embryo shipping across 200+ countries worldwide.",
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}

export function faqPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  metaDescription: string;
  slug: string;
  publishedDate: string;
  modifiedDate?: string;
  author: string;
  category: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate ?? post.publishedDate,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/pic1.png`,
      },
    },
    image: `${SITE_URL}/images/pic1.png`,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function servicePageSchema(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: {
      "@type": "MedicalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    serviceType: "Cryogenic reproductive tissue transport",
  };
}
