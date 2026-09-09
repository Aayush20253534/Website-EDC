import { getService, services } from "@/lib/services";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Eclectic Dental Care, Prayagraj";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Next 16: `params` is a Promise in image generation functions.
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  return renderOgCard({
    eyebrow: service ? `${service.category} · Prayagraj` : "Prayagraj",
    title: service?.heading ?? "Dental care in Prayagraj",
    subtitle: service?.summary,
  });
}
