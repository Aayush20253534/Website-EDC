import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { MaskText, Reveal } from "@/components/motion";
import { site, telLink, waLink } from "@/lib/site";

/**
 * Closing conversion band for inner pages. Espresso ground, ivory type,
 * blush accent — the palette's dark-ground rule.
 */
export function CTABand({
  eyebrow = "Book an appointment",
  title = ["Ready when", "you are."],
  body,
  waText,
}: {
  eyebrow?: string;
  title?: string[];
  body?: string;
  waText?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-espresso py-20 text-ivory md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-brick/12 blur-3xl"
      />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3">
                <span className="h-px w-8 bg-blush" aria-hidden />
                <span className="eyebrow text-blush">{eyebrow}</span>
              </p>
            </Reveal>

            <h2 className="display-lg mt-6 text-ivory">
              <MaskText lines={title} />
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg leading-relaxed text-ondark-muted">
                {body ??
                  `${site.addressLine}. Open seven days a week; current clinic timings are listed on the contact and location pages.`}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink href={telLink} external variant="onDark" size="lg">
                  Call {site.phoneDisplay}
                </ButtonLink>
                <ButtonLink
                  href={waLink(waText)}
                  external
                  variant="whatsappOnDark"
                  size="lg"
                >
                  <WhatsAppGlyph />
                  WhatsApp
                </ButtonLink>
                <ButtonLink href="/contact" variant="outlineDark" size="lg">
                  Send a message
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
