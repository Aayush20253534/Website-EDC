import { SITE_URL, site } from "./site";
import { services, type Service } from "./services";
import type { Doctor } from "./doctors";

const CLINIC_ID = `${SITE_URL}/#clinic`;
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${site.address.street}, ${site.address.landmark}, ${site.address.neighborhood}, ${site.address.locality}`,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
} as const;

const openingHours = site.hours.map((h) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
  opens: h.opens,
  closes: h.closes,
}));

/**
 * The primary local-SEO entity. `Dentist` is a subtype of both LocalBusiness
 * and MedicalBusiness, which is exactly what Google wants for a dental clinic.
 *
 * Review markup is intentionally omitted here. Reviews about a business on
 * that business's own site are self-serving for Google's review rich results.
 */
export function clinicSchema() {
  const node: Record<string, unknown> = {
    "@type": ["Dentist", "MedicalClinic"],
    "@id": CLINIC_ID,
    name: site.name,
    alternateName: "EDC Prayagraj",
    description: site.description,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    image: [
      `${SITE_URL}/images/clinic/reception.webp`,
      `${SITE_URL}/images/clinic/operatory-wide.webp`,
      `${SITE_URL}/brand/logo-lockup.webp`,
    ],
    logo: `${SITE_URL}/brand/logo-lockup.webp`,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsUrl,
    openingHoursSpecification: openingHours,
    sameAs: [site.social.instagram],
    areaServed: [
      {
        "@type": "City",
        name: "Prayagraj",
        alternateName: "Allahabad",
        containedInPlace: { "@type": "State", name: "Uttar Pradesh" },
      },
      ...site.serviceAreas.map((a) => ({
        "@type": "Place",
        name: `${a}, Prayagraj`,
      })),
    ],
    medicalSpecialty: ["Dentistry", "Orthodontic", "Endodontic"],
    slogan: site.tagline,
    paymentAccepted: "Cash, UPI, Debit Card, Credit Card",
    availableLanguage: [
      { "@type": "Language", name: "Hindi", alternateName: "hi" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    /** Helps Google associate the practice with the full topic set, not just
     *  the handful of procedures that happen to be linked from the home page. */
    knowsAbout: services.map((s) => s.name),
    availableService: services.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.name,
      url: `${SITE_URL}/services/${s.slug}`,
    })),
    /** Enumerates every treatment as a catalogue entry. `priceRange` on the
     *  clinic covers the band; individual prices are quoted after examination,
     *  so no `price` is asserted here. */
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental treatments",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: s.name,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
    employee: [
      { "@id": `${SITE_URL}/doctors/dr-umang-malviya#physician` },
      { "@id": `${SITE_URL}/doctors/dr-anuja-raj#physician` },
    ],
  };


  return node;
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/brand/logo-lockup.webp`,
    },
    telephone: site.phone,
    email: site.email,
    address: postalAddress,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: [site.social.instagram],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function physicianSchema(doctor: Doctor) {
  return {
    "@type": ["Physician", "Person"],
    "@id": `${SITE_URL}/doctors/${doctor.slug}#physician`,
    name: doctor.name,
    honorificPrefix: "Dr.",
    url: `${SITE_URL}/doctors/${doctor.slug}`,
    image: `${SITE_URL}${doctor.image}`,
    jobTitle: doctor.role,
    description: doctor.tagline,
    medicalSpecialty: doctor.slug.includes("umang") ? "Orthodontic" : "Endodontic",
    hasCredential: doctor.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
    worksFor: { "@id": CLINIC_ID },
    address: postalAddress,
    telephone: site.phone,
  };
}

export function serviceSchema(service: Service) {
  return {
    "@type": "MedicalProcedure",
    "@id": `${SITE_URL}/services/${service.slug}#procedure`,
    name: service.name,
    description: service.summary,
    url: `${SITE_URL}/services/${service.slug}`,
    procedureType: "https://schema.org/TherapeuticProcedure",
    bodyLocation: "Mouth",
    provider: { "@id": CLINIC_ID },
    availableService: {
      "@type": "MedicalTherapy",
      name: service.name,
    },
  };
}

/**
 * MedicalWebPage — the E-E-A-T workhorse for health content.
 *
 * Google's Search Quality Rater Guidelines treat dental treatment pages as
 * YMYL ("your money or your life"). For that class of page the raters are
 * told to look for who wrote it, what their credentials are, and when it was
 * last checked. `reviewedBy` pointing at a named MDS specialist with
 * `hasCredential`, plus `lastReviewed`, is how you state that in markup.
 *
 * Only emitted when `site.contentReviewedOn` is set — see the note there.
 */
export function medicalWebPageSchema({
  url,
  name,
  description,
  reviewer,
  aboutId,
  image,
}: {
  url: string;
  name: string;
  description: string;
  reviewer: Doctor;
  /** @id of the node this page is about — the MedicalProcedure, not a
   *  MedicalCondition: a root canal is a treatment, not a diagnosis. */
  aboutId: string;
  image?: string;
}) {
  return {
    "@type": "MedicalWebPage",
    "@id": `${SITE_URL}${url}#webpage`,
    url: `${SITE_URL}${url}`,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": aboutId },
    audience: { "@type": "PeopleAudience", geographicArea: { "@type": "City", name: "Prayagraj" } },
    lastReviewed: site.contentReviewedOn,
    reviewedBy: { "@id": `${SITE_URL}/doctors/${reviewer.slug}#physician` },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${image}` } } : {}),
  };
}

/** Generic page-type node so every route declares what kind of page it is. */
export function webPageSchema({
  type,
  url,
  name,
  description,
}: {
  type: "AboutPage" | "ContactPage" | "CollectionPage" | "ImageGallery" | "WebPage";
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@type": type,
    "@id": `${SITE_URL}${url}#webpage`,
    url: `${SITE_URL}${url}`,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": CLINIC_ID },
    publisher: { "@id": ORG_ID },
  };
}

/** Ordered list of treatments, for the /services hub. */
export function treatmentListSchema() {
  return {
    "@type": "ItemList",
    name: "Dental treatments at Eclectic Dental Care, Prayagraj",
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE_URL}/services/${s.slug}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/** Wraps any set of nodes into a single @graph document. */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
