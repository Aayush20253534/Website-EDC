import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { doctors, getDoctor } from "@/lib/doctors";
import { getService, servicePath } from "@/lib/services";
import { site } from "@/lib/site";
import { breadcrumbSchema, graph, physicianSchema } from "@/lib/schema";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(
  props: PageProps<"/doctors/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const doctor = getDoctor(slug);
  if (!doctor) return {};

  return {
    title: doctor.metaTitle,
    description: doctor.metaDescription,
    alternates: { canonical: `/doctors/${doctor.slug}` },
    openGraph: {
      title: doctor.metaTitle,
      description: doctor.metaDescription,
      url: `/doctors/${doctor.slug}`,
      type: "profile",
      // See note in services/[slug]/page.tsx — let the generated card win.
    },
  };
}

export default async function DoctorPage(props: PageProps<"/doctors/[slug]">) {
  const { slug } = await props.params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  const other = doctors.find((d) => d.slug !== doctor.slug);

  const trail = [
    { name: "Home", url: "/" },
    { name: "Our Doctors", url: "/doctors" },
    { name: doctor.name, url: `/doctors/${doctor.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(physicianSchema(doctor), breadcrumbSchema(trail)),
          ),
        }}
      />

      <PageHero
        eyebrow={doctor.role}
        title={[doctor.name]}
        lede={doctor.tagline}
        trail={trail}
      />

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait + credentials */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ParallaxImage
                src={doctor.image}
                alt={doctor.imageAlt}
                sizes="(max-width: 1024px) 92vw, 40vw"
                priority
                reveal={false}
                strength={0.075}
                className="aspect-[4/5] rounded-3xl"
                imageClassName="object-top"
              />

              <div className="mt-6 rounded-2xl border border-line bg-surface p-6">
                <p className="eyebrow text-brick">Qualifications</p>
                <ul className="mt-4 space-y-3">
                  {doctor.credentials.map((c) => (
                    <li key={c} className="flex gap-3 text-sm leading-relaxed text-cocoa">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                        aria-hidden
                      />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-5">
                  <ButtonLink href="/contact" size="md" className="w-full">
                    Book with {doctor.shortName}
                  </ButtonLink>
                  <p className="mt-3 text-center text-xs text-muted">
                    Or call{" "}
                    <a href={`tel:${site.phone}`} className="font-semibold text-brick">
                      {site.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Bio */}
          <div className="lg:col-span-7">
            <div className="prose-edc">
              {doctor.bio.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <figure className="mt-12 border-l-2 border-terracotta pl-6">
                <blockquote className="font-display text-2xl leading-snug text-cocoa md:text-[1.75rem]">
                  &ldquo;{doctor.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  {doctor.name}, {doctor.qualification}
                </figcaption>
              </figure>
            </Reveal>

            {/* Clinical focus */}
            <Reveal>
              <h2 className="display-md mt-14 text-cocoa">Clinical focus</h2>
            </Reveal>
            <Stagger className="mt-7 grid gap-3 sm:grid-cols-2">
              {doctor.focus.map((f) => {
                const service = f.slug ? getService(f.slug) : undefined;
                const inner = (
                  <div className="flex h-full items-start gap-3.5 rounded-xl border border-line bg-surface p-5 transition-colors duration-500 hover:bg-tint">
                    {service && (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sunk text-terracotta">
                        <ServiceIcon name={service.icon} className="h-5 w-5" />
                      </span>
                    )}
                    <span className="text-sm leading-relaxed text-cocoa">{f.label}</span>
                  </div>
                );

                return (
                  <StaggerItem key={f.label}>
                    {f.slug ? (
                      <Link href={servicePath({ slug: f.slug! })} className="block h-full">
                        {inner}
                      </Link>
                    ) : (
                      inner
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>

      {/* The other doctor */}
      {other && (
        <section className="section bg-sunk">
          <div className="shell">
            <SectionHeading
              eyebrow="Also at the clinic"
              title={["The other half", "of the practice."]}
            />

            <Reveal delay={0.1}>
              <Link
                href={`/doctors/${other.slug}`}
                className="group mt-10 grid gap-8 overflow-hidden rounded-2xl border border-line bg-surface sm:grid-cols-12"
              >
                <div className="relative aspect-[4/3] sm:col-span-4 sm:aspect-auto">
                  <Image
                    src={other.image}
                    alt={other.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, 33vw"
                    className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <div className="p-7 pb-8 sm:col-span-8 sm:self-center sm:py-8 sm:pl-0 sm:pr-8">
                  <p className="eyebrow text-brick">{other.qualification}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-cocoa">
                    {other.name}
                  </h3>
                  <p className="mt-1.5 text-terracotta">{other.role}</p>
                  <p className="mt-4 leading-relaxed text-muted">{other.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brick">
                    Read profile
                    <span
                      aria-hidden
                      className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <CTABand
        eyebrow={`Book with ${doctor.shortName}`}
        title={["Consultations,", "explained properly."]}
        waText={`Hi, I'd like to book an appointment with ${doctor.name} at Eclectic Dental Care.`}
      />
    </>
  );
}
