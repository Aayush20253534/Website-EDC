"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/**
 * Lenis smooth scroll, wired to respect prefers-reduced-motion.
 *
 * When a visitor has asked their OS to reduce motion we skip Lenis entirely
 * and hand scrolling back to the browser, rather than shipping a softened
 * version of the same effect.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.1,
        // Touch devices keep native scrolling — hijacking it on mobile
        // costs more in feel than it gains.
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
