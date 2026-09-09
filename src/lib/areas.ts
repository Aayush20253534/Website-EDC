/**
 * Localities the clinic draws patients from.
 *
 * Deliberately ONE page rather than a landing page per locality. Twelve
 * near-identical "dentist in <area>" pages is the textbook doorway-page
 * pattern Google penalises; a single genuinely useful directions page ranks
 * for the same queries without the risk.
 *
 * Notes stay factual. No invented distances or drive times.
 */
export type Area = {
  name: string;
  note: string;
};

export const areaGroups: {
  /** Short label for the eyebrow — must not repeat the title. */
  eyebrow: string;
  title: string;
  blurb: string;
  areas: Area[];
}[] = [
  {
    eyebrow: "Close to the clinic",
    title: "Civil Lines and central Prayagraj",
    blurb:
      "The clinic is on Sardar Patel Marg in Civil Lines, so these are the areas most of our patients travel from — usually a short local journey.",
    areas: [
      {
        name: "Civil Lines",
        note: "We are here. Sardar Patel Marg, in the heart of the commercial district.",
      },
      {
        name: "Georgetown",
        note: "A neighbouring locality — one of the closest residential areas to the clinic.",
      },
      {
        name: "Tagore Town",
        note: "Well connected to Civil Lines; a straightforward journey by car or auto.",
      },
      {
        name: "Lukerganj",
        note: "Central, and an easy run into Civil Lines.",
      },
      {
        name: "Mumfordganj",
        note: "Close to the university side of the city, near to Civil Lines.",
      },
      {
        name: "Allahpur",
        note: "North of the centre, regularly served by our patients.",
      },
      {
        name: "Ashok Nagar",
        note: "A short journey from the clinic through central Prayagraj.",
      },
      {
        name: "Bairahana",
        note: "Central locality with good access to Sardar Patel Marg.",
      },
      {
        name: "Rajapur",
        note: "Well connected to the Civil Lines area.",
      },
    ],
  },
  {
    eyebrow: "Students & staff",
    title: "Katra and the university area",
    blurb:
      "We see a lot of students and staff from around Allahabad University. Aligners and braces are the most common reason — treatment that has to fit around lectures and exams.",
    areas: [
      {
        name: "Katra",
        note: "The main student and market area, adjoining Civil Lines.",
      },
      {
        name: "University Road",
        note: "Convenient for appointments between classes.",
      },
    ],
  },
  {
    eyebrow: "Travelling further",
    title: "Across the rivers and the wider district",
    blurb:
      "Prayagraj sits at the confluence, and patients from across both rivers travel in to us. If you are coming from further out, call ahead — we will give you an appointment time that makes the journey worth one trip rather than two.",
    areas: [
      {
        name: "Naini",
        note: "South of the Yamuna. Worth booking ahead so the crossing is made once.",
      },
      {
        name: "Jhunsi",
        note: "East, across the Ganga. Same advice — book a time rather than walking in.",
      },
      {
        name: "Phaphamau",
        note: "North of the Ganga, and regularly within our catchment.",
      },
      {
        name: "Wider Allahabad district",
        note: "Patients travel in from surrounding towns, particularly for specialist orthodontic and endodontic work.",
      },
    ],
  },
];

export const allAreaNames = areaGroups.flatMap((g) => g.areas.map((a) => a.name));
