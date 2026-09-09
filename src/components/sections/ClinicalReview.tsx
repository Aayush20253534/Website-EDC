import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/lib/doctors";
import { site } from "@/lib/site";

/**
 * Clinical review byline.
 *
 * Dental treatment pages are YMYL content. Google's quality raters are told
 * to look for who is responsible for medical information and what their
 * credentials are — and so, more importantly, do patients. This states it in
 * plain sight, matching the `reviewedBy` / `lastReviewed` markup.
 *
 * Renders nothing when `site.contentReviewedOn` is null, so the claim is
 * never made unless the practice has actually made it.
 */
export function ClinicalReview({ doctor }: { doctor: Doctor }) {
  if (!site.contentReviewedOn) return null;

  const reviewed = new Date(site.contentReviewedOn);
  const formatted = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(reviewed);

  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl border border-line bg-surface p-4 sm:p-5">
      <Link href={`/doctors/${doctor.slug}`} className="group flex items-center gap-3.5">
        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-sunk">
          <Image
            src={doctor.image}
            alt=""
            fill
            sizes="44px"
            className="object-cover object-top"
          />
        </span>
        <span className="text-sm leading-snug">
          <span className="block text-muted">Clinically reviewed by</span>
          <span className="block font-semibold text-cocoa group-hover:text-brick">
            {doctor.name}, {doctor.qualification}
          </span>
        </span>
      </Link>

      <span className="hidden h-8 w-px bg-line sm:block" aria-hidden />

      <p className="text-xs leading-snug text-muted">
        {doctor.role}
        <br />
        Last reviewed{" "}
        <time dateTime={site.contentReviewedOn} className="font-medium text-cocoa">
          {formatted}
        </time>
      </p>
    </div>
  );
}
