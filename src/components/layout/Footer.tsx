import Link from "next/link";
import { LogoLockup } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { services, servicePath } from "@/lib/services";
import { doctors } from "@/lib/doctors";
import { site, telLink, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory">
      {/* Closing CTA band */}
      <div className="border-b border-white/8">
        <div className="shell py-12 sm:py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-blush">Book your visit</p>
              <h2 className="display-lg mt-5 text-ivory">
                Straighter teeth, saved teeth,
                <br className="hidden sm:block" /> and a clinic that explains why.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ondark-muted">
                Two MDS specialists in Civil Lines, Prayagraj. Call, message on
                WhatsApp, or send us a note — we usually reply the same day.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <ButtonLink href={telLink} external variant="onDark" size="lg">
                Call {site.phoneDisplay}
              </ButtonLink>
              <ButtonLink href={waLink()} external variant="whatsappOnDark" size="lg">
                <WhatsAppGlyph />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:gap-y-12 sm:py-16 lg:grid-cols-12 lg:gap-8">
        <div className="col-span-2 lg:col-span-4">
          <LogoLockup tone="dark" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ondark-muted">
            {site.tagline} — a certified Invisalign provider practice in Civil
            Lines, Prayagraj, with orthodontics and endodontics under one roof.
          </p>
          <p className="mt-6 text-sm text-ondark-muted">
            {doctors.map((d) => (
              <span key={d.slug} className="block">
                <Link
                  href={`/doctors/${d.slug}`}
                  className="text-ivory transition-colors hover:text-blush"
                >
                  {d.name}
                </Link>
                <span className="text-ondark-muted"> — {d.role}</span>
              </span>
            ))}
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ivory transition-colors hover:text-blush"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.8 3.8 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7.02a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0Z" />
            </svg>
            {site.social.instagramHandle}
          </a>
        </div>

        <FooterColumn title="Treatments">
          {services.slice(0, 8).map((s) => (
            <FooterLink key={s.slug} href={servicePath(s)}>
              {s.name}
            </FooterLink>
          ))}
          <FooterLink href="/services">All treatments →</FooterLink>
        </FooterColumn>

        <FooterColumn title="Clinic">
          <FooterLink href="/about">About Eclectic</FooterLink>
          <FooterLink href="/doctors">Our doctors</FooterLink>
          <FooterLink href="/services/invisalign-clear-aligners">Invisalign & aligners</FooterLink>
          <FooterLink href="/gallery">Clinic gallery</FooterLink>
          <FooterLink href="/areas-we-serve">Areas we serve</FooterLink>
          <FooterLink href="/contact">Contact & directions</FooterLink>
          <FooterLink href="/services/emergency-dental-care">
            Dental emergency
          </FooterLink>
        </FooterColumn>

        <div className="col-span-2 lg:col-span-3">
          <h3 className="eyebrow text-blush">Visit us</h3>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-ondark-muted">
            <span className="block text-ivory">{site.name}</span>
            <span className="block">{site.address.street}</span>
            <span className="block">{site.address.landmark}</span>
            <span className="block">
              {site.address.neighborhood}, {site.address.locality}, {site.address.city}
            </span>
            <span className="block">
              {site.address.region} {site.address.postalCode}
            </span>
          </address>

          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ivory transition-colors hover:text-blush"
          >
            Get directions
            <span aria-hidden>→</span>
          </a>

          <dl className="mt-7 space-y-2 text-sm">
            {site.hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt className="text-ondark-muted">{h.label}</dt>
                <dd className="text-ivory">{h.time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 space-y-1.5 text-sm">
            <a
              href={telLink}
              className="block text-ivory transition-colors hover:text-blush"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block break-all text-ondark-muted transition-colors hover:text-blush"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Service-area rail — genuine internal signal for "<area> dentist" queries */}
      <div className="border-t border-white/8">
        <div className="shell py-8">
          <p className="text-xs leading-relaxed text-ondark-muted">
            <span className="text-ivory">Serving patients across Prayagraj:</span>{" "}
            {site.serviceAreas.join(" · ")} — and the wider Allahabad district.
          </p>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-ondark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.subTagline}
          </p>
          <p className="max-w-md text-ondark-muted/80">
            Information on this site is general and not a substitute for a clinical
            examination.
          </p>
        </div>
      </div>

      {/* Oversized wordmark, bled off the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden"
      >
        <p className="translate-y-[26%] whitespace-nowrap text-center font-display text-[15vw] leading-none text-white/[0.035]">
          ECLECTIC
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="lg:col-span-2">
      <h3 className="eyebrow text-blush">{title}</h3>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-ondark-muted transition-colors hover:text-blush"
      >
        {children}
      </Link>
    </li>
  );
}
