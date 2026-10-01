import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/motion";
import { services, servicePath } from "@/lib/services";

export function Services() {
  return (
    <section className="section relative bg-sunk">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="What we treat"
          title={["Every dental treatment,", "under one roof."]}
          lede="Dental treatments in Prayagraj for children and adults — from braces, Invisalign and root canals to implants, whitening, gum care and dental emergencies."
          action={
            <ButtonLink href="/services" variant="outline" size="md">
              All {services.length} dental treatments
            </ButtonLink>
          }
        />

        <Stagger className="mt-9 grid gap-px sm:mt-14 overflow-hidden rounded-2xl border border-line bg-line grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={servicePath(service)}
                className="group relative flex h-full flex-col bg-surface p-4 transition-colors duration-500 hover:bg-tint sm:p-7 lg:p-8"
              >
                {/* terracotta wipe on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-terracotta transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sunk text-terracotta transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_8px_24px_rgba(58,44,37,0.08)] sm:h-12 sm:w-12 sm:rounded-xl">
                    <ServiceIcon name={service.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="eyebrow hidden pt-1 text-faint sm:block">{service.category}</span>
                </div>

                <h3 className="mt-4 font-display text-[1.0625rem] leading-tight text-cocoa sm:mt-6 sm:text-2xl">
                  {service.name}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-muted sm:mt-3 sm:line-clamp-none sm:text-sm">
                  {service.summary}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brick sm:mt-6 sm:gap-2 sm:text-sm">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                  >
                    <path
                      d="M1 7h11M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
