import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion";
import { DoctorCard } from "@/components/home/DoctorCard";
import { doctors } from "@/lib/doctors";

/**
 * The specialists — the first section after the hero.
 *
 * The hero is text-only, so this carries the practice's photography and is
 * the visitor's first sight of the people who will treat them. One portrait
 * per row on mobile, side by side from `md` up. The per-card scroll
 * choreography lives in DoctorCard.
 */
export function Doctors() {
  return (
    <section className="section bg-ivory">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="The specialists"
          title={["Two MDS specialists.", "One clinic."]}
          lede="Meet the two MDS dentists at our Civil Lines dental clinic in Prayagraj. Orthodontics and endodontics are handled in-house, so specialist cases do not need to be sent across the city."
        />

        <div className="mt-9 grid gap-10 sm:mt-14 md:grid-cols-2 md:gap-8 lg:gap-12">
          {doctors.map((doctor, i) => (
            <DoctorCard
              key={doctor.slug}
              doctor={doctor}
              index={i}
              priority={i === 0}
            />
          ))}
        </div>

        <Reveal delay={0.15}>
          <figure className="mt-12 border-t border-line pt-8 sm:mt-16 sm:pt-10">
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-display text-xl leading-snug text-cocoa sm:text-2xl md:text-[2rem]">
                &ldquo;{doctors[1].quote}&rdquo;
              </p>
              <figcaption className="mt-4 text-sm text-muted sm:mt-6">
                <span className="font-semibold text-cocoa">{doctors[1].name}</span> ·{" "}
                {doctors[1].role}
              </figcaption>
            </blockquote>
          </figure>
        </Reveal>

        <div className="mt-8 flex justify-center sm:mt-10">
          <ArrowLink href="/doctors">Meet our dentists</ArrowLink>
        </div>
      </div>
    </section>
  );
}
