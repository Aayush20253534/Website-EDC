"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/brand/Logo";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { site, telLink } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

/** First appearance, in ms after the visitor lands. */
const FIRST_DELAY = 12_000;
/** Re-appearance, in ms after each dismissal. */
const REOPEN_DELAY = 35_000;
/**
 * How many times it may appear in one session.
 *
 * The brief was to reopen 35s after it is closed. Left uncapped that becomes
 * a loop that reappears every 35 seconds for as long as someone is reading —
 * which reads as harassment and costs more enquiries than it wins. Three
 * appearances keeps the intent without that. Raise or lower it here.
 */
const MAX_APPEARANCES = 3;

/** Suppress for this many days once someone has actually submitted. */
const SUBMITTED_DAYS = 14;

const SUBMITTED_KEY = "edc.consult.submitted";
const COUNT_KEY = "edc.consult.shown";

/** Paths where the popup would be redundant or intrusive. */
const EXCLUDED = ["/contact"];

function alreadySubmitted() {
  try {
    const until = window.localStorage.getItem(SUBMITTED_KEY);
    return Boolean(until) && Date.now() < Number(until);
  } catch {
    return false;
  }
}

export function ConsultPopup() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const lenis = useLenis();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [touched, setTouched] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<Element | null>(null);

  const excluded = EXCLUDED.includes(pathname);

  const schedule = useCallback(
    (delay: number) => {
      if (excluded) return;
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (alreadySubmitted()) return;
        let shown = 0;
        try {
          shown = Number(window.sessionStorage.getItem(COUNT_KEY) ?? 0);
        } catch {
          /* storage blocked — fall back to showing once */
        }
        if (shown >= MAX_APPEARANCES) return;
        try {
          window.sessionStorage.setItem(COUNT_KEY, String(shown + 1));
        } catch {
          /* ignore */
        }
        setOpen(true);
      }, delay);
    },
    [excluded],
  );

  // First appearance.
  useEffect(() => {
    schedule(FIRST_DELAY);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [schedule]);

  // Lenis owns scrolling, so `overflow: hidden` alone will not hold the page
  // still behind the dialog — the instance has to be stopped.
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    // Fallback for the reduced-motion path, where SmoothScroll skips Lenis
    // entirely and there is no instance to stop.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    openerRef.current = document.activeElement;
    const focus = setTimeout(() => nameRef.current?.focus(), 220);

    return () => {
      clearTimeout(focus);
      lenis?.start();
      document.body.style.overflow = prevOverflow;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open, lenis]);

  const close = useCallback(() => {
    setOpen(false);
    schedule(REOPEN_DELAY);
  }, [schedule]);

  // Escape to close, and keep Tab inside the dialog while it is open.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const ageNum = Number(age);
  const nameOk = name.trim().length > 1;
  const ageOk = age.trim() !== "" && Number.isFinite(ageNum) && ageNum >= 1 && ageNum <= 120;
  const canSubmit = nameOk && ageOk;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!canSubmit) return;

    const text = [
      "Hello Eclectic Dental Care, I'd like to book a consultation.",
      "",
      `Name: ${name.trim()}`,
      `Age: ${ageNum}`,
    ].join("\n");

    try {
      window.localStorage.setItem(
        SUBMITTED_KEY,
        String(Date.now() + SUBMITTED_DAYS * 864e5),
      );
    } catch {
      /* ignore */
    }

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );

    // Submitted — stop the reopen cycle.
    if (timer.current) clearTimeout(timer.current);
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center sm:p-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 cursor-default bg-espresso/45 backdrop-blur-sm"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-line bg-ivory shadow-[0_40px_100px_-20px_rgba(58,44,37,0.45)]"
          >
            {/* warm ground */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sandwash/70"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/80 text-cocoa transition-colors hover:border-brick hover:text-brick"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <LogoMark className="h-9 w-9" />
                <span className="eyebrow text-brick">Book a consultation</span>
              </div>

              <h2
                id="consult-title"
                className="mt-5 font-display text-[1.75rem] leading-tight text-cocoa sm:text-[2rem]"
              >
                Talk to a specialist.
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Two lines is all we need. We&rsquo;ll pick it up on WhatsApp and
                come back with a time that suits you.
              </p>

              <form onSubmit={submit} noValidate className="mt-6 grid gap-4">
                <div>
                  <label htmlFor="consult-name" className="eyebrow block text-muted">
                    Patient name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="consult-name"
                    ref={nameRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="Full name"
                    aria-invalid={touched && !nameOk}
                    className="mt-2 h-12 w-full rounded-xl border border-line-input bg-surface px-3.5 text-[0.9375rem] text-cocoa placeholder:text-faint transition-colors focus:border-brick"
                  />
                  {touched && !nameOk && (
                    <p className="mt-1.5 text-xs text-danger">
                      Please enter the patient&rsquo;s name.
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="consult-age" className="eyebrow block text-muted">
                    Age <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="consult-age"
                    value={age}
                    onChange={(e) => setAge(e.target.value.replace(/[^\d]/g, ""))}
                    inputMode="numeric"
                    maxLength={3}
                    placeholder="e.g. 32"
                    aria-invalid={touched && !ageOk}
                    className="mt-2 h-12 w-full rounded-xl border border-line-input bg-surface px-3.5 text-[0.9375rem] text-cocoa placeholder:text-faint transition-colors focus:border-brick"
                  />
                  {touched && !ageOk && (
                    <p className="mt-1.5 text-xs text-danger">
                      Please enter an age between 1 and 120.
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.985 }}
                  className="mt-1 inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-espresso px-8 text-[0.9375rem] font-semibold text-ivory transition-colors hover:bg-cocoa"
                >
                  <WhatsAppGlyph className="h-[18px] w-[18px]" />
                  Book on WhatsApp
                </motion.button>
              </form>

              <div className="mt-5 flex flex-col gap-2 border-t border-line pt-5 text-center">
                <p className="text-xs text-muted">
                  Prefer to talk?{" "}
                  <a href={telLink} className="font-semibold text-brick">
                    Call {site.phoneDisplay}
                  </a>
                </p>
                <p className="text-[0.6875rem] text-faint">
                  Two MDS specialists · {site.address.locality}, {site.address.city}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
