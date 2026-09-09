import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { areaGroups } from "@/lib/areas";
import { services } from "@/lib/services";
import { site, telLink } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve in Prayagraj — Dentist Near You",
  description:
    "Dentist in Civil Lines, Prayagraj — serving Georgetown, Tagore Town, Katra, Allahpur, Lukerganj, Naini, Jhunsi and the wider Allahabad district.",
  alternates: { canonical: "/areas-we-serve" },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Areas we serve", url: "/areas-we-serve" },
];

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "WebPage",
                url: "/areas-we-serve",
                name: "Areas we serve in Prayagraj",
                description: metadata.description as string,
              }),
              breadcrumbSchema(trail),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Areas we serve"
        title={["A dentist in the", "middle of Prayagraj."]}
        lede="We are on Sardar Patel Marg in Civil Lines — central, and reachable from most of the city without crossing it. Here is where our patients travel from, and what to know if you are coming from further out."
        trail={trail}
      />

      {areaGroups.map((group, gi) => (
        <section
          key={group.title}
          className={`section ${gi % 2 === 0 ? "bg-ivory" : "bg-sunk"} pt-0 md:pt-0`}
        >
          <div className="shell">
            <div className="border-t border-line-strong/50 pt-12">
              <SectionHeading
                index={String(gi + 1).padStart(2, "0")}
                eyebrow={group.eyebrow}
                title={[group.title]}
                lede={group.blurb}
              />

              <Stagger className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {group.areas.map((area) => (
                  <StaggerItem key={area.name}>
                    <div className="h-full bg-surface p-6">
                      <h3 className="font-display text-xl leading-tight text-cocoa">
                        {area.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {area.note}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>
      ))}

      {/* Practical directions */}
      <section className="section bg-sandwash">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Getting here"
              title={["Finding the", "clinic."]}
              lede="Open the map for turn-by-turn directions from wherever you are. If you cannot find us on arrival, call and we will talk you in."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-line bg-ivory p-6">
                <p className="eyebrow text-brick">The address</p>
                <address className="mt-3 not-italic leading-relaxed text-cocoa">
                  <span className="block font-semibold">{site.name}</span>
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.city}
                  <br />
                  {site.address.region} {site.address.postalCode}
                </address>
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  <ButtonLink href={site.mapsUrl} external size="md">
                    Open in Maps
                  </ButtonLink>
                  <ButtonLink href={telLink} variant="outline" size="md">
                    Call the clinic
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-ivory sm:aspect-[16/10]">
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

      {/* Treatments — keeps this page linked into the rest of the site */}
      <section className="section bg-ivory">
        <div className="shell">
          <SectionHeading
            eyebrow="What you can come for"
            title={["Every treatment,", "in one clinic."]}
            lede="Whichever part of Prayagraj you are travelling from, these are what we do — with two MDS specialists in-house so complex cases do not get referred on."
          />
          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-wrap gap-2.5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-line-strong px-4 py-2.5 text-sm text-cocoa transition-colors hover:border-brick hover:bg-tint hover:text-brick"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title={["However far", "you are coming."]}
        body="Call ahead and we will give you a time, so the journey is one trip rather than two."
      />
    </>
  );
}
