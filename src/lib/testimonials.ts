/**
 * PATIENT REVIEWS
 * ───────────────────────────────────────────────────────────────
 * ⚠️  THIS FILE IS INTENTIONALLY EMPTY OF REVIEW CONTENT.
 *
 * Nothing here is invented. Publishing fabricated reviews — or a made-up
 * star rating in AggregateRating schema — is a policy violation that gets
 * sites manually penalised by Google, and it is the fastest way to lose the
 * local pack ranking this whole build is aiming at.
 *
 * TO GO LIVE WITH REVIEWS:
 *   1. Open your Google Business Profile → Reviews.
 *   2. Copy 4–6 real reviews into `reviews` below (name, text, and the
 *      treatment if you know it).
 *   3. Set `aggregate` to your ACTUAL rating and review count.
 *   4. Set `published: true`.
 *
 * While `published` is false the site shows a credential-led trust section
 * instead, and emits NO review schema. Both are correct and safe.
 */

export type Review = {
  name: string;
  /** Locality only — never a full address. */
  location?: string;
  /** Verbatim review text. Do not edit patient wording. */
  text: string;
  /** 1–5, as actually given. */
  rating: number;
  /** Optional: treatment received, for context. */
  treatment?: string;
  /** ISO date the review was left, if known. */
  date?: string;
};

export const published = false;

/** Real rating + count from Google Business Profile. Leave null until known. */
export const aggregate: { rating: number; count: number } | null = null;

export const reviews: Review[] = [
  // Paste real Google reviews here. Example shape:
  // {
  //   name: "Priya S.",
  //   location: "Civil Lines, Prayagraj",
  //   text: "…",
  //   rating: 5,
  //   treatment: "Invisalign",
  //   date: "2026-04-12",
  // },
];

export const hasReviews = published && reviews.length > 0;
