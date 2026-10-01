import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { FaqSection } from "@/components/sections/FaqSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, ArrowLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { doctors } from "@/lib/doctors";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  physicianSchema,
  webPageSchema,
} from "@/lib/schema";

const PAGE_PATH = "/family-dentist-prayagraj";

const pageDescription =
  "Family dentist in Prayagraj for children, teens, adults and older adults. Check-ups, braces, fillings, root canals, implants and dentures in Civil Lines.";

export const metadata: Metadata = {
  title: "Family Dentist in Prayagraj",
  description: pageDescription,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_PATH,
    siteName: site.name,
    title: "Family Dentist in Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: [
      {
        url: "/images/treatments/kids-dentistry.webp",
        width: 1200,
        height: 800,
        alt: "Family and kids dentistry at Eclectic Dental Care in Prayagraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Dentist in Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: ["/images/treatments/kids-dentistry.webp"],
  },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Treatments", url: "/services" },
  { name: "Family dentistry", url: PAGE_PATH },
];

const familySlugs = [
  "kids-dentistry",
  "braces-orthodontic-treatment",
  "scaling-and-polishing",
  "tooth-coloured-fillings",
  "root-canal-treatment",
  "dental-crowns-bridges",
  "dental-implants",
  "dentures-full-mouth-rehab",
] as const;

const familyServices = familySlugs.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);
  return service ? [service] : [];
});

const lifeStages = [
  {
    eyebrow: "Children",
    title: "Build confidence early",
    body: "First check-ups, prevention, fillings when needed and early orthodontic assessment. The aim is to make dental visits ordinary rather than something a child learns to fear.",
    image: "/images/treatments/kids-dentistry.webp",
    imageAlt: "A child smiling during a dental check-up",
    links: [
      { label: "Kids dentistry", href: "/services/kids-dentistry" },
      { label: "Preventive cleaning", href: "/services/scaling-and-polishing" },
    ],
  },
  {
    eyebrow: "Teenagers",
    title: "Guide the developing bite",
    body: "Teen years are a common time for braces, bite correction and prevention. Orthodontic assessment is led by an MDS orthodontist rather than treated as an add-on.",
    image: "/images/treatments/braces-orthodontic-treatment.webp",
    imageAlt: "Teen and young adult orthodontic braces treatment",
    links: [
      { label: "Braces & orthodontics", href: "/services/braces-orthodontic-treatment" },
      { label: "Invisalign & aligners", href: "/services/invisalign-clear-aligners" },
    ],
  },
  {
    eyebrow: "Adults",
    title: "Preserve teeth and function",
    body: "Routine cleaning, fillings, root canals, crowns, gum care and cosmetic concerns all sit in the same clinic, with specialist input where the problem needs it.",
    image: "/images/treatments/root-canal-treatment.webp",
    imageAlt: "Adult dental treatment planning for root canal care",
    links: [
      { label: "Root canal treatment", href: "/services/root-canal-treatment" },
      { label: "Crowns & bridges", href: "/services/dental-crowns-bridges" },
    ],
  },
  {
    eyebrow: "Older adults",
    title: "Keep eating, speaking and smiling comfortably",
    body: "Missing or heavily restored teeth need a plan for function as much as appearance. Options may include dentures, implants, crowns or staged full-mouth rehabilitation.",
    image: "/images/treatments/dentures-full-mouth-rehab.webp",
    imageAlt: "Dental model used for dentures and full mouth rehabilitation",
    links: [
      { label: "Dentures & full-mouth rehab", href: "/services/dentures-full-mouth-rehab" },
      { label: "Dental implants", href: "/services/dental-implants" },
    ],
  },
];

const familyFaqs = [
  {
    q: "Does Eclectic Dental Care treat both children and adults?",
    a: "Yes. The clinic treats children, teenagers, adults and older adults. Care ranges from first dental visits and preventive treatment to orthodontics, root canals, crowns, implants and dentures.",
  },
  {
    q: "At what age should a child first see a dentist?",
    a: "A child can be seen from the first tooth onwards. Early visits are useful for prevention, brushing and diet advice, and for helping a child become comfortable with the dental environment before there is a problem.",
  },
  {
    q: "When should children have an orthodontic assessment?",
    a: "An early orthodontic assessment is commonly useful around age seven, when permanent teeth and the developing bite can be evaluated. That does not mean every child needs braces at seven.",
  },
  {
    q: "Can different family members see different specialists at the same clinic?",
    a: "Yes. Dr. Umang Malviya leads orthodontic and aligner care. Dr. Anuja Ray leads endodontic and restorative treatment. General preventive and family care is coordinated through the same Civil Lines clinic.",
  },
  {
    q: "Where is the family dental clinic in Prayagraj?",
    a: `Eclectic Dental Care is at ${site.addressLine}, near ${site.address.landmark} in Civil Lines, Prayagraj (Allahabad).`,
  },
];

export default function FamilyDentistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "CollectionPage",
                url: PAGE_PATH,
                name: "Family Dentist in Prayagraj",
                description: pageDescription,
              }),
              ...doctors.map((doctor) => physicianSchema(doctor)),
              breadcrumbSchema(trail),
              faqSchema(familyFaqs),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Family dentistry · Prayagraj"
        title={["Family dentist", "in Prayagraj."]}
        lede="Dental needs change with age. We care for children, teenagers, adults and older adults at the same Civil Lines clinic, with specialist orthodontic and endodontic care available in-house."
        trail={trail}
      />

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/treatments/kids-dentistry.webp"
              alt="Child receiving gentle family dental care at Eclectic Dental Care"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.055}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <p className="eyebrow text-brick">One clinic through different life stages</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa sm:text-4xl">
                Keep the family&apos;s dental history in one place.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Preventive visits, developing bites, damaged teeth and missing
                teeth are different problems. The advantage of a family clinic
                is continuity — while still involving the right specialist when
                a case moves beyond routine care.
              </p>

              <div className="mt-7 border-t border-line pt-6">
                <p className="text-sm leading-relaxed text-muted">
                  Visit our{" "}
                  <Link
                    href="/locations/civil-lines-prayagraj"
                    className="font-semibold text-brick transition-colors hover:text-brick-hover"
                  >
                    Civil Lines dental clinic
                  </Link>{" "}
                  near {site.address.landmark}, Prayagraj.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="md">
                  Book a family visit
                </ButtonLink>
                <ButtonLink href="/services/kids-dentistry" variant="outline" size="md">
                  Kids dentistry
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "Children", sub: "First visits · prevention" },
            { value: "Teens", sub: "Braces · bite correction" },
            { value: "Adults", sub: "Preserve · restore" },
            { value: "Older adults", sub: "Replace · rehabilitate" },
          ].map((item) => (
            <StaggerItem key={item.value}>
              <div className="h-full bg-surface p-5 sm:p-6">
                <p className="font-display text-2xl leading-tight text-terracotta">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-muted">{item.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section bg-sunk">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Through every age"
            title={["Different stages,", "different priorities."]}
            lede="Family dentistry is not one treatment. It is knowing what matters at each stage, when to prevent, when to monitor and when specialist treatment is genuinely useful."
          />

          <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2">
            {lifeStages.map((stage, index) => (
              <Reveal key={stage.eyebrow} delay={(index % 2) * 0.08}>
                <article className="grid h-full overflow-hidden rounded-3xl border border-line bg-surface sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[17rem] overflow-hidden sm:min-h-full">
                    <Image
                      src={stage.image}
                      alt={stage.imageAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 23vw"
                      className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.035]"
                    />
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <p className="eyebrow text-brick">{stage.eyebrow}</p>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-cocoa">
                      {stage.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {stage.body}
                    </p>
                    <div className="mt-5 space-y-2">
                      {stage.links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm font-semibold text-brick transition-colors hover:text-brick-hover"
                        >
                          {item.label} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Family treatments"
            title={["From prevention", "to rebuilding."]}
            lede="These are the treatments most likely to span more than one generation of a family. Each has its own detailed page with process, alternatives, cost factors and FAQs."
            action={
              <ButtonLink href="/services" variant="outline" size="md">
                All {services.length} treatments
              </ButtonLink>
            }
          />

          <Stagger className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {familyServices.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-sandwash">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw"
                      className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <p className="eyebrow text-brick">{service.category}</p>
                    <h3 className="mt-3 font-display text-xl leading-tight text-cocoa">
                      {service.name}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                      {service.summary}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-brick">
                      Treatment details →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-sandwash">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="03"
              eyebrow="Prevention"
              title={["The cheapest treatment", "is the one you avoid."]}
              lede="Routine review and cleaning are less dramatic than emergency dentistry, which is precisely the point. Prevention is where family care earns its keep."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 space-y-3">
                {[
                  "Routine dental examinations based on individual risk.",
                  "Professional scaling and polishing when tartar or staining needs removal.",
                  "Fluoride, sealants and age-appropriate prevention for children.",
                  "Early review of bite development and orthodontic concerns.",
                  "Monitoring restored teeth, crowns, implants and dentures over time.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-line bg-ivory p-4"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                    />
                    <p className="text-sm leading-relaxed text-cocoa">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/treatments/scaling-and-polishing.webp"
              alt="Professional dental cleaning and preventive family dentistry in Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.05}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="The specialists"
            title={["Routine care here.", "Specialist care here too."]}
            lede="When a family member needs orthodontic or endodontic treatment, the specialist does not have to be somewhere else. Both MDS disciplines are represented in the same practice."
          />

          <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:gap-8">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.slug} delay={index * 0.08}>
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="group grid h-full overflow-hidden rounded-3xl border border-line bg-surface sm:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="relative min-h-[20rem] overflow-hidden sm:min-h-full">
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, 24vw"
                      className="object-cover object-top transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <p className="eyebrow text-brick">{doctor.qualification}</p>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-cocoa">
                      {doctor.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-terracotta">
                      {doctor.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {doctor.tagline}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-brick">
                      View specialist profile →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sunk">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/operatory-wide.webp"
              alt="Treatment room at Eclectic Dental Care family dental clinic in Civil Lines"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.05}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>

          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="05"
              eyebrow="Civil Lines, Prayagraj"
              title={["One clinic,", "one familiar place."]}
              lede="Eclectic Dental Care is in Civil Lines near Hira Halwai Chauraha. Keeping family care in one practice makes follow-up, referrals between specialists and long-term records simpler."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/locations/civil-lines-prayagraj" variant="outline" size="md">
                  Clinic & directions
                </ButtonLink>
                <ButtonLink href="/contact" size="md">
                  Book appointment
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection
        index="06"
        eyebrow="Family dentistry FAQs"
        title={["Questions families", "ask before booking."]}
        lede="Age, first visits, orthodontic timing and how specialist care works within the same clinic."
        items={familyFaqs}
      />

      <section className="section bg-ivory">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="07"
              eyebrow="Explore treatment"
              title={["Go straight to", "the specific problem."]}
              lede="If you already know what a family member needs, use the detailed treatment page instead of starting with a broad family-care guide."
            />
            <ArrowLink href="/services">All dental treatments</ArrowLink>
          </div>

          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {familyServices.slice(0, 8).map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-tint"
                >
                  <p className="eyebrow text-brick">{service.category}</p>
                  <h3 className="mt-3 font-display text-lg leading-tight text-cocoa">
                    {service.name}
                  </h3>
                  <span className="mt-5 text-sm font-semibold text-brick">
                    Read guide →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand
        eyebrow="Family dentistry"
        title={["One clinic for", "the family&apos;s dental care."]}
        body="Family dental appointments are available at our Civil Lines clinic in Prayagraj. Call or WhatsApp to arrange visits for one or more family members."
        waText="Hi, I'd like to book a family dental appointment at Eclectic Dental Care."
      />
    </>
  );
}
