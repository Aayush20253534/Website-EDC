export type GuideSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideFaq = {
  q: string;
  a: string;
};

export type Guide = {
  slug: string;
  category: string;
  title: string;
  heroTitle: string[];
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  reviewerSlug: "dr-umang-malviya" | "dr-anuja-raj";
  relatedServiceSlug: string;
  readingTime: string;
  intro: string[];
  sections: GuideSection[];
  faqs: GuideFaq[];
};

export const guides: Guide[] = [
  {
    slug: "invisalign-vs-braces",
    category: "Orthodontics",
    title: "Invisalign vs braces: how to choose",
    heroTitle: ["Invisalign vs braces:", "how to choose."],
    metaTitle: "Invisalign vs Braces in Prayagraj",
    metaDescription:
      "Compare Invisalign clear aligners and braces: visibility, removability, treatment control, cleaning and who each option may suit.",
    excerpt:
      "Clear aligners and fixed braces can both move teeth well. The useful question is which system gives the right control for your bite, lifestyle and level of compliance.",
    image: "/images/treatments/invisalign-clear-aligners.webp",
    imageAlt: "Clear aligner used for orthodontic treatment",
    reviewerSlug: "dr-umang-malviya",
    relatedServiceSlug: "invisalign-clear-aligners",
    readingTime: "6 min read",
    intro: [
      "Invisalign and fixed braces are both orthodontic tools. Neither is automatically more advanced, more effective or more suitable for every person.",
      "The right choice depends on the movements your teeth need, the way your upper and lower teeth meet, how consistently you can follow instructions, and how much visibility or removability matters to you.",
    ],
    sections: [
      {
        title: "The main practical difference",
        paragraphs: [
          "Fixed braces stay attached to the teeth throughout treatment. Clear aligners are removable trays worn according to the orthodontist's prescribed schedule.",
          "That difference affects eating, cleaning and day-to-day convenience, but it also affects treatment control. A removable appliance only works while it is being worn.",
        ],
      },
      {
        title: "When clear aligners may suit you",
        paragraphs: [
          "Aligners are attractive to people who want a less visible appliance and prefer being able to remove it for meals and brushing.",
          "They can treat many common alignment and bite problems, but suitability depends on the exact tooth movements required. Digital planning helps the orthodontist judge whether the planned movements are realistic.",
        ],
        bullets: [
          "You value a less visible appliance.",
          "You can reliably follow the prescribed wear schedule.",
          "Being able to remove the appliance for meals and cleaning matters to you.",
          "Your orthodontist confirms that aligners can deliver the movements your case needs.",
        ],
      },
      {
        title: "When fixed braces may be the better tool",
        paragraphs: [
          "Because braces are fixed to the teeth, they do not depend on remembering to put an appliance back in after meals. They can also give the orthodontist direct mechanical control over complex tooth movements.",
          "For some bites, rotations or cases requiring more involved control, fixed appliances may be the simpler or more predictable option.",
        ],
      },
      {
        title: "Cleaning and food are different",
        paragraphs: [
          "Aligners come out for eating, so there are fewer food restrictions, but teeth need to be kept clean before trays go back in.",
          "Braces stay in place, which means brushing around brackets and wires requires more attention and certain hard or sticky foods may need to be avoided.",
        ],
      },
      {
        title: "Do not choose from photographs alone",
        paragraphs: [
          "Two smiles that look similar from the front can have very different bite relationships underneath. Orthodontic treatment is not only about making the front teeth look straight.",
          "An examination and records are what determine whether Invisalign, braces or another approach is appropriate.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Invisalign faster than braces?",
        a: "Not automatically. Treatment time depends mainly on the tooth movements and bite correction required, as well as how the appliance is used. The orthodontist can estimate timing after assessment.",
      },
      {
        q: "Are braces only for teenagers?",
        a: "No. Adults can have fixed braces, clear aligners or other orthodontic treatment if their teeth and supporting tissues are suitable.",
      },
      {
        q: "Can I switch from braces to aligners later?",
        a: "Sometimes, but it depends on the treatment plan and what remains to be corrected. Switching systems is a clinical decision rather than a routine upgrade.",
      },
    ],
  },
  {
    slug: "signs-you-need-root-canal",
    category: "Root canal",
    title: "Signs you may need root canal treatment",
    heroTitle: ["Signs you may need", "a root canal."],
    metaTitle: "Signs You May Need a Root Canal",
    metaDescription:
      "Persistent toothache, lingering sensitivity, pain on biting and swelling can suggest pulp damage. Learn when a root canal assessment is useful.",
    excerpt:
      "A painful tooth does not automatically need a root canal. These are the symptoms that make an examination of the tooth's pulp and surrounding tissues worthwhile.",
    image: "/images/treatments/root-canal-treatment.webp",
    imageAlt: "Dental X-ray being reviewed for root canal treatment",
    reviewerSlug: "dr-anuja-raj",
    relatedServiceSlug: "root-canal-treatment",
    readingTime: "6 min read",
    intro: [
      "Root canal treatment is used when the soft tissue inside a tooth, called the pulp, is irreversibly inflamed or infected.",
      "Symptoms can point in that direction, but they cannot confirm the diagnosis by themselves. Cracks, gum problems, sinus pain and other dental conditions can produce similar symptoms.",
    ],
    sections: [
      {
        title: "Pain that starts on its own",
        paragraphs: [
          "A tooth that begins aching without being triggered by food or temperature deserves assessment, particularly if the pain is strong enough to interrupt sleep or repeatedly returns.",
        ],
      },
      {
        title: "Sensitivity that lingers",
        paragraphs: [
          "Brief sensitivity to cold can have several causes. Sensitivity that continues well after the hot or cold stimulus is removed can be more concerning for inflammation inside the tooth.",
        ],
      },
      {
        title: "Pain when biting or chewing",
        paragraphs: [
          "Pain on biting can occur with pulp or root inflammation, but it can also come from a crack, a high filling or the tissues around the tooth. Examination is needed to separate these possibilities.",
        ],
      },
      {
        title: "Swelling, a gum boil or bad taste",
        paragraphs: [
          "Swelling near a tooth, a pimple-like bump on the gum or drainage with an unpleasant taste can be signs of infection around the root.",
          "Facial swelling that is rapidly increasing, or swelling associated with difficulty breathing or swallowing, needs urgent medical attention.",
        ],
      },
      {
        title: "A darkened tooth after trauma",
        paragraphs: [
          "A tooth can lose vitality after a knock even if it did not break at the time. Colour change is one reason to have a previously injured tooth assessed.",
        ],
      },
      {
        title: "Why an X-ray may be needed",
        paragraphs: [
          "The dentist combines symptoms with clinical tests and, when appropriate, an X-ray. The aim is to identify whether the pulp can recover, needs root canal treatment, or whether the pain is coming from something else.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does every severe toothache need a root canal?",
        a: "No. Severe pain can come from several causes. A root canal is appropriate only when examination and tests show that the pulp is irreversibly inflamed or infected.",
      },
      {
        q: "Can a tooth need a root canal without hurting?",
        a: "Yes. Some teeth lose vitality with little or no pain and are discovered through swelling, a gum sinus, colour change or an X-ray finding.",
      },
      {
        q: "Can antibiotics replace root canal treatment?",
        a: "Antibiotics do not remove infected or irreversibly damaged pulp from inside a tooth. They may be used in selected infections with spreading or systemic features, but definitive dental treatment is still needed.",
      },
    ],
  },
  {
    slug: "toothache-emergency-dentist",
    category: "Emergency dentistry",
    title: "Toothache: when is it a dental emergency?",
    heroTitle: ["Toothache:", "when is it urgent?"],
    metaTitle: "Toothache: When to See an Emergency Dentist",
    metaDescription:
      "Learn which toothache symptoms need urgent dental care, which warning signs need hospital attention, and what to do while arranging treatment.",
    excerpt:
      "Some toothaches can wait for the next available appointment. Others need same-day dental care, and a few warning signs need urgent medical attention.",
    image: "/images/treatments/emergency-dental-care.webp",
    imageAlt: "Dentist treating a patient during an emergency dental visit",
    reviewerSlug: "dr-anuja-raj",
    relatedServiceSlug: "emergency-dental-care",
    readingTime: "5 min read",
    intro: [
      "Pain intensity matters, but urgency is not decided by pain alone. Swelling, trauma, bleeding and signs that an infection is spreading can make a dental problem more time-sensitive.",
      "If you are unsure, call the clinic and describe the symptoms. A short conversation can help decide whether you should be seen immediately, the same day or at the next available appointment.",
    ],
    sections: [
      {
        title: "Arrange urgent dental care for severe or worsening symptoms",
        paragraphs: [
          "Same-day dental assessment is sensible for severe toothache that is not settling, swelling around a tooth, a broken tooth causing significant pain, a lost restoration with pain, or trauma to a tooth.",
        ],
      },
      {
        title: "Some swelling needs medical emergency care",
        paragraphs: [
          "Seek urgent medical care if facial or neck swelling is rapidly increasing or is associated with difficulty breathing, swallowing, speaking normally, marked weakness or other signs of serious illness.",
          "These symptoms can indicate that infection is affecting spaces beyond the tooth and should not be managed by waiting for a routine dental appointment.",
        ],
      },
      {
        title: "A knocked-out permanent tooth is time-sensitive",
        paragraphs: [
          "Handle a knocked-out permanent tooth by the crown rather than the root. If it is visibly dirty, rinse it gently without scrubbing. If it can be repositioned safely, place it back in the socket; otherwise keep it moist, for example in milk, while seeking urgent dental care.",
          "Do not reinsert a knocked-out baby tooth.",
        ],
      },
      {
        title: "What you can do while arranging care",
        paragraphs: [
          "Keep the area clean and avoid chewing on the painful side. Use pain relief only according to the medicine label and your own medical suitability.",
          "Do not place aspirin or other tablets directly against the gum or tooth. They do not treat the cause and can irritate soft tissues.",
        ],
      },
      {
        title: "Pain relief is not the diagnosis",
        paragraphs: [
          "Pain can temporarily improve even while the underlying problem remains. The aim of an emergency visit is to identify the cause and control it, then plan definitive treatment if a second stage is required.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is every toothache an emergency?",
        a: "No. Mild, stable discomfort may be suitable for the next available appointment, while severe pain, swelling, trauma or rapidly worsening symptoms usually justify more urgent assessment.",
      },
      {
        q: "Should I take antibiotics for toothache?",
        a: "Antibiotics are not a general treatment for toothache. Many dental pains need local dental treatment rather than antibiotics. A clinician should decide whether antibiotics are indicated.",
      },
      {
        q: "What if swelling affects breathing or swallowing?",
        a: "That is a medical emergency. Seek urgent medical care rather than waiting for a routine dental appointment.",
      },
    ],
  },
  {
    slug: "bleeding-gums-causes-treatment",
    category: "Gum health",
    title: "Bleeding gums: causes and what to do",
    heroTitle: ["Bleeding gums:", "what they can mean."],
    metaTitle: "Bleeding Gums: Causes and Treatment",
    metaDescription:
      "Bleeding gums are often linked to inflammation from plaque, but other factors can contribute. Learn when cleaning and gum assessment are useful.",
    excerpt:
      "Bleeding when brushing is common, but persistent bleeding is not something to ignore. The cause is often treatable once the gums are properly assessed.",
    image: "/images/treatments/gum-disease-treatment.webp",
    imageAlt: "Dentist examining the gums during a periodontal assessment",
    reviewerSlug: "dr-anuja-raj",
    relatedServiceSlug: "gum-disease-treatment",
    readingTime: "5 min read",
    intro: [
      "Healthy gums generally should not bleed repeatedly during ordinary brushing. The most common reason for persistent bleeding is inflammation caused by plaque collecting around the gumline.",
      "Bleeding can also be influenced by brushing trauma, medications and health conditions, so persistent or unexplained bleeding deserves an examination rather than self-diagnosis.",
    ],
    sections: [
      {
        title: "Plaque-related gingivitis is common",
        paragraphs: [
          "When plaque remains around the gumline, the gums can become red, swollen and more likely to bleed. At this early stage, improving plaque control and professional cleaning where needed can allow the inflammation to resolve.",
        ],
      },
      {
        title: "Periodontitis involves deeper supporting tissues",
        paragraphs: [
          "If inflammation progresses into periodontitis, the tissues and bone supporting the teeth can be damaged. Gum pockets, recession, persistent bad breath or increasing tooth mobility are reasons for a periodontal assessment.",
        ],
      },
      {
        title: "Do not stop brushing because the gums bleed",
        paragraphs: [
          "Avoiding the bleeding area can allow more plaque to remain. Gentle, thorough cleaning is usually more useful than abandoning brushing, although technique may need to be adjusted if you are scrubbing aggressively.",
        ],
      },
      {
        title: "Other factors can contribute",
        paragraphs: [
          "Smoking, diabetes, pregnancy-related hormonal changes, certain medicines and blood disorders can affect gum health or bleeding tendency. A dentist may recommend medical review when the pattern does not fit ordinary plaque-related inflammation.",
        ],
      },
      {
        title: "Professional cleaning is not the same for everyone",
        paragraphs: [
          "Some people need routine scaling to remove tartar. Deeper periodontal disease may require more involved cleaning below the gumline and ongoing maintenance. The examination determines which level is appropriate.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are bleeding gums normal?",
        a: "Repeated bleeding with ordinary brushing is a sign that the gums should be assessed. Plaque-related inflammation is common, but it is not the only possible cause.",
      },
      {
        q: "Can scaling damage enamel?",
        a: "Professional scaling is intended to remove plaque and hardened deposits from tooth surfaces. It does not work by grinding away healthy enamel.",
      },
      {
        q: "Can gum disease affect otherwise healthy teeth?",
        a: "Yes. Periodontal disease affects the supporting tissues around teeth, so a tooth can have no cavity and still lose support if gum disease progresses.",
      },
    ],
  },
  {
    slug: "crown-after-root-canal",
    category: "Restorative dentistry",
    title: "Do you need a crown after a root canal?",
    heroTitle: ["Do you need a crown", "after a root canal?"],
    metaTitle: "Do You Need a Crown After Root Canal Treatment?",
    metaDescription:
      "A crown is often recommended after root canal treatment when a tooth has lost significant structure. Learn why the decision depends on the tooth and restoration.",
    excerpt:
      "Root canal treatment manages disease inside a tooth. The restoration afterwards deals with a different question: how to protect and rebuild the remaining tooth structure.",
    image: "/images/treatments/dental-crowns-bridges.webp",
    imageAlt: "Dentist assessing a tooth before crown restoration",
    reviewerSlug: "dr-anuja-raj",
    relatedServiceSlug: "dental-crowns-bridges",
    readingTime: "5 min read",
    intro: [
      "A root canal and a crown solve different problems. The root canal treats the pulp space inside the tooth; the final restoration seals and protects the tooth that remains.",
      "Whether a crown is needed depends on which tooth was treated, how much structure has been lost, the size of existing restorations and the forces that tooth carries.",
    ],
    sections: [
      {
        title: "Back teeth often carry heavy chewing forces",
        paragraphs: [
          "Molars and premolars take substantial load during chewing. If a root-treated back tooth has also lost a large amount of structure to decay, fracture or previous fillings, cuspal coverage may be recommended to reduce the risk of fracture.",
        ],
      },
      {
        title: "Not every root-treated tooth needs the same restoration",
        paragraphs: [
          "A front tooth with limited structural loss may sometimes be restored differently from a heavily filled molar. The decision should be based on remaining tooth structure rather than a blanket rule that every root canal must receive the same crown.",
        ],
      },
      {
        title: "The seal matters as much as the appearance",
        paragraphs: [
          "A good final restoration needs to seal the tooth against leakage as well as restore shape and function. Delaying a required permanent restoration can leave a weakened or temporarily restored tooth more vulnerable.",
        ],
      },
      {
        title: "Crown material is only one part of the decision",
        paragraphs: [
          "Ceramic, zirconia and other restorative options each have indications. Bite, tooth position, available space, appearance and the amount of remaining tooth structure matter more than choosing a material from a menu.",
        ],
      },
      {
        title: "The root canal should be reviewed before final restoration",
        paragraphs: [
          "The treating dentist considers symptoms, the quality of the remaining tooth and the endodontic result before deciding how and when to complete the final restoration.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will a root canal tooth break without a crown?",
        a: "Not every root-treated tooth will fracture, but teeth that have lost substantial structure can be more vulnerable. The need for cuspal coverage depends on the individual tooth.",
      },
      {
        q: "Can a filling be enough after a root canal?",
        a: "Sometimes, particularly when enough sound tooth structure remains. In other situations a crown or another form of cuspal coverage may provide better protection.",
      },
      {
        q: "How soon should the final restoration be done?",
        a: "Timing depends on the tooth, temporary restoration and clinical situation. Your dentist should tell you whether the tooth needs prompt definitive restoration or a period of review first.",
      },
    ],
  },
  {
    slug: "child-first-dental-visit",
    category: "Kids dentistry",
    title: "Your child's first dental visit",
    heroTitle: ["Your child's", "first dental visit."],
    metaTitle: "Child's First Dental Visit: What Parents Should Know",
    metaDescription:
      "Learn when a child can first visit the dentist, what happens at an early appointment, and how parents can make the experience calmer.",
    excerpt:
      "The easiest first dental visit is usually one that happens before pain forces the issue. Early visits are mainly about prevention, familiarity and checking development.",
    image: "/images/treatments/kids-dentistry.webp",
    imageAlt: "Child smiling during a gentle dental visit",
    reviewerSlug: "dr-umang-malviya",
    relatedServiceSlug: "kids-dentistry",
    readingTime: "5 min read",
    intro: [
      "A child can be seen from the first tooth onwards. The purpose of an early visit is not to perform complicated treatment; it is to check development, discuss prevention and make the dental environment familiar.",
      "Waiting until there is pain can make the first appointment harder because the child is meeting the dentist at the same time as they are frightened or uncomfortable.",
    ],
    sections: [
      {
        title: "What happens at an early visit",
        paragraphs: [
          "The dentist checks erupted teeth, gums, oral hygiene and development as far as the child comfortably allows. Parents can also ask about brushing, toothpaste, diet, habits and what changes to expect next.",
        ],
      },
      {
        title: "Keep the explanation simple beforehand",
        paragraphs: [
          "Tell the child that the dentist will count and look at their teeth. Avoid promising that nothing will happen or using frightening words to prepare them for procedures they may not even need.",
        ],
      },
      {
        title: "Prevention changes as the child grows",
        paragraphs: [
          "Advice can include brushing technique, fluoride use, diet, fissure sealants where appropriate and monitoring how permanent teeth are erupting.",
        ],
      },
      {
        title: "Orthodontic assessment does not mean immediate braces",
        paragraphs: [
          "As adult teeth and the bite develop, an orthodontic assessment can identify problems that should be watched or occasionally treated early. Most children who are assessed early are not automatically started on braces.",
        ],
      },
      {
        title: "Pain or swelling should not wait for a routine checkup",
        paragraphs: [
          "If a child has dental pain, facial swelling, trauma or a broken tooth, tell the clinic when booking so the visit can be treated as a problem-focused appointment rather than a routine first check.",
        ],
      },
    ],
    faqs: [
      {
        q: "When can my child first see a dentist?",
        a: "A child can be seen from the first tooth onwards. Early visits are useful for prevention and familiarisation even when there is no problem.",
      },
      {
        q: "What if my child is nervous?",
        a: "A calm, short first appointment can help. Avoid using the dentist as a threat or giving detailed descriptions of procedures before the dentist has even examined the child.",
      },
      {
        q: "Does an early orthodontic check mean my child needs braces?",
        a: "No. Assessment can simply mean monitoring growth and eruption until treatment, if any, becomes appropriate.",
      },
    ],
  },
  {
    slug: "wisdom-tooth-removal-signs",
    category: "Oral surgery",
    title: "When does a wisdom tooth need removal?",
    heroTitle: ["When does a wisdom tooth", "need removal?"],
    metaTitle: "Signs a Wisdom Tooth May Need Removal",
    metaDescription:
      "Pain, recurrent gum infection, food trapping or damage to the tooth in front can make wisdom-tooth removal worth assessing. Not every wisdom tooth needs extraction.",
    excerpt:
      "A wisdom tooth should not be removed simply because it exists. The useful question is whether it is causing disease, damaging nearby structures or is likely to remain difficult to maintain.",
    image: "/images/treatments/wisdom-tooth-removal.webp",
    imageAlt: "Dental surgical treatment for an impacted wisdom tooth",
    reviewerSlug: "dr-anuja-raj",
    relatedServiceSlug: "wisdom-tooth-removal",
    readingTime: "5 min read",
    intro: [
      "Wisdom teeth are the last molars at the back of the mouth. Some erupt into a useful, cleanable position and never need treatment.",
      "Problems are more likely when a tooth is partly erupted, impacted, difficult to clean or positioned in a way that affects the tooth in front.",
    ],
    sections: [
      {
        title: "Repeated pain or gum infection",
        paragraphs: [
          "A partly erupted wisdom tooth can leave a flap of gum where food and bacteria collect. Recurrent pain, swelling or inflammation in that area is a common reason for assessment.",
        ],
      },
      {
        title: "Food trapping and decay",
        paragraphs: [
          "A difficult-to-clean wisdom tooth can decay itself or make the back surface of the neighbouring molar hard to maintain. Damage to the tooth in front is one reason removal may be advised.",
        ],
      },
      {
        title: "Impaction alone does not answer the question",
        paragraphs: [
          "An impacted tooth is one that cannot erupt into a normal functional position. Some impacted wisdom teeth remain symptom-free and disease-free, so the decision should consider clinical and radiographic findings rather than the word 'impacted' alone.",
        ],
      },
      {
        title: "An X-ray helps show position and nearby anatomy",
        paragraphs: [
          "Imaging can show the angle of the tooth, its relationship to the neighbouring molar and other anatomical structures. This helps the dentist judge both the reason for removal and the complexity of the procedure.",
        ],
      },
      {
        title: "Swelling and difficulty opening the mouth need prompt review",
        paragraphs: [
          "Increasing swelling, fever, difficulty opening the mouth or worsening pain can indicate acute infection and should be assessed promptly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do all wisdom teeth need to be removed?",
        a: "No. A wisdom tooth that is healthy, functional, fully erupted and maintainable may not need removal.",
      },
      {
        q: "Can a wisdom tooth damage the tooth in front?",
        a: "Yes. Certain impacted or partly erupted positions can make cleaning difficult and contribute to decay or periodontal problems on the neighbouring molar.",
      },
      {
        q: "Is an X-ray needed before wisdom-tooth removal?",
        a: "Imaging is commonly useful because it shows the tooth's position and surrounding anatomy. The dentist decides what imaging is appropriate for the individual case.",
      },
    ],
  },
  {
    slug: "how-often-dental-checkup",
    category: "Preventive dentistry",
    title: "How often should you have a dental checkup?",
    heroTitle: ["How often should you", "have a dental checkup?"],
    metaTitle: "How Often Should You Have a Dental Checkup?",
    metaDescription:
      "Dental recall intervals should reflect your individual risk rather than an automatic schedule. Learn what affects how often you should be examined.",
    excerpt:
      "Six months is familiar, but it is not a law of dentistry. A useful recall interval depends on your risk of decay, gum disease, existing dental work and what your dentist is monitoring.",
    image: "/images/clinic/operatory-chairs.webp",
    imageAlt: "Dental examination room used for routine checkups in Prayagraj",
    reviewerSlug: "dr-anuja-raj",
    relatedServiceSlug: "scaling-and-polishing",
    readingTime: "5 min read",
    intro: [
      "People often assume everyone should see a dentist exactly every six months. In reality, recall intervals can be shorter or longer depending on individual risk.",
      "The point of a recall schedule is to review problems at an interval where finding change early is useful, not to bring every person back on the same calendar.",
    ],
    sections: [
      {
        title: "Decay risk changes the interval",
        paragraphs: [
          "Someone developing repeated new cavities may benefit from closer review than someone with stable oral health and no recent disease.",
        ],
      },
      {
        title: "Gum health matters",
        paragraphs: [
          "People with a history of periodontitis may need more frequent periodontal maintenance and review than people with consistently healthy gums.",
        ],
      },
      {
        title: "Existing dental work needs monitoring",
        paragraphs: [
          "Large fillings, crowns, bridges, implants, dentures and root-treated teeth can all influence what needs to be checked over time.",
        ],
      },
      {
        title: "Children and developing bites change quickly",
        paragraphs: [
          "Eruption, decay risk and orthodontic development can change during childhood and adolescence, so the recall interval is based on the child's current stage and needs.",
        ],
      },
      {
        title: "A checkup is different from a cleaning",
        paragraphs: [
          "The examination decides what needs attention. Professional cleaning is recommended according to plaque, tartar, staining and periodontal needs rather than automatically being identical at every recall.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does everyone need a dental checkup every six months?",
        a: "No. Six months is a common interval, but the appropriate recall period should reflect individual risk, disease history and what needs monitoring.",
      },
      {
        q: "Can I wait until something hurts?",
        a: "Pain is not a reliable screening system. Decay, gum disease and failing restorations can develop before symptoms are strong enough to force an appointment.",
      },
      {
        q: "Is a checkup the same as a professional cleaning?",
        a: "No. A checkup is an examination and diagnostic visit. Scaling and polishing is a preventive or periodontal procedure recommended when cleaning is clinically useful.",
      },
    ],
  },
];

export const guideMap = new Map(guides.map((guide) => [guide.slug, guide]));

export function getGuide(slug: string) {
  return guideMap.get(slug);
}
