import { site } from "./site";

export type ServiceStep = { title: string; body: string };
export type ServiceFaq = { q: string; a: string };
/** Side-by-side option table. Most treatments have a genuine alternative
 *  patients are weighing up, and saying so plainly builds more trust than
 *  pretending there is only one answer. */
export type ServiceComparison = {
  title: string;
  intro: string;
  optionA: string;
  optionB: string;
  rows: { feature: string; a: string; b: string }[];
  verdict: string;
};

export type Service = {
  slug: string;
  /** Nav / card label — short. */
  name: string;
  /** H1 on the service page. */
  heading: string;
  category: "Orthodontics" | "Restorative" | "Cosmetic" | "Surgical" | "Preventive" | "Family";
  /** Lucide icon name, rendered through the Icon map. */
  icon: string;
  /** 1-line card summary. */
  summary: string;
  /** Page metadata. Keep titles under ~60 chars, descriptions under ~155. */
  metaTitle: string;
  metaDescription: string;
  /** Treatment illustration (licensed stock), relative to /public. */
  image: string;
  imageAlt: string;
  /** A real photograph from the clinic, shown alongside the stock image
   *  so the page is not only generic imagery. */
  clinicImage: string;
  clinicImageAlt: string;
  /** Which doctor leads this treatment. */
  lead: "umang" | "anuja" | "both";
  /** Quick-facts rail on the service page. */
  facts: { label: string; value: string }[];
  /** Opening body copy — array of paragraphs. */
  overview: string[];
  /** "You may need this if…" — strong intent-matching for search. */
  signs: string[];
  /** Numbered treatment journey. */
  process: ServiceStep[];
  /** Outcome bullets. */
  benefits: string[];
  /** Rendered on-page AND emitted as FAQPage schema. */
  faqs: ServiceFaq[];
  related: string[];
  /** What genuinely moves the price. No figures — the clinic quotes after
   *  examining — but naming the variables beats saying nothing. */
  costFactors: string[];
  /** Optional "this vs that" table rendered on the treatment page. */
  comparison?: ServiceComparison;
  /** Flagship pages get extra hero treatment and nav priority. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "invisalign-clear-aligners",
    name: "Invisalign Clear Aligners",
    heading: "Invisalign clear aligners in Prayagraj",
    category: "Orthodontics",
    icon: "aligner",
    featured: true,
    summary:
      "Straighten your teeth without metal braces. Dr. Umang Malviya is a certified Invisalign provider with in-house iTero digital scanning.",
    metaTitle: "Invisalign Clear Aligners in Prayagraj",
    metaDescription:
      "Certified Invisalign provider in Civil Lines, Prayagraj. Dr. Umang Malviya, MDS Orthodontics, with iTero digital scanning. Book a consultation.",
    image: "/images/treatments/invisalign-clear-aligners.webp",
    imageAlt:
      "A clear Invisalign aligner being placed over the upper teeth",
    clinicImage: "/images/clinic/invisalign-clincheck.webp",
    clinicImageAlt:
      "Invisalign ClinCheck treatment plan on screen at Eclectic Dental Care, Prayagraj",
    lead: "umang",
    facts: [
      { label: "Treated by", value: "Dr. Umang Malviya, MDS" },
      { label: "Typical duration", value: "6 – 18 months" },
      { label: "Visible?", value: "Virtually invisible" },
      { label: "Removable?", value: "Yes — eat and brush normally" },
    ],
    overview: [
      "Invisalign straightens teeth using a sequence of clear, custom-made aligners instead of metal brackets and wires. Each aligner moves your teeth a fraction of a millimetre, and you progress through the series until your teeth reach the position planned at the start.",
      "Eclectic Dental Care is a certified Invisalign provider practice in Prayagraj. Dr. Umang Malviya holds an MDS in Orthodontics and plans every case personally on Invisalign's ClinCheck software — so you see a digital simulation of your final result before a single aligner is made.",
      "We scan your teeth in the clinic with an iTero Element intraoral scanner. There is no tray of impression putty, no gagging, and the scan takes a few minutes. The digital model goes straight into your treatment plan.",
    ],
    signs: [
      "You want straighter teeth but do not want visible metal braces",
      "Crowded, overlapping or crooked front teeth",
      "Gaps or spacing between teeth",
      "Mild to moderate overbite, underbite or crossbite",
      "Teeth have shifted years after previous braces",
      "You are a working professional or student who needs a discreet option",
    ],
    process: [
      {
        title: "Consultation and records",
        body: "Dr. Umang examines your bite, takes photographs and X-rays, and confirms whether Invisalign is the right tool for your case. Some complex bites are genuinely better treated with braces — we will tell you if that is true for you.",
      },
      {
        title: "iTero digital scan",
        body: "A handheld scanner builds a 3D model of your teeth in minutes. No impression trays, no putty, no gagging.",
      },
      {
        title: "ClinCheck treatment plan",
        body: "Your scan is used to plan every stage of tooth movement. You see a simulation of your projected result and approve the plan before manufacturing begins.",
      },
      {
        title: "Aligners fitted",
        body: "Your custom aligners arrive and we fit the first set, place any small tooth-coloured attachments needed, and show you how to insert and remove them.",
      },
      {
        title: "Wear and progress",
        body: "Aligners are worn 20–22 hours a day and changed on the schedule we set. Review appointments are typically every 6–8 weeks, and are short.",
      },
      {
        title: "Retention",
        body: "Once teeth are in position you move into retainers. Retainers are not optional — they are what keeps the result. We will explain exactly how to use them.",
      },
    ],
    benefits: [
      "Virtually invisible — most people will not notice you are in treatment",
      "Removable for eating, brushing and photographs",
      "No wire pokes, no bracket emergencies, no food restrictions",
      "Digital plan means you see the projected outcome before starting",
      "Usually fewer and shorter chairside visits than fixed braces",
      "Easier to keep teeth clean during treatment, which protects gum health",
    ],
    faqs: [
      {
        q: "Is Eclectic Dental Care a certified Invisalign provider?",
        a: "Yes. Dr. Umang Malviya is a certified Invisalign provider and the clinic is an Invisalign provider practice, with an iTero Element intraoral scanner on site for digital impressions.",
      },
      {
        q: "How long does Invisalign take?",
        a: "Most cases run between 6 and 18 months depending on how much movement is needed. Simple front-tooth alignment can finish sooner; complex bite correction takes longer. Dr. Umang will give you a case-specific estimate after your ClinCheck plan is prepared.",
      },
      {
        q: "Does Invisalign hurt?",
        a: "You will feel pressure and mild tightness for the first day or two after changing to a new aligner. That is the teeth moving, and it settles quickly. Most patients describe it as far more comfortable than fixed braces, with no wires or brackets to irritate the cheeks.",
      },
      {
        q: "Can I eat with the aligners on?",
        a: "No — you take them out to eat and drink anything other than water, then brush and put them back. That is an advantage: there are no food restrictions at all, unlike with fixed braces.",
      },
      {
        q: "Will Invisalign work for my case?",
        a: "Invisalign handles most crowding, spacing and many bite problems, but not every case. Some severe skeletal discrepancies are better treated with fixed braces or a combined approach. An honest assessment is part of your consultation — we would rather tell you upfront than start the wrong treatment.",
      },
      {
        q: "How much does Invisalign cost in Prayagraj?",
        a: "The fee depends on how many aligners your case needs, which is only known once your plan is prepared. We share the full cost, in writing, before treatment begins — there are no charges added later. Call us on " + site.phoneDisplay + " to arrange an assessment.",
      },
    ],
    related: ["braces-orthodontic-treatment", "smile-makeover", "teeth-whitening"],
    costFactors: [
      "How many aligners your case needs — this is the single biggest factor, and it is only known once your ClinCheck plan is prepared",
      "Whether you need a short course for front teeth only, or full-arch bite correction",
      "Retainers after treatment, which we include in the plan rather than adding later",
    ],
    comparison: {
      title: "Invisalign or fixed braces?",
      intro:
        "Aligners are not automatically the better choice. This is the honest trade-off, including the parts that do not favour Invisalign.",
      optionA: "Invisalign",
      optionB: "Fixed braces",
      rows: [
        { feature: "Visibility", a: "Virtually invisible", b: "Visible brackets and wires" },
        { feature: "Removable", a: "Yes — for meals and brushing", b: "No — fixed for the full term" },
        { feature: "Food restrictions", a: "None", b: "No hard or sticky foods" },
        { feature: "Cleaning teeth", a: "Normal brushing and flossing", b: "Harder — needs extra tools" },
        { feature: "Emergencies", a: "No wire pokes or loose brackets", b: "Occasional bracket or wire issues" },
        { feature: "Chair time", a: "Shorter, less frequent reviews", b: "Adjustment every 4–6 weeks" },
        { feature: "Complex bite cases", a: "Many, but not all", b: "Handles the widest range" },
        { feature: "Depends on you", a: "Must be worn 20–22 hrs a day", b: "Works whether you remember or not" },
      ],
      verdict:
        "Aligners only work while they are in your mouth. If you will not wear them 20–22 hours a day, fixed braces will give you a better result — and we would rather say that at the consultation than halfway through treatment.",
    },
  },

  {
    slug: "braces-orthodontic-treatment",
    name: "Braces & Orthodontics",
    heading: "Braces and orthodontic treatment in Prayagraj",
    category: "Orthodontics",
    icon: "braces",
    featured: true,
    summary:
      "Metal, ceramic and self-ligating braces planned by an MDS orthodontist — for children, teenagers and adults.",
    metaTitle: "Braces & Orthodontist in Prayagraj",
    metaDescription:
      "Braces in Civil Lines, Prayagraj: metal, ceramic and self-ligating options planned by Dr. Umang Malviya, MDS Orthodontics. Book a consultation.",
    image: "/images/treatments/braces-orthodontic-treatment.webp",
    imageAlt:
      "A young woman smiling, showing fixed orthodontic braces on her teeth",
    clinicImage: "/images/clinic/operatory-chairs.webp",
    clinicImageAlt: "Orthodontic treatment room at Eclectic Dental Care, Civil Lines, Prayagraj",
    lead: "umang",
    facts: [
      { label: "Treated by", value: "Dr. Umang Malviya, MDS" },
      { label: "Typical duration", value: "12 – 24 months" },
      { label: "Options", value: "Metal · Ceramic · Self-ligating" },
      { label: "Best start age", value: "Assessment from age 7" },
    ],
    overview: [
      "Braces remain the most versatile tool in orthodontics. Fixed brackets can correct bite problems that removable aligners cannot reach, and for many growing patients they are still the right first choice.",
      "Dr. Umang Malviya holds an MDS in Orthodontics and Dentofacial Orthopaedics — a three-year specialist degree beyond BDS, focused entirely on tooth movement, jaw growth and bite correction. Orthodontics is not a sideline at this clinic; it is the practice's core discipline.",
      "We offer conventional metal brackets, tooth-coloured ceramic brackets for adults who want something less visible, and self-ligating systems that can reduce friction and appointment frequency. Which one suits you depends on your bite, not on price alone.",
    ],
    signs: [
      "Crowded, overlapping or rotated teeth",
      "Protruding upper front teeth",
      "Upper and lower teeth do not meet correctly when biting",
      "Difficulty chewing, or teeth wearing unevenly",
      "Your child has lost most baby teeth and the adult teeth are coming in crooked",
      "Jaw clicking, or a jaw that shifts to one side on closing",
    ],
    process: [
      {
        title: "Orthodontic assessment",
        body: "Clinical examination, photographs, and an OPG X-ray plus lateral cephalogram where indicated, to understand both teeth and underlying jaw relationship.",
      },
      {
        title: "Diagnosis and plan",
        body: "Dr. Umang explains what is causing the problem, the realistic options, roughly how long each would take, and whether any extractions are genuinely needed.",
      },
      {
        title: "Bonding the braces",
        body: "Brackets are bonded to the teeth and the first archwire is placed. The appointment takes around an hour and is not painful.",
      },
      {
        title: "Adjustments",
        body: "You return roughly every 4–6 weeks for wire changes and progress checks. Each visit is short.",
      },
      {
        title: "Debonding",
        body: "Once the bite is correct, braces are removed and the teeth are polished.",
      },
      {
        title: "Retainers",
        body: "Fixed or removable retainers hold the corrected position. This stage decides whether your result lasts, so we take it seriously.",
      },
    ],
    benefits: [
      "Corrects bite problems that aligners alone cannot address",
      "Works reliably across all age groups, including growing children",
      "Ceramic options available for adults who want discretion",
      "Straight teeth are measurably easier to clean, lowering decay and gum disease risk",
      "Corrects uneven wear before it damages teeth permanently",
    ],
    faqs: [
      {
        q: "At what age should my child first see an orthodontist?",
        a: "Around age 7. That is not when treatment usually starts — it is when problems become visible early enough to guide jaw growth rather than correct it later. Many children assessed at 7 need nothing at all for several years, but the ones who do benefit enormously from being caught early.",
      },
      {
        q: "Do braces hurt?",
        a: "Fitting them does not hurt. Teeth feel tender for two to three days after bonding and after each wire change, and soft food helps during that period. The discomfort is mild and predictable, not sharp.",
      },
      {
        q: "Metal or ceramic braces — which is better?",
        a: "Metal brackets are stronger, slightly more efficient, and cost less. Ceramic brackets are tooth-coloured and far less visible, which matters to most adults. Both work. Dr. Umang will tell you if your particular case has a clinical reason to prefer one.",
      },
      {
        q: "Will I need teeth extracted for braces?",
        a: "Sometimes, but far less often than people fear. Extractions are only recommended when there is genuinely not enough room in the jaw, and the reasoning is explained to you before anything is done.",
      },
      {
        q: "Can adults get braces?",
        a: "Yes. Teeth move at any age — bone remodels throughout life. Adult treatment may take slightly longer, and if visibility is a concern, ceramic braces or Invisalign are worth discussing.",
      },
    ],
    related: ["invisalign-clear-aligners", "kids-dentistry", "smile-makeover"],
    costFactors: [
      "Bracket type — metal is the most economical, ceramic costs more because the material and the chair time both do",
      "How long the case runs, since that determines the number of adjustment visits",
      "Whether extractions or additional appliances are genuinely needed",
    ],
  },

  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    heading: "Root canal treatment in Prayagraj",
    category: "Restorative",
    icon: "tooth",
    featured: true,
    summary:
      "Single-visit root canals where suitable, performed by an MDS endodontist under magnification.",
    metaTitle: "Root Canal Treatment in Prayagraj",
    metaDescription:
      "Root canal treatment in Civil Lines, Prayagraj by Dr. Anuja Ray, MDS Endodontics. Single-visit RCT where suitable. Book a consultation.",
    image: "/images/treatments/root-canal-treatment.webp",
    imageAlt:
      "Two dentists reviewing a dental X-ray to plan root canal treatment",
    clinicImage: "/images/clinic/operatory-wide.webp",
    clinicImageAlt: "Treatment room used for root canal therapy at Eclectic Dental Care, Prayagraj",
    lead: "anuja",
    facts: [
      { label: "Treated by", value: "Dr. Anuja Ray, MDS" },
      { label: "Visits", value: "1 – 2 (case dependent)" },
      { label: "Anaesthesia", value: "Local — the tooth is numb" },
      { label: "Success rate", value: "High, when done properly" },
    ],
    overview: [
      "A root canal treats infection inside the tooth. When decay or a crack reaches the pulp — the nerve and blood supply at the centre — the tissue becomes inflamed or infected, and that is what produces severe, throbbing toothache. Root canal treatment removes the infected pulp, disinfects and shapes the canals, and seals them.",
      "The purpose is simple: to keep your natural tooth. No implant or bridge functions quite as well as the tooth you were born with, and a properly treated root-canal tooth can last decades.",
      "At Eclectic Dental Care, root canals are performed by Dr. Anuja Ray, who holds an MDS in Conservative Dentistry and Endodontics — the specialism dedicated entirely to this work. Many straightforward cases are completed in a single visit.",
    ],
    signs: [
      "Severe, spontaneous toothache — especially one that wakes you at night",
      "Lingering pain after hot or cold drinks",
      "Pain on biting or when pressure is applied to a tooth",
      "A tooth that has darkened compared with its neighbours",
      "Swelling or tenderness of the gum near a tooth",
      "A recurring pimple-like bump on the gum",
      "A deep cavity or a large old filling that has broken",
    ],
    process: [
      {
        title: "Diagnosis",
        body: "Clinical tests and an X-ray confirm which tooth is involved and whether the pulp is genuinely affected. Not every painful tooth needs a root canal, and we check before recommending one.",
      },
      {
        title: "Anaesthesia",
        body: "The tooth and surrounding area are fully numbed. You should feel pressure, but not pain. Tell us if you feel anything sharp — we top up rather than push through.",
      },
      {
        title: "Isolation",
        body: "A rubber dam isolates the tooth, keeping saliva out of the canals. This step matters more for long-term success than most patients realise.",
      },
      {
        title: "Cleaning and shaping",
        body: "The infected pulp is removed and the canals are cleaned, disinfected and shaped with rotary instruments, working to the measured length of each root.",
      },
      {
        title: "Filling and sealing",
        body: "The canals are filled with an inert material and sealed so bacteria cannot re-enter.",
      },
      {
        title: "Crown",
        body: "A root-treated back tooth is brittle and needs a crown to protect it from fracture. Skipping this step is the most common reason a successful root canal fails later.",
      },
    ],
    benefits: [
      "Saves the natural tooth instead of extracting it",
      "Ends the pain that brought you in",
      "Prevents the infection spreading to bone and neighbouring teeth",
      "Preserves normal chewing and keeps adjacent teeth from drifting",
      "Substantially less costly over a lifetime than extraction followed by an implant",
    ],
    faqs: [
      {
        q: "Is a root canal painful?",
        a: "The procedure itself is not — the tooth is fully anaesthetised, and most patients are surprised by how uneventful it is. The pain people associate with root canals is the infection beforehand. That is what the treatment removes. Mild tenderness for a few days afterwards is normal and manageable with ordinary painkillers.",
      },
      {
        q: "Can it be finished in one visit?",
        a: "Often, yes. Single-visit root canal treatment is appropriate for many teeth. Cases with active swelling, heavy infection or complex canal anatomy are safer completed across two visits — Dr. Anuja will tell you which applies to your tooth and why.",
      },
      {
        q: "Do I really need a crown afterwards?",
        a: "For back teeth, almost always. A root-treated tooth has lost its internal blood supply and a significant amount of structure, which makes it liable to split under chewing forces. A crown holds it together. A tooth that fractures below the gum usually cannot be saved at all.",
      },
      {
        q: "How long does a root-treated tooth last?",
        a: "Well-treated and properly crowned, it can last decades — often for life. Longevity depends on the quality of the seal, the crown, and your ongoing oral hygiene.",
      },
      {
        q: "Is extraction not simpler than a root canal?",
        a: "Cheaper on the day, and more expensive afterwards. Losing a tooth means neighbouring teeth drift, the opposing tooth over-erupts, and bone in that area gradually resorbs. Replacing it with an implant or bridge costs considerably more than saving it would have.",
      },
    ],
    related: ["dental-crowns-bridges", "tooth-coloured-fillings", "dental-implants"],
    costFactors: [
      "Which tooth it is — a front tooth has one canal, a molar can have four, and the work scales with that",
      "Whether the tooth has been treated before, as re-treatment takes considerably longer",
      "The crown afterwards, which is a separate cost but not an optional one on a back tooth",
    ],
    comparison: {
      title: "Root canal or extraction?",
      intro:
        "Pulling the tooth is cheaper on the day. It is rarely cheaper over a lifetime, and it is never better for the mouth.",
      optionA: "Root canal + crown",
      optionB: "Extraction",
      rows: [
        { feature: "Keeps your natural tooth", a: "Yes", b: "No" },
        { feature: "Chewing", a: "Normal", b: "Reduced until replaced" },
        { feature: "Neighbouring teeth", a: "Stay in position", b: "Drift into the gap over time" },
        { feature: "Jawbone", a: "Preserved", b: "Shrinks where the tooth was" },
        { feature: "Cost on the day", a: "Higher", b: "Lower" },
        { feature: "Cost with replacement", a: "One-off", b: "Extraction, then implant or bridge later" },
        { feature: "Appointments", a: "1–2, plus a crown", b: "One" },
      ],
      verdict:
        "We recommend extraction when a tooth genuinely cannot be restored — a split root, or too little structure left to hold a crown. If it can be saved, saving it is almost always the better decision.",
    },
  },

  {
    slug: "dental-implants",
    name: "Dental Implants",
    heading: "Dental implants in Prayagraj",
    category: "Surgical",
    icon: "implant",
    featured: true,
    summary:
      "A permanent replacement for a missing tooth — a titanium root topped with a custom crown that looks and works like the original.",
    metaTitle: "Dental Implants in Prayagraj",
    metaDescription:
      "Dental implants in Civil Lines, Prayagraj. Replace missing teeth with a permanent titanium implant and custom crown. Consultation with digital planning.",
    image: "/images/treatments/dental-implants.webp",
    imageAlt:
      "A dental team examining a patient before implant treatment",
    clinicImage: "/images/clinic/itero-intraoral-scan.webp",
    clinicImageAlt: "iTero digital intraoral scan used for implant planning at Eclectic Dental Care",
    lead: "both",
    facts: [
      { label: "Longevity", value: "Decades with good care" },
      { label: "Timeline", value: "3 – 6 months total" },
      { label: "Success rate", value: "Over 95% in healthy patients" },
      { label: "Bone impact", value: "Preserves jawbone" },
    ],
    overview: [
      "A dental implant is a small titanium post placed into the jawbone to replace the root of a missing tooth. Bone fuses to its surface over a few months — a process called osseointegration — and a custom crown is then fitted on top.",
      "Unlike a bridge, an implant does not require cutting down the healthy teeth on either side. Unlike a denture, it does not move. It is the closest available replacement for a natural tooth, in both function and appearance.",
      "Implants also solve a problem that is invisible at first: when a tooth is lost, the bone that used to support it begins to shrink away. An implant loads that bone again and slows the loss.",
    ],
    signs: [
      "One or more missing teeth",
      "A tooth that cannot be saved and must be extracted",
      "A loose or uncomfortable partial denture",
      "You want to avoid cutting down healthy teeth for a bridge",
      "Difficulty chewing on one side because of a gap",
      "Neighbouring teeth have begun to tilt into a space",
    ],
    process: [
      {
        title: "Assessment and imaging",
        body: "We check bone volume, bone quality and the position of nerves and sinuses, and review your general health — diabetes control and smoking both affect healing and we will discuss them honestly.",
      },
      {
        title: "Digital planning",
        body: "The implant position is planned against your bite and the shape of the final crown, so the tooth is designed first and the implant placed to suit it.",
      },
      {
        title: "Implant placement",
        body: "A short procedure under local anaesthesia. Most patients report far less discomfort than they expected — usually less than an extraction.",
      },
      {
        title: "Healing",
        body: "Three to six months while bone integrates with the implant surface. A temporary tooth can be provided during this period where appearance matters.",
      },
      {
        title: "Abutment and impression",
        body: "Once integrated, a connector is fitted and a digital scan is taken for your final crown.",
      },
      {
        title: "Crown fitted",
        body: "The custom crown is matched to the shade and shape of your natural teeth and secured. You chew normally from that point.",
      },
    ],
    benefits: [
      "Does not damage or rely on the neighbouring healthy teeth",
      "Preserves jawbone that otherwise shrinks after tooth loss",
      "Fixed in place — no movement, no adhesives, no removal",
      "Restores close to natural biting force",
      "Cleaned like a natural tooth: brush and floss",
      "With good maintenance, can last decades",
    ],
    faqs: [
      {
        q: "Is implant surgery painful?",
        a: "The placement is done under local anaesthesia and you will not feel pain during it. Afterwards there is mild soreness and some swelling for a few days, controlled with ordinary painkillers. Most patients say it was easier than the extraction that preceded it.",
      },
      {
        q: "How long do dental implants last?",
        a: "The titanium implant itself can last decades and often a lifetime. The crown on top may need replacing after 10–15 years of wear, as any restoration would. Longevity depends heavily on gum health and hygiene — implants can be lost to gum disease just as teeth can.",
      },
      {
        q: "Am I a suitable candidate?",
        a: "Most healthy adults are. What matters is enough bone, healthy gums, and controlled general health. Uncontrolled diabetes, heavy smoking and active gum disease all reduce success rates and are addressed before we proceed. Where bone is insufficient, grafting is often possible.",
      },
      {
        q: "Implant, bridge or denture?",
        a: "An implant is the best long-term option in most single-tooth cases because it stands alone and preserves bone. A bridge is faster but requires cutting down two healthy teeth. A denture is the least expensive and the least stable. We will lay out the honest trade-offs for your specific situation.",
      },
      {
        q: "How long is the whole process?",
        a: "Typically three to six months from placement to final crown, because bone integration cannot be rushed. It is not a quick fix, but the wait is what produces a result that lasts.",
      },
    ],
    related: ["dental-crowns-bridges", "dentures-full-mouth-rehab", "wisdom-tooth-removal"],
    costFactors: [
      "The implant system used, and the crown material on top",
      "Whether a bone graft or sinus lift is needed to give the implant enough support",
      "How many teeth are being replaced — several implants can share a bridge rather than needing one each",
    ],
    comparison: {
      title: "Implant or bridge?",
      intro:
        "Two ways to replace a missing tooth, with genuinely different consequences for the teeth on either side of the gap.",
      optionA: "Dental implant",
      optionB: "Bridge",
      rows: [
        { feature: "Neighbouring teeth", a: "Untouched", b: "Both must be cut down for crowns" },
        { feature: "Jawbone", a: "Loads and preserves it", b: "Bone under the gap still shrinks" },
        { feature: "Lifespan", a: "Decades, often lifelong", b: "Typically 10–15 years" },
        { feature: "Time to complete", a: "3–6 months", b: "2–3 weeks" },
        { feature: "Surgery needed", a: "Yes, minor", b: "No" },
        { feature: "Cleaning", a: "Brush and floss as normal", b: "Needs threading under the false tooth" },
        { feature: "Upfront cost", a: "Higher", b: "Lower" },
        { feature: "Cost over 20 years", a: "Usually lower", b: "Usually higher — replacement cycles" },
      ],
      verdict:
        "An implant is the better long-term answer in most single-tooth cases. A bridge becomes the sensible choice when the neighbouring teeth already need crowns anyway, or when surgery is not an option.",
    },
  },

  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    heading: "Smile makeover in Prayagraj",
    category: "Cosmetic",
    icon: "sparkle",
    featured: true,
    summary:
      "A planned combination of treatments — alignment, shade, shape and gum line — designed around your face, not a template.",
    metaTitle: "Smile Makeover in Prayagraj",
    metaDescription:
      "Smile makeover and smile design in Civil Lines, Prayagraj. Veneers, whitening, alignment and gum contouring planned together by MDS specialists.",
    image: "/images/treatments/smile-makeover.webp",
    imageAlt:
      "A dentist holding a tooth shade guide against a patient's smile",
    clinicImage: "/images/clinic/dr-umang-invisalign-provider.webp",
    clinicImageAlt: "Dr. Umang Malviya at Eclectic Dental Care, a certified Invisalign provider in Prayagraj",
    lead: "both",
    facts: [
      { label: "Planned by", value: "Both specialists" },
      { label: "Timeline", value: "2 weeks – 12 months" },
      { label: "Approach", value: "Digital smile design" },
      { label: "Reversible?", value: "Depends on components" },
    ],
    overview: [
      "A smile makeover is not one procedure. It is a plan that combines whatever is needed — alignment, whitening, bonding, veneers, crowns, gum contouring — sequenced so the parts work together rather than against each other.",
      "The order matters enormously. Whitening before alignment wastes the whitening. Veneers placed on misaligned teeth need aggressive tooth reduction that a few months of orthodontics would have avoided. Getting the sequence right often means less treatment overall, not more.",
      "Because this clinic has both an orthodontist and an endodontist under one roof, we can plan the alignment and the restorative work together from the start.",
    ],
    signs: [
      "You dislike how your teeth look in photographs",
      "Discoloured, worn or chipped front teeth",
      "Gaps, crowding or teeth of uneven length",
      "A gummy smile, or an uneven gum line",
      "Old crowns or fillings that no longer match your teeth",
      "A wedding, interview or event you want to look your best for",
    ],
    process: [
      {
        title: "Listening first",
        body: "We ask what specifically bothers you. Patients are usually far more precise about this than they expect — and it is more useful than a generic assessment.",
      },
      {
        title: "Analysis",
        body: "Photographs, scans and a look at how your teeth relate to your lips, midline and face at rest and when smiling.",
      },
      {
        title: "Digital smile design",
        body: "A proposed design is prepared so you can see and respond to the plan before any tooth is touched.",
      },
      {
        title: "Foundation work",
        body: "Gum health, decay and any failing restorations are dealt with first. Cosmetic work over an unhealthy foundation does not last.",
      },
      {
        title: "Position, then shade, then shape",
        body: "Alignment where needed, then whitening, then the restorative work — in that order, so each step builds on the last.",
      },
      {
        title: "Refinement and retention",
        body: "Final adjustments to shape and bite, and retainers or a nightguard where the plan requires them.",
      },
    ],
    benefits: [
      "One coherent plan instead of disconnected procedures",
      "Sequencing that often reduces how much treatment you actually need",
      "You see the proposed result before committing",
      "Designed around your face and age, not a one-size template",
      "Both specialists contributing to the same plan",
    ],
    faqs: [
      {
        q: "How long does a smile makeover take?",
        a: "Anywhere from two weeks to a year. Whitening and bonding can be done quickly. If alignment is part of the plan, the orthodontic phase sets the timeline. We will tell you at consultation which category your case falls into.",
      },
      {
        q: "Will it look obviously fake?",
        a: "Not if it is planned properly. Uniform, blindingly white, identically-shaped teeth are what make cosmetic work look artificial. Natural teeth vary subtly in shade, length and translucency, and a good design reproduces that.",
      },
      {
        q: "Do I have to do everything at once?",
        a: "No. Many patients phase treatment over time for budget or scheduling reasons. What matters is that the sequence is planned from the start, so early stages do not have to be undone later.",
      },
      {
        q: "Is it reversible?",
        a: "It depends on the components. Whitening and orthodontics are conservative. Veneers and crowns involve permanently removing some tooth structure. We are explicit about which parts of your plan are irreversible before you agree to them.",
      },
    ],
    related: ["dental-veneers", "teeth-whitening", "invisalign-clear-aligners"],
    costFactors: [
      "Which components your plan actually needs — whitening and bonding sit at one end, full veneers at the other",
      "Whether alignment is part of it, since the orthodontic phase sets both cost and timeline",
      "How many teeth show when you smile, which decides how many need treating",
    ],
  },

  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    heading: "Professional teeth whitening in Prayagraj",
    category: "Cosmetic",
    icon: "sparkle",
    summary:
      "Supervised in-clinic and take-home whitening that lifts shade safely — without the enamel damage of DIY methods.",
    metaTitle: "Teeth Whitening in Prayagraj",
    metaDescription:
      "Professional teeth whitening in Civil Lines, Prayagraj. Safe, supervised in-clinic and take-home whitening by qualified dentists. Book a shade assessment.",
    image: "/images/treatments/teeth-whitening.webp",
    imageAlt:
      "A professional teeth whitening treatment being carried out in a dental chair",
    clinicImage: "/images/clinic/reception.webp",
    clinicImageAlt: "Reception at Eclectic Dental Care, Civil Lines, Prayagraj",
    lead: "anuja",
    facts: [
      { label: "In-clinic session", value: "About 60–90 minutes" },
      { label: "Take-home kit", value: "10–14 nights" },
      { label: "Typical lift", value: "Several shades" },
      { label: "Lasts", value: "6 months – 2 years" },
    ],
    overview: [
      "Professional whitening uses a controlled peroxide gel to lift stain from within the enamel. It is done either in a single supervised clinic session, with custom take-home trays, or as a combination of both.",
      "The difference between this and a supermarket kit is control. We check first that the discolouration will actually respond to bleaching, protect your gums during the process, and use a concentration matched to your sensitivity.",
      "Whitening does not lighten crowns, veneers or composite fillings. If you have visible restorations on your front teeth, they will stay their original shade — which is exactly why the sequence of a smile plan matters.",
    ],
    signs: [
      "Teeth have yellowed gradually with age",
      "Staining from tea, coffee, red wine or tobacco",
      "You want a lift before a wedding, interview or event",
      "Teeth look dull in photographs",
      "Over-the-counter kits have not made a difference",
    ],
    process: [
      {
        title: "Shade assessment",
        body: "We record your current shade and identify what is causing the discolouration. Some staining is on the surface, some is internal — and they respond very differently.",
      },
      {
        title: "Cleaning first",
        body: "Scaling and polishing is done before whitening. A surprising amount of apparent discolouration is surface deposit, and removing it sometimes makes bleaching unnecessary.",
      },
      {
        title: "Gum protection",
        body: "A barrier is applied to isolate the gums before any gel touches the teeth.",
      },
      {
        title: "Whitening",
        body: "Either an in-clinic session or custom trays with gel to use at home, depending on your sensitivity and schedule.",
      },
      {
        title: "Review and maintenance",
        body: "We check the result, and advise on which habits will shorten it. Occasional top-ups with your trays keep the shade stable.",
      },
    ],
    benefits: [
      "Noticeably brighter within one session or a short course",
      "Supervised — your gums and enamel are protected throughout",
      "Sensitivity is managed rather than endured",
      "Custom trays fit properly, so gel does not leak onto the gums",
      "Top-up gel keeps the result going for years",
    ],
    faqs: [
      {
        q: "Does whitening damage enamel?",
        a: "Professionally supervised whitening at correct concentrations does not damage enamel. What causes damage is unsupervised use of high-strength or unregulated products, and abrasive DIY methods such as charcoal, baking soda or lemon juice — those physically wear enamel away, permanently.",
      },
      {
        q: "Will my teeth become sensitive?",
        a: "Some temporary sensitivity to cold is common during and just after treatment, and it settles within a few days. We can lower the gel concentration, shorten sessions, or use desensitising agents if you are prone to it.",
      },
      {
        q: "How long will it last?",
        a: "Typically six months to two years. It depends almost entirely on habits — tea, coffee, tobacco and red wine will pull the shade back faster. Occasional top-ups with your take-home trays maintain it.",
      },
      {
        q: "Will my crowns and fillings whiten too?",
        a: "No. Whitening only works on natural tooth structure. Existing crowns, veneers and composite fillings keep their current shade, which can leave them looking darker afterwards. If you have visible restorations, we plan whitening first and replace them to match after.",
      },
    ],
    related: ["smile-makeover", "scaling-and-polishing", "dental-veneers"],
    costFactors: [
      "In-clinic session, take-home trays, or a combination of both",
      "How much lift your starting shade needs",
      "Whether existing crowns or fillings on front teeth will need replacing afterwards to match",
    ],
  },

  {
    slug: "dental-veneers",
    name: "Veneers",
    heading: "Dental veneers in Prayagraj",
    category: "Cosmetic",
    icon: "layers",
    summary:
      "Thin ceramic or composite facings that correct shape, shade and small gaps on the teeth that show when you smile.",
    metaTitle: "Dental Veneers in Prayagraj",
    metaDescription:
      "Ceramic and composite dental veneers in Civil Lines, Prayagraj. Correct chipped, stained, gapped or uneven front teeth. Book a smile consultation.",
    image: "/images/treatments/dental-veneers.webp",
    imageAlt:
      "A dentist fitting a dental veneer to a front tooth",
    clinicImage: "/images/clinic/invisalign-clincheck.webp",
    clinicImageAlt: "Digital treatment planning at Eclectic Dental Care, Prayagraj",
    lead: "anuja",
    facts: [
      { label: "Materials", value: "Porcelain · Composite" },
      { label: "Visits", value: "2 – 3 for porcelain" },
      { label: "Lifespan", value: "10 – 15 years (porcelain)" },
      { label: "Reversible?", value: "No — enamel is reduced" },
    ],
    overview: [
      "A veneer is a thin facing bonded to the front of a tooth. It changes colour, shape, length and small positional flaws in one step, which is why veneers are so often the final piece of a smile makeover.",
      "Porcelain veneers are made in a laboratory, resist staining well, and reflect light much like natural enamel. Composite veneers are built up directly in the mouth in a single visit, cost less, and are easier to repair — but they stain over time and do not last as long.",
      "Veneers are not a shortcut around orthodontics. Using them to mask significantly crooked teeth means cutting away far more healthy enamel than is justifiable. Where teeth need moving, we move them first.",
    ],
    signs: [
      "Chipped or worn front teeth",
      "Deep internal staining that whitening cannot lift",
      "Small gaps between the front teeth",
      "Teeth that are misshapen or uneven in length",
      "Old composite bonding that has discoloured at the edges",
    ],
    process: [
      {
        title: "Design consultation",
        body: "We assess your bite, gum line and lip position, and agree the shape and shade you want. Photographs and a digital design make the target concrete.",
      },
      {
        title: "Preparation",
        body: "A very thin layer of enamel is removed so the veneer sits flush rather than bulking the tooth outwards. How much depends on the case — sometimes almost none.",
      },
      {
        title: "Scan and temporaries",
        body: "A digital scan goes to the laboratory. Temporary veneers protect the teeth and let you live with the proposed shape.",
      },
      {
        title: "Try-in",
        body: "The finished veneers are tried before bonding, so shade and shape can be checked in your own mouth, in daylight.",
      },
      {
        title: "Bonding",
        body: "Veneers are bonded permanently and the bite is checked and adjusted.",
      },
    ],
    benefits: [
      "Changes colour, shape and minor position in one treatment",
      "Porcelain resists staining better than natural enamel",
      "Conservative compared with full crowns — less tooth removed",
      "Results are highly predictable because they are designed in advance",
      "You approve the shape while wearing temporaries",
    ],
    faqs: [
      {
        q: "Do veneers ruin your natural teeth?",
        a: "They require permanently removing a thin layer of enamel, which does not grow back — so the tooth will always need a veneer or crown from then on. That is a real commitment, and we will say so plainly. Where a more conservative option would achieve what you want, we recommend that instead.",
      },
      {
        q: "How long do veneers last?",
        a: "Porcelain veneers typically last 10–15 years, sometimes longer. Composite veneers last around 5–7 years and are more prone to staining and chipping, but are cheaper and simpler to repair.",
      },
      {
        q: "Porcelain or composite?",
        a: "Porcelain looks better, lasts longer and stains less — at a higher cost and over more visits. Composite is done in one visit, costs less, and is easily repaired. If you grind your teeth or want maximum longevity, porcelain is the better investment.",
      },
      {
        q: "Will they look natural?",
        a: "Yes, when designed with variation. Natural teeth are not uniform: they differ subtly in translucency, length and surface texture. Veneers made to mimic that read as real; veneers made identical and opaque do not.",
      },
    ],
    related: ["smile-makeover", "teeth-whitening", "dental-crowns-bridges"],
    costFactors: [
      "Porcelain or composite — porcelain is lab-made and lasts longer, composite is chairside and costs less",
      "How many teeth are being veneered",
      "Whether any preparatory work is needed first",
    ],
    comparison: {
      title: "Porcelain or composite veneers?",
      intro:
        "Both are thin facings bonded to the front of the tooth. What differs is how long they last, how they age, and what they cost.",
      optionA: "Porcelain",
      optionB: "Composite",
      rows: [
        { feature: "Lifespan", a: "10–15 years, often longer", b: "5–7 years" },
        { feature: "Staining", a: "Resists stain better than enamel", b: "Picks up stain over time" },
        { feature: "Appearance", a: "Translucent, closest to real enamel", b: "Good, slightly flatter" },
        { feature: "Visits", a: "2–3, lab-made", b: "Usually one, built in the mouth" },
        { feature: "Repairable", a: "Usually replaced if damaged", b: "Easily patched chairside" },
        { feature: "Tooth removed", a: "A thin layer of enamel", b: "Often minimal or none" },
        { feature: "Cost", a: "Higher", b: "Lower" },
      ],
      verdict:
        "If you grind your teeth or want maximum longevity, porcelain is the better investment. Composite is the right call for a smaller budget, a single chipped tooth, or a more conservative first step.",
    },
  },

  {
    slug: "dental-crowns-bridges",
    name: "Crowns & Bridges",
    heading: "Dental crowns and bridges in Prayagraj",
    category: "Restorative",
    icon: "crown",
    summary:
      "Zirconia and ceramic crowns that rebuild a damaged tooth, and bridges that close a gap using the teeth on either side.",
    metaTitle: "Dental Crowns & Bridges in Prayagraj",
    metaDescription:
      "Zirconia and ceramic dental crowns and bridges in Civil Lines, Prayagraj. Protect root-treated teeth and replace missing teeth. Book a consultation.",
    image: "/images/treatments/dental-crowns-bridges.webp",
    imageAlt:
      "A dentist examining a patient's teeth before fitting a crown",
    clinicImage: "/images/clinic/itero-intraoral-scan.webp",
    clinicImageAlt: "Digital scan used for crown and bridge design at Eclectic Dental Care",
    lead: "anuja",
    facts: [
      { label: "Materials", value: "Zirconia · E-max · PFM" },
      { label: "Visits", value: "2 typically" },
      { label: "Lifespan", value: "10 – 20 years" },
      { label: "Digital impression", value: "Yes — iTero scanner" },
    ],
    overview: [
      "A crown is a cap that covers a tooth completely, restoring its shape and protecting what remains. It is what holds a heavily broken or root-treated tooth together and lets it survive normal chewing forces.",
      "A bridge replaces a missing tooth by joining crowns on the teeth either side of the gap, with a false tooth suspended between them. It is fixed in place and does not come out.",
      "We take digital impressions using the iTero scanner rather than impression putty, which is more comfortable and produces a more accurate fit at the margin — and margin fit is what decides whether decay creeps back under a crown years later.",
    ],
    signs: [
      "A tooth that has had root canal treatment",
      "A large old filling that keeps chipping or has cracked",
      "A tooth broken by trauma or decay",
      "A cracked tooth that hurts on release of biting pressure",
      "A missing tooth with healthy teeth on both sides",
      "An old metal crown you want replaced with something tooth-coloured",
    ],
    process: [
      {
        title: "Assessment",
        body: "We check how much sound tooth structure remains and whether a crown is the right answer — sometimes a smaller onlay or a filling is enough.",
      },
      {
        title: "Preparation",
        body: "The tooth is shaped under local anaesthesia to make room for the crown material.",
      },
      {
        title: "Digital scan",
        body: "An iTero scan captures the preparation and your bite, and goes to the laboratory electronically.",
      },
      {
        title: "Temporary crown",
        body: "A temporary protects the tooth and keeps you comfortable and presentable while the permanent one is made.",
      },
      {
        title: "Fit and cement",
        body: "Fit, contact points, shade and bite are all checked before the crown is permanently cemented.",
      },
    ],
    benefits: [
      "Protects a weakened tooth from splitting",
      "Restores full chewing function",
      "Zirconia and ceramic options with no dark metal line at the gum",
      "Digital impressions mean a more accurate fit and less discomfort",
      "A bridge replaces a missing tooth without surgery",
    ],
    faqs: [
      {
        q: "Which crown material is best?",
        a: "Zirconia is extremely strong and the usual choice for back teeth. E-max (lithium disilicate) is more translucent and looks better on front teeth. Metal-ceramic still works well but can show a dark line at the gum over time. We recommend based on which tooth it is and how heavily you bite.",
      },
      {
        q: "How long do crowns last?",
        a: "Typically 10–20 years. Longevity depends on the accuracy of the fit, your bite, and whether you clean thoroughly at the gum margin — decay under a crown is the most common reason one fails.",
      },
      {
        q: "Crown or bridge or implant for a missing tooth?",
        a: "An implant is usually the better long-term option because it stands independently and preserves bone. A bridge is faster and needs no surgery, but requires cutting down two healthy teeth. If those neighbouring teeth already need crowns anyway, a bridge becomes a sensible choice.",
      },
      {
        q: "Does getting a crown hurt?",
        a: "No. The tooth is anaesthetised for the preparation appointment. Some sensitivity between the temporary and final crown is normal and settles once the permanent one is cemented.",
      },
    ],
    related: ["root-canal-treatment", "dental-implants", "dental-veneers"],
    costFactors: [
      "Crown material — zirconia, E-max and metal-ceramic sit at different price points",
      "Whether the tooth needs building up before the crown can be fitted",
      "For a bridge, how many units it spans",
    ],
    comparison: {
      title: "Zirconia or metal-ceramic crown?",
      intro:
        "The crown material changes how it looks at the gum line and how it behaves under a heavy bite.",
      optionA: "Zirconia / E-max",
      optionB: "Metal-ceramic",
      rows: [
        { feature: "Dark line at gum", a: "None — no metal core", b: "Can appear as gums recede" },
        { feature: "Appearance", a: "Translucent, natural", b: "Good, slightly opaque" },
        { feature: "Strength", a: "Very high", b: "High" },
        { feature: "Best for", a: "Front and back teeth", b: "Back teeth, tighter budgets" },
        { feature: "Cost", a: "Higher", b: "Lower" },
      ],
      verdict:
        "For anything visible when you smile, zirconia or E-max is worth the difference. For an out-of-sight molar under a heavy bite, metal-ceramic still does a perfectly good job.",
    },
  },

  {
    slug: "kids-dentistry",
    name: "Kids Dentistry",
    heading: "Kids dentistry in Prayagraj",
    category: "Family",
    icon: "child",
    summary:
      "Gentle, unhurried care for children — from first check-up and fluoride to sealants, and early orthodontic assessment.",
    metaTitle: "Kids Dentist in Prayagraj",
    metaDescription:
      "Children's dentistry in Civil Lines, Prayagraj. Gentle check-ups, fluoride, sealants and early orthodontic assessment for a calm first visit.",
    image: "/images/treatments/kids-dentistry.webp",
    imageAlt:
      "A smiling child in the dental chair during a check-up",
    clinicImage: "/images/clinic/operatory-chairs.webp",
    clinicImageAlt: "Child-friendly treatment area at Eclectic Dental Care, Prayagraj",
    lead: "both",
    facts: [
      { label: "First visit", value: "By age 1, or first tooth" },
      { label: "Ortho screening", value: "From age 7" },
      { label: "Check-ups", value: "Every 6 months" },
      { label: "Approach", value: "Tell – show – do" },
    ],
    overview: [
      "How a child's first few dental visits go tends to shape how they feel about dentists for the rest of their life. We take that seriously. First appointments are short, unhurried, and often involve nothing more than a ride in the chair and a count of the teeth.",
      "Baby teeth matter more than most parents are told. They hold space for the adult teeth arriving behind them, and losing one early can cause crowding that later needs braces to fix. They are also capable of causing serious pain and infection when decayed.",
      "Because there is an orthodontist in the practice, developing bite problems get spotted at the age when guiding jaw growth is still an option — rather than after the window has closed.",
    ],
    signs: [
      "Your child has never seen a dentist",
      "Visible brown or white spots on the teeth",
      "Complaints of toothache or sensitivity",
      "Thumb-sucking or prolonged bottle use",
      "Adult teeth erupting behind or in front of baby teeth",
      "Crowded adult teeth appearing, or a bite that looks wrong",
      "A knocked or chipped tooth after a fall",
    ],
    process: [
      {
        title: "A gentle introduction",
        body: "The first visit is about familiarity, not treatment. We explain each instrument before using it, in language a child understands.",
      },
      {
        title: "Examination",
        body: "A check of all erupted teeth, the gums and how the bite is developing, with X-rays only if genuinely necessary.",
      },
      {
        title: "Cleaning and fluoride",
        body: "A gentle polish and a fluoride application that strengthens enamel against decay.",
      },
      {
        title: "Sealants where needed",
        body: "The deep grooves of newly erupted back molars are where decay usually starts. A sealant closes them off — quick, painless, no drilling.",
      },
      {
        title: "Treatment if required",
        body: "Fillings or pulp treatment done in short, calm appointments, with the approach matched to the child rather than the clock.",
      },
      {
        title: "Growth monitoring",
        body: "From around age 7 we watch how the jaws and adult teeth are developing, and flag anything that would benefit from early intervention.",
      },
    ],
    benefits: [
      "Builds a positive association with dental care early",
      "Sealants and fluoride prevent decay rather than treating it later",
      "Bite problems caught while growth can still be guided",
      "Baby teeth preserved so adult teeth have room to come through",
      "Practical guidance for parents on brushing, diet and habits",
    ],
    faqs: [
      {
        q: "When should my child first see a dentist?",
        a: "By their first birthday, or within six months of the first tooth appearing. That sounds early, and the visit is short — but it establishes the habit and lets us catch early decay when it is still reversible.",
      },
      {
        q: "Do decayed baby teeth need treating if they will fall out anyway?",
        a: "Yes. A decayed baby tooth can cause real pain and infection, and can damage the developing adult tooth underneath. Losing one too early also allows neighbouring teeth to drift into the space, which frequently leads to crowding that needs braces later.",
      },
      {
        q: "My child is terrified of dentists. What can you do?",
        a: "Go slowly. We use a tell–show–do approach, keep first visits free of treatment, and let the child set some of the pace. It helps a great deal if parents avoid words like 'pain', 'injection' or 'it won't hurt' beforehand — children hear the words, not the reassurance.",
      },
      {
        q: "Are dental X-rays safe for children?",
        a: "Modern digital dental X-rays use a very small dose, and we only take them when the information will actually change what we do. Protective shielding is used as standard.",
      },
    ],
    related: ["tooth-coloured-fillings", "braces-orthodontic-treatment", "scaling-and-polishing"],
    costFactors: [
      "Whether the visit is a check-up and fluoride, or actual treatment",
      "How many teeth are involved, and whether sealants are being placed",
      "Whether an early orthodontic assessment is included",
    ],
  },

  {
    slug: "gum-disease-treatment",
    name: "Gum Treatment",
    heading: "Gum disease treatment in Prayagraj",
    category: "Preventive",
    icon: "shield",
    summary:
      "Treatment for bleeding, receding or infected gums — the leading cause of adult tooth loss, and largely preventable.",
    metaTitle: "Gum Disease Treatment in Prayagraj",
    metaDescription:
      "Gum disease and bleeding gums treatment in Civil Lines, Prayagraj. Deep cleaning, scaling and root planing for gingivitis and periodontitis.",
    image: "/images/treatments/gum-disease-treatment.webp",
    imageAlt:
      "A dentist examining a patient's gums during a periodontal assessment",
    clinicImage: "/images/clinic/operatory-wide.webp",
    clinicImageAlt: "Treatment room at Eclectic Dental Care, Civil Lines, Prayagraj",
    lead: "anuja",
    facts: [
      { label: "Early stage", value: "Gingivitis — reversible" },
      { label: "Advanced", value: "Periodontitis — manageable" },
      { label: "Main sign", value: "Bleeding when brushing" },
      { label: "Leading cause of", value: "Adult tooth loss" },
    ],
    overview: [
      "Gum disease begins quietly. Bacterial plaque hardens into calculus at the gum line, the gums become inflamed, and they bleed when brushed. At this stage — gingivitis — it is entirely reversible.",
      "Left alone, the inflammation spreads below the gum and starts destroying the bone that holds teeth in place. This is periodontitis, and the bone lost does not grow back. It is the single largest cause of tooth loss in adults, and it is usually painless until it is advanced.",
      "Bleeding gums are not normal. Healthy gums do not bleed when brushed, any more than healthy skin bleeds when washed. If yours do, that is the sign worth acting on.",
    ],
    signs: [
      "Gums bleed when brushing or flossing",
      "Persistent bad breath or a bad taste",
      "Red, swollen or tender gums",
      "Gums pulling away, making teeth look longer",
      "Sensitivity at the gum line where roots are exposed",
      "Teeth that feel loose or have shifted position",
      "Pus at the gum margin",
    ],
    process: [
      {
        title: "Periodontal assessment",
        body: "We measure pocket depths around each tooth and check bone levels on X-ray. This gives an objective baseline rather than an impression.",
      },
      {
        title: "Scaling",
        body: "Ultrasonic removal of hardened calculus above and at the gum line.",
      },
      {
        title: "Root planing",
        body: "For deeper pockets, cleaning of the root surfaces below the gum to remove the deposits that keep the inflammation going. Done under local anaesthesia where needed.",
      },
      {
        title: "Technique coaching",
        body: "The largest factor in the outcome is what happens at home. We show you exactly where you are missing, using your own mouth rather than a chart.",
      },
      {
        title: "Re-evaluation",
        body: "We remeasure after healing to confirm the pockets have responded. Sites that have not may need further treatment or referral.",
      },
      {
        title: "Maintenance",
        body: "Periodontitis is controlled rather than cured. A recall interval — usually three to six months — keeps it stable.",
      },
    ],
    benefits: [
      "Stops bleeding gums, usually within weeks",
      "Halts the bone loss that ends in losing teeth",
      "Resolves the bad breath that gum infection causes",
      "Protects the investment in any crowns, implants or orthodontics",
      "Healthy gums are a prerequisite for cosmetic work lasting",
    ],
    faqs: [
      {
        q: "Is it normal for gums to bleed when brushing?",
        a: "No. Bleeding is a sign of inflammation, and it is the earliest warning of gum disease. It is also the stage at which the condition is completely reversible, which is why it is worth acting on rather than ignoring.",
      },
      {
        q: "Does scaling loosen teeth or damage enamel?",
        a: "No — this is a common and persistent myth. Scaling removes hardened deposits, it does not remove tooth structure. Teeth can feel slightly different afterwards because the calculus that was splinting them is gone, and gaps may appear where swollen gum has shrunk back to health. Both are signs of improvement, not damage.",
      },
      {
        q: "Can gum disease be cured?",
        a: "Gingivitis can be fully reversed. Periodontitis cannot — the bone already lost does not regenerate. But it can be stopped and kept stable indefinitely with treatment and regular maintenance. Early treatment is what determines which of the two you are dealing with.",
      },
      {
        q: "How often should I have a professional cleaning?",
        a: "Every six months for most people. If you have had periodontitis, or you smoke or have diabetes, a three to four month interval is usually necessary to keep it under control.",
      },
    ],
    related: ["scaling-and-polishing", "dental-implants", "root-canal-treatment"],
    costFactors: [
      "How advanced it is — a routine clean is very different from root planing under anaesthesia",
      "How many quadrants of the mouth need deep cleaning",
      "The maintenance interval afterwards, which is usually three to six monthly",
    ],
  },

  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    heading: "Wisdom tooth removal in Prayagraj",
    category: "Surgical",
    icon: "extract",
    summary:
      "Assessment and surgical removal of impacted or painful wisdom teeth, with clear aftercare.",
    metaTitle: "Wisdom Tooth Removal in Prayagraj",
    metaDescription:
      "Wisdom tooth removal in Civil Lines, Prayagraj. Assessment and extraction of impacted wisdom teeth under local anaesthesia. Book a consultation.",
    image: "/images/treatments/wisdom-tooth-removal.webp",
    imageAlt:
      "A dentist in protective gear performing a surgical extraction",
    clinicImage: "/images/clinic/operatory-chairs.webp",
    clinicImageAlt: "Surgical treatment room at Eclectic Dental Care, Prayagraj",
    lead: "both",
    facts: [
      { label: "Anaesthesia", value: "Local" },
      { label: "Procedure time", value: "20 – 45 minutes" },
      { label: "Initial recovery", value: "2 – 3 days" },
      { label: "Typical age", value: "17 – 25" },
    ],
    overview: [
      "Wisdom teeth are the last molars to erupt, usually between 17 and 25. By then there is often not enough room left in the jaw, and the tooth becomes impacted — stuck at an angle against the tooth in front, or trapped partly under the gum.",
      "A partly erupted wisdom tooth is difficult to clean and easy to infect, which causes the swelling and severe pain most people associate with them. It can also decay the healthy molar it is pressed against.",
      "Not every wisdom tooth needs removing. One that has erupted fully, sits in a normal position and can be cleaned is best left alone. We take an X-ray and give you a straight answer either way.",
    ],
    signs: [
      "Pain or pressure at the back of the jaw",
      "Swollen, red or infected gum over a partly erupted tooth",
      "Difficulty opening the mouth fully",
      "Bad taste or pus around the back molars",
      "Repeated food trapping behind the last molar",
      "Decay in the wisdom tooth or the molar in front of it",
      "Persistent jaw or referred ear pain on one side",
    ],
    process: [
      {
        title: "X-ray assessment",
        body: "An OPG shows the angle of the tooth, its root shape, and its relationship to the nerve in the lower jaw. This determines how the extraction is approached.",
      },
      {
        title: "Planning and consent",
        body: "We explain what is involved, the recovery, and the specific risks for your case before you decide.",
      },
      {
        title: "Anaesthesia",
        body: "The area is fully numbed. You feel pressure and movement, but not pain.",
      },
      {
        title: "Removal",
        body: "Straightforward teeth come out whole; impacted ones are usually sectioned and removed in pieces, which is gentler on the surrounding bone.",
      },
      {
        title: "Sutures and aftercare",
        body: "Stitches where needed, and written aftercare instructions — the recovery goes considerably better when they are followed.",
      },
      {
        title: "Review",
        body: "A check on healing, and removal of any non-dissolving stitches.",
      },
    ],
    benefits: [
      "Ends recurrent infection and pain",
      "Protects the healthy molar in front from decay and damage",
      "Prevents cysts that can form around impacted teeth",
      "Removes a site that is impossible to keep properly clean",
      "Recovery is usually far quicker than patients expect",
    ],
    faqs: [
      {
        q: "Does wisdom tooth removal hurt?",
        a: "Not during the procedure — the area is fully anaesthetised, and you feel pressure rather than pain. Afterwards there is soreness and swelling that peaks around day two and settles over three to five days, managed with prescribed painkillers.",
      },
      {
        q: "Do all wisdom teeth need to come out?",
        a: "No. A wisdom tooth that has erupted straight, has an opposing tooth to bite against, and can be cleaned properly should be kept. Removal is for teeth that are impacted, repeatedly infected, decayed, or damaging the molar in front.",
      },
      {
        q: "How long is the recovery?",
        a: "Most people are comfortable within two to three days and back to normal within a week. Soft food, no smoking, no rinsing hard for the first 24 hours, and no straws — these matter, because dislodging the clot causes a painful dry socket.",
      },
      {
        q: "Can both sides be done at once?",
        a: "Yes, and many patients prefer it — one recovery period instead of two. If chewing comfort during recovery is a priority, doing one side at a time is the alternative. It is your call.",
      },
    ],
    related: ["dental-implants", "root-canal-treatment", "gum-disease-treatment"],
    costFactors: [
      "Whether the tooth is fully erupted or impacted in the bone",
      "Whether it is a surgical extraction requiring sectioning and sutures",
      "How many are being removed, and whether in one appointment or several",
    ],
  },

  {
    slug: "tooth-coloured-fillings",
    name: "Tooth-Coloured Fillings",
    heading: "Tooth-coloured fillings in Prayagraj",
    category: "Restorative",
    icon: "filling",
    summary:
      "Composite fillings matched to your tooth shade — repairing decay without a visible metal patch.",
    metaTitle: "Tooth-Coloured Fillings in Prayagraj",
    metaDescription:
      "Tooth-coloured composite fillings in Civil Lines, Prayagraj. Treat cavities discreetly with shade-matched restorations. Same-week appointments available.",
    image: "/images/treatments/tooth-coloured-fillings.webp",
    imageAlt:
      "A dentist positioning the treatment light before placing a filling",
    clinicImage: "/images/clinic/operatory-wide.webp",
    clinicImageAlt: "Restorative dentistry setup at Eclectic Dental Care, Prayagraj",
    lead: "anuja",
    facts: [
      { label: "Appointment", value: "30 – 45 minutes" },
      { label: "Visits", value: "Usually one" },
      { label: "Material", value: "Composite resin" },
      { label: "Visible?", value: "Shade-matched" },
    ],
    overview: [
      "A filling repairs a tooth damaged by decay. The decayed tissue is removed, and the space is rebuilt with a composite resin bonded directly to the remaining tooth and matched to its shade.",
      "Composite has largely replaced amalgam for good reasons beyond appearance. It bonds to the tooth rather than merely sitting in it, which means less healthy structure has to be removed to hold it in place.",
      "Cavities do not heal. Treated early, a filling is a short, straightforward appointment. Left long enough, the same tooth needs a root canal and a crown — the same problem, at several times the cost and inconvenience.",
    ],
    signs: [
      "A visible hole, pit or dark spot on a tooth",
      "Sensitivity to sweet, hot or cold",
      "Food consistently packing into one particular spot",
      "A rough or catching edge you can feel with your tongue",
      "An old filling that has chipped, worn or come out",
      "Decay flagged at a routine check-up",
    ],
    process: [
      {
        title: "Diagnosis",
        body: "Examination and, where needed, a bitewing X-ray to see decay between the teeth that is not visible directly.",
      },
      {
        title: "Anaesthesia",
        body: "Used for anything deep. Very small surface cavities can often be done without it.",
      },
      {
        title: "Removing decay",
        body: "Only the affected tissue is taken out. Sound tooth structure is conserved wherever possible.",
      },
      {
        title: "Bonding and layering",
        body: "The composite is placed and cured in layers, which controls shrinkage and produces a stronger, better-sealed restoration.",
      },
      {
        title: "Shaping and polishing",
        body: "The filling is shaped to your natural anatomy, the bite is checked, and the surface is polished so it resists staining.",
      },
    ],
    benefits: [
      "Matched to your tooth shade — no visible metal",
      "Bonds to the tooth, so less healthy structure is removed",
      "Usually completed in a single appointment",
      "Strengthens the remaining tooth rather than wedging it apart",
      "No mercury content",
    ],
    faqs: [
      {
        q: "How long do composite fillings last?",
        a: "Typically 5–10 years, sometimes considerably longer. Lifespan depends on the size of the filling, where it is, your bite, and your hygiene. Large fillings in heavy-chewing molars work harder and are replaced sooner.",
      },
      {
        q: "Does getting a filling hurt?",
        a: "No. The tooth is numbed for anything more than a superficial cavity. Some sensitivity to cold for a few days afterwards is normal, particularly with deeper fillings.",
      },
      {
        q: "Should I replace my old silver amalgam fillings?",
        a: "Not automatically. An amalgam filling that is intact, sealed and not causing problems is best left alone — replacing it means removing more tooth. We recommend replacement when it is cracked, leaking, decayed underneath, or when you specifically want the appearance changed.",
      },
      {
        q: "My tooth does not hurt. Do I still need it filled?",
        a: "Usually yes. Decay does not produce pain until it approaches the nerve, so a painless cavity is simply one caught early. That is the ideal time to treat it — a filling now instead of a root canal later.",
      },
    ],
    related: ["root-canal-treatment", "scaling-and-polishing", "kids-dentistry"],
    costFactors: [
      "How large the cavity is, and how many surfaces of the tooth it involves",
      "Whether the decay is deep enough to need a protective lining first",
      "How many teeth need filling",
    ],
  },

  {
    slug: "scaling-and-polishing",
    name: "Scaling & Polishing",
    heading: "Teeth cleaning, scaling and polishing in Prayagraj",
    category: "Preventive",
    icon: "shield",
    summary:
      "Professional cleaning that removes hardened tartar and surface stain — the single most cost-effective dental appointment there is.",
    metaTitle: "Teeth Cleaning & Scaling in Prayagraj",
    metaDescription:
      "Professional teeth cleaning, scaling and polishing in Civil Lines, Prayagraj. Remove tartar and stain, prevent gum disease. Book a six-monthly clean.",
    image: "/images/treatments/scaling-and-polishing.webp",
    imageAlt:
      "A dental professional carrying out a scaling and polishing clean",
    clinicImage: "/images/clinic/reception.webp",
    clinicImageAlt: "Eclectic Dental Care clinic interior, Civil Lines, Prayagraj",
    lead: "both",
    facts: [
      { label: "Appointment", value: "About 30–45 minutes" },
      { label: "Recommended", value: "Every 6 months" },
      { label: "Anaesthesia", value: "Rarely needed" },
      { label: "Prevents", value: "Gum disease · Decay" },
    ],
    overview: [
      "Plaque that is not removed within a day or two hardens into calculus — tartar — which brushing cannot shift. It has to be removed with instruments, and that is what scaling does.",
      "Polishing follows, removing surface stain from tea, coffee and tobacco, and leaving the enamel smooth so new plaque adheres less readily.",
      "This is the least glamorous appointment in dentistry and by some distance the most valuable. Consistent six-monthly cleaning prevents most of the expensive problems that bring people in later.",
    ],
    signs: [
      "Six months or more since your last cleaning",
      "Visible yellow or brown deposits at the gum line",
      "Gums that bleed when you brush",
      "Persistent bad breath",
      "Surface staining from tea, coffee or tobacco",
      "A rough film on the teeth that brushing does not remove",
    ],
    process: [
      {
        title: "Examination",
        body: "A check of teeth and gums first — a cleaning appointment is also the appointment at which problems get caught early.",
      },
      {
        title: "Ultrasonic scaling",
        body: "Vibration and water break tartar away from the tooth surface, above and just below the gum line.",
      },
      {
        title: "Hand instrumentation",
        body: "Fine hand instruments finish areas the ultrasonic tip cannot reach cleanly.",
      },
      {
        title: "Polishing",
        body: "A prophylaxis paste removes surface stain and leaves the enamel smooth.",
      },
      {
        title: "Advice",
        body: "We show you the specific spots you are consistently missing. Generic brushing advice helps far less than knowing your own blind spots.",
      },
    ],
    benefits: [
      "Removes the tartar that causes gum disease",
      "Visibly lifts surface staining",
      "Fresher breath",
      "Early detection of decay and gum problems",
      "By a wide margin the cheapest way to avoid expensive treatment later",
    ],
    faqs: [
      {
        q: "Does scaling damage or weaken teeth?",
        a: "No. This is the most common misconception in dentistry. Scaling removes hardened deposits from the tooth surface; it does not remove enamel. Teeth may feel different afterwards because the tartar is gone, and small gaps can appear where inflamed gum has shrunk back to a healthy size — both indicate improvement.",
      },
      {
        q: "Is it painful?",
        a: "Usually not. There can be some sensitivity if your gums are already inflamed or roots are exposed, and local anaesthesia is available if you need it. Most patients need nothing.",
      },
      {
        q: "How often should I have it done?",
        a: "Every six months for most adults. Every three to four months if you smoke, have diabetes, or have a history of gum disease.",
      },
      {
        q: "Will it whiten my teeth?",
        a: "It removes surface stain, so teeth usually look noticeably brighter and cleaner. It does not change the natural internal shade of the tooth — that requires whitening, which is a separate treatment.",
      },
    ],
    related: ["gum-disease-treatment", "teeth-whitening", "tooth-coloured-fillings"],
    costFactors: [
      "How much hardened deposit there is, which depends on how long since the last clean",
      "Whether it is a routine clean or extends below the gum line",
      "By a distance the least expensive appointment we offer, and the one that prevents the expensive ones",
    ],
  },

  {
    slug: "dentures-full-mouth-rehab",
    name: "Dentures & Full Mouth Rehab",
    heading: "Dentures and full mouth rehabilitation in Prayagraj",
    category: "Restorative",
    icon: "denture",
    summary:
      "Complete and partial dentures, implant-supported options, and staged rehabilitation where many teeth need rebuilding.",
    metaTitle: "Dentures & Full Mouth Rehab, Prayagraj",
    metaDescription:
      "Complete and partial dentures and full mouth rehabilitation in Civil Lines, Prayagraj. Implant-supported options for a secure, comfortable fit.",
    image: "/images/treatments/dentures-full-mouth-rehab.webp",
    imageAlt:
      "Hands holding a dental model used to fit dentures",
    clinicImage: "/images/clinic/itero-intraoral-scan.webp",
    clinicImageAlt: "Digital treatment planning at Eclectic Dental Care, Prayagraj",
    lead: "both",
    facts: [
      { label: "Types", value: "Complete · Partial · Implant-supported" },
      { label: "Timeline", value: "Several weeks" },
      { label: "Adjustments", value: "Included as you settle" },
      { label: "Alternative", value: "Implant-retained overdenture" },
    ],
    overview: [
      "When many or all teeth are missing, the goal is to restore chewing, speech and facial support together. A denture replaces the teeth and some of the gum and bone that has been lost with them.",
      "Conventional dentures rest on the gums. They work, they are the most affordable option, and they take some getting used to — particularly the lower one, which has less ridge to hold on to.",
      "An implant-retained overdenture solves that. Two to four implants give the denture something to clip onto, so it does not lift or rock while eating or talking. For patients who have struggled with a loose lower denture, the difference is considerable.",
      "Full mouth rehabilitation is broader still: a staged plan combining crowns, bridges, implants and dentures where teeth have been lost or severely worn over many years.",
    ],
    signs: [
      "Several or all teeth missing in one or both jaws",
      "An existing denture that is loose, rocks or causes sore spots",
      "Difficulty chewing everyday foods",
      "Teeth worn down significantly, making the face look shortened",
      "Multiple failing teeth, crowns or old bridges",
      "Avoiding eating in company because of teeth",
    ],
    process: [
      {
        title: "Full assessment",
        body: "Examination of remaining teeth, ridges, bite height and jaw joints, with X-rays, to establish what can be saved and what cannot.",
      },
      {
        title: "The plan and its stages",
        body: "A staged sequence with realistic timelines and costs, so you know what happens when — and can phase it if you need to.",
      },
      {
        title: "Preparation",
        body: "Any extractions, gum treatment or implant placement needed to create a sound foundation.",
      },
      {
        title: "Records and try-in",
        body: "Impressions and bite records, then a wax try-in where you see and approve the tooth position and appearance before it is finalised.",
      },
      {
        title: "Fitting",
        body: "The finished prosthesis is fitted, and the bite is checked and adjusted.",
      },
      {
        title: "Settling in",
        body: "Review appointments to relieve sore spots and refine the fit. Some adjustment is normal and expected — it is part of the treatment, not a sign something went wrong.",
      },
    ],
    benefits: [
      "Restores the ability to chew a normal range of food",
      "Supports the lips and cheeks, restoring facial shape",
      "Implant-supported options that do not move",
      "Improves clarity of speech",
      "Can be staged over time to suit your budget",
    ],
    faqs: [
      {
        q: "How long does it take to get used to a denture?",
        a: "A few weeks. Speech and eating both feel strange at first and improve steadily with practice. Starting with soft food cut small, and reading aloud to yourself, genuinely speeds the adjustment.",
      },
      {
        q: "Will a denture look artificial?",
        a: "It should not. Tooth shade, shape and arrangement are all chosen, and you approve them at the wax try-in before anything is finalised. Slight irregularity is deliberately built in — perfectly even teeth are what look false.",
      },
      {
        q: "My lower denture will not stay in. Is there anything better?",
        a: "Yes, and this is a very common problem — the lower ridge simply offers less to grip. An implant-retained overdenture using two to four implants clips the denture in place. For most patients who have struggled with a loose lower denture, it is transformative.",
      },
      {
        q: "How do I look after a denture?",
        a: "Clean it over a basin of water so it does not break if dropped, brush it daily with a denture brush and mild soap rather than toothpaste, which is abrasive. Leave it out overnight in water, and keep brushing your gums and any remaining teeth.",
      },
    ],
    related: ["dental-implants", "dental-crowns-bridges", "gum-disease-treatment"],
    costFactors: [
      "Complete or partial, and whether one arch or both",
      "Conventional or implant-retained — implants add cost but solve the movement problem",
      "Any extractions or gum treatment needed before the denture can be made",
    ],
    comparison: {
      title: "Conventional or implant-retained denture?",
      intro:
        "The single most common complaint about dentures is the lower one moving. There is a well-established fix for it.",
      optionA: "Conventional",
      optionB: "Implant-retained",
      rows: [
        { feature: "Stability", a: "Rests on the gums, can move", b: "Clips onto implants, does not lift" },
        { feature: "Lower jaw fit", a: "Hardest to keep stable", b: "Transformative difference" },
        { feature: "Chewing force", a: "Reduced", b: "Much closer to natural" },
        { feature: "Adhesive needed", a: "Often", b: "No" },
        { feature: "Bone loss", a: "Continues underneath", b: "Slowed where implants sit" },
        { feature: "Surgery", a: "None", b: "2–4 implants placed" },
        { feature: "Cost", a: "Lowest option", b: "Higher, staged over months" },
      ],
      verdict:
        "If you have never worn a denture, start with the conventional one — many people get on with it perfectly well. If you already have one and it will not stay put, implants are the answer rather than more adhesive.",
    },
  },

  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    heading: "Emergency dental care in Prayagraj",
    category: "Preventive",
    icon: "alert",
    summary:
      "Same-day attention for severe toothache, swelling, a knocked-out tooth or a broken restoration.",
    metaTitle: "Emergency Dentist in Prayagraj",
    metaDescription:
      "Emergency dental care in Civil Lines, Prayagraj. Severe toothache, swelling, knocked-out or broken teeth. Call +91 87075 37640 for a same-day appointment.",
    image: "/images/treatments/emergency-dental-care.webp",
    imageAlt:
      "A dentist treating a patient during an emergency appointment",
    clinicImage: "/images/clinic/operatory-wide.webp",
    clinicImageAlt: "Emergency dental treatment room at Eclectic Dental Care, Prayagraj",
    lead: "both",
    facts: [
      { label: "Call", value: site.phoneDisplay },
      { label: "Open", value: "Mon–Sat 10am–8pm" },
      { label: "Sunday", value: "6pm – 8pm" },
      { label: "Priority", value: "Pain and swelling seen first" },
    ],
    overview: [
      "Dental pain is not something to wait out. Severe toothache and facial swelling both signal active infection, and infection in the mouth spreads — occasionally to places that turn a dental problem into a hospital one.",
      "Call us on " + site.phoneDisplay + " and describe what is happening. We keep room in the day for genuine emergencies, and we will tell you honestly whether you need to be seen now, today, or at a routine appointment.",
      "The first goal at an emergency visit is to stop the pain and control the infection. Definitive treatment follows once you are comfortable — you should not have to make decisions about long-term plans while in pain.",
    ],
    signs: [
      "Severe toothache, particularly one that wakes you at night",
      "Facial or gum swelling",
      "A knocked-out tooth after an accident",
      "A tooth broken or cracked by trauma",
      "A lost crown, filling or broken denture",
      "Bleeding that will not stop after an extraction",
      "Difficulty swallowing or opening the mouth — seek care immediately",
    ],
    process: [
      {
        title: "Call first",
        body: "Ring " + site.phoneDisplay + " and describe the problem. Some emergencies have useful first-aid steps we can give you over the phone.",
      },
      {
        title: "Rapid assessment",
        body: "On arrival we identify the source quickly, with an X-ray if needed.",
      },
      {
        title: "Relieve the pain",
        body: "Drainage, opening the tooth to release pressure, dressing, or a temporary restoration — whichever addresses the actual cause.",
      },
      {
        title: "Control infection",
        body: "Antibiotics where genuinely indicated. Antibiotics alone do not cure a dental infection — the source has to be treated, and we will explain that rather than simply prescribing.",
      },
      {
        title: "Definitive treatment",
        body: "Once comfortable, we plan the permanent fix — usually root canal treatment, a restoration or an extraction.",
      },
    ],
    benefits: [
      "Same-day attention for genuine emergencies during opening hours",
      "Both specialists available on site",
      "Pain relief prioritised before long-term planning",
      "Phone guidance on first-aid before you arrive",
      "Open seven days, including Sunday",
    ],
    faqs: [
      {
        q: "My tooth has been knocked out. What do I do right now?",
        a: "Pick it up by the crown, never the root. If it is dirty, rinse it briefly in milk or saline — not water, and do not scrub it. If you can, push it gently back into the socket and bite on a cloth. If you cannot, keep it in milk and get to us immediately. The first 30 minutes matter enormously for whether the tooth can be saved.",
      },
      {
        q: "I have severe toothache. What helps until I can be seen?",
        a: "Take the painkiller you normally tolerate, at the normal dose. A cold compress on the outside of the cheek helps swelling. Do not put aspirin directly on the gum — it burns the tissue. Do not apply heat to a swelling. Call us and get seen.",
      },
      {
        q: "Is facial swelling an emergency?",
        a: "Yes. Swelling means the infection has spread beyond the tooth. If it is spreading towards the eye, or you have difficulty swallowing, breathing or opening your mouth, that needs immediate attention — go to a hospital emergency department if you cannot reach us.",
      },
      {
        q: "Can I just take antibiotics?",
        a: "They may reduce the swelling temporarily, but they do not cure a dental infection — the source inside the tooth remains, and the problem returns, often worse. Antibiotics buy time to get treatment; they are not the treatment.",
      },
    ],
    related: ["root-canal-treatment", "wisdom-tooth-removal", "dental-crowns-bridges"],
    costFactors: [
      "What the emergency turns out to be — relieving pain is one cost, the definitive treatment afterwards another",
      "Whether an X-ray is needed to find the source",
      "We will tell you the likely cost on the phone before you come in, as far as that is possible without seeing you",
    ],
  },
];

/** Canonical internal path for a treatment. Every treatment has a real page. */
export function servicePath(service: Pick<Service, "slug">) {
  return `/services/${service.slug}`;
}

export const serviceMap = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string) {
  return serviceMap.get(slug);
}

export const featuredServices = services.filter((s) => s.featured);

export const serviceCategories = [
  "Orthodontics",
  "Restorative",
  "Cosmetic",
  "Surgical",
  "Preventive",
  "Family",
] as const;

export function servicesByCategory(category: string) {
  return services.filter((s) => s.category === category);
}
