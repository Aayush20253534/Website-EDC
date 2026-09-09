import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ClinicReels } from "@/components/home/ClinicReels";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Clinic Gallery — Inside Our Prayagraj Clinic",
  description:
    "Photos and video from inside Eclectic Dental Care, Civil Lines, Prayagraj — treatment rooms, the iTero scanner, Invisalign planning and our sterilisation setup.",
  alternates: { canonical: "/gallery" },
};

const trail = [
  { name: "Home", url: "/" },
  { name: "Clinic", url: "/gallery" },
];

const photos = [
  {
    src: "/images/clinic/reception.webp",
    alt: "Reception and waiting area at Eclectic Dental Care, Civil Lines, Prayagraj",
    caption: "Reception & waiting",
    span: "sm:col-span-2 sm:row-span-2",
    ratio: "aspect-[16/10] sm:aspect-square",
  },
  {
    src: "/images/clinic/dr-umang-invisalign-provider.webp",
    alt: "Dr. Umang Malviya beside the Invisalign Provider signage and iTero Element scanner",
    caption: "Certified Invisalign Provider",
    span: "",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/clinic/invisalign-clincheck.webp",
    alt: "Invisalign ClinCheck treatment plan on screen beneath the Invisalign wall sign",
    caption: "ClinCheck planning",
    span: "",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/clinic/operatory-wide.webp",
    alt: "Treatment room with dental chairs at Eclectic Dental Care, Prayagraj",
    caption: "Treatment room",
    span: "",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/clinic/itero-intraoral-scan.webp",
    alt: "iTero Element intraoral scanner displaying a 3D scan of a patient's teeth",
    caption: "iTero digital scanning",
    span: "sm:col-span-2",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/clinic/operatory-chairs.webp",
    alt: "Second operatory with dental chair and equipment at Eclectic Dental Care",
    caption: "Second operatory",
    span: "",
    ratio: "aspect-[3/4]",
  },
];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "ImageGallery",
                url: "/gallery",
                name: "Inside Eclectic Dental Care, Civil Lines, Prayagraj",
                description: metadata.description as string,
              }),
              breadcrumbSchema(trail),
            ),
          ),
        }}
      />

      <PageHero
        eyebrow="Inside the clinic"
        title={["The room you", "will actually sit in."]}
        lede="Every photograph and clip here was taken at our clinic on Sardar Patel Marg. No stock photography, no staged models, no other practice's interiors."
        trail={trail}
      />

      <section className="section bg-ivory pt-0 md:pt-0">
        <div className="shell">
          <Stagger className="grid auto-rows-auto gap-4 sm:grid-cols-3">
            {photos.map((p) => (
              <StaggerItem key={p.src} className={p.span}>
                <figure className="group relative h-full">
                  <ParallaxImage
                    src={p.src}
                    alt={p.alt}
                    sizes="(max-width: 640px) 92vw, 33vw"
                    strength={0.06}
                    className={`${p.ratio} h-full w-full rounded-2xl border border-line`}
                    imageClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <figcaption className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-line/60 bg-surface/92 px-3.5 py-1.5 backdrop-blur-sm">
                    <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-cocoa">
                      {p.caption}
                    </span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
              Instruments are cleaned, packed and autoclaved between every
              patient, and single-use items are never reused. If you would like
              to see the sterilisation area when you visit, just ask — we are
              happy to show you.
            </p>
          </Reveal>
        </div>
      </section>

      <ClinicReels />

      <CTABand
        title={["See it for", "yourself."]}
        body="Drop in during opening hours, or book a consultation and we will show you around."
      />
    </>
  );
}
