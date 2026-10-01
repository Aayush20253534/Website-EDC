import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal, Stagger, StaggerItem, MaskText } from "@/components/motion";
import {
  services,
  serviceCategories,
  servicesByCategory,
  servicePath,
} from "@/lib/services";
import {
  breadcrumbSchema,
  graph,
  treatmentListSchema,
  webPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "All Dental Treatments in Prayagraj",
  description:
    "All dental treatments in Civil Lines, Prayagraj — Invisalign, braces, root canals, implants, crowns, whitening, kids dentistry and emergency care.",
  alternates: { canonical: "/services" },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Treatments", url: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "CollectionPage",
                url: "/services",
                name: "All dental treatments in Prayagraj",
                description: metadata.description as string,
              }),
              treatmentListSchema(),
              breadcrumbSchema(trail),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Treatments"
        title={["Everything we treat,", "in one place."]}
        lede={`All ${services.length} treatments offered at our Civil Lines clinic — planned and delivered by two MDS specialists rather than referred across the city.`}
        trail={trail}
      />

      {services.length > 0 &&
        serviceCategories.map((category, ci) => {
          const list = servicesByCategory(category);
          if (!list.length) return null;

          return (
            <section
              key={category}
              className={`section ${ci % 2 === 0 ? "bg-ivory" : "bg-sunk"} pt-0 first:pt-0 md:pt-0`}
            >
              <div className="shell">
                <div className="border-t border-line-strong/50 pt-12">
                  <Reveal>
                    <p className="flex items-center gap-3">
                      <span className="font-display text-sm lining-nums tabular-nums text-terracotta">
                        {String(ci + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-terracotta" aria-hidden />
                      <span className="eyebrow text-brick">{category}</span>
                    </p>
                  </Reveal>

                  <h2 className="display-md mt-5 text-cocoa">
                    <MaskText lines={[categoryHeadings[category]]} />
                  </h2>

                  {category === "Cosmetic" && (
                    <Reveal delay={0.1}>
                      <Link
                        href="/cosmetic-dentist-prayagraj"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brick transition-colors hover:text-brick-hover"
                      >
                        Cosmetic dentist & smile planning in Prayagraj
                        <span aria-hidden>→</span>
                      </Link>
                    </Reveal>
                  )}

                  {category === "Family" && (
                    <Reveal delay={0.1}>
                      <Link
                        href="/family-dentist-prayagraj"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brick transition-colors hover:text-brick-hover"
                      >
                        Family dentist in Prayagraj
                        <span aria-hidden>→</span>
                      </Link>
                    </Reveal>
                  )}

                  {category === "Preventive" && (
                    <Reveal delay={0.1}>
                      <Link
                        href="/dental-checkup-prayagraj"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brick transition-colors hover:text-brick-hover"
                      >
                        Dental checkup & preventive care in Prayagraj
                        <span aria-hidden>→</span>
                      </Link>
                    </Reveal>
                  )}

                  <Stagger className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-line bg-line grid-cols-2 lg:grid-cols-3">
                    {list.map((s) => (
                      <StaggerItem key={s.slug}>
                        <Link
                          href={servicePath(s)}
                          className="group flex h-full flex-col bg-surface p-4 transition-colors duration-500 hover:bg-tint sm:p-7"
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sunk text-terracotta transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_8px_24px_rgba(58,44,37,0.08)] sm:h-12 sm:w-12 sm:rounded-xl">
                            <ServiceIcon name={s.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                          </span>
                          <h3 className="mt-4 font-display text-[1.0625rem] leading-tight text-cocoa sm:mt-6 sm:text-2xl">
                            {s.name}
                          </h3>
                          <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-muted sm:mt-3 sm:line-clamp-none sm:text-sm">
                            {s.summary}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brick sm:mt-6 sm:gap-2 sm:text-sm">
                            Learn more
                            <span
                              aria-hidden
                              className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                            >
                              →
                            </span>
                          </span>
                        </Link>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </section>
          );
        })}

      <CTABand
        title={["Not sure which", "treatment you need?"]}
        body="Describe the problem over the phone or on WhatsApp. We will tell you what it sounds like, whether it needs seeing, and how urgently."
      />
    </>
  );
}

const categoryHeadings: Record<string, string> = {
  Orthodontics: "Straightening teeth and correcting the bite",
  Restorative: "Repairing and rebuilding damaged teeth",
  Cosmetic: "Changing how your smile looks",
  Surgical: "Extractions and implant surgery",
  Preventive: "Keeping problems from starting",
  Family: "Care for children and the whole family",
};
