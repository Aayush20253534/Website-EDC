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

const PAGE_PATH = "/dental-checkup-prayagraj";

const pageDescription =
  "Dental checkup in Prayagraj at Eclectic Dental Care, Civil Lines. Teeth and gum examination, preventive advice, X-rays when needed and clear treatment planning.";

export const metadata: Metadata = {
  title: "Dental Checkup in Prayagraj",
  description: pageDescription,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_PATH,
    siteName: site.name,
    title: "Dental Checkup in Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: [
      {
        url: "/images/clinic/operatory-chairs.webp",
        width: 1200,
        height: 800,
        alt: "Dental treatment room at Eclectic Dental Care in Prayagraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Checkup in Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: ["/images/clinic/operatory-chairs.webp"],
  },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Treatments", url: "/services" },
  { name: "Dental checkup", url: PAGE_PATH },
];

const preventiveSlugs = [
  "scaling-and-polishing",
  "gum-disease-treatment",
  "tooth-coloured-fillings",
  "kids-dentistry",
] as const;

const preventiveServices = preventiveSlugs.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);
  return service ? [service] : [];
});

const checkupSteps = [
  {
    title: "Listen first",
    body: "The appointment starts with what you have noticed: pain, sensitivity, bleeding gums, a broken filling, a cosmetic concern, or simply that it has been a while.",
  },
  {
    title: "Examine teeth and existing work",
    body: "Teeth, fillings, crowns and other restorations are checked for decay, cracks, wear, leakage and anything that needs monitoring rather than immediate treatment.",
  },
  {
    title: "Check the gums and bite",
    body: "Gum health, plaque and tartar, bleeding, recession and bite-related concerns are assessed because healthy teeth still depend on healthy supporting tissues.",
  },
  {
    title: "Use imaging only when it adds information",
    body: "An X-ray or digital scan is recommended when it can answer a clinical question or change the treatment plan, not simply because equipment is available.",
  },
  {
    title: "Explain the findings",
    body: "You should leave knowing what is healthy, what needs watching, what needs treatment and what can safely be left alone.",
  },
  {
    title: "Plan the next step",
    body: "If treatment is needed, options, sequence, expected visits and costs are discussed before anything begins. Urgent problems are prioritised first.",
  },
];

const detectionItems = [
  "Early tooth decay before it becomes a larger cavity",
  "Cracked or leaking fillings and crowns",
  "Gingivitis, gum disease, recession or tartar build-up",
  "Bite wear, clenching or tooth movement",
  "Wisdom-tooth problems or areas that are difficult to clean",
  "Developing orthodontic concerns in children and teenagers",
];

const checkupFaqs = [
  {
    q: "What happens during a dental checkup?",
    a: "A checkup usually includes discussing symptoms or concerns, examining the teeth and existing restorations, assessing gum health and the bite, and deciding whether any X-ray or other investigation is genuinely useful. The findings and next steps are then explained.",
  },
  {
    q: "How often should I have a dental checkup?",
    a: "There is no single interval that is right for everyone. The appropriate recall period depends on your decay risk, gum health, existing dental work, age, medical factors and what is being monitored. Your dentist can recommend an interval after examining you.",
  },
  {
    q: "Will I need an X-ray at every checkup?",
    a: "No. Dental X-rays should be taken when they are clinically justified and expected to provide information that affects diagnosis or treatment. They are not an automatic part of every routine visit.",
  },
  {
    q: "Is teeth cleaning included in every dental checkup?",
    a: "Not necessarily. If plaque, tartar, staining or gum health means professional cleaning would be useful, scaling and polishing can be recommended. Examination and cleaning are related but separate clinical needs.",
  },
  {
    q: "Can children have routine dental checkups at the clinic?",
    a: "Yes. Children can be seen from the first tooth onwards. Visits can include prevention, brushing and diet advice, decay checks and assessment of developing teeth and bite.",
  },
  {
    q: "Where can I book a dental checkup in Prayagraj?",
    a: `Eclectic Dental Care is at ${site.addressLine}, near ${site.address.landmark} in Civil Lines, Prayagraj (Allahabad). Appointments can be booked by phone, WhatsApp or the contact page.`,
  },
];

export default function DentalCheckupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "WebPage",
                url: PAGE_PATH,
                name: "Dental Checkup in Prayagraj",
                description: pageDescription,
              }),
              ...doctors.map((doctor) => physicianSchema(doctor)),
              breadcrumbSchema(trail),
              faqSchema(checkupFaqs),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Preventive dentistry · Prayagraj"
        title={["Dental checkup", "in Prayagraj."]}
        lede="A useful dental checkup is not a sales appointment. It is an examination of your teeth, gums, bite and existing dental work, followed by a clear explanation of what needs treatment — and what does not."
        trail={trail}
      />

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/operatory-chairs.webp"
              alt="Dental examination room at Eclectic Dental Care, Civil Lines, Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.055}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <p className="eyebrow text-brick">Your first step</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa sm:text-4xl">
                Find out what actually needs attention.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Pain is one reason to book, but not the only one. A checkup can
                identify early decay, gum problems, worn restorations and bite
                changes before they become more complicated to treat.
              </p>

              <div className="mt-7 border-t border-line pt-6">
                <p className="text-sm leading-relaxed text-muted">
                  Appointments are at our{" "}
                  <Link
                    href="/locations/civil-lines-prayagraj"
                    className="font-semibold text-brick transition-colors hover:text-brick-hover"
                  >
                    Civil Lines clinic in Prayagraj
                  </Link>
                  , near {site.address.landmark}.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="md">
                  Book a dental checkup
                </ButtonLink>
                <ButtonLink href="/services/scaling-and-polishing" variant="outline" size="md">
                  Teeth cleaning
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-sunk">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="The examination"
            title={["What happens", "during a checkup."]}
            lede="The sequence is simple: understand the concern, examine properly, investigate only where useful, and explain the findings before treatment decisions are made."
          />

          <Stagger className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {checkupSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="h-full bg-surface p-6 sm:p-7">
                  <span className="font-display text-lg text-terracotta lining-nums tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-cocoa">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="02"
              eyebrow="Imaging & digital tools"
              title={["Use technology", "when it answers a question."]}
              lede="Not every checkup needs an X-ray, scan or digital model. Investigations are useful when they reveal information the examination alone cannot provide."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                <p className="eyebrow text-brick">iTero at the clinic</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  The iTero Element scanner is available for digital impressions
                  and treatment planning where clinically useful, including
                  orthodontic and selected restorative workflows. It is not
                  presented as a compulsory part of a routine checkup.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/itero-intraoral-scan.webp"
              alt="iTero intraoral scanning at Eclectic Dental Care in Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.05}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section bg-sandwash">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Early detection"
            title={["Small problems are", "easier to manage early."]}
            lede="A preventive visit is useful because several common dental problems can exist before they become painful enough to force an emergency appointment."
          />

          <Stagger className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {detectionItems.map((item, index) => (
              <StaggerItem key={item}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-ivory p-5">
                  <span className="font-display text-sm leading-6 text-terracotta lining-nums tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-cocoa">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="Preventive care"
            title={["What may follow", "after the examination."]}
            lede="A checkup does not automatically lead to treatment. Where something does need attention, these are common next steps."
            action={
              <ButtonLink href="/services" variant="outline" size="md">
                All {services.length} treatments
              </ButtonLink>
            }
          />

          <Stagger className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {preventiveServices.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-sunk">
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

      <section className="section bg-sunk">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/treatments/scaling-and-polishing.webp"
              alt="Professional scaling and polishing after a dental examination"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.05}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>

          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="05"
              eyebrow="Cleaning"
              title={["Checkup and cleaning", "are not the same thing."]}
              lede="A dental checkup is the examination and diagnosis. Scaling and polishing is a professional cleaning procedure recommended when plaque, hardened tartar, stain or gum health makes it useful."
            />

            <Reveal delay={0.12}>
              <div className="mt-8">
                <ArrowLink href="/services/scaling-and-polishing">
                  Read about scaling & polishing
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="shell">
          <SectionHeading
            index="06"
            eyebrow="The dentists"
            title={["The right specialist", "when the checkup finds one."]}
            lede="Routine examinations can uncover problems that need specialist treatment. Orthodontic concerns are led by Dr. Umang Malviya; endodontic and restorative concerns are led by Dr. Anuja Ray."
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

      <section className="section bg-sandwash">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="07"
              eyebrow="Civil Lines, Prayagraj"
              title={["Book the examination", "before the treatment."]}
              lede="Eclectic Dental Care is in Civil Lines near Hira Halwai Chauraha. If you are not sure which treatment you need, a checkup is the sensible place to start."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="md">
                  Book a checkup
                </ButtonLink>
                <ButtonLink href="/locations/civil-lines-prayagraj" variant="outline" size="md">
                  Clinic & directions
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/reception.webp"
              alt="Reception at Eclectic Dental Care in Civil Lines, Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.05}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>
        </div>
      </section>

      <FaqSection
        index="08"
        eyebrow="Dental checkup FAQs"
        title={["Questions before", "a routine visit."]}
        lede="What gets examined, how often to return, when X-rays are useful and when professional cleaning is actually needed."
        items={checkupFaqs}
      />

      <section className="section bg-ivory">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="09"
              eyebrow="Related care"
              title={["If the checkup", "finds a problem."]}
              lede="Use the specific treatment page once there is a diagnosis. Those pages explain the procedure, alternatives, cost factors and specialist involved."
            />
            <ArrowLink href="/services">All dental treatments</ArrowLink>
          </div>

          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {preventiveServices.map((service) => (
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
        eyebrow="Dental checkup"
        title={["Start with", "a proper examination."]}
        body="Dental checkups are available at our Civil Lines clinic in Prayagraj. Call or WhatsApp to book a routine visit or discuss a concern before you come in."
        waText="Hi, I'd like to book a dental checkup at Eclectic Dental Care."
      />
    </>
  );
}
