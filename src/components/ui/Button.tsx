import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * CTA buttons are brick #A9452F with white text (5.87:1). Never terracotta
 * with white — that pairing fails at 4.21:1 and is banned by the brand.
 */
const button = cva(
  [
    "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-sans font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-brick text-white shadow-[0_8px_24px_rgba(58,44,37,0.08)] hover:bg-brick-hover hover:shadow-[0_16px_40px_-8px_rgba(169,69,47,0.45)] hover:-translate-y-0.5 active:bg-brick-press active:translate-y-0",
        outline:
          "border border-line-strong text-cocoa hover:border-brick hover:bg-tint hover:text-brick",
        ghost: "text-brick hover:bg-tint",
        onDark:
          "bg-ivory text-cocoa hover:bg-blush hover:text-espresso hover:-translate-y-0.5",
        outlineDark:
          "border border-ondark-muted/35 text-ivory hover:border-blush hover:text-blush hover:bg-white/5",
        /**
         * WhatsApp used the brand's success green, which read as a foreign
         * colour dropped into a warm earth palette. It is now espresso on
         * light grounds — clearly secondary to the brick primary, and still
         * unmistakably a separate action.
         */
        whatsapp:
          "bg-espresso text-ivory hover:bg-cocoa hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(36,27,22,0.4)]",
        /** Espresso would vanish on the dark bands, so blush carries it there. */
        whatsappOnDark:
          "bg-blush text-espresso hover:bg-[#EFC4BC] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(227,175,166,0.35)]",
      },
      size: {
        sm: "h-10 rounded-full px-5 text-[0.8125rem]",
        md: "h-12 rounded-full px-7 text-[0.875rem]",
        lg: "h-14 rounded-full px-8 text-[0.9375rem]",
        xl: "h-16 rounded-full px-10 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof button> & {
  className?: string;
  children: React.ReactNode;
};

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(button({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  href,
  className,
  variant,
  size,
  external,
  children,
  ...props
}: ButtonBaseProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(button({ variant, size }), className);

  // tel: and mailto: hand off to another app. Opening them in a new tab
  // leaves a blank window behind on mobile, so they stay in-place.
  const isHandoff = /^(tel:|mailto:|sms:)/.test(href);

  if (external || isHandoff) {
    return (
      <a
        href={href}
        {...(isHandoff ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

/**
 * Text link with an arrow that slides on hover. Used for "read more" style
 * affordances where a full button would be too heavy.
 */
export function ArrowLink({
  href,
  children,
  className,
  tone = "brick",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "brick" | "ivory";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/al inline-flex items-center gap-2 font-sans text-sm font-semibold transition-colors",
        tone === "brick" ? "text-brick hover:text-brick-hover" : "text-ivory hover:text-blush",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/al:origin-left group-hover/al:scale-x-100" />
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden
        className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/al:translate-x-1"
      >
        <path
          d="M1 7h11M8 3l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
