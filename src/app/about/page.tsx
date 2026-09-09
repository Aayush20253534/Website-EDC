import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { doctors } from "@/lib/doctors";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Our Dental Clinic in Civil Lines",
  description:
    "A specialist-led dental clinic on Sardar Patel Marg, Civil Lines, Prayagraj — orthodontics, endodontics and certified Invisalign treatment.",
  alternates: { canonical: "/about" },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

const principles = [
  {
    title: "Diagnosis before treatment",
    body: "We work out what is actually wrong and explain it, rather than starting with what we could sell you. Sometimes the correct answer is to monitor and do nothing yet.",
  },
  {
    title: "The conservative option first",
    body: "Save the tooth before replacing it. Move teeth before cutting them down for veneers. The least invasive treatment that solves the problem is the right one.",
  },
  {
    title: "Costs on the table",
    body: "You get the full fee for your plan in writing before treatment starts. If the plan changes, we tell you why and what it means before proceeding.",
  },
  {
    title: "Sterilisation without shortcuts",
    body: "Instruments are cleaned, packed and autoclaved between every patient. Single-use items stay single-use. This is not a place to economise.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "AboutPage",
                url: "/about",
                name: "About Eclectic Dental Care, Civil Lines, Prayagraj",
                description: metadata.description as string,
              }),
              breadcrumbSchema(trail),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="About the clinic"
        title={["A specialist practice", "in Civil Lines."]}
        lede="Eclectic Dental Care was built around a simple idea — that the specialist who trained for your problem should be the one treating it, in the same building where you were diagnosed."
        trail={trail}
      />

      {/* Story + image */}
      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="prose-edc">
              <Reveal>
                <p>
                  Most dental problems in Prayagraj are treated by general
                  dentists who then refer the harder cases across the city.
                  That works, but it costs the patient time, repeated
                  explanations, and often a second set of X-rays.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p>
                  Eclectic Dental Care is set up differently. Both principal
                  dentists hold an MDS — a three-year postgraduate specialisation
                  taken after BDS. Dr. Umang Malviya specialises in orthodontics;
                  Dr. Anuja Raj in endodontics and conservative dentistry. Between
                  them, the treatments that usually get referred out are handled
                  here.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  The clinic is a certified Invisalign provider practice, and runs
                  an iTero Element intraoral scanner — so aligner impressions,
                  crown work and implant planning are all done digitally rather
                  than with impression putty.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p>
                  The name is deliberate. Eclectic means drawing on the best of
                  several approaches rather than committing to one. In practice
                  that means we do not have a favourite treatment we push — we
                  have a diagnosis, and then the option that fits it.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <figure className="mt-12 border-l-2 border-terracotta pl-6">
                <blockquote className="font-display text-2xl leading-snug text-cocoa">
                  Align · Preserve · Protect
                </blockquote>
                <figcaption className="mt-3 text-sm leading-relaxed text-muted">
                  Align what is crooked. Preserve what can be saved. Protect what
                  is healthy. In that order — it is also the order of cost.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <ParallaxImage
              src="/images/clinic/reception.webp"
              alt="Reception and waiting area at Eclectic Dental Care, Civil Lines, Prayagraj"
              sizes="(max-width: 1024px) 92vw, 40vw"
              strength={0.075}
              className="aspect-[4/5] rounded-3xl"
            />

            <Stagger className="mt-6 grid grid-cols-2 gap-3">
              {[
                { v: 2, l: "MDS specialists" },
                { v: services.length, l: "Treatments" },
                { v: 7, l: "Days open" },
                { v: 1, l: "Visit RCT, often" },
              ].map((s) => (
                <StaggerItem key={s.l}>
                  <div className="rounded-2xl border border-line bg-surface p-5">
                    <p className="font-display text-4xl leading-none text-terracotta lining-nums tabular-nums">
                      <Counter to={s.v} />
                    </p>
                    <p className="mt-2 text-sm text-muted">{s.l}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </aside>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-sunk">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="How we practise"
            title={["Four things we", "will not compromise on."]}
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-6 border-t border-line-strong/50 pt-7">
                  <span className="font-display text-lg leading-none text-terracotta lining-nums tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-cocoa">
                      {p.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section bg-ivory">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Who you will see"
            title={["The two people", "treating you."]}
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {doctors.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.1}>
                <Link
                  href={`/doctors/${d.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={d.image}
                      alt={d.imageAlt}
                      fill
                      sizes="(max-width: 768px) 92vw, 46vw"
                      className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="eyebrow text-brick">{d.qualification}</p>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-cocoa">
                      {d.name}
                    </h3>
                    <p className="mt-1.5 text-terracotta">{d.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{d.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Area served */}
      <section className="section bg-sandwash">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Where our patients come from"
            title={["Serving Prayagraj", "and the wider district."]}
            lede={`We are on ${site.address.street} in ${site.address.locality} — central, and easy to reach from across the city.`}
          />

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap gap-2.5">
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

      <CTABand
        title={["Come and meet", "the practice."]}
        body="A first consultation is a conversation and an examination. There is no obligation to start treatment on the day."
      />
    </>
  );
}
