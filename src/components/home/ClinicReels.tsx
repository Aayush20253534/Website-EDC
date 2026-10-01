"use client";

import { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion";

const reels = [
  { src: "/videos/reel-1.mp4", poster: "/videos/reel-1-poster.jpg", label: "Reception & waiting" },
  { src: "/videos/reel-2.mp4", poster: "/videos/reel-2-poster.jpg", label: "Operatory one" },
  { src: "/videos/reel-3.mp4", poster: "/videos/reel-3-poster.jpg", label: "Digital scanning" },
  { src: "/videos/reel-4.mp4", poster: "/videos/reel-4-poster.jpg", label: "Consultation area" },
  { src: "/videos/reel-5.mp4", poster: "/videos/reel-5-poster.jpg", label: "Sterilisation" },
];

/**
 * Vertical clinic footage in a horizontal rail.
 *
 * The source files were 8K HEVC (≈700 MB total); these are transcoded to
 * 720×1280 H.264 at ~7 MB total. Each clip is `preload="none"` and only
 * starts once it is actually on screen, so the section costs nothing until
 * a visitor reaches it.
 */
export function ClinicReels() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videos = railRef.current?.querySelectorAll("video");
    if (!videos?.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              /* autoplay blocked — poster stays, which is a fine fallback */
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.45 },
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section overflow-hidden bg-ivory">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Inside the clinic"
          title={["Look around", "before you arrive."]}
          lede="Filmed at the practice near Hira Halwai Chauraha in Civil Lines — no stock footage, no staged models. This is the room you will actually sit in."
          action={<ArrowLink href="/gallery">Full gallery</ArrowLink>}
        />
      </div>

      <Reveal delay={0.1}>
        <div
          ref={railRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:gap-5 sm:px-8 lg:px-12"
        >
          {reels.map((reel, i) => (
            <figure
              key={reel.src}
              className="group relative w-[68vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-sunk shadow-[0_24px_60px_rgba(58,44,37,0.12)] sm:w-[44vw] lg:w-[22rem]"
            >
              <video
                className="aspect-[9/16] h-full w-full object-cover"
                src={reel.src}
                poster={reel.poster}
                muted
                loop
                playsInline
                preload="none"
                aria-label={`Clinic footage — ${reel.label}`}
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full border border-line/60 bg-surface/92 px-3.5 py-1.5 backdrop-blur-sm">
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-cocoa">
                  <span className="text-terracotta">{String(i + 1).padStart(2, "0")}</span>{" "}
                  {reel.label}
                </span>
              </figcaption>
            </figure>
          ))}

          {/* trailing spacer so the last card can centre on snap */}
          <div aria-hidden className="w-2 shrink-0 sm:w-6" />
        </div>
      </Reveal>

      <div className="shell mt-6">
        <p className="text-xs text-faint">Swipe to see more →</p>
      </div>
    </section>
  );
}
