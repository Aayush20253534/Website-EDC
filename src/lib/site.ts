/**
 * Single source of truth for NAP (Name / Address / Phone).
 *
 * Local SEO note: Google cross-references this against the Google Business
 * Profile. The strings here must match GBP character-for-character. Change
 * them in one place only — every page, the footer and the LocalBusiness
 * schema all read from this file.
 */

export const SITE_URL = "https://eclecticdentalcare.in";

export const site = {
  name: "Eclectic Dental Care",
  legalName: "Eclectic Dental Care",
  tagline: "Align · Preserve · Protect",
  subTagline: "For Every Age, Every Smile.",
  url: SITE_URL,
  description:
    "Eclectic Dental Care is a specialist dental clinic near Hira Halwai Chauraha in Civil Lines, Prayagraj. Led by MDS specialists in orthodontics and endodontics, with Invisalign, iTero digital scanning and advanced restorative care.",

  // — Contact —
  phone: "+918707537640",
  phoneDisplay: "+91 87075 37640",
  whatsapp: "918707537640",
  email: "umangmalvi09@gmail.com",

  // — Address (must mirror Google Business Profile exactly) —
  address: {
    street: "63A/1, Thornhill Road",
    landmark: "Hira Halwai Chauraha",
    neighborhood: "Vivek Vihar Colony",
    locality: "Civil Lines",
    city: "Prayagraj",
    alternateCityName: "Allahabad",
    region: "Uttar Pradesh",
    postalCode: "211001",
    country: "IN",
    countryName: "India",
  },
  addressLine:
    "63A/1, Thornhill Road, Hira Halwai Chauraha, Vivek Vihar Colony, Civil Lines, Prayagraj, Uttar Pradesh 211001",

  geo: { lat: 25.4601743, lng: 81.8356191 },

  /**
   * Date the clinical content was last checked by the practice's specialists.
   *
   * Published as `lastReviewed` + `reviewedBy` on every treatment page, and
   * shown to visitors. Google classes dental pages as YMYL content and its
   * quality raters look specifically for credentialed review — this is one of
   * the strongest signals a clinic site can carry.
   *
   * It is also a factual claim about your doctors. Set it to the date they
   * actually read the pages, and bump it whenever the content changes. Set it
   * to `null` to publish nothing rather than assert a review that has not
   * happened.
   */
  contentReviewedOn: "2026-09-09" as string | null,

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=63A%2F1%2C%20Thornhill%20Road%2C%20Hira%20Halwai%20Chauraha%2C%20Civil%20Lines%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211001",
  mapsEmbed:
    "https://www.google.com/maps?q=63A%2F1%2C%20Thornhill%20Road%2C%20Hira%20Halwai%20Chauraha%2C%20Civil%20Lines%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211001&hl=en&z=17&output=embed",

  social: {
    instagram: "https://www.instagram.com/eclectic_dental_care",
    instagramHandle: "@eclectic_dental_care",
  },

  /**
   * Opening hours. `opens`/`closes` are 24h for schema.org; `label` is what
   * humans read. Keep these aligned with the clinic's public business listing.
   */
  hours: [
    {
      days: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
      label: "Mon, Tue & Thu – Sat",
      time: "10:00 am – 8:00 pm",
      opens: "10:00",
      closes: "20:00",
    },
    {
      days: ["Wednesday"],
      label: "Wednesday",
      time: "9:00 am – 8:00 pm",
      opens: "09:00",
      closes: "20:00",
    },
    {
      days: ["Sunday"],
      label: "Sunday",
      time: "10:00 am – 2:00 pm",
      opens: "10:00",
      closes: "14:00",
    },
  ],

  /**
   * Areas the clinic actively serves. These drive the internal-linking block
   * that helps the site rank for "<service> in <locality> Prayagraj" queries.
   */
  serviceAreas: [
    "Civil Lines",
    "Georgetown",
    "Tagore Town",
    "Katra",
    "Allahpur",
    "Mumfordganj",
    "Ashok Nagar",
    "Lukerganj",
    "Naini",
    "Jhunsi",
    "Rajapur",
    "Bairahana",
  ],
} as const;

/** Pre-filled WhatsApp deep link. `text` is encoded for you. */
export function waLink(text = "Hi, I'd like to book an appointment at Eclectic Dental Care.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const telLink = `tel:${site.phone}`;
