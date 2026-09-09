"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import type { Doctor } from "@/lib/doctors";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Doctor card with scroll choreography.
 *
 * On a phone each card gets most of the screen, so it is worth animating
 * properly rather than fading in once. Three things move, on different
 * timings, all driven by where the card sits in the viewport:
 *
 *  - the portrait drifts against the scroll (ParallaxImage)
 *  - the whole card lifts and settles as it crosses the middle of the screen
 *  - the ivory name card slides up out of the photograph, slightly late, so
 *    the eye lands on the face first and the name second
 *
 * Everything is transform and opacity only — no layout or paint work — so it
 * stays smooth on a mid-range Android.
 */
export function DoctorCard({
  doctor,
  index,
  priority = false,
}: {
  doctor: Doctor;
  index: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // Runs from the card entering the bottom to it leaving the top.
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 32,
    mass: 0.35,
    restDelta: 0.0005,
  });

  // Settle into place across the first third, hold, then lift away.
  const y = useTransform(smooth, [0, 0.32, 0.75, 1], [46, 0, 0, -28]);
  const scale = useTransform(smooth, [0, 0.32, 0.8, 1], [0.955, 1, 1, 0.985]);

  const style = reduced ? undefined : { y, scale };

  return (
    <motion.div ref={ref} style={style} className="will-change-transform">
      <Link href={`/doctors/${doctor.slug}`} className="group block">
        <div className="relative">
          <ParallaxImage
            src={doctor.image}
            alt={doctor.imageAlt}
            sizes="(max-width: 768px) 92vw, 46vw"
            priority={priority}
            strength={0.075}
            reveal={!priority}
            delay={index * 0.06}
            className="aspect-[4/5] rounded-3xl"
            imageClassName="object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />

          {/* Ivory card sized to its own text — never a full-width scrim.
              Slides up out of the photograph a beat after it reveals. */}
          <motion.div
            initial={reduced ? { opacity: 0 } : { y: 26, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some", margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.9, delay: 0.28 + index * 0.06, ease: EASE }}
            className="absolute bottom-4 left-4 right-4 rounded-2xl border border-line/70 bg-surface/95 p-5 backdrop-blur-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[19rem]"
          >
            <p className="eyebrow text-brick">{doctor.qualification}</p>
            <p className="mt-2.5 font-display text-2xl leading-tight text-cocoa">
              {doctor.name}
            </p>
            <p className="mt-1 text-sm text-muted">{doctor.role}</p>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: "some", margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.85, delay: 0.4 + index * 0.06, ease: EASE }}
          className="mt-5 sm:mt-6"
        >
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted">
            {doctor.tagline}
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {doctor.credentials.slice(0, 2).map((c, i) => (
              <motion.span
                key={c}
                initial={reduced ? { opacity: 0 } : { y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.06 + i * 0.08,
                  ease: EASE,
                }}
                className="rounded-full bg-tint px-3 py-1.5 text-xs font-medium text-brick"
              >
                {c}
              </motion.span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brick sm:mt-5">
            Read full profile
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
        </motion.div>
      </Link>
    </motion.div>
  );
}
