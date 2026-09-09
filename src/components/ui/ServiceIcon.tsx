import { cn } from "@/lib/utils";

/**
 * Custom 24px line icons drawn on a shared grid — 1.5 stroke, round caps,
 * consistent optical weight. Stock icon-library glyphs are one of the
 * clearest tells of a templated site, so these are drawn for this brand.
 */

type IconProps = { className?: string };

const base = "h-full w-full";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Generic tooth outline — reused as the silhouette in several icons. */
const TOOTH_D =
  "M12 4.2c1.9-1.6 5-1.9 6.5.2 1.5 2.1.8 5.3.3 8s-1 6.2-2.3 7.5c-1.1 1.1-2.2.3-2.7-2s-1-3.9-1.8-3.9-1.3 1.6-1.8 3.9-1.6 3.1-2.7 2c-1.3-1.3-1.8-4.8-2.3-7.5s-1.2-5.9.3-8C6.9 2.3 10.1 2.6 12 4.2Z";

export const icons = {
  /** Invisalign / clear aligners — an open dental arch seen from above. */
  aligner: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      {/* outer arch */}
      <path d="M3.8 5.4c0 9 3.4 14.2 8.2 14.2s8.2-5.2 8.2-14.2" />
      {/* inner arch */}
      <path d="M7.9 5.4c0 5.9 1.7 9.6 4.1 9.6s4.1-3.7 4.1-9.6" />
      {/* tooth divisions */}
      <path d="M12 15v4.6M8.4 9.9 4.7 10.7M15.6 9.9l3.7.8M9.6 13.4l-3.4 2M14.4 13.4l3.4 2" />
    </svg>
  ),

  /** Fixed braces — arch wire crossing three brackets. */
  braces: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M3 10.5c3-2 6-3 9-3s6 1 9 3" />
      <rect x="5" y="10" width="3.4" height="4.2" rx="1" />
      <rect x="10.3" y="9.2" width="3.4" height="4.2" rx="1" />
      <rect x="15.6" y="10" width="3.4" height="4.2" rx="1" />
      <path d="M3 18c3 1.6 6 2.4 9 2.4s6-.8 9-2.4" />
    </svg>
  ),

  /** Endodontics — tooth with the canal traced inside. */
  tooth: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d={TOOTH_D} />
      <path d="M12 8.5v4M12 12.5c-.4 1.6-.7 3-.9 4.4M12 12.5c.4 1.6.7 3 .9 4.4" />
    </svg>
  ),

  /** Implant — crown seated on a threaded post. */
  implant: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M7.5 8.2c0-2 2-3.4 4.5-3.4s4.5 1.4 4.5 3.4c0 1.1-.5 1.9-1.2 2.3H8.7c-.7-.4-1.2-1.2-1.2-2.3Z" />
      <path d="M9.4 12.2h5.2M9.7 15h4.6M10 17.8h4" />
      <path d="M11 10.5v10M13 10.5v10" />
    </svg>
  ),

  /** Cosmetic — four-point sparkle with a smaller companion. */
  sparkle: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M10 3c.9 4.4 1.9 5.4 6.3 6.3-4.4.9-5.4 1.9-6.3 6.3-.9-4.4-1.9-5.4-6.3-6.3C8.1 8.4 9.1 7.4 10 3Z" />
      <path d="M17.8 14.4c.4 2 .9 2.4 2.9 2.9-2 .4-2.4.9-2.9 2.9-.4-2-.9-2.4-2.9-2.9 2-.4 2.4-.9 2.9-2.9Z" />
    </svg>
  ),

  /** Veneers — thin facings across the front teeth, centre one proud. */
  layers: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M3.4 8.2c0-1.2 1-2.2 2.2-2.2h.9c1.2 0 2.2 1 2.2 2.2v4.9c0 1.7-.9 2.9-2.6 2.9s-2.7-1.2-2.7-2.9Z" />
      <path d="M9.5 6.6c0-1.2 1-2.2 2.2-2.2h.6c1.2 0 2.2 1 2.2 2.2v7.2c0 2-1 3.4-2.5 3.4s-2.5-1.4-2.5-3.4Z" />
      <path d="M15.3 8.2c0-1.2 1-2.2 2.2-2.2h.9c1.2 0 2.2 1 2.2 2.2v4.9c0 1.7-1 2.9-2.7 2.9s-2.6-1.2-2.6-2.9Z" />
      <path d="M11.4 7.2v3.4" />
    </svg>
  ),

  /** Crowns & bridges — cap seated over a prepared tooth. */
  crown: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M4.5 9.5 6 4.8l3 2.6L12 3l3 4.4 3-2.6 1.5 4.7Z" />
      <path d="M5.5 13h13" />
      <path d="M7 16.5c1.6.6 3.3.9 5 .9s3.4-.3 5-.9" />
    </svg>
  ),

  /** Paediatric — small tooth with a smile curve. */
  child: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d={TOOTH_D} />
      <circle cx="9.7" cy="9.4" r=".65" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="9.4" r=".65" fill="currentColor" stroke="none" />
      <path d="M10 12.2c.6.6 1.3.9 2 .9s1.4-.3 2-.9" />
    </svg>
  ),

  /** Preventive — shield with a check. */
  shield: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M12 3 4.8 5.9v5.4c0 4.3 2.9 7.9 7.2 9.4 4.3-1.5 7.2-5.1 7.2-9.4V5.9Z" />
      <path d="m9.2 11.9 2 2.1 3.6-4" />
    </svg>
  ),

  /** Extraction — tooth being lifted clear. */
  extract: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M10.5 6.4c1.5-1.3 4-1.5 5.2.2 1.2 1.7.6 4.3.2 6.5-.4 2.2-.8 5-1.9 6.1-.9.9-1.8.2-2.2-1.6-.4-1.8-.8-3.2-1.5-3.2" />
      <path d="M10.3 14.4c-.6.1-1 1.3-1.4 3.1-.4 1.8-1.3 2.5-2.2 1.6" />
      <path d="M3.2 8.6 8 4.4M3.2 4.6l4.6 4.2" />
    </svg>
  ),

  /** Fillings — tooth with a restored cavity. */
  filling: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d={TOOTH_D} />
      <path d="M10 8.4h4l-.7 2.6h-2.6Z" fill="currentColor" fillOpacity=".18" />
    </svg>
  ),

  /** Dentures — full arch of teeth. */
  denture: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M3.5 9c0-2.5 3.8-4 8.5-4s8.5 1.5 8.5 4c0 5-3 10.5-8.5 10.5S3.5 14 3.5 9Z" />
      <path d="M6.2 8.6c1.8-.7 3.7-1 5.8-1s4 .3 5.8 1" />
      <path d="M9 8v3.4M12 7.6v3.8M15 8v3.4" />
    </svg>
  ),

  /** Emergency — alert within a rounded triangle. */
  alert: (p: IconProps) => (
    <svg viewBox="0 0 24 24" className={cn(base, p.className)} {...stroke}>
      <path d="M12 4.2c.6 0 1.1.3 1.4.9l6.4 11.5c.6 1.1-.2 2.4-1.4 2.4H5.6c-1.2 0-2-1.3-1.4-2.4l6.4-11.5c.3-.6.8-.9 1.4-.9Z" />
      <path d="M12 10v3.4" />
      <circle cx="12" cy="16.2" r=".8" fill="currentColor" stroke="none" />
    </svg>
  ),
} as const;

export type ServiceIconName = keyof typeof icons;

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name as ServiceIconName] ?? icons.tooth;
  return (
    <span className={cn("block", className)}>
      <Icon />
    </span>
  );
}
