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
import { faqSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Dental Clinic in Prayagraj | Eclectic Dental Care",
  description:
    "Dental clinic in Civil Lines, Prayagraj. Two MDS specialists — braces, Invisalign, root canals, implants and smile makeovers. Open 7 days.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph(faqSchema(clinicFaqs))),
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
