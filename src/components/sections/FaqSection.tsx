import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion";
import { ButtonLink } from "@/components/ui/Button";
import { site, telLink } from "@/lib/site";

export function FaqSection({
  items,
  index = "07",
  eyebrow = "Questions",
  title = ["Answers before", "you ask."],
  lede,
  className = "bg-ivory",
}: {
  items: { q: string; a: string }[];
  index?: string;
  eyebrow?: string;
  title?: string[];
  lede?: string;
  className?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading index={index} eyebrow={eyebrow} title={title} lede={lede} />

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
                <p className="font-semibold text-cocoa">Still not sure?</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Call and describe what is going on. We will tell you whether it
                  needs an appointment — and if it does not, we will say so.
                </p>
                <ButtonLink href={telLink} external size="sm" className="mt-5">
                  Call {site.phoneDisplay}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
