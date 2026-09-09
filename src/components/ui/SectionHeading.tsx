import { MaskText, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * Section header. Editorial pattern: numbered eyebrow, serif display line
 * masked in from below, optional lede. Terracotta appears exactly once.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  className,
  action,
}: {
  index?: string;
  eyebrow: string;
  /** Split across lines for the mask reveal. */
  title: string[];
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        centered && "items-center text-center",
        !centered && action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn(centered ? "max-w-2xl" : "max-w-2xl")}>
        <Reveal>
          <p
            className={cn(
              "flex items-center gap-3",
              centered && "justify-center",
            )}
          >
            {index && (
              <span
                className={cn(
                  "font-display text-sm lining-nums tabular-nums",
                  tone === "dark" ? "text-blush" : "text-terracotta",
                )}
              >
                {index}
              </span>
            )}
            <span
              className={cn("h-px w-8", tone === "dark" ? "bg-blush/50" : "bg-terracotta")}
              aria-hidden
            />
            <span className={cn("eyebrow", tone === "dark" ? "text-blush" : "text-brick")}>
              {eyebrow}
            </span>
          </p>
        </Reveal>

        <h2
          className={cn(
            "display-lg mt-6",
            tone === "dark" ? "text-ivory" : "text-cocoa",
          )}
        >
          <MaskText lines={title} />
        </h2>

        {lede && (
          <Reveal delay={0.12}>
            <p
              className={cn(
                "lede mt-6",
                tone === "dark" && "text-ondark-muted",
              )}
            >
              {lede}
            </p>
          </Reveal>
        )}
      </div>

      {action && (
        <Reveal delay={0.2} className={cn(centered && "mt-2")}>
          {action}
        </Reveal>
      )}
    </div>
  );
}
