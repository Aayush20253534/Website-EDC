import Link from "next/link";
import { MaskText, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  trail,
  tone = "light",
}: {
  trail: { name: string; url: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
        {trail.map((item, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              {last ? (
                <span
                  aria-current="page"
                  className={tone === "dark" ? "text-ondark-muted" : "text-muted"}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className={cn(
                    "transition-colors",
                    tone === "dark"
                      ? "text-ondark-muted hover:text-blush"
                      : "text-muted hover:text-brick",
                  )}
                >
                  {item.name}
                </Link>
              )}
              {!last && (
                <span aria-hidden className={tone === "dark" ? "text-white/25" : "text-line-strong"}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Inner-page hero. Deliberately quieter than the home hero — one accent,
 * plenty of air, and the breadcrumb doing navigational work.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  trail,
  children,
  ground = "ivory",
}: {
  eyebrow: string;
  /** Split for the line-mask reveal. */
  title: string[];
  lede?: string;
  trail: { name: string; url: string }[];
  children?: React.ReactNode;
  ground?: "ivory" | "sunk" | "sandwash";
}) {
  const bg = {
    ivory: "bg-ivory",
    sunk: "bg-sunk",
    sandwash: "bg-sandwash",
  }[ground];

  return (
    <section className={cn("relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14", bg)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-blushwash/40 blur-3xl"
      />

      <div className="shell relative">
        <Reveal>
          <Breadcrumbs trail={trail} />
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal delay={0.06}>
              <p className="rule-accent">
                <span className="eyebrow text-brick">{eyebrow}</span>
              </p>
            </Reveal>

            <h1 className="display-lg mt-6 text-cocoa">
              <MaskText lines={title} />
            </h1>
          </div>

          {lede && (
            <div className="lg:col-span-5">
              <Reveal delay={0.16}>
                <p className="lede">{lede}</p>
              </Reveal>
            </div>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
