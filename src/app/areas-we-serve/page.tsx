import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, ArrowLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { areaGroups } from "@/lib/areas";
import { doctors } from "@/lib/doctors";
import { services } from "@/lib/services";
import { site, telLink } from "@/lib/site";
import {
  breadcrumbSchema,
  graph,
  physicianSchema,
  webPageSchema,
} from "@/lib/schema";

const PAGE_PATH = "/areas-we-serve";

const pageDescription =
  "Dentist in Civil Lines, Prayagraj serving Georgetown, Tagore Town, Katra, Allahpur, Lukerganj, Naini, Jhunsi, Phaphamau and the wider Allahabad district.";

export const metadata: Metadata = {
  title: "Areas We Serve in Prayagraj | Dentist Near Civil Lines",
  description: pageDescription,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_PATH,
    siteName: site.name,
    title: "Areas We Serve in Prayagraj | Eclectic Dental Care",
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
    title: "Areas We Serve in Prayagraj | Eclectic Dental Care",
    description: pageDescription,
    images: ["/images/clinic/reception.webp"],
  },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Areas we serve", url: PAGE_PATH },
];

const featuredSlugs = [
  "invisalign-clear-aligners",
  "root-canal-treatment",
  "dental-implants",
  "emergency-dental-care",
] as const;

const featuredServices = featuredSlugs.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);
  return service ? [service] : [];
});

export default function AreasPage() {
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
                name: "Areas we serve in Prayagraj",
                description: pageDescription,
              }),
              ...doctors.map((doctor) => physicianSchema(doctor)),
              breadcrumbSchema(trail),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Areas we serve"
        title={["A dentist in the", "middle of Prayagraj."]}
        lede="Our physical clinic is in Civil Lines near Hira Halwai Chauraha. Patients visit from central Prayagraj, the university side, Naini, Jhunsi, Phaphamau and the wider Allahabad district."
        trail={trail}
      />

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/reception.webp"
              alt="Reception at Eclectic Dental Care in Civil Lines, Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.055}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <p className="eyebrow text-brick">The physical clinic</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa sm:text-4xl">
                Civil Lines is the anchor for every area on this page.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                We do not operate separate branches in each locality listed
                below. They are areas from which patients travel to our one
                Civil Lines clinic, so directions and treatment stay tied to a
                real physical location.
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

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/locations/civil-lines-prayagraj" size="md">
                  Civil Lines clinic
                </ButtonLink>
                <ButtonLink href={site.mapsUrl} external variant="outline" size="md">
                  Open Google Maps
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {areaGroups.map((group, gi) => (
        <section
          key={group.title}
          className={`section ${gi % 2 === 0 ? "bg-sunk" : "bg-ivory"}`}
        >
          <div className="shell">
            <SectionHeading
              index={String(gi + 1).padStart(2, "0")}
              eyebrow={group.eyebrow}
              title={[group.title]}
              lede={group.blurb}
            />

            <Stagger className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {group.areas.map((area, index) => (
                <StaggerItem key={area.name}>
                  <article className="flex h-full gap-4 rounded-2xl border border-line bg-surface p-5 sm:p-6">
                    <span className="font-display text-sm leading-6 text-terracotta lining-nums tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-tight text-cocoa">
                        {area.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {area.note}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ))}

      <section className="section bg-sandwash">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="04"
              eyebrow="Getting here"
              title={["Find the clinic", "from anywhere in the city."]}
              lede="Use Google Maps for turn-by-turn directions. If you are travelling from Naini, Jhunsi, Phaphamau or farther out, booking ahead avoids making the trip without a fixed appointment time."
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

                <div className="mt-6 border-t border-line pt-5">
                  <a
                    href={telLink}
                    className="text-sm font-semibold text-brick transition-colors hover:text-brick-hover"
                  >
                    Call {site.phoneDisplay} →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
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
            index="05"
            eyebrow="Why patients travel"
            title={["Specialist treatment,", "still in one clinic."]}
            lede="Patients do not travel because a locality name is on a webpage. They travel when the treatment or specialist they need is available in one place."
            action={
              <ButtonLink href="/services" variant="outline" size="md">
                All {services.length} treatments
              </ButtonLink>
            }
          />

          <Stagger className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
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
        <div className="shell">
          <SectionHeading
            index="06"
            eyebrow="The specialists"
            title={["The dentists patients", "are travelling to see."]}
            lede="Orthodontic cases are led by Dr. Umang Malviya. Endodontic and restorative cases are led by Dr. Anuja Ray. Both practise from the same Civil Lines clinic."
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
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="min-w-0 lg:col-span-7">
            <ParallaxImage
              src="/images/clinic/operatory-wide.webp"
              alt="Treatment room at Eclectic Dental Care in Civil Lines, Prayagraj"
              sizes="(max-width: 1024px) 92vw, 58vw"
              strength={0.05}
              className="aspect-[4/3] w-full max-w-full rounded-3xl border border-line sm:aspect-[16/10]"
            />
          </Reveal>

          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              index="07"
              eyebrow="Start with the right page"
              title={["Not every visit", "starts with a treatment."]}
              lede="If you are not sure what you need, book an examination first. If the question is broader — family care or cosmetic planning — use the appropriate hub instead."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 grid gap-3">
                <Link
                  href="/dental-checkup-prayagraj"
                  className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-tint"
                >
                  <p className="eyebrow text-brick">Preventive</p>
                  <p className="mt-2 font-display text-xl text-cocoa">
                    Dental checkup in Prayagraj →
                  </p>
                </Link>
                <Link
                  href="/family-dentist-prayagraj"
                  className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-tint"
                >
                  <p className="eyebrow text-brick">Family care</p>
                  <p className="mt-2 font-display text-xl text-cocoa">
                    Family dentist in Prayagraj →
                  </p>
                </Link>
                <Link
                  href="/cosmetic-dentist-prayagraj"
                  className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-tint"
                >
                  <p className="eyebrow text-brick">Smile planning</p>
                  <p className="mt-2 font-display text-xl text-cocoa">
                    Cosmetic dentist in Prayagraj →
                  </p>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-sandwash">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="08"
              eyebrow="The location"
              title={["One address,", "not twelve doorway pages."]}
              lede="Civil Lines is the actual clinic location. The surrounding locality names help patients understand whether the clinic is practical to reach without pretending we have a branch in each neighbourhood."
            />
            <ArrowLink href="/locations/civil-lines-prayagraj">
              Full Civil Lines clinic guide
            </ArrowLink>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Plan the journey"
        title={["Book a time", "before you travel."]}
        body="If you are coming from outside Civil Lines, call or WhatsApp first. We will give you an appointment time and the clinic location so the trip is planned before you leave."
        waText="Hi, I am travelling to Eclectic Dental Care and would like to book an appointment."
      />
    </>
  );
}
