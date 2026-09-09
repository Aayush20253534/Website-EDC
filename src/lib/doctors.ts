export type Doctor = {
  slug: string;
  name: string;
  shortName: string;
  qualification: string;
  /** Specialist title used in headings and schema. */
  role: string;
  /** One-line positioning statement. */
  tagline: string;
  image: string;
  imageAlt: string;
  /** Credential chips shown under the name. */
  credentials: string[];
  /** Body paragraphs for the profile page. */
  bio: string[];
  /** Clinical areas — links into service slugs where they exist. */
  focus: { label: string; slug?: string }[];
  /** Short pull-quote used on the home page. */
  quote: string;
  metaTitle: string;
  metaDescription: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-umang-malviya",
    name: "Dr. Umang Malviya",
    shortName: "Dr. Umang",
    qualification: "BDS, MDS",
    role: "Orthodontist & Certified Invisalign Provider",
    tagline:
      "Specialist orthodontist and certified Invisalign provider, planning every aligner case personally.",
    image: "/images/team/dr-umang-malviya.webp",
    imageAlt:
      "Dr. Umang Malviya, MDS Orthodontics and certified Invisalign provider at Eclectic Dental Care, Prayagraj",
    credentials: [
      "MDS — Orthodontics & Dentofacial Orthopaedics",
      "Certified Invisalign Provider",
      "iTero Element digital scanning",
    ],
    bio: [
      "Dr. Umang Malviya is an orthodontist with an MDS in Orthodontics and Dentofacial Orthopaedics — a three-year specialist degree taken after BDS, devoted entirely to tooth movement, jaw gro[...]",
      "He is a certified Invisalign provider and plans every aligner case himself on Invisalign's ClinCheck software, rather than delegating the digital setup. Each stage of movement is reviewed a[...]",
      "The clinic runs an iTero Element intraoral scanner, so impressions are taken digitally. There is no putty tray, and the scan feeds straight into treatment planning.",
      "His approach to case selection is deliberately conservative. Aligners are excellent for a wide range of cases and genuinely unsuitable for some, and patients are told which category they fa[...]",
    ],
    focus: [
      { label: "Invisalign clear aligners", slug: "invisalign-clear-aligners" },
      { label: "Metal, ceramic & self-ligating braces", slug: "braces-orthodontic-treatment" },
      { label: "Early orthodontic intervention in children", slug: "kids-dentistry" },
      { label: "Adult orthodontics & relapse correction" },
      { label: "Smile design & digital planning", slug: "smile-makeover" },
    ],
    quote:
      "A good orthodontic result is not just straight teeth in a photograph. It is a bite that works, and a retention plan that keeps it.",
    metaTitle: "Dr. Umang Malviya — Orthodontist, Prayagraj",
    metaDescription:
      "Dr. Umang Malviya, MDS Orthodontics and certified Invisalign provider in Civil Lines, Prayagraj. Braces, aligners and digital smile planning.",
  },
  {
    slug: "dr-anuja-raj",
    name: "Dr. Anuja Ray",
    shortName: "Dr. Anuja",
    qualification: "BDS, MDS",
    role: "Endodontist — Root Canal Specialist",
    tagline:
      "Specialist endodontist focused on saving teeth others would extract.",
    image: "/images/team/dr-anuja-raj.webp",
    imageAlt:
      "Dr. Anuja Ray, MDS Conservative Dentistry and Endodontics at Eclectic Dental Care, Prayagraj",
    credentials: [
      "MDS — Conservative Dentistry & Endodontics",
      "Single-visit root canal treatment",
      "Aesthetic restorative dentistry",
    ],
    bio: [
      "Dr. Anuja Ray holds an MDS in Conservative Dentistry and Endodontics — the specialism concerned with treating disease inside the tooth and rebuilding what decay has taken, while removing [...]",
      "Endodontics is precise work. Root canal systems are narrow, curved and frequently branch in ways a general radiograph does not reveal. Specialist training and proper isolation are what sepa[...]",
      "Many straightforward cases are completed in a single visit. Where there is active swelling or complex canal anatomy, treatment is staged across two appointments — a clinical decision, exp[...]",
      "Her restorative work covers tooth-coloured fillings, crowns, veneers and post-endodontic rebuilding, with an emphasis on the seal at the margin. A restoration that is beautiful but leaks is[...]",
    ],
    focus: [
      { label: "Root canal treatment", slug: "root-canal-treatment" },
      { label: "Re-treatment of failed root canals" },
      { label: "Tooth-coloured fillings", slug: "tooth-coloured-fillings" },
      { label: "Crowns, veneers & post-endodontic rebuilding", slug: "dental-crowns-bridges" },
      { label: "Teeth whitening", slug: "teeth-whitening" },
      { label: "Gum disease treatment", slug: "gum-disease-treatment" },
    ],
    quote:
      "No implant works quite as well as the tooth you were born with. If a tooth can be saved, that is the first conversation — not the last resort.",
    metaTitle: "Dr. Anuja Ray — Endodontist, Prayagraj",
    metaDescription:
      "Dr. Anuja Ray, MDS Endodontics at Eclectic Dental Care, Civil Lines, Prayagraj. Single-visit root canal treatment and restorative dentistry.",
  },
];

export const doctorMap = new Map(doctors.map((d) => [d.slug, d]));

export function getDoctor(slug: string) {
  return doctorMap.get(slug);
}

/** Maps a service's `lead` field to the doctor(s) who deliver it. */
export function leadDoctors(lead: "umang" | "anuja" | "both"): Doctor[] {
  if (lead === "umang") return [doctors[0]];
  if (lead === "anuja") return [doctors[1]];
  return doctors;
}
