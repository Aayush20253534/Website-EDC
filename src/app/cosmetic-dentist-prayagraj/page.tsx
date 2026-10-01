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

const PAGE_PATH = "/cosmetic-dentist-prayagraj";

const pageDescription =
  "Cosmetic dentist in Prayagraj for veneers, whitening, Invisalign, smile makeovers and crowns. Specialist-led planning at our Civil Lines clinic.";

export const metadata: Metadata = {
  title: "Cosmetic Dentist in Prayagraj",
  description: pageDescription,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_PATH,
    siteName: site.name,
    title: "Cosmetic Dentist in Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: [
      {
        url: "/images/treatments/smile-makeover.webp",
        width: 1200,
        height: 800,
        alt: "Cosmetic dentistry and smile makeover treatment in Prayagraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetic Dentist in Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: ["/images/treatments/smile-makeover.webp"],
  },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Treatments", url: "/services" },
  { name: "Cosmetic dentistry", url: PAGE_PATH },
];

const cosmeticSlugs = [
  "smile-makeover",
  "dental-veneers",
  "teeth-whitening",
  "invisalign-clear-aligners",
  "dental-crowns-bridges",
] as const;

const cosmeticServices = cosmeticSlugs.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);
  return service ? [service] : [];
});

const planningSteps = [
  {
    title: "Start with the problem, not a procedure",
    body: "We first work out what is actually changing the smile — colour, position, shape, damage, spacing, bite, or a combination of them.",
  },
  {
    title: "Protect healthy tooth structure",
    body: "Whitening or orthodontics may solve a problem without cutting tooth structure. Veneers and crowns are considered when they genuinely add something those options cannot.",
  },
  {
    title: "Plan the final result",
    body: "Digital scans, photographs and bite assessment help the dentist judge proportion, alignment and how proposed changes will work with the rest of the mouth.",
  },
  {
    title: "Sequence treatment properly",
    body: "When more than one treatment is useful, the order matters. Alignment, whitening and restorative work are planned so later stages do not undo earlier ones.",
  },
];

const cosmeticFaqs = [
  {
    q: "What treatments are included in cosmetic dentistry at Eclectic Dental Care?",
    a: "Cosmetic treatment may include teeth whitening, veneers, Invisalign or other orthodontic treatment, smile makeover planning, tooth-coloured restorations and crowns. The combination depends on what you want to change and what is clinically appropriate.",
  },
  {
    q: "Do I need veneers for a smile makeover?",
    a: "Not necessarily. Some smiles are better improved with whitening, orthodontic movement, minor restorative work or a combination of those. Veneers are one option, not the default answer.",
  },
  {
    q: "Can Invisalign be part of cosmetic dental treatment?",
    a: "Yes. When tooth position is the main issue, moving the teeth can improve the smile while preserving natural tooth structure. Dr. Umang Malviya is a certified Invisalign provider and plans aligner treatment at the clinic.",
  },
  {
    q: "Who plans cosmetic dentistry at the clinic?",
    a: "Treatment is planned according to the problem involved. Dr. Umang Malviya leads orthodontic and aligner treatment, while Dr. Anuja Ray leads restorative and aesthetic work such as veneers, whitening and crowns.",
  },
  {
    q: "Where is the cosmetic dentistry clinic in Prayagraj?",
    a: `Eclectic Dental Care is at ${site.addressLine}, near ${site.address.landmark} in Civil Lines, Prayagraj (Allahabad).`,
  },
];

export default function CosmeticDentistPage() {
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
                name: "Cosmetic Dentist in Prayagraj",
                description: pageDescription,
              }),
              ...doctors.map((doctor) => physicianSchema(doctor)),
              breadcrumbSchema(trail),
              faqSchema(cosmeticFaqs),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Cosmetic dentistry · Prayagraj"
        title={["Cosmetic dentist", "in Prayagraj."]}
        lede="A smile can look wrong for very different reasons. We plan around the cause — alignment, colour, shape, damage or missing tooth structure — rather than pushing one cosmetic procedure at everyone."
        trail={trail}
      />

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/treatments/smile-makeover.webp"
              alt="Smile makeover and cosmetic dentistry treatment in Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.055}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <p className="eyebrow text-brick">A treatment plan, not a package</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa sm:text-4xl">
                Improve the smile without over-treating the teeth.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Cosmetic dentistry at Eclectic Dental Care brings orthodontic
                and restorative planning together. That matters because the
                least invasive route may be to move a tooth, whiten it, rebuild
                it — or simply leave it alone.
              </p>

              <div className="mt-7 border-t border-line pt-6">
                <p className="text-sm leading-relaxed text-muted">
                  Consultations are at our{" "}
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
                  Book a smile consultation
                </ButtonLink>
                <ButtonLink href="/services/smile-makeover" variant="outline" size="md">
                  Smile makeover details
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
            eyebrow="Cosmetic treatments"
            title={["Different problems need", "different tools."]}
            lede="These treatments can change colour, alignment, proportion or damaged tooth structure. The right plan may use one of them or combine several in sequence."
          />

          <Stagger className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {cosmeticServices.map((service, index) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sandwash">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <p className="eyebrow text-brick">{service.category}</p>
                      <span className="font-display text-sm text-terracotta lining-nums tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl leading-tight text-cocoa sm:text-2xl">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
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

      <section className="section bg-ivory">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="02"
              eyebrow="Planning"
              title={["See the plan", "before committing."]}
              lede="Cosmetic work should be planned around the whole smile and bite, not around a single tooth viewed in isolation."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                <p className="eyebrow text-brick">Digital workflow</p>
                <p className="mt-3 leading-relaxed text-muted">
                  The clinic uses an iTero Element intraoral scanner for digital
                  impressions and Invisalign planning. It can also support
                  restorative planning where a digital scan is useful.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/invisalign-clincheck.webp"
              alt="Digital Invisalign ClinCheck planning at Eclectic Dental Care, Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.05}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>
        </div>

        <div className="shell mt-10 sm:mt-14">
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {planningSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="h-full bg-surface p-6 sm:p-8">
                  <span className="font-display text-lg text-terracotta lining-nums tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-cocoa">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-sandwash">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="The specialists"
            title={["Orthodontic and restorative", "planning in one clinic."]}
            lede="Some cosmetic cases are mainly about tooth position; others are about restoring shape, colour or damaged tooth structure. The treatment lead changes accordingly."
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

      <section className="section bg-ivory">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/dr-umang-invisalign-provider.webp"
              alt="Dr. Umang Malviya beside Invisalign provider signage at Eclectic Dental Care"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.05}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>

          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="04"
              eyebrow="Conservative by design"
              title={["The smallest change", "that solves the problem."]}
              lede="Cosmetic dentistry should not automatically mean drilling healthy teeth. The plan starts by asking what can be preserved."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 space-y-4">
                {[
                  "Alignment can sometimes correct spacing or position without veneers.",
                  "Whitening can change colour without changing tooth shape.",
                  "Composite or ceramic restorations are considered when shape or damaged structure genuinely needs rebuilding.",
                  "Crowns are used when a tooth needs structural protection, not simply because a cosmetic package says so.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-line bg-surface p-4"
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
        </div>
      </section>

      <section className="section bg-sunk">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionHeading
                index="05"
                eyebrow="Civil Lines, Prayagraj"
                title={["Cosmetic dentistry", "at the same clinic."]}
                lede="Consultation, digital scanning, orthodontic planning and restorative treatment are coordinated from our Civil Lines clinic near Hira Halwai Chauraha."
              />
            </div>
            <Reveal delay={0.12} className="lg:col-span-4 lg:text-right">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink href="/locations/civil-lines-prayagraj" variant="outline" size="md">
                  Clinic & directions
                </ButtonLink>
                <ButtonLink href="/contact" size="md">
                  Book consultation
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection
        index="06"
        eyebrow="Cosmetic dentistry FAQs"
        title={["Questions before", "changing your smile."]}
        lede="The useful questions are about suitability, alternatives and how much tooth structure actually needs to change."
        items={cosmeticFaqs}
      />

      <section className="section bg-ivory">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="07"
              eyebrow="Explore further"
              title={["Start with the", "specific treatment."]}
              lede="If you already know the change you are considering, go directly to its treatment page for the process, alternatives, cost factors and FAQs."
            />
            <ArrowLink href="/services">All dental treatments</ArrowLink>
          </div>

          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {cosmeticServices.map((service) => (
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
        eyebrow="Cosmetic dentistry"
        title={["Plan the smile,", "then choose the treatment."]}
        body="Cosmetic dentistry consultations are available at our Civil Lines clinic in Prayagraj. Call or WhatsApp to discuss what you would like to change."
        waText="Hi, I'd like to book a cosmetic dentistry consultation at Eclectic Dental Care."
      />
    </>
  );
}
