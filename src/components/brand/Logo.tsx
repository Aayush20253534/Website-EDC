import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The Eclectic Dental Care mark.
 *
 * Uses the supplied transparent-background artwork rather than a redrawn
 * vector — the modelled highlights and the ivory enamel contour are part of
 * the brand's character and flatten badly if reduced to flat paths. The PNG
 * is a true alpha cutout, so the same file sits correctly on the ivory ground
 * and on the espresso footer with no light/dark variant needed.
 *
 * Served at 512px and rendered at 40–56px, so it stays crisp on 3x displays.
 */
export function LogoMark({
  className,
  priority = false,
}: {
  className?: string;
  /** `tone` is accepted for call-site symmetry; the cutout needs no variant. */
  tone?: "light" | "dark";
  animated?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={cn("relative block shrink-0", className)}>
      <Image
        src="/brand/mark.png"
        alt=""
        fill
        sizes="64px"
        priority={priority}
        className="object-contain"
      />
    </span>
  );
}

/**
 * Full lockup — mark plus wordmark. The wordmark is live text in the display
 * serif so it stays sharp, selectable and translatable at any size.
 */
export function LogoLockup({
  className,
  tone = "light",
  showTagline = true,
  priority = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  showTagline?: boolean;
  animated?: boolean;
  priority?: boolean;
}) {
  const ink = tone === "dark" ? "text-ivory" : "text-cocoa";
  const sub = tone === "dark" ? "text-ondark-muted" : "text-muted";
  const rule = tone === "dark" ? "bg-ondark-muted/40" : "bg-line-strong";

  return (
    <span className={cn("group/logo flex items-center gap-2.5 sm:gap-3", className)}>
      <LogoMark
        priority={priority}
        className="h-11 w-11 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/logo:scale-[1.07] sm:h-12 sm:w-12"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold leading-none tracking-[0.06em] sm:text-[1.5rem]",
            ink,
          )}
        >
          ECLECTIC
        </span>
        {showTagline && (
          <span className="mt-[5px] flex items-center gap-1.5">
            <span className={cn("h-px w-3", rule)} />
            <span
              className={cn(
                "text-[0.5rem] font-semibold uppercase leading-none tracking-[0.28em] sm:text-[0.55rem]",
                sub,
              )}
            >
              Dental Care
            </span>
            <span className={cn("h-px w-3", rule)} />
          </span>
        )}
      </span>
    </span>
  );
}
