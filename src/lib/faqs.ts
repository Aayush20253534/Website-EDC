import { site } from "./site";

/**
 * Clinic-level FAQs. These target the questions people actually type into
 * Google before choosing a dental clinic in Prayagraj, and are emitted as
 * FAQPage schema on the home page.
 */
export const clinicFaqs = [
  {
    q: "Where is Eclectic Dental Care located in Prayagraj?",
    a: `We are on ${site.addressLine} — in Civil Lines, central Prayagraj, easily reached from Georgetown, Tagore Town, Katra, Allahpur and Lukerganj. Tap "Get directions" anywhere on this site to open Google Maps.`,
  },
  {
    q: "What are your clinic timings?",
    a: "We are open seven days a week. Monday, Tuesday and Thursday to Saturday: 10:00 am to 8:00 pm. Wednesday: 9:00 am to 8:00 pm. Sunday: 10:00 am to 2:00 pm. Call ahead for a dental emergency so we can prioritise you.",
  },
  {
    q: "Do I need an appointment, or can I walk in?",
    a: `An appointment is better — it means you are seen at a set time rather than waiting. Call or WhatsApp ${site.phoneDisplay}. Emergencies with pain or swelling are fitted in the same day wherever possible.`,
  },
  {
    q: "Is Eclectic Dental Care a certified Invisalign provider?",
    a: "Yes. Dr. Umang Malviya is a certified Invisalign provider and the clinic runs an iTero Element intraoral scanner for digital impressions, with every ClinCheck treatment plan prepared in-house.",
  },
  {
    q: "Which doctor will I see?",
    a: "It depends on what you need. Dr. Umang Malviya (MDS Orthodontics) handles braces, aligners and bite correction. Dr. Anuja Ray (MDS Endodontics) handles root canals, fillings, crowns and gum treatment. For anything unclear, either will see you and direct you correctly.",
  },
  {
    q: "How much will my treatment cost?",
    a: "It depends entirely on what you need, which is why we do not publish a fixed price list — a quoted figure that changes later helps nobody. After examining you we give the full cost of your plan in writing before treatment begins, and nothing is added partway through.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. We see children from their first tooth onwards, and offer early orthodontic assessment from around age 7 — the age at which developing bite problems can still be guided rather than corrected later.",
  },
  {
    q: "Do you speak Hindi?",
    a: "Yes. Consultations and explanations are given in Hindi or English, whichever you prefer.",
  },
];
