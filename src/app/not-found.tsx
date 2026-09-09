import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark } from "@/components/brand/Logo";
import { services, servicePath } from "@/lib/services";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section bg-ivory">
      <div className="shell-narrow text-center">
        <LogoMark className="mx-auto h-16 w-16" animated />

        <p className="eyebrow mt-8 text-brick">404</p>
        <h1 className="display-lg mt-5 text-cocoa">
          This page has been extracted.
        </h1>
        <p className="lede mx-auto mt-6 max-w-md">
          The link is broken or the page has moved. Here is the way back — or
          pick a treatment below.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            Contact the clinic
          </ButtonLink>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <p className="eyebrow text-muted">Popular treatments</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {services.slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                href={servicePath(s)}
                className="rounded-full border border-line-strong px-4 py-2.5 text-sm text-cocoa transition-colors hover:border-brick hover:bg-tint hover:text-brick"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
