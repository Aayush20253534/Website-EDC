import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const PAGE_PATH = "/guides";

const pageDescription =
  "Practical dental guides from Eclectic Dental Care in Prayagraj: braces vs Invisalign, root canal symptoms, bleeding gums, dental emergencies, kids dentistry and preventive care.";

export const metadata: Metadata = {
  title: "Dental Guides in Prayagraj",
  description: pageDescription,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_PATH,
    siteName: site.name,
    title: "Dental Guides | Eclectic Dental Care, Prayagraj",
    description: pageDescription,
    images: [
      {
        url: "/images/clinic/operatory-wide.webp",
        width: 1200,
        height: 800,
        alt: "Dental treatment room at Eclectic Dental Care in Prayagraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Guides | Eclectic Dental Care, Prayagraj",
    description: pageDescription,
    images: ["/images/clinic/operatory-wide.webp"],
  },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Guides", url: PAGE_PATH },
];

export default function GuidesPage() {
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
                name: "Dental guides from Eclectic Dental Care",
                description: pageDescription,
              }),
              breadcrumbSchema(trail),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Dental guides"
        title={["Useful answers,", "without the sales pitch."]}
        lede="Straightforward explanations for the questions patients usually search before they know which treatment page they actually need."
        trail={trail}
      />

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="min-w-0 lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-sunk sm:aspect-[16/10]">
              <Image
                src="/images/clinic/operatory-wide.webp"
                alt="Treatment room at Eclectic Dental Care, Civil Lines, Prayagraj"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 58vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <p className="eyebrow text-brick">How these guides work</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa sm:text-4xl">
                Learn enough to ask better questions.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                The guides explain common symptoms, treatment choices and
                preventive decisions. They do not replace an examination, and
                they deliberately avoid pretending one answer fits every mouth.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                When a guide points to a specific dental problem, it links
                directly to the relevant treatment and specialist at our Civil
                Lines clinic.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-sunk">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="All guides"
            title={["Start with the", "question you actually have."]}
            lede="Eight focused guides covering orthodontics, root canals, dental emergencies, gum health, restorative care, kids dentistry, wisdom teeth and routine checkups."
          />

          <Stagger className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <StaggerItem key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sandwash">
                    <Image
                      src={guide.image}
                      alt={guide.imageAlt}
                      fill
                      sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="eyebrow text-brick">{guide.category}</p>
                      <span className="text-xs text-muted">{guide.readingTime}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl leading-tight text-cocoa">
                      {guide.title}
                    </h2>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                      {guide.excerpt}
                    </p>
                    <span className="mt-6 text-sm font-semibold text-brick">
                      Read guide →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="shell grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <SectionHeading
              index="02"
              eyebrow="Need an examination instead?"
              title={["Information helps.", "Diagnosis still needs a dentist."]}
              lede="If you are dealing with pain, swelling, a broken tooth or something you cannot identify from a guide, start with a proper dental examination rather than trying to diagnose it from a screen."
            />
          </div>
          <Reveal delay={0.12} className="lg:col-span-4 lg:text-right">
            <Link
              href="/dental-checkup-prayagraj"
              className="inline-flex rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-brick transition-colors hover:bg-tint"
            >
              Dental checkup in Prayagraj →
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Still unsure?"
        title={["Start with", "a proper examination."]}
        body="The guides are general information. If you have symptoms or need a diagnosis, book an examination at our Civil Lines clinic in Prayagraj."
        waText="Hi, I have a dental question and would like to book an examination at Eclectic Dental Care."
      />
    </>
  );
}
