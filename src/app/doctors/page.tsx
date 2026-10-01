import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/motion";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { doctors } from "@/lib/doctors";
import {
  breadcrumbSchema,
  graph,
  physicianSchema,
  webPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Dentists — MDS Specialists in Prayagraj",
  description:
    "Meet Dr. Umang Malviya (MDS Orthodontics, certified Invisalign provider) and Dr. Anuja Ray (MDS Endodontics) at Eclectic Dental Care, Civil Lines, Prayagraj.",
  alternates: { canonical: "/doctors" },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Our Doctors", url: "/doctors" },
];

export default function DoctorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "CollectionPage",
                url: "/doctors",
                name: "Our dentists — MDS specialists in Prayagraj",
                description: metadata.description as string,
              }),
              ...doctors.map(physicianSchema),
              breadcrumbSchema(trail),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="The specialists"
        title={["Two MDS specialists,", "one clinic."]}
        lede="An MDS is a three-year postgraduate specialisation taken after BDS. Most general practices refer these cases elsewhere — here, both disciplines are in-house."
        trail={trail}
      />

      {doctors.map((doctor, i) => (
        <section
          key={doctor.slug}
          className={`section ${i % 2 === 0 ? "bg-ivory" : "bg-sunk"} pt-0 md:pt-0`}
        >
          <div className="shell">
            <div
              className={`grid gap-12 border-t border-line-strong/50 pt-14 lg:grid-cols-12 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <ParallaxImage
                  src={doctor.image}
                  alt={doctor.imageAlt}
                  sizes="(max-width: 1024px) 92vw, 40vw"
                  strength={0.075}
                  priority={i === 0}
                  reveal={i !== 0}
                  className="aspect-[4/5] rounded-3xl"
                  imageClassName="object-top"
                />
              </div>

              <div className="lg:col-span-7">
                <Reveal>
                  <p className="eyebrow text-brick">{doctor.qualification}</p>
                  <h2 className="display-md mt-4 text-cocoa">{doctor.name}</h2>
                  <p className="mt-2 text-lg text-terracotta">{doctor.role}</p>
                </Reveal>

                <div className="prose-edc mt-7">
                  {doctor.bio.slice(0, 2).map((p, bi) => (
                    <Reveal key={bi} delay={bi * 0.06}>
                      <p>{p}</p>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.15}>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {doctor.credentials.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-tint px-3.5 py-2 text-xs font-medium text-brick"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brick"
                  >
                    Read full profile
                    <span
                      aria-hidden
                      className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABand
        title={["See the right", "specialist first time."]}
        body="Tell us what is going on and we will book you with whichever doctor should be handling it — no wasted appointments."
      />
    </>
  );
}
