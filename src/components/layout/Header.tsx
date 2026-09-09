"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services, servicePath } from "@/lib/services";
import { doctors } from "@/lib/doctors";
import { site, telLink, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const navItems = [
  { label: "Treatments", href: "/services", mega: true },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Clinic", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Close everything on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Lock body scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement rail — Invisalign is the flagship, so it leads. */}
      <div className="relative z-50 bg-espresso text-ivory">
        <div className="shell flex h-9 items-center justify-between gap-4 text-[0.6875rem] sm:text-xs">
          <p className="flex items-center gap-2 font-medium tracking-wide">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blush [animation:edc-pulse-ring_2.4s_ease-out_infinite]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blush" />
            </span>
            <span className="text-blush">Certified Invisalign Provider</span>
            <span className="hidden text-ondark-muted sm:inline">· Civil Lines, Prayagraj</span>
          </p>
          <a
            href={telLink}
            className="font-semibold tracking-wide transition-colors hover:text-blush"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-line bg-ivory/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="shell flex items-center justify-between gap-6 py-3 lg:py-4">
          <Link href="/" aria-label="Eclectic Dental Care — home">
            <LogoLockup animated />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <div
                  key={item.href}
                  onMouseEnter={() => setMegaOpen(Boolean(item.mega))}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors xl:px-4",
                      active ? "text-brick" : "text-cocoa hover:text-brick",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3.5 -bottom-0.5 h-px bg-terracotta xl:inset-x-4"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href={waLink()}
              external
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              <WhatsAppGlyph />
              WhatsApp
            </ButtonLink>
            <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
              Book Appointment
            </ButtonLink>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-cocoa transition-colors hover:border-brick hover:text-brick lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="flex h-3 w-4 flex-col justify-between">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="block h-[1.5px] w-full bg-current"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="block h-[1.5px] w-full bg-current"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="block h-[1.5px] w-full bg-current"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Treatments mega-menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="absolute inset-x-0 top-full hidden border-y border-line bg-surface shadow-[0_24px_60px_rgba(58,44,37,0.12)] lg:block"
            >
              <div className="shell grid grid-cols-12 gap-8 py-9">
                <div className="col-span-3">
                  <p className="eyebrow text-terracotta">All Treatments</p>
                  <p className="mt-4 font-display text-2xl leading-tight text-cocoa">
                    Every dental service, under one roof in Civil Lines.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Two MDS specialists — orthodontics and endodontics — so complex
                    cases stay in-house.
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brick hover:text-brick-hover"
                  >
                    View all {services.length} treatments
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="col-span-9 grid grid-cols-3 gap-x-6 gap-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={servicePath(s)}
                      className="group/mi flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-tint"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sunk text-terracotta transition-colors group-hover/mi:bg-white">
                        <ServiceIcon name={s.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.8125rem] font-semibold text-cocoa group-hover/mi:text-brick">
                          {s.name}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-muted">
                          {s.category}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-espresso/25 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.55, ease: EASE }}
              className="absolute inset-x-0 top-0 max-h-[92dvh] overflow-y-auto overscroll-contain rounded-b-3xl bg-ivory pb-8 pt-24 shadow-[0_40px_100px_-20px_rgba(58,44,37,0.22)]"
              aria-label="Mobile"
            >
              <div className="shell">
                <ul className="border-t border-line">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: EASE }}
                      className="border-b border-line"
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-4 font-display text-2xl text-cocoa"
                      >
                        {item.label}
                        <span aria-hidden className="text-terracotta">→</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="mt-7"
                >
                  <p className="eyebrow text-muted">Popular treatments</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.slice(0, 6).map((s) => (
                      <Link
                        key={s.slug}
                        href={servicePath(s)}
                        className="rounded-full border border-line-strong px-3.5 py-2 text-xs font-medium text-cocoa"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-2.5">
                    <ButtonLink href={telLink} external size="lg" className="w-full">
                      Call {site.phoneDisplay}
                    </ButtonLink>
                    <ButtonLink
                      href={waLink()}
                      external
                      variant="whatsapp"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppGlyph />
                      WhatsApp us
                    </ButtonLink>
                  </div>

                  <p className="mt-6 text-xs leading-relaxed text-muted">
                    {site.addressLine}
                    <br />
                    Mon–Sat 10am–8pm · Sun 6pm–8pm
                  </p>
                  <p className="mt-3 text-xs text-muted">
                    {doctors.map((d) => `${d.name}, ${d.qualification}`).join(" · ")}
                  </p>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      aria-hidden
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.19 8.19 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Z" />
    </svg>
  );
}
