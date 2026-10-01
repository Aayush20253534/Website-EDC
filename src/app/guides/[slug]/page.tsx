import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { FaqSection } from "@/components/sections/FaqSection";
import { ButtonLink, ArrowLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { guides, getGuide } from "@/lib/guides";
import { getDoctor } from "@/lib/doctors";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  graph,
  physicianSchema,
  webPageSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata(
  props: PageProps<"/guides/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const url = `/guides/${guide.slug}`;

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url,
      siteName: site.name,
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [
        {
          url: guide.image,
          width: 1200,
          height: 800,
          alt: guide.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [guide.image],
    },
  };
}

export default async function GuidePage(
  props: PageProps<"/guides/[slug]">,
) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const reviewer = getDoctor(guide.reviewerSlug);
  const service = getService(guide.relatedServiceSlug);
  if (!reviewer || !service) notFound();

  const url = `/guides/${guide.slug}`;
  const trail = [
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
    { name: guide.title, url },
  ];

  const relatedGuides = guides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "WebPage",
                url,
                name: guide.title,
                description: guide.metaDescription,
              }),
              articleSchema({
                url,
                headline: guide.title,
                description: guide.metaDescription,
                image: guide.image,
                aboutName: service.name,
              }),
              physicianSchema(reviewer),
              breadcrumbSchema(trail),
              faqSchema(guide.faqs),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow={`${guide.category} · Guide`}
        title={guide.heroTitle}
        lede={guide.excerpt}
        trail={trail}
      >
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span>{guide.readingTime}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-terracotta" />
            <span>General dental information</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-terracotta" />
            <Link
              href={`/doctors/${reviewer.slug}`}
              className="font-medium text-brick transition-colors hover:text-brick-hover"
            >
              Relevant specialist: {reviewer.name}
            </Link>
          </div>
        </Reveal>
      </PageHero>

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="min-w-0 lg:col-span-8">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-sunk">
                <Image
                  src={guide.image}
                  alt={guide.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 64vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="prose-edc mt-10">
              {guide.intro.map((paragraph) => (
                <Reveal key={paragraph}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {guide.sections.map((section, index) => (
                <section key={section.title}>
                  <Reveal>
                    <div className="flex items-start gap-4">
                      <span className="pt-1 font-display text-sm text-terracotta lining-nums tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h2 className="font-display text-3xl leading-tight text-cocoa sm:text-4xl">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                  </Reveal>

                  <div className="prose-edc mt-5 pl-0 sm:pl-9">
                    {section.paragraphs.map((paragraph) => (
                      <Reveal key={paragraph}>
                        <p>{paragraph}</p>
                      </Reveal>
                    ))}
                  </div>

                  {section.bullets && (
                    <Stagger className="mt-6 grid gap-3 pl-0 sm:pl-9">
                      {section.bullets.map((bullet) => (
                        <StaggerItem key={bullet}>
                          <div className="flex gap-3 rounded-xl border border-line bg-surface p-4">
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                            />
                            <p className="text-sm leading-relaxed text-cocoa">
                              {bullet}
                            </p>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  )}
                </section>
              ))}
            </div>

            <Reveal>
              <div className="mt-14 rounded-2xl border border-line bg-sandwash p-6 sm:p-7">
                <p className="eyebrow text-brick">Important</p>
                <p className="mt-3 leading-relaxed text-cocoa">
                  This guide is general information, not a diagnosis. Dental
                  symptoms can overlap, and treatment decisions depend on an
                  examination and any investigations that are clinically useful.
                </p>
              </div>
            </Reveal>
          </article>

          <aside className="min-w-0 lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-28">
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <p className="eyebrow text-brick">Relevant specialist</p>
                  <Link
                    href={`/doctors/${reviewer.slug}`}
                    className="group mt-5 flex items-center gap-4"
                  >
                    <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-sunk">
                      <Image
                        src={reviewer.image}
                        alt={reviewer.imageAlt}
                        fill
                        sizes="64px"
                        className="object-cover object-top"
                      />
                    </span>
                    <span>
                      <span className="block font-semibold text-cocoa group-hover:text-brick">
                        {reviewer.name}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted">
                        {reviewer.role}
                      </span>
                    </span>
                  </Link>
                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    This guide points to the specialist whose clinical area is
                    most relevant to the topic. It is not presented as a record
                    of a review event that has not happened.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                  <div className="relative aspect-[16/10] bg-sunk">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow text-brick">Related treatment</p>
                    <h2 className="mt-3 font-display text-2xl leading-tight text-cocoa">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.summary}
                    </p>
                    <div className="mt-5">
                      <ArrowLink href={`/services/${service.slug}`}>
                        Treatment details
                      </ArrowLink>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-line bg-sandwash p-6">
                  <p className="eyebrow text-brick">Prayagraj clinic</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {site.address.street}, near {site.address.landmark},{" "}
                    {site.address.locality}, {site.address.city}.
                  </p>
                  <div className="mt-5 grid gap-2.5">
                    <ButtonLink href="/contact" size="sm">
                      Book an examination
                    </ButtonLink>
                    <ButtonLink
                      href="/locations/civil-lines-prayagraj"
                      variant="outline"
                      size="sm"
                    >
                      Clinic & directions
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <FaqSection
        eyebrow="Questions"
        title={["Common questions", "about this topic."]}
        lede="Short answers to the questions that usually come up after the main explanation."
        items={guide.faqs}
      />

      <section className="section bg-ivory">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-brick">Keep reading</p>
              <h2 className="display-md mt-4 text-cocoa">More dental guides</h2>
            </div>
            <ArrowLink href="/guides">All guides</ArrowLink>
          </div>

          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {relatedGuides.map((item) => (
              <StaggerItem key={item.slug}>
                <Link
                  href={`/guides/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sunk">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 92vw, 30vw"
                      className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="eyebrow text-brick">{item.category}</p>
                    <h3 className="mt-3 font-display text-xl leading-tight text-cocoa">
                      {item.title}
                    </h3>
                    <span className="mt-5 text-sm font-semibold text-brick">
                      Read guide →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand
        eyebrow="Need a diagnosis?"
        title={["A guide can explain.", "An examination can diagnose."]}
        body="If your question is about your own symptoms, book an examination at our Civil Lines clinic in Prayagraj rather than relying on a general article."
        waText={`Hi, I read your guide about ${guide.title.toLowerCase()} and would like to book an examination.`}
      />
    </>
  );
}
