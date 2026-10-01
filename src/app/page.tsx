import type { Metadata } from "next";
import { Hero, TrustStrip } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Specialisms } from "@/components/home/Specialisms";
import { Doctors } from "@/components/home/Doctors";
import { WhyUs } from "@/components/home/WhyUs";
import { ClinicReels } from "@/components/home/ClinicReels";
import { FirstVisit } from "@/components/home/FirstVisit";
import { Trust } from "@/components/home/Trust";
import { Location } from "@/components/home/Location";
import { FaqSection } from "@/components/sections/FaqSection";
import { clinicFaqs } from "@/lib/faqs";
import { faqSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const homeDescription =
  "Dentist in Prayagraj (Allahabad) at Eclectic Dental Care, Civil Lines. MDS specialists for braces, Invisalign, root canals, implants, kids dentistry and emergency care.";

export const metadata: Metadata = {
  title: { absolute: "Dentist in Prayagraj | Eclectic Dental Care" },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: "Dentist in Prayagraj | Eclectic Dental Care",
    description: homeDescription,
    images: [
      {
        url: "/images/clinic/reception.webp",
        width: 1200,
        height: 800,
        alt: "Eclectic Dental Care clinic in Civil Lines, Prayagraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentist in Prayagraj | Eclectic Dental Care",
    description: homeDescription,
    images: ["/images/clinic/reception.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph(
              webPageSchema({
                type: "WebPage",
                url: "/",
                name: "Dentist in Prayagraj | Eclectic Dental Care",
                description: homeDescription,
              }),
              faqSchema(clinicFaqs),
            ),
          ),
        }}
      />

      <Hero />
      <TrustStrip />
      {/* The specialists lead — they are the differentiator, and the hero no
          longer carries their portraits. */}
      <Doctors />
      <Services />
      <Specialisms />
      <WhyUs />
      <ClinicReels />
      <FirstVisit />
      <Trust />
      <FaqSection
        index="08"
        eyebrow="Common questions"
        title={["Questions people ask", "before booking."]}
        lede="Timings, location, costs and who you will see — answered plainly."
        items={clinicFaqs}
      />
      <Location />
    </>
  );
}
