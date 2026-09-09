import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site, telLink, waLink } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment, Prayagraj",
  description:
    "Book at Eclectic Dental Care, Civil Lines, Prayagraj. Call +91 87075 37640 or message on WhatsApp. Open Mon–Sat 10am–8pm, Sun 6–8pm.",
  alternates: { canonical: "/contact" },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "ContactPage",
                url: "/contact",
                name: "Contact and book — Eclectic Dental Care, Prayagraj",
                description: metadata.description as string,
              }),
              breadcrumbSchema(trail),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Contact & booking"
        title={["Come and see us", "in Civil Lines."]}
        lede="Call or WhatsApp for the fastest response — we usually reply the same day. Emergencies with pain or swelling are prioritised."
        trail={trail}
      >
        <Stagger className="mt-12 grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "Call the clinic",
              value: site.phoneDisplay,
              href: telLink,
              hint: "Fastest — Mon–Sat 10am–8pm",
              external: true,
            },
            {
              label: "WhatsApp",
              value: "Message us",
              href: waLink(),
              hint: "Send photos of the problem",
              external: true,
            },
            {
              label: "Email",
              value: site.email,
              href: `mailto:${site.email}`,
              hint: "For records and reports",
              external: true,
            },
          ].map((c) => (
            <StaggerItem key={c.label}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-brick hover:bg-tint"
              >
                <span className="eyebrow text-brick">{c.label}</span>
                <span className="mt-3 break-all font-display text-xl leading-snug text-cocoa">
                  {c.value}
                </span>
                <span className="mt-2 text-xs text-muted">{c.hint}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </PageHero>

      <section className="section bg-sunk pt-0 md:pt-0">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-10">
              <Reveal>
                <h2 className="display-md text-cocoa">Request an appointment</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Tell us roughly what you need and when suits you. This opens
                  WhatsApp with your details filled in — nothing is stored on this
                  website, and no data is sent to any third party.
                </p>
              </Reveal>

              <AppointmentForm />
            </div>
          </div>

          {/* Details + map */}
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-8">
              <p className="eyebrow text-brick">The clinic</p>
              <address className="mt-4 not-italic leading-relaxed text-cocoa">
                <span className="block font-semibold">{site.name}</span>
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.city}
                <br />
                {site.address.region} {site.address.postalCode}
              </address>

              <div className="mt-7 border-t border-line pt-6">
                <p className="eyebrow text-brick">Opening hours</p>
                <dl className="mt-4 space-y-2.5">
                  {site.hours.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4">
                      <dt className="text-sm text-muted">{h.label}</dt>
                      <dd className="text-sm font-medium text-cocoa">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 rounded-lg bg-warning-bg px-3.5 py-2.5 text-xs leading-relaxed text-warning">
                  Dental emergencies are seen the same day wherever possible.
                  Call before coming in so we can keep a slot.
                </p>
              </div>

              <div className="mt-7 border-t border-line pt-6">
                <p className="eyebrow text-brick">Getting here</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We are on Sardar Patel Marg in Civil Lines, central Prayagraj —
                  close to Georgetown, Tagore Town, Katra, Allahpur and Lukerganj,
                  and a short drive from Prayagraj Junction.
                </p>
                <div className="mt-5 grid gap-2.5">
                  <ButtonLink href={site.mapsUrl} external size="md">
                    Open in Google Maps
                  </ButtonLink>
                  <ButtonLink href={waLink()} external variant="whatsapp" size="md">
                    <WhatsAppGlyph />
                    WhatsApp us
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-sunk">
              <iframe
                title={`Map showing ${site.name}, Civil Lines, Prayagraj`}
                src={site.mapsEmbed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
