"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Shared easing. Expo-out is the house curve: fast start, long settle.
 * ------------------------------------------------------------------ */
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Shared viewport config for every scroll reveal.
 *
 * `amount` is deliberately "some" (fires as soon as any part intersects)
 * rather than a fraction. A fraction is a trap: an element taller than the
 * viewport divided by that fraction can NEVER satisfy it, so the observer
 * never fires and the content stays invisible forever. The 15-card service
 * grid is 4136px tall on a 746px mobile viewport — `amount: 0.2` needed
 * 827px of it visible, which is impossible, and the whole section rendered
 * as a blank gap.
 *
 * The negative bottom margin is what supplies the "reveal on approach" feel
 * that `amount` was doing, without ever being unsatisfiable.
 */
const VIEWPORT = { once: true, amount: "some", margin: "0px 0px -12% 0px" } as const;

/* ================================================================== *
 * Reveal — the workhorse. Fades and lifts a block into view once.
 * ================================================================== */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/* ================================================================== *
 * Stagger — parent/child pair for lists and grids.
 * ================================================================== */
/**
 * Grid/list reveal.
 *
 * Each item observes *itself* rather than being driven by variants from the
 * container. Parent-driven staggering only works when the container reliably
 * enters the viewport, which is false for any grid taller than the screen —
 * and it means rows far below the fold finish animating before the visitor
 * ever reaches them.
 *
 * The container injects a delay of `(index % 3) * stagger` so items cascade
 * left-to-right across a row on desktop, and carry a gentle varying rhythm
 * in a single mobile column.
 */
export function Stagger({
  children,
  className,
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) =>
        isValidElement<{ __delay?: number }>(child)
          ? cloneElement(child, { __delay: (i % 3) * stagger })
          : child,
      )}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
  __delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
  /** Injected by `Stagger`. Not intended to be set by hand. */
  __delay?: number;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, delay: __delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/* ================================================================== *
 * MaskText — the signature move. Each line is clipped by its own box
 * and slides up from beneath it. Used on every major heading.
 * ================================================================== */
export function MaskText({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
}: {
  lines: (string | ReactNode)[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();

  /**
   * The observer must watch the *wrapper*, not the sliding line.
   *
   * Each line starts translated 110% below its own box. If whileInView were
   * placed on that line, the element being observed would sit outside the
   * viewport at rest and the IntersectionObserver would never fire — the
   * heading would stay permanently hidden. Driving the children through
   * variant propagation from a wrapper whose box never moves fixes it.
   */
  return (
    <motion.span
      className={cn("block", className)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className={cn("block", lineClassName)}
            variants={{
              hidden: reduced ? { opacity: 0 } : { y: "110%", opacity: 1 },
              show: {
                y: "0%",
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: delay + i * stagger,
                  ease: EASE,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ================================================================== *
 * WordReveal — word-by-word mask, for hero headlines only.
 * Overusing this makes a page feel restless, so it is deliberately
 * separate from MaskText.
 * ================================================================== */
export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="mask-word">
          <motion.span
            className={cn("inline-block", wordClassName)}
            initial={reduced ? { opacity: 0 } : { y: "108%" }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.05, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ================================================================== *
 * Parallax — subtle vertical drift as an element crosses the viewport.
 * Keep `distance` small; anything over ~80px reads as a glitch.
 * ================================================================== */
export function Parallax({
  children,
  distance = 60,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      {/* relative: a fill-Image child positions against this box */}
      <motion.div style={reduced ? undefined : { y }} className="relative h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* ================================================================== *
 * ScaleIn — image reveals: scale down into place while un-clipping.
 * Gives photography a deliberate, "placed" feel rather than a fade.
 * ================================================================== */
export function ScaleIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={reduced ? { opacity: 0 } : { clipPath: "inset(12% 8% 12% 8% round 16px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 16px)", opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.25, delay, ease: EASE }}
    >
      <motion.div
        initial={reduced ? undefined : { scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.4, delay, ease: EASE }}
        className="relative h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ================================================================== *
 * Counter — animates a number when it scrolls into view.
 * ================================================================== */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      // expo-out, matched to the house easing curve
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(eased * to));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* ================================================================== *
 * Marquee — infinite horizontal rail. Duplicated track, translated by
 * exactly -50% so the seam is invisible.
 * ================================================================== */
export function Marquee({
  children,
  speed = 40,
  reverse = false,
  className,
  pauseOnHover = true,
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={cn("flex gap-10 overflow-x-auto no-scrollbar", className)}>
        {children}
      </div>
    );
  }

  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center gap-10 pr-10",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
}

/* ================================================================== *
 * Magnetic — button pulls slightly toward the cursor. Pointer-fine
 * devices only; on touch it is inert.
 * ================================================================== */
export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================== *
 * ScrollProgress — hairline terracotta bar pinned to the top of the
 * viewport. Cheap, and it makes long service pages feel navigable.
 * ================================================================== */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-terracotta"
      aria-hidden
    />
  );
}
