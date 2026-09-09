"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { site, telLink, waLink } from "@/lib/site";

/**
 * Sticky action bar, mobile only.
 *
 * On a dental site the overwhelming majority of enquiries are a phone call or
 * a WhatsApp message from a phone — so the two highest-intent actions stay
 * permanently within thumb reach once the visitor is past the hero.
 * It appears only after the hero so it never competes with the first CTA.
 */
export function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 620));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="border-t border-line bg-ivory/92 px-3 py-2.5 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <a
                href={telLink}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brick text-sm font-semibold text-white transition-colors active:bg-brick-press"
              >
                <PhoneGlyph />
                Call now
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-espresso text-sm font-semibold text-ivory transition-colors active:bg-cocoa"
                aria-label={`WhatsApp ${site.name}`}
              >
                <WhatsAppGlyph />
                WhatsApp
              </a>
              <Link
                href="/contact"
                aria-label="Book an appointment"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong text-cocoa transition-colors active:bg-tint"
              >
                <CalendarGlyph />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.3 0 .7-.2 1l-2.3 2.1Z" />
    </svg>
  );
}

function CalendarGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-5 w-5"
      aria-hidden
    >
      <rect x="3.5" y="5" width="17" height="16" rx="3" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
      <circle cx="12" cy="14.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
