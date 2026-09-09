"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Photography with scroll-linked drift.
 *
 * Two effects, deliberately layered:
 *
 *  1. A one-time mask reveal — the frame un-clips downward from its top edge
 *     as it enters, so the picture feels placed rather than faded in. The top
 *     is deliberately the clipped edge: the element triggers while it is
 *     still low in the viewport, so only its upper part is on screen and a
 *     bottom-edge reveal would happen below the fold where nobody sees it.
 *  2. Continuous parallax — the image is oversized inside the frame and
 *     drifts against the scroll for as long as it is on screen. This is the
 *     effect that makes a page feel expensive on a phone, because something
 *     is always moving under your thumb.
 *
 * The inner layer is inset by -12% top and bottom (124% of frame height) and
 * never translates more than ±10% of its own height, so no edge can ever be
 * exposed at any scroll position.
 *
 * `scrollYProgress` runs through a light spring: iOS throttles scroll events
 * during momentum, and without smoothing the drift visibly steps. The spring
 * is stiff enough that it never feels detached from the finger.
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  priority = false,
  /** Drift as a fraction of the frame height. 0.06–0.10 reads well. */
  strength = 0.08,
  /** Frame classes — aspect ratio and corner radius belong here. */
  className,
  imageClassName,
  /** Skip the entry mask for anything above the fold. */
  reveal = true,
  delay = 0,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  strength?: number;
  className?: string;
  imageClassName?: string;
  reveal?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.35,
    restDelta: 0.0005,
  });

  const pct = Math.min(strength, 0.1) * 100;
  const y = useTransform(smooth, [0, 1], [`${pct}%`, `-${pct}%`]);

  const animate =
    reveal && !reduced
      ? {
          initial: { clipPath: "inset(16% 0% 0% 0%)", opacity: 0.4 },
          whileInView: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
          viewport: { once: true, amount: "some" as const, margin: "0px 0px -10% 0px" },
          transition: { duration: 1.15, delay, ease: EASE },
        }
      : {};

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden bg-sunk", className)}
      {...animate}
    >
      <motion.div
        style={reduced ? undefined : { y }}
        className="absolute inset-x-0 -inset-y-[12%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
    </motion.div>
  );
}
