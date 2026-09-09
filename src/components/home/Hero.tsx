"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { WordReveal, Reveal } from "@/components/motion";
import { site, telLink, waLink } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Text-led hero.
 *
 * The paired doctor portraits that used to sit here were cramped side by side
 * and duplicated the specialists section immediately below, which now runs
 * directly after this block and carries the photography at full size.
 * Leaving the hero to the headline alone gives it room and gets the visitor
 * to the doctors sooner.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ivory pb-16 pt-10 sm:pb-20 lg:pb-28 lg:pt-16"
    >
      {/* Warm decorative ground */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[26%] -top-[34%] h-[56rem] w-[56rem] rounded-full bg-sandwash/55"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[26rem] w-[26rem] rounded-full bg-blushwash/50 blur-3xl"
      />

      <motion.div
        style={reduced ? undefined : { y: textY, opacity: fade }}
        className="shell relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="rule-accent"
        >
          <span className="eyebrow text-brick">
            Civil Lines · Prayagraj (Allahabad)
          </span>
        </motion.div>

        <h1 className="mt-7 max-w-5xl">
          <span className="sr-only">
            Best dental clinic in Prayagraj — Eclectic Dental Care, a certified
            Invisalign provider in Civil Lines.
          </span>

          <span aria-hidden className="block">
            <WordReveal
              text="Best Dental Clinic"
              className="display-xl block text-cocoa"
              delay={0.15}
            />
            <WordReveal
              text="in Prayagraj."
              className="display-xl block text-terracotta"
              delay={0.3}
            />
          </span>
        </h1>

        {/* Lede and actions share a row on desktop so a text-only hero still
            fills its width rather than trailing off down the left edge. */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="lg:col-span-7"
          >
            <p className="lede max-w-xl">
              Two <strong className="font-semibold text-cocoa">MDS specialists</strong>{" "}
              under one roof — orthodontics and endodontics, with certified
              Invisalign treatment and iTero digital scanning on site.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.72, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Book an appointment
              </ButtonLink>
              <ButtonLink href={waLink()} external variant="outline" size="lg">
                <WhatsAppGlyph />
                WhatsApp us
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-7 text-sm"
        >
          <a
            href={telLink}
            className="group flex items-center gap-2.5 font-semibold text-cocoa transition-colors hover:text-brick"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tint text-brick transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.3 0 .7-.2 1l-2.3 2.1Z" />
              </svg>
            </span>
            {site.phoneDisplay}
          </a>
          <p className="text-muted">
            Open today ·{" "}
            <span className="font-medium text-cocoa">Mon–Sat 10am–8pm</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

/** Credential rail — sits directly beneath the hero. */
export function TrustStrip() {
  const items = [
    "MDS Orthodontics",
    "MDS Endodontics",
    "Certified Invisalign Provider",
    "iTero Element Scanner",
    "Single-visit Root Canals",
    "Open 7 Days",
    "Digital Smile Planning",
    "Civil Lines, Prayagraj",
  ];

  return (
    <div className="border-y border-line bg-surface">
      <Reveal className="shell py-6">
        <div className="fade-x flex gap-3 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center sm:overflow-visible">
          {items.map((item) => (
            <span
              key={item}
              className="flex shrink-0 items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium text-cocoa"
            >
              <span className="h-1 w-1 rounded-full bg-terracotta" aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
