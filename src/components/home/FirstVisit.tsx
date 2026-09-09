"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion";

const steps = [
  {
    title: "Tell us what is wrong",
    body: "Call or WhatsApp and describe the problem. We will tell you whether it needs an appointment now, this week, or not at all.",
  },
  {
    title: "Examination and diagnosis",
    body: "A proper look, plus an X-ray or digital scan where it will actually change the plan. You get the reasoning, not just the verdict.",
  },
  {
    title: "Options and costs, in writing",
    body: "The realistic choices, what each involves, roughly how long it takes, and the full fee — before anything starts.",
  },
  {
    title: "Treatment at your pace",
    body: "You decide when to begin. Phasing treatment over time is normal and we will sequence it so nothing has to be redone.",
  },
];

/**
 * The journey band. A terracotta rule draws itself down the timeline as the
 * section scrolls, which gives the steps a sense of progression rather than
 * being four cards in a row.
 */
export function FirstVisit() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section bg-sunk">
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="Your first visit"
          title={["No surprises,", "at any stage."]}
          lede="The most common reason people avoid a dentist is not knowing what is about to happen — or what it will cost. Here is exactly how a first visit runs."
          action={<ButtonLink href="/contact" size="md">Book your first visit</ButtonLink>}
        />

        <div ref={ref} className="relative mt-10 pl-10 sm:mt-16 sm:pl-14">
          {/* track */}
          <div
            aria-hidden
            className="absolute left-[13px] top-2 h-[calc(100%-2rem)] w-px bg-line-strong/60 sm:left-[21px]"
          />
          {/* progress */}
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute left-[13px] top-2 h-[calc(100%-2rem)] w-px origin-top bg-terracotta sm:left-[21px]"
          />

          <ol className="space-y-9 sm:space-y-14">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                <Reveal delay={i * 0.06}>
                  <span
                    aria-hidden
                    className="absolute -left-10 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-line-strong bg-ivory font-display text-xs text-terracotta lining-nums tabular-nums sm:-left-14 sm:h-11 sm:w-11 sm:text-base"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-cocoa sm:text-[1.75rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
