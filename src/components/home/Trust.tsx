import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem, Marquee } from "@/components/motion";
import { hasReviews, reviews, aggregate } from "@/lib/testimonials";
import { site } from "@/lib/site";

/**
 * Social proof.
 *
 * Until real Google reviews are supplied (see lib/testimonials.ts) this
 * renders a credential-led trust section instead of invented quotes, and
 * emits no review schema. Fabricated reviews are a manual-action risk and
 * would undermine the exact local ranking this build is chasing.
 */
export function Trust() {
  if (hasReviews) return <ReviewWall />;
  return <CredentialWall />;
}

function CredentialWall() {
  const proof = [
    {
      title: "MDS Orthodontics",
      body: "Dr. Umang Malviya holds a three-year specialist degree in Orthodontics & Dentofacial Orthopaedics.",
      tag: "Verified qualification",
    },
    {
      title: "MDS Endodontics",
      body: "Dr. Anuja Ray holds a three-year specialist degree in Conservative Dentistry & Endodontics.",
      tag: "Verified qualification",
    },
    {
      title: "Certified Invisalign Provider",
      body: "Provider certification held by Dr. Umang Malviya, with Invisalign signage and ClinCheck planning on site.",
      tag: "Manufacturer certified",
    },
    {
      title: "iTero Element scanner",
      body: "Digital intraoral scanning in the clinic — no impression putty for aligners, crowns or implant planning.",
      tag: "Equipment on site",
    },
  ];

  return (
    <section className="section bg-blushwash">
      <div className="shell">
        <SectionHeading
          index="07"
          eyebrow="Why people trust us"
          title={["Credentials you can", "actually check."]}
          lede="Choosing a dentist in Prayagraj should come down to evidence, not superlatives. These are the qualifications, certification and equipment you can verify before booking."
        />

        <Stagger className="mt-9 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {proof.map((p) => (
            <StaggerItem key={p.title}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-4 sm:p-7">
                <span className="eyebrow text-brick">{p.tag}</span>
                <h3 className="mt-3 font-display text-base leading-tight text-cocoa sm:mt-4 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-2xl border border-line bg-surface/70 p-7 sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="font-display text-2xl leading-snug text-cocoa">
                  Been treated here? A short Google review genuinely helps other
                  people in Prayagraj find us.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We publish only real reviews from our Google Business Profile —
                  never written-up testimonials.
                </p>
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-semibold text-cocoa transition-colors hover:border-brick hover:bg-tint hover:text-brick"
              >
                Leave a Google review
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReviewWall() {
  return (
    <section className="section overflow-hidden bg-blushwash">
      <div className="shell">
        <SectionHeading
          index="07"
          eyebrow="Patient reviews"
          title={["What our patients", "say about us."]}
          lede={
            aggregate
              ? `Rated ${aggregate.rating} from ${aggregate.count} Google reviews by patients across Prayagraj.`
              : undefined
          }
        />
      </div>

      <Reveal delay={0.1} className="mt-14">
        <Marquee speed={55} className="fade-x">
          {reviews.map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="w-[20rem] shrink-0 rounded-2xl border border-line bg-surface p-7 sm:w-[24rem]"
            >
              <div className="flex gap-0.5" aria-label={`${r.rating} out of 5`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} />
                ))}
              </div>
              <blockquote className="mt-4 text-[0.9375rem] leading-relaxed text-cocoa">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                <span className="font-semibold text-cocoa">{r.name}</span>
                {r.location && <span className="text-muted"> · {r.location}</span>}
                {r.treatment && (
                  <span className="mt-1 block text-xs text-brick">{r.treatment}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </Reveal>

      <div className="shell mt-10 flex justify-center">
        <Link
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brick hover:text-brick-hover"
        >
          Read all reviews on Google →
        </Link>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-terracotta" fill="currentColor" aria-hidden>
      <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.22l-4.94 2.6.94-5.5-4-3.9 5.53-.81L10 1.6Z" />
    </svg>
  );
}
