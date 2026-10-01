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
import { WhatsAppGlyph } from "@/components/layout/Header";
import { services } from "@/lib/services";
import { doctors } from "@/lib/doctors";
import { site, telLink, waLink } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  webPageSchema,
} from "@/lib/schema";

const PAGE_PATH = "/locations/civil-lines-prayagraj";

const pageDescription =
  "Dentist in Civil Lines, Prayagraj at Eclectic Dental Care near Hira Halwai Chauraha. Two MDS specialists, Invisalign, root canals, implants and family dentistry.";

export const metadata: Metadata = {
  title: "Dentist in Civil Lines, Prayagraj",
  description: pageDescription,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_PATH,
    siteName: site.name,
    title: "Dentist in Civil Lines, Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: [
      {
        url: "/images/clinic/reception.webp",
        width: 1200,
        height: 800,
        alt: "Reception at Eclectic Dental Care in Civil Lines, Prayagraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentist in Civil Lines, Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: ["/images/clinic/reception.webp"],
  },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Areas we serve", url: "/areas-we-serve" },
  { name: "Civil Lines", url: PAGE_PATH },
];

const featuredSlugs = [
  "invisalign-clear-aligners",
  "braces-orthodontic-treatment",
  "root-canal-treatment",
  "dental-implants",
  "kids-dentistry",
  "emergency-dental-care",
] as const;

const featuredServices = featuredSlugs.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);
  return service ? [service] : [];
});

const localFaqs = [
  {
    q: "Where is Eclectic Dental Care in Civil Lines, Prayagraj?",
    a: `The clinic is at ${site.addressLine}, near ${site.address.landmark}. Use the directions button on this page to open the location in Google Maps.`,
  },
  {
    q: "What dental treatments are available at the Civil Lines clinic?",
    a: "The clinic offers orthodontics, Invisalign and braces, root canal treatment, fillings, crowns, dental implants, gum care, kids dentistry, cosmetic treatments, preventive care and emergency dentistry.",
  },
  {
    q: "Which dentists practise at the Civil Lines clinic?",
    a: "Dr. Umang Malviya is an MDS orthodontist and certified Invisalign provider. Dr. Anuja Ray is an MDS endodontist focused on root canal and restorative dentistry.",
  },
  {
    q: "Is the clinic open on Sunday?",
    a: "Yes. Eclectic Dental Care is open seven days a week. Sunday hours are 10:00 am to 2:00 pm; other daily timings are listed on this page.",
  },
  {
    q: "Can I contact the clinic before travelling from another part of Prayagraj?",
    a: `Yes. Call ${site.phoneDisplay} or use WhatsApp before travelling. For dental pain, swelling or another urgent problem, calling first helps the clinic plan a same-day slot where possible.`,
  },
];

export default function CivilLinesLocationPage() {
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
                name: "Dentist in Civil Lines, Prayagraj",
                description: pageDescription,
              }),
              breadcrumbSchema(trail),
              faqSchema(localFaqs),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Civil Lines clinic"
        title={["Dentist in Civil Lines,", "Prayagraj."]}
        lede="Eclectic Dental Care is a specialist-led dental clinic near Hira Halwai Chauraha, with orthodontics, endodontics and everyday family dental care under one roof."
        trail={trail}
      />

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          <Reveal className="lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/reception.webp"
              alt="Reception and waiting area at Eclectic Dental Care, Civil Lines, Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.06}
              className="aspect-[16/11] h-full min-h-[20rem] rounded-3xl border border-line"
            />
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <p className="eyebrow text-brick">Visit the clinic</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa sm:text-4xl">
                Specialist dentistry in central Prayagraj.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                The clinic is in Civil Lines, close to the central parts of
                Prayagraj and reachable from Georgetown, Tagore Town, Katra,
                Allahpur, Lukerganj and the wider city.
              </p>

              <address className="mt-7 border-t border-line pt-6 not-italic leading-relaxed text-cocoa">
                <span className="block font-semibold">{site.name}</span>
                <span className="block">{site.address.street}</span>
                <span className="block">{site.address.landmark}</span>
                <span className="block">
                  {site.address.neighborhood}, {site.address.locality}, {site.address.city}
                </span>
                <span className="block">
                  {site.address.region} {site.address.postalCode}
                </span>
              </address>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <ButtonLink href={site.mapsUrl} external size="md">
                  Get directions
                </ButtonLink>
                <ButtonLink href={waLink()} external variant="whatsapp" size="md">
                  <WhatsAppGlyph />
                  WhatsApp
                </ButtonLink>
              </div>

              <a
                href={telLink}
                className="mt-5 text-sm font-semibold text-brick transition-colors hover:text-brick-hover"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "2", label: "MDS specialists", sub: "Orthodontics · Endodontics" },
            { value: String(services.length), label: "Dental treatments", sub: "Children and adults" },
            { value: "7", label: "Days open", sub: "Including Sunday" },
            { value: "iTero", label: "Digital scanning", sub: "Intraoral scanner on site" },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <div className="h-full bg-surface p-6">
                <p className="font-display text-4xl leading-none text-terracotta">
                  {item.value}
                </p>
                <p className="mt-3 font-semibold text-cocoa">{item.label}</p>
                <p className="mt-1 text-sm text-muted">{item.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section bg-sunk">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Dental treatments"
            title={["What you can come", "to Civil Lines for."]}
            lede="These are some of the most common reasons patients visit the clinic. Each treatment has its own detailed page with the specialist involved, process, alternatives and FAQs."
            action={
              <ButtonLink href="/services" variant="outline" size="md">
                See all {services.length} treatments
              </ButtonLink>
            }
          />

          <Stagger className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
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
                    <p className="eyebrow text-brick">{service.category}</p>
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
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="The dentists"
            title={["Specialist care,", "without another referral."]}
            lede="Both principal dentists hold MDS specialist qualifications. The doctor whose training fits the problem leads that part of your treatment."
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
                      View profile →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sandwash">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              index="03"
              eyebrow="Getting here"
              title={["Find the clinic", "in Civil Lines."]}
              lede="Use Google Maps for turn-by-turn directions. If you are unsure on arrival, call the clinic and the team can guide you from the nearby landmark."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 rounded-2xl border border-line bg-ivory p-6">
                <p className="eyebrow text-brick">Opening hours</p>
                <dl className="mt-4 space-y-2.5">
                  {site.hours.map((hours) => (
                    <div key={hours.label} className="flex justify-between gap-5 text-sm">
                      <dt className="text-muted">{hours.label}</dt>
                      <dd className="text-right font-medium text-cocoa">{hours.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href={site.mapsUrl} external size="md">
                  Open Google Maps
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="md">
                  Contact clinic
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-ivory sm:aspect-[16/10]">
              <iframe
                title={`Map showing ${site.name} in Civil Lines, Prayagraj`}
                src={site.mapsEmbed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="Inside the clinic"
            title={["The actual rooms,", "not stock interiors."]}
            lede="These photographs are from Eclectic Dental Care in Civil Lines, including the treatment rooms and digital scanning setup."
            action={
              <ArrowLink href="/gallery">
                View clinic gallery
              </ArrowLink>
            }
          />

          <Stagger className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3">
            {[
              {
                src: "/images/clinic/operatory-wide.webp",
                alt: "Treatment room at Eclectic Dental Care in Civil Lines, Prayagraj",
                label: "Treatment room",
              },
              {
                src: "/images/clinic/itero-intraoral-scan.webp",
                alt: "iTero intraoral scanner at Eclectic Dental Care in Prayagraj",
                label: "iTero digital scanning",
              },
              {
                src: "/images/clinic/invisalign-clincheck.webp",
                alt: "Invisalign ClinCheck planning at Eclectic Dental Care",
                label: "Digital treatment planning",
              },
            ].map((photo) => (
              <StaggerItem key={photo.src}>
                <figure className="group">
                  <ParallaxImage
                    src={photo.src}
                    alt={photo.alt}
                    sizes="(max-width: 640px) 92vw, 31vw"
                    strength={0.055}
                    className="aspect-[4/3] rounded-2xl border border-line"
                    imageClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <figcaption className="mt-3 text-sm font-medium text-cocoa">
                    {photo.label}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-sunk">
        <div className="shell">
          <SectionHeading
            index="05"
            eyebrow="Across Prayagraj"
            title={["Patients travel here", "from across the city."]}
            lede="Civil Lines is the clinic's physical location. We also see patients coming from the surrounding Prayagraj localities listed below."
            action={
              <ArrowLink href="/areas-we-serve">
                Full areas & directions guide
              </ArrowLink>
            }
          />

          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-wrap gap-2.5">
              {site.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-line-strong/60 bg-ivory px-4 py-2.5 text-sm text-cocoa"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        index="06"
        eyebrow="Civil Lines clinic FAQs"
        title={["Before you", "make the trip."]}
        lede="Location, timings, specialists and treatment availability at the Civil Lines clinic."
        items={localFaqs}
      />

      <CTABand
        eyebrow="Book at Civil Lines"
        title={["Talk to the clinic", "before you travel."]}
        body={`${site.addressLine}. Call or WhatsApp for an appointment, directions or an urgent dental problem.`}
        waText="Hi, I'd like to book an appointment at the Civil Lines clinic."
      />
    </>
  );
}
