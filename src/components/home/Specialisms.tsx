import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { MaskText, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

/**
 * The clinic's two specialist disciplines, given equal weight.
 *
 * This replaced an Invisalign-only feature block. The practice is not a
 * single-treatment clinic — orthodontics and endodontics are both MDS
 * specialisms here, and the endodontic side (root canals, saving teeth) is
 * what most patients actually walk in needing.
 */
const specialisms = [
  {
    eyebrow: "Orthodontics",
    doctor: "Dr. Umang Malviya, MDS",
    title: "Straightening teeth",
    body: "Fixed braces, ceramic brackets and Invisalign clear aligners, planned by a specialist orthodontist. We are a certified Invisalign provider with iTero digital scanning, and every ClinCheck plan is prepared in-house.",
    image: "/images/treatments/invisalign-clear-aligners.webp",
    imageAlt: "A clear aligner being placed over the upper teeth",
    links: [
      { label: "Invisalign & clear aligners", slug: "invisalign-clear-aligners", icon: "aligner" },
      { label: "Braces & orthodontics", slug: "braces-orthodontic-treatment", icon: "braces" },
      { label: "Smile makeover", slug: "smile-makeover", icon: "sparkle" },
    ],
  },
  {
    eyebrow: "Endodontics & restorative",
    doctor: "Dr. Anuja Ray, MDS",
    title: "Saving teeth",
    body: "Root canal treatment, crowns, fillings and gum care by a specialist endodontist. Many root canals are completed in a single visit, and the goal is always to keep the tooth you already have rather than replace it.",
    image: "/images/treatments/root-canal-treatment.webp",
    imageAlt: "Two dentists reviewing a dental X-ray to plan root canal treatment",
    links: [
      { label: "Root canal treatment", slug: "root-canal-treatment", icon: "tooth" },
      { label: "Crowns & bridges", slug: "dental-crowns-bridges", icon: "crown" },
      { label: "Tooth-coloured fillings", slug: "tooth-coloured-fillings", icon: "filling" },
    ],
  },
];

export function Specialisms() {
  return (
    <section className="section relative overflow-hidden bg-sandwash">
      <div className="shell">
        <Reveal>
          <p className="flex items-center gap-3">
            <span className="font-display text-sm text-terracotta lining-nums tabular-nums">
              03
            </span>
            <span className="h-px w-8 bg-terracotta" aria-hidden />
            <span className="eyebrow text-brick">Two specialisms</span>
          </p>
        </Reveal>

        <h2 className="display-lg mt-6 max-w-3xl text-cocoa">
          <MaskText lines={["Align what is crooked.", "Preserve what can be saved."]} />
        </h2>

        <Reveal delay={0.12}>
          <p className="lede mt-6 max-w-2xl">
            Two MDS specialists, two disciplines, one clinic — so the person
            treating you trained specifically for the problem you walked in with.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {specialisms.map((s, i) => (
            <Reveal key={s.eyebrow} delay={i * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-ivory">
                <ParallaxImage
                  src={s.image}
                  alt={s.imageAlt}
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  strength={0.07}
                  delay={i * 0.06}
                  className="aspect-[2/1] sm:aspect-[16/10]"
                />

                <div className="flex flex-1 flex-col p-5 sm:p-8">
                  <p className="eyebrow text-brick">{s.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-cocoa sm:text-[2.25rem]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-terracotta">{s.doctor}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">{s.body}</p>

                  <Stagger className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line">
                    {s.links.map((l) => (
                      <StaggerItem key={l.slug}>
                        <Link
                          href={`/services/${l.slug}`}
                          className="group flex items-center gap-3 bg-surface px-4 py-3.5 transition-colors hover:bg-tint"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sunk text-terracotta transition-colors group-hover:bg-white">
                            <ServiceIcon name={l.icon} className="h-4 w-4" />
                          </span>
                          <span className="flex-1 text-sm font-medium text-cocoa group-hover:text-brick">
                            {l.label}
                          </span>
                          <span
                            aria-hidden
                            className="text-brick transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </Link>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/services" size="lg">
              See all 15 treatments
            </ButtonLink>
            <ButtonLink href="/doctors" variant="outline" size="lg">
              Meet both specialists
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
