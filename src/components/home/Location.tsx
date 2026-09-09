import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { Reveal } from "@/components/motion";
import { site, telLink, waLink } from "@/lib/site";

export function Location() {
  return (
    <section className="section bg-sandwash">
      <div className="shell">
        <SectionHeading
          index="09"
          eyebrow="Find us"
          title={["Civil Lines,", "central Prayagraj."]}
          lede="On Sardar Patel Marg — a short drive from Georgetown, Tagore Town, Katra, Allahpur and Lukerganj."
        />

        <div className="mt-9 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-12">
          {/* Map */}
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-sunk sm:aspect-[16/10]">
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

          {/* Details */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
              <div>
                <p className="eyebrow text-brick">Address</p>
                <address className="mt-3 not-italic leading-relaxed text-cocoa">
                  <span className="block font-semibold">{site.name}</span>
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.city}
                  <br />
                  {site.address.region} {site.address.postalCode}
                </address>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="eyebrow text-brick">Opening hours</p>
                <dl className="mt-3 space-y-2">
                  {site.hours.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4 text-[0.9375rem]">
                      <dt className="text-muted">{h.label}</dt>
                      <dd className="font-medium text-cocoa">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="eyebrow text-brick">Get in touch</p>
                <div className="mt-3 space-y-1.5">
                  <a
                    href={telLink}
                    className="block text-[0.9375rem] font-semibold text-cocoa transition-colors hover:text-brick"
                  >
                    {site.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="block break-all text-sm text-muted transition-colors hover:text-brick"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="mt-8 grid gap-2.5 pt-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <ButtonLink href={site.mapsUrl} external size="md">
                  Get directions
                </ButtonLink>
                <ButtonLink href={waLink()} external variant="whatsapp" size="md">
                  <WhatsAppGlyph />
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
