import { doctors, getDoctor } from "@/lib/doctors";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Eclectic Dental Care, Prayagraj";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);

  return renderOgCard({
    eyebrow: doctor?.qualification ?? "Our doctors",
    title: doctor?.name ?? "Our specialists",
    subtitle: doctor?.role,
  });
}
