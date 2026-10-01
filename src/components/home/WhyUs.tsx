import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { services } from "@/lib/services";

/**
 * Differentiators. Every figure here is verifiable from the clinic's own
 * credentials or this site's own content — nothing is estimated, and there
 * are no invented patient counts or years-in-practice numbers.
 */
export function WhyUs() {
  const stats = [
    { value: 2, suffix: "", label: "MDS specialists on site", sub: "Orthodontics · Endodontics" },
    { value: services.length, suffix: "", label: "Treatments offered", sub: "From cleanings to implants" },
    { value: 7, suffix: "", label: "Days open each week", sub: "Including Sunday" },
    { value: 1, suffix: "", label: "Visit for many root canals", sub: "Where clinically appropriate" },
  ];

  const reasons = [
    {
      title: "Specialists, not generalists doing specialist work",
      body: "Orthodontics and endodontics are both three-year MDS disciplines. Cases that most general clinics refer elsewhere are handled here, by the person who trained for them.",
    },
    {
      title: "Digital, so you can see the plan",
      body: "The iTero Element scanner replaces impression putty and feeds directly into ClinCheck and crown design. You see the proposed outcome before treatment starts, not after.",
    },
    {
      title: "We will tell you when you do not need treatment",
      body: "Not every painful tooth needs a root canal. Not every wisdom tooth needs removing. Not every case suits aligners. An honest no is part of the consultation.",
    },
    {
      title: "Costs explained before we begin",
      body: "You get the full fee for your treatment plan, in writing, before anything starts. Nothing gets added partway through.",
    },
  ];

  return (
    <section className="section bg-sunk">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Why Eclectic"
          title={["A clinic that explains", "its reasoning."]}
          lede="Dentistry runs on trust, and trust is built by being told what is happening and why — including when the answer is that nothing needs doing."
        />

        {/* Stat rail */}
        <Stagger className="mt-9 grid gap-px sm:mt-14 overflow-hidden rounded-2xl border border-line-strong/50 bg-line-strong/40 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="h-full bg-ivory p-5 sm:p-7">
                <p className="font-display text-4xl leading-none text-terracotta lining-nums tabular-nums sm:text-5xl lg:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold leading-snug text-cocoa sm:mt-4 sm:text-base">{s.label}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{s.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Reasons */}
        <div className="mt-10 grid gap-8 sm:mt-16 sm:gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="flex gap-6 border-t border-line-strong/50 pt-7">
                <span className="font-display text-lg leading-none text-terracotta lining-nums tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-cocoa">
                    {r.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
