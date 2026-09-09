"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * FAQ accordion. Answers stay in the DOM for crawlers via the FAQPage
 * schema emitted alongside it, so collapsing here costs nothing for SEO.
 */
export function Accordion({
  items,
  className,
  tone = "light",
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  className?: string;
  tone?: "light" | "dark";
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("divide-y", tone === "dark" ? "divide-white/10" : "divide-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={cn(i === 0 && "border-t", tone === "dark" ? "border-white/10" : "border-line")}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={cn(
                    "font-display text-xl leading-snug transition-colors sm:text-[1.375rem]",
                    tone === "dark"
                      ? isOpen
                        ? "text-blush"
                        : "text-ivory"
                      : isOpen
                        ? "text-brick"
                        : "text-cocoa",
                  )}
                >
                  {item.q}
                </span>

                <span
                  className={cn(
                    "relative mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                    tone === "dark"
                      ? "border-white/20 text-blush"
                      : isOpen
                        ? "border-brick text-brick"
                        : "border-line-strong text-cocoa",
                  )}
                >
                  <span className="absolute h-px w-2.5 bg-current" />
                  <motion.span
                    animate={{ rotate: isOpen ? 0 : 90 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="absolute h-px w-2.5 bg-current"
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "max-w-2xl pb-7 pr-10 leading-relaxed",
                      tone === "dark" ? "text-ondark-muted" : "text-muted",
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
